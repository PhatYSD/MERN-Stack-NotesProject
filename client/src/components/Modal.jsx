import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineEdit, MdDeleteOutline  } from "react-icons/md";
import { Link } from "react-router-dom";

const Modal = ({ modal, setModal }) => {
    const { value } = modal;

    return (
        <div
            className="fixed top-0 left-0 w-full h-screen bg-white bg-opacity-15 flex justify-center items-center"
            onClick={() => setModal(false)}
        >
            <div
                className="h-[400px] w-full max-w-[600px] relative bg-white border-2 border-orange-400 rounded-lg flex flex-col justify-between items-center"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="absolute top-0 right-0">
                    <IoIosCloseCircleOutline
                        className="text-4xl mt-3 me-4 cursor-pointer text-orange-400 active:text-red-400 transition-colors"
                        onClick={() => setModal(false)}
                    />
                </div>
                <Link
                    className="absolute top-0 left-0"
                    to={`/edit/${value._id}`}
                >
                    <MdOutlineEdit
                        className="text-4xl mt-3 ms-4 cursor-pointer text-sky-400 active:text-blue-400 transition-colors"
                        onClick={() => setModal(false)}
                    />
                </Link>
                <Link
                    className="absolute top-0 left-16"
                    to={`/delete/${value._id}`}
                >
                    <MdDeleteOutline
                        className="text-4xl mt-3 cursor-pointer text-red-400 active:text-red-700 transition-colors"
                        onClick={() => setModal(false)}
                    />
                </Link>
                <div className="absolute z-50 py-2 px-4 indent-0 rounded-full top-[70%] right-12 bg-white bg-opacity-30 font-bold text-orange-500 border-2 border-orange-400">By {value.author}</div>
                <div className="text-2xl indent-5 mt-3 mb-4 flex-shrink-0">{value.title}</div>
                <hr className="flex-shrink-0 w-11/12 border-orange-400 border mx-auto" />
                <div className="text-lg flex-1 indent-8 overflow-y-auto my-4 w-full max-w-[90%]">
                    {value.description}
                </div>
                <hr className="flex-shrink-0 w-11/12 border-orange-400 border mx-auto" />
                <div className="flex flex-shrink-0 w-full py-4 justify-around items-center">
                    <div>Created At : {new Date(value.createdAt).toLocaleDateString()} {new Date(value.createdAt).toLocaleTimeString()}</div>
                    <div>Updated At : {new Date(value.updatedAt).toLocaleDateString()} {new Date(value.updatedAt).toLocaleTimeString()}</div>
                </div>
            </div>
        </div>
    );
}

export default Modal;