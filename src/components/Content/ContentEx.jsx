/* eslint-disable react/jsx-key */
import { Component, useState } from 'react';
import './Content.scss';
// import crImage from '../../img/cr.jpg';
// import kante from '../../img/kante.jpg';
// import messi from '../../img/messi.jpg';
// import neymar from '../../img/neymar.jpg';
// import kane from '../../img/kane.jpg';
// import haaland from '../../img/haaland.jpg';
import { Players } from '../Shared/ListOfPlayer';




export default function ContentEx () {
  const [player, setPlayer]=useState([]);
    return (
      <div className='content'>
        <div className='container'>
        <div className='row'>
            {
              Players.map(player=>(
                <div key={player.id} className='col-md-4'>
              <img  src={player.img} alt="CR Image" className="img-fluid" />
              
              <div className='information'>
                <div className='ro'>
                  <p key={player.id}>{player.name}</p>                 
                </div>
                <div className='man'>
                <p >{player.club}</p>
                </div>
              </div>

              <div className='inf-2'>
                <p>
                  <button onClick={()=>{setPlayer(player)}}>
                    <a href="#popup1" id='openPopUp'>Detail</a>
                  </button>
                </p>
              </div>       
            </div>
              ))
            }

            <div id='popup1' className='overlay'>
              <div className='popup'>
                <img src={player.img} alt="" />
                <h2>{player.name}</h2>

                <a className='close' href="#">&times;</a>

                <div className='content'>
                  {player.info}
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  
}




// export default class ContentEx extends Component {
//   render() {
//     return (
//       <div className='content'>
//         <div className='container'>
//         <div className='row'>
//             <div className='col-md-4'>
//               <img src={crImage} alt="CR Image" className="img-fluid" />
              
//               <div className='information'>
//                 <div className='ro'>
//                   <p >Cristiano Ronaldo</p>                 
//                 </div>
//                 <div className='man'>
//                 <p >Manchester United</p>
//                 </div>
//               </div>

//               <div className='inf-2'>
//                 <p>
//                   <button>Detail</button>
//                 </p>
//               </div>       
//             </div>
            
//             <div className='col-md-4'>
//               <img src={kante} alt="Kante Image" className="img-fluid" />
              
//               <div className='information'>
//                 <div className='ro'>
//                   <p>NGolo Kanté</p>
//                 </div>
//                 <div className='man'>
//                   <p>Chelsea</p>
//                 </div>
//               </div>

//               <div className='inf-2'>
//                 <p>
//                   <button>Detail</button>
//                 </p>
//               </div>
//             </div>
            
//             <div className='col-md-4'>
//               <img src={messi} alt="Messi Image" className="img-fluid" />
              
//               <div className='information'>
//                 <div className='ro'>
//                   <p>Lionel Messi</p>
//                 </div>
//                 <div className='man'>
//                   <p>PSG</p>
//                 </div>
//               </div>

//               <div className='inf-2'>
//                 <p>
//                   <button>Detail</button>
//                 </p>
//               </div>
//             </div>
            
//           </div>
//           <br />
//           <div className='row'>
//             <div className='col-md-4'>
//               <img src={neymar} alt="CR Image" className="img-fluid" />
              
//               <div className='information'>
//                 <div className='ro'>
//                   <p >Neymar</p>                 
//                 </div>
//                 <div className='man'>
//                 <p >PSG</p>
//                 </div>
//               </div>

//               <div className='inf-2'>
//                 <p>
//                   <button>Detail</button>
//                 </p>
//               </div>       
//             </div>
            
//             <div className='col-md-4'>
//               <img src={kane} alt="Kante Image" className="img-fluid" />
              
//               <div className='information'>
//                 <div className='ro'>
//                   <p>Kane</p>
//                 </div>
//                 <div className='man'>
//                   <p>Tottenham</p>
//                 </div>
//               </div>

//               <div className='inf-2'>
//                 <p>
//                   <button>Detail</button>
//                 </p>
//               </div>
//             </div>
            
//             <div className='col-md-4'>
//               <img src={haaland} alt="Messi Image" className="img-fluid" />
              
//               <div className='information'>
//                 <div className='ro'>
//                   <p>Haaland</p>
//                 </div>
//                 <div className='man'>
//                   <p>Manchester City</p>
//                 </div>
//               </div>

//               <div className='inf-2'>
//                 <p>
//                   <button>Detail</button>
//                 </p>
//               </div>
//             </div>
            
//           </div>
//         </div>
//         <br />
//       </div>
//     );
//   }
// }








