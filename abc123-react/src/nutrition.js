import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';


class UserForm extends React.Component {
    handleSubmit = (event) => {
        this.props.parentCallback(event.target.foodName.value.toLowerCase());
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={(e) => this.handleSubmit(e)}>
                <FormGroup>
                    <Label style={{ margin: 0 }} size='lg' for="food-name">
                        Nutrition Label
                    </Label>
                    <Input
                        id="foodName"
                        name="foodName"
                        placeholder="Enter the name of food ex. steak"
                        type="text"
                        bsSize='sm'
                    />
                    <Button
                        className='mt-3' type='submit' outline color="dark"
                    >
                        Submit
                    </Button>
                </FormGroup>
            </Form>
        );
    }
}


class FoodLabel extends React.Component {

    checkPropsValue(i) {
        if (this.props.value === null) {
            return "";
        } else {
            return this.props.value[i][1];
        }
    }

    render() {
        return (
            <div>
                <Row><h5> Nutrition Facts</h5></Row>
                <ListGroup>
                    <ListGroupItem color='success'>
                        <Row>
                            <Col>
                                <h5>Name</h5>
                            </Col>
                            <Col>
                                <h6>{this.checkPropsValue(1)}</h6>
                            </Col>
                        </Row>
                    </ListGroupItem>

                    <ListGroupItem color='info'>
                        <Row>
                            <Col>
                                <h5>Category</h5>
                            </Col>
                            <Col>
                                <h6>{this.checkPropsValue(2)}</h6>
                            </Col>
                        </Row>
                    </ListGroupItem>

                    <ListGroupItem color='danger'>
                        <Row>
                            <Col>
                                <h5>Calories</h5>
                            </Col>
                            <Col>
                                <h6>{this.checkPropsValue(3)}</h6>
                            </Col>
                        </Row>
                    </ListGroupItem>

                    <ListGroupItem color='warning'>
                        <Row>
                            <Col>
                                <h5>Total Fat</h5>
                            </Col>
                            <Col>
                                <h6>{this.checkPropsValue(4)}</h6>
                            </Col>
                        </Row>
                    </ListGroupItem>

                    <ListGroupItem color='danger'>
                        <Row>
                            <Col>
                                <h5>Saturated Fat</h5>
                            </Col>
                            <Col>
                                <h6>{this.checkPropsValue(5)}</h6>
                            </Col>
                        </Row>
                    </ListGroupItem>

                    <ListGroupItem color='success'>
                        <Row>
                            <Col>
                                <h5>Trans Fat</h5>
                            </Col>
                            <Col>
                                <h6>{this.checkPropsValue(6)}</h6>
                            </Col>
                        </Row>
                    </ListGroupItem>

                    <ListGroupItem color='info'>

                        <Row>
                            <Col>
                                <h5>Protein</h5>
                            </Col>
                            <Col>
                                <h6>{this.checkPropsValue(7)}</h6>
                            </Col>
                        </Row>
                    </ListGroupItem>

                    <ListGroupItem color='warning'>
                        <Row>
                            <Col>
                                <h5>Carbohydrate</h5>
                            </Col>
                            <Col>
                                <h6>{this.checkPropsValue(8)}</h6>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>





            </div>

        );
    }

}

