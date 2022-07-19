import Head from 'next/head';
import Link from 'next/link';

import AppBanner from '../src/components/Common/AppBanner';
import StartReservationForm from '../src/components/Forms/StartReservationForm';
import { AppRoutesNames, AppRoutesRecord } from '../src/constants/AppLinks';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Bienvenue au Refuge HULMAN -
          cuisine locale et hébergement tout confort à Saint-Louis de Marie-Galante en Guadeloupe.
        </title>
        <meta name="title" content=" Bienvenue au Refuge HULMAN - cuisine locale et hébergement tout confort à Saint-Louis de Marie-Galante en Guadeloupe." />
      </Head>
      <AppBanner
        size="L"
        title="Bienvenue au Refuge HULMAN"
        subTitle="Ici vous êtes chez vous. Tous les services sont optimisés afin que vous passiez le meilleur moment possible. Un cadre calme et agréable, une chaleureuse, une table de qualité, tout cela servi avec une constante bonne humeur. Alors n'attendez plus et venez nous voir, nous vous attendons."
      />
      <StartReservationForm />
      <div className="container">
        
        <section className="about_area section_gap_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="main_title">
                  <div className="top-part">
                    <h1>Georges et Fortuna vous accueillent au REFUGE Hulman </h1>
                  </div>
                  <h2>
                    Bienvenue dans un cadre de rêve entre ruralité et modernité.
                  </h2>
                  <div className="bottom_part">
                    <p>
                      Marie-Galante, île de l&apos;archipel de la Guadeloupe dans la mer des Antilles
                      s&apos;étend sur une superficie de 158 km². Sa forme ronde et aplatie lui
                      doit le surnom de la Grande Galette. En la découvrant dans toute sa
                      splendeur, le 03 novembre 1493 Christophe Colomb lui donne
                      le nom de sa caravelle MARIA GALANDA.
                    </p>
                    <p>
                      A vocation agricole, avec une usine sucrière, trois distilleries,
                      des cultures vivrières et la pêche,
                      Marie-Galante la rurale s&apos;ouvre au Tourisme.
                      Ses trois localités principales, Capesterre, Saint-Louis et
                      son chef lieu Grand-bourg se déploient en bordure de mer.
                      Marie-Galante est aussi appelée l&apos;île aux cent
                      moulins. En réalité, on dénombre les vestiges d&apos;un peu plus
                      d&apos;une centaine de moulins à vent autrefois
                      destinés à broyer la canne à sucre qui demeure
                      la principale richesse de l&apos;île.
                    </p>
                    <p>
                      Avec une usine sucrière, trois distilleries, des cultures
                      vivrières et la pêche, Marie-Galante la rurale
                      s&apos;ouvre au Tourisme. Ses trois localités principales,
                      Capesterre, Saint-Louis et son chef lieu Grand-bourg
                      se déploient en bordure de mer.
                    </p>
                    <p>
                      Ainsi, sur le territoire de la plus ancienne bourgade de l&apos;île,
                      là où les cinquante premiers colons ont tenté de s&apos;établir en 1648,
                      Saint-Louis se prélasse en bordure d&apos;une superbe baie qui porte son nom.
                    </p>
                    <p>
                      Pour arriver jusqu&apos;à nous,
                      à cinq minutes de l&apos;embarcadère de Saint-Louis,
                      à 10 mn de Grand-bourg,
                      prenez la nationale 9 jusqu&apos;à la section Saint-Charles,
                      route des sources. Dans un cadre magnifique, entre
                      cocotiers, flamboyants et arbres fruitiers entre miroitement
                      de la mer et plumets argentés de cannes à sucre.
                    </p>
                  </div>
                  <Link href={AppRoutesRecord[AppRoutesNames.SERVICES_LANDING].url}>
                    <a className="btn btn-primary mt-45 ps-5 pe-5">En savoir plus</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="our_room_area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="main_title">
                  <div className="top-part">
                    <p />
                  </div>
                  <h2>Nos Gîtes</h2>
                  <div className="bottom_part">
                    <p>
                      Au coeur de la campagne Marie-Galantaise, vous trouverez des hébergements
                      tout confort dans un cadre idyllique. Un espace de vie considérable,
                      du calme, ainsi qu&apos;un accès gratuit et illimité à la wifi et la piscine
                      en font une destination de retraite idéale pour des vacances en famille.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="room_left">
                  <img className="img-fluid" loading="lazy" src="/assets/images/gites/emeraude/chambre.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <div className="room_right">
                    <h1 className="type">
                      Grande chambre double
                    </h1>
                    <p>
                      Le domaine des Gîtes de Refuge Hulman situé entre La flore locale
                      et la rivière des sources, vous accueille sur un vaste site paysager
                      de près de 3 hectares. Ce gîte de style traditionnel antillais mais
                      néanmoins chaleureux vous offre de vaste et belle pièce de vie, confortable
                      et baignée de lumière, conviviale avec sa piscine, ainsi qu’une belle
                      terrasse donnant sur de vue a couper le souffle, parfait pour des moments
                      chaleureux en famille ou entre amis Toute l&apos;année.&nbsp;
                      Parking dans la propriété,
                      Gîte indépendant sur un ensemble de gîtes, et surtout,
                      Découvertes touristiques inégalées au coeur de la campagne Marie-Galantaise .
                    </p>
                    <div className="row">
                      <div className="col-lg-6 col-md-5">
                        <ul>
                          <li>20 Couchages</li>
                          <li>50 convives pour les repas</li>
                          <li>800m2 de surface</li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-5">
                        <ul>
                          <li>6 chambres</li>
                          <li>6 salles de bain / 7 WC</li>
                          <li>cadre magnifique à la campagne</li>
                        </ul>
                      </div>
                    </div>
                    <Link href="/services/gite">
                      <a className="btn btn-outline-primary mt-5">Voir plus</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="our_room_area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="main_title">
                  <div className="top-part">
                    <p />
                  </div>
                  <h2>Notre restaurant</h2>
                  <div className="bottom_part">
                    <p>
                      Notre restaurant au bourg de Saint-Louis de Marie Galante vous accueille tout
                      les midi pour de nouvelles découvertes. Au menu: Bébélé, Court-Bouillon de
                      Poisson ou même Gratin de Fruit à Pain vous serons servit sous un autre jours.
                      Pour toute demande de livraison (Traiteur), appelez nous directement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div>
                  <div className="room_right">
                    <h1 className="type">
                      Le Refuge en Katimini
                    </h1>
                    <p>
                      Vous accueille tout les midi au bourg de Saint-Louis dans un restaurant ou vous
                      aurez les pieds dans le sable, une vue magnifique sur la Guadeloupe, une
                      ambiance qui ne vous laissera pas indifferent ainsi qu&apos;une cuisine dont vous
                      vous souviendrez.
                    </p>
                    <div className="row">
                      <div className="col-lg-6 col-md-5">
                        <ul>
                          <li>Cadre hors-normes</li>
                          <li>Sur la plus belle plage de l&apos;île</li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-5">
                        <ul>
                          <li>Une Cuisine traditionnelle typique</li>
                          <li>Une ambiance dont vous vous souviendrez</li>
                        </ul>
                      </div>
                    </div>
                    <Link href="/services/restaurant">
                      <a className="btn btn-outline-secondary mt-5">Voir plus</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="room_left">
                  <img className="img-fluid" loading="lazy" src="/assets/images/katimini/katimini4.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
