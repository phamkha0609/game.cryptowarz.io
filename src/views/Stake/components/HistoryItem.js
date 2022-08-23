import React from 'react'
import './Modal.scss'

function HistoryItem({ items }) {
  return (
    <div className='history-item'>
      <table>
        <thead>
          <th>Time</th>
          <th>Earned</th>
          <th>Option</th>
        </thead>
        <tbody>
          {items.map(e => {
            return <tr>
              <td>
                {e.time}
              </td>
              <td>
                {e.earned}
              </td>
              <td>
                {e.option}
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default HistoryItem