import  { Component } from 'react'
import { Players } from './Shared/ListOfPlayer'
import ContentPre from './ContentPre'
export default class MainComponent extends Component {
    constructor(){
        super()
        this.state={
            players:Players
        }
    }
  render() {
    return (
        <ContentPre playerData={this.state.players}/>
    )
  }
}
