angular.module('recipeApp').component('recipeList', {
    templateUrl: 'recipe-list/recipe-list.template.html',

    controller: function RecipeListController($http,$sce) {
        var self = this;
        self.orderProp = 'date';
        self.sce = $sce;
        	
          

        $http.get('data/clothingitems.json').then(function (response) {
            self.recipes = response.data;

           
        });





    }
});