import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home";
import AllAssignments from "../components/AllAssignments";
import Login from "../components/Login";
import Register from "../components/Register";
import Error from "../components/Error";
import Create from "../components/Create";
import Pending from "../components/Pending";
import Attempted from "../components/Attempted";
import PrivateRoute from "../PrivateRoute";

const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <Root></Root>, 
    errorElement:<Error></Error>,
    children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"/assignments",
            element: <AllAssignments></AllAssignments>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/create",
            element:<PrivateRoute><Create></Create></PrivateRoute>
        },
        {
            path:"/pending",
            element:<PrivateRoute><Pending></Pending></PrivateRoute>
        },
        {
            path:"/attempted",
            element:<PrivateRoute><Attempted></Attempted></PrivateRoute>
        }


    ]
    }, 
   ]); 

export default router;