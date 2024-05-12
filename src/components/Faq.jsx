
const Faq = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4">
            <div className="my-auto">
                <img src="https://i.ibb.co/Wt6Xcsv/undraw-Questions-re-1fy7.png" alt="" />
            </div>
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 text-gray-400">Here are some frequently asked questions about the website. You can feel free to contact us for learning more.</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is StudyBud?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">StudyBud is an online platform designed to facilitate group study sessions among friends and peers. It allows users to create study groups, assign and complete assignments together, and engage in collaborative learning activities.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does StudyBud work?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Users can register for an account, create or join study groups, and invite friends to collaborate. Within study groups, they can assign tasks, share resources, discuss topics, and track progress collectively. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Is StudyBud free to use?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Yes, StudyBud is currently free to use for all registered users. There are no subscription fees or hidden charges.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Can I use StudyBud for individual study?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">While StudyBud is primarily designed for group study, individuals can still benefit from its features by creating a study group for themselves or joining existing groups with similar interests.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Is StudyBud suitable for all subjects and levels of education?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Yes, StudyBud is versatile and can be used for various subjects and educational levels, including school, college, university, and professional studies.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Can I access StudyBud on mobile devices?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Yes, StudyBud is accessible on both desktop and mobile devices. You can download our mobile app for iOS and Android to stay connected and study on the go.</p>
			</details>
		</div>
	</div>
</div>
    );
};

export default Faq;