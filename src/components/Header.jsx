import React from 'react';
import { Link, NavLink, useNavigation } from 'react-router-dom';

const Header = () => {
    const navigation = useNavigation();
    return (
        <nav className="my-container py-5 navbar bg-slate-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/statistics'>Statistics</NavLink></li>
                        <li tabIndex={0}>
                            <NavLink to='/appliedjobs'> Applied Jobs
                            </NavLink>
                        </li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                    </ul>
                </div>
                <Link to='/' className="normal-case font-bold text-2xl"><span className='text-blue-500'>Job</span>Hunter</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5 font-medium">
                <li><NavLink className={navigation.state === 'loading' ? 'active' : 'default'} to='/statistics'>Statistics</NavLink></li>
                    <li tabIndex={0}>
                    <NavLink className={navigation.state === 'loading' ? 'active' : 'default'} to='/appliedjobs'> Applied Jobs </NavLink>
                    </li>
                    <li><NavLink className={navigation.state === 'loading' ? 'active' : 'default'} to='/blog'>Blog</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/' className="my-btn z-10">Start Applying</Link>
            </div>
        </nav>
    );
};

export default Header;