import { ChangeEvent, FormEvent } from 'react';

import { IRoomReservation } from '@/core/ReservationRequest/RoomReservation';
import { RootState, useAppDispatch, useAppSelector } from '@/store';
import { mutateRoomReservation, sendRoomReservation } from '@/store/slices/Reservation';
import { InputFormatters, InputValidators } from '@/utils/InputUtils';

import AppIncrementCounter from '@/components/Common/AppIncrementCounter';
import AppInput from '@/components/Common/AppInput';
import AppLoadingBackdrop from '@/components/Common/AppLoadingBackdrop';
import AppTextarea from '@/components/Common/AppTextarea';

export default function RoomReservationForm() {
  const {
    reservation,
    isSending,
  } = useAppSelector((state: RootState) => state.reservation.room);
  const dispatch = useAppDispatch();

  const {
    adultCount,
    childrenCount,
    startDate,
    endDate,
    email,
    firstName,
    lastName,
    message,
    phone,
  } = reservation;

  const isRoomReservationFormValid = (
    !InputValidators.adultCount(adultCount)
    && !InputValidators.childrenCount(childrenCount)
    && !InputValidators.startDate(startDate)
    && !InputValidators.endDate(endDate)
    && !InputValidators.email(email)
    && !InputValidators.firstName(firstName)
    && !InputValidators.lastName(lastName)
    && !InputValidators.phone(phone)
  );

  const handleRoomReservationChange = (
    { currentTarget }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (currentTarget.name as keyof IRoomReservation === 'phone') {
      dispatch(mutateRoomReservation({
        name: currentTarget.name as keyof IRoomReservation,
        value: InputFormatters.phone.format(currentTarget.value),
      }));

      return;
    }
    dispatch(mutateRoomReservation({
      name: currentTarget.name as keyof IRoomReservation,
      value: currentTarget.value,
    }));
  };
  const handleChangeAdultCount = (value: number) => {
    dispatch(mutateRoomReservation({
      name: 'adultCount',
      value,
    }));
  };
  const handleChangeChildrenCount = (value: number) => {
    dispatch(mutateRoomReservation({
      name: 'childrenCount',
      value,
    }));
  };
  const handleRoomReservationSending = async () => {
    if (isRoomReservationFormValid) {
      await dispatch(sendRoomReservation());
    }
  };
  const handleRoomReservationSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleRoomReservationSending();
  };

  return (
    <>
      { isSending && <AppLoadingBackdrop />}
      <div className="container-fluid border rounded shadow-lg p-5 bg-body">
        <h2 className="mb-3 text-center m-1">
          Réserver une chambre:
        </h2>
        <form
          className="needs-validation"
          onSubmit={handleRoomReservationSubmit}
        >
          <div className="row g-3">
            <div className="col-md-6">
              <label
                htmlFor="firstName"
                className="form-label d-block"
              >
                Prénom
                <AppInput
                  type="text"
                  className="form-control"
                  name="firstName"
                  onChange={handleRoomReservationChange}
                  value={firstName}
                  errorMessage={firstName !== '' ? InputValidators.firstName(firstName) : null}
                />
              </label>
            </div>
            <div className="col-md-6">
              <label
                htmlFor="lastName"
                className="form-label d-block"
              >
                Nom
                <AppInput
                  type="text"
                  className="form-control"
                  name="lastName"
                  onChange={handleRoomReservationChange}
                  value={lastName}
                  errorMessage={lastName !== '' ? InputValidators.lastName(lastName) : null}
                />
              </label>
            </div>
            <div className="col-md-6">
              <label
                htmlFor="email"
                className="form-label d-block"
              >
                Email
                <AppInput
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  placeholder="you@example.com"
                  onChange={handleRoomReservationChange}
                  errorMessage={email !== '' ? InputValidators.email(email) : null}
                />
              </label>
            </div>
            <div className="col-md-6">
              <label
                htmlFor="phone"
                className="form-label d-block"
              >
                Telephone
                <AppInput
                  type="telephone"
                  className="form-control"
                  name="phone"
                  value={phone}
                  placeholder="06XX XXX XXX"
                  onChange={handleRoomReservationChange}
                  errorMessage={phone !== '' ? InputValidators.phone(phone) : null}

                />
              </label>
            </div>
            <div className="col-md-6">
              <label
                htmlFor="adultCount"
                className="form-label d-block"
              >
                Nombre d&apos;adultes
                <AppIncrementCounter
                  className="form-control"
                  id="adultCount"
                  name="adultCount"
                  value={adultCount}
                  onIncrement={handleChangeAdultCount}
                  onDecrement={handleChangeAdultCount}
                  errorMessage={adultCount !== 0 ? InputValidators.adultCount(adultCount) : null}
                />
              </label>
            </div>
            <div className="col-md-6">
              <label
                htmlFor="childrenCount"
                className="form-label d-block"
              >
                Nombre d&apos;enfants
                <AppIncrementCounter
                  className="form-control"
                  name="childrenCount"
                  id="childrenCount"
                  value={childrenCount}
                  onIncrement={handleChangeChildrenCount}
                  onDecrement={handleChangeChildrenCount}
                  errorMessage={childrenCount !== 0
                    ? InputValidators.childrenCount(childrenCount) : null}
                />
              </label>
            </div>
            <div className="col-md-6">
              <label htmlFor="date" className="form-label d-block">
                Début du séjour:
                <AppInput
                  type="date"
                  className="form-control"
                  name="startDate"
                  min={Date.now()}
                  value={startDate}
                  onChange={handleRoomReservationChange}
                />
              </label>
            </div>
            <div className="col-md-6">
              <label htmlFor="date" className="form-label d-block">
                Fin du séjour:
                <AppInput
                  type="date"
                  className="form-control"
                  name="endDate"
                  value={endDate}
                  min={startDate}
                  onChange={handleRoomReservationChange}
                />
              </label>
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label d-block">
                Informations complémentaires
                <AppTextarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={message}
                  rows={3}
                  onChange={handleRoomReservationChange}
                />
              </label>
            </div>
          </div>
          <button
            className="w-100 btn btn-primary btn-lg mt-25"
            type="submit"
            onClick={handleRoomReservationSending}
            disabled={isSending || !isRoomReservationFormValid}
          >
            {isSending ? 'Envoie en cours...' : 'Envoyer'}
          </button>
        </form>
      </div>
    </>

  );
}
