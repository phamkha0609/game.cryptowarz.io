import React from 'react'
import "./Modal.scss";
import HistoryItem from './HistoryItem';

function Modal({ isShow, stateChager }) {
    const item = [
        {
            time: '30/09/2022',
            earned: 3000,
            option: '3 months'
        },
        {
            time: '01/10/2022',
            earned: 900,
            option: '6 months'
        },
        {
            time: '02/10/2022',
            earned: 1500,
            option: '1 year'
        },
    ]

    return (
        <>
            {isShow ?
                <div className="modal-wrap">
                    <div className="content">
                        <button onClick={() => stateChager(false)}>X</button>
                        <HistoryItem items={item} />
                    </div>
                </div> :
                <></>
            }
        </>
    )
}

export default Modal