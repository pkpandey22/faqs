// Write your code here.
import './index.css'

import FaqItem from '../FaqItem'

const Faqs = props => {
  // eslint-disable-next-line
  const {faqsList} = props

  return (
    <div className="app-container">
      <div className="faqs-container">
        <h1 className="heading">FAQS</h1>

        <ul className="faqs-list">
          {faqsList.map(each => (
            <FaqItem key={each.id} faqDetails={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs