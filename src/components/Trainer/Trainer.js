import React, { useState, useEffect } from 'react';
import './Trainer.css';

function Trainer() {
    const [text, setText] = useState('');
    const [countPressedCorrect, setCountPressedCorrect] = useState(0);
    const [states, setStates] = useState([]);
    const [shouldWriteState, setShouldWrite] = useState(true);
    const [stop, setStop] = useState(false);

    useEffect(() => {
        fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=1')
            .then((res) => res.json())
            .then((text) => setText(text.join('').replace(/  /g, ' ').split('')))
            .catch((err) => console.log(err));
    }, [])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [text, countPressedCorrect, stop, shouldWriteState])

    const handleKeyDown = (e) => {
        if(e.key !== 'Shift') {

            if(e.key === text[countPressedCorrect]) {
                setShouldWrite(true);
                setStates((prevState) => {
                    if(!shouldWriteState) {
                        return [ ...prevState ];
                    }
                    return [
                        ...prevState,
                        true
                    ]
                });
                setCountPressedCorrect((prevState) => (prevState + 1));
                setStop(false);
            } else {
                if(stop) {
                    return;
                }
                setStates((prevState) => ([
                    ...prevState,
                    false
                ]));
                setStop(true);
                setShouldWrite(false);
            }
        }

    }

    return (
        <div className="d-flex p-3 trainer bg-white border border-white rounded">
            <div className="col symbols">
                {
                    text && text.map((elem, idx) => {
                        const state = states[idx];
                        return (
                            <span key={idx}
                                  className={`${state === true ? 'symbols_passed' : state === false ? 'symbols_failed' : 'symbols_black'} ${countPressedCorrect === idx && 'symbols_current'}`}>
                                {elem}</span>
                        )
                    })
                }
            </div>
            <div className="trainer__metrics col-3 d-flex flex-column align-content-center text-center">
                <div className="trainer__metric metric">
                    <p className="metric__text"><i className="bi bi-stopwatch"/> скорость</p>
                    <span>50 зн/мин</span>
                </div>
                <div className="trainer__metric metric">
                    <p className="metric__text"><i className="bi bi-record-circle"/> точность</p>
                    <span>100%</span>
                </div>
            </div>
        </div>
    );
}

export default Trainer;