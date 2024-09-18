/* eslint-disable react/prop-types */
import  { Component } from 'react';


// export default class ContentPre extends Component {
//   render() {
//     const { playerData } = this.props;


//     return (
//       <div>
//         <h2>Player List</h2>
//         <ul>
        //   {playerData.map(player => (
        //     <li key={player.id}>
        //       <h3>{player.name}</h3>
        //     </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }


// import React from 'react';
// import PropTypes from 'prop-types'; // Thêm PropTypes để kiểm tra kiểu dữ liệu

// function ContentPre({ playerData }) {
//   return (
//     <div>
//       {
//           playerData.map(player => (
//             <h3 key={player.id}>{player.name}</h3>
//           ))
//         }
//     </div>
//   );
// }

// // Định nghĩa PropTypes để kiểm tra kiểu dữ liệu của props
// ContentPre.propTypes = {
//   playerData: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       club: PropTypes.string,
//       img: PropTypes.string
//     })
//   ).isRequired,
// };

// export default ContentPre;


export default class ContentPre extends Component {
  render() {
    const{playerData} = this.props;
    return (
      <div>
        {
            playerData.map((player)=>(
                <h3 key={player.id}>{player.name}</h3>
            ))
        }
      </div>
    )
  }
}


