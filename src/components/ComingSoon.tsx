import Link from 'next/link';

export default function ComingSoon() {
  return (
    <section className="coming_soon mt-25">
      <div className="container">
        <div className="card p-20 shadow-lg p-3 mb-5 bg-body rounded">
          <div className="card-body">
            <div className="row">
              <h2 className="text-center"> Désolé, cette page n&apos;est pas finis.</h2>
              <h4>
                Elle sera bientôt disponible.
                <br />
                Vous voulez découvrir nos services
                &nbsp;
                <Link href="/contact">
                  <a>c&apos;est par ici.</a>
                </Link>
                <br />
                En attendant, vous pouvez nous
                &nbsp;
                <Link href="/contact">
                  <a>poser une question?</a>
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
