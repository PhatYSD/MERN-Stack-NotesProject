import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Spinner } from "../components";

const CreateNotes = () => {
    const [datas, setDatas] = useState({
        title: "",
        description: "",
        author: ""
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handlerChange = (e) => {
        e.preventDefault();

        setDatas(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handerSave = () => {
        setLoading(true);
        fetch("http://localhost:5000/api/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datas)
        })
            .then(res => {
                if (!res.ok)
                    throw new Error(`Can't connect to api.`);
            })
            .catch(error => {
                console.log(error);
                alert(`Error please chack console.`);
            })
            .finally(() => { navigate(`/`); setLoading(false) });
    };

    return (
        <div className="w-full my-4 flex flex-col items-center">
            <h1 className="mb-4 text-4xl font-extralight">Create Note</h1>
            <div className="max-w-[38rem] w-full max-h-[26rem] min-h-[24rem] rounded-lg border-2 border-orange-400">
                {
                    loading ? (
                        <div className="w-full h-[24rem] flex justify-center items-center">
                            <Spinner />
                        </div>
                    ) : (
                        <>
                            <div className="w-10/12 mx-auto flex flex-col justify-center items-center">
                                <label className="mt-4 mb-2 text-2xl">Title</label>
                                <input
                                    className="w-full p-2 text-xl text-center border-2 border-orange-500 rounded-full overflow-hidden focus:border-red-500 focus:outline-none focus:shadow-md focus:shadow-red-300 transition-all"
                                    type="text"
                                    name="title"
                                    id="title"
                                    onChange={handlerChange}
                                />
                            </div>
                            <div className="w-10/12 mx-auto flex flex-col justify-center items-center">
                                <label className="mt-4 mb-2 text-2xl">Description</label>
                                <input
                                    className="w-full p-2 text-xl text-center border-2 border-orange-500 rounded-full overflow-hidden focus:border-red-500 focus:outline-none focus:shadow-md focus:shadow-red-300 transition-all"
                                    type="text"
                                    name="description"
                                    id="description"
                                    onChange={handlerChange}
                                />
                            </div>
                            <div className="w-10/12 mx-auto flex flex-col justify-center items-center">
                                <label className="mt-4 mb-2 text-2xl">Author</label>
                                <input
                                    className="w-full p-2 text-xl text-center border-2 border-orange-500 rounded-full overflow-hidden focus:border-red-500 focus:outline-none focus:shadow-md focus:shadow-red-300 transition-all"
                                    type="text"
                                    name="author"
                                    id="author"
                                    onChange={handlerChange}
                                />
                            </div>
                            <div className="w-10/12 mx-auto my-4 flex flex-col justify-center items-center">
                                <button
                                    className="w-[12rem] p-2 text-xl text-white font-semibold rounded-full bg-green-500 hover:bg-green-700 active:bg-white active:text-green-500 border-2 border-green-500 transition-all"
                                    onClick={() => handerSave()}
                                >
                                    Save it
                                </button>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default CreateNotes; 