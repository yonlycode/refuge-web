import Link from 'next/link';

export default function AboutUs() {
  return (
    <section className="about_area section_gap_top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main_title">
              <div className="top-part">
                <p>Georges et Fortuna vous accueillent au REFUGE Hulman </p>
              </div>
              <h2>
                Georges et Fortuna vous accueillent au
                <br />
                REFUGE Hulman
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
              <Link href="/reserver">
                <a className="btn btn-primary mt-45">En savoir plus</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
