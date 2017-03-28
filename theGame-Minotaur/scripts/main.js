var minotaurus = angular.module("minotaurus", []);

minotaurus.controller("SetPlayersCtrl", function($scope) {
  $scope.availableColors = ["red", "green", "blue" , "yellow", "purple", "grey", "white", "black"];
  $scope.playersArray = [];
  $scope.minotaur = {
    name: "Minotaur",
    color: "minotaurColor",
    stepPosition: 465,
    endPosition: "",
    start: 465,
    finish: [0, 1, 2, 3],
    active: false
  };
  $scope.minotaurMoves;
  $scope.activeWall = "";
  $scope.showMap = false;
  $scope.mapCoors = [];
  $scope.newPlayer = "";
  $scope.gameStarted = false;
  $scope.modalDialog = false;
  $scope.theDiceValue = 1;
  $scope.theDiceColor;
  $scope.index = 1;
  $scope.turns;
  $scope.attempt = 0;
  $scope.infoMsg = 0;

  $scope.coors = [
  7,7,7,7,7,7,7,7,7,7,7,7,4,4,7,7,7,7,4,4,7,7,7,7,7,7,7,7,7,7,7,7,
  7,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,7,
  7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,
  7,0,0,0,0,0,7,7,7,0,0,7,7,7,7,0,0,7,7,7,7,0,0,7,7,7,0,0,0,0,0,7,
  7,0,0,4,0,0,7,0,0,0,0,7,0,0,0,0,0,0,0,0,7,0,0,0,0,7,0,0,4,0,0,7,
  7,0,0,4,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,4,0,0,7,
  7,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0,0,0,0,7,
  7,0,0,0,0,0,7,0,0,0,0,0,0,0,7,0,0,7,0,0,0,0,0,0,0,7,0,0,0,0,0,7,
  7,0,0,7,7,7,7,0,0,0,0,0,0,0,7,0,0,7,0,0,0,0,0,0,0,7,7,7,7,0,0,7,
  7,0,0,0,0,0,7,0,0,4,4,0,0,7,7,0,0,7,7,0,0,4,4,0,0,7,0,0,0,0,0,7,
  7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,
  7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,
  4,0,0,7,7,7,7,0,0,7,7,7,7,0,0,7,7,0,0,7,7,7,7,0,0,7,7,7,7,0,0,4,
  4,0,0,7,0,0,7,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,7,0,0,7,0,0,4,
  7,0,0,7,0,0,7,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,7,0,0,7,0,0,7,
  7,0,0,0,0,0,0,0,0,0,0,0,7,0,0,1,2,0,0,7,0,0,0,0,0,0,0,0,0,0,0,7,
  7,0,0,0,0,0,0,0,0,0,0,0,7,0,0,5,3,0,0,7,0,0,0,0,0,0,0,0,0,0,0,7,
  7,0,0,7,0,0,7,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,7,0,0,7,0,0,7,
  4,0,0,7,0,0,7,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,7,0,0,7,0,0,4,
  4,0,0,7,7,7,7,0,0,7,7,7,7,0,0,7,7,0,0,7,7,7,7,0,0,7,7,7,7,0,0,4,
  7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,
  7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,
  7,0,0,0,0,0,7,0,0,4,4,0,0,7,7,0,0,7,7,0,0,4,4,0,0,7,0,0,0,0,0,7,
  7,0,0,7,7,7,7,0,0,0,0,0,0,0,7,0,0,7,0,0,0,0,0,0,0,7,7,7,7,0,0,7,
  7,0,0,0,0,0,7,0,0,0,0,0,0,0,7,0,0,7,0,0,0,0,0,0,0,7,0,0,0,0,0,7,
  7,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0,0,0,0,7,
  7,0,0,4,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,4,0,0,7,
  7,0,0,4,0,0,7,0,0,0,0,7,0,0,0,0,0,0,0,0,7,0,0,0,0,7,0,0,4,0,0,7,
  7,0,0,0,0,0,7,7,7,0,0,7,7,7,7,0,0,7,7,7,7,0,0,7,7,7,0,0,0,0,0,7,
  7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,
  7,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,7,
  7,7,7,7,7,7,7,7,7,7,7,7,4,4,7,7,7,7,4,4,7,7,7,7,7,7,7,7,7,7,7,7,
  ];


  $scope.nextPrevColor = function(what) {
    if (what == "next") {
      $scope.index++;
    } else if (what == "prev") {
      $scope.index--;
    }
  }

  $scope.$watch("index", function(prevVal, nextVal) {
    if (nextVal == $scope.availableColors.length - 1) {
      $scope.index = 0;
    } else if (prevVal < 1) {
      $scope.index = $scope.availableColors.length - 1;
    } else {
      $scope.prevColor = $scope.availableColors[$scope.index - 1];
      $scope.thatColor = $scope.availableColors[$scope.index];
      $scope.nextColor = $scope.availableColors[$scope.index + 1];
    }
  });

  $scope.addNewPlayer = function(id) {
    var newPlayer = $scope.newPlayer;
    var playerColor = $scope.availableColors[$scope.index];
    var playerId =  $scope.playersArray.length + 1;
    var playerPosition, startPosition, finishPosition;

    if (playerId === 1) {
      startPosition = 34, finishPosition = 496;
    } else if (playerId === 2) {
      startPosition = 63, finishPosition = 497;
    } else if (playerId === 3) {
      startPosition = 991, finishPosition = 529;
    } else if (playerId === 4) {
      startPosition = 962, finishPosition = 528;
    }

    $scope.playersArray.push({
      id: playerId,
      name: newPlayer,
      color: $scope.availableColors[$scope.index],
      moves: "-",
      stepPosition: startPosition,
      endPosition: "",
      start: startPosition,
      finish: finishPosition,
      active: false
    });
    $scope.removeItem($scope.index);
    $scope.nextPrevColor("next");
    $scope.newPlayer = "";
  }

  $scope.removeItem = function(index){
    $scope.availableColors.splice(index, 1);
  }

  $scope.startGame = function() {
    $scope.gameStarted = true;
    $scope.infoMsg = 3;
    $scope.drawMap();
  }

  $scope.endGame = function() {
    $scope.gameStarted = false;
    $scope.modalDialog = true;
    console.log($scope.playersArray[$scope.activePlayer].name);
  }

  $scope.newGame = function() {
    location.reload();
    $scope.infoMsg = 0;
  }

  $scope.drawMap = function() {
    var emptyColor = "empty";
   $scope.showMap = true;
   $scope.hiddenClass = "hidden";
   var coors = $scope.coors;
   for (var i = 0; i < coors.length; i++) {
     if (coors[i] == 7) {
      $scope.mapCoors.push({
        id: $scope.mapCoors.length + 1,
        name: "wall",
        color: "wallcolor",
        drag: false,
        drop: false
      });
    } else if (coors[i] == 0) {
      $scope.mapCoors.push({
        id: $scope.mapCoors.length + 1,
        name: "ground",
        color: "groundColor",
        drag: false,
        drop: true
      });
    } else if (coors[i] == 4) {
      $scope.mapCoors.push({
        id: $scope.mapCoors.length + 1,
        name: "movWall",
        color: "movWallcolor",
        drag: true,
        drop: false,
        active: false
      });
    } else if (coors[i] == 1) {
      $scope.mapCoors.push({
        id: $scope.mapCoors.length + 1,
        startPosition: "34",
        finishPosition: "496",
        color: $scope.playersArray[0].color,
        drop: true
      });
    } else if (coors[i] == 2) {
      $scope.mapCoors.push({
        id: $scope.mapCoors.length + 1,
        startPosition: "63",
        finishPosition: "497",
        color: $scope.playersArray[1].color,
        drop: true
      });
    } else if (coors[i] == 3) {
      $scope.mapCoors.push({
        id: $scope.mapCoors.length + 1,
        startPosition: "962",
        finishPosition: "528",
        color: emptyColor,
        drop: true
      });
    } else if (coors[i] == 5) {
      $scope.mapCoors.push({
        id: $scope.mapCoors.length + 1,
        startPosition: "991",
        finishPosition: "529",
        color: emptyColor,
        drop: true
      });
    }
  }
  if ($scope.playersArray.length > 3) {
    $scope.mapCoors[528].color = $scope.playersArray[2].color;
    $scope.mapCoors[990].color = $scope.playersArray[2].color;
    $scope.mapCoors[527].color = $scope.playersArray[3].color;
    $scope.mapCoors[961].color = $scope.playersArray[3].color;
  } else if ($scope.playersArray.length > 2) {
    $scope.mapCoors[528].color = $scope.playersArray[2].color;
    $scope.mapCoors[990].color = $scope.playersArray[2].color;
  }
}

$scope.moveWall = function(place) {
  if ($scope.activeWall === "") {

    if ($scope.mapCoors[place].drag == true) {
      $scope.mapCoors[place].active == true;
      $scope.activeWall = $scope.mapCoors[place];
    } else if ($scope.mapCoors[place].drag == false) {
      console.log("select error!");
    }
  } else {
    if ($scope.mapCoors[place].drop == true) {
      var id = $scope.activeWall.id - 1;
      $scope.mapCoors[place].name = $scope.activeWall.name;
      $scope.mapCoors[place].color = $scope.activeWall.color;
      $scope.mapCoors[place].drag = true;
      $scope.mapCoors[place].drop = false;
      $scope.mapCoors[place].active = false;
      $scope.mapCoors[$scope.activeWall.id - 1].name = "ground";
      $scope.mapCoors[$scope.activeWall.id - 1].color = "groundColor";
      $scope.mapCoors[$scope.activeWall.id - 1].drag = false;
      $scope.mapCoors[$scope.activeWall.id - 1].drop = true;
      $scope.mapCoors[$scope.activeWall.id - 1].active = false;
    } else {
      console.log("drop error!");
    }
    $scope.activeWall = "";
  }
}

$scope.playerMove = function(event) {
  if ($scope.gameStarted === true) {
    if (event.keyCode == "38") {
      $scope.movePlayer(32, "-");
    } else if (event.keyCode == "40") {
      $scope.movePlayer(32, "+");
   } else if (event.keyCode == "37") {
    $scope.movePlayer(1, "-");
   } else if (event.keyCode == "39") {
    $scope.movePlayer(1, "+");
  } else if (event.keyCode == "32") {
    console.log("space");
    $scope.dropTheDice();
  } else {
    console.log(event.keyCode);
  }
}
}

$scope.movePlayer = function(step, vec) {
  var turns = $scope.turns;
  if (turns === "M") {
    $scope.minotaur.active = true;
    if ($scope.minotaurMoves < 1) {
      $scope.minotaurMoves = "";
    } else if ($scope.minotaurMoves > 0) {
      if (vec == "+") {
        var nextStep = $scope.minotaur.stepPosition + step;
      } else if (vec == "-") {
        var nextStep = $scope.minotaur.stepPosition - step;
      }
      if ($scope.mapCoors[nextStep - 1].drop === true) {
        $scope.minotaur.stepPosition = nextStep;
        $scope.minotaurMoves = $scope.minotaurMoves - 1;
        $scope.minotaur.moves = $scope.minotaurMoves;
      }
      if ($scope.minotaur.stepPosition == $scope.playersArray[0].stepPosition) {
        $scope.minotaur.stepPosition =  $scope.minotaur.start;
        $scope.minotaur.active = false;
        $scope.playersArray[0].stepPosition = $scope.playersArray[0].start;
        $scope.playersArray[$scope.activePlayer].active = false;
      } else if ($scope.minotaur.stepPosition == $scope.playersArray[1].stepPosition) {
        $scope.minotaur.stepPosition =  $scope.minotaur.start;
        $scope.minotaur.active = false;
        $scope.playersArray[1].stepPosition = $scope.playersArray[1].start;
        $scope.playersArray[$scope.activePlayer].active = false;
      } else if ($scope.minotaur.stepPosition == $scope.playersArray[2].stepPosition) {
        $scope.minotaur.stepPosition =  $scope.minotaur.start;
        $scope.minotaur.active = false;
        $scope.playersArray[2].stepPosition = $scope.playersArray[2].start;
        $scope.playersArray[$scope.activePlayer].active = false;
      } else if ($scope.minotaur.stepPosition == $scope.playersArray[3].stepPosition) {
        $scope.minotaur.stepPosition =  $scope.minotaur.start;
        $scope.minotaur.active = false;
        $scope.playersArray[3].stepPosition = $scope.playersArray[3].start;
        $scope.playersArray[$scope.activePlayer].active = false;
      }
    }
  } else {
    $scope.minotaur.active = false;
    if ($scope.turns < 1) {
      $scope.playersArray[$scope.activePlayer].moves = "-";
    } else if ($scope.turns > 0) {
      if (vec == "+") {
        var nextStep = $scope.playersArray[$scope.activePlayer].stepPosition + step;
      } else if (vec == "-") {
        var nextStep = $scope.playersArray[$scope.activePlayer].stepPosition - step;
      }

      if ($scope.mapCoors[nextStep - 1].drop === true) {
        $scope.playersArray[$scope.activePlayer].stepPosition = nextStep;
        $scope.turns = $scope.turns - 1;
        $scope.playersArray[$scope.activePlayer].moves = $scope.turns;
      }
      if ($scope.playersArray[$scope.activePlayer].stepPosition == $scope.playersArray[$scope.activePlayer].finish) {
        $scope.endGame($scope.activePlayer.name);
      }
    }
  }
}

$scope.dropTheDice = function() {

  $scope.minotaurMoves = 0;
  $scope.theDiceValue = Math.floor(Math.random() * 7);
  if ($scope.theDiceValue == 0) {
    $scope.dropTheDice();
  } else if ($scope.theDiceValue == 3) {
    $scope.turns = $scope.theDiceValue;
    $scope.infoMsg = 3;
    $scope.nextPlayer();
    $scope.minotaur.active = false;
  } else if ($scope.theDiceValue == 4) {
    $scope.turns = $scope.theDiceValue;
    $scope.infoMsg = 3;
    $scope.nextPlayer();
    $scope.minotaur.active = false;
  } else if ($scope.theDiceValue == 5) {
    $scope.turns = $scope.theDiceValue;
    $scope.infoMsg = 3;
    $scope.nextPlayer();
    $scope.minotaur.active = false;
  } else if ($scope.theDiceValue == 6) {
    $scope.turns = $scope.theDiceValue;
    $scope.infoMsg = 3;
    $scope.nextPlayer();
    $scope.minotaur.active = false;
  } else if ($scope.theDiceValue == 1) {
    $scope.turns = "W";
    $scope.nextPlayer();
    $scope.infoMsg = 1;
    $scope.minotaur.active = false;
  } else if ($scope.theDiceValue == 2) {
    $scope.turns = "M";
    $scope.minotaurMoves = 9;
    $scope.infoMsg = 2;
    $scope.nextPlayer();
  }
  console.log($scope.playersArray);
}

$scope.nextPlayer = function() {
  var attempt = $scope.attempt;
  var players = $scope.playersArray.length;
  $scope.playersArray[attempt].moves = $scope.turns;
  if (players == 2) {
    switch (attempt) {
      case 0:
      $scope.theDiceColor = $scope.playersArray[0].color;
      $scope.playersArray[1].moves = "-";
      $scope.playersArray[1].active = false;
      $scope.playersArray[0].active = true;
      $scope.activePlayer = attempt;
      $scope.attempt = 1;
      break;
      case 1:
      $scope.theDiceColor = $scope.playersArray[1].color;
      $scope.playersArray[0].moves = "-";
      $scope.playersArray[0].active = false;
      $scope.playersArray[1].active = true;
      $scope.activePlayer = attempt;
      $scope.attempt = 0;
      break;
      default:
      $scope.theDiceColor = "";
    }
  } else if (players == 3) {
   switch (attempt) {
    case 0:
    $scope.theDiceColor = $scope.playersArray[0].color;
    $scope.playersArray[1].moves = "-";
    $scope.playersArray[2].moves = "-";
    $scope.playersArray[0].active = true;
    $scope.playersArray[1].active = false;
    $scope.playersArray[2].active = false;
    $scope.activePlayer = attempt;
    $scope.attempt = 1;
    break;
    case 1:
    $scope.theDiceColor = $scope.playersArray[1].color;
    $scope.playersArray[0].moves = "-";
    $scope.playersArray[2].moves = "-";
    $scope.playersArray[0].active = false;
    $scope.playersArray[1].active = true;
    $scope.playersArray[2].active = false;
    $scope.activePlayer = attempt;
    $scope.attempt = 2;
    break;
    case 2:
    $scope.theDiceColor = $scope.playersArray[2].color;
    $scope.playersArray[0].moves = "-";
    $scope.playersArray[1].moves = "-";
    $scope.playersArray[0].active = false;
    $scope.playersArray[1].active = false;
    $scope.playersArray[2].active = true;
    $scope.activePlayer = attempt;
    $scope.attempt = 0;
    break;
    default:
    $scope.theDiceColor = "";
  }
} else if (players == 4) {
 switch (attempt) {
  case 0:
  $scope.theDiceColor = $scope.playersArray[0].color;
  $scope.playersArray[1].moves = "-";
  $scope.playersArray[2].moves = "-";
  $scope.playersArray[3].moves = "-";
  $scope.playersArray[0].active = true;
  $scope.playersArray[1].active = false;
  $scope.playersArray[2].active = false;
  $scope.playersArray[3].active = false;
  $scope.activePlayer = attempt;
  $scope.attempt = 1;
  break;
  case 1:
  $scope.theDiceColor = $scope.playersArray[1].color;
  $scope.playersArray[0].moves = "-";
  $scope.playersArray[2].moves = "-";
  $scope.playersArray[3].moves = "-";
  $scope.playersArray[0].active = false;
  $scope.playersArray[1].active = true;
  $scope.playersArray[2].active = false;
  $scope.playersArray[3].active = false;
  $scope.activePlayer = attempt;
  $scope.attempt = 2;
  break;
  case 2:
  $scope.theDiceColor = $scope.playersArray[2].color;
  $scope.playersArray[0].moves = "-";
  $scope.playersArray[1].moves = "-";
  $scope.playersArray[3].moves = "-";
  $scope.playersArray[0].active = false;
  $scope.playersArray[1].active = false;
  $scope.playersArray[2].active = true;
  $scope.playersArray[3].active = false;
  $scope.activePlayer = attempt;
  $scope.attempt = 3;
  break;
  case 3:
  $scope.theDiceColor = $scope.playersArray[3].color;
  $scope.playersArray[0].moves = "-";
  $scope.playersArray[1].moves = "-";
  $scope.playersArray[2].moves = "-";
  $scope.playersArray[0].active = false;
  $scope.playersArray[1].active = false;
  $scope.playersArray[2].active = false;
  $scope.playersArray[3].active = true;
  $scope.activePlayer = attempt;
  $scope.attempt = 0;
  break;
  default:
  $scope.theDiceColor = "";
}
}
}
});
