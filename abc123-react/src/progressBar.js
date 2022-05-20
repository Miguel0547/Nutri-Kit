import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Progress } from 'reactstrap';




class ProgressBar extends React.Component {
    render() {
        return (
            <Progress max={2000} value={this.props.calories}>
                {this.props.calories}
            </Progress>
        );
    }
}

export default ProgressBar;