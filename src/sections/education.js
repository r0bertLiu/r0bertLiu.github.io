import React from 'react';
import SectionTemplate from '../components/sectionTemplate';

class Education extends React.Component {
  renderLeftSection() {
    return <h1>Education</h1>;
  }

  renderightSection() {
    return (
      <ul>
        <li>
          <h2>University of New South Wales</h2>
          <h3>Master of Information Technology, major in Artificial Intelligence</h3>
          <h3>2018 - 2020</h3>
        </li>
        <li>
          <h2>University of New South Wales</h2>
          <h3>Graduate certificate of Design, focus on Interactive Design</h3>
          <h3>2017 - 2017</h3>
        </li>
        <li>
          <h2>North China University of Technology</h2>
          <h3>Master of Engineering, major in Digital Media</h3>
          <h3>2012 - 2017</h3>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <SectionTemplate leftsection={this.renderLeftSection()} rightsection={this.renderightSection()} />
    );
  }
}

export default Education;