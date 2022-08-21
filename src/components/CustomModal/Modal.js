import React from 'react'
import "./Modal.scss"
import nft from "../../assets/img/tmp/wood.png"

function Modal({ isShow, reward, changeShowStatus }) {
    return (
        <>
            {isShow ?
                <div className='modal-box'>
                    <div className='content'>
                        <div className="pyro">
                            <div className="before"></div>
                            <div className="after"></div>
                        </div>
                        <img src={nft} alt="nft" />
                        <div className='text-content'>
                            <div><h2>{reward.name}</h2></div>
                            <hr/>
                            <div>Type: <span>{reward.type}</span></div>
                            <hr/>
                            <div>Property: <span>{reward.property}</span></div>
                        </div>
                    </div>

                    <button onClick={() => changeShowStatus(false)}>CLAIM</button>
                </div> :
                <></>
            }
        </>
    )
}

export default Modal