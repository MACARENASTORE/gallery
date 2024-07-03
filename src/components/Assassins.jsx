import assassins from "../assets/img/assassins.jpg"
import PropTypes from 'prop-types';

export const Assassins = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={assassins} alt="Assassins" className="image" />
    </div>
  )
}

Assassins.propTypes = {
  className: PropTypes.string
};


