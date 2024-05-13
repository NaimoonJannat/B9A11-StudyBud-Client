import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";

const AllAssignments = () => {
    const assignments = useLoaderData();
    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold">All Spots: {assignments.length}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            assignments.map(assignment =><AssignmentCard
            key={assignment._id}
            assignment={assignment}>
            </AssignmentCard>)
        }
        </div>
        </div>
    );
};

export default AllAssignments;