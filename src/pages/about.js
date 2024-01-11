import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import Link from "next/link";

export default function IndexPage() {
    
    
    //   IF YOU R USING HEAVY ANIMATION AND YOU THINK IT BLOCKS THE EXECUTION AND CREATE PERFOMANCE ISSUES THEN YOU HAVE TO USE THIS METHOD TO INTEGRATE GSAP WITH NEXTjs
    
    const boxRef = useRef();
    const headref = useRef();
  
    useEffect(() => {
    // Set initial state before animation
    
    gsap.set(headref.current, { opacity: 0, y: -100 });
    // Use gsap.from to animate from the specified state to the current state
    gsap.to(headref.current, {
      y: 0, // Animate to y: 0
      duration: 1,
      opacity: 1,
    });

  }, []);



  return (
    <div className="page">
      <h1 ref={headref}>About Page</h1>
      <div className="box" ref={boxRef}>
        About
      </div>
      <p>
        <Link href="/">Back home</Link>
      </p>

      <style jsx global>{`
        .page {
          font-family: Avenir, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          color: #2c3e50;
          margin-top: 60px;
        }

        .box {
          width: 100px;
          height: 100px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: #28a92b;
          font-weight: 600;
          color: #fff;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}
