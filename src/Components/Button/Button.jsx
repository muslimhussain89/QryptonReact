import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from 'prop-types';

/**
 * @author Muslim Hussain
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
    color: ${Color ? Color : "black"};
    background: ${ (BGcolor ? BGcolor : "transparent")};
    font-size: ${ (FontSize ? FontSize : "2rem")};
    font-weight: ${ (FontWeight ? FontWeight : "300")};
    font-family: ${FontFamily ? FontFamily : "'Titillium Web', sans-serif"};
    border: ${ (Border ? Border : "none")};
    padding: ${ (Padding ? Padding : "0")};
    margin: ${ (Margin ? Margin : "0")};
    border-radius: ${ (Radius ? Radius : "0")};
    width: ${ (Width ? Width : "auto")};
    text-transform: ${ (TextTransform ? TextTransform : "auto")};
    white-space: ${ (WhiteSpace ? WhiteSpace : "nowrap")};
    cursor: ${ (cursor ? cursor : "pointer")};
  `;
  const DashedButtonImage = styled.img`
    margin: ${(BtnImgMargn ? BtnImgMargn : "auto")};
    width: ${(ImgWidth ? ImgWidth : "auto")};
    height: ${(ImgHeight ? ImgHeight : "auto")};
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



// Define prop types
MyButton.propTypes = {
  text: PropTypes.string,
  Color: PropTypes.string,
  BGcolor: PropTypes.string,
  FontSize: PropTypes.string,
  FontWeight: PropTypes.string,
  FontFamily: PropTypes.string,
  handleClick: PropTypes.func,
  RouteLink: PropTypes.string,
  Src: PropTypes.string,
  Border: PropTypes.string,
  Margin: PropTypes.string,
  Padding: PropTypes.string,
  Radius: PropTypes.string,
  ImgWidth: PropTypes.string,
  ImgHeight: PropTypes.string,
  BtnImgMargn: PropTypes.string,
  Width: PropTypes.string,
  TextTransform: PropTypes.string,
  WhiteSpace: PropTypes.string,
  cursor: PropTypes.string,
  target: PropTypes.string,
};