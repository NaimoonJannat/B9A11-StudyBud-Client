import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { DiVim } from "react-icons/di";

 

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return(
            <div className="w-full">
                <span className="loading w-1/3 mx-auto text-[#F50000] loading-bars 
        "></span>
            </div>
        );
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;