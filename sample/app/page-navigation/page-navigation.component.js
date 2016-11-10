var pageNavigation = angular.module("pageNavigation", ['ngSanitize']);
          

           pageNavigation.component('pageNavigation',{

             templateUrl: 'page-navigation/page-navigation-template.html',
          controller:function pageNavigationController($http){

             var self = this;
                    
                     /* $http.get('data/clothingitems.json').then(function (response) {
                          self.items = response.data;

                         
                      });*/

          		}
          });