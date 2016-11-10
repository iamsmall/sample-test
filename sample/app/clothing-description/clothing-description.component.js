


var clothingItem = angular.module("clothingItem", ['ngSanitize']);
          

           clothingItem.component('clothingItm',{

             templateUrl: 'clothing-description/clothing-description-template.html',
          controller:function ClothingDescriptionController($http){

             var self = this;
                    
                      $http.get('data/clothingitems.json').then(function (response) {
                          self.items = response.data;

                         
                      });

          }
          });