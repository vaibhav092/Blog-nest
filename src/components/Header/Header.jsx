import React from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import { Link ,useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logout } from '../../store/authSlice'



function Header() {
  const authStatus= useSelector((state)=>{state.auth.status})
  const navigate=useNavigate()
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  return (
    <header className='py-3 shadow  bg-teal-400'>
      <Container>
        <nav className='flex'>
          <div className='mr-4 w-[100px] h-[100px]'>
            <Link to="/">
              <Logo/>
            </Link>
          </div>
          <ul className='flex m-auto list-none'>
            {navItems.map((item)=>(
              item.active? (
                <li key={item.name}> 
                  <button onClick={()=>navigate(item.slug)} className='inline-block bg-[#FF6F61]} hover:bg-blue-600 rounded-full duration-200 px-6 py-4'>{item.name}</button>
                </li>
              ) : null
            ))}
            {authStatus&&(
              <li>
                <LogoutBtn/>
              </li>
              )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header