import "./about.css"
import about from "../../assets/about.jpg"

function About() {
  return (
    <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={about} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the readable content.
        </p>
        <p className="a-desc">
          With hands-on internship experience in React and frontend development, I specialize in building clean and efficient user interfaces. I love solving problems through code and am always looking to enhance my skills with real-world projects.
        </p>
      </div>
    </div>
  )
}

export default About
