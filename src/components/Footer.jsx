import logoWhite from "../assets/logo_white.png"


function Footer(){
   return(
    <div className="footer">
    <div className="footer_img_container">
        <img src={logoWhite} alt="logo" />
    </div>
    <p className="footer_text">© 2020 Kasa. All rights reserved</p>
  </div>
   )

}

export default Footer;