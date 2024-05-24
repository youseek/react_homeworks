import React from 'react';
import './ListGroup.css';

const ListGroup = ({ children }) => {
    return (
        <ul className="list-group">
            {React.Children.map(children, child => (
                <li className="list-group-item">{child}</li>
            ))}
        </ul>
    );
};

export default ListGroup;
