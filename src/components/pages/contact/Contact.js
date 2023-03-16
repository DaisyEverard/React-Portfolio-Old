import React from 'react';
import "../../index.css"
import "./contact.css"

const styles = {
  wholeDiv: {
    backgroundColor: "var(--color-cream)",
    textAlign: "center"
  }
}
class Contact extends React.Component {
  state = {
    name: "",
    email: "", 
    question: ""
  }

  handleChange = (event) => {
    console.log("event.target: " + event.target)
    const {name, value} = event.target; 
    console.log(`name: ${name}`)
    console.log(`value: ${value}`)
    this.setState({[name]: value})
  }
  handleSubmit = (event) => {
    event.preventDefault(); 
  }

  render() {
    return (
      <div style={styles.wholeDiv} id="contact">
        <h4>Email me at</h4>
        <h1>msdeverard@gmail.com</h1>
        <h4>or find me at</h4>
        <div className='leaf-container'>
          <div className="gitHub" style={styles.github}>
            <a target="_blank" rel="noreferrer" href="https://github.com/DaisyEverard">
              <i className='ri-github-fill'></i>
            </a>
          </div>
          <div className="linkedIn" style={styles.lilnkedin}>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/daisy-everard/">
            <i className='ri-linkedin-box-fill'></i>
            </a>
          </div>
        </div>
        {/* form is a dummy, but will render input to page */}
        <form action="" method="POST" id="contact-form">
          <label for="#name-input">Your Name:</label>
          <input type="text" name="name" placeholder='John Smith' id="name-input" onChange={this.handleChange}/>
          <label for="#email-input">Your Email:</label>
          <input type="text" name="email" placeholder='123@example.com' id="email-input" onChange={this.handleChange}/>
          <label for="#question-input">Questions and Feedback:</label>
          <textarea name="question" id="question-input" onChange={this.handleChange}/>
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
        <div class="form-results">
          <p>Name: <span>{this.state.name}</span></p>
          <p>Email: <span>{this.state.email}</span></p>
          <p>Question: <span>{this.state.question}</span></p>
        </div>
      </div>
    );
  }
}

export default Contact;
