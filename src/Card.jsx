import React, { Component } from 'react';
import logo from './logo.svg';

class Card extends Component {
    render() {
        const { title, text } = this.props;

        return (
            <div className="card">
                <img src={logo} alt="Placeholder" className="card-img-top" />
                <div className="card-body">
                    {title && <h5 className="card-title">{title}</h5>}
                    {text && <p className="card-text">{text}</p>}
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}

export default Card;
