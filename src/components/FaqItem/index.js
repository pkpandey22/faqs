// Write your code here.
import {Component} from 'react'

import './index.css'

const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  onToggleActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const image = isActive ? MINUS_IMAGE : PLUS_IMAGE
    const altText = isActive ? 'minus' : 'plus'

    return (
      <li className="faq-item">
        <div className="question-container">
          <h1>{questionText}</h1>
          <button
            type="button"
            className="button"
            onClick={this.onToggleActive}
          >
            <img src={image} alt={altText} className="image" />
          </button>
        </div>
        {isActive ? (
          <div className="answer-container">
            <hr />
            <p className="answer">{answerText}</p>
          </div>
        ) : null}
      </li>
    )
  }
}
export default FaqItem
