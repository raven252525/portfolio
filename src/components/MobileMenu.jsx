
export const MobileMenu = ({menuOpen, setMenuOpen}) => {
    
    return (
        <div className={`fixed top-0 left-0 w-full bg-gray-900 z-40 flex flex-col items-center
         justify-center transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-89 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>




            <button onClick={() => setMenuOpen(false)} className="absolute top-4.5 right-7 text-gray-300 hover:text-white transition-colors text-3xl 
            focus:outline-none cursor-pointer " aria-label="Close Menu">
            &times;
            </button>

            
            <a href="#home" 
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-gray-300 my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} hover:text-white transition-colors
                `}>
            Home
            </a>
            <a href="#about" 
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-gray-300 my-4 transform transition-transform duration-300
                ${menuOpen ? " opacity-100 translate-y-0" : "opacity-0 translate-y-5"} hover:text-white transition-colors
                `}>
            About
            </a>
            <a href="#projects" 
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-gray-300 my-4 transform transition-transform duration-300
                ${menuOpen ? " opacity-100 translate-y-0" : " opacity-0 translate-y-5"} hover:text-white transition-colors
                `}>
            Projects
            </a>
            <a href="#contact" 
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-gray-300 my-4 transform transition-transform duration-300
                ${menuOpen ? " opacity-100 translate-y-0" : " opacity-0 translate-y-5"} hover:text-white transition-colors
                `}>
            Contact
            </a>

        </div>
    )
}