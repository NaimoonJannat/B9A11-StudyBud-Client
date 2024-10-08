import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <section>
        <div className="container flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl">Empower Your Learning Journey with Study
                    <span className="text-[#F50000]">Bud</span>
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12"> It encapsulates the essence of your website, emphasizing collaboration, empowerment, and the convenience of group studying.
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <Link to="/assignments" className="px-8 btn py-3 text-lg font-semibold rounded bg-[#F50000] ">Explore Now</Link>
                </div>
            </div>
            <div className="flex shrink-0 items-center shadow-[#F50000] shadow-2xl justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img src="https://i.ibb.co/8zQ5Rr0/banner.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
            </div>
        </div>
    </section>
    );
};

export default Banner;