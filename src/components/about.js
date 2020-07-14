import React from 'react';
import SectionTemplate from './sectionTemplate';

class About extends React.Component {
  renderLeftSection() {
    return (
      <div id ="profile">
        <img src="/img/Avatar.jpg" alt="Avatar"></img>
        <h2>Yubai Liu/Robert</h2>
        <h3>Web Developer</h3>
      </div>
    );
  }

  renderightSection() {
    return (
      <div id="profileText">
        <h1>About</h1>
        <div>
          I'm Yubai a junior developer graduated from UNSW with degree of Master of IT major 
          in Artificial Intelligence. I have achieved good average grade and High Distinction 
          grade in my final graduation project. I also interested in front-end development and 
          web design. Currently, I'm residing in Australia and have great interested in finding 
          a career in Sydney.
        </div>
      </div>
    );
  }

  render() {
    return (
      <SectionTemplate leftsection={this.renderLeftSection()} rightsection={this.renderightSection()} />
    );
  }
}

export default About;