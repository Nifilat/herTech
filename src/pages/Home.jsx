import React from "react";
import Hero_image from "../images/Hero_img.png";

import { ReactComponent as Audi } from "../images/Audi.svg";
import { ReactComponent as Netflix } from "../images/Netflix.svg";
import { ReactComponent as Maxar } from "../images/Maxar.svg";
import { ReactComponent as SpaceX } from "../images/SpaceX.svg";
import { ReactComponent as Netflix2 } from "../images/netflix2.svg";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const commonStyles = {
    bgcolor: "#D9D9D9",
    width: "2px",
    height: "2rem",
    borderRadius: 5,
};

export default function Home() {
    return (
        <div className="w-full h-screen ">
            <div className="w-full h-screen bg-[#101225] pt-[115px] flex lg:flex-row flex-col items-center lg:justify-between p-10">
                <div className="flex flex-col gap-5 max-w-lg lg:order-1 order-2 ">
                    <h1 className="text-white font-bold lg:text-7xl text-4xl ">
                        Hire <span className="text-fuchsia-600">female</span> tech-talent on demand
                    </h1>
                    <p className="text-white lg:text-lg text-sm">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and
                        publishing industries{" "}
                    </p>
                    <div className="flex gap-3 mt-4">
                        <Button
                            style={{
                                borderRadius: "30px",
                                textTransform: "none",
                                backgroundColor: "#3754DB",
                            }}
                            sx={{
                                p: "10px 18px",
                            }}
                            size="small"
                            variant="contained"
                        >
                            Get started
                        </Button>
                        <Button
                            style={{
                                borderRadius: 30,
                                textTransform: "none",
                                backgroundColor: "#E1E8FF",
                                color: "#5770E2",
                            }}
                            sx={{
                                p: "10px 18px",
                            }}
                            size="small"
                            variant="contained"
                        >
                            See job listing
                        </Button>
                    </div>
                    <div class="flex gap-8 mt-4 items-center">
                        <div className="text-white flex flex-col gap-2 ">
                            <span className="text-2xl">100k+</span>{" "}
                            <span className="text-sm">Jobs listed</span>
                        </div>
                        <span>
                            <Box sx={{ ...commonStyles, opacity: 0.5 }} />
                        </span>
                        <div className="text-white flex flex-col gap-2">
                            <span className="text-2xl">262+</span>{" "}
                            <span className="text-sm">Members</span>
                        </div>
                        <span>
                            <Box sx={{ ...commonStyles, opacity: 0.5 }} />
                        </span>
                        <div className="text-white flex flex-col gap-2">
                            <span className="text-2xl">5+</span>{" "}
                            <span className="text-sm">Countries</span>
                        </div>
                    </div>
                </div>
                <div className="max-w-2xl lg:order-2 order-1 ">
                    <img src={Hero_image} alt="hero_image"></img>
                </div>
            </div>
            {/* <h1 className='text-4xl font-bold text-gray-600'>Home</h1> */}
            <h2>COMPANIES HIRING ON HER TECH</h2>
            <div className="flex justify-between gap-2 ">
                <Audi opacity={0.5} />
                <Netflix />
                <Maxar opacity={0.5} />
                <Audi opacity={0.5} />
                <SpaceX opacity={0.5} />
                <Audi opacity={0.5} />
                <Netflix2 opacity={0.5} />
                <SpaceX opacity={0.5} />
            </div>

            <div className="w-[723px] h-[928px] bg-[#F7FAFC] rounded-[32px] mt-10">
                <h2 className="font-semibold text-2xl">1,000,000+ jobs available for you</h2>
                <p>Lorem ipsum is the placeholder commonly used in the graphic</p>
            </div>
        </div>
    );
}
