import ageofempires from "../assets/img/ageofempires.jpg";
import PropTypes from 'prop-types';

export const AgeOfEmpires = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={ageofempires} alt="Age Of Empires" className="image" />
    </div>
  )
}

AgeOfEmpires.propTypes = {
  className: PropTypes.string
};



