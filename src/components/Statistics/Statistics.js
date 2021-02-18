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
                <p className="metric__text"><i className="bi bi-stopwatch"/> скорость</p>
                <span>{isNaN(speed) ? 0 : speed} зн/мин</span>
            </div>
            <div className="statistics__metric metric">
                <p className="metric__text"><i className="bi bi-record-circle"/> точность</p>
                <span>{isNaN(accuracy) ? 0 : accuracy}%</span>
            </div>
        </div>
    )
}

export default Statistics;