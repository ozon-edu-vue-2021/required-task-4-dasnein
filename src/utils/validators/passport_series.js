function passportSeriesValidator(value) {
  return /^\d{4}$/.test(value);
}

export default passportSeriesValidator;
