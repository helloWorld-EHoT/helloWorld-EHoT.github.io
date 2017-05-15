var testApplication = angular.module('testApplication', []);

testApplication.controller('TestController', function($scope, $http) {

  /////////////////// CLEAR LOCAL STORAGE BUTTON ////////////////////////
  $scope.clearLocalStorage = function() {
    window.localStorage.clear();
  };

  /////////////////////////////// LOG /////////////////////////////////////
  $scope.logConsole = function(item, name) {
    console.info(name + "=> ", item);
  };

  $http.get("json/dataFormat.json")
      .then(function(response) {
        $scope.fields = response.data;
        console.log('fields-response:', $scope.fields);
      });
  $scope.loadDataExample = function() {
    $http.get("json/inputData.json")
        .then(function(response) {
          $scope.list = response.data;
          console.log('list-response:', $scope.list);
        });
  }


});

/////////////////////////////// calculate Age /////////////////////////////////
var calcAge = function(dob) {
  var date = transformDate(dob);
  var age, now = transformDate(new Date());
  var n = now.split('-'), d = date.split('-');
  age = n[0] - d[0];
  var m = n[1] - d[1];
  if (m < 0 || (m === 0 && n[2] < d[2])) {
    age--;
  }
  return age;
};

function transformDate(date) {
  var month = '' + (date.getMonth() + 1);
  var day = '' + date.getDate();
  var year = date.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
}
