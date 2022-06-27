import React, { useContext } from 'react';
import { UserContext } from '../User';
import {LoginButton} from './Button';

const Navbar = () => {
    const [user, setUser] = useContext(UserContext);
    const logoutHandler = () =>{
        setUser('')
    }
    return (
        <nav className="px-4 py-2.5 bg-[#303F60] border-b-2 border-white">   
            <div className="flex justify-between items-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="83" height="26" viewBox="0 0 83 26">
                        <text id="MyJobs" transform="translate(0 21)" fill="#fff" fontSize="22" fontFamily="HelveticaNeue-Bold, Helvetica Neue" fontWeight="700"><tspan x="0" y="0">My</tspan><tspan y="0" fill="#43afff">Jobs</tspan></text>
                    </svg>
                </div>

                <div className='py-3'>
                    {user? <LoginButton to="/" label="Logout" onClick={logoutHandler} /> :<LoginButton to="/login" label="Login/Signup" />}
                </div>
            </div>
        </nav>
    )
}

export default Navbar