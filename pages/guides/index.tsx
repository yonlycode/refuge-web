import Head from 'next/head';

import { AppRoutesNames, AppRoutesRecord } from '@/constants/AppLinks';

import GuideSearchBar from '@/components/Guides/GuideSearchBar';
import AppBanner from '@/components/Common/AppBanner';
import HotGuidesCarousel from '@/components/Guides/HotGuidesCarousel';

import Faq from '@/constants/Faq';
import { GuideArticleOverview } from '@/core/Guides/types/IGuideArticle';
import GuideArticle from '@/core/Guides/Guide';

type GuideLandingProps = {
  hotGuides: GuideArticleOverview[];
}

export default function GuideLanding({
  hotGuides,
}: GuideLandingProps) {
  return (
    <>
      <Head>
        <title>
          Refuge HULMAN -
          Découvrez nos différents guide pour faciliter votre arrivée
          et votre séjour à Marie-Galante!
        </title>
        <meta
          name="description"
          content="Refuge HULMAN -
          Découvrez nos différents guide pour faciliter votre arrivée
          et votre séjour à Marie-Galante!"
        />
        <meta
          name="title"
          content="Refuge HULMAN -
          Découvrez nos différents guide pour faciliter votre arrivée et votre séjour à Marie-Galante!"
        />
      </Head>

      <AppBanner
        size="L"
        title="Découvrez nos guides"
        subTitle="Ici, vous trouverez toutes les informations pouvant
         vous être utile pour bien préparer vos vacances dans à Marie-Galante. "
        breadcrumbs={[
          AppRoutesRecord[AppRoutesNames.HOME],
        ]}
      />

      <GuideSearchBar />

      <HotGuidesCarousel
        hotGuides={hotGuides}
      />

      <section className="container mt-50">
        <h2 className="text-center fs-1 fw-3 mb-5"> Questions Fréquentes: </h2>
        <div className="col-lg-10 mx-auto">
          <div className="accordion accordion-flush" id="faq-accordion">
            {Faq.map(({ title, content, id }) => (
              <div className="accordion-item" key={id}>
                <h3 className="accordion-header" id={`flush-${id}`}>
                  <button
                    className="accordion-button collapsed fs-4"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${id}`}
                    aria-expanded="false"
                    aria-controls={id}
                  >
                    {title}
                  </button>
                </h3>
                <div
                  id={id}
                  className="accordion-collapse collapse"
                  aria-labelledby={`flush-${id}`}
                  data-bs-parent="#faq-accordion"
                >
                  <div className="accordion-body fs-5" dangerouslySetInnerHTML={{ __html: content }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const hotGuides = await (await new GuideArticle().getHotGuideArticles()).Items;

  return {
    props: {
      hotGuides,
    },
  };
}
