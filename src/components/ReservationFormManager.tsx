/* eslint-disable react/no-danger */

import { useRouter } from 'next/router';
import EateryReservationForm from './EateryReservationForm';

const LeftSideNavigationLinks = [
  {
    name: 'room',
    label: 'Réserver un gîte',
    url: '/reserver/gites',
    content: '<i class="fa fa-home"></i>',
  },
  {
    name: 'eatery',
    label: 'Réserver un couvert',
    url: '/reserver/restaurant',
    content: '<i class="fas fa-utensils"></i>',
  },
];

export default function ReservationFormManager() {
  const { route } = useRouter();

  return (
    <section className="container mt-50 row">
      <div className="d-flex">
        <ul id="form-navigation" className="nav">
          {LeftSideNavigationLinks.map(({
            url, label, content,
          }) => (
            <li className={`nav-item ${route.includes(url) ? 'active' : ''}`}>
              <div
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title={label}
                className="nav-link d-flex justify-content-center align-items-center"
                aria-current="page"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </li>
          ))}
        </ul>

        <div id="formContainer row">
          <EateryReservationForm />
        </div>
      </div>
    </section>
  );
}
