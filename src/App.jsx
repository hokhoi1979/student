
import HeaderComponent from "./components/Header/HeaderComponent";
import ContentEx from "./components/Content/ContentEx";
import FooterEx from "./components/Footer/FooterEx";
import List from "./components/Content/list";
import MainComponent from "./components/MainComponent";
import StateClass from "./StateClass";

function App() {
  // const player= {id:0, plaerName:"Ronaldo", price:500};
  return (
    // <div>
    //   <button type="button" className="btn btn-primary">{player.plaerName}</button>
    //   <button type="button" className="btn btn-secondary">{player.id}</button>
    // </div>

    <div>
      <HeaderComponent/>
      <ContentEx/>
      <FooterEx/>
      {/* <MainComponent/> */}
        {/* <StateClass/> */}
    </div>
  )
}

export default App;