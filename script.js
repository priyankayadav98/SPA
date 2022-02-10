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
        controller:'homectrl'}).when('/housing' ,
    {
        templateUrl:'mypage/housing.html',
        controller:'housingctrl'
    }).when('/signin',
    {
        templateUrl:'mypage/signin.html',
        controller:'signinctrl'}).when('/signin/:first/:last',
        {
            templateUrl:'mypage/signin.html',
            controller:'signinctrl'
    });



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
})
.controller("signinctrl",function($scope,$routeParams)
{
    $scope.message="WELCOME"
    if($routeParams.first && $routeParams.last )
    {
        $scope.person = 
        {
            first:$routeParams.first,
            last:$routeParams.last
        };
    }
});