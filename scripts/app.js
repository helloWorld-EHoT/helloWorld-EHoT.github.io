'use strict';

var DynApp = angular.module("DynApp", []);

DynApp.controller("SuperCtrl", function($scope) {
  $scope.activeItem = {}; // refresh the active item
  $scope.showCommentInput = false; // hide comments input-field
  $scope.inputName = ""; // clean input-field
  $scope.inputComment = ""; // clean input-field

  if (typeof window.localStorage["items"] !== "undefined") {
    $scope.items = JSON.parse(window.localStorage["items"]);
    var activeItemIndex = $scope.items.map(function(e) { return e.active; }).indexOf(true);
    $scope.activeItem = $scope.items[activeItemIndex];
    $scope.showCommentInput = $scope.items.length ? true : false;
  } else {
    $scope.items = [];
  }

  $scope.addItemName = function() {
    var text = $scope.inputName;
    $scope.items.push({
      id: $scope.items.length + 1,
      active: true,
      text: text,
      comments: []
    });
    window.localStorage['items'] = JSON.stringify($scope.items);
    $scope.inputName = ""; //clear the input after adding
    $scope.setActive($scope.items[$scope.items.length-1]);
  }

  $scope.deleteItem = function(item) {
    var activeItemIndex = $scope.items.map(function(e) { return item.id == e.id; }).indexOf(true);
    $scope.items.splice(activeItemIndex, 1);
    if ($scope.items.length) {
      $scope.setActive($scope.items[$scope.items.length-1]);
    } else {
      $scope.showCommentInput = false;
      $scope.activeItem = {};
    }
    window.localStorage['items'] = JSON.stringify($scope.items);
  }

  $scope.setActive = function(item) {
    $scope.activeItem = item;
    $scope.items.forEach(function(current, index) {
      if (item.id == current.id) {
        $scope.items[index].active = true;        
      } else {
        $scope.items[index].active = false;
      }     
    });
    $scope.activeItem.active = true;
    $scope.showCommentInput = true;
    var activeItemIndex = $scope.items.map(function(e) { return item.id == e.id; }).indexOf(true);
    window.localStorage['items'] = JSON.stringify($scope.items);
  }

  $scope.addNewComm = function(activeItem) {
    if ($scope.inputComment) {
      var commentText = $scope.inputComment;
      var activeItemIndex = $scope.items.map(function(e) { return activeItem.id == e.id; }).indexOf(true);
      $scope.items[activeItemIndex].comments.push(commentText);
      window.localStorage['items'] = JSON.stringify($scope.items);
      $scope.inputComment = "";
    }
  }
});
