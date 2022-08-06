import InputErrorMessages from '@/constants/InputErrorMessages';

const phoneValidator = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
const emailValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const InputFormatters = {
  phone: {
    format: (phone: string): string => {
      const config = {
        first: InputFormatters.phone.unformat(phone).slice(0, 4),
        second: InputFormatters.phone.unformat(phone).slice(4, 7),
        third: InputFormatters.phone.unformat(phone).slice(7, 10),
      };

      if (config.third) {
        return `${config.first} ${config.second} ${config.third}`;
      }

      if (config.second) {
        return `${config.first} ${config.second}`;
      }

      return `${config.first}`;
    },
    unformat: (phone: string): string => phone.split(' ').join(''),
  },
};

export const InputValidators: Record<string, (value:any) => InputErrorMessages | null> = {
  firstName: (firstName?: string) => {
    if (!firstName || firstName.length === 0) {
      return InputErrorMessages.FIRST_NAME_EMPTY;
    }
    if (firstName.length < 3) {
      return InputErrorMessages.FIRST_NAME_TO_SHORT;
    }
    if (firstName.length > 30) {
      return InputErrorMessages.FIRST_NAME_TO_LONG;
    }
    return null;
  },
  lastName: (lastName?: string) => {
    if (!lastName || lastName.length === 0) {
      return InputErrorMessages.LAST_NAME_EMPTY;
    }
    if (lastName.length < 3) {
      return InputErrorMessages.LAST_NAME_TO_SHORT;
    }
    if (lastName.length > 30) {
      return InputErrorMessages.LAST_NAME_TO_LONG;
    }
    return null;
  },
  subject: (subject?: string) => {
    if (!subject || subject.length === 0) {
      return InputErrorMessages.SUBJECT_EMPTY;
    }
    if (subject.length < 10) {
      return InputErrorMessages.SUBJECT_TO_SHORT;
    }
    if (subject.length > 50) {
      return InputErrorMessages.SUBJECT_TO_LONG;
    }
    return null;
  },
  message: (message?: string) => {
    if (!message || message.length === 0) {
      return InputErrorMessages.MESSAGE_EMPTY;
    }
    if (message.length < 15) {
      return InputErrorMessages.MESSAGE_TO_SHORT;
    }
    if (message.length > 700) {
      return InputErrorMessages.MESSAGE_TO_LONG;
    }
    return null;
  },
  phone: (phone?: string) => {
    if (!phone || phone.length === 0) {
      return InputErrorMessages.PHONE_EMPTY;
    }

    if (!phoneValidator.test(phone)) {
      return InputErrorMessages.PHONE_INVALID;
    }

    return null;
  },
  email: (email?: string) => {
    if (!email || email.length === 0) {
      return InputErrorMessages.EMAIL_EMPTY;
    }

    if (!emailValidator.test(email)) {
      return InputErrorMessages.EMAIL_INVALID;
    }

    return null;
  },
  customerCount: (count? :number) => {
    if (!count || count < 1) {
      return InputErrorMessages.NO_CUSTOMER_COUNT;
    }

    return null;
  },
  adultCount: (count? :number) => {
    if (!count || count < 1) {
      return InputErrorMessages.NO_ADULT_COUNT;
    }

    return null;
  },
  childrenCount: (childrenCount?: number) => {
    if (!childrenCount || childrenCount > 8) {
      return InputErrorMessages.TOO_MUCH_CUSTOMER_COUNT;
    }

    return null;
  },
  startDate: (date?: string) => {
    if (!date || date === '') {
      return InputErrorMessages.START_DATE_EMPTY;
    }
    if (!Date.parse(date)) {
      return InputErrorMessages.START_DATE_INVALID;
    }

    return null;
  },
  endDate: (date?: string) => {
    if (!date || date === '') {
      return InputErrorMessages.END_DATE_EMPTY;
    }
    if (!Date.parse(date)) {
      return InputErrorMessages.END_DATE_INVALID;
    }

    return null;
  },
};
