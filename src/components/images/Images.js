import React from 'react';
import PropTypes from 'prop-types';

const Images = ({ src, alt, className, width, height }) => {
    return (
        <img src={src} alt={alt} className={className} style={{width: width, height: height}} />
    );
}

Images.propType = {
    src : PropTypes.string.isRequired,
    alt : PropTypes.string,
    className : PropTypes.string,
    width : PropTypes.string,
    height : PropTypes.string
}

Images.defaultProps = {
    width : "auto",
    height : "auto"
}

export default Images;