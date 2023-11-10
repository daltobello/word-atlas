import "./ErrorPage.css"
import {Link} from "react-router-dom"


function ErrorPage(networkError, resetError) {
  console.log("inside ErrorPage:", networkError.message)

  const errorMessage = networkError&& networkError.message ? networkError.message : "Unknown error occurred."

  return (
      <div className="serverError">
          <p>Oh no! {errorMessage}</p> 
          <Link to={"/dictionary"} onClick={() => {resetError()}} className="home-link">
              <button className="return-button">Return Home</button>
          </Link>
      </div>
  )
}

export default ErrorPage