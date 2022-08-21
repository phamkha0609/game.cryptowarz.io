import React from 'react'
import "./Modal.scss"
import nft from "../../assets/img/tmp/wood.png"

function Modal({ isShow, reward }) {
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
                        <div>Name: {reward.name}</div>
                        <div>Type: {reward.type}</div>
                        <div>Property: {reward.property}</div>
                    </div>
                </div> :
                <></>
            }
        </>
    )
}

export default Modal