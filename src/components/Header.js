import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/auth';

const Header = () => {
  const { logout, token } = useAuth()
  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen(!open)

  return (
    <nav className="bg-teal-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-bold">
          Courses
        </Link>
        <div className="flex space-x-4 items-center">
          <Link to="/home" className="text-white">
            Home
          </Link>
          {
            token ?
              <button onClick={toggleOpen} className='h-10 w-10 rounded-full overflow-hidden'><img src='https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg' /></button>
              : null
          }    </div>
        {
          token ?
            <div className={`${open ? "absolute top-20 right-4 w-fit bg-teal-300 rounded-md px-4 py-1":"hidden"} `}>
              <button className='' onClick={logout}>logout</button>
            </div> : null
        }
      </div>
    </nav>
  );
};

export default Header;
