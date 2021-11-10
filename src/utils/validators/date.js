import moment from "moment";

function birthDateValidator(d) {
  const date = moment(d.split(".").reverse().join("-")).unix();
  const now = moment().unix();

  return date < now;
}

export default birthDateValidator;
