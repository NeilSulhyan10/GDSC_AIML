import Logo from "./assets/logo.png";

export default function Footer(){
    return(
        <div className="footer-container py-3 md:py-12 flex justify-start flex-wrap items-center bg-black">
        <div className="GDSC-details px-5 flex flex-col space-y-3">
          <a className="GDSC-logo" href="/">
            <img
              alt="GDSC"
              src={Logo}
              decoding="async"
              data-nimg="1"
              className="w-[40%] object-cover"
              loading="lazy"
              style={{ color: "transparent" }}
            />
          </a>
          <div className="GDSC-Powered-by font-bold text-lg text-white">
            GDSC-WCE powered by Google Developer Student Club
          </div>
          <a
            target="_blank"
            className="WCE-address text-white"
            href="https://www.google.com/maps/place/Walchand+College+of+Engineering/@16.8457387,74.5992688,17z/data=!3m1!4b1!4m5!3m4!1s0x3bc1237f52c65db5:0xa3535676176ded0a!8m2!3d16.8457387!4d74.6014575"
          >
            <span className="capitalize line-1">
              Walchand College of Engineering,
            </span>
            <br />
            <span className="capitalize line-2">
              Sangli, Maharashtra, 416416
            </span>
            <br />
            <span className="capitalize line-3">India.</span>
            <br />
          </a>
          <div className="social-links flex space-x-3">
            <a target="_blank" href="https://www.instagram.com/gdsc_wce/?hl=en">
              <i className="fab fa-instagram text-red-600 text-3xl" />
            </a>
            <a target="_blank" href="/#">
              <i className="fab fa-twitter text-blue-400 text-3xl" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCrwdrer13mWACqFNR8y6vgA"
            >
              <i className="fab fa-youtube text-red-600 text-3xl" />
            </a>
            <a target="_blank" href="https://github.com/gdscwce">
              <i className="fab fa-github text-white text-3xl" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/gdsc-wce/mycompany/"
            >
              <i className="fab fa-linkedin text-blue-800 text-3xl" />
            </a>
          </div>
        </div>
      </div>
    )
}