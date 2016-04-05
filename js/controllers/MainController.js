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
  });
}]);
