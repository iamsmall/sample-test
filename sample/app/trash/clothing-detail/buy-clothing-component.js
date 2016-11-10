angular.module('recipeDetail').component('clothingDetail', {
    templateUrl: 'clothing-detail/buy-clothing.template.html',

    controller: function RecipeListController($http,$sce) {
        var self = this;
        self.orderProp = 'date';
        self.sce = $sce;
        	
          

        $http.get('data/clothingitems.json').then(function (response) {
            self.items = response.data;

           
        });





    }
});