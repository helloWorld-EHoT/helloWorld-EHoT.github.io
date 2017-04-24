/// pre-loader

angular.element(document).ready(function() {
  setTimeout(function() {
    var preloader = document.getElementById('preloader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 1000);
});

////////////Calculate max value from input[type=date]
var dateNow;
(function() {
  var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }
  dateNow = [year, month, day].join('-');
})();

////// the Grid application logic

var testApp = angular.module('testApp', []);
// input data //
var inputData = [
  {
    name:       'Login',
    dataType:   'string',
    isRequired: true,
    editable:   false
  },
  {
    name:       'Gender',
    dataType:   'enum',
    isRequired: false,
    editable:   false,
    options:    ['', 'Male', 'Female']
  },
  {
    name:          'Age',
    dataType:      'calc',
    isRequired:    false,
    editable:      false,
    calculateFrom: 'Birth Date',
    calculate:     'calcAge'
  },
  {
    name:       'Birth Date',
    dataType:   'date',
    isRequired: false
  },
  {
    name:       'Time',
    dataType:   'time',
    isRequired: false,
    editable:   false
  },
  {
    name:       'Active',
    dataType:   'bool',
    isRequired: false,
    editable:   false
  },
  {
    name:       'Double',
    dataType:   'double',
    isRequired: false,
    editable:   false
  },
  {
    name:       'Data-Time',
    dataType:   'datetime',
    isRequired: false,
    editable:   false
  }
];

testApp.constant('dataTypes', [
  {
    name: 'string',
    type: 'text'
  },
  {
    name:    'int',
    type:    'text',
    min:     '0',
    step:    '1',
    pattern: '\d*'
  },
  {
    name:    'double',
    type:    'text',
    pattern: '/^[+-]?\d+(\.\d+)?$/'
  },
  {
    name: 'date',
    type: 'date'
  },
  {
    name:    'datetime',
    type:    'datetime-local'
  },
  {
    name: 'time',
    type: 'time'
  },
  {
    name: 'bool',
    type: 'checkbox'
  },
  {
    name: 'enum',
    type: 'select'
  },
  {
    name: 'calc',
    type: 'hidden'
  }
]);

testApp.constant('inputData', inputData);

testApp.controller('GridCtrl', function($scope, inputData, dataTypes) {
  'use strict';

  $scope.dateNow = window.dateNow;
  $scope.Users = [];
  $scope.userTemp = {};

/////////////////////////////// appoint Input Data ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
  function toVarName(name) {
    var temp = name.split(' ');
    temp.forEach(function(item, index) {
      if (index) {
        temp[index] = temp[index][0].toUpperCase() + temp[index].substr(1, temp[index].length).toLowerCase();
      } else {
        temp[index] = temp[index].toLowerCase();
      }
    });
    return temp.join('');
  }

  $scope.appointInputData = function(input, types) {
    var sortUpArr = []; // new array;

    var checkAvailability = function(value) {
      return (value ? value : '');
    }; // if value is defined;

    input.forEach(function(inputItem, inputIndex) {
      types.forEach(function(typesItem, typesIndex) {
        if (input[inputIndex].dataType === types[typesIndex].name) {
          sortUpArr[inputIndex] = {
            name:          input[inputIndex].name,
            varName:       toVarName(input[inputIndex].name),
            typeOfInput:   types[typesIndex].type,
            isRequired:    input[inputIndex].isRequired,
            editable:      checkAvailability(input[inputIndex].editable),
            options:       checkAvailability(input[inputIndex].options),
            pattern:       checkAvailability(input[inputIndex].pattern),
            calculateFrom: checkAvailability(input[inputIndex].calculateFrom),
            calculate:     checkAvailability(input[inputIndex].calculate)
          };
        }
      })
    });
    console.log(sortUpArr);
    return sortUpArr; // return new array;
  };

  $scope.theGrid = $scope.appointInputData(inputData, dataTypes); // start Appoint

/////////////////////////////// LOCAL STORAGE /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

///// Load from Local Storage /////
  if (typeof window.localStorage['Users'] !== 'undefined') {
    $scope.Users = JSON.parse(window.localStorage['Users']);
  } else {
    $scope.Users = [];
  }
///// update Local Storage /////
  $scope.refreshLocalStorage = function() {
    $scope.Users.forEach(function(item, index) {
      if ($scope.Users[index].name === '') {
        $scope.Users.splice(index, 1);
      }
    });

    window.localStorage['Users'] = JSON.stringify($scope.Users);
  };

/////////////////////////////// add new Row function /////////////////////////////////
  $scope.add = function() {
    var gridArr = $scope.theGrid;
    var tempKeys = [], tempValuesFrom = [], tempValues = [];
    gridArr.forEach(function(item, index) {
      if (tempKeys[index] === 'calculate') {
        tempValues[index] = item.calculate;
      } else if (tempKeys[index] === 'calculateFrom') {
        tempValuesFrom[index] = item.calculateFrom;
      } else {
        tempValues[index] = '';
      }
      tempKeys[index] = item.varName;
    });
    var tempObj = {};
    tempKeys.forEach(function(item, index) {
      if (tempValuesFrom[index]) {
        tempObj[tempKeys[index]] = tempValuesFrom[index];
      } else if (tempValues[index]) {
        tempObj[tempKeys[index]] = tempValues[index];
      } else {
        tempObj[tempKeys[index]] = '';
      }
    });
    $scope.Users.push(tempObj);
    console.log('users: ', $scope.Users);
    $scope.refreshLocalStorage(); ///////////////+/////////////////
  };
/////////////////////////////// edit function /////////////////////////////////
  $scope.edit = function(index) {
    // switch Edit Mode
    $scope.Users.forEach(function(user, ind) {
      if (user.editable) {
        $scope.cancel(ind);
      }
      $scope.Users[ind].editable = false; // Edit Mode Off
      $scope.Users[index].editable = true;
/////////////////////////////////
//       var typeDate, dateValue;
//       $scope.theGrid.forEach(function(type, i) {
//         if (type.typeOfInput === 'date') {
//           typeDate = type.varName;
//           dateValue = $scope.Users[index][typeDate];
//           console.log('typeDate: ', typeDate);
//           console.log('dateValue: ', dateValue);
//         }
//       });
//       var usersObj = $scope.Users[index];
//       for (var key in usersObj) {
//         if (key === typeDate) {
//           user[key] = $scope.checkDoB(dateValue);
//         }
//         // if (key) {
//         //   console.log('key', key);
//         //   console.log('keyVal', user[key]);
//         // }
//       }
/////////////////////////////////
    });

    $scope.userTemp = angular.copy($scope.Users[index]); // keep in mind
    $scope.userTemp.index = index; //Create a binding
    $scope.Users[index].editable = true; // Edit Mode On
  };
/////////////////////////////// cancel function /////////////////////////////////
  $scope.cancel = function(index) {
    var temp = $scope.userTemp;
    if (temp.index === index) {

      $scope.Users[index] = temp;
      $scope.Users[index].editable = false;

    }

  };
/////////////////////////////// delete function /////////////////////////////////
  $scope.delete = function(index) {
    $scope.Users.splice(index, 1);
    $scope.refreshLocalStorage(); ////////////////-////////////////
  };
/////////////////////////////// save function /////////////////////////////////
  $scope.save = function(index) {
    var calculateFuncName;
    var calculateFrom;
    var calculateTo;
    $scope.theGrid.forEach(function(item, i) {
      if (item.calculate !== '') {
        calculateFuncName = item.calculate;
        // console.log('calculateFuncName: ', calculateFuncName);
        calculateTo = toVarName(item.name);
        // console.log('calculateTo: ', calculateTo);
        if (item.calculateFrom !== '') {
          calculateFrom = toVarName(item.calculateFrom);
          // console.log('calculateFrom: ', calculateFrom);
        }
      }
    });
    // console.log($scope.Users[index][calculateFrom]);
    var calculateFunctionResult;
    var tempObj = $scope.Users[index];
    for (var key in tempObj) {
      var result = tempObj[calculateTo];
      if (key == calculateFrom) {
        calculateFrom = tempObj[key];
        calculateFunctionResult = eval(calculateFuncName)(calculateFrom, dateNow);
      }
      if (calculateFunctionResult || calculateFunctionResult === 0) {
        result = calculateFunctionResult;
        $scope.Users[index][calculateTo] = result;
      }
    }

    $scope.Users[index].editable = false;
    $scope.refreshLocalStorage(); ////////////////+////////////////
  };

  $scope.submitForm = function(index) {
////////////////+////////////////
      $scope.save(index);
////////////////+////////////////
  };

/////////////////////////////// parse Date Of Birth /////////////////////////////////
  $scope.checkDoB = function(dob) {
    if (!dob) {
      return $scope.toDoB(new Date());
    } else {
      return $scope.toDoB(dob);
    }
  };

  $scope.toDoB = function(date) {
    // var temp = date.toDateString();
    // var tempDate = temp.split(' ');
    // if (tempDate.length === 4) {
    //   return tempDate.join('-');
    // } else {
    var month = '' + (date.getMonth() + 1);
    var day = '' + date.getDate();
    var year = date.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
    //}
  };
/////////////////////////////// calculate Age /////////////////////////////////
  $scope.calcAge = function(dob, now) {
    var date = $scope.checkDoB(dob);
    var age;
    var n = now.split('-'), d = date.split('-');
    age = n[0] - d[2];
    var m = n[1] - d[1];
    if (m < 0 || (m === 0 && n[2] < d[2])) {
      age--;
    }
    return age;
  };
////////////////////////////////////////////////////////////////
  $scope.check = function(length, index) {
    if (length) {
      $scope.save(index);
    }
  };
////////////////////////////////////////////////////////////////
});

var calcAge = function(dob, now) {
  if (!dob) {
    return '-';
  }

  function toDoB(date) {
    var month = '' + (date.getMonth() + 1);
    var day = '' + date.getDate();
    var year = date.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  var date = toDoB(dob);
  var age;
  var n = now.split('-'), d = date.split('-');
  age = n[0] - d[0];
  var m = n[1] - d[1];
  if (m < 0 || (m === 0 && n[2] < d[2])) {
    age--;
  }
  console.log(age);
  return age;
};
