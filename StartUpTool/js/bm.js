angular.module('bmc', ['ngStorage']);

function MainController($scope, $localStorage) {
  $scope.text = '';
  $scope.bmcontainer = "key-partners";

  $scope.$storage = $localStorage.$default({
     items : [{container: "key-partners", data: []},
        {container: "key-activities", data: []},
        {container: "key-resources", data: []},
        {container: "value-proposition", data: []},
        {container: "customer-relationships", data: []},
        {container: "channels", data: []},
        {container: "customer-segments", data: []},
        {container: "cost-structure", data: []},
        {container: "revenue-streams", data: []}]
    });

  $scope.init = function () {
    if (localStorage.getItem("bm")) {
        $scope.items = JSON.parse(localStorage.getItem("bm"));
    }
    else {
    var bm = new Array();
        bm = [{container: "key-partners", data: []},
        {container: "key-activities", data: []},
        {container: "key-resources", data: []},
        {container: "value-proposition", data: []},
        {container: "customer-relationships", data: []},
        {container: "channels", data: []},
        {container: "customer-segments", data: []},
        {container: "cost-structure", data: []},
        {container: "revenue-streams", data: []}];

        //Create the LocalStorate Item
        localStorage.setItem("bm", JSON.stringify(bm));
	}
  }

    //$scope.init();
	$scope.add = function () {
		angular.forEach($scope.$storage.items, function(item) {
			if (item.container == $scope.bmcontainer) item.data.push({text: $scope.text, status: false});
		});
	};

    $scope.remove = function (index, arrayIndex) {
        $scope.$storage.items[arrayIndex].data.splice(index, 1);
    }

    $scope.move = function () {

    }
}

