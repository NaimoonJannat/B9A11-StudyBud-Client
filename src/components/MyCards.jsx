
const MyCards = ({filteredTask}) => {
    const {title, status, marks, fullmark, feedback} = filteredTask;
    return (
        <div className="card w-11/12 mx-auto shadow-2xl border-2 border-[#F50000] shadow-[#F50000]">
        <div className="card-body text-left">
            <h2 className="card-title">{title}</h2>
            <p>Status: <span className="text-[#F50000] font-bold">{status}</span></p>
            <p>Full Marks: {fullmark}</p>
            <p>Obtained Marks: {marks}</p>
            <p>Feedback: {feedback}</p>
        </div>
        </div>
    );
};

export default MyCards;