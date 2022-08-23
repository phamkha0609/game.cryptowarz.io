import React from 'react'
import './Modal.scss'
import clock from "../../../assets/img/clock.svg";
import cacl from "../../../assets/img/calculator.svg";

function HistoryItem({ data }) {
  return (
    <div className='history-item'>
      <div className='col-element'>
        <small>Total staked</small>
        <div>
          {data.totalStaked.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} BUSD
        </div>
      </div>
      <div className='col-element'>
        <small>APY</small>
        <div>
          {data.apy}%  {" "}
          <img alt="icon" src={cacl} width={20} />
        </div>
      </div>
      <div className='col-element'>
        <small>Ends in</small>
        <div>
          {(data.endsIn).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} blocks {" "}
          <img alt="icon" src={clock} width={20} />
        </div>
      </div>
      <div className='col-element'>
        <div className={data.endsIn == 1200000 ? 'btn-claim-stake-disable' : 'btn-claim-stake'}>CLAIM</div>
      </div>
    </div>
  )
}

export default HistoryItem