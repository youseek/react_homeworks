import React, { useState } from 'react';
import './Collapse.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Collapse({ text, opened = true }) {
    const [isOpened, setIsOpened] = useState(opened);
    const toggleCollapse = () => {
        setIsOpened((prevIsOpened) => !prevIsOpened);
    };
    return (
        <div>
            <p>
                <a
                    className="btn btn-primary"
                    href="#"
                    onClick={toggleCollapse}
                    data-bs-toggle="collapse"
                    aria-expanded={isOpened ? "true" : "false"}
                >
                    Link
                </a>
            </p>
            <div className={`collapse ${isOpened ? 'show' : ''}`}>
                <div className="card card-body">
                    {text}
                </div>
            </div>
        </div>
    );
}
export default Collapse;
