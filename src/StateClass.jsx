import React, { Component, useState } from 'react'
import './StateClass.scss'
// export default class StateClass extends Component {
//     constructor(){
//         super()
//         {this.state={
//             count:0
//         }}
//     }
//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={()=>this.setState({count:this.state.count+1})}>Click me</button>
//       </div>
//     )
//   }
// }

function StateClass() {
    const [count, setCount] = useState(0);
    const handleClick=()=>{
        setCount(count+1);
    }

    const [car, setCar]=useState({
        name:'mer',
        color:'red',
        origin:'England',
        type:'1',
    });

    const handleCar=()=>{
        setCar({...car,color:'blue'});
    }
    return (
        <div>
            <p>You clicked{count}times</p>
            <button onClick={handleClick}>Click me</button>
            
            <p>Xe toi ten la {car.name} co mau {car.color} nguon goc tu {car.origin} loai {car.type}</p>
            <button onClick={handleCar}>buy</button>
        </div>
    );
}

export default StateClass;

