app.controller('MainController', ['$scope', 'injuryList', function($scope, injuryList) {
  injuryList.success(function(data) {
    var formattedInjuries = [];
    var currInjury;
    for(var injury in data) {
      currInjury = data[injury];
      formattedInjuries.push({
        team: currInjury.Team,
        player: currInjury.Player,
        date: Date(currInjury["Date"]),
        type: currInjury.Type,
        note: currInjury.Note
      });
    }
    $scope.injuries = formattedInjuries;
    $scope.injuriesByTeam = groupBy($scope.injuries, "team");
    $scope.injuriesByBodyPart = groupBy($scope.injuries, "type");
    $scope.circleDiameter = function(count) {
      return count * 10;
    }
  })
  .error(function(err) {
    return err;
  });
}]);

function groupBy(injuries, criteria) {
  var groupedInjuries = {};
  var inj;
  for (var i = 0; i < injuries.length; i++) {
    inj = injuries[i];
    if (groupedInjuries[inj[criteria]]) {
      groupedInjuries[inj[criteria]]++;
    } else {
      groupedInjuries[inj[criteria]] = 1;
    }
  }
  return groupedInjuries;
}
