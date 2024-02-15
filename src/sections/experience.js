import React from 'react';
import SectionTemplate from '../components/sectionTemplate';
import ExperienceCollapse from '../components/experienceCollapse';
import Stack from 'react-bootstrap/Stack';

class Experience extends React.Component {
  renderLeftSection() {
    return <h1>Experience</h1>;
  }

  renderightSection() {
    const expDataBill = {
      comp: "Bill.com | Sydney",
      period: "May 2021 - Apr 2022",
      title: "SENIOR iOS DEVELOPER",
      detail: "Contributed to the development and maintenance of the Invoice2Go app for iOS, ensuring alignment with Bill.com's financial service offerings for small and midsize businesses.",
      bulletPoints: [ 
        "▪ Led the integration of features for processes to enhance the mobile user experience.", 
        "▪ Collaborated with cross-functional teams to develop features on usability and performance optimisation.",
        "▪ Implemented cutting-edge tools like DataDog for monitoring and Bitrise for CI/CD.",
        "▪ Spearheaded the adaptation of the app to iOS 17, ensuring compatibility and leveraging new platform features.",
        "▪ Continuously focused on app enhancements in response to user feedback and evolving business needs.",
        "▪ Contributed to the strategic development of mobile offerings within the Bill.com environment."
      ]
    };

    const expDataAutomic = {
      comp: "Automic Group | Sydney",
      period: "May 2021 – Apr 2022",
      title: "iOS DEVELOPER",
      detail: "Developed and refined features for a meeting material management application.",
      bulletPoints: [
        "▪ Collaborated with cross-functional teams to design and implement new product features.",
        "▪ Engaged in continuous testing, debugging, and refining to ensure robustness, usability, and reliability.",
        "▪ Implemented the architecture using an MVVM pattern and SwiftUI to enhance the user interface and experience.",
        "▪ Developed CI/CD pipeline using GoCD from the ground up, enabling automated testing, building, and deployment across different environments: development (via OTA link), beta (through TestFlight), and production."
      ]
    }

    const expDataEdQuire = {
      comp: "edQuire – FIC Technology | Sydney",
      period: "Oct 2020 – May 2021",
      title: "Junior Web/iOS DEVELOPER",
      detail: "Joined as a Junior Developer Intern, working alongside a skilled team.",
      bulletPoints: [
        "▪ Acquired iOS development experience using Swift, including functionality implementation, layout organisation, dynamic UI generation, and integrating the MVVM pattern, API communication, and push notifications.",
        "▪ Successfully implemented push notification features for the iOS app, involving backend development with AWS SNS and the serverless framework."      
      ]
    }

    return (
      <>
        <ExperienceCollapse expData={expDataBill}/>
        <ExperienceCollapse expData={expDataAutomic}/>
        <ExperienceCollapse expData={expDataEdQuire}/>
      </>
    );
  }

  render() {
    return (
      <SectionTemplate leftsection={this.renderLeftSection()} rightsection={this.renderightSection()} />
    );
  }
}

export default Experience;