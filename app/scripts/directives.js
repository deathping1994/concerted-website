'use strict';
var app = angular.module('gsmarkdown', []);

app.directive('markdown', function ($window) {
    var converter = new $window.showdown.Converter();
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var htmlText = converter.makeHtml(element.text());
            element.html(htmlText);
        }
    };

});
