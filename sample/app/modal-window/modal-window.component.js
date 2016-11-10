var modalWindow = angular.module("modalWindow", ['ngSanitize']);
          

           modalWindow.component('modalWindow',{

             templateUrl: 'modal-window/modal-window-template.html',
          controller:function ModalWindowController($http){

             var self = this;
                    
                      $http.get('data/clothingitems.json').then(function (response) {
                          self.items = response.data;

                         
                      });

          		}
          });