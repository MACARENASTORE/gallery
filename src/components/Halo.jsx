import halo from "../assets/img/halo.jpg";
import PropTypes from 'prop-types';

export const Halo = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={halo} alt="Halo" className="image" />
    </div>
  )
}

Halo.propTypes = {
  className: PropTypes.string
};


