var buyItem = angular.module("buyItem", ['ngSanitize']);
          

           buyItem.component('buyItm',{

             templateUrl: 'clothing-item/clothing-item-template.html',
          controller:function BuyItemController($http){

             var self = this;
                    
                      $http.get('data/clothingitems.json').then(function (response) {
                          self.items = response.data;

                         
                      });

          }
          });