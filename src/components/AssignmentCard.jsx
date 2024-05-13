import { FaEye } from "react-icons/fa";
import { MdDelete, MdOutlineModeEdit } from "react-icons/md";

const AssignmentCard = ({assignment}) => {
    const {title, fullmark, difficulty, duedate, photo, username} = assignment;
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
			<div className="btn p-1 border-1 border-[#F50000] bg-[#f3a9a944]">
                {difficulty}
            </div>
        </div>
        <div className="flex gap-2 justify-center items-center">
            <div className="btn btn-circle text-[#F50000] border-1 border-[#F50000]">
            <FaEye />
            </div>
            <div className="btn btn-circle text-[#F50000] border-1 border-[#F50000]">
            <MdOutlineModeEdit />
            </div>
            <div className="btn btn-circle text-[#F50000] border-1 border-[#F50000]">
            <MdDelete />
            </div>
        </div>
            
	</div>

</div>
    );
};

export default AssignmentCard;