class Nutrition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            nutrition: {
                0: {
                    "id": 0,
                    "name": "steak",
                    "category": "Proteins",
                    "calories": 300,
                    "totalFat": 5.73,
                    "saturatedFat": 2.183,
                    "transFat": 0.182,
                    "protein": 29.44,
                    "carbohydrate": 0.0
                },
                1: {
                    "id": 1,
                    "name": "ground beef",
                    "category": "Proteins",
                    "calories": 200,
                    "totalFat": 13.1,
                    "saturatedFat": 5.3,
                    "transFat": 0.6,
                    "protein": 15.18,
                    "carbohydrate": 0.0
                },
                2: {
                    "id": 2,
                    "name": "chicken",
                    "category": "Proteins",
                    "calories": 100,
                    "totalFat": 9.3,
                    "saturatedFat": 2.5,
                    "transFat": 0.1,
                    "protein": 27.14,
                    "carbohydrate": 0.0
                },
                3: {
                    "id": 3,
                    "name": "fish",
                    "category": "Proteins",
                    "calories": 80,
                    "totalFat": 6.34,
                    "saturatedFat": 1.0,
                    "transFat": 0.0,
                    "protein": 19.84,
                    "carbohydrate": 0.0
                },
                4: {
                    "id": 4,
                    "name": "soy",
                    "category": "Proteins",
                    "calories": 50,
                    "totalFat": 19.94,
                    "saturatedFat": 2.884,
                    "transFat": 0.0,
                    "protein": 36.49,
                    "carbohydrate": 30.16
                },
                5: {
                    "id": 5,
                    "name": "orange",
                    "category": "Fruits",
                    "calories": 300,
                    "totalFat": 0.12,
                    "saturatedFat": 0.0,
                    "transFat": 0.0,
                    "protein": 0.94,
                    "carbohydrate": 11.75
                },
                6: {
                    "id": 6,
                    "name": "banana",
                    "category": "Fruits",
                    "calories": 200,
                    "totalFat": 0.33,
                    "saturatedFat": 0.0,
                    "transFat": 0.0,
                    "protein": 1.09,
                    "carbohydrate": 22.84
                },
                7: {
                    "id": 7,
                    "name": "pineapple",
                    "category": "Fruits",
                    "calories": 100,
                    "totalFat": 0.12,
                    "saturatedFat": 0.0,
                    "transFat": 0.0,
                    "protein": 0.54,
                    "carbohydrate": 13.12
                },
                8: {
                    "id": 8,
                    "name": "grapes",
                    "category": "Fruits",
                    "calories": 80,
                    "totalFat": 0.16,
                    "saturatedFat": 0.0,
                    "transFat": 0.0,
                    "protein": 0.72,
                    "carbohydrate": 18.1
                },
                9: {
                    "id": 9,
                    "name": "blueberries",
                    "category": "Fruits",
                    "calories": 50,
                    "totalFat": 0.33,
                    "saturatedFat": 0.0,
                    "transFat": 0.0,
                    "protein": 0.74,
                    "carbohydrate": 14.49
                },
                10: {
                    "id": 10,
                    "name": "romaine",
                    "category": "Vegetables",
                    "calories": 30,
                    "totalFat": 0.3,
                    "saturatedFat": 0.0,
                    "transFat": 0.0,
                    "protein": 1.2,
                    "carbohydrate": 3.3
                },
                11: {
                    "id": 11,
                    "name": "green beans",
                    "category": "Vegetables",
                    "calories": 40,
                    "totalFat": 0.22,
                    "saturatedFat": 0.0,
                    "transFat": 0.0,
                    "protein": 1.83,
                    "carbohydrate": 6.97
                },
                12: {
                    "id": 12,
                    "name": "squash",
                    "category": "Vegetables",
                    "calories": 100,
                    "totalFat": 0.2,
                    "saturatedFat": 0.0,
                    "transFat": 0.0,
                    "protein": 1.2,
                    "carbohydrate": 3.4
                },
                13: {
                    "id": 13,
                    "name": "spinach",
                    "category": "Vegetables",
                    "calories": 50,
                    "totalFat": 0.4,
                    "saturatedFat": 0.0,
                    "transFat": 0.0,
                    "protein": 2.9,
                    "carbohydrate": 3.6
                },
                14: {
                    "id": 14,
                    "name": "kale",
                    "category": "Vegetables",
                    "calories": 10,
                    "totalFat": 0.9,
                    "saturatedFat": 0.0,
                    "transFat": 0.0,
                    "protein": 4.3,
                    "carbohydrate": 8.8
                },
                15: {
                    "id": 15,
                    "name": "milk",
                    "category": "Dairy",
                    "calories": 300,
                    "totalFat": 3.9,
                    "saturatedFat": 2.4,
                    "transFat": 0.0,
                    "protein": 3.2,
                    "carbohydrate": 4.8
                },
                16: {
                    "id": 16,
                    "name": "yoghurt",
                    "category": "Dairy",
                    "calories": 200,
                    "totalFat": 5.0,
                    "saturatedFat": 0.0,
                    "transFat": 0.0,
                    "protein": 9.0,
                    "carbohydrate": 3.98
                },
                17: {
                    "id": 17,
                    "name": "cheddar cheese",
                    "category": "Dairy",
                    "calories": 200,
                    "totalFat": 9.0,
                    "saturatedFat": 6.0,
                    "transFat": 0.0,
                    "protein": 7.0,
                    "carbohydrate": 0.0
                },
                18: {
                    "id": 18,
                    "name": "skim milk",
                    "category": "Dairy",
                    "calories": 100,
                    "totalFat": 0.2,
                    "saturatedFat": 0.1,
                    "transFat": 0.0,
                    "protein": 8.3,
                    "carbohydrate": 12.5
                },
                19: {
                    "id": 19,
                    "name": "cottage cheese",
                    "category": "Dairy",
                    "calories": 80,
                    "totalFat": 4.3,
                    "saturatedFat": 0.0,
                    "transFat": 0.0,
                    "protein": 11.12,
                    "carbohydrate": 3.38
                },
                20: {
                    "id": 20,
                    "name": "bread",
                    "category": "Grains",
                    "calories": 200,
                    "totalFat": 1.1,
                    "saturatedFat": 0.0,
                    "transFat": 0.0,
                    "protein": 4.0,
                    "carbohydrate": 13.8
                },
                21: {
                    "id": 21,
                    "name": "bagel",
                    "category": "Grains",
                    "calories": 300,
                    "totalFat": 1.7,
                    "saturatedFat": 0.1,
                    "transFat": 0.0,
                    "protein": 13.8,
                    "carbohydrate": 68
                },
                22: {
                    "id": 22,
                    "name": "pita",
                    "category": "Grains",
                    "calories": 250,
                    "totalFat": 1.7,
                    "saturatedFat": 0.3,
                    "transFat": 0.0,
                    "protein": 6.3,
                    "carbohydrate": 35.2
                },
                23: {
                    "id": 23,
                    "name": "naan",
                    "category": "Grains",
                    "calories": 210,
                    "totalFat": 3.3,
                    "saturatedFat": 0.1,
                    "transFat": 0.0,
                    "protein": 2.7,
                    "carbohydrate": 16.9
                },
                24: {
                    "id": 24,
                    "name": "tortilla",
                    "category": "Grains",
                    "calories": 120,
                    "totalFat": 0.5,
                    "saturatedFat": 0.1,
                    "transFat": 0.0,
                    "protein": 1.1,
                    "carbohydrate": 8.5
                }
            },
            nutritionMap: null
        }
    }

    hello(food) {
        let verify = 0;
        for (var i = 0; i < 25; i++) {
            if (food === this.state.nutrition[i]["name"]) {
                verify = 1;
                this.setState({
                    nutritionMap: Object.entries(this.state.nutrition[i])
                })
            }
        }
        if (verify === 0) {
            this.setState({
                nutritionMap: null
            })
        }
    }

    handleCallback = (childData) => {
        this.setState({
            name: childData,
        })
        this.hello(childData);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <UserForm parentCallback={(c) => this.handleCallback(c)} ></UserForm>
                    </Col>
                    <Col>
                        <FoodLabel value={this.state.nutritionMap}></FoodLabel>
                    </Col>                    
                </Row>
            </Container>
        );
    }

}
export default Nutrition;