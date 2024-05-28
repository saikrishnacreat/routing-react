import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
const Dashboard = lazy(() =>import('./components/Dashboard'))
const  Landing  = lazy(()=>import('./components/Landing'))


function App() {
  return (
    <div>
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/dashboard" element={<Suspense fallback={"loading.."}><Dashboard /></Suspense>} />
        <Route path="/" element={<Suspense fallback={"loading.."}><Landing /></Suspense>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

function Appbar(){
  const navigate = useNavigate();
  return <div >
      <button onClick={() =>{
        navigate("/");
      }}>Landing</button>
      <button onClick={()=>{
        navigate("/dashboard");
      }}>Dashboard</button>
</div>
}

export default App
