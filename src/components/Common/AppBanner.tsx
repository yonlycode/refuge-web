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
      <section className="banner_area">
        <div className="banner_inner d-flex align-items-center">
          <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background="" />
          <div className="container">
            <div className="banner_content text-center">
              <h1 className="text-white top-text">{ title }</h1>
              <div className="page_link">
                { breadcrumbs.map(({ url, label }) => (
                  <Link href={url} key={`breadcrumb-link-${label}`}>
                    <a>{label}</a>
                  </Link>
                ))}
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
        <div className="overlay bg-parallax" data-stellar-ratio="2" data-stellar-vertical-offset="0" data-background="" />
        <div className="overlay overlay-bg" />
        <div className="container">
          <div className="banner_content text-center">
            <h1 className="top-text text-white">{ title }</h1>
            <div className="page_link">
              {breadcrumbs.map(({ url, label }) => (
                <Link href={url} key={`breadcrumb-link-${label}`}>
                  <a className="text-white">{label}</a>
                </Link>
              ))}
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
