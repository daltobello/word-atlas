import "./ThesaurusDetails.css"
import PropTypes from "prop-types"
import { useTheme } from "../../contexts/ThemeContext";

function ThesaurusDetails({detail, rIndex, selectedWord}) {
  const { isDarkMode } = useTheme();
  
  let cardClass = ""
  if(rIndex === 0) {
    cardClass = "primary-thes-bg"
  } else if(rIndex === 1) {
    cardClass = "secondary-thes-bg"
  } else if(rIndex === 2) {
    cardClass = "tertiary-thes-bg"
  }

  return (
    <div  className={`thes-detail-cards ${cardClass} ${isDarkMode ? "dark" : "light"}`}>
      <div >
        <div className="thes-word">{selectedWord}</div>
      </div>
      <p className="dark:text-white syns-and-ants">{detail}</p>
    </div>
  )
}

ThesaurusDetails.propTypes = {
detail: PropTypes.string.isRequired,
rIndex: PropTypes.number.isRequired
}

export default ThesaurusDetails