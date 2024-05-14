import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Details = () => {
    const assignments = useLoaderData();
    const {user} = useContext(AuthContext)
    const { id } = useParams();
    const assignment = assignments.find((task) => task._id === id);

    // State to control modal visibility and form data
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        title: assignment.title,
        marks: assignment.fullmark,
        username: user.displayName,
        email: user.email,
        documentLink: "",
        note: "",
        status: "pending"
    });

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit logic here, you can send formData to your backend or perform any action
        // After submission, you can close the modal
        setShowModal(false);
    };

    return (
        <div className="card lg:card-side lg:p-8">
            <div className="lg:w-1/2 rounded-2xl  flex justify-center items-center">
                <img className="w-full border-2 border-[#F50000] shadow-2xl shadow-[#F50000] " src={assignment.photo} />
            </div>
            <div className="card-body lg:w-1/2">
                <h2 className="text-4xl font-bold">{assignment.title}</h2>
                <p className="text-base">By : {assignment.username}</p>
                <div className="divider"></div>
                <div className="text-[#F50000] font-bold">{assignment.difficulty}</div>
                <div className="divider"></div>
                <div>
                    <p className=" text-base">
                        <span className="font-semibold">Details:</span>{" "}
                        {assignment.description}
                    </p>
                </div>
                <div className="divider"></div>
                <div className="flex gap-4">
                    <div>
                        <p className="text-base">Due Date: </p>
                        <p className="text-base">Full Marks: </p>
                    </div>
                    <div>
                        <p className="font-bold">{assignment.duedate}</p>
                        <p className="font-bold">{assignment.fullmark}</p>
                    </div>
                </div>
                <div className="card-actions justify-start flex gap-4">
                    <button className="btn bg-[#F50000]" onClick={() => setShowModal(true)}>Take Assignment</button>
                </div>
            </div>
            {/* Modal */}
{showModal && (
    <div className="fixed inset-0 z-50 overflow-auto bg-opacity-75 flex justify-center items-center">
        <div className="relative bg-white w-96 rounded-lg shadow-lg p-4">
            <div className="absolute top-0 right-0 p-4">
                <button className="btn btn-circle" onClick={() => setShowModal(false)}>x</button>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Take Assignment</h3>
            <form onSubmit={handleSubmit}>
                <label className="block mb-2">Title</label>
                <input type="text" name="title" value={formData.title} disabled className="bg-gray-100 px-4 py-2 mb-4 w-full" />
                <label className="block mb-2">Marks</label>
                <input type="number" name="marks" value={formData.marks} disabled className="bg-gray-100 px-4 py-2 mb-4 w-full" />
                <label className="block mb-2">Username</label>
                <input type="text" name="username" value={formData.username} disabled className="bg-gray-100 px-4 py-2 mb-4 w-full" />
                <label className="block mb-2">Email</label>
                <input type="email" name="email" value={formData.email} disabled className="bg-gray-100 px-4 py-2 mb-4 w-full" />
                <label className="block mb-2">Document Link</label>
                <input type="text" name="documentLink" value={formData.documentLink} onChange={handleInputChange} className="bg-gray-100 px-4 py-2 mb-4 w-full" />
                <label className="block mb-2">Note</label>
                <textarea name="note" value={formData.note} onChange={handleInputChange} className="bg-gray-100 px-4 py-2 mb-4 w-full h-24"></textarea>
                <button type="submit" className="bg-[#F50000] btn px-4 py-2">Submit</button>
            </form>
        </div>
    </div>
)}

        </div>
    );
};

export default Details;
