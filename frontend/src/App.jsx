import "./App.css";

function App() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Hi, I'm <span>Vaishnaa S</span>
          </h1>

          <h2>B.E Electronics and Instrumentation</h2>

          <p>
            Electronics and Instrumentation Engineering student passionate
            about software development, IoT systems, Artificial Intelligence,
            and MERN Stack development. I enjoy building innovative projects
            that solve real-world problems.
          </p>

          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2 className="title">About Me</h2>

        <p className="text">
          I am Vaishnaa S, currently pursuing B.E Electronics and
          Instrumentation Engineering. I am interested in
          Full Stack Development, Embedded Systems, IoT, and AI-based
          technologies. I continuously improve my technical skills by
          working on projects and learning modern technologies.
        </p>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h2 className="title">Skills</h2>

        <div className="skills">
          <div className="card">Python</div>
          <div className="card">C Programming</div>
          <div className="card">Java</div>
          <div className="card">HTML</div>
          <div className="card">CSS</div>
          <div className="card">JavaScript</div>
          <div className="card">React JS</div>
          <div className="card">Node JS</div>
          <div className="card">Express JS</div>
          <div className="card">MongoDB</div>
          <div className="card">MERN Stack</div>
          <div className="card">IoT</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <h2 className="title">Projects</h2>

        <div className="projects">
          <div className="project-card">
            <h3>
              Intelligent Solar Energy Monitoring System and Fault Detection
            </h3>
            <p>
              Developed a smart monitoring system for solar panels using
              sensors, ESP32, and AI-based fault detection techniques to
              improve efficiency and maintenance.
            </p>
          </div>

          <div className="project-card">
            <h3>Attendance Management System</h3>
            <p>
              Built a web-based attendance management system using modern
              web technologies for efficient student record tracking.
            </p>
          </div>

          <div className="project-card">
            <h3>Gas Leakage Detection System</h3>
            <p>
              Designed an IoT-based gas leakage detection system using
              sensors and microcontrollers to improve safety in homes
              and industries.
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section">
        <h2 className="title">Education</h2>

        <div className="education">
          <h3>B.E Electronics and Instrumentation Engineering</h3>
          

          <h3>Location</h3>
          <p>Perundurai, Erode, Tamil Nadu</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <h2 className="title">Contact Me</h2>

        <div className="contact">
          <p>📧 vaishnaa0207@gmail.com</p>
          <p>📱 +91 9944091019</p>
          <p>📍 Perundurai, Erode, Tamil Nadu</p>

          <div className="socials">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;