import Head from 'next/head';
import Link from 'next/link';
// import ComingSoon from '../../src/components/ComingSoon';
import AppBanner from '../../src/components/Common/AppBanner';
import { AppRoutesNames, AppRoutesRecord } from '../../src/constants/AppLinks';

export default function ServicesLanding() {
  return (
    <div>
      <Head>
        <title>
          Refuge HULMAN,-
          Découvrez nos différents services pour vous faire passer le meilleur moment possible!
        </title>
        <meta name="title" content="Refuge HULMAN,- Découvrez nos différents services pour vous faire passer le meilleur moment possible!" />
      </Head>
      <AppBanner
        size="S"
        title="Des services de qualités pour un séjour de rêve."
        breadcrumbs={[
          AppRoutesRecord[AppRoutesNames.HOME],
        ]}
      />

      <div className="container">

        <div className="px-4 pt-5 my-5 text-center border-bottom">
          <h3 className="display-6 fw-bold mb-5">
            Encore des questions sur les installations et les activités sur place?
          </h3>
          <div className="col-lg-10 mx-auto">
            <p className="fs-5">Nous vous avons concocté une série de guides pratique afin de vous accompagner au mieux lors de votre séjour.</p>
            <p className="fs-5">Vous y trouverez des informations utiles sur les lieux a visiter, les activités typiques ou plus traditionnelles ainsi qu&apos;une liste des &apos;choses à voir&apos;.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-5 mb-5">
              <Link href={AppRoutesRecord['Guide Landing'].url}>
                <a
                  className="btn btn-primary btn-lg d-block col-md-3 mx-auto"
                  type="button"
                >
                  Découvrir nos guides
                </a>
              </Link>
            </div>
          </div>
          <div className="overflow-hidden" style={{ maxHeight: '30vh;', height: '300px' }}>
            <div className="container px-5">
              <img
                src="/assets/images/excursions/image001.jpeg"
                className="img-fluid border rounded-3 shadow-lg"
                alt=""
                width="700"
                height="300px"
                loading="lazy"
                style={{ position: 'relative', bottom: '120px' }}
              />
            </div>
          </div>
        </div>

        <br />
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h3 className="fs-1">Pour un repas :</h3>
              <p className="fs-5">
                Notre restaurant au bourg de Saint-Louis de Marie Galante vous accueille&nbps;
                tout les midi pour de nouvelles découvertes. Au menu: Bébélé,&nbps;
                Court-Bouillon de Poisson ou même Gratin de Fruit à Pain vous serons&nbps;
                servit sous un autre jours.
              </p>
              <Link href={AppRoutesRecord['Room Service'].url}>
                <a
                  className="btn btn-outline-secondary btn-lg"
                  type="button"
                >
                  Voir
                </a>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h3 className="fs-1">Pour un séjour :</h3>
              <p className="fs-5">
                Au coeur de la campagne Marie-Galantaise,&nbsp;
                vous trouverez des hébergements tout confort dans un cadre idyllique.&nbsp;
                Un espace de vie considérable, du calme, ainsi qu&apos;un accès gratuit et&nbsp;
                illimité à la wifi et la piscine en font une destination de retraite idéale&nbsp;
                pour des vacances en famille.
              </p>
              <Link href={AppRoutesRecord['Eatery Service'].url}>
                <a
                  className="btn btn-outline-secondary btn-lg"
                  type="button"
                >
                  Voir
                </a>
              </Link>
            </div>
          </div>
        </div>

        <br />
        <div className="row">
          <div className="container-fluid">
            <img
              className="d-block mx-auto my-3"
              src="/logo.png"
              alt=""
              width="250"
              height="auto"
            />

            <div className="row">
              <h3 className="display-5 fs-1 fw-bold my-3 text-center">Encore un doute? une question?</h3>
              <div className="col my-2">
                <ul className="lead fs-4">
                  <li>
                    Vous pouvez découvrir notre galerie.
                  </li>
                  <li>
                    Nous poser une question sur la culture locale ou&nbsp;
                    un besoin préparation de votre séjour.
                  </li>
                  <li>
                    Nous laisser un commentaire sur TripAdvisor.
                  </li>
                </ul>
                <br />
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <Link href={AppRoutesRecord.Gallery.url}>
                    <a
                      type="button"
                      className="btn btn-primary btn-lg px-4 gap-3"
                    >
                      Voir la Galerie
                    </a>
                  </Link>
                  <Link href={AppRoutesRecord.Contact.url}>
                    <a
                      type="button"
                      className="btn btn-outline-secondary d-block ms-2 btn-lg px-4"
                    >
                      Une question ?
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
