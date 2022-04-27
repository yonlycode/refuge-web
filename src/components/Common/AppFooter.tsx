import Link from 'next/link';

import FooterLinks from '../../constants/FooterLinks';

export default function AppFooter() {
  const firstRow = FooterLinks.slice(0, FooterLinks.length / 2);
  const secondRow = FooterLinks.slice(FooterLinks.length / 2);
  return (
    <footer className="footer-area section_gap mt-50 text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>N&apos;attendez plus</h6>
              <p>
                Réservez au refuge et venez découvrir notre petit coin de paradis.
              </p>
            </div>
          </div>
          <div className="offset-lg-2 col-lg-5 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>Navigation rapide</h6>
              <div className="row" id="footer-links">
                <ul className="col footer-nav">
                  { firstRow.map((el) => (
                    <li key={`footer-link-${el.name}`}>
                      <Link href={el.url}>
                        <a className="nav-link">
                          {el.name}
                        </a>
                      </Link>

                    </li>
                  ))}
                </ul>
                <ul className="col footer-nav">
                  {secondRow.map((el) => (
                    <li key={`footer-link-${el.name}`}>
                      <Link href={el.url}>
                        <a className="nav-link">
                          {el.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
          <div>

            <p className="footer-text m-0">
              Copyright &copy; Le Refuge Sarl
              {` ${new Date().getFullYear()}`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
