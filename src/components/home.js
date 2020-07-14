import React from 'react';

class Home extends React.Component {
  renderAnimationText() {
    let letters = "WELCOME".split("");
    const listSpans = letters.map((letter, i) => {
      let delay = 0.3 + Math.abs(i - 3) * 0.1;
      // const divStyle = {
      //   animationDelay: `${delay}s`,
      // };
      return <span key={i} style={{animationDelay: `${delay}s`}}>{letter}</span>;
    })
    return (
      <div className="animationText">
        {listSpans}
      </div>
    );
  }

  render() {
    return (
      <div id="homeCover">
        {this.renderAnimationText()}
      </div>
    );
  }
}

export default Home;