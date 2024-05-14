import { useLoaderData } from "react-router-dom";
import SubmittedCard from "./SubmittedCard";


const Pending = () => {
    const submittedCards = useLoaderData();
   

    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold">Total <span className="text-[#F50000]">{submittedCards.length}</span> Pending Assignments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            submittedCards.map(submittedCard =><SubmittedCard
            key={submittedCard._id}
            submittedCard={submittedCard}
            >
            </SubmittedCard>)
        }
        </div>
        </div>
    );
};

export default Pending;