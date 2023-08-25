import React from "react";
import "../css/MainPage.css";
import { Link } from "react-router-dom";

const fixedName = "Diksha";
const nameArray = fixedName.split("");
const colors = [
  "#4285F4",
  "#DB4437",
  "#F4B400",
  "#4285F4",
  "#0F9D58",
  "#DB4437",
];

function MainPage() {
  return (
    <section id="home">
      <div className="nav">
        <div className="navbar-icons">
          <a
            className="gmail"
            aria-label="Gmail (opens a new tab)"
            data-pid="23"
            href="https://mail.google.com/mail/?authuser=0&amp;ogbl"
            target="_top"
          >
            Gmail
          </a>
          <a
            className="images"
            aria-label="Search for Images (opens a new tab)"
            data-pid="2"
            href="https://www.google.com/imghp?hl=en&amp;authuser=0&amp;ogbl"
            target="_top"
          >
            Images
          </a>
          <a
            className="dropdown-icon"
            aria-label="Google apps"
            href="https://www.google.co.in/intl/en/about/products"
            aria-expanded="false"
            role="button"
            tabindex="0"
          >
            <svg className="drop" focusable="false" viewBox="0 0 24 24">
              <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
            </svg>
          </a>
          <a
            className="account"
            aria-label="Google Account: Diksha Makkar  
(makkardiksha02@gmail.com)"
            href="https://accounts.google.com/SignOutOptions?hl=en&amp;continue=https://www.google.com/%3Fsa%3DX%26ved%3D0ahUKEwjz3_SissWAAxXwR2wGHXATAMsQOwgC&amp;ec=GBRAmgQ"
            role="button"
            tabindex="0"
          >
            <img
              className="account-img"
              src="https://lh3.googleusercontent.com/ogw/AGvuzYZVPgtqLixyrFqsn-mJgqPM_kcH5j0tWe_sjETY=s32-c-mo"
              srcset="https://lh3.googleusercontent.com/ogw/AGvuzYZVPgtqLixyrFqsn-mJgqPM_kcH5j0tWe_sjETY=s32-c-mo 1x, https://lh3.googleusercontent.com/ogw/AGvuzYZVPgtqLixyrFqsn-mJgqPM_kcH5j0tWe_sjETY=s64-c-mo 2x "
              alt=""
              aria-hidden="true"
              data-noaft=""
              data-iml="1691247331478"
              data-atf="1"
              data-frt="0"
            />
          </a>
        </div>
      </div>
      <div className="intro" center>
        {nameArray.map((character, index) => (
          <span key={index} style={{ color: colors[index] }}>
            {character}
          </span>
        ))}
      </div>
      <div className="mainapp">
        <form className="d-flex" role="search">
          <div className="search-box">
            <span className="search-icon">
              <svg
                focusable="false"
                // xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
            </span>
            <input
              className="form-control me-2"
              type="search"
              //   placeholder="Search"
              aria-label="Search"
            />
            <div className="search-options">
              <div
                jscontroller="unV4T"
                jsname="F7uqIe"
                className="search-voice"
                aria-label="Search by voice"
                role="button"
                tabindex="0"
                jsaction="h5M12e;rcuQ6b:npT2md"
                data-ved="0ahUKEwilkezOvcWAAxViUWwGHa9OB1QQvs8DCAY"
              >
                <svg
                  className="goxjub"
                  focusable="false"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#4285f4"
                    d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                  ></path>
                  <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                  <path
                    fill="#fbbc05"
                    d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                  ></path>
                </svg>
              </div>
              <div
                jscontroller="lpsUAf"
                jsname="R5mgy"
                className="search-image"
                data-base-lens-url="https://lens.google.com"
                data-checkerboard-transparent-images-background-enabled="false"
                data-convert-transparent-images="true"
                data-downscaling-enabled="true"
                data-downscaling-max-longest-edge-pixels="1000"
                data-encoding-compression-ratio="0.4"
                data-image-processor-enabled="true"
                data-is-images-mode="false"
                data-is-send-dimensions-in-body-enabled="false"
                data-preferred-mime-type="image/jpeg"
                data-propagated-experiment-ids="72276982,"
                data-transparent-image-background-color="#fff"
                data-transparent-image-checkerboard-color="#fff"
                data-upload-path="/v3/upload?ssb=1&amp;cpe=1&amp;ifg204=1&amp;"
                aria-label="Search by image"
                role="button"
                tabindex="0"
                jsaction="rcuQ6b:npT2md;h5M12e"
                data-ved="0ahUKEwilkezOvcWAAxViUWwGHa9OB1QQhqEICAc"
              >
                <svg
                  className="Gdd5U"
                  focusable="false"
                  viewBox="0 0 192 192"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect fill="none" height="192" width="192"></rect>
                  <g>
                    <circle fill="#34a853" cx="144.07" cy="144" r="16"></circle>
                    <circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle>
                    <path
                      fill="#ea4335"
                      d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"
                    ></path>
                    <path
                      fill="#fbbc05"
                      d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </form>
        {/* </div> */}
        <div className="about-me">
          <input
            className="search-me"
            value="Google Search"
            aria-label="Google Search"
            name="btnK"
            tabindex="0"
            type="submit"
            data-ved="0ahUKEwjT0bjTqMaAAxVQa2wGHYlTCEwQ4dUDCBE"
          />
          <a
            className="play"
            href="https://dikshamakkar.github.io/2048_Game/"
            target="blank"
          >
            I'm Feeling Lucky
          </a>
        </div>
      </div>
      <div className="lang-conv">
        <div id="lang">
          <div id="offered-in">
            Google offered in: <a href="/NotFound">हिन्दी</a>{" "}
            <a href="/NotFound">বাংলা</a> <a href="/NotFound">తెలుగు</a>{" "}
            <a href="/NotFound">मराठी</a> <a href="/NotFound">தமிழ்</a>{" "}
            <a href="/NotFound">ગુજરાતી</a> <a href="/NotFound">ಕನ್ನಡ</a>{" "}
            <a href="/NotFound">മലയാളം</a> <a href="/NotFound">ਪੰਜਾਬੀ</a>
          </div>
        </div>
      </div>
      <div className="page-end">
        <div className="location">India</div>
        <div
          jscontroller="NzU6V"
          className="foot"
          data-sfe="false"
          data-sfsw="1200"
          jsaction="rcuQ6b:npT2md"
        >
          <div className="foot-l">
            <Link className="foot-sub" to="/Portfolio">
              About
            </Link>
            <a
              className="foot-sub"
              href="/NotFound"
              ping="/url?sa=t&amp;rct=j&amp;source=webhp&amp;url=https://www.google.com/intl/en_in/ads/%3Fsubid%3Dww-ww-et-g-awa-a-g_hpafoot1_1!o2%26utm_source%3Dgoogle.com%26utm_medium%3Dreferral%26utm_campaign%3Dgoogle_hpafooter%26fg%3D1&amp;ved=0ahUKEwjT0bjTqMaAAxVQa2wGHYlTCEwQkdQCCB4&amp;opi=89978449"
            >
              Advertising
            </a>
            <a
              className="foot-sub"
              href="/NotFound"
              ping="/url?sa=t&amp;rct=j&amp;source=webhp&amp;url=https://www.google.com/services/%3Fsubid%3Dww-ww-et-g-awa-a-g_hpbfoot1_1!o2%26utm_source%3Dgoogle.com%26utm_medium%3Dreferral%26utm_campaign%3Dgoogle_hpbfooter%26fg%3D1&amp;ved=0ahUKEwjT0bjTqMaAAxVQa2wGHYlTCEwQktQCCB8&amp;opi=89978449"
            >
              Business
            </a>
            <a className="foot-sub" href="/NotFound">
              {" "}
              How Search works{" "}
            </a>
          </div>
          <div className="foot-r">
            <a
              className="foot-sub"
              href="/NotFound"
              ping="/url?sa=t&amp;rct=j&amp;source=webhp&amp;url=https://policies.google.com/privacy%3Fhl%3Den-IN%26fg%3D1&amp;ved=0ahUKEwjT0bjTqMaAAxVQa2wGHYlTCEwQ8awCCCA&amp;opi=89978449"
            >
              Privacy
            </a>
            <a
              className="foot-sub"
              href="/NotFound"
              ping="/url?sa=t&amp;rct=j&amp;source=webhp&amp;url=https://policies.google.com/terms%3Fhl%3Den-IN%26fg%3D1&amp;ved=0ahUKEwjT0bjTqMaAAxVQa2wGHYlTCEwQ8qwCCCE&amp;opi=89978449"
            >
              Terms
            </a>
            <span>
              <span
                jscontroller="nabPbb"
                data-ffp="false"
                jsaction="KyPa0e:Y0y4c;BVfjhf:VFzweb;wjOG7e:gDkf4c;"
              >
                <g-popup
                  jsname="V68bde"
                  jscontroller="DPreE"
                  jsaction="A05xBd:IYtByb;EOZ57e:WFrRFb;"
                  jsdata="mVjAjf;_;AQ5h+U"
                >
                  <div
                    jsname="oYxtQd"
                    className="CcNe6e"
                    aria-expanded="false"
                    aria-haspopup="true"
                    role="button"
                    tabindex="0"
                    jsaction="WFrRFb;keydown:uYT2Vb"
                  >
                    <div
                      jsname="LgbsSe"
                      className="ayzqOc foot-sub"
                      aria-controls="_oqvOZNP4FdDWseMPiaeh4AQ_1"
                      aria-haspopup="true"
                    >
                      Settings
                    </div>
                  </div>
                </g-popup>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
