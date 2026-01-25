import logicMonitorLogo from "../assets/logicmonitor.jpg";

export default function Experience() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 mt-6">
            <div className="max-w-5xl w-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg rounded-xl p-6 sm:p-8 xl:p-10 text-white">

                {/* Heading */}
                <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-[#facc15] text-center">
                    Experience
                </h2>

                {/* Experience Card */}
                <div className="mt-8 bg-gray-800/60 rounded-lg p-6 border border-gray-700">

                    {/* Header Row: Logo + Title */}
                    <div className="flex items-start sm:items-center gap-4">
                        <img
                            src={logicMonitorLogo}
                            alt="LogicMonitor"
                            className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded bg-white p-1"
                        />

                        <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                                Associate Automation Engineer
                            </h3>

                            <p className="text-sm sm:text-base text-gray-400 mt-1">
                                LogicMonitor • July 1, 2024 - Present
                            </p>

                            <p className="text-sm sm:text-base text-gray-400">
                                Pune, Maharashtra
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <ul className="mt-5 list-disc list-inside text-xs sm:text-sm md:text-base text-gray-300 space-y-2">
                        <li>
                            Working on both <span className="text-[#facc15]">manual and automation testing</span> to ensure high-quality product releases.
                        </li>
                        <li>
                            Developed <span className="text-[#facc15]">API automation test cases</span> using the <span className="text-[#facc15]">pytest framework</span>.
                        </li>
                        <li>
                            Designed and implemented a <span className="text-[#facc15]">custom automation library</span> for a new feature to improve test coverage.
                        </li>
                        <li>
                            Actively involved in <span className="text-[#facc15]">sprint ticket testing</span>, regression testing, and defect validation.
                        </li>
                        <li>
                            Contributed towards maintaining and improving <span className="text-[#facc15]">automation coverage</span> across features.
                        </li>
                    </ul>

                    {/* Tech Stack Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {[
                            "PyTest",
                            "API Automation",
                            "Manual Testing",
                            "Agile",
                            "Quality Assurance",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="text-xs sm:text-sm px-3 py-1 bg-gray-700 rounded-full text-gray-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
