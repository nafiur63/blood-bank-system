import {Route} from "react-router-dom" 
import './App.css';
import WelcomePage from './components/WelcomePage/WelcomePage';
import SignUp from "./components/SignUp/SignUp";


function App() {
  return (
    <>
       {/* <Route exact path="/" component={WelcomePage} />
       <Route path="/uploadphoto" component ={UploadPhoto} /> */}
       <SignUp/>
    </>
  );
}

export default App;
