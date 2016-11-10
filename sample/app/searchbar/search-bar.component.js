var searchBar = angular.module("searchBar", ['ngSanitize']);
          

           searchBar.component('searchBar',{

             templateUrl: 'searchbar/search-bar-template.html',
          controller:function searchBarController($http){

             var self = this;
                    
                     /* $http.get('data/clothingitems.json').then(function (response) {
                          self.items = response.data;

                         
                      });*/

          		}
          });