import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { HeaderLinks } from '../../constants/AppLinks';

// TODO - need to refacto this
export default function AppHeader() {
  const { route } = useRouter();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const header = headerRef.current;
      if (header) {
        const navOffsetTop = header ? header.offsetHeight - 50 : 100;
        const scroll = window.scrollY;
        if (scroll >= navOffsetTop) {
          header.classList.add('navbar_fixed');
        } else {
          header.classList.remove('navbar_fixed');
        }
      }
    });
  }, []);

  const isSubLinkActive = (url: string): boolean => route.includes(url);
  const isLinkActive = (url: string): boolean => route === url;

  return (
    <header className="header_area" ref={headerRef}>
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light bg-light pe-10">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <Link href="/">
              <a className="navbar-brand logo_h">
                <img src="/logo.png" alt="Le Refuge Logo" />
              </a>
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex justify-content-end w-100">
                <ul className="nav navbar-nav menu_nav text-center">
                  { HeaderLinks.map((el) => {
                    if (el.subs) {
                      return (
                        <li
                          className={`nav-item submenu dropdown ${isSubLinkActive(el.url) ? 'active' : ''}`}
                          key={`header-link-${el.name}`}
                        >
                          <Link href={el.url}>
                            <a
                              className="nav-link dropdown-toggle"
                              data-toggle="dropdown"
                              role="button"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              { el.name }
                            </a>
                          </Link>
                          <ul className="dropdown-menu">
                            { el.subs.map((sub) => (
                              <li className="nav-item" key={`header-sub-link-${sub.url}`}>
                                <Link href={sub.url}>
                                  <a className="nav-link">{sub.name}</a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      );
                    }
                    return (
                      <li
                        className={`nav-item ${isLinkActive(el.url) ? 'active' : ''}`}
                        key={`header-link-${el.name}`}
                      >
                        <Link href={el.url}>
                          <a className="nav-link">{el.name}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
