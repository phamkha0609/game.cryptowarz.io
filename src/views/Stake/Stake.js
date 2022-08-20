import React from 'react'
import './Stake.css'
import logo from "../../assets/img/logo.png";

export const Stake = () => {
    return (
        <div className='contaner stake-wrap'>
            <h1 className='title'>STAKE $WARZ TO EARN REWARDS</h1>

            <div className='content-wrap'>
                <div className='caculating'>
                    <div className='caculate-board'>
                        <div className='caculate-title'>
                            <img src={logo} width="60" alt="logo" />
                            <h3>
                                STAKING CALCULATE
                            </h3>
                        </div>

                        <div className='balance'>
                            <div>Stake amount</div>
                            <div>Balance: 0 WARZ</div>
                        </div>

                        <div className='input-board'>
                            <div>
                                <img src={logo} width="30" alt="logo" />
                                WARZ
                            </div>
                            <input placeholder='0.0' type={'number'} min={0}/>
                            <button>MAX</button>
                        </div>

                        <div className='arrow'>&darr;</div>

                        <div className='info'>
                            <div className='info-item'>
                                <div>Locktime:</div>
                                <b>0 days</b>
                            </div>
                            <div className='info-item'>
                                <div>APR(%):</div>
                                <b>0 %</b>
                            </div>
                            <div className='info-item'>
                                <div>Estimated reward:</div>
                                <b>0 WARZ</b>
                            </div>
                        </div>

                        <div className='lock'>
                            Lock token until 01/10/2022
                        </div>

                        <button className='btn-stake'>STAKE</button>
                    </div>
                </div>
                <div className='explan'>

                </div>
            </div>
        </div>
    )
}