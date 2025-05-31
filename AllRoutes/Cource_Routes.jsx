import { Route, Routes } from 'react-router-dom'
import BScIT from '../Pages/Cources/BScIT'
import BScCS from '../Pages/Cources/BScCS'
import BCA from '../Pages/Cources/BCA'
import BtechCSE from  '../Pages/Cources/BtechCSE'
import MscIT from  '../Pages/Cources/MscIT'
import MscCS from '../Pages/Cources/MscCS'
import MCA  from '../Pages/Cources/MCA'
import MtechCSE  from '../Pages/Cources/MtechCSE'



 


function NavBar_Routes() {
    return (
        <>
            <Routes>
                  
                  <Route path="/bsc-it" element={<BScIT/>}/>
                  <Route path="/bsc-cs" element={<BScCS/>}/>
                  <Route path="/bca" element={<BCA/>}/>
                  <Route path="/betech" element={<BtechCSE/>}/>
                  <Route path="/msc-it" element={<MscIT/>}/>
                  <Route path="/msc-cs" element={<MscCS/>}/>
                  <Route path="/mca" element={<MCA/>}/>
                  <Route path="/mtech" element={<MtechCSE/>}/>

            </Routes>

        </>
    )
}

export default NavBar_Routes