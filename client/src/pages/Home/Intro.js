import React from "react";

function Intro() {
    return (
        <div className="h-[80vh] bg-primary flex-col flex items-start justify-center gap-8 py-10">
            <h1 className="text-white">Hi, I am </h1>
            <h1 className="text-7xl text-secondary font-semibold">Rushi K. Rokad</h1>
            <h1 className="text-7xl text-white font-semibold">
                I build things for the web.
            </h1>

            <p className="text-white w-2/3">I am fullstack web developer. Currently, I am looking for a job as web developer. Thanks</p>

            <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">Get Started</button>
        </div>
    );
}

export default Intro;
