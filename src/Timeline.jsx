import React from "react";
import speaker1 from "./images/speaker1.jpeg";

const timelineData = [
  { id: 0, day: "Day 1", company: "Tech X", date: "Jan 2025", description: "This is the first Day of the timeline." },
  { id: 1, day: "Day 2", company: "Tech X", date: "Feb 2025", description: "Here’s the second Day, with more details." },
  { id: 2, day: "Day 3", company: "Tech X", date: "Mar 2025", description: "Another milestone achieved." },
  { id: 3, day: "Day 4", company: "Tech X", date: "Apr 2025", description: "The final Day in this journey." },
  { id: 4, day: "Day 5", company: "Tech X", date: "Apr 2025", description: "The final Day in this journey." }
  
];

const Timeline = () => {
  return (
    <div id="TimeLine" classNameclassName ="relative py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2 ">
      <div className="text-center mb-15">
        <div className="text-4xl font-bold font-serif mt-3">TimeLine</div>
        <div className="w-32 h-1 bg-blue-700 mx-auto"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">Five Days, Five Experience</p>

        {/* Experience Entries */}
        {/* Timeline */}
        <div className="relative mt-10">
          {timelineData.map((timeline, index) => (
            <div
              key={timeline.id}
              className={`flex flex-col sm:flex-row items-center mb-16 ${
                index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
              }`}
            >
              {/* Timeline circle with image */}
              <div className="absolute sm:left-1/2   bg-gray-400 border-4 border-[#8245ec] w-16 h-16 rounded-full flex items-center justify-center overflow-hidden ">
                <img src={speaker1} alt="speaker" className="w-full h-full object-cover rounded-full" />
              </div>

              {/* Text content */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-[#29767c] backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
                <div>
                <h3 className="text-xl font-bold">{timeline.day}</h3>
                <p className="text-sm text-gray-100">{timeline.company}</p>
                <p className="text-sm text-gray-400">{timeline.date}</p>
                <p className="mt-2">{timeline.description}</p>
                </div>
                {/* images and text  */}
                <div className="flex items-center space-x-6 justify-center">
                    <img src={speaker1} alt="" className="w-40 h-40 object-cover " />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
