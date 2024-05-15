import { useState } from 'react';

const MyCards = ({ filteredTask }) => {
    const { title, status, marks, fullmark, feedback, documentLink } = filteredTask;
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="card w-11/12 mx-auto shadow-2xl border-2 border-[#F50000] shadow-[#F50000]">
            <div className="flex flex-col md:flex-row">
                <div className="card-body text-left w-full md:w-2/3">
                    <h2 className="card-title">{title}</h2>
                    <p>Status: <span className="text-[#F50000] font-bold">{status}</span></p>
                    <p>Full Marks: {fullmark}</p>
                    <p>Obtained Marks: {marks}</p>
                    <p>Feedback: {feedback}</p>
                </div>
                <div className="w-full md:w-1/3">
                <button className="bg-[#F50000] md:my-14 btn font-bold py-2 px-4 rounded" onClick={openModal}>Preview</button>
                </div>
            </div>

            {modalOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
                        <div className="bg-[#f500008d] border-2 border-[#F50000] p-8 rounded-lg w-11/12 md:w-1/2 relative">
                            <button className="absolute top-2 right-2 btn btn-circle" onClick={closeModal}>X</button>
                            <h2 className="text-lg font-semibold">Document Preview</h2>
                            <div className="mt-4">
                                <iframe src={documentLink} width="100%" height="500px" ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyCards;
