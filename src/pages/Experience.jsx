import { useState } from "react";
import logicMonitorLogo from "../assets/logicmonitor.jpg";

export default function Experience() {
    const [showDuration, setShowDuration] = useState(false);

    // 🔹 Experience start date: July 1, 2025
    const startDate = new Date(2025, 6, 1); // month is 0-based
    const today = new Date();

    // Accurate month calculation
    let totalMonths =
        (today.getFullYear() - startDate.getFullYear()) * 12 +
        (today.getMonth() - startDate.getMonth());

    if (today.getDate() >= startDate.getDate()) {
        totalMonths += 1;
    }

    let experienceText = "";

    if (totalMonths < 12) {
        experienceText = `${totalMonths} month${totalMonths > 1 ? "s" : ""}`;
    } else {
        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;

        experienceText =
            months === 0
                ? `${years} year${years > 1 ? "s" : ""}`
                : `${years} year${years > 1 ? "s" : ""} ${months} month${months > 1 ? "s" : ""}`;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 mt-6">
            <div className="max-w-5xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg rounded-xl p-6 sm:p-8 xl:p-10 text-white">

                {/* Heading */}
                <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-[#facc15] text-center">
                    Experience
                </h2>

                {/* Experience Card */}
                <div
                    onMouseEnter={() => setShowDuration(true)}
                    onMouseLeave={() => setShowDuration(false)}
                    className="relative mt-8 grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-6 bg-gray-800/60 rounded-lg p-6 border border-gray-700 transition-transform duration-300 hover:scale-[1.02]"
                >
                    {/* Hover Badge */}
                    {showDuration && (
                        <div className="absolute -top-3 right-4 bg-[#facc15] text-gray-900 text-xs sm:text-sm px-3 py-1 rounded-full shadow-lg">
                            Experience: {experienceText}
                        </div>
                    )}

                    {/* Logo */}
                    <div className="flex justify-center sm:justify-start">
                        <img
                            src={logicMonitorLogo}
                            alt="LogicMonitor"
                            className="w-20 h-20 object-contain"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        {/* Role + Date */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                                Associate Automation Engineer
                            </h3>

                            <span className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-0">
                                July 1, 2025 – Present
                            </span>
                        </div>

                        {/* Company */}
                        <p className="text-sm sm:text-base font-semibold text-[#facc15] mt-1">
                            LogicMonitor
                        </p>

                        {/* Location */}
                        <p className="text-sm sm:text-base text-gray-400">
                            Pune, Maharashtra
                        </p>
                    </div>

                    {/* Responsibilities (start under logo) */}
                    <ul className="sm:col-span-2 mt-4 list-disc list-inside text-xs sm:text-sm md:text-base text-gray-300 space-y-2">
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

                    {/* Tech Stack */}
                    <div className="sm:col-span-2 mt-4 flex flex-wrap gap-2">
                        {["PyTest", "API Automation", "Manual Testing", "Agile", "QA"].map((tech) => (
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
