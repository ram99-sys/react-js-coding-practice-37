import './index.css'

import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="app-container">
      <div className="faqs-container">
        <h1 className="heading">FAQs</h1>
        <ul className="faqs-list-container">
          {faqsList.map(eachFaq => (
            <FaqItem faqDetails={eachFaq} key={eachFaq.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
