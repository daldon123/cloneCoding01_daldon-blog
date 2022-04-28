import Home from "./page/Home";
import TopBar from "./topbar/TopBar";
import Single from "./single/Single";
import Write from "./write/Write";
import Login from "./login/Login";
import Register from "./register/register";
import Settings from "./settings/Settings";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import TextEdit from "./textedit/TextEdit";


function App() {
  const user = false;
  return (
    <BrowserRouter>
    <TopBar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/*" element={<Single/>} />           
        <Route path="/write/*" element={<Write />} />
        <Route path="/login/*" element={<Login />}/>
        <Route path="/settings/*" element={<Settings />}/>
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
