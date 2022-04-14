import { useState } from 'react';

interface AppGalleryState {
    isLoading: boolean,
    gallery: {name: string, url: string}[]
}

export default function AppGallery() {
  const [{
    isLoading,
    gallery,
  }] = useState<AppGalleryState>({
    isLoading: true,
    gallery: [],
  });

  return (
    <section className="gallery_area section_gap" id="gallery">
      <div className="container">
        <div className="filters gallery-filter">
          <ul>
            <li className="active" data-filter=".all" />
          </ul>
        </div>

        <div className="filters-content">
          <div className="row gallery-grid">
            {gallery.map(({ name, url }) => (
              <div className="col-lg-4 col-md-6 all">
                <div className="single-gallery">
                  <div className="overlay" />
                  <img className="img-fluid w-100" src={url} alt={name} />
                  <div className="icon">
                    <a href="" className="img-pop-home">
                      <img src="/img/zoom-icon.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

        <div className="text-center mt-25">
          <button type="button" className="btn btn-primary btn-lg">
            { isLoading ? 'Chargement...' : 'Voir plus' }
          </button>
        </div>
      </div>
    </section>
  );
}
