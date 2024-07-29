import React from 'react'
import styled from "styled-components";

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
    width: ${(img) => (Width ? Width : "auto")};
    height: ${(img) => (Height ? Height : "auto")};
    border: ${(img) => (Border ? Border : "none")};
    border-radius: ${(img) => (Radius ? Radius : "0")};
    margin: ${(img) => (Margin ? Margin : "0")};
    padding: ${(img) => (Padding ? Padding : "0")};
    `;

  return (
    
        <Image src={Src}  alt='image' />
  )
}
