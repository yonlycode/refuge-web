import { ChangeEvent, FormEvent } from 'react';

import { IEateryReservation } from '../../core/ReservationRequest/EateryReservation';

import { RootState, useAppDispatch, useAppSelector } from '../../store';
import { mutateEateryReservation, sendEateryReservation } from '../../store/slices/Reservation';

import AppInput from '../Common/AppInput';
import AppTextarea from '../Common/AppTextarea';
import AppLoadingBackdrop from '../Common/AppLoadingBackdrop';
import AppIncrementCounter from '../Common/AppIncrementCounter';

import { InputFormatters, InputValidators } from '../../utils/InputUtils';

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
    phone,
  } = reservation;

  const isEateryReservationFormValid = (
    !InputValidators.customerCount(customerCount)
    && !InputValidators.date(date)
    && !InputValidators.email(email)
    && !InputValidators.firstName(firstName)
    && !InputValidators.lastName(lastName)
    && !InputValidators.phone(phone)
  );

  const handleEateryReservationChange = (
    { currentTarget }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (currentTarget.name as keyof IEateryReservation === 'phone') {
      dispatch(mutateEateryReservation({
        name: currentTarget.name as keyof IEateryReservation,
        value: InputFormatters.phone.format(currentTarget.value),
      }));

      return;
    }
    dispatch(mutateEateryReservation({
      name: currentTarget.name as keyof IEateryReservation,
      value: currentTarget.value,
    }));
  };
  const handleChangeCustomerCount = (value :number) => {
    dispatch(mutateEateryReservation({
      name: 'customerCount',
      value,
    }));
  };
  const handleEateryReservationSending = async () => {
    if (isEateryReservationFormValid) {
      await dispatch(sendEateryReservation());
    }
  };
  const handleEateryReservationSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      { isSending && <AppLoadingBackdrop />}
      <div className="container-fluid border rounded shadow-lg p-5 bg-body">
        <h2 className="mb-3 text-center m-1">Réserver une table:</h2>
        <br />
        <form className="needs-validation" onSubmit={handleEateryReservationSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label d-block">
                Prénom
                <AppInput
                  type="text"
                  className="form-control mt-2"
                  name="firstName"
                  value={firstName}
                  onChange={handleEateryReservationChange}
                  errorMessage={firstName !== '' ? InputValidators.firstName(firstName) : null}
                />
              </label>
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label d-block">
                Nom
                <AppInput
                  type="text"
                  className="form-control mt-2"
                  name="lastName"
                  value={lastName}
                  onChange={handleEateryReservationChange}
                  errorMessage={lastName !== '' ? InputValidators.lastName(lastName) : null}
                />
              </label>
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label d-block">
                Email
                <AppInput
                  type="email"
                  className="form-control mt-2"
                  name="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={handleEateryReservationChange}
                  errorMessage={email !== '' ? InputValidators.email(email) : null}
                />
              </label>
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label d-block">
                Telephone
                <AppInput
                  type="telephone"
                  className="form-control mt-2"
                  name="phone"
                  placeholder="06XX XXX XXX"
                  value={phone}
                  onChange={handleEateryReservationChange}
                  errorMessage={phone !== '' ? InputValidators.phone(phone) : null}
                />
              </label>
            </div>
            <div className="col-md-6">
              <label htmlFor="customerCount" className="form-label d-block">
                Nombre de couverts
                <AppIncrementCounter
                  className="form-control"
                  name="customerCount"
                  value={customerCount}
                  onIncrement={handleChangeCustomerCount}
                  onDecrement={handleChangeCustomerCount}
                  errorMessage={customerCount !== 0
                    ? InputValidators.customerCount(customerCount)
                    : null}
                />
              </label>
            </div>
            <div className="col-md-6">
              <label htmlFor="date" className="form-label d-block">
                Date de réservation
                <AppInput
                  type="date"
                  className="form-control mt-2"
                  name="date"
                  value={date}
                  onChange={handleEateryReservationChange}
                  errorMessage={date !== '' ? InputValidators.date(date) : null}
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
                  className="form-control mt-2 d-block"
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
