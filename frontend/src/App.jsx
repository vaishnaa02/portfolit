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

          <h2>B.E Electronics and Instrumentation Engineering</h2>

          <p>
            Electronics and Instrumentation Engineering student passionate
            about Full Stack Development, IoT Systems, Artificial Intelligence,
            and MERN Stack Development. I enjoy building innovative projects
            that solve real-world problems and create meaningful impact.
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
          Instrumentation Engineering. I am interested in Full Stack
          Development, Embedded Systems, IoT, Artificial Intelligence,
          and modern web technologies. I continuously enhance my
          technical skills through hands-on projects and practical
          learning experiences.
        </p>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h2 className="title">Skills</h2>

        <div className="skills">
          <div className="card">Python</div>
          <div className="card">C Programming</div>
          <div className="card">Java</div>
          <div className="card">HTML5</div>
          <div className="card">CSS3</div>
          <div className="card">JavaScript</div>
          <div className="card">React.js</div>
          <div className="card">Node.js</div>
          <div className="card">Express.js</div>
          <div className="card">MongoDB Atlas</div>
          <div className="card">MERN Stack</div>
          <div className="card">REST API</div>
          <div className="card">Git & GitHub</div>
          <div className="card">IoT</div>
          <div className="card">ESP32</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <h2 className="title">Projects</h2>

        <div className="projects">

          {/* Project 1 */}
          <div className="project-card">
            <h3>
              Intelligent Solar Energy Monitoring System and Fault Detection
            </h3>

            <p>
              Developed an IoT-based solar energy monitoring system using
              ESP32, sensors, and intelligent fault detection techniques.
              The system monitors solar panel performance and helps improve
              efficiency through real-time monitoring and analysis.
            </p>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h3>Attendance Management System</h3>

            <p>
              Developed a Full Stack Attendance Management System using
              React.js, Node.js, Express.js, MongoDB Atlas, HTML, CSS,
              and JavaScript. The application allows users to mark daily
              attendance, automatically stores attendance records in
              MongoDB Atlas, displays present and absent counts, and
              provides attendance reset functionality through a responsive
              user interface.
            </p>

            <p>
              <strong>Technologies:</strong> React.js, Node.js,
              Express.js, MongoDB Atlas, HTML, CSS, JavaScript
            </p>

            <a
              href="https://attendance-system-1-frontend-dgzu.onrender.com/"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              🔗 View Live Project
            </a>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <h3>Gas Leakage Detection System</h3>

            <p>
              Designed an IoT-based gas leakage detection system using
              gas sensors and microcontrollers to provide real-time
              alerts and improve safety in homes and industries.
            </p>
          </div>

        </div>
      </section>

      {/* EDUCATION */}
      <section className="section">
        <h2 className="title">Education</h2>

        <div className="education">
          <h3>B.E Electronics and Instrumentation Engineering</h3>

          <p>
            Pursuing Bachelor's Degree in Electronics and Instrumentation
            Engineering with strong interest in Software Development,
            IoT, and Artificial Intelligence.
          </p>

          <h3>Location</h3>
          <p>Perundurai, Erode, Tamil Nadu, India</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <h2 className="title">Contact Me</h2>

        <div className="contact">
          <p>📧 Email: vaishnaa0207@gmail.com</p>
          <p>📱 Phone: +91 9944091019</p>
          <p>📍 Perundurai, Erode, Tamil Nadu, India</p>

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