import { useState } from "react";
import AssignmentCard from "./AssignmentCard";
import { useLoaderData } from "react-router-dom";

const AllAssignments = () => {
    const initialAssignments = useLoaderData();
    const [assignments, setAssignments] = useState(initialAssignments);
    const [selectedDifficulty, setSelectedDifficulty] = useState("all"); // State for selected difficulty

    const handleDifficultyChange = (e) => {
        setSelectedDifficulty(e.target.value);
    };

    // Filter assignments based on selected difficulty
    const filteredAssignments = selectedDifficulty === "all"
        ? assignments
        : assignments.filter(assignment => assignment.difficulty === selectedDifficulty);

    const handleDelete = (deletedId) => {
        const updatedAssignments = assignments.filter(assignment => assignment._id !== deletedId);
        setAssignments(updatedAssignments);
    };

    return (
        <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Total <span className="text-[#F50000]">{filteredAssignments.length}</span> Assignments</h2>
            {/* Dropdown menu for difficulty */}
            <div className="mt-4">
                <label htmlFor="difficulty">Filter by Difficulty:</label>
                <select
                    id="difficulty"
                    className="ml-2 p-2 border border-gray-300 rounded"
                    value={selectedDifficulty}
                    onChange={handleDifficultyChange}
                >
                    <option value="all">All</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    filteredAssignments.map(assignment =>
                        <AssignmentCard
                            key={assignment._id}
                            assignment={assignment}
                            onDelete={handleDelete}
                            showButtons={true}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default AllAssignments;
