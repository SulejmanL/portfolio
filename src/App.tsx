import { SplineScene } from './components/SplineScene';
import { RecommendationCarousel } from './components/RecommendationCarousel';
import { BackgroundBeamsWithCollision } from './components/ui/BackgroundBeamsWithCollision';
import { EvervaultCard } from './components/ui/EvervaultCard';
import { Button as MovingBorderButton } from './components/ui/MovingBorder';
import './index.css';

function App() {
  return (
    <BackgroundBeamsWithCollision className="app-container">
      {/* Glassmorphism UI Overlay */}
      <div className="content-overlay">
        <header className="navbar">
          <div className="social-links">
            <a href="https://github.com/SulejmanL/Projects" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
            <a href="https://pixelflow.cloud/" target="_blank" rel="noopener noreferrer" className="nav-link">Website</a>
            <a href="https://www.linkedin.com/in/sulejmanlekovic-customer-support-specialist/" target="_blank" rel="noopener noreferrer" className="nav-link">LinkedIn</a>
            <a href="https://wandercheap.com/" target="_blank" rel="noopener noreferrer" className="nav-link">Blog</a>
          </div>
        </header>

        <main>
          <section className="hero relative p-4 md:p-10 border border-white/[0.1] rounded-3xl overflow-visible">
            <EvervaultCard className="hero-card-effect">
              <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto p-4 md:p-8">
                <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold mb-6 text-white tracking-tight drop-shadow-2xl">
                  Sulejman Lekovic
                </h1>
                <p className="text-xl md:text-2xl font-light text-slate-200 leading-relaxed mb-8 backdrop-blur-sm">
                  Dynamic Customer Success & AI Automation Professional with over 7 years of experience across SaaS and technology platforms. I bridge the gap between technical solutions and customer needs by building intelligent workflows and automated pipelines that drive real business impact.
                </p>
                <div className="flex gap-4">
                  <a href="#contact" className="btn-primary" style={{textDecoration: 'none'}}>Get In Touch</a>
                </div>
              </div>
            </EvervaultCard>
          </section>

          <section className="featured-projects">
            <h2 className="section-title">Key Projects</h2>
            <div className="areas-grid grid-cols-1 md:grid-cols-3 gap-6">
              <EvervaultCard 
                gradientColor="from-[#4A154B] via-[#36C5F0] to-[#2EB67D]" 
                customCharacters="#@slack.cmd:msg:user:chan"
              >
                <div className="project-card h-full w-full bg-transparent border-none">
                  <h3 className="project-title">Slackbot Automations</h3>
                  <p className="project-desc">Built a Slack bot automation using n8n and webhooks — supports slash commands, message triggers, and interactive notifications piped to internal tools.</p>
                </div>
              </EvervaultCard>

              <EvervaultCard 
                gradientColor="from-[#00A3E0] via-[#0057B8] to-[#607D8B]" 
                customCharacters="%Σ75.2$metrics#data.stat"
              >
                <div className="project-card h-full w-full bg-transparent border-none">
                  <h3 className="project-title">Automated Reporting Dashboards</h3>
                  <p className="project-desc">Built automated reporting dashboards using n8n and Google Sheets to consolidate data from multiple sources into live operational metrics.</p>
                </div>
              </EvervaultCard>

              <EvervaultCard 
                gradientColor="from-[#7C3AED] via-[#D946EF] to-[#2563EB]" 
                customCharacters="{AI}🤖bot.brain:[01]:core"
              >
                <div className="project-card h-full w-full bg-transparent border-none">
                  <h3 className="project-title">AI Powered Customer Support Chatbot</h3>
                  <p className="project-desc">Developed an AI-powered customer support chatbot using n8n and the OpenAI API — handles common inquiries and routes complex issues.</p>
                </div>
              </EvervaultCard>
            </div>
          </section>

          <section className="projects">
            <h2 className="section-title">Areas of Expertise</h2>
            <div className="areas-grid">
              <MovingBorderButton
                duration={8000}
                borderRadius="1.25rem"
                containerClassName="h-full"
                className="bg-transparent border-none p-0 items-start justify-start flex-col"
              >
                <div className="project-card h-full w-full">
                  <h3 className="project-title">Customer Support & Operations</h3>
                  <p className="project-desc">
                    Providing top-tier support across SaaS platforms, driving customer success strategies, and leveraging predictive analytics to exceed 95%+ satisfaction rates while resolving complex technical inquiries.
                  </p>
                </div>
              </MovingBorderButton>
              <MovingBorderButton
                duration={8500}
                borderRadius="1.25rem"
                containerClassName="h-full"
                className="bg-transparent border-none p-0 items-start justify-start flex-col"
              >
                <div className="project-card h-full w-full">
                  <h3 className="project-title">AI Automations</h3>
                  <p className="project-desc">
                    Designing intelligent workflows using n8n and Antigravity. Expertise in Slack bot development, APIs, automated reporting dashboards, and building AI-powered chatbots for streamlined support operations.
                  </p>
                </div>
              </MovingBorderButton>
              <MovingBorderButton
                duration={7800}
                borderRadius="1.25rem"
                containerClassName="h-full"
                className="bg-transparent border-none p-0 items-start justify-start flex-col"
              >
                <div className="project-card h-full w-full">
                  <h3 className="project-title">Web Design</h3>
                  <p className="project-desc">
                    Combining strong technical aptitude with modern web design principles to build immersive, responsive, and data-driven web experiences that align with organizational objectives.
                  </p>
                </div>
              </MovingBorderButton>
            </div>
          </section>

          <section className="certifications">
            <h2 className="section-title">Certifications</h2>
            <div className="areas-grid cert-row">
              <div className="project-card semrush-corner">
                <h3 className="project-title">Technical SEO Course</h3>
                <p className="project-desc">Advanced technical SEO auditing, site architecture, and performance optimization from Semrush.</p>
              </div>
              <div className="project-card linkedin-corner">
                <h3 className="project-title">Career Essentials in Generative AI</h3>
                <p className="project-desc">Certification by Microsoft and LinkedIn covering the ethical and functional implementation of GenAI in business.</p>
              </div>
              <div className="project-card n8n-corner">
                <h3 className="project-title">n8n Academy: Beginner Certification</h3>
                <p className="project-desc">Professional certification in workflow automation basics, covering node configuration, data structures, and conditional logic within the n8n ecosystem.</p>
              </div>
            </div>
          </section>


        </main>

        <section className="recommendations" style={{ padding: '8rem 2rem', background: 'rgba(5, 5, 5, 0.2)' }}>
          <h2 className="section-title text-center mt-0 mb-12">Recommendations</h2>
          <RecommendationCarousel />
        </section>

        <footer id="contact" className="contact-footer" style={{ borderTop: 'none', marginTop: '0' }}>
          <div className="contact-layout">
            <div className="contact-container">
              <h2>Let's Build Something Great</h2>
              <p>Fill out the form below to get in touch with me directly.</p>
              <form className="contact-form" action="mailto:sulejmanlekovic@hotmail.com" method="post" encType="text/plain">
                <div className="form-group">
                  <input type="text" name="Name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="Email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" name="Subject" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea name="Message" placeholder="Your Message" rows={4} required></textarea>
                </div>
                <button type="submit" className="btn-primary form-submit">Send Message</button>
              </form>
            </div>
            
            <div className="contact-spline">
              <SplineScene 
                scene="https://prod.spline.design/AcBN9ShBZkutlYBz/scene.splinecode" 
                onLoad={(app) => {
                  // Listen for key clicks
                  app.addEventListener('mouseDown', (e) => {
                    const targetName = e.target.name;
                    
                    // 'Key Esc' in this scene is the yellow Resume keycap
                    if (targetName === 'Key Esc' || targetName === 'Resume' || targetName.toLowerCase().includes('resume')) {
                      const link = document.createElement('a');
                      link.href = '/Sulejman_Lekovic_Resume.pdf';
                      link.download = 'Sulejman_Lekovic_Resume.pdf';
                      link.target = '_blank';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }
                    
                    // 'Key Send' in this scene is the blue Hire Me keycap
                    if (targetName === 'Key Send' || targetName === 'Hire Me' || targetName.toLowerCase().includes('hire')) {
                      document.querySelector('.contact-container')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  });

                  // Change cursor on hover for interactive elements
                  app.addEventListener('mouseHover', (e) => {
                    const targetName = e.target.name;
                    const interactiveNames = ['Key Esc', 'Key Send', 'Resume', 'Hire Me'];
                    if (interactiveNames.includes(targetName) || targetName.toLowerCase().includes('resume') || targetName.toLowerCase().includes('hire')) {
                      document.body.style.cursor = 'pointer';
                    } else {
                      document.body.style.cursor = 'default';
                    }
                  });
                }}
              />
            </div>
          </div>
        </footer>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export default App;
