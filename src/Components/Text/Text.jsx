import React from 'react'
import styled from "styled-components";

/***
 * @author Muslim
 * @param {String} Width - width of the P tag
 * @param {String} Height - height of the P tag
 * @param {String} Border - border of the P tag
 *  @param {String} Radius - radius of the P tag
 * @param {String} Margin - margin of the P tag
 * @param {String} Padding - padding of the P tag
 * @param {String} FontSize - fontsize of the P tag
 * @param {String} TextTransform - Transformation of the P tag
 */



export default function Text({text, Width, Height, Border, Radius, Margin, Padding, FontSize,LineHeight, TextTransform, Color, FontWeight, BgColor,cursor}) {
    const Text  = styled.p`
    width: ${(p) => (Width ? Width : "auto")};
    height: ${(p) => (Height ? Height : "auto")};
    border: ${(p) => (Border ? Border : "none")};
    border-radius: ${(p) => (Radius ? Radius : "0")};
    margin: ${(p) => (Margin ? Margin : "0")};
    padding: ${(p) => (Padding ? Padding : "0")};
    font-size: ${(p) => (FontSize ? FontSize : "2rem")};
    text-transform: ${(p) => (TextTransform ? TextTransform : "none")};
    color: ${(p) => (Color ? Color : "black")};
    font-weight: ${(p) => (FontWeight ? FontWeight : "400")};
    background-color: ${(p) => (BgColor ? BgColor : "transparent")};
    line-height: ${(p) => (LineHeight ? LineHeight : "auto")};
    cursor: ${(button) => (cursor ? cursor : "text")};


    `;

  return (
        <Text dangerouslySetInnerHTML={{ __html: text}}  />
  )
}
