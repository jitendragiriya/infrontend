import React, { useEffect } from "react";
import LoginWithGoogle from "./pages/Login";
import axios from "axios";
import { useAuth } from "./context/auth";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  redirect,
  Navigate
} from "react-router-dom";
import Home from "./pages/Home";
import CourseDetails from "./components/CourseDetails";



function App() {
  const { token, setUser } = useAuth()
  useEffect(() => {
    if (token) {
      axios.get(`${process.env.REACT_APP_BASE_URL}/api/profile`, {
        headers: {
          "token": token
        }
      }).then((res) => {
        setUser(res?.data)
      }).catch((err) => console.log(err))
    }
    
  }, [token])



  return (
    <div>

      <Router>
        <Header />
        <Routes>
          {
            token ?
              <>    <Route path="/" element={<Home />} />
                <Route path="/:id" element={<CourseDetails />} /></> :
              <Route path="*" element={<LoginWithGoogle />} />
          }

        </Routes>
      </Router>
    </div >

  );
}

export default App;