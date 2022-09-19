import Link from 'next/link';
import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useRef,
  useState,
} from 'react';

export type AutoCompleteListItem = {
  url: string;
  name: string;
  description: string;
  info:string;
}

export type AppAutoCompleteProps = {
  items?: Array<AutoCompleteListItem>;
} & DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>, HTMLInputElement
>

export default function AppAutoComplete(props: AppAutoCompleteProps) {
  const {
    items,
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [dropdownState, setDropdownState] = useState<boolean>(false);

  const mappedProps = { ...props };
  delete mappedProps.items;

  return (
    <span className="app-auto-complete">
      <div className="input-group">

        <div className="w-100">
          <input
            type="text"
            className="form-control"
            ref={inputRef}
            onBlur={() => setDropdownState(false)}
            onFocus={() => setDropdownState(true)}
            {...mappedProps}
          />
        </div>

        <div className="list-group" style={{ visibility: dropdownState ? 'visible' : 'hidden' }}>
          {items && items.map(({
            url,
            name,
            info,
            description,
          }) => (
            <Link href={url} key={url}>
              <a
                className="list-group-item list-group-item-action"
                aria-current="true"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{name}</h5>
                  <small>{info}</small>
                </div>
                <small>{description}</small>
              </a>
            </Link>
          ))}
        </div>
      </div>

      {/*
      <ul className={`dropdown-menu ${dropdownState ? 'hide show' : 'hide'}`}>
        {items && items.map((el, key: number) => (
          <li key={`${el.value}-${key + 1}`}>
            <Link href={el.value}>
              <a className="dropdown-item">{el.label}</a>
            </Link>
          </li>
        ))}
      </ul>
      */}
    </span>
  );
}
