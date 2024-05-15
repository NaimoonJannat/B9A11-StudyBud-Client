import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Faq from "./Faq";
import AssignmentCard from "./AssignmentCard";

import FeaturedCards from "./FeatureCards";

const Home = () => {
    const assignments = useLoaderData();
    return (
       <div className="md:space-y-8">
        <Banner></Banner>
        <FeaturedCards></FeaturedCards>
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold text-center my-8">New Assignments</h2>
          <p> Whether you&apos;re tackling challenging assignments, preparing for exams, or exploring new topics, StudyBud provides the perfect platform for you and your friends to come together and achieve academic success.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            assignments.slice(0, 6).map(assignment =>
                <AssignmentCard
                key={assignment._id}
                assignment={assignment}
                showButtons={false}>
                </AssignmentCard>
            )
        }
        </div>
          </div>
        <Faq></Faq>
       </div>
    );
};

export default Home;