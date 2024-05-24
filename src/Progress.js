import React from 'react';
import PropTypes from 'prop-types';
import './Progress.css';

const Progress = ({ percentage }) => {
    return (
        <div className="progress">
            <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={percentage}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label="progressbar"
                style={{ width: `${percentage}%` }}
            >
            </div>
        </div>
    );
};

Progress.propTypes = {
    percentage: PropTypes.number.isRequired
};

export default Progress;
