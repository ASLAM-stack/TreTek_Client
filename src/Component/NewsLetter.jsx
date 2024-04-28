const NewsLetter = () => {
  return (
    <div className="py-24 bg-[#00f7ff36] flex flex-col items-center mt-16 mb-20 rounded-xl mx-2 md:mx-0">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">Join The Newsletter</h1>
      <p className="text-base text-gray-600 text-center">To receive our best monthly deals</p>
      <div className="md:w-1/2 w-full flex flex-col mt-2 p-4 md:p-0">
        <input className="p-3 border-2 border-[#f3c630] rounded-xl" placeholder="Enter Your email" type="email" />
       <div className="flex justify-center mt-2">
       <a
          href="#_"
          className="relative px-5 py-2 font-medium text-white group"
        >
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
          <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
          <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
          <span className="relative">Send</span>
        </a>
       </div>
      </div>
    </div>
  );
};

export default NewsLetter;
