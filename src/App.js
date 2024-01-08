import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import { useAuthContext } from "./hooks/useAuthContext";

function App() {

  const { user, authIsReady } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={user ? <Home></Home> : <Navigate to='/sign-in'></Navigate>}></Route>
            <Route path="/sign-in" element={user ? <Home></Home> : <Login></Login>}></Route>
            <Route path="/sign-up" element={user ? <Home></Home> : <SignUp></SignUp>}></Route>
          </Routes>
        </BrowserRouter>
      )
      }
    </div >
  )
}

export default App;
