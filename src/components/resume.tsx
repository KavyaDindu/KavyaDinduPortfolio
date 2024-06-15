
const Resume = () => {
  const resumeUrl = "src/assets/testResume.pdf";

  return (
    <div id="resume" className="max-w-[1040px] m-auto p-4 py-16 md:pl-20">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8">
        Resume
      </h1>
      <div className="w-full flex justify-center mb-8">
        <iframe
          src={resumeUrl}
          title="Resume"
          className="w-full h-[600px] border-2 border-gray-300"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
      <div className="flex justify-center">
        <a
          href={resumeUrl}
          download
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
