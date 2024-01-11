import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import Link from "next/link";

export default function IndexPage() {

    //   IF YOU R USING NORMAL ANIMATION AND YOU THINK IT WAS NOT AS HEAVY AND ITs DOEST BLOCK THE EXCUTION PROCESS OR DONT CREATE PERFORMANCE ISSUES THEN YOU HAVE TO USE THIS METHOD TO INTEGRATE GSAP WITH NEXTjs 

    // BENIFIT ( YOU CAN USE GSAP AS NORMAL YOU USE IN VANILLA HTML AND CSS JS )
    // DONT FORGET TO USE CONTEXT REVERT()

  const root = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      // GSAP ANIMATION 
      gsap.from(".box", { rotation: "+=360" ,x:"200",opacity:"0",duration:"1"});
      gsap.from(".homeh1",{
        x:"200",
        opacity:"0",
        duration:"1"
      })

    }, root);
    return () => ctx.revert();
  }, []);



  return (
    <div className="page" ref={root}>
      <h1 className="homeh1">Home Page</h1>
      <div className="box">Home</div>
      <p>
        <Link href="/about">About Page</Link>
      </p>

      <style jsx global>{`
        .page {
          font-family: Avenir, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          color: #2c3e50;
          margin-top: 60px;
          min-height:100vh
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
