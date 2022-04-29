import { ChangeEvent } from 'react';

import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '../../store';
import {
  mutateContactRequest,
  sendContactRequest,
} from '../../store/slices/Contact';
import { IContactRequest } from '../../core/Models/ContactRequest';
import AppLoadingBackdrop from '../Common/AppLoadingBackdrop';

export default function ContactForm() {
  const {
    request,
    isRequestSending,
  } = useAppSelector((state: RootState) => state.contact);
  const {
    name,
    email,
    message,
    phone,
    subject,
  } = request;
  const dispatch = useAppDispatch();

  const handleChangeContactForm = ({
    currentTarget,
  }: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    dispatch(mutateContactRequest({
      name: currentTarget.name as keyof IContactRequest,
      value: currentTarget.value,
    }));
  };
  const handleSubmitContactRequest = async () => {
    await dispatch(sendContactRequest({}));
  };

  const isContactFormValid = (
    // TODO - implement this
    name !== ''
    && email !== ''
    && message !== ''
    && phone !== ''
    && subject !== ''
  );

  return (
    <>
      { isRequestSending && <AppLoadingBackdrop />}
      <section className="contact_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact_info">
                <div className="info_item">
                  <i className="lnr lnr-home" />
                  <h6>Saint-Louis, Marie-Galante</h6>
                  <p>Guadeloupe, French West Indies</p>
                </div>
                <div className="info_item">
                  <i className="lnr lnr-phone-handset" />
                  <h6>
                    <a href="#">(590) 0590 970 502</a>
                  </h6>
                  <p>Mardi au Samedi 9am à 6pm</p>
                </div>
                <div className="info_item">
                  <i className="lnr lnr-envelope" />
                  <h6>
                    <a href="#">refugehulman[at]gmail.com</a>
                  </h6>
                  <p>Envoyez nous une demande n&apos;importe quand!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <form className="row contact_form">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Nom"
                      value={name}
                      onChange={handleChangeContactForm}
                    />
                  </div>
                  <div className="form-group">
                    {/* TODO - Error message and validation */}
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={email}
                      placeholder="Adresse email"
                      onChange={handleChangeContactForm}
                    />
                  </div>
                  <div className="form-group">
                    {/* TODO - Error message and validation */}
                    <input
                      type="email"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={phone}
                      placeholder="Téléphone"
                      onChange={handleChangeContactForm}
                    />
                  </div>
                  <div className="form-group">
                    {/* TODO - Error message and validation */}
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={subject}
                      placeholder="Sujet"
                      onChange={handleChangeContactForm}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    {/* TODO - Error message and validation */}
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      rows={6}
                      value={message}
                      placeholder="Message"
                      onChange={handleChangeContactForm}
                    />
                  </div>
                </div>
                <div className="col-md-12 text-right d-flex justify-content-end">
                  <button
                    type="button"
                    value="submit"
                    className="mt-5 btn btn-primary ps-5 pe-5"
                    onClick={handleSubmitContactRequest}
                    disabled={!isContactFormValid || isRequestSending}
                  >
                    {isRequestSending ? 'Envoi en cours...' : 'Envoyer'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
