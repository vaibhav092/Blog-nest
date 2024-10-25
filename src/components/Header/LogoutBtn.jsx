import React from 'react'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useDispatch } from 'react-redux'
function LogoutBtn() {

    const dispatch=useDispatch()
    const logoutHandler=()=>{
        authService.logout()
            .then(()=>{
                dispatch(logout())
            })
    }
    return(
        <button className='inline-block bg-red-500 hover:bg-blue-600 rounded-full duration-200 px-6 py-4' onClick={logoutHandler}>
            Logout
        </button>
    )
}

export default LogoutBtn