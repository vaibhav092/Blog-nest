import {Header,Footer,Container } from './components/index'
import React,{ useState,useEffect } from 'react';
import './App.css'
import { useDispatch } from 'react-redux';
import authservice from './appwrite/auth'
import {login,logout} from './store/authSlice'
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch=useDispatch()

  useEffect(() => {
    authservice.getCurrentUser()
      .then((userData)=>{
        if (userData) {
          dispatch(login({userData}))
        }else {
          dispatch(logout())
        }
    })
      .finally(
        setLoading(false)
      )
  }, []);

if (!loading) {
  return(
    <>
      <div className="bg-black h-[500px] text-white flex flex-wrap content-between text-2xl">
        <div className='w-full  block'>
          <Header/>
          <main>
            {/* <Outlet/> */}
          </main>
          <Footer/>
        </div>
      </div>
    </>
  )
} else {
  return(
    <>
    <div className="bg-black h-40 w-40 text-white"> Test 2 </div>
    </>
  )
}
}

export default App
