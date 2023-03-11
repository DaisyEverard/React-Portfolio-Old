import React from 'react';
import "../../index.css"
import "./contact.css"

const styles = {
  wholeDiv: {
    backgroundColor: "var(--color-cream)",
    textAlign: "center"
  }
}

function Contact(props) {
  return (
    <div style={styles.wholeDiv} id="contact">
      <h4>Email me at</h4>
      <h1>msdeverard@gmail.com</h1>
      <h4>or find me at</h4>
      <div className='leaf-container'>
      <div className="gitHub" style={styles.github}>
        <a target="_blank" href="https://github.com/DaisyEverard">
          <i className='ri-github-fill'></i>
        </a>
      </div>
      <div className="linkedIn" style={styles.lilnkedin}>
        <a target="_blank" href="https://www.linkedin.com/in/daisy-everard/">
        <i className='ri-linkedin-box-fill'></i>
        </a>
      </div>
      </div>
    </div>
  );
}

export default Contact;
