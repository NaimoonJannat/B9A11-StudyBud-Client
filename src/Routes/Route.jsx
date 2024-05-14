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
import Update from "../components/Update";
import Details from "../components/Details";

const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <Root></Root>, 
    errorElement:<Error></Error>,
    children:[
        {
            path:"/",
            element: <Home></Home>,
            loader: () => fetch("http://localhost:3000/assignments")
        },
        {
            path:"/assignments",
            element: <AllAssignments></AllAssignments>,
            loader: () => fetch("http://localhost:3000/assignments")
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
            element:<PrivateRoute><Pending></Pending></PrivateRoute>,
            loader: () => fetch("http://localhost:3000/pending")
        },
        {
            path:"/attempted",
            element:<PrivateRoute><Attempted></Attempted></PrivateRoute>
        },
        {
            path:"/update/:id",
            element:<PrivateRoute><Update></Update></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:3000/assignments/${params.id}`)
        },
        {
            path: "/assignments/assignment/:id",
            element:
            <PrivateRoute>
                <Details></Details>
            </PrivateRoute>,
             loader: () => fetch("http://localhost:3000/assignments")
        }


    ]
    }, 
   ]); 

export default router;