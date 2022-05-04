import { ChangeEvent, FormEvent } from 'react';

import { RootState, useAppDispatch, useAppSelector } from '../../store';
import { mutateEateryReservation, sendEateryReservation } from '../../store/slices/Reservation';
import { IEateryReservation } from '../../core/Models/EateryReservation';
import { InputValidators } from '../../utils/InputUtils';

import AppInput from '../Common/AppInput';
import AppTextarea from '../Common/AppTextarea';
import AppLoadingBackdrop from '../Common/AppLoadingBackdrop';

export default function EateryReservationForm() {
  const {
    reservation,
    isSending,
  } = useAppSelector((state: RootState) => state.reservation.eatery);
  const dispatch = useAppDispatch();

  const {
    customerCount,
    date,
    email,
    firstName,
    lastName,
    message,
    phone
  } = reservation;

  const isEateryReservationFormValid = (
    !InputValidators.firstName(firstName) &&
    !InputValidators.lastName(lastName) &&
    !InputValidators.email(email) &&
    !InputValidators.phone(phone) &&
    !InputValidators.message(message)
  )

  const handleEateryReservationChange = (
    { currentTarget }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(mutateEateryReservation({
      name: currentTarget.name as keyof IEateryReservation,
      value: currentTarget.value
    }))
  }
  const handleEateryReservationSending = async () => {
    if (isEateryReservationFormValid) {
      await dispatch(sendEateryReservation())
    }
  }
  const handleEateryReservationSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <>
      { isSending && <AppLoadingBackdrop />}
      <div className="container-fluid border rounded shadow-lg p-5 bg-body">
        <h2 className="mb-3 text-center m-1">Réserver une table:</h2>
        <br />
        <form className="needs-validation" onSubmit={handleEateryReservationSubmit}>
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label d-block">
                Prénom
                <AppInput
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={handleEateryReservationChange}
                  errorMessage={firstName !== '' ? InputValidators.firstName(firstName) : null}
                />
              </label>
            </div>
            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label d-block">
                Nom
                <AppInput
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={handleEateryReservationChange}
                  errorMessage={lastName !== '' ? InputValidators.lastName(lastName) : null}
                />
              </label>
            </div>
            <div className="col-6">
              <label htmlFor="email" className="form-label d-block">
                Email
                <AppInput
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={handleEateryReservationChange}
                  errorMessage={email !== '' ? InputValidators.email(email) : null}
                />
              </label>
            </div>
            <div className="col-6">
              <label htmlFor="phone" className="form-label d-block">
                Telephone
                <AppInput
                  type="telephone"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="06XXXXXXXX"
                  value={phone}
                  onChange={handleEateryReservationChange}
                  errorMessage={phone !== '' ? InputValidators.phone(phone) : null}
                />
              </label>
            </div>
            <div className="col-md-6">
              <label htmlFor="customerCount" className="form-label d-block">
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
              <label htmlFor="date" className="form-label d-block">
                Arrivée
                <AppInput
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                  value={date}
                  onChange={handleEateryReservationChange}
                />
              </label>
            </div>
            <div className="col-12 mb-3">
              <label
                htmlFor="message"
                className="form-label d-block"
              >
                Informations complémentaires
                <AppTextarea
                  className="form-control d-block"
                  id="message"
                  name="message"
                  rows={3}
                  value={message}
                  onChange={handleEateryReservationChange}
                  errorMessage={message !== '' ? InputValidators.message(message) : null}
                />
              </label>
            </div>
          </div>
          <button
            className="w-100 btn btn-primary btn-lg mt-25"
            type="submit"
            onClick={handleEateryReservationSending}
            disabled={!isEateryReservationFormValid || isSending}
          >
            { isSending ? 'Envoi en cours...' : 'Réserver'}
          </button>
        </form>
      </div>
    </>
  );
}
