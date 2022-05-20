import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import Nutrition from './nutrition'
import ProgressBar from './progressBar';


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
            <select name="items" size="5" id="items" onFocus={() => clearSelected('selected-items')}>
                <option value="default" disabled>Select a category</option>
            </select>
        </div>
    );
}

function SelectedItems(props) {
    return (
        <div>
            <label htmlFor="selected-items" className="inline-tags">Selected Items</label>
            <br />
            <select name="selected-items" size="10" id="selected-items" onFocus={() => clearSelected('items')}>
            </select>
            <p id="total-cal">Total Calories: </p>
        </div>
    );
}

class Client extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            proteins: new Map(),
            fruits: new Map(),
            vegetables: new Map(),
            dairy: new Map(),
            grains: new Map(),
            categories: new Map(),
            totalCal: 0
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
        dairy0.set('milk', 300);
        dairy0.set('yoghurt', 200);
        dairy0.set('cheddar cheese', 200);
        dairy0.set('skim milk', 100);
        dairy0.set('cottage cheese', 80);

        let grains0 = new Map(this.state.grains);
        grains0.set('bread', 200);
        grains0.set('bagel', 300);
        grains0.set('pita', 250);
        grains0.set('naan', 210);
        grains0.set('tortilla', 120);

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
            menuItemsHTML.options[0].selected = "selected";
        }
    }

    selectButton() {
        const total_cal = document.getElementById("total-cal");  //
        var selectedItemsHTML = document.getElementById("selected-items"); //selected items
        var menuItemsHTML = document.getElementById("items");  //menu items      
        try {
            var selectedText = menuItemsHTML.options[menuItemsHTML.selectedIndex].text;
            var selectedValue = menuItemsHTML.options[menuItemsHTML.selectedIndex].value;
            selectedItemsHTML.options[selectedItemsHTML.options.length] = new Option(String(selectedText), String(selectedValue));
            let totalCalories0 = totalCalories();
            total_cal.innerHTML = 'Total Calories: ' + totalCalories0;
            if(totalCalories0 > 2000){
                this.setState({
                    totalCal: 2000
                })    
            }else{
                this.setState({
                    totalCal: totalCalories0
                })
            }            
        } catch (error) {
            alert("Select an item from the Menu list before clicking \">>\" ");
        }
    }

    deselectButton() {
        const total_cal = document.getElementById("total-cal");  //
        var selectedItemsHTML = document.getElementById("selected-items"); //selected items
        selectedItemsHTML.remove(selectedItemsHTML.selectedIndex);
        let totalCalories0 = totalCalories();
        total_cal.innerHTML = 'Total Calories: ' + totalCalories0;        
        this.setState({
            totalCal: totalCalories0
        })
    }

    render() {
        return (
            <Container >
                <Row>
                    <h1 text-wrap>NutriKit Food Planner</h1>
                    <h4 text-wrap>NutriKit allows you to select your groceries, and track your nutritional progress (good or bad)</h4>
                </Row>
                <Row>
                    <Col sm="3">
                        <Categories
                            onChange={() => this.displayMenuItems()} />
                    </Col>
                    <Col sm="3">
                        <MenuItems />
                    </Col>
                    <Col>
                        <Row className='mt-2'>
                            <Col>
                                <Button size="sm" color="dark" outline onClick={() => this.selectButton()}>{">>"}</Button>
                            </Col>
                        </Row>
                        <Row className='mt-2'>
                            <Col>
                                <Button size="sm" outline color="dark" onClick={() => this.deselectButton()}>{"<<"}</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="3">
                        <SelectedItems />
                    </Col>
                </Row>
                <Row className='justify-content-end'>
                    <Col sm="4">
                        <ProgressBar calories={this.state.totalCal}></ProgressBar>
                    </Col>
                </Row>
                <Row>
                    <Col sm='6'>
                        <Nutrition></Nutrition>
                    </Col>
                </Row>
            </Container>
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


function totalCalories() {
    const selectedItemsHTML = document.getElementById("selected-items"); //categories  
    const length = selectedItemsHTML.options.length;
    var total = 0;
    for (let i = 0; i < length; i++) {
        total += parseInt(selectedItemsHTML.options[i].value);
    }
    return total;
}


export default Client;
