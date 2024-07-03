import jurassicworld from "../assets/img/jurassicworld.jpg"
import PropTypes from 'prop-types';

export const JurassicWorld = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={jurassicworld} alt="Jurassic World" className="image"/>
    </div>
  )
}

JurassicWorld.propTypes = {
  className: PropTypes.string
};

