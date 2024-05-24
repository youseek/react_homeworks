import React, { useState } from 'react';
import classNames from 'classnames';
import './BtnGroup.css';

const BtnGroup = () => {
    const [activeBtn, setActiveBtn] = useState(null);

    const handleBtnClick = (btnName) => {
        setActiveBtn(btnName);
    };

    return (
        <div className="btn-group" role="group">
            <button
                type="button"
                className={classNames('btn', 'btn-secondary', 'left', { 'active': activeBtn === 'left' })}
                onClick={() => handleBtnClick('left')}
            >
                Left
            </button>
            <button
                type="button"
                className={classNames('btn', 'btn-secondary', 'right', { 'active': activeBtn === 'right' })}
                onClick={() => handleBtnClick('right')}
            >
                Right
            </button>
        </div>
    );
};

export default BtnGroup;
