import { useEffect, useState } from "react";
import hamburgerIcon from '/images/icon-hamburger.svg';
import menuCloseIcon from '/images/icon-close.svg';

function NavBar(){
    
    const [isMobile, setDeviceType] = useState(window.innerWidth < 768);
    const [menuClosed, setMenuClosed] = useState(true);

    function hamburgerHandler(){
        setMenuClosed(!menuClosed);
    }
    function checkDeviceType(){
        if(window.innerWidth<768){
            setDeviceType(true)
        }else{
            setDeviceType(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('resize',checkDeviceType)
        return ()=>{
            window.removeEventListener('resize',checkDeviceType)
        }
    },[])

    return(
        <nav className="flex py-8 pr-4 md:pr-28 justify-between">
            <div>
                <img src="/images/logo.svg" alt="logo" />
            </div>
            <div className="w-max h-max self-center">
                {
                isMobile ? <img src={menuClosed ? hamburgerIcon : menuCloseIcon} alt="hamburger icon" className="hover:cursor-pointer" onClick={hamburgerHandler} />
                 : <div className="flex gap-24">
                    <div className="flex gap-6">
                        <p className="hover:cursor-pointer">PRODUCT</p>
                        <p className="hover:cursor-pointer">FEATURES</p>
                        <p className="hover:cursor-pointer">PRICING</p>
                    </div>
                    <div>
                        <button className="opacity-50">LOGIN</button>
                    </div>
                 </div>
                }
            </div>

            <div className={`fixed rounded-lg top-[8%] left-[8%] z-10 bg-slate-200 w-[80vw] text-center shadow-xl overflow-y-scroll ${menuClosed? `opacity-0` : `opacity-100`}`}>
                <ul className="mt-4">
                    <li>PRODUCT</li>
                    <li>FEATURES</li>
                    <li>PRICING</li>
                </ul>
                <hr className="bg-black w-3/4 mx-auto my-2"></hr>
                <button className="mb-4">LOGIN</button>
            </div>
        </nav>
    )
}

export default NavBar;