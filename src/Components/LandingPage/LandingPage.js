import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  const handleWordAtlasClick = () => {
    navigate("/dictionary");
  };

  return (
    <div className="landing-page-container">
      <h2 onClick={handleWordAtlasClick} style={{ cursor: "pointer" }}>
        Word Atlas
      </h2>
    </div>
  );
}

export default LandingPage;