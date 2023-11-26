import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import Header from './components/Header';
import Body from './components/Body';



function App(props) {
  return (
    <div>
     <Header/>

      <div>
     <Body data={props.data}/>
      </div>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
