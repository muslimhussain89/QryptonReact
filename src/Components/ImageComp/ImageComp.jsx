import styled from "styled-components";
import PropTypes from 'prop-types';

/***
 * @author Muslim
 * @param {String} Src - path of the image
 * @param {String} Width - width of the images
 * @param {String} Height - height of the images
 * @param {String} Border - path of the image
 * @param {String} Radius - width of the images
 * @param {String} Margin - height of the images
 * @param {String} Padding - height of the images

 */



export default function ImageComp({Src, Width, Height, Border, Radius, Margin, Padding}) {
    const Image  = styled.img`
    width: ${(Width ? Width : "auto")};
    height: ${(Height ? Height : "auto")};
    border: ${(Border ? Border : "none")};
    border-radius: ${(Radius ? Radius : "0")};
    margin: ${(Margin ? Margin : "0")};
    padding: ${(Padding ? Padding : "0")};
    `;

  return (
    
        <Image src={Src}  alt='image' />
  )
}


// Define prop types
ImageComp.propTypes = {
  Height: PropTypes.string,
  Src: PropTypes.string,
  Border: PropTypes.string,
  Margin: PropTypes.string,
  Padding: PropTypes.string,
  Radius: PropTypes.string,
  Width: PropTypes.string,
};