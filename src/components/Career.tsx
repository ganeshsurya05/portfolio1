import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SSLC (10th Grade)</h4>
                <h5>Sri R.M. Jain Vidhyashram</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Completed SSLC with 68.8%. Built a strong foundation in
              mathematics and sciences that fueled my passion for technology.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary (12th Grade)</h4>
                <h5>Sri R.M. Jain Vidhyashram</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed Higher Secondary with 69.4%, deepening knowledge in
              computer science and analytical thinking.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Trainee</h4>
                <h5>QSpiders</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Learned Core Java & OOP concepts. Worked with SQL queries and
              database operations. Practiced real-time coding challenges and
              improved problem-solving and logical thinking skills.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. Computer Science Engineering</h4>
                <h5>Panimalar Engineering College, Chennai</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Pursuing B.E. CSE (2022–2026) with a CGPA of 7.4/10. Focusing on
              software development, cloud computing, and data-driven solutions.
              Actively building projects that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
