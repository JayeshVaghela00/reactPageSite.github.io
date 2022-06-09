import "./App.css";

function ContactForm() {
  return (
      <>
        <form action="">

        <input className="input" type='text' placeholder='Enter Your Name' />
        <input className="input" type='email' placeholder='Enter Your Email' />
        <input className="input" type='text' placeholder='Enter Your subject' />
        <textarea rows="8" placeholder="Enter Your Message"/>
        <button className="red-btn" type="submit">Send Message</button>

        </form>
      </>
  )
}

export default ContactForm;
