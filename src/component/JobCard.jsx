import React from "react";
import { FiBriefcase, FiDollarSign, FiMapPin } from "react-icons/fi";
function JobCard({ Image, title, company, location, mode, status, salary, timePast }) {
    return (
        <div className="card flex p-3 lg:p-5 flex-col lg:flex-row gap-3">
            <div className="p-2 border border-gray-200 rounded-md mr-2 w-20 h-20 grid place-items-center">
                <img src={Image} alt="Icon" className="w-full object-cover object-center" />
            </div>
            <div>
                <h3 className="font-medium text-lg mb-1">{title}</h3>
                <p className="font-normal text-sm text-gray-500 mb-2">{company}</p>
                <div className="info flex flex-col lg:flex-row gap-2 lg:gap-4 text-xs font-normal text-gray-500">
                    <div className="flex gap-1 items-center">
                        <FiMapPin />
                        <span>
                            {location}, {mode}
                        </span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <FiBriefcase /> <span>{status}</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <FiDollarSign /> <span>{salary}</span>
                    </div>
                </div>
            </div>
            <p className="font-normal text-sm text-gray-500 lg:ml-auto">Posted {timePast}</p>
        </div>
    );
}

export default JobCard;
