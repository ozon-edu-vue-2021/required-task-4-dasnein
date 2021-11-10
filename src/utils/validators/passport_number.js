function passportNumberValidator(value) {
  return /^\d{6}$/.test(value);
}

export default passportNumberValidator;
