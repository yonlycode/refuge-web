import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactChild } from 'react';

import LeftSideReservationFormLinks from '@/constants/LeftSideReservationFormLinks';

type ReservationFormManagerProps = {
  children: ReactChild
}

export default function ReservationFormManager({ children }: ReservationFormManagerProps) {
  const { route } = useRouter();
  return (
    <section className="mt-50 row section_gap_top">
      <div className="d-flex">
        <ul id="form-navigation" className="nav">
          {LeftSideReservationFormLinks.map(({
            url, label, content,
          }) => (
            <li key={`reservation-links-${label}`} className={`nav-item ${route === url ? 'active' : ''}`}>
              <Link href={url}>
                <a
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title={label}
                  className="nav-link d-flex justify-content-center align-items-center h-100"
                  aria-current="page"
                >
                  <i className={content} />
                </a>
              </Link>
            </li>

          ))}
        </ul>
        <div id="formContainer row w-100">
          {children}
        </div>
      </div>
    </section>
  );
}
