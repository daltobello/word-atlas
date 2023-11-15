import "./ErrorPage.css"
import {Link, useNavigate} from "react-router-dom"
import PropTypes from 'prop-types';


function ErrorPage({networkError, resetError, errorMessage, setSelectedWord}) {

  const navigate = useNavigate()

  const handleError = () => {
    if(!resetError && !setSelectedWord) {
      navigate(-1)
    } else {
      resetError()
      setSelectedWord()
    }
  }

  return (
      <div className="serverError">
         <p className="error-message">{errorMessage ? errorMessage : `Oh no! ${networkError}. Please try again.`}</p>
          <Link to={"/"} onClick={() => {handleError()}} className="home-link">
              <button className="return-button">Reset</button>
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