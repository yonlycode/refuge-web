import { useEffect } from 'react';
import { GalleryItem, GalleryTags } from '@/core/Gallery/Gallery';

import { useAppDispatch, useAppSelector } from '@/store';
import {
  FetchGallery,
  mutateGalleryOptions,
  mutateLightboxCurrentIndex,
  mutateLightboxState,
  resetGallery,
} from '@/store/slices/Gallery';

export default function AppGallery() {
  const {
    options,
    data,
    pagination,
  } = useAppSelector((state) => state.gallery);

  const {
    isAppLoading,
  } = useAppSelector((state) => state.layout);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (pagination === null) {
      dispatch(FetchGallery());
    }
  }, []);

  const handleShowMore = async () => {
    if (!pagination?.hasNextPage) {
      return;
    }
    await dispatch(FetchGallery());
  };

  const handleSelectTag = (tag: GalleryTags | 'all') => {
    if (tag === options.tags) {
      return;
    }

    dispatch(resetGallery());
    dispatch(mutateGalleryOptions({
      tags: (tag === 'all') ? null : tag as GalleryTags,
    }));
    dispatch(FetchGallery());
  };

  // TODO - implement this
  const handleCarouselModal = (itemIndex: number) => {
    dispatch(mutateLightboxCurrentIndex(itemIndex));
    dispatch(mutateLightboxState(true));
  };

  return (
    <section className="gallery_area section_gap" id="gallery">

      <div className="container">
        <div className="filters gallery-filter">
          <ul>
            <li
              className={options.tags === null ? 'active' : ''}
              data-filter="all"
            >
              <a href="#" onClick={() => handleSelectTag('all')}> Tout </a>
            </li>
            { Object.values(GalleryTags).map((value :GalleryTags) => (
              <li
                className={options.tags === value ? 'active' : ''}
                data-filter={value}
                key={value}
              >
                <a href="#" onClick={() => handleSelectTag(value)}>{value}</a>
              </li>
            ))}
          </ul>
        </div>

        {/*
          TODO - Need to make image cards responsives and all image same size
        */}
        <div className="filters-content">
          <div className="row gx-2 gy-2 gallery-grid">
            {data.map(({ name, url, alt }: GalleryItem, index: number) => (
              <div className="col-lg-4 col-md-6 all border" key={`gallery-item-${name}-${index + 1}`}>
                <div className="single-gallery show">
                  <a
                    href="#"
                    onClick={() => handleCarouselModal(index)}
                    className="img-pop-home"
                  >
                    <div className="overlay" />

                    <img className="img-fluid w-100" src={url} alt={alt} />
                  </a>
                  {/*
                    TODO - make the scope image working
                    <div className="icon">
                      <a
                        href="#"
                        onClick={() => handleCarouselModal(index)}
                        className="img-pop-home"
                      >

                        <img src="/img/zoom-icon.png" alt="" />
                      </a>
                    </div>
                  */}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-25">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={handleShowMore}
            disabled={(pagination && pagination.hasNextPage === false) || isAppLoading}
          >
            { isAppLoading ? 'Chargement...' : 'Voir plus' }
          </button>
        </div>
      </div>
    </section>
  );
}
