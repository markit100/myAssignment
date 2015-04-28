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
            description: 'Cereal, Bread, pastries, milk',
            foodItem1: "Cereal",
                    imgsrc1: "img/almond.jpg",
                    calories1: 567,
            foodItem2: "Bread",
                    imgsrc2: "img/almond.jpg",
                    calories2: 567,
            foodItem3: "Pastries",
                    imgsrc3: "img/almond.jpg",
                    calories3: 567
        },
        {
            food: 'img/meats.jpg',
            id: 1,
            title: 'Lunch',
            description: 'Wrap, Sandwich, Soup, Lasagne',
            foodItem1: 'Wrap',
                    imgsrc1: "img/almond.jpg",
                    calories1: 567,
            foodItem2: "Sandwich",
                    imgsrc2: "img/almond.jpg",
                    calories2: 567,
            foodItem3: "Soup",
                    imgsrc3: "img/almond.jpg",
                    calories3: 567
        },
        {
            food: 'img/vegetables.jpg',
            id: 2,
            title: 'Dinner',
            description: 'Lamb, Burger, Sheperds pie, Vegetables',
            foodItem1: "Lamb",
                    imgsrc1: "img/almond.jpg",
                    calories1: 567,
            foodItem2: "Burger",
                    imgsrc2: "img/almond.jpg",
                    calories2: 567,
            foodItem3: "Shepherds Pie",
                    imgsrc3: "img/almond.jpg",
                    calories3: 567
        },
        {
            food: 'img/fishAndShellfish.jpg',
            id: 3,
            title: 'Snacks',
            description: 'Biscuits, Sweets, Yoghurt, Chocolate',
            foodItem1: "Biscuits",
                    imgsrc1: "img/almond.jpg",
                    calories1: 567,
            foodItem2: "Sweets",
                    imgsrc2: "img/almond.jpg",
                    calories2: 567,
            foodItem3: "Yoghurt",
                    imgsrc3: "img/almond.jpg",
                    calories3: 567,
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