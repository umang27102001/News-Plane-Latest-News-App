import React ,{useState}from 'react'
import NavBar from './component/NavBar'
import News from './component/News'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";


export default function App() {
  const [mode, setMode] = useState("light")
  const changeMode=()=>{
    document.body.style.backgroundColor=mode=="light"?"grey":"white"
    setMode(mode=="light"?"dark":"light")
    document.body.style.transition="0.3s"
  }
  return <BrowserRouter>
    
        <NavBar mode={mode} changeMode={changeMode}/>
          <Routes>
            <Route path="/" element={<News  key="general1" category={"General"} mode={mode}/>} />
            <Route path="/TopHeadLines" element={<News  key="general1" category={"General"} mode={mode}/>} />
            <Route path="/Business" element={<News  key="business" category={"Business"}mode={mode} />}/>
            <Route path="/Health" element={<News  key="health" category={"Health"} mode={mode}/>} />
            <Route path="/Science" element={<News  key="science" category={"Science"} mode={mode}/>} />
            <Route path="/Sports" element={<News  key="sports" category={"Sports"} mode={mode}/>} />
            <Route path="/Entertainment" element={<News  key="entertainment" category={"Entertainment"} mode={mode}/>} />
            <Route path="/Technology" element={<News key="technology"  category={"Technology"} mode={mode}/>} />
        </Routes>
      
    </BrowserRouter>
  
}
