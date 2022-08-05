import { useAppDispatch, useAppSelector } from '@/store';
import fetchHotGuides from '@/store/slices/Guides/fetchHotGuides';
import { useEffect } from 'react';

export default function HotGuidesCarousel() {
  const {
    // isHotGuidesFetching,
    hotGuides,
  } = useAppSelector((state) => state.guides);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHotGuides());
  }, []);

  return (
    <section className="mt-50 container">
      <div
        id="hot-guide-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {hotGuides.map(({ previewImage, meta }, key: number) => (
            <div className={` carousel-item${(key === 0) ? ' active' : ''}`} key={meta.url}>
              <div>
                <img
                  style={{ maxHeight: '550px' }}
                  width="auto"
                  src={previewImage}
                  className="d-block w-100"
                  alt="..."
                />
              </div>

            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
