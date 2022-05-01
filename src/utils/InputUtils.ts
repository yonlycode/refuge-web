import InputErrorMessages from '../constants/InputErrorMessages';

export const InputValidators = {
  firstName: (firstName :string) => {
    if (firstName.length === 0) {
      return InputErrorMessages.firstNameEmpty;
    }
    if (firstName.length < 3) {
      return InputErrorMessages.firstNameToShort;
    }
    if (firstName.length > 30) {
      return InputErrorMessages.firstNameToLong;
    }
    return null;
  },
  lastName: (lastName: string) => {
    if (lastName.length === 0) {
      return InputErrorMessages.lastNameEmpty;
    }
    if (lastName.length < 3) {
      return InputErrorMessages.lastNameToShort;
    }
    if (lastName.length > 30) {
      return InputErrorMessages.lastNameToLong;
    }
    return null;
  },
  subject: (subject: string) => {
    if (subject.length === 0) {
      return InputErrorMessages.subjectEmpty;
    }
    if (subject.length < 10) {
      return InputErrorMessages.subjectToShort;
    }
    if (subject.length > 50) {
      return InputErrorMessages.subjectToLong;
    }
    return null;
  },
  message: (message: string) => {
    if (message.length === 0) {
      return InputErrorMessages.messageEmpty;
    }
    if (message.length < 15) {
      return InputErrorMessages.messageToShort;
    }
    if (message.length > 700) {
      return InputErrorMessages.messageToLong;
    }
    return null;
  },
  phone: (phone: string) => {
    if (phone.length === 0) {
      return InputErrorMessages.phoneEmpty;
    }

    const validation = /^(?:\+33\s|0)[1-9](?:\s\d{2}){4}$/;
    if (!validation.test(phone)) {
      return InputErrorMessages.phoneInvalid;
    }

    return null;
  },
  email: (email: string) => {
    if (email.length === 0) {
      return InputErrorMessages.emailEmpty;
    }

    const validation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!validation.test(email)) {
      return InputErrorMessages.emailInvalid;
    }

    return null;
  },
};

// TODO - implement this
export const InputFormatters = {
  phone: {
    format: (/* phone: string */): string => '',
    unformat: (/* phone: string */) :string => '',
  },
};
