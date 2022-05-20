import React from 'react';
import './index.css';



function Categories(props) {
    return (
        <div>
            <label htmlFor="foods" className="inline-tags">Categories</label>
            <br />
            <select name="foods" className="inline-tags" id="foods" onChange={props.onChange}>
                <option value=""></option>
                <option value="proteins">Protein</option>
                <option value="fruits">Fruits</option>
                <option value="vegetables">Vegetables</option>
                <option value="dairy">Dairy</option>
                <option value="grains">Grains</option>
            </select>
        </div>
    );
}

function MenuItems(props) {
    return (
        <div>
            <label htmlFor="items" className="inline-tags">Menu Items</label>
            <br />
            <select name="items" size="5" id="items" onFocus={() => clearSelected('selected-items')} onChange={() => changeSignOfButton('>>')}>
                <option value="default" disabled>Select a category</option>
            </select>
        </div>
    );
}

function Arrow(props) {
    return (
        <div>
            <label htmlFor="" className="inline-tags"></label><br />
            <button onClick={() => clickButton()} id="mover">{props.value}</button>
        </div>
    );
}

function SelectedItems(props) {
    return (
        <div>
            <label htmlFor="selected-items" className="inline-tags">Selected Items</label>
            <br />
            <select name="selected-items" size="10" id="selected-items" onFocus={() => clearSelected('items')} onChange={() => changeSignOfButton('<<')}>
            </select>
            <p id="total-cal"></p>
        </div>
    );
}

class Client2 extends React.Component {
    constructor(props) {
        super(props);
        //xIsNext is toggled back & forth between true/false to keep up w/ whos turn is it - X's turn or O's turn?
        this.state = {
            proteins: new Map(),
            fruits: new Map(),
            vegetables: new Map(),
            dairy: new Map(),
            grains: new Map(),
            categories: new Map(),
        };
        this.initializeMaps();
    }

    initializeMaps() {
        let pro0 = new Map(this.state.proteins);
        pro0.set('steak', 300);
        pro0.set('ground beef', 200);
        pro0.set('chicken', 100);
        pro0.set('fish', 80);
        pro0.set('soy', 50);

        let fruits0 = new Map(this.state.fruits);
        fruits0.set('orange', 300);
        fruits0.set('banana', 200);
        fruits0.set('pineapple', 100);
        fruits0.set('grape', 80);
        fruits0.set('blueberries', 50);

        let vegetables0 = new Map(this.state.vegetables);
        vegetables0.set('romain', 30);
        vegetables0.set('green beans', 40);
        vegetables0.set('squash', 100);
        vegetables0.set('spinach', 50);
        vegetables0.set('kale', 10);


        let dairy0 = new Map(this.state.dairy);
        this.state.dairy.set('milk', 300);
        this.state.dairy.set('yoghurt', 200);
        this.state.dairy.set('cheddar cheese', 200);
        this.state.dairy.set('skim milk', 100);
        this.state.dairy.set('cottage cheese', 80);

        let grains0 = new Map (this.state.grains);
        grains0.set('bread', 200);
        grains0.set('bagel', 300);
        grains0.set('pita', 250);
        grains0.set('naan', 210);
        grains0.set('tortilla', 120);

        let categories0 = new Map(this.state.categories);
        this.state.categories.set('proteins', pro0);
        this.state.categories.set('fruits', fruits0);
        this.state.categories.set('vegetables', vegetables0);
        this.state.categories.set('dairy', dairy0);
        this.state.categories.set('grains', grains0);
        this.setState({
            proteins: pro0,
            fruits: fruits0,
            vegetables: vegetables0,
            dairy: dairy0,
            grains: grains0,
            categories: categories0,
          });
    }

    displayMenuItems() {
        const categoriesHTML = document.getElementById("foods"); //categoroes
        const menuItemsHTML = document.getElementById("items");  //menu items    
        const selectedValue = categoriesHTML.options[categoriesHTML.selectedIndex].value;
        clearSelect(menuItemsHTML);
        if (selectedValue === "") {
            menuItemsHTML.options[menuItemsHTML.options.length] = new Option("Select a category", "");
            menuItemsHTML.options[0].disabled = true;
        } else {
            var map0 = this.state.categories.get(selectedValue);
            map0.forEach((value, key) => {
                menuItemsHTML.options[menuItemsHTML.options.length] = new Option(String(key), String(value));
            })
        }
    }

    render() {
        return (
            <div>
                <h1>NutriKit Food Planner</h1>
                <h3>NutriKit allows you to select your groceries, and track your nutritional progress (good or bad)</h3>
                <div className='flex_container-3-boxes'>
                    <Categories
                        onChange = {() => this.displayMenuItems()}
                    />
                    <MenuItems />
                    <Arrow value={">>"} />
                    <SelectedItems />
                </div>
            </div>
        );
    }
}

function clearSelect(select) {
    var length = select.options.length;
    for (let i = length - 1; i >= 0; i--) {
        select.options[i] = null;
    }
}

function clearSelected(tag) {
    var elements = document.getElementById(tag).options;

    for (var i = 0; i < elements.length; i++) {
        elements[i].selected = false;
    }
}

function changeSignOfButton(sign) {
    var button = document.getElementById("mover");  //button
    button.textContent = sign;
}

function totalCalories() {
    const selectedItemsHTML = document.getElementById("selected-items"); //categories  
    const length = selectedItemsHTML.options.length;
    var total = 0;
    for (let i = 0; i < length; i++) {
        total += parseInt(selectedItemsHTML.options[i].value);
    }
    return total;
}

function clickButton() {
    const button0 = document.getElementById("mover");
    const total_cal = document.getElementById("total-cal");  //
    var menuItemsHTML = document.getElementById("items");  //menu items  
    var selectedItemsHTML = document.getElementById("selected-items"); //selected items
    if (button0.textContent === ">>") {
        var selectedValue = menuItemsHTML.options[menuItemsHTML.selectedIndex].value;
        var selectedText = menuItemsHTML.options[menuItemsHTML.selectedIndex].text;
        selectedItemsHTML.options[selectedItemsHTML.options.length] = new Option(String(selectedText), String(selectedValue));
    } else {
        selectedItemsHTML.remove(selectedItemsHTML.selectedIndex);
    }
    let totalCalories0 = totalCalories();
    total_cal.innerHTML = 'Total Calories: ' + totalCalories0;
}
export default Client2;
