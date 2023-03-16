import React from "react";
import "./home.css"
import "../../index.css"

function Home() {
  return (
    <div id="home">
      <div id="image-container">
        <img src={process.env.PUBLIC_URL + "/assets/profile-pic.jpg"} alt="profile" className="profile-pic"/>
      </div>
      <div className="aboutText">
      <h2>About Me</h2>
      <p>
        I'm coming to the end of a finished a 16-week Front-end web development
         bootcamp with EdX. I learned the fundamental languages: HTML, CSS, and 
        JavaScript, as well as how to use APIs, libraries, including bootstrap 
        and jQuery, and the basics of React. 

        In my free time I like to study Korean, create ink and pencil illustrations, 
        and spend time with my cat. I've also enjoy making pet projects with code. I made 
        an {<a target="_blank" rel="noreferrer" href="https://daisyeverard.github.io/Skittles-Scores/">app for the local skittles team</a>} to track their scores, and am working on
         an app to turn a form with numerical data into sets of graphs. 
       </p>
      </div>
       <div className="thinkingAhead">
        <h2>Thinking Ahead</h2>
        <p>One of the most exciting things in modern tech world is the
         use of AI and machine learning with regards to language. I have an in interest in languages,
          and particularly in different scripts. 
         There are symbolic systems that could be simple like phonetic alphabets, or very complex
        like Kanji. Kanji is Japanese system of writing where every symbol has a semantic meaning.
          Each meaning can be interpreted and pronounced in a different way depending on context.
       The symbols can also be combined to make more complex characters which have meanings
          that are often totally detached from the component symbols. This is only one example
         of the problems that makes languages a huge challenge for machines to understand. 
        Deep learning algorithms based on the workings of a human brain are now used to interpret
         languages in fascinatingly different ways to more conventional methods. Before this change, 
       translation would work by taking small parts of sentences and translating them independently 
        then sticking the pieces back together. You can imagine how, especially with semantic and highly
       contextual languages like Japanese or Chinese, this could lead to eating ‘Rude and Unreasonable
        Chicken’ instead of ‘Jerk Chicken’.  Using deep learning, whole sentences at a time are translated.
       This makes it much more likely you will get a context appropriate translation that reflects the authors intentions. 
       I would be fascinated to find out how we could teach tech to pick up on the connotations of a sentence that 
        native speakers understand implicitly, but a computer would often interpret as exactly the same meaning. 
</p>
       </div>
      
    </div>
  );
}

export default Home;