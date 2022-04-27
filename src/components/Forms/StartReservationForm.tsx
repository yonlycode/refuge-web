import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../store';
import { mutateRoomReservation } from '../../store/slices/Reservation';

export default function StartReservationForm() {
  const {
    adultCount, childrenCount,
  } = useAppSelector((state) => state.reservation.room);
  const dispatch = useAppDispatch();
  const totalPersonsCount = adultCount + childrenCount;

  const handleAddPersons = () => {
    dispatch(mutateRoomReservation({ name: 'adultCount', value: adultCount + 1 }));
  };
  const handleRemovePersons = () => {
    dispatch(mutateRoomReservation({ name: 'adultCount', value: adultCount - 1 }));
  };

  return (
    <section className="container">
      <div className="booking_area">
        <form>
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-6" id="start-reservation-from-container">
              <div className="booking_item">
                <p>Arrivé</p>
                <div id="start-reservation-from-input-display">
                  <span className="day">--</span>
                  <span className="month">--</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6" id="start-reservation-to-container">
              <div className="booking_item">
                <p>Départ</p>
                <div id="start-reservation-to-input-display">
                  <span className="day">--</span>
                  <span className="month">--</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="booking_item">
                <p>Nombre d&apos;invités</p>
                <span className="day" id="start-reservation-count-input-display">
                  {totalPersonsCount }
                </span>
                <span className="month">person</span>
              </div>
              <div className="d-flex justify-content-center">
                <input
                  type="button"
                  value="-"
                  onClick={handleRemovePersons}
                  className="btn btn-primary m-1"
                />
                <input
                  type="button"
                  value="+"
                  onClick={handleAddPersons}
                  className="btn btn-primary m-1"
                />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6 coupon-code d-flex justify-content-center align-items-center">
              <div className="d-grid gap-2">
                <Link href="/contact">
                  <a className="btn btn-outline-primary text-uppercase" type="button"> Une question ? </a>
                </Link>
                <button type="button" className="btn btn-primary text-uppercase" disabled id="start-reservation-button">
                  Je Réserve
                </button>
              </div>
              {/* <div
            className="booking_item d-flex flex-column justify-content-center align-items-center"
              >
                            <p className="text-capitalize">
                                <a href="/contact">
                                    Une question ?
                                </a>
                            </p>
                            <button
                                disabled='true'
                                id="start-reservation-button"
                                className="btn btn-primary text-uppercase"
                            >
                                Je Réserve
                            </button>
                </div> */}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
