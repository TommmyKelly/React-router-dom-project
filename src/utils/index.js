export const getDate = (inputDate) => {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;

  let dt = date.getDate();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return dt + "-" + month + "-" + year;
};

export const getLink = (input) => {
  if (input === undefined) return;
  const str = input;
  const link = str.split(" ").join("%20");

  return link;
};
