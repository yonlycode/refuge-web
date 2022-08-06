import Head from 'next/head';

import { AppRoutesNames, AppRoutesRecord } from '@/constants/AppLinks';

import GuideSearchBar from '@/components/Guides/GuideSearchBar';
import AppBanner from '@/components/Common/AppBanner';
import HotGuidesCarousel from '@/components/Guides/HotGuidesCarousel';

import Faq from '@/constants/Faq';

export default function GuideLanding() {
  return (
    <>
      <Head>
        <title>
          Refuge HULMAN -
          Découvrez nos différents guide pour faciliter votre arrivée
          et votre séjour à Marie-Galante!
        </title>
        <meta name="description" content="Dans un cadre magnifique, entre cocotiers, flamboyants et arbres fruitiers entre miroitement de la mer et plumets argentés de cannes à sucre, Georges et Fortuna vous accueillent au REFUGE cuisine locale dont vous ferez l'éloge et hébergement tout confort qui vous feront passez les plus douces nuit dans l'un des plus beau cadre au monde : Saint-Louis de Marie-Galante en Guadeloupe" />
        <meta
          name="title"
          content="Refuge HULMAN -
          Découvrez nos différents guide pour faciliter votre arrivée et votre séjour à Marie-Galante!"
        />
      </Head>
      <AppBanner
        size="L"
        title="Un titre de test pour l'instant"
        breadcrumbs={[
          AppRoutesRecord[AppRoutesNames.HOME],
        ]}
      />

      <GuideSearchBar />

      <HotGuidesCarousel />

      <section className="container mt-50">
        <h2 className="text-center fs-1 fw-5 mb-5"> Foire au question: </h2>
        <div className="col-lg-10 mx-auto">
          <div className="accordion accordion-flush" id="faq-accordion">

            {Faq.map(({ title, content, id }) => (
              <div className="accordion-item" key={id}>
                <h2 className="accordion-header" id={`flush-${id}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${id}`}
                    aria-expanded="false"
                    aria-controls={id}
                  >
                    {title}

                  </button>
                </h2>
                <div
                  id={id}
                  className="accordion-collapse collapse"
                  aria-labelledby={`flush-${id}`}
                  data-bs-parent="#faq-accordion"
                >
                  <div className="accordion-body" dangerouslySetInnerHTML={{ __html: content }} />
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}
