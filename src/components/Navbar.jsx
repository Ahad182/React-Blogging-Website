import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { FaInstagramSquare } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { MdCancel } from "react-icons/md";






const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [isLogin,setLogin] = useState(true)
    const NavMenu = [
        { path: "/", link: "Home" },
        { path: "about", link: "About" },
        { path: "blogs", link: "Blog" },
        { path: "contact", link: "Contact" },
    ]

    const ToggleMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <div className='mb-[70px]'>
            <header className=' bg-black w-[100vw]  text-white fixed top-0 left-0 right-0 z-10'>
                <nav className=' px-6 mx-auto h-[70px] flex items-center justify-between'>
                    <Link to="/" className='text-white  font-bold text-2xl
            '> CodeWith<span className='text-orange-500'>Ahad</span></Link>

                    {/* menu for LG secreen */}
                    <ul className='hidden md:flex gap-12 font-semibold'>
                        {NavMenu.map(({ path, link }) => {
                            return (
                                <li key={path}><NavLink to={path} className={ ` ({ isActive, isPending }) =>
                                     isActive ? "active" : ""
                                  `}>{link}</NavLink></li>
                            )
                        })
                        }
                    </ul>


                    <div className="hidden  social-links text-white md:flex items-center gap-3">
                        <Link><FaFacebook className='hover:text-orange-500 ' /></Link>
                        <Link><FaInstagramSquare className='hover:text-orange-500 ' /></Link>
                        <Link><TiSocialTwitter className='hover:text-orange-500 ' /></Link>
                        <Link><FaLinkedin className='hover:text-orange-500 ' /></Link>
                        <Link><FaYoutube className='hover:text-orange-500 ' /></Link>
                        <button className='px-6 py-3 bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-all duration-500  rounded-lg' onClick={()=>setLogin( !isLogin)}>Login</button>
                    </div>
                    <button onClick={ToggleMenu}>
                        {showMenu ? <MdCancel className='text-white md:hidden ' /> : <TiThMenu className='text-white md:hidden ' />}
                    </button>
                </nav>
                {/* menu for small secreen  */}
                <ul className={` w-full md:hidden gap-12 font-bold text-center  ${showMenu ? "" : 'hidden'} `}>
                    {NavMenu.map(({ path, link }) => {
                        return (
                            <div key={path}>
                                <li onClick={ToggleMenu} className=' my-5 mx-5 '><NavLink to={path} className={({ isActive }) => {
                                    isActive ? "active" : ""
                                }}>{link}</NavLink></li>
                                <hr />
                            </div>

                        )
                    })
                    }
                </ul>
            </header>
            <div className='absolute z-10 w-full h-screen top-0 left-0 right-0  justify-center items-center'
            style={{display:isLogin?"none":"flex"}}>
                <div className="w-[350px]  bg-slate-900 text-center p-8">
                    <h1 className='text-white font-bold text-2xl '>Login</h1>
                    <form action="">
                    <input type="email" name='email'  className='w-full rounded-md px-5 py-3 border-none my-3' placeholder='Enter Email' />
                    <input className='w-full rounded-md px-5 py-3 border-none my-3' type="password"  placeholder='Enter Password'/>
                    <button type='submit' className='bg-green-500 mb-3 px-4 py-3 rounded-lg'>LogIn</button>
                    <button type='reset' className='bg-green-500 mb-3 px-4 py-3 rounded-lg ml-3'>Reset</button>
                    </form>
                    <button  className='bg-red-500  px-4 py-3 rounded-lg w-full' onClick={()=>setLogin(!isLogin)}>Close</button>


                </div>
                       

            </div>
        </div>
    )
}

export default Navbar
