import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const assignments = useLoaderData();
    const {id} = useParams();
    const assignment = assignments.find((task) => task._id === id);
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
                    <button className="btn bg-[#F50000]">Take Assignment</button>
                </div>
               
            </div>
        </div>
    );
};

export default Details;