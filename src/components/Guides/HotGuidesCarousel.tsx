import Link from 'next/link';

import { GuideArticleOverview, IGuideArticleKeys } from '@/core/Guides/types/IGuideArticle';
import { FilterKeysNames } from '@/core/Database/types/meta';

type HotGuidesCarouselState = {
  hotGuides: GuideArticleOverview[];
}

export default function HotGuidesCarousel({
  hotGuides,
}: HotGuidesCarouselState) {
  return (
    <section className="mt-50 container">
      <div
        id="hot-guide-carousel"
        className="carousel slide rounded-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {hotGuides.map((guide, key: number) => (
            <div
              className={` carousel-item carousel-banner ${(key === 0) ? 'active' : ''}`}
              key={guide[FilterKeysNames.FILTER_KEY]}
            >
              <img
                className="d-block"
                src={guide[IGuideArticleKeys.PREVIEW_IMAGE]}
                alt={guide[IGuideArticleKeys.NAME]}
              />
              <div className="carousel-caption d-none d-md-block rounded">
                <h4 className="fs-1 fw-1 text-white">{guide[IGuideArticleKeys.NAME]}</h4>
                <p className="fs-4 fw-2 text-white">{guide[IGuideArticleKeys.DESCRIPTION]}</p>
                <Link href={`/guides/${guide[FilterKeysNames.FILTER_KEY]}`}>
                  <a target="_blank" className="btn btn-primary btn-lg mx-auto px-5">
                    Lire le guide
                  </a>
                </Link>
              </div>
            </div>
          ))}

          <div className="carousel-indicators">
            {hotGuides.map((guide, key: number) => (
              <button
                key={guide[IGuideArticleKeys.NAME]}
                type="button"
                data-bs-target="#hot-guide-carousel"
                data-bs-slide-to={key}
                className={`bg-primary ${key === 0 ? 'active' : ''}`}
                aria-current={key === 0 ? 'true' : 'false'}
                aria-label={guide[IGuideArticleKeys.NAME]}
              />
            ))}
          </div>
        </div>

        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#hot-guide-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next primary"
          type="button"
          data-bs-target="#hot-guide-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
