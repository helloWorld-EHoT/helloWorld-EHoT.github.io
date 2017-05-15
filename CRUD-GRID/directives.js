testApplication.directive('myTable', function() {
  return {
    restrict:    'E',
    templateUrl: 'views/myGridTable.tpl.html',
    scope:       {
      fields: '=fields',
      list:   '=list'
    },
    transclude:  true,
    controller:  ['$scope', function MyGridTableController($scope) {

      $scope.itemToEdit = {};
      $scope.emptyObject = {};

      // TODO: check if we have fields and list arrays

      function checkForArrays() {
        if (!$scope.fields) {
          console.error('Fields Array is missing!');
        }
        if (!$scope.list) {
          console.error('Data Array is missing!');
        }
      }

      // TODO: check fields items for validity (necessary fields in field item, type in (dataTypes) etc)


      // TODO : check if list items are valid for fields items

      function initItem() {
        $scope.fields.forEach(function(item, index) {
          $scope.emptyObject[item.name] = '';
        });
        $scope.itemToEdit = angular.copy($scope.emptyObject);
      }

      function calculateFunc(list, itemIndex) {
        var result;
        if (itemIndex !== null) {
          $scope.fields.forEach(function(item, index) {
            if (item.calculateFrom) {
              for (var key in $scope.list[itemIndex]) {
                if (key === item.calculateFrom && list[key] !== null && list[key] !== "") {
                  result = eval(item.calculate)(list[key]);
                  if (result === NaN) {
                    result = '';
                  }
                }
              }
              list[item.name] = result;
            }
          });
        } else if (itemIndex === null) {
          $scope.fields.forEach(function(item, index) {
            if (item.calculateFrom) {
              for (var key in $scope.itemToEdit) {
                if (key === item.calculateFrom) {
                  if ($scope.itemToEdit[key] && $scope.itemToEdit[key] !== null && $scope.itemToEdit[key] !== "") {
                    result = eval(item.calculate)($scope.itemToEdit[key]);
                  } else {
                    return result = '';
                  }
                }
              }
              list[item.name] = result;
            }
          });
        }
      }

      $scope.editMode = false;
      $scope.deleteMode = false;

/////////////////////////////// LOCAL STORAGE /////////////////////////////////////
      ///// update Local Storage /////
      $scope.updateLocalStorage = function() {
        $scope.list.forEach(function(item, index) {
          if ($scope.list[index].name === '') {
            $scope.list.splice(index, 1);
          }
        });

        window.localStorage['list'] = JSON.stringify($scope.list);
      };

      ///// Load from Local Storage /////
      function initData() {
        var tempList;

        if (typeof window.localStorage['list'] !== 'undefined') {
          tempList = JSON.parse(window.localStorage['list']);
          findDate(tempList);
          $scope.list = tempList;
          $scope.list.forEach(function(item, index) {
            calculateFunc(item, index);
          });
          $scope.$apply();
        } else if ($scope.list) {
          tempList = $scope.list;
          findDate(tempList);
          $scope.list = tempList;
          $scope.list.forEach(function(item, index) {
            calculateFunc(item, index);
          });
          $scope.list = tempList;
          $scope.$apply();
        } else {
          $scope.list = [];
          $scope.$apply();
        }
        //$scope.getHttpResponse();
        //$scope.updateLocalStorage();
      }

///////////////////////////////////////////////////////////////////////////////////

      $scope.toggleModal = function(index) {
        $scope.editMode = !$scope.editMode;
        if ($scope.editMode) {
          if (index === null) {
            $scope.myForm.$setPristine();
            $scope.itemToEdit = angular.copy($scope.emptyObject);
            $scope.itemToEdit.index = null;
            $scope.modalHeader = false;
            $scope.deleteMode = false;
          } else {
            $scope.itemToEdit = angular.copy($scope.list[index]);
            $scope.itemToEdit.index = index;
            $scope.modalHeader = true;
          }
        }

      };

      ///// DATE /////

      function findDate(list) {
        $scope.fields.forEach(function(it, ind) {
          switch (it.dataType) {
            case 'date':
              Array.isArray(list) ? compare(it.name) : simpleCompare(it.name);
              break;
            case 'dateTime':
              Array.isArray(list) ? compare(it.name) : simpleCompare(it.name);
              break;
            case 'time':
              Array.isArray(list) ? compare(it.name) : simpleCompare(it.name);
              break;
          }
        });
        function compare(name) {
          list.forEach(function(item, index) {
            for (var key in item) {
              if (key === name) {
                if (typeof item[key] === 'string') {
                  item[key] = new Date(item[key]);
                }
              }
            }
          });
          return list;
        }

        function simpleCompare(name) {
          for (var key in list) {
            if (key === name) {
              if (list[key]) {
                list[key] = new Date(list[key]);
              }
            }
          }
        }
      }

      ///// SAVE /////
      $scope.save = function() {

        if ($scope.itemToEdit.index === null) {
          delete $scope.itemToEdit.index;
          findDate($scope.itemToEdit);
          calculateFunc($scope.itemToEdit, null);
          $scope.list.push($scope.itemToEdit);
        } else {
          console.warn($scope.itemToEdit);
          findDate($scope.itemToEdit);
          calculateFunc($scope.itemToEdit, $scope.itemToEdit.index);
          $scope.list[$scope.itemToEdit.index] = $scope.itemToEdit;
          delete $scope.itemToEdit.index;
        }
        $scope.editMode = false;
        $scope.itemToEdit = angular.copy($scope.emptyObject);
        $scope.updateLocalStorage();
      };

      ///// DELETE /////
      $scope.ask = function(index) {
        if (index === null) {
          $scope.deleteMode = false;
        } else {
          $scope.deleteMode = index + 1;
        }
      };

      $scope.delete = function() {
        $scope.list.splice($scope.deleteMode - 1, 1);
        $scope.deleteMode = false;
        $scope.updateLocalStorage();
      };

      ///// RUN APP INIT/////
      angular.element(document).ready(function() {
        checkForArrays();
        initItem();
        initData();
        var preloader = document.getElementById('preloader');
        if (!preloader.classList.contains('done')) {
          preloader.classList.add('done');
        }
      });
    }]
  };
}).directive('myTableCell', function() {
  return {
    restrict:    'E',
    templateUrl: 'views/myGridTableCell.tpl.html',
    scope:       {
      type:  '=type',
      value: '=value'
    },
    transclude:  true,
    controller:  ['$scope', function MyGridTableCellController($scope) {

    }]
  };
}).directive('myTableInput', function() {
  return {
    restrict:    'E',
    templateUrl: 'views/myGridTableInput.tpl.html',
    scope:       {
      field: '=field',
      item:  '=item'
    },
    transclude:  true,
    controller:  ['$scope', function MyGridTableInputController($scope) {
      $scope.showPassword = false;
      $scope.showHidePassword = function() {
        $scope.showPassword = !$scope.showPassword;
      };
    }]
  };
}).filter('gridDateFormat', function gridDateFormat($filter) {
  return function(text) {
    var tempDate;
    if (Object.prototype.toString.call(text) === "[object Date]") {
      if (isNaN(text.getDate()) || text === "" || text === null) {
        console.log('date is not defined');
      } else if (typeof text === 'string' && text !== "") {
        tempDate = new Date(text.replace(/-/g, "/"));
        return $filter('date')(tempDate, "dd.MM.yyyy");
      } else {
        tempDate = new Date(text);
        return $filter('date')(tempDate, "dd.MM.yyyy");
      }
    }

  }
});
