import "./ErrorPage.css"
import {Link} from "react-router-dom"

function ErrorPage({networkError, resetError, errorMessage}) {
  return (
      <div className="serverError">
         <p className="error-message">{errorMessage ? errorMessage : `Oh no! ${networkError}. Please try again.`}</p>
          <Link to={"/"} onClick={() => {resetError()}} className="home-link">
              <button className="return-button">Return Home</button>
          </Link>
      </div>
  )
}
export default ErrorPage