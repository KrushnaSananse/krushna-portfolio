import { useState,useEffect } from "react";

const Cursor = () => {
    const [position, setPosition] = useState({x:0,y:0});

    useEffect(()=>{
        const move = (e) =>{
            setPosition({x:e.clientX,y:e.clientY});
        };

        window.addEventListener("mousemove", move);

        return ()=>{
            window.removeEventListener("mousemove", move)
        };

    },[]);

    return (
        <div
            className="pointer-events-none fixed top-0 left-0 z-[9999] h-10 w-10 rounded-full border-2 border-white opacity-60 transition-all duration-75 mix-blend-difference"
            style={{
                transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
            }}
        >

        </div>
    )
}

export default Cursor;