import humankind from "../assets/img/humankind.jpg";
import PropTypes from 'prop-types';

export const Humankind = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={humankind} alt="Humankind" className="image" />
    </div>
  )
}

Humankind.propTypes = {
  className: PropTypes.string
};

