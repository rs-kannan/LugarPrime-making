// import { motion, AnimatePresence } from "framer-motion";

// const ResponsiveMenu = ({ isOpen }) => {
//   return (
//     <AnimatePresence mode="wait">
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -100 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -100 }}
//           transition={{ duration: 0.3 }}
//           className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden"
//         >
//           <div className="text-xl font-semibold uppercase bg-primary text-black py-10 m-6 rounded-3xl">
//             <ul className="flex flex-col justify-center items-center gap-10">
//               <li>Home</li>
//               <li>About</li>
//               <li>Service</li>
//               <li>Contact</li>
//             </ul>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ResponsiveMenu;

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const ResponsiveMenu = ({ isOpen }) => {
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   return (
//     <AnimatePresence mode="wait">
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -100 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -100 }}
//           transition={{ duration: 0.3 }}
//           className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden"
//         >
//           <div className="text-xl font-semibold uppercase bg-primary text-black py-10 m-6 rounded-3xl">
//             <ul className="flex flex-col justify-center items-center gap-7">
//               <li>Home</li>
//               <li>About</li>
//               <li onClick={() => setIsServicesOpen(!isServicesOpen)} className="text-center">
//                 Service
//                 {/* Dropdown for Services */}
//                 {isServicesOpen && (
//                   <motion.ul
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="flex flex-col items-center gap-4 mt-4"
//                   >
//                     <li className="text-sm">Web Development</li>
//                     <li className="text-sm">Mobile Development</li>
//                     <li className="text-sm">UI/UX Design</li>
//                   </motion.ul>
//                 )}
//               </li>
//               <li>Contact</li>
//             </ul>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ResponsiveMenu;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ isOpen }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-black py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-7">
              <li onClick={toggleServices} className="text-center cursor-pointer">Home</li>
              <li onClick={toggleServices} className="text-center cursor-pointer">About</li>

              {/* Service with Dropdown */}
              <li onClick={toggleServices} className="text-center cursor-pointer">
                Service
                {isServicesOpen && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-4 mt-4"
                  >
                    <li className="text-sm">Web Development</li>
                    <li className="text-sm">Mobile Development</li>
                    <li className="text-sm">UI/UX Design</li>
                  </motion.ul>
                )}
              </li>

              <li onClick={toggleServices} className="text-center cursor-pointer">Contact</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
