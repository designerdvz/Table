import React from 'react';
import s from './modal.module.css';
import Question from './../images/Question.png'

function Modal(props) {
    const [open,setOpen] = React.useState(false)

    return ( <div>
            <img className={s.Question} src={Question} onClick={ () => {
                setOpen(true)
            }} />
            {open && (
                <div className={s.overlay}>
                    <div className={s.modal}>
                        <svg className={s.svg} onClick={() => {
                            setOpen(false)
                        }} height="200" viewBox="0 0 200 200" width="200">
                            <title />
                            <path  d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                        </svg>
                        <div className={s.modalText}>
                            {props.text}
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )
}
export default Modal;

