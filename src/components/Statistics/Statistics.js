import React from "react";
import { useSelector } from "react-redux";

import './Statistics.css';

function Statistics() {
    const keys = useSelector(state => state.trainer);

    const accuracy = keys.keysPressedCorrect ? Math.round(keys.keysPressedCorrect / keys.keysPressedAll * 100) : 0;

    return (
        <div className="statistics col-3 d-flex flex-column align-content-center text-center">
            <div className="statistics__metric metric">
                <p className="metric__text"><i className="bi bi-stopwatch"/> скорость</p>
                <span>50 зн/мин</span>
            </div>
            <div className="statistics__metric metric">
                <p className="metric__text"><i className="bi bi-record-circle"/> точность</p>
                <span>{accuracy}%</span>
            </div>
        </div>
    )
}

export default Statistics;