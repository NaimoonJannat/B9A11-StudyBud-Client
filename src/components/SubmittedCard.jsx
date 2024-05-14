
const SubmittedCard = ({submittedCard}) => {
    const {title, fullmark, status, note, documentLink, email, username} = submittedCard;
    return (
        <div className="card w-11/12 mx-auto shadow-2xl border-2 border-[#F50000] shadow-[#F50000]">
        <div className="card-body text-left">
          <h2 className="card-title">{title}</h2>
          <p>Full Marks: {fullmark}</p>
          <h2>Submitted by, <span className="text-[#F50000]">{username}</span></h2>
          <button className="btn bg-[#F50000]">Give Marks</button>
        </div>
      </div>
    );
};

export default SubmittedCard;