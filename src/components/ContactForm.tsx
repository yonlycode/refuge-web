export default function ContactForm() {
  return (
    <section className="contact_area section_gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="contact_info">
              <div className="info_item">
                <i className="lnr lnr-home" />
                <h6>Saint-Louis, Marie-Galante</h6>
                <p>Guadeloupe, French West Indies</p>
              </div>
              <div className="info_item">
                <i className="lnr lnr-phone-handset" />
                <h6><a href="#">(590) 0590 970 502</a></h6>
                <p>Mardi au Samedi 9am à 6pm</p>
              </div>
              <div className="info_item">
                <i className="lnr lnr-envelope" />
                <h6><a href="#">refugehulman[at]gmail.com</a></h6>
                <p>Envoyez nous une demande n&apos;importe quand!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <form className="row contact_form" id="contactForm">
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" className="form-control" id="name" name="name" placeholder="Nom" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="email" name="email" placeholder="Adresse email" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="subject" name="subject" placeholder="Sujet" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" name="message" id="message" rows={5} placeholder="Message" />
                </div>
              </div>
              <div className="col-md-12 text-right d-flex justify-content-center">
                <button type="button" value="submit" className="mt-2 btn btn-primary">Envoyer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
