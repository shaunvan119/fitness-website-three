import Main from "./containers/Main";
import Footer from "./containers/Footer";
import { Routes, Route } from "react-router-dom";
import WinPage from "./containers/WinPage";


function App() {
  return (
    <div className="App">
     <Routes>
      <Route exact path="/" element={[<Main/>,
      <Footer/>,]}/> 
        <Route path="/contactWin" element={<WinPage/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
