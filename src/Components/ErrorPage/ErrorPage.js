import "./ErrorPage.css"
import {Link} from "react-router-dom"

function ErrorPage({networkError, resetError}) {
  return (
      <div className="serverError">
          <p>Oh no! {networkError}. Please try again.</p> 
          <Link to={"/"} onClick={() => {resetError()}} className="home-link">
              <button className="return-button">Return Home</button>
          </Link>
      </div>
  )
}
export default ErrorPage