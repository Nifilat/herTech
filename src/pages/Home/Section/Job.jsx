import React from "react";
import JobCard from "component/JobCard";
import { Jobs } from "../../data";
import Fade from "images/Rectangle 19011 (1).png";
function Job() {
    return (
        <div className="section-card w-full lg:w-7/12 relative overflow-hidden">
            <h2>1,000,000+ jobs available for you</h2>
            <p>Lorem ipsum is placeholder text commonly used in the graphic.</p>
            <div className="controls flex gap-2 lg:gap-5 mb-4 flex-wrap lg:flex-nowrap">
                <div className="search bg-white rounded-lg card flex gap-2 px-3 py-1 w-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        opacity={0.5}
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Job title"
                        className="bg-transparent text-sm w-full"
                    />
                </div>
                <div className="location">
                    <select name="location" id="location" className="card">
                        <option value="">Location</option>
                        <option value="ns">Nassarawa</option>
                        <option value="eb">Ebonyi</option>
                        <option value="as">Asaba</option>
                        <option value="ab">Abakaliki</option>
                    </select>
                </div>
                <div className="job-type">
                    <select name="job-type" id="job-type" className="card">
                        <option value="">Job type</option>
                        <option value="gm">Gateman</option>
                        <option value="sh">Shoe maker</option>
                        <option value="bb">Bad Belle</option>
                        <option value="ab">Aboki</option>
                        <option value="th">Thief</option>
                    </select>
                </div>
            </div>
            <div className="jobs-list flex flex-col gap-6 max-h-[750px] relative overflow-auto scroll">
                {Jobs.map((job) => (
                    <JobCard key={job.id} {...job} />
                ))}
            </div>
            <img src={Fade} alt="fade" className="absolute bottom-0 left-0 w-full" />
            <button className="flex items-center text-white rounded-full font-semibold text-sm bg-[#3754DB] gap-2.5 px-6 py-4 absolute bottom-[30px] left-1/2 -translate-x-1/2 w-fit">
                <span>View all jobs</span>
                <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.06564 0.440641C1.2365 0.269786 1.5135 0.269786 1.68436 0.440641L6.93436 5.69064C7.10521 5.8615 7.10521 6.1385 6.93436 6.30936L1.68436 11.5594C1.5135 11.7302 1.2365 11.7302 1.06564 11.5594C0.894786 11.3885 0.894786 11.1115 1.06564 10.9406L6.00628 6L1.06564 1.05936C0.894786 0.888505 0.894786 0.611495 1.06564 0.440641Z"
                        fill="white"
                    />
                </svg>
            </button>
        </div>
    );
}

export default Job;
