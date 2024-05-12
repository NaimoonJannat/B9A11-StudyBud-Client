import { NavLink } from "react-router-dom";

const Header = () => {
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white btn font-bold bg-[#F50000]"
                    : "font-bold text-white"
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
                    ? "text-white btn font-bold bg-[#F50000]"
                    : "font-bold text-white"
                }
              >
                All Assignments
              </NavLink>
            </li>
           
          </ul>
        </div>
        <div className="flex flex-row justify-center items-center">
        <img className="w-8 md:w-12 hidden md:flex" src="https://i.ibb.co/8dwqFxN/logo3.jpg" alt=""  />
          <div className="text-2xl font-playfair font-bold text-white">
            Study <span className="text-[#F50000]">Bud</span>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white btn font-bold bg-[#F50000]"
                    : "font-bold text-white"
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
                    ? "text-white btn font-bold bg-[#F50000]"
                    : "font-bold text-white"
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
                    ? "text-white btn font-bold bg-[#F50000]"
                    : "font-bold text-white"
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
                    ? "text-white btn font-bold bg-[#F50000]"
                    : "font-bold text-white"
                }
              >
               Login
              </NavLink>
            </li>
           
            
          </ul>
        </div>

        {/* <div className="flex">
          {user ? (
            <div>
              <NavLink
            to="/register"
            className="hidden"
          >
            Register
          </NavLink>
             <div className="flex">
             <div
                tabIndex={0}
                role="button"
                className="avatar btn btn-circle btn-ghost" 
              >
                <div className="w-10 rounded-full"   data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName}
                data-tooltip-place="bottom">
                  <img src={user.photoURL}/>
                  <Tooltip id="my-tooltip" />
                </div>
               
              </div>
              <button
                className="text-white btn font-bold bg-[#ed8d34] border-2 border-[#ed8d34]"
              >
                Logout
              </button>
            </div>
             </div>
          ) : (
           <div className="flex">
            <ul className="menu menu-horizontal px-1">
             <li>
             <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? "text-white btn font-bold bg-[#ed8d34] border-2 border-[#ed8d34] "
                : "font-bold text-[#3c97d0]"
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
                  ? "text-white btn font-bold bg-[#ed8d34] border-2 border-[#ed8d34]"
                  : "font-bold text-[#3c97d0]"
              }
            >
              Login
            </NavLink>
             </li>
           </ul>
           </div>

          )}
         
        </div> */}
      </div>
    </div>
    );
};

export default Header;