import React, {useState} from 'react'
import './Stake.css'
import logo from "../../assets/img/logo.png";
import history from "../../assets/img/history.svg";
import Modal from "./components/Modal";

export const Stake = () => {
    const [show, setShow] = useState(false);

    const showHistory = () => {
        setShow(true);
    }

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

                        <div className='history'>
                            <button style={{backgroundColor: 'transparent', border: 'none'}} onClick={() => showHistory()}>
                                <img src={history} alt="history" width={30} style={{cursor: "pointer"}}/>
                            </button>
                        </div>

                        <Modal isShow={show} stateChager={setShow}/>

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

                        <select title='bulk'>
                            <option value="1">3 Months</option>
                            <option value="2">6 Months</option>
                            <option value="3">1 Year</option>
                        </select>

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