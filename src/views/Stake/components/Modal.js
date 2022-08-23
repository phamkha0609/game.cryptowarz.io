import React from 'react'
import "./Modal.scss";
import HistoryItem from './HistoryItem';

function Modal({ isShow, stateChager }) {
    const items = [
        {
            earned: 1000,
            totalStaked: 3000,
            apy: 17.5,
            endsIn: 1000000
        },
        {
            earned: 1000,
            totalStaked: 3000,
            apy: 17.5,
            endsIn: 1000000
        },
        {
            earned: 1000,
            totalStaked: 3000,
            apy: 17.5,
            endsIn: 1200000
        },
    ]

    return (
        <>
            {isShow ?
                <div className="modal-wrap">
                    <div className="content">
                        <button onClick={() => stateChager(false)}>X</button>
                        {items.map(e => {
                            return <HistoryItem data={e} />
                        })}
                    </div>
                </div> :
                <></>
            }
        </>
    )
}

export default Modal