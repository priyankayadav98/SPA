angular.module("rent",['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider.when('/properties' ,
    {
        templateUrl:'mypage/properties.html',
        controller:'propertyctrl'
    }).when('/home',
    {
        templateUrl:'mypage/home.html',
        controller:'homectrl'}).when('/home/:first/:last',
        {
            templateUrl:'mypage/home.html',
            controller:'homectrl'
    }).when('/housing' ,
    {
        templateUrl:'mypage/housing.html',
        controller:'housingctrl'
    })



})
.controller('myctrl',function()
{

})
.controller("propertyctrl",function($scope,$http)
{
    $http.get('https://priyankayadav98.github.io/SPA/property.json')
    .success(function(response)
    {
        $scope.var = response.records;
    });
})

.controller("homectrl",function($scope,$routeParams)
{
    $scope.message="This is a renting website.welcome to our website.It was launched in the year 2013,and has grown immensly with god's grace.do check our office and our properties at different locations."
    $scope.houses =["VILLA","FLAT","PENTHOUSE","BUNGALOW"];
})
.controller("housingctrl",function($scope,$http)
{
    $http.get('https://priyankayadav98.github.io/SPA/property.json')
    .success(function(response)
    {
        $scope.variable = response.records;
    });
});