const Contact = () => {
  return (
    <div className="flex flex-col justify-center grow items-center">
      <h1 className="text-4xl font-sans font-bold text-[#149488] mb-14">
        Get in Touch
      </h1>
      <div className="flex flex-col gap-2">
        <input
          className="max-[768px]:w-80 border-2 border-[#8DD6CC] p-2 text-sm text-[#129F90] shadow-md rounded-md outline-none w-96"
          type="text"
          placeholder="Your Name"
        />
        <input
          className="max-[768px]:w-80 border-2 border-[#8DD6CC] p-2 text-sm text-[#129F90] shadow-lg rounded-md outline-none w-96"
          type="text"
          placeholder="Your Surname"
        />
        <input
          className="max-[768px]:w-80 border-2 border-[#8DD6CC] p-2 text-sm text-[#129F90] shadow-md rounded-md outline-none w-96"
          type="text"
          placeholder="Your Email"
        />
      </div>
      <div className="py-7">
        <textarea
          name="text"
          className="max-[768px]:w-80 border-2 border-[#8DD6CC] p-2 text-sm text-[#129F90] shadow-md rounded-md outline-none w-96 h-36"
          placeholder="Your Message"
        ></textarea>
      </div>
      <button className="max-[768px]:w-80 bg-[#129D8F] text-white p-2 w-96 rounded-md text-sm shadow-md hover:bg-[#31afa3]">
        Send Message
      </button>
    </div>
  );
};

export default Contact;
