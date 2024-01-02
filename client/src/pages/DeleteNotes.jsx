import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "../components";

const DeleteNotes = () => {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    const handerDelete = () => {
        setLoading(true);

        fetch(`http://localhost:5000/api/notes/${id}`, { method: "DELETE" })
            .then(() => {
                setLoading(false);
                navigate("/");
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
                alert(`Error please check console.`);
            });
    }

    return (
        <div className="w-full my-4 flex flex-col items-center">
            <h1 className="mb-4 text-4xl font-extralight">Delete Note</h1>
            <div className="max-w-[38rem] w-full max-h-[26rem] min-h-[24rem] rounded-lg border-2 border-orange-400 flex flex-col justify-between items-center">
                {
                    loading ? (
                        <div className="w-full h-[24rem] flex justify-center items-center">
                            <Spinner />
                        </div>
                    ) : (
                        <>
                            <div className="text-2xl flex-shrink-0 w-full text-center my-4">Are you sure?</div>
                            <p className="text-lg flex-1 text-center mb-4">Are you delete a note id: ({id})?</p>
                            <div className="flex-shrink-0 flex justify-around items-center mb-4 w-[80%]">
                                <button
                                    className="text-lg text-white bg-red-500 border-2 border-red-500 font-bold py-2 w-[12rem] active:bg-white active:text-red-500 transition-all rounded-full"
                                    onClick={handerDelete}
                                >
                                    Delete
                                </button>
                                <button
                                    className="text-lg text-orange-500 bg-white border-2 border-orange-500 font-bold py-2 w-[12rem] active:bg-white active:text-red-500 transition-all rounded-full"
                                    onClick={() => navigate("/")}
                                >
                                    Cancel
                                </button>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default DeleteNotes;
