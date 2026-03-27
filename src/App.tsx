import { SplineScene } from './components/SplineScene';
import { RecommendationCarousel } from './components/RecommendationCarousel';
import { BackgroundBeamsWithCollision } from './components/ui/BackgroundBeamsWithCollision';
import './index.css';

function App() {
  return (
    <BackgroundBeamsWithCollision className="app-container">
      {/* Glassmorphism UI Overlay */}
      <div className="content-overlay">
        <header className="navbar">
          <div className="social-links">
            <a href="https://github.com/SulejmanL/Projects" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
            <a href="https://www.linkedin.com/in/sulejmanlekovic-customer-support-specialist/" target="_blank" rel="noopener noreferrer" className="nav-link">LinkedIn</a>
            <a href="https://wandercheap.com/" target="_blank" rel="noopener noreferrer" className="nav-link">Blog</a>
          </div>
        </header>

        <main>
          <section className="hero">
            <h1>Sulejman Lekovic</h1>
            <p>
              Dynamic Customer Success & AI Automation Professional with over 7 years of experience across SaaS and technology platforms. I bridge the gap between technical solutions and customer needs by building intelligent workflows and automated pipelines that drive real business impact.
            </p>
            <a href="#contact" className="btn-primary" style={{textDecoration: 'none'}}>Get In Touch</a>
          </section>

          <section className="featured-projects">
            <h2 className="section-title">Coming Soon: Projects Showcase</h2>
            <div className="areas-grid">
              <div className="project-card">
                <h3 className="project-title">AI Customer Support Model</h3>
                <p className="project-desc">A deep-learning autonomous support model built natively with Antigravity. (In Development)</p>
              </div>
              <div className="project-card">
                <h3 className="project-title">n8n Dynamic Workflows</h3>
                <p className="project-desc">Complex backend integrations mapping multiple API protocols. (In Development)</p>
              </div>
              <div className="project-card">
                <h3 className="project-title">Make Platform Data Sync</h3>
                <p className="project-desc">A high-yield data synchronization pipeline engineered in Make.com. (In Development)</p>
              </div>
            </div>
          </section>

          <section className="projects">
            <h2 className="section-title">Areas of Expertise</h2>
            <div className="areas-grid">
              <div className="project-card">
                <h3 className="project-title">Customer Support & Operations</h3>
                <p className="project-desc">
                  Providing top-tier support across SaaS platforms, driving customer success strategies, and leveraging predictive analytics to exceed 95%+ satisfaction rates while resolving complex technical inquiries.
                </p>
              </div>
              <div className="project-card">
                <h3 className="project-title">AI Automations</h3>
                <p className="project-desc">
                  Designing intelligent workflows using Make and n8n. Expertise in Slack bot development, APIs, automated reporting dashboards, and building AI-powered chatbots for streamlined support operations.
                </p>
              </div>
              <div className="project-card">
                <h3 className="project-title">Web Design</h3>
                <p className="project-desc">
                  Combining strong technical aptitude with modern web design principles to build immersive, responsive, and data-driven web experiences that align with organizational objectives.
                </p>
              </div>
            </div>
          </section>

          <section className="certifications">
            <h2 className="section-title">Certifications</h2>
            <div className="areas-grid">
              <div className="project-card">
                <h3 className="project-title">AI Automation Architect</h3>
                <p className="project-desc">Advanced workflow automation with Make and n8n.</p>
              </div>
              <div className="project-card">
                <h3 className="project-title">Advanced CRM Administration</h3>
                <p className="project-desc">Specialized in configuring and scaling complex customer support pipelines.</p>
              </div>
            </div>
          </section>


        </main>

        <section className="recommendations" style={{ padding: '6rem 2rem', borderTop: '1px solid var(--glass-border)', background: 'rgba(5, 5, 5, 0.4)' }}>
          <h2 className="section-title" style={{ textAlign: 'center', marginTop: '0' }}>Recommendations</h2>
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
              <SplineScene scene="https://prod.spline.design/AcBN9ShBZkutlYBz/scene.splinecode" />
            </div>
          </div>
        </footer>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export default App;
