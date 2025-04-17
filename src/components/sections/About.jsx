
export const About = () => {
    const frontendSkills = ["React", , "Javascript", "TailwindCSS", ]
    const backendSkills = ["Node", "Python", "MongoDB", "PostgreSQL"]
    const relevantCoursework = ["Algorithm Design and Analysis",
        "Data Structures and Algorithms", "Object Oriented Programming", "Discrete Mathematics"
    ]
    
    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r
             from-blue-500 to-purple-600 text-center bg-clip-text text-transparent "> About Me Section</h2>
        
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Passionate Generic Texty to finish later on tomorrow omfg i have to finish this ASAPPPP
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className=" text-xl font-bold mb-4"> Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full
                                 text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] 
                                 transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className=" text-xl font-bold mb-4"> Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full
                                 text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] 
                                 transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2"> 
                            <li>
                                <strong > B.S. in Computer Science - University of California, Davis (2026)</strong>
                            </li>
                            <li>
                                Relevant Coursework: {relevantCoursework.map((course, key) => (
                                    <span key={key}>
                                        {course == relevantCoursework[relevantCoursework.length - 1] 
                                        ? course
                                        : `${course}, `}
                                    </span>
                                ))}
                            </li>
                        </ul>
                </div>

                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold"> Student Research Asisstant at Universty of California, Davis (12/2024 - present)</h4>
                                <p> SKILL SKILL SKILL SKILL SKILL SKILLSKILL SKILL SKILLSKILL SKILL SKILL SKILL SKILL SKILL </p>
                            </div>
                            <div>
                                <h4 className="font-semibold"> Analytics Intern II, at Contra Costa County WIC (06/2023 - 07/2024)</h4>
                                <p> SKILL SKILL SKILL SKILL SKILL SKILLSKILL SKILL SKILLSKILL SKILL SKILL SKILL SKILL SKILL </p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
}