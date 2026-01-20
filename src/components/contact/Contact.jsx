import "./contact.css"
import Phone from "../../assets/phone.png"
import Gmail from "../../assets/gmail.png"
import Address from "../../assets/address.png"
import { useRef } from "react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
function Contact() {

  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm('service_7wfhboq', 'template_6xlebod', formRef.current, {
        publicKey: 'SM5K0CR9_winJDkOi',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
            <h1 className="c-title">Let's discuss your project</h1>
            <div className="c-info">
                <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +977 9845004743
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Gmail} alt="" />
              poudelavayaraj123@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Nawakiran Tole, Kalika-03, Chitwan, Nepal
            </div>
        </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Have a question or an idea?</b> I’m just a message away. Always open to interesting projects, collaborations, or tech talks. Let’s make something amazing together.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
