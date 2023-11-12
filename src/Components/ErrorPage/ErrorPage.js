import "./ErrorPage.css"
import {Link} from "react-router-dom"
import PropTypes from 'prop-types';

function ErrorPage({networkError, resetError, errorMessage, setSelectedWord}) {
  return (
      <div className="serverError">
         <p className="error-message">{errorMessage ? errorMessage : `Oh no! ${networkError}. Please try again.`}</p>
          <Link to={"/"} onClick={() => {resetError(); setSelectedWord();}} className="home-link">
              <button className="return-button">Return Home</button>
          </Link>
      </div>
  )
}
export default ErrorPage

ErrorPage.propTypes = {
    networkError: PropTypes.string,
    resetError: PropTypes.func,
    errorMessage: PropTypes.string,
    setSelectedWord: PropTypes.func
  }