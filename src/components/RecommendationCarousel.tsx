import { useState, useEffect } from 'react';

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

export function RecommendationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendations.length);
    }, 7000); // Rotates every 7 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          >
            {index === currentIndex && (
              <div className="project-card recommendation-card">
                <p className="project-desc quote-text">"{rec.text}"</p>
                <h4 className="project-title author-text">- {rec.author}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{rec.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
