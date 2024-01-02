import { useEffect, useState } from "react";

import { Spinner } from "../components";
import Modal from "../components/Modal";

const Home = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState({
        isModal: false,
        value: {}
    });

    useEffect(() => {
        setLoading(true);

        fetch("http://localhost:5000/api/notes")
            .then(res => res.json())
            .then(data => {
                setNotes(data.data);
                setLoading(false)
            })
            .catch(error => {
                console.log(error);
                alert(`Error please chack console.`);
                setLoading(false);
            });
    }, []);

    return (
        <div className="w-full mt-4 flex flex-col items-center">
            <h1 className="mb-4 text-4xl font-extralight">All Notes</h1>

            {
                loading ? <Spinner /> : (
                    <div className="grid gap-y-4 gap-x-8 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 w-[86%]">
                        {
                            notes.map((value) => (
                                <div key={value._id} className="w-full flex justify-center items-center">
                                    <div
                                        className="h-40 w-full overflow-hidden border-2 border-orange-400 rounded-lg hover:shadow-md active:bg-slate-50 transition-all cursor-pointer flex flex-col justify-between items-start"
                                        onClick={() => setModal({
                                            isModal: true,
                                            value
                                        })}
                                    >
                                        <div className="flex-shrink-0 w-[94%] mx-auto">
                                            <h3>{value.title}</h3>
                                        </div>
                                        <hr className="w-11/12 mx-auto border border-orange-300" />
                                        <div className="flex-1 w-[94%] overflow-y-auto mx-auto">
                                            <p className="w-full h-full">{value.description}</p>
                                        </div>
                                        <hr className="w-11/12 mx-auto border border-orange-300" />
                                        <div className="flex-shrink-0 w-[94%] min-h-4 mx-auto">
                                            <p className="text-[12px] py-1">Created At: {new Date(value.createdAt).toDateString()}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
            {
                modal.isModal && <Modal modal={modal} setModal={setModal} />
            }
            <div className="mb-16"></div>
        </div>
    );
};

export default Home;