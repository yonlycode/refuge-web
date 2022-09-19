export default function AdminLoginPage() {
  return (
    <section className="h-100 w-100 top-0 left-0 bg-primary position-absolute" style={{ zIndex: 999999999 }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5">

                <h2 className="mb-5 text-center">Panel Administrateur</h2>

                <div className="form-outline mb-4 mx-auto my-auto">
                  <label className="form-label d-block" htmlFor="typeEmailX-2">
                    Email
                    <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
                  </label>
                </div>

                <div className="form-outline mb-4 mx-auto my-auto">
                  <label className="form-label d-block" htmlFor="typePasswordX-2">
                    Password
                    <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
                  </label>
                </div>

                {/* <div className="form-check d-flex justify-content-start mb-4">
                  <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                  <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                </div> */}

                <button className="btn btn-primary btn-lg btn-block" type="submit">Connection</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
