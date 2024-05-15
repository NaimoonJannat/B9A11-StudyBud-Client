import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import MyCards from "./MyCards";

const Attempted = () => {
    const { user } = useContext(AuthContext);
    const combinedData = useLoaderData(); 

    
    const { pending, marked } = combinedData;
    const filteredTasks = [...pending, ...marked].filter(task => task.email === user.email);

    return (
        <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">My <span className="text-[#F50000]">{filteredTasks.length}</span> Attempted Assignments</h2>
            <div className="flex flex-col gap-4">
            {
                filteredTasks.map(filteredTask => (
                    <MyCards
                        key={filteredTask._id}
                        filteredTask={filteredTask}
                    />
                ))
            }
        </div>
        </div>
    );
};

export default Attempted;
