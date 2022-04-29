import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import { MutateRoomPayload, mutateRoomReservation } from '../../store/slices/Reservation';
import { getMonth } from '../../utils/dateUtils';

export default function StartReservationForm() {
  const {
    adultCount,
    childrenCount,
    startDate,
    endDate,
  } = useAppSelector((state) => state.reservation.room);
  const dispatch = useAppDispatch();
  const { push } = useRouter();

  const handleAddPersons = () => {
    dispatch(mutateRoomReservation({ name: 'adultCount', value: adultCount + 1 }));
  };
  const handleRemovePersons = () => {
    dispatch(mutateRoomReservation({ name: 'adultCount', value: adultCount - 1 }));
  };
  const handleSetDate = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    dispatch(mutateRoomReservation({ name: currentTarget.name as MutateRoomPayload['name'], value: currentTarget.value }));
  };

  const totalPersonsCount: number = adultCount + childrenCount;

  return (
    <section className="container">
      <div className="booking_area">
        <form>
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-6">
              <label
                className="booking_item"
                htmlFor="fromInput"
              >
                <p>Arrivé</p>
                <div>
                  <input
                    type="date"
                    id="fromInput"
                    name="startDate"
                    onChange={handleSetDate}
                    min={Date.now()}
                  />
                  <span className="day">
                    {startDate === '' ? ' --' : startDate.split('-')[2]}
                  </span>
                  <span className="month">
                    {startDate === '' ? ' --' : getMonth(startDate)}
                  </span>
                </div>
              </label>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
              <label className="booking_item" htmlFor="toInput">
                <p>Départ</p>
                <div>
                  <input
                    type="date"
                    id="toInput"
                    name="endDate"
                    onChange={handleSetDate}
                    min={startDate}
                  />
                  <span className="day">
                    {endDate === '' ? ' --' : endDate.split('-')[2]}
                  </span>
                  <span className="month">
                    {endDate === '' ? ' --' : getMonth(endDate)}
                  </span>
                </div>
              </label>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="booking_item">
                <p>Nombre d&apos;invités</p>
                <span className="day">
                  { totalPersonsCount }
                </span>
                <span className="month">person</span>
              </div>
              <div className="d-flex justify-content-center">
                <input
                  type="button"
                  value="-"
                  onClick={handleRemovePersons}
                  className="btn btn-primary m-1"
                  disabled={totalPersonsCount <= 1}
                />
                <input
                  type="button"
                  value="+"
                  onClick={handleAddPersons}
                  className="btn btn-primary m-1"
                  disabled={totalPersonsCount > 8}
                />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6 coupon-code d-flex justify-content-center align-items-center">
              <div className="d-grid gap-2">
                <Link href="/contact">
                  <a className="btn btn-outline-primary text-uppercase"> Une question ? </a>
                </Link>
                <button
                  type="button"
                  className="btn btn-primary text-uppercase"
                  onClick={() => { push('/reserver'); }}
                >
                  Je Réserve
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
