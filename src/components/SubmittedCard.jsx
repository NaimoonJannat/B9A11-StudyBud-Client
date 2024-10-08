import { useState } from "react";
import Swal from "sweetalert2";

const SubmittedCard = ({ submittedCard }) => {
    const { title, fullmark, username, documentLink, note } = submittedCard;
    

    // State to control modal visibility and form data
    const [showModal, setShowModal] = useState(false);
   
    // Function to handle form submission
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        // Construct data to be sent to the server
        const title=submittedCard.title;
        const fullmark=submittedCard.fullmark;
        const status="Completed";
        const email=submittedCard.email;
        const documentLink = submittedCard.documentLink;
        const username=submittedCard.username;
        const marks = form.marks.value;
        const feedback = form.feedback?.value;
        const markedTask={title, fullmark, documentLink, status, email, username, marks, feedback}
      
        // After submission, you can close the modal
        setShowModal(false);
          // send data to the server 
          fetch('https://b9a11-studybud-server.vercel.app/marked',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(markedTask)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                    title: "Success!",
                    text: "Submitted Successfully",
                    icon: "success",
                    confirmButtonText: 'Ok'
                  });
                  form.reset();
                  window.location.reload();
            
        })
                // delete data from pending collection as it is marked 
const handleRemoveData = (id) =>{
    if (id) {
        console.log("Deleting card with ID:", id);
        fetch(`https://b9a11-studybud-server.vercel.app/pending/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                title: "Success!",
                text: "Submitted Successfully",
                icon: "success",
                confirmButtonText: "Ok",
            });
        })
        .catch(error => console.log("Error deleting data:", error));
       
    }
}
        handleRemoveData(submittedCard._id)


}

       


    return (
        <div className="card w-11/12 mx-auto shadow-2xl border-2 border-[#F50000] shadow-[#F50000]">
            <div className="card-body text-left">
                <h2 className="card-title">{title}</h2>
                <p>Full Marks: {fullmark}</p>
                <h2>Submitted by, <span className="text-[#F50000]">{username}</span></h2>
                <button className="btn bg-[#F50000]" onClick={() => setShowModal(true)}>Give Marks</button>
            </div>
            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 overflow-auto bg-opacity-75 flex justify-center items-center">
                    <div className="relative bg-white w-96 rounded-lg shadow-lg p-6">
                        <div className="absolute top-0 right-0 p-4">
                            <button onClick={() => setShowModal(false)}>&times;</button>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Give Marks</h3>
                        <div className="mb-4">
                            <label className="block mb-2">Document URL:</label>
                            <p>{documentLink}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Notes:</label>
                            <p>{note}</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <label className="block mb-2">Marks:</label>
                            <input type="number" name="marks" className="bg-gray-100 px-4 py-2 mb-4 w-full" required />
                            <label className="block mb-2">Feedback:</label>
                            <textarea name="feedback" className="bg-gray-100 px-4 py-2 mb-4 w-full h-24"></textarea>
                            <button type="submit" className="bg-[#F50000] btn text-white px-4 py-2">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SubmittedCard;
