import { Route, Routes } from 'react-router-dom'
import Project from '../Pages/Navbar_Pages/Project'
import Contact from '../Pages/Navbar_Pages/Contact'
import JobPrep from '../Pages/Navbar_Pages/JobPrep'
import About from '../Pages/Navbar_Pages/About'
import Home from '../../src/Components/Home'

function NavBar_Routes() {
    return (
        <>
            <Routes>
                <Route path="/"        element={< Home />}/>
                <Route path="/project" element={< Project />} />
                <Route path="/contact" element={< Contact />} />
                <Route path="/jobprep" element={< JobPrep />} />
                <Route path="/about"   element={< About />} />
                <Route path="/signup"  element={< Project />} />
            </Routes>

        </>
    )
}

export default NavBar_Routes