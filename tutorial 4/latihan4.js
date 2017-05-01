angular.module('app', [])
    .controller('myController', myController);

    function myController($scope){
        $scope.person = {name: "Ridwan", age: 26};

        $scope.click = function(){
            alert("Hi, nama saya " + $scope.person.name + 
                    ' dan usia saya ' + $scope.person.age);
        }
    }