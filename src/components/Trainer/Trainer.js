import React, { useState, useEffect } from 'react';
import './Trainer.css';

function Trainer() {
    const [text, setText] = useState('');
    const [textLoading, setTextLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [countPressedCorrect, setCountPressedCorrect] = useState(0);
    const [states, setStates] = useState([]);
    const [shouldWriteState, setShouldWrite] = useState(true);
    const [stop, setStop] = useState(false);

    useEffect(() => {
        fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=1')
            .then((res) => res.json())
            .then((text) => {
                setText(text.join('').replace(/ {2}/g, ' ').split(''));
                setTextLoading(false);
            })
            .catch(() => {
                setHasError(true);
                setTextLoading(false);
            });
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
        <div className="col symbols trainer">
            {
                textLoading ? (
                    <div className="trainer__spinner d-flex justify-content-center">
                        <div className="spinner-border text-secondary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>)
                    :
                    hasError
                    ?
                    <div className="trainer__error d-flex align-items-center justify-content-center">
                        <p className="text-center">Error occurred. Please, re-load the page.</p>
                    </div>
                    :
                    text.map((elem, idx) => {
                        const state = states[idx];
                        return (
                            <span key={idx}
                                  className={`${state === true ? 'symbols_passed' : state === false ?                                       'symbols_failed' : 'symbols_black'} ${countPressedCorrect === idx &&                                      'symbols_current'}`}>
                                {elem}</span>
                        )
                    })
            }
        </div>
    );
}

export default Trainer;