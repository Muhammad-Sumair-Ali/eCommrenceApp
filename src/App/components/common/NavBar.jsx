import { useState } from 'react';
import {  FaRegUser } from "react-icons/fa";
import {NavLink,useLocation} from 'react-router-dom'
import ThemeToogle from '../panel/ThemeToogle';
import AddPost from './AddPost';
import { _useAuth } from '../../action/useAuth';
import { useAuth } from '../../context/AuthContext';
import UserProfile from './Profile';
import UserPic from "../panel/demo.png"
import { AddToCart } from './AddToCart';
import SearchItems from './Searchitems';


const NavBar = () => {    
  const location = useLocation().pathname;
  const [ authData ] = useAuth()
   const {signOutUser} = _useAuth()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
   <div>
     <nav className="bg-gradient-to-r from-blue-600 to-sky-500 text-white border-gray-400  dark:text-white dark:from-slate-900 dark:to-gray-800 backdrop-blur-xl shadow-lg">
       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
         <i  className="flex items-center space-x-2 rtl:space-x-reverse">
         
           <span className="self-center text-md font-semibold m-0 p-0 whitespace-nowrap dark:text-white">
           <NavLink to="/"> SUMAIR  </NavLink>
           </span>
         </i>

         <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse ">
  
      
           {location.includes("/product") ? "" : <SearchItems/>}
             
             
         <AddPost/>
            
            <ThemeToogle/>
          <AddToCart/>
           <UserProfile/>
           <button
             data-collapse-toggle="navbar-user"
             type="button"
             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-transparent dark:text-gray-400 dark:hover:bg-gray-200 dark:focus:ring-gray-600 md:block hidden"
             aria-controls="navbar-user"
             aria-expanded={isNavOpen}
             onClick={toggleNav}
           >
             <span className="sr-only">Open main menu</span>
             <svg
               className="w-5 h-5"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 17 14"
             >
               <path
                 stroke="currentColor"
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth={2}
                 d="M1 1h15M1 7h15M1 13h15"
               />
             </svg>
           </button>
         </div>
         <div
           className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isNavOpen ? 'block' : 'hidden'}`}
           id="navbar-user"
         >  
           
           <ul className="flex flex-col font-medium  md:p-3 p-4 mt-4 rounded-lg  text-white border-gray-400 bg-gradient-to-r from-blue-400/50 to-sky-600/25 backdrop-blur-md  dark:from-gray-800 dark:to-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-800 dark:bg-zinc-600 md:bg-transparent ">
             <li>
               <NavLink to="/"
                  
                 className="block py-2 px-2 hover:bg-gray-200 md:hover:bg-transparent hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
                 aria-current="page"
               >  
                 Home
               </NavLink>
             </li>
             <li>
               <NavLink to="/"
                 
                 className="block py-2 px-2 hover:bg-gray-200 md:hover:bg-transparent hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
               >
                 About
               </NavLink>
             </li>
             <li>
               <NavLink to="/"
                 
                 className="block py-2 px-2 hover:bg-gray-200 md:hover:bg-transparent hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
               >
                 Services
               </NavLink>
             </li>
             <li>
               <NavLink to="/"
                 
                 className="block py-2 px-2 hover:bg-gray-200 md:hover:bg-transparent hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
               >
                 Pricing
               </NavLink>
             </li>
             <li>
               <NavLink to="/"
                 
                 className="block py-2 px-2 hover:bg-gray-200 md:hover:bg-transparent hover:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-white"
               >
                 Contact
               </NavLink>
             </li>
           </ul>
      
         </div>
       </div>
     </nav>
   </div>
  );
};

export default NavBar;



