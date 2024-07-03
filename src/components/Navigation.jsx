import { Link } from "react-router-dom";
import { AgeOfEmpires } from "./AgeOfEmpires";
import { Assassins } from "./Assassins";
import { Halo } from "./Halo";
import { Humankind } from "./Humankind";
import { JurassicWorld } from "./JurassicWorld";

export const Navigation = () => {
  return (
    <div className="container mt-4 father">
      <Link to="/ageofempires" className="links">
        <figure className="image-size">
          <AgeOfEmpires />
          <figcaption>AgeOfEmpires</figcaption>
        </figure>
      </Link>
      <Link to="/assassins" className="links">
        <figure className="image-size">
          <Assassins />
          <figcaption>Assassins</figcaption>
        </figure>
      </Link>
      <Link to="/halo" className="links">
        <figure className="image-size">
          <Halo />
          <figcaption>Halo</figcaption>
        </figure>
      </Link>
      <Link to="/humankind" className="links">
        <figure className="image-size">
          <Humankind />
          <figcaption>Humankind</figcaption>
        </figure>
      </Link>
      <Link to="/jurassicworld" className="links">
        <figure className="image-size">
          <JurassicWorld />
          <figcaption>JurassicWorld</figcaption>
        </figure>
      </Link>
    </div>
  )
}
