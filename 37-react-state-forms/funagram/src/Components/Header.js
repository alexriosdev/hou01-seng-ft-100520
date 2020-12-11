import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

const Header = () => {
  return (
    <div className="header">
      <span> Funagram </span>
      <button>
        <FontAwesomeIcon icon={"bars"} />
      </button>
    </div>
  )
}

export default Header;
