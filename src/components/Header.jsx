import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const Header = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        toast.success("Logged Out Successfully!");
      })
      .catch((error) => {
        console.error("Logout Error:", error);
        toast.error("Error logging out. Please try again later.");
      });
    };

    // Theme controller 
    const [theme, setTheme] = useState('dark');
    useEffect(() =>{
      localStorage.setItem('theme',theme)
      const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme',localTheme)
    },[theme])
    const handleToggle = (e) =>{
        if(e.target.checked){
          setTheme('light');
        }else{
          setTheme('dark');
        }
      }
    return (
        <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg bg-gray-500 dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
             {
              user ? (
              <ul className="menu menu-horizontal px-1">
                <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold bg-[#F50000]"
                    : "font-bold "
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/assignments"
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold bg-[#F50000]"
                    : "font-bold "
                }
              >
                All Assignments
              </NavLink>
            </li>
                <li>
              <NavLink
                to="/create"
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold bg-[#F50000]"
                    : "font-bold "
                }
              >
               Create
              </NavLink>
              </li>
              <li>
              <NavLink
                to="/pending"
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold bg-[#F50000]"
                    : "font-bold "
                }
              >
               Pending
              </NavLink>
            </li><li>
            <details className="dropdown">
  <summary className="m-1">
    <div className="avatar btn btn-circle shadow-xl shadow-[#F50000] border-1 border-[#F50000] btn-ghost">
              <div className="w-14 rounded-full">
                <img src={user.photoURL} />
              </div>
              <p>{user.displayName
}</p>
            </div></summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52">
  <li>
              <NavLink
                to="/attempted"
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold bg-[#F50000]"
                    : "font-bold "
                }
              >
               My Attempted
              </NavLink>
            </li>
  <li>
  <button onClick={handleSignOut} className="text-xs btn font-bold rounded border-1 border-[#F50000]">Log Out</button>
            </li>
  </ul>
</details>
            
            </li>
               
              </ul>) :
            (
              <ul className="menu menu-horizontal px-1">
                <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold bg-[#F50000]"
                    : "font-bold "
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/assignments"
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold bg-[#F50000]"
                    : "font-bold "
                }
              >
                All Assignments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? " btn font-bold bg-[#F50000]"
                    : "font-bold "
                }
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold bg-[#F50000]"
                    : "font-bold "
                }
              >
               Login
              </NavLink>
            </li>
              </ul>
            )
            }
           
          </ul>
        </div>
        <div className="flex flex-row md:gap-2 justify-center items-center">
        <img className="w-8 md:w-12 hidden md:flex" src="https://i.ibb.co/mzTRdpz/logo3.png" />
        <div className="text-2xl font-playfair font-bold ">
            Study <span className="text-[#F50000]">Bud</span>
        </div> 

                      {/* theme toggle  */}
        <label className="cursor-pointer grid place-items-center">
  <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/> 
  <svg className="col-start-1 row-start-1 stroke-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z">
  </path></svg>

  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
</label>
        </div>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
            {
              user ? (
              <ul className="menu menu-horizontal px-1">
                <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold bg-[#F50000]"
                    : "font-bold "
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/assignments"
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold bg-[#F50000]"
                    : "font-bold "
                }
              >
                All Assignments
              </NavLink>
            </li>
                <li>
              <NavLink
                to="/create"
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold bg-[#F50000]"
                    : "font-bold "
                }
              >
               Create
              </NavLink>
              </li>
              <li>
              <NavLink
                to="/pending"
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold bg-[#F50000]"
                    : "font-bold "
                }
              >
               Pending
              </NavLink>
            </li><li>
            <details className="dropdown">
  <summary className="m-1">
    <div className="avatar btn btn-circle shadow-xl shadow-[#F50000] border-1 border-[#F50000] btn-ghost">
              <div className="w-14 rounded-full">
                <img src={user.photoURL} />
              </div>
              <p>{user.displayName
}</p>
            </div></summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52">
  <li>
              <NavLink
                to="/attempted"
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold bg-[#F50000]"
                    : "font-bold "
                }
              >
               My Attempted
              </NavLink>
            </li>
  <li>
  <button onClick={handleSignOut} className="text-xs btn font-bold rounded border-1 border-[#F50000]">Log Out</button>
            </li>
  </ul>
</details>
            
            </li>
               
              </ul>) :
            (
              <ul className="menu menu-horizontal px-1">
                <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold bg-[#F50000]"
                    : "font-bold "
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/assignments"
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold bg-[#F50000]"
                    : "font-bold "
                }
              >
                All Assignments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? " btn font-bold bg-[#F50000]"
                    : "font-bold "
                }
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold bg-[#F50000]"
                    : "font-bold "
                }
              >
               Login
              </NavLink>
            </li>
              </ul>
            )
            }
        </div>

        
      </div>
    </div>
    );
};


export default Header;