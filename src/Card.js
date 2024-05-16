import React, { Component } from 'react';
import logo from './logo.svg';
class Card extends Component {
    render() {
        return (
            <div className="card">
                <img src={logo} alt="Placeholder" />
                <div className="card-body">
                    <h5 className="card-title">Card Title</h5>
                    <p className="card-text">Some quick example text to build on the card</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}
export default Card;
