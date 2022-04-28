import Link from 'next/link';

export default function RestaurantQuickCard() {
  return (
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
                  <a className="btn btn-outline-secondary">Voir plus</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="room_left">
              <img className="img-fluid" src="/assets/images/katimini/katimini4.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
