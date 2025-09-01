import Heading from "@/components/Heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { teamMembers } from "@/constant/teams";
import { useIsMobile } from "@/hooks/use-mobile";
import React from "react";import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, ChevronLeft, ChevronRight, Mail } from "lucide-react";

const people = teamMembers;

const safeImage = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.target as HTMLImageElement;
  target.src = "https://placehold.co/100x100/E0E7FF/4338CA?text=Error";
};

const OurTeam = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isHovering, setIsHovering] = React.useState(false);
    const isMobile = useIsMobile();
  
    const containerRadius = isMobile ? 130 : 200;
    const profileSize = isMobile ? 60 : 80;
    const containerSize = containerRadius * 2 + 100;
  
    // Calculate rotation for each profile
    const getRotation = React.useCallback(
      (index: number): number => (index - activeIndex) * (360 / people.length),
      [activeIndex]
    );
  
    // Navigation
    const next = () => setActiveIndex((i) => (i + 1) % people.length);
    const prev = () =>
      setActiveIndex((i) => (i - 1 + people.length) % people.length);
  
    const handleProfileClick = React.useCallback(
      (index: number) => {
        if (index === activeIndex) return;
        setActiveIndex(index);
      },
      [activeIndex]
    );
  
    // Keyboard navigation
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent): void => {
        if (event.key === "ArrowLeft") prev();
        else if (event.key === "ArrowRight") next();
      };
  
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);
  
    // Auto-rotation
    React.useEffect(() => {
      if (isHovering) return;
  
      const interval = setInterval(() => {
        next();
      }, 5000);
  
      return () => clearInterval(interval);
    }, [isHovering]);
  
  return (
    <section className="section">
      <Heading
        heading="Our Team"
        description="Meet our honorable team members"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {teamMembers.map(({ id, name, photo, role }) => (
          <Card key={id} className="grid place-items-center">
            <CardContent className="space-y-2">
              <div>
                <img
                  src={photo}
                  alt={`photo of ${name}`}
                  className="object-cover size-40 rounded-full"
                />
              </div>
              <div className="text-center">
                <CardTitle>{name}</CardTitle>
                <CardDescription>{role}</CardDescription>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div
        className="flex flex-col items-center p-4 relative min-h-[400px] bg-white dark:bg-black transition-colors duration-300"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className="relative flex items-center justify-center"
          style={{ width: containerSize, height: containerSize }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={people[activeIndex].id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="z-10 bg-white dark:bg-gray-950 backdrop-blur-sm shadow-xl dark:shadow-2xl dark:shadow-gray-900/50 rounded-xl p-3 md:p-4 w-48 md:w-52 text-center border border-gray-100 dark:border-gray-800"
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                src={people[activeIndex].photo}
                alt={people[activeIndex].name}
                onError={safeImage}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto -mt-10 md:-mt-12 border-4 border-white dark:border-black object-cover shadow-md"
              />
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                <h2 className="mt-2 text-base md:text-lg font-bold text-gray-800 dark:text-white">
                  {people[activeIndex].name}
                </h2>
                <div className="flex items-center justify-center text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1">
                  <Briefcase size={12} className="mr-1" />
                  <span className="truncate">{people[activeIndex].role}</span>
                </div>
                <div className="flex items-center justify-center text-xs text-gray-500 dark:text-gray-500 mt-0.5">
                  <Mail size={12} className="mr-1" />
                  <span className="truncate">{people[activeIndex].role}</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex justify-center items-center mt-3 space-x-2"
              >
                <button
                  onClick={prev}
                  className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                >
                  <ChevronLeft
                    size={16}
                    className="text-gray-700 dark:text-gray-300"
                  />
                </button>
                <button className="px-4 py-1 text-sm rounded-full bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors">
                  Connect
                </button>
                <button
                  onClick={next}
                  className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                >
                  <ChevronRight
                    size={16}
                    className="text-gray-700 dark:text-gray-300"
                  />
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Orbiting Profiles with Counter-Rotation */}
          {people.map((p, i) => {
            const rotation = getRotation(i);
            const isActive = i === activeIndex;

            return (
              <motion.div
                key={p.id}
                animate={{
                  transform: `rotate(${rotation}deg) translateY(-${containerRadius}px)`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                  delay: isActive ? 0 : Math.abs(i - activeIndex) * 0.05,
                }}
                style={{
                  width: profileSize,
                  height: profileSize,
                  position: "absolute",
                  top: `calc(50% - ${profileSize / 2}px)`,
                  left: `calc(50% - ${profileSize / 2}px)`,
                  zIndex: isActive ? 20 : 10,
                }}
              >
                {/* Counter-rotation to keep image upright */}
                <motion.div
                  animate={{ rotate: -rotation }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                  }}
                  className="w-full h-full"
                >
                  <motion.img
                    src={p.photo}
                    alt={p.name}
                    onError={safeImage}
                    onClick={() => handleProfileClick(i)}
                    whileHover={{
                      scale: 1.15,
                      boxShadow:
                        "0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full h-full object-cover rounded-full cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "border-4 border-indigo-500 dark:border-indigo-400 shadow-lg"
                        : "border-2 border-gray-300 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-500"
                    }`}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {people.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === activeIndex
                  ? "bg-indigo-600 dark:bg-indigo-400"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
