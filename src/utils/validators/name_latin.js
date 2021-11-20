function latinNameValidator(val) {
  const re = new RegExp("^[a-zA-Z]+$", "i");

  return re.test(val);
}

export default latinNameValidator;
