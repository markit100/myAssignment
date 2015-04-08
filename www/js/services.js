angular.module('calorific.services', [])

/**
 * A service that returns some data.
 */
.factory('menuService', function () {
    // Might use a resource here that returns a JSON array

    // testing data
    var menus = [
        {
            id: 0,
            title: 'Breakfast',
            description: 'Cereal, Bread, pastries, milk, egg, sausage, puddin, rasher, potatoe chips'
        },
        {
            id: 1,
            title: 'Lunch',
            description: 'Wrap, Sandwich, Soup, Lasagne, Fish pie, Chicken, Beef, Turkey'
        },
        {
            id: 2,
            title: 'Dinner',
            description: 'Lamb, Burger, Sheperds pie, Lasagne, Fish pie, Chicken, Beef, Turkey, Pasta Bake, Vegetables'
        },
        {
            id: 3,
            title: 'Snacks',
            description: 'Biscuits, Cheese, Crisps, Pizza, Sweets, Yoghurt, Chocolate'
        }
  ];

    return {
        all: function () {
            return menus;
        },
        get: function (menuId) {
            // Simple index lookup
            return menus[menuId];
        }
    }
});