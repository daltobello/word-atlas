import "./ThesaurusDetails.css"

function ThesaurusDetails({detail, rIndex}) {
  let cardClass = ""
  if(rIndex === 0) {
    // card class is red
    cardClass = "red-card"
  }
  return (
    <div className={`thes-detail-cards ${cardClass}`}>
      <p className="thes-word">{detail}</p>
    </div>
  )
}

export default ThesaurusDetails