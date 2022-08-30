// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isClicked: false,
  }

  onButtonClicked = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  buttonText = () => {
    const {isClicked} = this.state

    if (isClicked) {
      return {
        containerName: 'container',
        text: 'Dark Mode',
        headingName: 'light-heading',
      }
    }
    return {
      containerName: 'light-container',
      text: 'Light Mode',
      headingName: 'heading',
    }
  }

  render() {
    const {text, containerName, headingName} = this.buttonText()

    return (
      <div className="bg-container">
        <div className={containerName}>
          <h1 className={headingName}>Click To Change Mode</h1>
          <div className="button-container">
            <button
              type="button"
              className="button"
              onClick={this.onButtonClicked}
            >
              {text}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
