import MyButton from "../Button/Button"
import "./Footer.css"
export default function Footer() {
  return (
    <div className='QryptonFooter'>
      <div className="QryptonLogo">
              <MyButton text={"Qrypton"} FontWeight={"500"} RouteLink={"/"} FontSize={"3rem"} />
            </div>
      <div className='PrivacyPolicy'>
        <p>© 2026 Qrypton Design Studio Pvt. Ltd.</p>
      </div>
    </div>
  )
}
