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
    <div style={styles.wholeDiv}>
      <h4>The best way to contact me is at</h4>
      <h1>msdeverard@gmail.com</h1>
      <h4>You can also find me at</h4>
      <div className='leaf-container'>
      <div className="gitHub" style={styles.github}>
        <i className='ri-github-fill'></i>
      </div>
      <div className="linkedIn" style={styles.lilnkedin}>
        <i className='ri-linkedin-box-fill'></i>
      </div>
      </div>
    </div>
  );
}

export default Contact;
