import { RevealOnScroll } from "../RevealOnScroll"


export const About = () => {
    const languages = ["C++" , "Python","Javascript", "HTML/CSS", "LaTeX", "R" ]
    const frameworks = ["Node.js", "React", "Next.js", "Linux", "Numpy", "Pandas", "Pytorch", "TailwindCSS"]
    const devTools = ["Github", "MongoDB", "VS Code", "Jupyter Notebook", "Google Colab"]
    const relevantCoursework = ["ECS 122A: Algorithm Design and Analysis",
        "ECS 36C: Data Structures and Algorithms", "ECS 36B: Object Oriented Programming", "ECS 20: Discrete Mathematics"
        , "ECS 124: Theory and Practice of Bioinformatics", "STA 100: Statistics and Probability"]
    
    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4 ">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r
                from-blue-500 to-purple-600 text-center bg-clip-text text-transparent "> About Me </h2>
            
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all mb-6">
                    <p className="text-gray-300 mb-6">
                    a Computer Science student with a passion for building scalable tools,
                     tackling real-world problems with code, and helping others along the way.
                      I’ve worked across domains—from machine learning to web development to 
                      systems programming—leveraging technologies like C++, Python, React, and OpenCV. 
                      I'm drawn to projects where I can combine technical depth with community impact.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className=" text-xl font-bold mb-4"> Programming Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {languages.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full
                                    text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] 
                                    transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className=" text-xl font-bold mb-4"> Technologies/Frameworks</h3>
                            <div className="flex flex-wrap gap-2">
                                {frameworks.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full
                                    text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] 
                                    transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className=" text-xl font-bold mb-4"> Developer Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {devTools.map((tech, key) => (
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
                
                <div className="mb-6">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
                            <h3 className="text-2xl font-bold mb-4"> Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2"> 
                                <li className="font-bold text-xl">
                                    <strong className="font-bold text-xl"> B.S. in Computer Science - University of California, Davis (2026)</strong>
                                </li>
                                <li className="text-xl">
                                    Relevant Coursework: <span className="text-lg text-gray-400 grid grid-cols-2">
                                        {relevantCoursework.map((course, key) => (
                                        <span key={key} className="flex flex-col m-3  hover:text-blue-500 transition-colors">
                                            {course == relevantCoursework[relevantCoursework.length - 1] 
                                            ? course
                                            : `${course} `}
                                        </span>
                                        ))}
                                    </span>
                                </li>
                            </ul>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-rows-2 gap-6">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <div className="flex justify-between">
                                <h3 className="text-xl font-bold mb-4"> Experience</h3> <h2 className="text-gray-400 hover:text-blue-500 transition"> -my professional journey</h2>
                            </div>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                <div className="flex justify-between">
                                        <h4 className="font-semibold px-2"> Student Research Assistant </h4>
                                        <span className="text-md font-light"> University of California, Davis (12/2024 - present)</span>
                                    </div>
                                    <p className=" text-gray-400 text-sm py-2 hover:text-blue-500 transition-colors"> ● Led debugging sessions in C++ and Python, resolving tickets, and issues in CMake, GitHub version control </p>
                                    <p className=" text-gray-400 text-sm py-2 hover:text-blue-500 transition-colors"> ● Educated 50+ students one on one with in depth tutorials, increasing understanding and average student engagement by
                                    10% via explanation of topics such as dynamic memory allocation, pointer arithmetic, and dictionary/list comprehension</p>
                                </div>
                                <div>
                                    <div className="flex justify-between">
                                        <h4 className="font-semibold px-2"> Analytics Intern II </h4>
                                        <span className="text-md font-light"> Contra Costa County WIC (06/2023 - 07/2024)</span>
                                    </div>
                                    <p className=" text-gray-400 text-sm py-2 hover:text-blue-500 transition-colors"> ● Utilized custom database, Excel, and Microsoft Office to process client and employee data entry, review, and extraction,
                                    optimizing and thus reducing 20 hours of employee work weekly on average </p>
                                    <p className=" text-gray-400 text-sm py-2 hover:text-blue-500 transition-colors"> ● Provided 300+ client information sessions for 50 participants, providing nutritional content, troubleshooting program </p>
                                    <p className=" text-gray-400 text-sm py-2 hover:text-blue-500 transition-colors"> ● Supported over 10 custom and commercial client projects in 5 week sprints, ensuring seamless program operations </p>
                                    <p className=" text-gray-400 text-sm py-2 hover:text-blue-500 transition-colors"> ● Streamlined clerical operations by incorporating a systematic data review protocol; identified and corrected over 200
                                    inaccurate entries within a month, resulting in a notable enhancement in overall data accuracy</p>
                                </div>

                                <div>
                                    <div className="flex justify-between">
                                        <h4 className="font-semibold px-2"> Chemistry Tutor </h4>
                                        <span className="text-md font-light"> Diablo Valley College (08/2023 - 12/2023)</span>
                                    </div>
                                    <p className=" text-gray-400 text-sm py-2 hover:text-blue-500 transition-colors"> ● Facilitated over 100 individual and group tutoring sessions in chemistry, facilitating problem-solving for 150 students </p>
                                    <p className=" text-gray-400 text-sm py-2 hover:text-blue-500 transition-colors"> ● Employed the Socratic Method, and worked with over 5 Professors to help ease students in to complex concepts ranging
                                    from Introductory Chemistry to NMR graph interpretation </p>
                                </div>
                                    
                            </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}