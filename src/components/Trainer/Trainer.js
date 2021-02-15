import React from 'react';
import './Trainer.css';

function Trainer() {
    const [text, setText] = React.useState('');

    React.useEffect(() => {
        fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=2')
            .then((res) => res.json())
            .then((text) => setText(text))
            .catch((err) => console.log(err));
    }, [])

    return (
        <div className="d-flex p-3 trainer bg-white border border-white rounded">
            <div className="col">{text}</div>
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