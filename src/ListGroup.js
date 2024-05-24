import React from 'react';
import PropTypes from 'prop-types';

const ListGroup = ({ children }) => {
    return (
        <ul className="list-group">
            {React.Children.map(children, (child, index) => (
                <li className="list-group-item" key={index}>
                    {child}
                </li>
            ))}
        </ul>
    );
};

ListGroup.propTypes = {
    children: PropTypes.node.isRequired
};

export default ListGroup;