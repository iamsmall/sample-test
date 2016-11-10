var clothingReview = angular.module("clothingReview", ['ngSanitize']);
          

           clothingReview.component('clothingList',{

             templateUrl: 'clothing-review/clothing-review-template.html',
          controller:function ClothingReviewController($http){

             var self = this;
                    
                      $http.get('data/clothingitems.json').then(function (response) {
                          self.items = response.data;
                         
                      });

          }
});