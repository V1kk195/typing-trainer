import React from "react";
import { useSelector } from "react-redux";

import './Statistics.css';

function Statistics() {
    const trainer = useSelector(state => state.trainer);

    const timeSpent = (trainer.endTime - trainer.startTime) / 60000;
    const speed = Math.round(trainer.keysPressedCorrect / timeSpent);

    const accuracy = Math.round(trainer.keysPressedCorrect / trainer.keysPressedAll * 100);

    return (
        <div className="statistics col-3 d-flex flex-column align-content-center text-center">
            <div className="statistics__metric metric">
                <p className="metric__text text-secondary"><i className="bi bi-stopwatch text-secondary"/> скорость</p>
                <span className="text-primary metric__value">{isNaN(speed) ? 0 : speed} зн/мин</span>
            </div>
            <div className="statistics__metric metric">
                <p className="metric__text text-secondary"><i className="bi bi-record-circle text-secondary"/> точность</p>
                <span className="text-primary metric__value">{isNaN(accuracy) ? 0 : accuracy}%</span>
            </div>
        </div>
    )
}

export default Statistics;