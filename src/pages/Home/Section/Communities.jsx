import React from "react";
import ComunityCard from "component/ComunityCard";
import { CommunityChannels } from "../../data";
function Communities() {
    return (
        <div className="section-card w-full">
            <div className="flex items-start justify-between flex-wrap">
                <div>
                    <h2>Online communities</h2>
                    <p className="!mb-2">Lorem ipsum is placeholder text common</p>
                </div>
                <button className="flex items-center rounded-full font-semibold text-[#3754DB] border border-[#3754DB] gap-1.5 p-2 px-4">
                    <span>See all</span>
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
                            fill="#3754DB"
                        />
                    </svg>
                </button>
            </div>
            <div className="channel-list">
                {CommunityChannels.map((community) => (
                    <ComunityCard key={community.id} {...community} />
                ))}
            </div>
        </div>
    );
}

export default Communities;
