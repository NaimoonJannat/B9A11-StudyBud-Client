import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import { useState } from "react";

const AllAssignments = () => {
    const assignments = useLoaderData();

    const [tasks, setTasks] = useState(assignments);
    console.log(tasks);
    
    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold">Total <span className="text-[#F50000]">{assignments.length}</span> Assignments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            assignments.map(assignment =><AssignmentCard
            key={assignment._id}
            assignment={assignment}
            tasks = {tasks}
            setTasks= {setTasks}
            >
            </AssignmentCard>)
        }
        </div>
        </div>
    );
};

export default AllAssignments;