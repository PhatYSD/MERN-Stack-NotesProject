import { Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import { PiNoteFill } from "react-icons/pi";

const Navbar = () => {
    return (
        <div className="w-full h-20 bg-orange-300 shadow-md flex justify-center items-center">
            <div className="w-[86%] flex justify-between items-center">
                <Link to={"/create"} title="Create Note.">
                    <PiNoteFill className="text-4xl" />
                </Link>
                <div className="flex justify-end items-center">
                    <Link to={"/"} title="back">
                        <IoArrowBackCircle
                            className="text-4xl cursor-pointer"
                            />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;