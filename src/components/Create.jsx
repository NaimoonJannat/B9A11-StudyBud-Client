import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Create = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [dueDate, setDueDate] = useState(null); 

    const handleDateChange = (date) => {
        setDueDate(date);
    };
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:gap-8 lg:flex-row">
                <div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Create An Assignment</h1>
                        <p className="py-6">
                        Don&apos;t miss out on the opportunity to elevate your learning experience and make studying fun and collaborative. Create an assignment challenge others right now!
                        </p>
                    </div>
                    <img
                        className="hidden lg:flex rounded-lg"
                        src="https://i.ibb.co/yp3Sncz/banner-pc.png"
                        alt=""
                    />
                </div>
                <div className="card shrink-0 p-4 w-full md:w-2/3  shadow-[#F50000] shadow-2xl">
                <section className="p-6">
	<form className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md">
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

				<div className="col-span-full">
					<label className="text-base">Title</label>
					<input required name="title" type="text" placeholder="Assignment Title" className="w-full text-gray-500 p-2 rounded-md focus:ring focus:ring-opacity-75 " />
				</div>
				<div className="col-span-full">
					<label className="text-base">Description</label>
					<input required name="description" type="text" placeholder="Description" className="w-full text-gray-500 p-2 rounded-md focus:ring focus:ring-opacity-75 " />
				</div>
                <div className="col-span-full sm:col-span-2">
					<label className="text-base">Full Marks</label>
					<input required name="fullmark" type="text" placeholder="Full Marks" className="w-full text-gray-500 p-2 rounded-md focus:ring focus:ring-opacity-75 " />
				</div>
                <div className="col-span-full sm:col-span-2">
					<label required className="text-base">Difficulty</label>
					<select name="difficulty" type="text" placeholder="Full Marks" className="w-full text-gray-500 p-2 rounded-md focus:ring focus:ring-opacity-75 ">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                    </select>
				</div>
                <div className="col-span-full sm:col-span-2">
					<label className="text-base">Due Date</label>
                    <DatePicker
                                            selected={dueDate}
                                            onChange={handleDateChange}
                                            className="w-full text-gray-500 p-2 rounded-md focus:ring focus:ring-opacity-75"
                                            dateFormat="dd-MM-yyyy" 
                                            placeholderText="Select due date"
                                        />
				</div>
                <div className="col-span-full">
					<label className="text-base">Thumbnail URL</label>
					<input required name="photo" type="text" placeholder="Assignment Thumbnail" className="w-full text-gray-500 p-2 rounded-md focus:ring focus:ring-opacity-75 " />
				</div>
                <div className="col-span-full sm:col-span-3">
					<label className="text-base">User Email</label>
					<input required disabled name="email" type="email" value={user.email} className="w-full text-gray-500 p-2 rounded-md focus:ring focus:ring-opacity-75 " />
				</div>
                <div className="col-span-full sm:col-span-3">
					<label className="text-base">User Name</label>
					<input required disabled name="name" type="text" value={user.displayName} className="w-full text-gray-500 p-2 rounded-md focus:ring focus:ring-opacity-75 " />
				</div>
                <div className="col-span-full">
<input type="submit" className="btn w-full bg-[#F50000] mt-8" value="Create"></input>
</div>
			</div>
            
		</fieldset>
       
	</form>
</section>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Create;