import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <div className="font-sand bg-gray-800">
            <div className="w-full bg-gray-800 md:w-4/5 mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;