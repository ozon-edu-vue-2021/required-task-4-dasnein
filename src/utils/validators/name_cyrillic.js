function cyrillicNameValidator(val) {
  const re = new RegExp("^[а-яА-Я]+$", "i");

  return re.test(val);
}

export default cyrillicNameValidator;
