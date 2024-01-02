import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";

const Main = () => {
    return (
        <div className="w-full">
            <Navbar />
            <div className="h-fit-auto w-full flex justify-center items-start">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;