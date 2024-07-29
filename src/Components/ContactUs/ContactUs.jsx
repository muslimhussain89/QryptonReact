import React, { useEffect, useRef, useState } from "react";
import "./ContactUs.css";
import { RotatingLines } from "react-loader-spinner";
import MyButton from "../Button/Button";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const bodyRef = useRef(document.body);

  // CODE FOR PAGE SLIDE ANIMATION
  useEffect(() => {
    // Add the "show" class after the component mounts to trigger the slide-in effect
    setIsVisible(true);

    // Remove the overflow-x: hidden when the animation completes
    return () => {
      bodyRef.current.style.overflowX = "auto";
    };
  }, []);

  useEffect(() => {
    // Hide the scrollbar on the x-axis when the slide-in animation is active
    if (isVisible) {
      bodyRef.current.style.overflowX = "hidden";
    }
  }, [isVisible]);
  // CODE FOR PAGE SLIDE ANIMATION END

  function ContactForm() {
    const [formData, setFormData] = useState({});

    function validEmail(email) {
      var re =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return re.test(email);
    }

    function validateHuman(honeypot) {
      if (honeypot) {
        console.log("Robot Detected!");
        return true;
      } else {
        console.log("Welcome Human!");
      }
    }

    function getFormData(form) {
      var elements = form.elements;

      var fields = Object.keys(elements)
        .filter(function (k) {
          return elements[k].name !== "honeypot";
        })
        .map(function (k) {
          if (elements[k].name !== undefined) {
            return elements[k].name;
          } else if (elements[k].length > 0) {
            return elements[k].item(0).name;
          }
        })
        .filter(function (item, pos, self) {
          return self.indexOf(item) == pos && item;
        });

      var formData = {};
      fields.forEach(function (name) {
        var element = elements[name];
        formData[name] = element.value;
        if (element.length) {
          var data = [];
          for (var i = 0; i < element.length; i++) {
            var item = element.item(i);
            if (item.checked || item.selected) {
              data.push(item.value);
            }
          }
          formData[name] = data.join(", ");
        }
      });

      // add form-specific values into the data
      formData.formDataNameOrder = JSON.stringify(fields);
      formData.formGoogleSheetName = form.dataset.sheet || "Sheet1"; // default sheet name
      formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

      console.log(formData);
      return formData;
    }

    function handleFormSubmit(event) {
      event.preventDefault();
      const form = event.target;
      const data = getFormData(form);

      if (data.email && !validEmail(data.email)) {
        var invalidEmail = form.querySelector(".email-invalid");
        if (invalidEmail) {
          invalidEmail.style.display = "block";
          return false;
        }
      } else {
        // disableAllButtons(form);
        setLoading(true); // Show loading animation
        var url = form.action;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded"
        );
        xhr.onreadystatechange = function () {
          // console.log(xhr.status, xhr.statusText);
          // console.log(xhr.responseText);
          if (xhr.readyState === 4) {
            // Check if the request is complete
            if (xhr.status === 200) {
              setSuccess(true); // Form sent successfully
              setLoading(false); // Hide loading animation
            } else {
              // Handle any error here
              setLoading(false); // Hide loading animation
            }
          }
        };
        var encoded = Object.keys(data)
          .map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
          })
          .join("&");
        xhr.send(encoded);
      }
    }

    function disableAllButtons(form) {
      var buttons = form.querySelectorAll("button");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }

    return (
      <form
        className="gform pure-form pure-form-stacked"
        onSubmit={handleFormSubmit}
        data-email="muslimhussain89@gmail.com"
        action="https://script.google.com/macros/s/AKfycbygt4qKkhWf6FTwVvslT0qvk2MMRG22U9anRJ4J3-u9S6puCSbwJRDsGk9VRztShqdR/exec"
      >
        <input type="text" name="Name" placeholder="Name" required />
        <input type="email" name="Email" placeholder="Email" required />
        <input type="number" name="Mobile" placeholder="Phone Number" required  />
        <textarea
          name="Message"
          cols="10"
          rows="1"
          placeholder="What would you like to discuss.?"
          required
        ></textarea>
        {loading ? (
          <div className="loading-animation">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="76"
              visible={true}
            />
          </div>
        ) : success ? (
          <div className="thankyou_message">
            <h1>Thanks for contacting us!</h1>
            <div className="close-btn">
              <button onClick={() => window.location.reload()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <button className="submit press-effect">send</button>
        )}
      </form>
    );
  }

  return (
        <div className="contactForm">
          <div className="KatanaContactLogo">
            <MyButton
              Src={"./Images/Qrypton-logo.png"}
              RouteLink={"/"}
              ImgWidth={"100%"}
              Width={"15%"}   
              Margin={"0px 0px 5rem 0px"}         
              />
          </div>
          <ContactForm />
        </div>
  );
}
