angular.module('calorific.services', [])

// A service that returns some data.
 
.factory('menuService', function () {
    // Might use a resource here that returns a JSON array

    // testing data
    var menus = [
        {
            food: 'img/nibbles.jpg',
            id: 0,
            title: 'Breakfast',
            description: 'Cereal, Bread, pastries, milk, egg, sausage, puddin, rasher, potatoe chips'
        },
        {
            food: 'img/meats.jpg',
            id: 1,
            title: 'Lunch',
            description: 'Wrap, Sandwich, Soup, Lasagne, Fish pie, Chicken, Beef, Turkey'
        },
        {
            food: 'img/vegetables.jpg',
            id: 2,
            title: 'Dinner',
            description: 'Lamb, Burger, Sheperds pie, Lasagne, Fish pie, Chicken, Beef, Turkey, Pasta Bake, Vegetables'
        },
        {
            food: 'img/fishAndShellfish.jpg',
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
            // index lookup
            return menus[menuId];
        }
    }
});