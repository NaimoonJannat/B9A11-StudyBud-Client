
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const FeaturedCards =()=> {
  return (
    <div className='text-center '>
        <h2 className="text-4xl font-bold text-center my-8">Our <span className='text-[#F50000]'>Features</span></h2>
          
        <div className='w-full md:w-1/2 rounded-lg  mx-auto border-2 border-[#F50000] shadow-2xl shadow-[#F50000]'>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
       <SwiperSlide>
                    <div className="rounded-lg">
                        <img src="https://i.ibb.co/bKtmv9N/groupstudy.png" alt="Group Study" className="w-full mb-4 rounded-lg" />
                        <h2 className="text-xl text-[#F50000] font-bold">Group Study Sessions</h2>
                        <p className="text-lg">Collaborate with friends in real-time study sessions, fostering interactive learning and knowledge sharing.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-lg">
                        <img src="https://i.ibb.co/D5CxDg4/management.png" alt="Assignment Management" className="w-full mb-4 rounded-lg" />
                        <h2 className="text-xl text-[#F50000] font-bold">Assignment Management</h2>
                        <p className="text-lg">Create, assign, and track study tasks within your study groups, ensuring organized and efficient study sessions.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-lg">
                        <img src="https://i.ibb.co/JBYWPWt/security.png" alt="Secure User Authentication" className="w-full mb-4 rounded-lg" />
                        <h2 className="text-xl text-[#F50000] font-bold">Secure User Authentication</h2>
                        <p className="text-lg">Safeguard your account with Firebase authentication and password hashing, ensuring the privacy and security of user data.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-lg">
                        <img src="https://i.ibb.co/rGPQysx/responsive.png" alt="Mobile Responsive Design" className="w-full mb-4 rounded-lg" />
                        <h2 className="text-xl text-[#F50000] font-bold">Mobile Responsive Design</h2>
                        <p className="text-lg">Access StudyBud seamlessly across devices, including desktops, tablets, and mobile phones, for convenient studying on the go.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-lg">
                        <img src="https://i.ibb.co/bdzXxp9/learning.png" alt="Interactive Learning Tools" className="w-full mb-4 rounded-lg" />
                        <h2 className="text-xl text-[#F50000] font-bold">Interactive Learning Tools</h2>
                        <p className="text-lg">Engage in discussions, quizzes, and shared resources within study groups, enhancing comprehension and retention through interactive learning experiences.</p>
                    </div>
                </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
}
export default FeaturedCards;