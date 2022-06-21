import React from "react";

function ComunityCard({ channel, memberAvatars = [], membersCount }) {
    return (
        <div className="py-4 flex items-center justify-between">
            <div>
                <h3 className="mb-1 font-medium text-lg">#{channel}</h3>
                <div className="members flex gap-1 items-center">
                    <div className="avatars flex">
                        {memberAvatars.slice(0, 3).map(({ memberAvatar, AvatarBg }, index) => (
                            <div
                                key={index}
                                className="rounded-full w-8 h-8 border border-white overflow-hidden grid place-items-center p-1"
                                style={{
                                    backgroundColor: AvatarBg,
                                    marginLeft: index === 0 ? 0 : -5,
                                }}
                            >
                                <img
                                    src={memberAvatar}
                                    alt="avatar"
                                    className="w-8 h-8 object-cover object-center"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="count font-semibold text-sm text-gray-700">+{membersCount}</div>
                </div>
            </div>
            <button className="flex bg-[#E4ECF7] items-center rounded-full text-[#3754DB] text-base font-medium gap-1.5 p-2 px-4">
                <span>Join</span>
            </button>
        </div>
    );
}

export default ComunityCard;
