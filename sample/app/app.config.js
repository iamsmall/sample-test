/*angular.module('recipeApp', [
    'ngRoute',
    'ngSanitize',
    'recipeList',
    'recipeDetail'
]);
*/



 angular.element(document).ready(function() {
              /* Div ID's being used in the index.html 
                 to bring in the angular components*/
              var buyItemDiv = document.getElementById("buy-item");
              var clothingItemDiv = document.getElementById("clothing-item")
              var reviewDiv = document.getElementById("clothing-review");
              var modalWindowDiv = document.getElementById('modal-window');
              var navigationDiv = document.getElementById('page-navigation');
              var footerNavDiv = document.getElementById('footer-navigation');
              var searchBarDiv = document.getElementById('search-bar');

              angular.bootstrap(buyItemDiv, ["buyItem"]);
              angular.bootstrap(clothingItemDiv, ["clothingItem"]);
              angular.bootstrap(navigationDiv, ["pageNavigation"]);
              angular.bootstrap(reviewDiv, ["clothingReview"]);
              angular.bootstrap(modalWindowDiv, ["modalWindow"]);
              angular.bootstrap(footerNavDiv, ["footerNavigation"]);
              angular.bootstrap(searchBarDiv, ["searchBar"]);
 });
