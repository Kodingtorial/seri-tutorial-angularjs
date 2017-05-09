angular.module('app', [])
    .directive('simpleDirective', simpleDirective)
    .directive('attributeDirective', attributeDirective)
    .directive('elementDirective', elementDirective)
    .directive('classDirective', classDirective)
    .directive('commentDirective', commentDirective);

    function simpleDirective(){
        return {
            restrict: 'AE',
            template: "<div>Directive Pertamaku</div>"
        }
    }

    function attributeDirective(){
        return{
            restrict: 'A',
            template: '<div>Directive ini hanya dapat dipanggil melalui attribute element HTML</div>'
        }
    }

    function elementDirective(){
        return{
            restrict: 'E',
            template: '<div>Directive ini hanya dapat dipanggil melalui element HTML</div>'
        }
    }

    function classDirective(){
        return{
            restrict: 'C',
            template: '<div>Directive ini hanya dapat dipanggil melalui class element HTML</div>'
        }
    }

    function commentDirective(){
        return{
            restrict: 'M',
            template: '<div>Directive ini hanya dapat dipanggil melalui comment HTML</div>',
            replace: 'true'
        }
    }
    