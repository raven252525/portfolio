import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20"> 
        
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4 ">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r
                from-blue-500 to-purple-600 text-center bg-clip-text text-transparent "> Featured Projects </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2"> Plant Identification ML Model</h3>
                        <p className="text-gray-400 mb-4"> A Machine Learning Image Classification project, using Computer Vision techniques and methodologies for 
                        leaf analysis and prediction, achieving 98.26% accuracy in determining disease progression in queries of the final model</p>
                        <div>
                            {["Colab", "Pandas", "Pytorch", "Pillows", "OpenCV", "Numpy", "Matplotlib"].map((skill, key) => (
                                <span key={key} className=" mx-1 my-1 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full
                                    text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] 
                                    transition flex md:inline-block">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center my-4">
                            <a className="text-blue-400 hover:text-blue-300 transition-colors"
                            href="https://docs.google.com/presentation/d/e/2PACX-1vT5QlX7PazH0LFaT3KgAp1JVM1JHCM_1SMHoNaTTMrleer7anRScCvhbsbpYTHOv-_WcVe0Q4z14rwQ/pub?start=true&loop=false&delayms=3000"
                            target="_blank">View Project →</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2"> Empty</h3>
                        <p className="text-gray-400 mb-4"> Empty Desc</p>
                        <div>
                            {[""].map((skill, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full
                                    text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] 
                                    transition flex md:inline-block mx-1 my-1">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center my-4">
                            <a className="text-blue-400 hover:text-blue-300 transition-colors"
                            href=""
                            target="_blank">View Project →</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2"> Empty</h3>
                        <p className="text-gray-400 mb-4"> Empty Desc</p>
                        <div>
                            {[""].map((skill, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full
                                    text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] 
                                    transition md:inline-block mx-1 my-1">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center my-4">
                            <a className="text-blue-400 hover:text-blue-300 transition-colors"
                            href=""
                            target="_blank">View Project →</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2"> Empty</h3>
                        <p className="text-gray-400 mb-4"> Empty Desc</p>
                        <div>
                            {[""].map((skill, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full
                                    text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] 
                                    transition md:inline-block mx-1 my-1">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center my-4">
                            <a className="text-blue-400 hover:text-blue-300 transition-colors"
                            href=""
                            target="_blank">View Project →</a>
                        </div>
                    </div>


                </div>
            </div>
        </RevealOnScroll>
    </section>
}