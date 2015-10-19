angular.module('CubeYou', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate', 'searchInterest', 'searchInterest']);

angular.module('CubeYou').config(function($routeProvider) {

    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('CubeYou').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
