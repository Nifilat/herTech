import React from "react";
import Hero_image from "../images/Hero_img.png";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// import Companies from "./Companies";

const commonStyles = {
    bgcolor: "#D9D9D9",
    width: "2px",
    height: "2rem",
    borderRadius: 5,
};

function Hero() {
    return (
        <div className="bg-[#101225] pt-[70px]">
            <div className="w-full min-h-screen  flex lg:flex-row flex-col items-start lg:justify-between container md:p-20 p-5 ">
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
                    <div className="flex md:gap-8 gap-4 mt-4 items-center">
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
                <div className="max-w-2xl lg:order-2 order-1 relative -top-10">
                    <img src={Hero_image} alt="hero_image"></img>
                </div>
            </div>
        </div>
    );
}

export default Hero;
