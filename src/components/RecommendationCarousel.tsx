import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const recommendations = [
  {
    text: "Sulejman is certainly a reliable employee & always willing to go out of his way to ensure his duties are all successfully completed in a timely manner. Since we worked together I can attest to his admirable communication skills & capability to work in a dynamic team & his willingness to step in & cooperate with the teammates...",
    author: "Nikola Mitrovic",
    title: "Head of Customer Service"
  },
  {
    text: "Sulejman, throughout his employment with Launch, had been a comitted employee and moreover a reliable team player since the moment he walked in. His contributions working the PBi tool have been exceptional, on top of the default technical support and gentle customer care approach he's taken with our user base. I have no doubts he will excel in future career journey.",
    author: "Katarina Arsenijević",
    title: "Chief Growth & Strategy Officer at Launch Control"
  },
  {
    text: "I am writing to highly recommend Mr. Sulejman Lekovic for any professional endeavor or opportunity that he may pursue. Throughout his time with us, Sulejman consistently demonstrated an exceptional work ethic and a strong commitment to his responsibilities. He exhibited a remarkable willingness to go the extra mile to ensure tasks were completed to the best of his abilities.",
    author: "Mickovski Nenad",
    title: "Senior Compliance and Fraud Analyst"
  },
  {
    text: "Ambitious and fast learner, hard working person and highly talented. We enjoyed working with sulejman and can highly recommend him.",
    author: "Andreas Skorski",
    title: "Connecting commerce via <Genesys> AI"
  },
  {
    text: "Sulejman is a great example of a hardworking and determined individual. During my work with him, he was reliable, professional, polite and willing to go the extra mile for the client or project. Always ready to lead with the difficult tasks, always there for other team members.",
    author: "Jovan Cosic",
    title: "eLearning Content Developer - Associate at BlackRock"
  }
];

const CARD_WIDTH = 600;
const GAP = 32;

export function RecommendationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendations.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  // Calculate the offset to center the currentIndex card
  // offset = (containerWidth / 2) - (cardWidth / 2) - (index * (cardWidth + gap))
  const offset = (containerWidth / 2) - (CARD_WIDTH / 2) - (currentIndex * (CARD_WIDTH + GAP));

  return (
    <div ref={containerRef} className="carousel-container relative overflow-hidden h-[500px] flex flex-col items-center">
      <div className="w-full h-full flex items-center">
        <motion.div 
          className="flex gap-8"
          animate={{ x: offset }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          {recommendations.map((rec, index) => {
            const isActive = index === currentIndex;
            return (
              <motion.div
                key={index}
                animate={{
                  scale: isActive ? 1 : 0.75,
                  opacity: isActive ? 1 : 0.4,
                  filter: isActive ? "blur(0px)" : "blur(4px)",
                }}
                className="w-[600px] flex-shrink-0"
              >
                <div className={`carousel-card project-card h-full transition-all duration-700 ${isActive ? 'active-glow bg-black/80' : 'bg-black/40 border-white/5'}`}>
                  <p className="quote-text italic text-slate-200 py-2">"{rec.text}"</p>
                  <div className="mt-auto pt-6 border-t border-white/5">
                    <h4 className="author-text text-xl font-bold text-orange-500">- {rec.author}</h4>
                    <p className="text-slate-400 text-sm mt-1">{rec.title}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      
      <div className="carousel-indicators flex gap-3 mt-12">
        {recommendations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`indicator h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-10 bg-orange-500 shadow-[0_0_15px_#f97316]' : 'w-2.5 bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
}
