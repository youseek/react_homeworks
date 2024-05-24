import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ text, type }) => {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {text}
        </div>
    );
};

Alert.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
        'primary', 'secondary', 'success', 'danger',
        'warning', 'info', 'light', 'dark'
    ]).isRequired
};

export default Alert;
