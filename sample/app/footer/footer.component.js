var footerNavigation = angular.module("footerNavigation", ['ngSanitize']);
          

           footerNavigation.component('footerNavigation',{

             templateUrl: 'footer/footer-template.html',
          controller:function footerNavigationController($http){

             var self = this;
                    
                     /* $http.get('data/clothingitems.json').then(function (response) {
                          self.items = response.data;

                         
                      });*/

          		}
          });