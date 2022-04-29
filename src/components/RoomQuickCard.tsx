import Link from 'next/link';

export default function RoomQuickCard() {
  return (
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
                  chaleureux en famille ou entre amis Toute l&apos;année. Parking dans la propriété,
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
                  <a className="btn btn-outline-primary">Voir plus</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
