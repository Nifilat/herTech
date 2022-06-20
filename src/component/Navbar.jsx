import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Navbar() {
    return (
        <div className="bg-white w-full fixed  z-50 shadow-md">
            <div className="w-full flex container justify-between items-center">
                <div className="flex-1 font-bold text-xl">HerTech</div>

                <div className="justify-evenly flex-1 text-base hidden md:flex">
                    <Link to="/">
                        <p>Job Listing</p>
                    </Link>

                    <Link to="/login">
                        <p>Find a mentor</p>
                    </Link>

                    <Link to="/signup">
                        <p>Find a community</p>
                    </Link>

                    <p>More</p>
                    <Button
                        style={{
                            borderRadius: "30px",
                            textTransform: "none",
                            backgroundColor: "#3754DB",
                        }}
                        size="small"
                        variant="contained"
                    >
                        Post a Job
                    </Button>
                </div>
            </div>
        </div>
    );
}
