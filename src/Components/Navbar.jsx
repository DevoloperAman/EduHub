
import { Link } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react" // You can install `lucide-react` or use any icon library
import navlog from "../assets/logoMain.png" // Adjust the path as necessary

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="shadow-2xl w-full fixed top-0 left-0 bg-white z-50">
            <div className="flex justify-between items-center px-6 md:px-20 py-4">
                
                {/* Logo */}
                <div>
                    <img className="w-28 md:w-32" src={navlog} alt="EduHub Logo" />
                </div>

                {/* Hamburger Menu (Mobile) */}
                <div className="lg:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Nav Links (Desktop) */}
                <ul className="hidden lg:flex text-black font-semibold gap-10 items-center text-[1.1rem]">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/project">Projects</Link></li>
                    <li><Link to="/jobprep">Job-Prep</Link></li>
                    <li><Link to="/about">About-us</Link></li>
                    <li className="ml-3 bg-blue-500 text-white px-4 py-2 rounded"><a href="">Sign-up</a></li>
                </ul>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className="lg:hidden flex flex-col items-center bg-white text-black font-semibold gap-6 py-6 text-[1.1rem] shadow-md">
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/project" onClick={() => setMenuOpen(false)}>Projects</Link></li>
                    <li><Link to="/jobprep" onClick={() => setMenuOpen(false)}>Job-Prep</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>About-us</Link></li>
                    <li className="bg-blue-500 text-white px-6 py-2 rounded"><a href="">Sign-up</a></li>
                </ul>
            )}
        </nav>
    )
}

export default Navbar
