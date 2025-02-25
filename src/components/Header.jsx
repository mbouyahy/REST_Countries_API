import "../App.css";
import { FaEarthAfrica } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const NavigateToHome = () => {
    navigate("/");
  };
  return (
    <>
      <header className="Header">
        <ul className="Header-links">
          <li className="Header-title">
            <button
              className="Header-Btn"
              onClick={() => {
                NavigateToHome();
              }}
            >
              <FaEarthAfrica className="Header-moon-Symbol" /> World Countries{" "}
            </button>
          </li>
          <li className="Header-mode">
            <button className="Header-Btn">Where in the world ?</button>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
