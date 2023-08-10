import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = () => {
  // sticky nav
  const { setTheme } = useTheme();

  const router = useRouter();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(router.pathname);
  }, [router]);

  return (
    <>
      <header className={`header1 `}>
        <div id="header-sticky" className={"sticky header-main header-main1"}>
          <div className="container header-container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-4 col-4">
                <div className="header-main-left">
                  <div className="header-logo header1-logo"></div>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10 col-md-8 col-8">
                <div className="header-main-right">
                  <div className="main-menu main-menu1 d-none d-lg-block mr-50">
                    <nav id="mobile-menu">
                      <ul>
                        <li>
                          <Link href="/"></Link>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <div className="col-xl-5 col-lg-5 col-md-5 col-5">
                    <div className="header-main-right">
                      <div className="header-btn ml-20 d-none d-xxl-inline-block">
                        <a
                          className="fill-btn"
                          href="https://github.com/XamHans/video-2-text"
                        >
                          Github
                        </a>
                      </div>
                      <div className="profile-item profile-item-header ml-20 d-none d-md-inline-block pos-rel"></div>

                      <div className="mode-switch-wrapper my_switcher setting-option home3-mode-switch ml-50">
                        <input type="checkbox" className="checkbox" id="chk" />
                        <label className="label" htmlFor="chk">
                          <i
                            className="fas fa-moon setColor dark theme__switcher-btn"
                            onClick={() => setTheme("dark")}
                          ></i>
                          <i
                            className="fas fa-sun setColor light theme__switcher-btn"
                            onClick={() => setTheme("light")}
                          ></i>
                          <span className="ball"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
