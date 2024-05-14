import { useContext } from "react";
import { FaEye } from "react-icons/fa";
import { MdDelete, MdOutlineModeEdit } from "react-icons/md";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const AssignmentCard = ({assignment, onDelete, showButtons}) => {
    const { user, isLoggedIn } = useContext(AuthContext);
    const {title, _id, email, fullmark, difficulty, duedate, photo, username} = assignment;
    const navigate = useNavigate();
    // handle delete button 
    const handleDelete = (_id, email) => {
        if (!isLoggedIn) {
            // Redirect to the login page if the user is not logged in
            navigate("/login");
            return;
        }

        if(email === user.email){
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:3000/assignments/${_id}`, {
                        method: 'DELETE',
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Assignment  has been deleted.",
                                icon: "success"
                            });
                            onDelete(_id);
            
                        }
                    })
                    .catch(error => console.log("Error deleting assignment:", error));
                }
            });
           }
           else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "This Assignment was not created by you!",
                footer: 'You need to be the one who posts the assignment to be able to delete it.'
              });
           }
    };
    return (
<div className="text-left border-2 border-[#F50000] p-6 shadow-2xl shadow-[#F50000] rounded-lg">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<div className="mb-0 capitalize">Due for {duedate}</div>
		</div>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={photo} alt="" className="block object-cover object-center w-full rounded-lg h-72" />
			<div className="flex items-center text-xs">
				<span>Posted by: {username}</span>
			</div>
		</div>
		<div className="space-y-2">
				<h3 className="text-xl font-semibold">{title}</h3>
                <h2>Full Marks: {fullmark}</h2>
			<div className="btn border-1 border-[#F50000] bg-[#f3a9a944]">
                {difficulty}
            </div>
        </div>
       {
        showButtons && (
            <div className="flex gap-2 justify-center items-center">
            <Link to={`assignment/${_id}`} className="btn btn-circle text-[#F50000] border-1 border-[#F50000]">
            <FaEye />
            </Link>
            <Link to={`/update/${_id}`} className="btn btn-circle text-[#F50000] border-1 border-[#F50000]">
            <MdOutlineModeEdit />
            </Link >
            <button onClick={() => handleDelete(_id, email)} className="btn btn-circle text-[#F50000] border-1 border-[#F50000]">
            <MdDelete />
            </button >
        </div>
        )
       }
            
	</div>

</div>
    );
};

export default AssignmentCard;