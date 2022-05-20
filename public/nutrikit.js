
var proteins = new Map();
proteins.set('steak', 300);
proteins.set('ground beef', 200);
proteins.set('chicken', 100);
proteins.set('fish', 80);
proteins.set('soy', 50);

var fruits = new Map();
fruits.set('orange', 300);
fruits.set('banana', 200);
fruits.set('pineapple', 100);
fruits.set('grape', 80);
fruits.set('blueberries', 50);

var vegetables = new Map();
vegetables.set('romain', 30);
vegetables.set('green beans', 40);
vegetables.set('squash', 100);
vegetables.set('spinach', 50);
vegetables.set('kale', 10);

var dairy = new Map();
dairy.set('milk', 300);
dairy.set('yoghurt', 200);
dairy.set('cheddar cheese', 200);
dairy.set('skim milk', 100);
dairy.set('cottage cheese', 80);

var grains = new Map();
grains.set('bread', 200);
grains.set('bagel', 300);
grains.set('pita', 250);
grains.set('naan', 210);
grains.set('tortilla', 120);

var categories = new Map();
categories.set('proteins', proteins);
categories.set('fruits', fruits);
categories.set('vegetables', vegetables);
categories.set('dairy', dairy);
categories.set('grains', grains);

function clearSelect(select) {
    var length = select.options.length;
    for (var i = length - 1; i >= 0; i--) {
        select.options[i] = null;
    }
}

function clearSelected(tag) {
    var elements = document.getElementById(tag).options;

    for (var i = 0; i < elements.length; i++) {
        elements[i].selected = false;
    }
}

function displayMenuItems() {
    var categoriesHTML = document.getElementById("foods"); //categoroes
    var menuItemsHTML = document.getElementById("items");  //menu items    
    var selectedValue = categoriesHTML.options[categoriesHTML.selectedIndex].value;
    clearSelect(menuItemsHTML);
    if (selectedValue == "") {
        menuItemsHTML.options[menuItemsHTML.options.length] = new Option("Select a category", "");
        menuItemsHTML.options[0].disabled = true;
    } else {
        var map0 = categories.get(selectedValue);
        map0.forEach((value, key) => {
            menuItemsHTML.options[menuItemsHTML.options.length] = new Option(String(key), String(value));
        })
    }
}

function changeSignOfButton(sign) {
    var button = document.getElementById("mover");  //button
    button.textContent = sign;
}

function updateSelectedMenuItems() {
    changeSignOfButton("<<");
}

function totalCalories() {
    const selectedItemsHTML = document.getElementById("selected-items"); //categories  
    const length = selectedItemsHTML.options.length;
    var total = 0;
    for (i = 0; i < length; i++) {
        total += parseInt(selectedItemsHTML.options[i].value);
    }
    return total;
}

function clickButton() {
    const button0 = document.getElementById("mover");
    const total_cal = document.getElementById("total-cal");  //
    var menuItemsHTML = document.getElementById("items");  //menu items  
    var selectedItemsHTML = document.getElementById("selected-items"); //selected items
    if (button0.textContent == ">>") {
        var selectedValue = menuItemsHTML.options[menuItemsHTML.selectedIndex].value;
        var selectedText = menuItemsHTML.options[menuItemsHTML.selectedIndex].text;
        selectedItemsHTML.options[selectedItemsHTML.options.length] = new Option(String(selectedText), String(selectedValue));        
    } else {
        selectedItemsHTML.remove(selectedItemsHTML.selectedIndex);
    }
    let totalCalories0 = totalCalories();
    total_cal.innerHTML = 'Total Calories: ' + totalCalories0;
}



