/// pre-loader

angular.element(document).ready(function() {
  setTimeout(function() {
    var preloader = document.getElementById("preloader");
    if (!preloader.classList.contains("done")) {
      preloader.classList.add("done");
    }
  }, 1000);
});

////////////Calculate max value from input[type=date]
var dateNow, visdateNow;
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
  visdateNow = [day, month, year].join('-');
})();

////// the Grid application logic

var testApp = angular.module('testApp', []);

testApp.constant("inputDataHeader", [
  {
    name:       "Login",
    dataType:   "text",
    isRequired: true
  },
  {
    name:       "Birth Date",
    dataType:   "date",
    isRequired: false
  },
  {
    name:     "Age",
    dataType: "number"
  }
]);

testApp.controller('GridCtrl', function($scope, inputDataHeader) {
      'use strict';
      $scope.headerName = inputDataHeader;
      $scope.dateNow = window.dateNow;
      $scope.Users = [];
      $scope.userTemp = {};
/////////////////////////////// Local Storage /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

      if (typeof window.localStorage["Users"] !== "undefined") {
        $scope.Users = JSON.parse(window.localStorage["Users"]);
      } else {
        $scope.Users = [];
      }

      $scope.refreshLocalStorage = function() {
        var i = $scope.Users.length - 1;
        for (i; i > -1; i--) {
          if ($scope.Users[i].name === "") {
            $scope.Users.splice(i, 1);
          }
        }

        window.localStorage['Users'] = JSON.stringify($scope.Users);
      };

/////////////////////////////// add function /////////////////////////////////
      $scope.add = function() {
        $scope.refreshLocalStorage(); ////////////////////////////////
        $scope.Users.push({
          name:         "",
          birthDate:    "",
          visBirthDate: "",
          age:          "-",
          editable:     true
        });
      };
/////////////////////////////// edit function /////////////////////////////////
      $scope.edit = function(index) {
        $scope.userTemp = $scope.Users[index];
        $scope.userTemp.index = index;
        $scope.userTemp.editable = true;
      };
/////////////////////////////// delete function /////////////////////////////////
      $scope.delete = function(index) {
        $scope.Users.splice(index, 1);
        $scope.refreshLocalStorage(); ////////////////////////////////
      };
/////////////////////////////// save function /////////////////////////////////
      $scope.save = function(index) {
        var bD = $scope.checkDoB($scope.Users[index].birthDate);
        var age = $scope.calcAge(bD, dateNow);
        $scope.Users[index].visBirthDate = bD;
        $scope.Users[index].age = age;
        $scope.Users[index].editable = false;
        $scope.refreshLocalStorage(); ////////////////////////////////
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
        var month = '' + (date.getMonth() + 1);
        var day = '' + date.getDate();
        var year = date.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [day, month, year].join('-');
      };
/////////////////////////////// calculate Age /////////////////////////////////
      $scope.calcAge = function(dob, now) {
        var age;
        var n = now.split("-"), d = dob.split("-");
        age = n[0] - d[2];
        var m = n[1] - d[1];
        if (m < 0 || (m === 0 && n[2] < d[2])) {
          age--;
        }
        return age;
      };
////////////////////////////////////////////////////////////////
      $scope.check = function(value, index) {
        if (value) {
          $scope.save(index);
        }
      };
    }
);
