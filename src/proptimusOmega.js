import React from 'react';

export default class Proptimus extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      escalate: false,
    }
  }

  render() {
    return(
      <section>
        <img
          src={this.props.image}
          className="App-logo"
          alt="logo"
          onClick={this.props.clickHandler}
        />
        <p>{this.props.catchPhrase}</p>
      </section>
    )
  }
}
