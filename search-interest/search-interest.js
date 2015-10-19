angular.module('searchInterest', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate', 'angucomplete-alt']);

angular.module('searchInterest').config(function($routeProvider) {

    $routeProvider.when('/',{templateUrl: 'search-interest/partial/search-interest-view/search-interest-view.html'});
    /* Add New Routes Above */

});

