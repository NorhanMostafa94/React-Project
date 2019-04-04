export const validateEmail = emailVal => {
  // eslint-disable-next-line
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(emailVal);
};

export const isEmpty = thing => {
  let empty = false;

  switch (typeof thing) {
    case "undefined":
      empty = true;
      break;
    case "string":
      if (thing.trim().length === 0) {
        empty = true;
      }
      if (/\s/.test(thing)) {
        empty = true;
      }
      break;
    case "object":
      if (thing === null) {
        empty = true;
      } else if (Object.keys(thing).length === 0) {
        empty = true;
      }
      break;
    default:
      break;
  }

  return empty;
};

export const length = thing => {
  let len = false;
  if (thing.length < 3) {
    len = false;
  } else {
    len = true;
  }
  return len;
};
