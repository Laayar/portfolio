import React from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


function AnimatedCounter() {
  const containerRef = React.useRef(null);

  useGSAP(() => {
    const counters = containerRef.current.querySelectorAll('.counter-number span');
    
    counters.forEach((counter, index) => {
      const targetValue = counterItems[index].value;
      
      gsap.to(counter, {
        innerHTML: targetValue,
        duration: 2,
        ease: 'power1.out',
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });
    });
  }, { scope: containerRef });

  return (
    <div id="counter" ref={containerRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div key={index} className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
            <div
              className="counter-number text-white text-5xl font-bold mb-2"
            >
              <span>0</span> {item.suffix}
              {/* <CountUp suffix={item.suffix} end={item.value} /> */}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimatedCounter;
