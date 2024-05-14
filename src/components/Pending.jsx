import { useLoaderData } from "react-router-dom";
import SubmittedCard from "./SubmittedCard";
import { useEffect, useState } from "react";


const Pending = () => {
    const submittedCards = useLoaderData();
    const [submitCards, setSubmitCards] = useState([]);
    const fetchData = () => {
        fetch("http://localhost:3000/pending")
            .then((res) => res.json())
            .then((data) => {
                console.log("Data fetched:", data);
                setSubmitCards(data); // Update state with fetched data
            })
            .catch((error) => console.log("Error fetching data:", error));
    };

    // useEffect to fetch data on component mount
    useEffect(() => {
        fetchData();
    }, []);

    // Function to handle deletion of pending item
    const handleDelete = (id) => {
        // Filter out the deleted item from the state
        const updatedCards = submitCards.filter((card) => card._id !== id);
        setSubmitCards(updatedCards);  
        fetchData(); 
    };
   

    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold">Total <span className="text-[#F50000]">{submittedCards.length}</span> Pending Assignments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            submittedCards.map(submittedCard =><SubmittedCard
            key={submittedCard._id}
            submittedCard={submittedCard}
            onDelete={handleDelete}
            >
            </SubmittedCard>)
        }
        </div>
        </div>
    );
};

export default Pending;