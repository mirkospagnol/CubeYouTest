angular.module('searchInterest').directive('searchInterestBox', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
            items: '='
		},
		templateUrl: 'search-interest/directive/search-interest-box/search-interest-box.html',
        controller: function($scope) {

            //todo improve
            //fixme IVALID JSON id or value
            $scope.inputResults = {
                "results": [
                    {
                        "id": 24609282673,
                        "name": "Family Guy",
                        "reach": "0.12",
                        "trends": "0.034"
                    },
                    {
                        "id": 130577231135,
                        "name": "Modern Family",
                        "reach": "0.0932",
                        "trends": "0.0344"
                    },
                    {
                        "id": 164755026965971,
                        "name": "Family Feud",
                        "reach": "0.08534",
                        "trends": "0.0453"
                    },
                    {
                        "id": 31092164580,
                        "name": "ABC Family's 25 Days of Christmas",
                        "reach": "0.06523",
                        "trends": "0.021"
                    },
                    {
                        "id": 104046419630897,
                        "name": "Family",
                        "reach": "0.4334",
                        "trends": "0.234"
                    },
                    {
                        "id": 103280435790,
                        "name": "Awkward Family Photos",
                        "reach": "0.12",
                        "trends": "0.154"
                    }
                ]
            };


            $scope.$watch('selectedItem', function (newValue, oldValue) {
                if(newValue != oldValue) {
                    $scope.items.push(newValue);
                }
            });

            $scope.removeItem = function(item) {
                var keepThis = [];
                for(var i=0; i<$scope.items.length; i++) {
                    if( $scope.items[i].$$hashKey !== item.$$hashKey) {
                        keepThis.push($scope.items[i])
                    }
                }
                $scope.items = keepThis;
            };




        },
		link: function(scope, element, attrs, fn) {


		}
	};
});
