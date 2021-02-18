import React, { useEffect } from 'react';
import $ from 'jquery';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { setLangCorrect } from "../Trainer/trainerSlice";

function Modal() {
    const trainer = useSelector(state => state.trainer);

    const dispatch = useDispatch();

    useEffect(() => {
        if(!trainer.langCorrect) {
            $('#myModal').modal('show')
                .on('hidden.bs.modal', () => {
                dispatch(setLangCorrect(true))
            });
        }
    }, [trainer.langCorrect]);



    return (
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Неверная раскладка</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Пожалуйста, смените раскладку клавиатуры на английский.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Продолжить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;