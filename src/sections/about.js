import React from 'react';
import SectionTemplate from '../components/sectionTemplate';

class About extends React.Component {
  renderLeftSection() {
    return (
      <div id ="profile">
        <img src="/img/Avatar.jpg" alt="Avatar"></img>
        <h2>Yubai/Robert Liu</h2>
        <h3>iOS Developer</h3>
      </div>
    );
  }

  renderightSection() {
    return (
      <div id="profileText">
        <h1>About</h1>
        <div>
          I'm Yubai an passionate iOS Developer of hands-on experience delivering cutting-edge iOS solutions across the
          corporate financial sector. Proven track record in enhancing user experience and app functionality with a focus on
          automated testing and implementing data monitoring. Committed to innovative and scalable solutions and pioneering
          next-generation mobile applications through agile, collaborative teamwork across the software development life cycle.
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