import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// import useAuth from "../../../Hooks/useAuth";
// import useAuth from "../../../Hooks/useAuth";
// import { AuthContext } from "../../../Providers/AuthProviders";


const Header = () => {

    // const { user, signInOutUser } = useAuth()
    const user = 'jansu'


    const handleLogOUt = () => {
        signInOutUser()
            .then(() => {

            })
            .catch(error => {
                console.log(error.message);
            })

    }


    const navItems = (
        <>
            <li><NavLink className={({ isActive }) => isActive ? 'text-orange-400 font-bold' : ''} to="/">HOME</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'text-orange-400 font-bold' : ''} to="/total-collages">COLLAGE</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'text-orange-400 font-bold' : ''} to="/addmission">ADDMISSION</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'text-orange-400 font-bold' : ''} to="/my-collage">MY COLLAGE</NavLink></li>

        </>
    )


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Edtech</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="flex-none ml-4">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {/* <img src={user.photoURL} /> */}
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to='/user-profile' className="justify-between">
                                        Profile

                                    </Link>
                                </li>
                                {user
                                    ?
                                    <li><button onClick={handleLogOUt} className="">LOG OUT</button></li>
                                    :
                                    <li><NavLink className={({ isActive }) => isActive ? 'text-orange-400 font-bold' : ''} to="/login">LOGIN</NavLink></li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;