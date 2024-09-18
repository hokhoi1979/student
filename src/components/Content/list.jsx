import  { Component } from 'react'
import { Players } from '../Shared/ListOfPlayer'
export default class List extends Component {
  render() {
    return (
      <div>
        {Players.map((player)=>(
            <div className='information' key={player.id}>
                
                <div className='ro'>
                    <p >{player.name}</p>                 
                </div>
                {/* <img src={player.img} alt="" /> */}
                <div className='man'>
                    <p >{player.club}</p>
                </div>
                <div className='inf-2'>
                <p>
                  <button>Detail</button>
                </p>
              </div>    
          </div>
 
        ))}
      </div>
    )
  }
}


