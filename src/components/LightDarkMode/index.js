// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'Light Mode', detectMode: 'Light', heading: 'darkHeading'}

  changeMode = () => {
    this.setState(prevState => {
      if (prevState.mode === 'Light Mode' && prevState.detectMode === 'Light') {
        return {mode: 'Dark Mode', detectMode: 'Dark', heading: 'lightHeading'}
      }
      return {mode: 'Light Mode', detectMode: 'Light', heading: 'darkHeading'}
    })
  }

  render() {
    const {mode} = this.state
    const {detectMode} = this.state
    const {heading} = this.state
    return (
      <div className="container">
        <div className={`${detectMode} container2`}>
          <h1 className={heading}>Click to change the mode</h1>
          <button type="button" onClick={this.changeMode}>
            {mode}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
