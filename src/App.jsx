import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  const handleScroll = () => {
    setScrollY(window.scrollY);

    // If the scroll position is greater than 50, start the animation
    if (window.scrollY > 50) {
      controls.start({ boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}); // Change to primary color on scroll
    } else {
      controls.start({ boxShadow:"none"  }); // Reset color when at the top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <motion.header
        className="fixed top-0 left-0 w-full z-10 p-4"
        initial={{ backgroundColor: "#ffffff", boxShadow:"none"  }} // Initial color
        animate={controls}
      >
        <div className="container mx-auto">
          <h1 className="text-xl font-bold">Scroll Header</h1>
        </div>
      </motion.header>
      <div className="h-[2000px]  text-black">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          dolores quisquam deserunt consectetur dignissimos ducimus sunt ipsam
          dolorum, praesentium ipsum nesciunt totam, quidem ad libero modi
          numquam fugiat delectus dolor.
        </p>
      </div>
    </div>
  );
};

export default App;
