import {Component} from 'react'

import './index.css'

const PLUS_ICON =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

const MINUS_ICON =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {activeFaq: false}

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {activeFaq} = this.state
    if (activeFaq) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onClickPlusButton = () => {
    this.setState(prevState => ({activeFaq: !prevState.activeFaq}))
  }

  renderActiveImage = () => {
    const {activeFaq} = this.state
    const displayImage = activeFaq ? MINUS_ICON : PLUS_ICON
    const displayText = activeFaq ? 'minus' : 'plus'

    return (
      <button type="button" className="button" onClick={this.onClickPlusButton}>
        <img src={displayImage} alt={displayText} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="faqs-list-item">
        <div className="question-container">
          <h1 className="question-text">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
