// angular.module is a global place for creating, registering and retrieving Angular modules
// 'calorific' is the name of this angular module example (also set in a <body> attribute in index.html)

angular.module('calorific.services', [])

// A service that returns some data.

.factory('menuService', function () {
    // Might use a resource here that returns a JSON array

    // data that is called by the menu-index template
    // and fed into home/index view
    var menus = [
        {
            food: 'img/nibbles.jpg',
            id: 0,
            title: 'Breakfast',
            description: 'Cereal, Bread, Pastry...',
            
            // breakfast foods
            // data that is called by the menu-detail template
            // and fed into view
           
            // Food item 1
            foodItem1: "Cereal",
            data1: 'Calories per 250g serving',
            imgsrc1: "img/b_cereal.jpg",
            calories1: 17,
            
            // Food item 2
            foodItem2: "Bread",
            data2: 'Calories per wholegrain slice',
            imgsrc2: "img/b_bread.jpg",
            calories2: 25,
            
            // Food item 3
            foodItem3: "Pastries",
            data3: 'Calories per piece',
            imgsrc3: "img/b_pastries.jpg",
            calories3: 75,
            
            // Food item 4
            foodItem4: "Milk",
            data4: 'Calories per 100ml',
            imgsrc4: "img/b_milk.jpg",
            calories4: 20,
            
            // Food item 5
            foodItem5: "Porridge",
            data5: 'Calories per 200g serving',
            imgsrc5: "img/b_porridge.jpg",
            calories5: 10,
            
            // Food item 6
            foodItem6: "Boiled egg",
            data6: 'Calories per piece',
            imgsrc6: "img/b_boiled.jpg",
            calories6: 15,
            
            // Food item 7
            foodItem7: "Fried egg",
            data7: 'Calories per piece',
            imgsrc7: "img/b_fried.jpg",
            calories7: 35,
            
            // Food item 8
            foodItem8: "Scrambled egg",
            data8: 'Calories per portion',
            imgsrc8: "img/b_scrambled.jpg",
            calories8: 50,
            
            // Food item 9
            foodItem9: "Poached egg",
            data9: 'Calories per piece',
            imgsrc9: "img/b_poached.jpg",
            calories9: 10,
            
            // Food item 10
            foodItem11: "Pancakes",
            data11: 'Calories per portion',
            imgsrc11: "img/b_pancakes.jpg",
            calories11: 19
        },
        {
            // lunch foods
            // data that is called by the menu-index template
            // and fed into home/index view
            
            food: 'img/meats.jpg',
            id: 1,
            title: 'Lunch',
            description: 'Wrap, Sandwich, Soup...',
            
            // data that is called by the menu-detail template
            // and fed into view
            
            // Food item
            foodItem1: 'Chicken wrap',
            data1: 'Calories with peppers, onion and lettuce',
            imgsrc1: "img/l_chickenWrap.jpg",
            calories1: 197,
            
            // Food item 2
            foodItem2: "Egg & rocket",
            data2: 'Pizza with cheese, tomatoe and onion',
            imgsrc2: "img/l_eggrocketpizza.jpg",
            calories2: 70,
           
            // Food item 3
            foodItem3: "Vegetable soup",
            data3: 'Calories per 250ml bowl',
            imgsrc3: "img/l_vegSoup.jpg",
            calories3: 45,
            
            // Food item 4
            foodItem4: "Red lentil soup",
            data4: 'Calories per 100ml',
            imgsrc4: "img/l_redLentil.jpg",
            calories4: 20,
            
            // Food item 5
            foodItem5: "Salmon sushi",
            data5: 'Calories per serving',
            imgsrc5: "img/l_smokedSalmon.jpg",
            calories5: 10,
            
            // Food item 6
            foodItem6: "Squash Salad",
            data6: 'With cucumber, pepper, tomatoe and onion',
            imgsrc6: "img/l_squashSalad.jpg",
            calories6: 105,
            
            // Food item 7
            foodItem7: " Moroccan soup",
            data7: 'Calories per serving',
            imgsrc7: "img/l_chickpea.jpg",
            calories7: 35,
            
            // Food item 8
            foodItem8: "Chipotle soup",
            data8: 'Black bean soup with lime-pickled onions',
            imgsrc8: "img/l_chipotle.jpg",
            calories8: 50,
            
            // Food item 9
            foodItem9: "Steak salad",
            data9: 'With roasted pepper & pearl barley',
            imgsrc9: "img/l_steak.jpg",
            calories9: 10,
            
            // Food item 10
            foodItem11: "Spicy courgette",
            data11: 'pitta pockets with houmous, broad beans and harissa',
            imgsrc11: "img/l_courgette.jpg",
            calories11: 19
        },
        {
            // dinner foods
            // data that is called by the menu-index template
            // and fed into home/index view
            
            food: 'img/vegetables.jpg',
            id: 2,
            title: 'Dinner',
            description: 'Lamb, Burger, Sheperds...',
            
            // data that is called by the menu-detail template
            // and fed into view
            
            // Food item
            foodItem1: 'Pan roast',
            data1: 'chicken erving with carrots, onion and parsnip',
            imgsrc1: "img/d_roast.jpg",
            calories1: 149,
            
            // Food item 2
            foodItem2: "Crabcakes",
            data2: 'Calories per portion',
            imgsrc2: "img/d_crabcake.jpg",
            calories2: 270,
           
            // Food item 3
            foodItem3: "Maple & orange",
            data3: 'glazed chicken calories per 50g serving',
            imgsrc3: "img/d_glazedChick.jpg",
            calories3: 345,
            
            // Food item 4
            foodItem4: "Baked chicken",
            data4: 'with chicory in a sage & mustard sauce',
            imgsrc4: "img/d_bakedChick.jpg",
            calories4: 420,
            
            // Food item 5
            foodItem5: "Pad Thai",
            data5: 'Calories per serving',
            imgsrc5: "img/d_padThai.jpg",
            calories5: 410,
            
            // Food item 6
            foodItem6: "Squash Salad",
            data6: 'With cucumber, pepper, tomatoe and onion',
            imgsrc6: "img/l_squashSalad.jpg",
            calories6: 105,
            
            // Food item 7
            foodItem7: "Spinach tart",
            data7: 'Calories per serving',
            imgsrc7: "img/d_spinachTart.jpg",
            calories7: 335,
            
            // Food item 8
            foodItem8: "Beef Wellington",
            data8: 'Calories per serving',
            imgsrc8: "img/d_wellington.jpg",
            calories8: 715,
            
            // Food item 9
            foodItem9: "Fish pie",
            data9: 'With with saffron mash. Calories per serving',
            imgsrc9: "img/d_fishPie.jpg",
            calories9: 310,
            
            // Food item 10
            foodItem11: "Roast poussins",
            data11: 'with wild mushroom sauce',
            imgsrc11: "img/d_poussin.jpg",
            calories11: 819
        },
        {
            // drinks
            // data that is called by the menu-index template
            // and fed into home/index view
            
            food: 'img/dr_orange.jpg',
            id: 3,
            title: 'Drinks',
            description: 'Beer, Wine, Tea, beer...',
            
            // data that is called by the menu-detail template
            // and fed into view
            
            // Food item
            foodItem1: 'Tea',
            data1: 'Calories per cup',
            imgsrc1: "img/dr_tea.jpg",
            calories1: 2,
            
            // Food item 2
            foodItem2: "Americano",
            data2: 'Calories per cup',
            imgsrc2: "img/dr_americano.jpg",
            calories2: 8,
           
            // Food item 3
            foodItem3: "Cappucino",
            data3: 'Calories per cup',
            imgsrc3: "img/dr_cappucino.jpg",
            calories3: 73,
            
            // Food item 4
            foodItem4: "Orange juice",
            data4: 'Calories per 250ml',
            imgsrc4: "img/dr_orange.jpg",
            calories4: 39,
            
            // Food item 5
            foodItem5: "Apple juice",
            data5: 'Calories per 250ml',
            imgsrc5: "img/dr_apple.jpg",
            calories5: 101,
            
            // Food item 6
            foodItem6: "Red wine",
            data6: 'Calories per glass',
            imgsrc6: "img/dr_redWine.jpg",
            calories6: 104,
            
            // Food item 7
            foodItem7: "White wine",
            data7: 'Calories per glass',
            imgsrc7: "img/dr_whiteWine.jpg",
            calories7: 103,
            
            // Food item 8
            foodItem8: "Vodka",
            data8: 'Calories per measure',
            imgsrc8: "img/dr_vodka.jpg",
            calories8: 126,
            
            // Food item 9
            foodItem9: "Whisky",
            data9: 'Calories per measure',
            imgsrc9: "img/dr_whisky.jpg",
            calories9: 100,
            
            // Food item 10
            foodItem11: "Beer",
            data11: 'Calories per pint',
            imgsrc11: "img/dr_beer.jpg",
            calories11: 240
        },
        {
            // snack foods
            // data that is called by the menu-index template
            // and fed into home/index view
            
            food: 'img/s_straw.jpg',
            id: 3,
            title: 'Snacks',
            description: 'Biscuits, Sweets, Yoghurt...',
            
            // data that is called by the menu-detail template
            // and fed into view
            
            // Food item
            foodItem1: 'Banana',
            data1: 'Calories per piece',
            imgsrc1: "img/s_banana.jpg",
            calories1: 17,
            
            // Food item 2
            foodItem2: "Carrots",
            data2: 'Calories per piece',
            imgsrc2: "img/s_carrots.jpg",
            calories2: 10,
           
            // Food item 3
            foodItem3: "Yoghurt",
            data3: 'Calories per 250ml bowl',
            imgsrc3: "img/s_yoghurt.jpg",
            calories3: 45,
            
            // Food item 4
            foodItem4: "Cranberries",
            data4: 'Calories per 125g',
            imgsrc4: "img/s_cranberries.jpg",
            calories4: 20,
            
            // Food item 5
            foodItem5: "Popcorn",
            data5: 'Calories per 100g serving',
            imgsrc5: "img/s_popcorn.jpg",
            calories5: 110,
            
            // Food item 6
            foodItem6: "Strawberries",
            data6: 'Calories per 250g serving',
            imgsrc6: "img/s_straw.jpg",
            calories6: 105,
            
            // Food item 7
            foodItem7: "Granola Bar",
            data7: 'Calories per bar',
            imgsrc7: "img/s_granolaBar.jpg",
            calories7: 35,
            
            // Food item 8
            foodItem8: "Vitamin Muffin",
            data8: 'Calories per piece',
            imgsrc8: "img/s_vitamuffin.jpg",
            calories8: 50,
            
            // Food item 9
            foodItem9: "Tomatoe",
            data9: 'Calories per piece',
            imgsrc9: "img/s_tomato.jpg",
            calories9: 10,
            
            // Food item 10
            foodItem11: "Hersey kisses",
            data11: 'Calories per sweet',
            imgsrc11: "img/s_herseyKisses.jpg",
            calories11: 19
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