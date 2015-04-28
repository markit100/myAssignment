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
            description: 'Cereal, Bread, Pastry...',
            foodItem1: "Cereal",
            data1: 'Calories per 250g serving',
            imgsrc1: "img/almond.jpg",
            calories1: 567,
            foodItem2: "Bread",
            data2: 'Calories per wholegrain slice',
            imgsrc2: "img/almond.jpg",
            calories2: 567,
            foodItem3: "Pastries",
            data3: 'Calories per piece',
            imgsrc3: "img/almond.jpg",
            calories3: 567
        },
        {
            food: 'img/meats.jpg',
            id: 1,
            title: 'Lunch',
            description: 'Wrap, Sandwich, Soup...',
            foodItem1: 'Wrap',
            data1: 'Calories per wholegrain wrap',
            imgsrc1: "img/almond.jpg",
            calories1: 567,
            foodItem2: "Sandwich",
            data2: 'Calories per brown slice',
            imgsrc2: "img/almond.jpg",
            calories2: 567,
            foodItem3: "Chicken soup",
            data3: 'Calories per 250ml bowl',
            imgsrc3: "img/almond.jpg",
            calories3: 567
        },
        {
            food: 'img/vegetables.jpg',
            id: 2,
            title: 'Dinner',
            description: 'Lamb, Burger, Sheperds...',
            foodItem1: "Lamb",
            data1: 'Calories per 250g serving',
            imgsrc1: "img/almond.jpg",
            calories1: 567,
            foodItem2: "Burger",
            data2: 'Calories per 1/4 pounder',
            imgsrc2: "img/almond.jpg",
            calories2: 567,
            foodItem3: "Shepherds Pie",
            data3: 'Calories per 250g serving',
            imgsrc3: "img/almond.jpg",
            calories3: 567
        },
        {
            food: 'img/fishAndShellfish.jpg',
            id: 3,
            title: 'Snacks',
            description: 'Biscuits, Sweets, Yoghurt...',
            foodItem1: "Biscuits",
            data1: 'Calories per biscuit',
            imgsrc1: "img/almond.jpg",
            calories1: 567,
            foodItem2: "Sweets",
            data2: 'Calories per 50g serving',
            imgsrc2: "img/almond.jpg",
            calories2: 567,
            foodItem3: "Yoghurt",
            data3: 'Calories per 100ml serving',
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