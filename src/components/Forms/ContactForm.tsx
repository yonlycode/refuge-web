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
import { InputValidators } from '../../utils/InputUtils';

import { IContactRequest } from '../../core/Models/ContactRequest';
import AppLoadingBackdrop from '../Common/AppLoadingBackdrop';
import AppInput from '../Common/AppInput';
import AppTextarea from '../Common/AppTextarea';

export default function ContactForm() {
  const {
    request,
    isRequestSending,
  } = useAppSelector((state: RootState) => state.contact);
  const dispatch = useAppDispatch();

  const {
    name,
    email,
    message,
    phone,
    subject,
  } = request;


  const isContactFormValid = (
    !InputValidators.lastName(name)
    && !InputValidators.email(email)
    && !InputValidators.message(message)
    && !InputValidators.phone(phone)
    && !InputValidators.subject(subject)
  );

  const handleChangeContactForm = ({
    currentTarget,
  }: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    dispatch(mutateContactRequest({
      name: currentTarget.name as keyof IContactRequest,
      value: currentTarget.value,
    }));
  };

  const handleSubmitContactRequest = async () => {
    if (isContactFormValid) {
      await dispatch(sendContactRequest({}));
    }
  };

  return (
    <>
      { isRequestSending && <AppLoadingBackdrop />}
      <section className="contact_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact_info">
                <div className="info_item">
                  <i className="fa fa-home" />
                  <h6>Saint-Louis, Marie-Galante</h6>
                  <p>Guadeloupe, French West Indies</p>
                </div>
                <div className="info_item">
                  <i className="fa fa-phone" />
                  <h6>
                    <a href="#">(590) 0590 970 502</a>
                  </h6>
                  <p>Mardi au Samedi 9am à 6pm</p>
                </div>
                <div className="info_item">
                  <i className="fa fa-envelope" />
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
                    <AppInput
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Nom"
                      value={name}
                      onChange={handleChangeContactForm}
                      errorMessage={
                        name !== '' ? InputValidators.lastName(name) : null
                      }
                    />
                  </div>
                  <div className="form-group">
                    <AppInput
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={email}
                      placeholder="Adresse email"
                      onChange={handleChangeContactForm}
                      errorMessage={
                        email !== '' ? InputValidators.email(email) : null
                      }
                    />
                  </div>
                  <div className="form-group">
                    {/* TODO - Format on number phone */}
                    <AppInput
                      type="email"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={phone}
                      placeholder="Téléphone"
                      onChange={handleChangeContactForm}
                      errorMessage={
                        phone !== '' ? InputValidators.phone(phone) : null
                      }
                    />
                  </div>
                  <div className="form-group">
                    <AppInput
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={subject}
                      placeholder="Sujet"
                      onChange={handleChangeContactForm}
                      errorMessage={
                        subject !== '' ? InputValidators.subject(subject) : null
                      }
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <AppTextarea
                      name="message"
                      className="form-control"
                      id="message"
                      rows={6}
                      value={message}
                      placeholder="Message"
                      errorMessage={
                        message !== '' ? InputValidators.message(message) : null
                      }
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
