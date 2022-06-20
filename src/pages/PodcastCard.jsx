import React from "react";
import { BiPlayCircle } from "react-icons/bi";
function PodcastCard({ img, title, artiste, time }) {
    return (
        <div className="py-4 flex items-center gap-4">
            <div className="rounded-md w-28 h-28">
                <img
                    src={img}
                    alt="podcast"
                    className="w-full h-full object-cover object-center rounded-md"
                />
            </div>
            <div>
                <h3 className="text-lg font-medium mb-1">{title}</h3>
                <p className="text-xs font-normal mb-2 text-gray-500">{artiste}</p>
                <button className="flex bg-[#E4ECF7] items-center rounded-full text-[#3754DB] text-base font-medium gap-1.5 p-2 px-4">
                    <BiPlayCircle color="#3754DB" size={24} />
                    <span>{time}</span>
                </button>
            </div>
        </div>
    );
}

export default PodcastCard;
