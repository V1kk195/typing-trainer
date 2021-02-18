import React from "react";

import './Statistics.css';

function Statistics() {
    return (
        <div className="statistics col-3 d-flex flex-column align-content-center text-center">
            <div className="statistics__metric metric">
                <p className="metric__text"><i className="bi bi-stopwatch"/> скорость</p>
                <span>50 зн/мин</span>
            </div>
            <div className="statistics__metric metric">
                <p className="metric__text"><i className="bi bi-record-circle"/> точность</p>
                <span>100%</span>
            </div>
        </div>
    )
}

export default Statistics;