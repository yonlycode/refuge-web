export default function RoomReservationForm() {
  return (
    <div className="container-fluid border rounded shadow-lg p-5 bg-body">
      <h2 className="mb-3 text-center m-1">Information de réservation:</h2>
      <form className="needs-validation">
        <div className="row g-3">
          <div className="col-sm-6">
            <label htmlFor="firstName" className="form-label">
              Prénom
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
              />
            </label>
            <div className="invalid-feedback">
              Vous devez renseigner un prénom valide.
            </div>
          </div>
          <div className="col-sm-6">
            <label htmlFor="lastName" className="form-label">
              Nom
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
              />
            </label>
            <div className="invalid-feedback">
              Vous devez renseigner un nom valide.
            </div>
          </div>
          <div className="col-6">
            <label htmlFor="email" className="form-label">
              Email
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="you@example.com"
              />
            </label>
            <div className="invalid-feedback">
              S&apos;il vous plait renseignez une adresse
              email valide afin de facilité la communication
            </div>
          </div>
          <div className="col-6">
            <label htmlFor="phone" className="form-label">
              Telephone
              <input
                type="telephone"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="06XXXXXXXX"
              />
            </label>
            <div className="invalid-feedback">
              S&apos;il vous plait renseignez un  numéro de telephone
              valide afin de facilité la communication
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="customerCount" className="form-label">
              Nombre d&apos;adultes
              <select
                className="form-select"
                id="customerCount"
                name="customerCount"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </label>
            <div className="invalid-feedback">
              Un nombre d&apos;adulte est requis.
            </div>
          </div>
          <div className="col-6">
            <label htmlFor="date" className="form-label">
              Arrivée
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"
              />
            </label>
            <div className="invalid-feedback">
              Vous devez renseigner une date d&apos;arrivée.
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="message" className="form-label">
              Informations complémentaires
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows={3}
              />
            </label>
          </div>
        </div>
        <button className="w-100 btn btn-primary btn-lg mt-25" type="submit">Réserver</button>
      </form>
    </div>
  );
}
