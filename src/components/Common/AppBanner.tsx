import Link from 'next/link';

interface AppBannerProps {
    size: 'S' | 'L'
    breadcrumbs?: { label:string, url: string }[],
    title?: string,
    subTitle?: string
}

export default function AppBanner({
  size, breadcrumbs = [], title = '', subTitle = '',
}: AppBannerProps) {
  if (size === 'S') {
    return (
      <section className="banner_area mt-20">
        <div className="banner_inner d-flex align-items-center">
          <div className="overlay bg-parallax" />
          <div className="container">
            <div className="banner_content text-center">
              <h1 className="top-text text-white">
                { title }
              </h1>
              <div className="page_link">
                <ul>
                  { breadcrumbs.map(({ url, label }) => (
                    <li key={`breadcrumb-link-${label}`}>
                      <Link href={url}><a>{label}</a></Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="home_banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="overlay bg-parallax" />
        <div className="overlay overlay-bg" />
        <div className="container">
          <div className="banner_content text-center">
            <h1 className="top-text text-white">
              { title }
            </h1>
            <br />
            <div className="page_link">
              <ul>
                {breadcrumbs.map(({ url, label }) => (
                  <li key={`breadcrumb-link-${label}`}>
                    <Link href={url}><a>{label}</a></Link>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text">
              <em>
                { subTitle }
              </em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
