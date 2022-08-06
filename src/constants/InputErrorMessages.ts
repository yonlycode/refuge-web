enum InputErrorMessages {
    FIRST_NAME_TO_SHORT = 'Votre prénom est trop court.',
    FIRST_NAME_EMPTY = 'Votre devez renseigner un prénom.',
    FIRST_NAME_TO_LONG = 'Votre prénom est trop long.',

    LAST_NAME_TO_SHORT = 'Votre nom est trop court.',
    LAST_NAME_EMPTY = 'Votre devez renseigner un nom.',
    LAST_NAME_TO_LONG = 'Votre nom est trop long.',

    SUBJECT_TO_SHORT = 'Le sujet de votre message est trop court.',
    SUBJECT_EMPTY = 'Votre devez renseigner un sujet pour votre message.',
    SUBJECT_TO_LONG = 'Le sujet de votre message est trop long.',

    MESSAGE_TO_SHORT = 'Votre message est trop court.',
    MESSAGE_EMPTY = 'Votre devez renseigner un message.',
    MESSAGE_TO_LONG = 'Votre message est trop long.',

    EMAIL_INVALID = 'Votre email n\'est pas valide.',
    EMAIL_EMPTY = 'Votre devez renseigner un email.',

    PHONE_INVALID = 'Votre numéro de téléphone est invalide.',
    PHONE_EMPTY = 'Votre devez renseigner un numéro de téléphone.',

    START_DATE_INVALID = 'Date de début de séjour invalide.',
    START_DATE_EMPTY = 'Date de début de séjour non renseignée.',

    END_DATE_INVALID = 'Date de fin de séjour invalide.',
    END_DATE_EMPTY = 'Date de fin de séjour non renseignée.',

    NO_ADULT_COUNT = 'Il faut minimum un adulte par reservation.',
    NO_CUSTOMER_COUNT = 'Il faut minimum un adulte par reservation.',

    TOO_MUCH_ADULT_COUNT = 'Il y a trop d\'enfant par rapport au nombre d\'adulte.',
    TOO_MUCH_CHILDREN_COUNT = 'Il y a trop d\'enfant par rapport au nombre d\'adulte.',
    TOO_MUCH_CUSTOMER_COUNT = 'Nous ne pouvons prendre en charge autant de personnes.',
}

export default InputErrorMessages;
