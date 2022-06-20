import React from "react";

function Footer() {
    return (
        <div className="bg-[#222222] p-0 md:p-12">
            <div className="container flex flex-col gap-9">
                <div className="bg-white rounded-xl flex flex-col md:flex-row justify-between px-5 md:px-9 py-4 md:py-7 gap-6">
                    <div className="flex flex-col">
                        <h3 className="text-[#3754DB] text-lg font-bold">Newsletter</h3>
                        <p className="text-sm font-normal text-gray-600">
                            Be the first one to know about discounts, offers and events
                        </p>
                    </div>
                    <div className="flex justify-between gap-5 rounded-full border border-gray-200 flex-grow max-w-md p-1.5 pl-6">
                        <div className="flex gap-2 items-center">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.3333 13.6673H4.66668C2.66668 13.6673 1.33334 12.6673 1.33334 10.334V5.66732C1.33334 3.33398 2.66668 2.33398 4.66668 2.33398H11.3333C13.3333 2.33398 14.6667 3.33398 14.6667 5.66732V10.334C14.6667 12.6673 13.3333 13.6673 11.3333 13.6673Z"
                                    stroke="#7E838F"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M11.3333 6L9.24665 7.66667C8.55999 8.21333 7.43332 8.21333 6.74665 7.66667L4.66666 6"
                                    stroke="#7E838F"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <input
                                type="email"
                                className="bg-transparent w-full"
                                placeholder="Enter your email"
                            />
                        </div>
                        <button className=" text-white rounded-full font-semibold text-xs md:text-sm bg-[#3754DB] gap-2.5 px-4 md:px-8 py-2">
                            <span>Submit</span>
                        </button>
                    </div>
                </div>
                <div className="flex justify-between flex-col md:flex-row gap-10">
                    <div className="flex gap-4 md:gap-8 flex-col md:flex-row text-[#A6B7D4]">
                        {/* Change these to Anchor links */}
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>FAQs</span>
                    </div>
                    <div>
                        <span className="text-[#9A9EA6] text-sm text-center md:text-right block ">
                            © 2022, All Rights Reserved
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
