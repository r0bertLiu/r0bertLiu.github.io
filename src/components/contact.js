import React from 'react';
import SectionTemplate from './sectionTemplate';


class Contact extends React.Component {
  renderLeftSection() {
    return <h1>Contact</h1>;
  }

  renderightSection() {
    return (
      <ul className="contact-ul">
      <li >
        <i className="fa fa-phone large-icon" aria-hidden="true"></i>
        <span> +61 0422016123 </span>
      </li>
      <li >
        <i className="fa fa-envelope large-icon" aria-hidden="true"></i>
        <span> 
          <a href="mailto:RobertLiu0313@gmail.com">RobertLiu0313@gmail.com</a>
        </span>
      </li>
      <li >
        <i className="fa fa-github large-icon" aria-hidden="true"></i>
        <span> 
          <a href="https://github.com/r0bertLiu">https://github.com/r0bertLiu</a>
        </span>
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

export default Contact;