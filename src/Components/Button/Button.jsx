import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/**
 * @author Muslim Hussain
 * @param {String} text - Text of the Button
 * @param {String} BGcolor - Background color of the dashed Button, @default is "linear-gradient(92.36deg, rgb(26, 26, 26) -24.67%, rgb(23, 193, 255) 9.5%, rgb(255, 211, 28) 83.9%, rgb(18, 18, 18) 138.84%)"
 * @param {String} color - Text Color of the button
 * @param {String} FontSize - Font Size of the text.
 * @param {String} FontWeight - Font Weight of the text.
 * @param {String} FontFamily - Font Family of the text.
 * @param {String} src - Img src of the icon.
 * @function onClick "onClick fucntion "
 * @param {String} RouteLink "Route link for the button redirect"
 * @param {String} Src "Image source of the Icon"
 * @param {String} Border - Border of the button
 * @param {String} Padding - Padding of the button
 * @param {String} Radius - BorderRadius of the button
 * @param {String} ImgWidth - Width of the Icon
 * @param {String} ImgHeight - height of the Icon
 */

export default function MyButton({
  text,
  Color,
  BGcolor,
  FontSize,
  FontWeight,
  FontFamily,
  handleClick,
  RouteLink,
  Src,
  Border,
  Margin,
  Padding,
  Radius,
  ImgWidth,
  ImgHeight,
  BtnImgMargn,
  Width,
  TextTransform,
  WhiteSpace,
  cursor,
  target
}) {
  const QryptonButton = styled.button`
    color: ${(button) => (Color ? Color : "black")};
    background: ${(button) => (BGcolor ? BGcolor : "transparent")};
    font-size: ${(button) => (FontSize ? FontSize : "2rem")};
    font-weight: ${(button) => (FontWeight ? FontWeight : "300")};
    font-family: ${(button) =>FontFamily ? FontFamily : "'Titillium Web', sans-serif"};
    border: ${(button) => (Border ? Border : "none")};
    padding: ${(button) => (Padding ? Padding : "0")};
    margin: ${(button) => (Margin ? Margin : "0")};
    border-radius: ${(button) => (Radius ? Radius : "0")};
    width: ${(button) => (Width ? Width : "auto")};
    text-transform: ${(button) => (TextTransform ? TextTransform : "auto")};
    white-space: ${(button) => (WhiteSpace ? WhiteSpace : "nowrap")};
    cursor: ${(button) => (cursor ? cursor : "pointer")};
  `;
  const DashedButtonImage = styled.img`
    margin: ${(img) => (BtnImgMargn ? BtnImgMargn : "auto")};
    width: ${(img) => (ImgWidth ? ImgWidth : "auto")};
    height: ${(img) => (ImgHeight ? ImgHeight : "auto")};
  `;
  const DashedEmptyImage = styled.div`
    display: none;
  `;
  return (
    <div className="QryptonButton">
      {RouteLink ? (
        <Link to={RouteLink} target={target}>
          {Src ? (
            <QryptonButton onClick={handleClick}>
              {Src ? (
                <DashedButtonImage
                  className="QryptonButtonImage"
                  src={Src}
                  alt={Src}
                />
              ) : (
                <DashedEmptyImage></DashedEmptyImage>
              )}
              {text}
            </QryptonButton>
          ) : (
            <QryptonButton onClick={handleClick}>{text}</QryptonButton>
          )}
        </Link>
      ) : (
        <QryptonButton onClick={handleClick}>
          {Src ? (
            <DashedButtonImage
              className="BCH-Button-logo"
              src={Src}
              alt={Src}
            />
          ) : (
            <DashedEmptyImage></DashedEmptyImage>
          )}
          {<p dangerouslySetInnerHTML={{ __html: text}}  />}
        </QryptonButton>
      )}
    </div>
  );
}
