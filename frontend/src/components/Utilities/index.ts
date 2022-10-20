export const arrMonths = [
  "Notifiche positive",
  "Notifiche negative",
  "Notifiche da rinotificare",
  "Notifiche di ritorno",
  "Atti Annullati",
  "Atti rettificati",
];
export const arrMonths1 = [
  "Gen",
  "Feb",
  "Mar",
  "Apr",
  "Mag",
  "Giu",
  "Lug",
  "Ago",
  "Set",
  "Ott",
  "Nov",
  "Dic",
];

export const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8000"
    : "http://172.16.6.43";

export const faseCurrent = (current: string | number) => {
  let fase =
    (current === 1 && "Mediazione") ||
    (current === 2 && "Ricorso 1°") ||
    (current === 3 && "Ricorso 2°") ||
    (current === 4 && "Cassazione");
  return fase;
};

export const isTextarea = (id: number) => {
  if (id === 13 || id === 15 || id === 18) {
    return true;
  }
};

export const funFormatDate = (str: string) => {
  if (str === "") return "The date was not found!";

  let myDate = new Date(str);
  let utc = `${myDate.getDate()}.${myDate.getMonth()}.${myDate.getFullYear()}`;

  return utc;
};

export function validate(values: string) {
  let errors = { errorTitle: "" };
  if (!values) {
    errors.errorTitle = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values)) {
    errors.errorTitle = "Email address is invalid";
  }

  return errors;
}

export function formatDate(date: string) {
  if (date === "") return "The date was not found!";
  let time = new Date(date);
  let timeNow = new Date().getDay();

  let day = time.getDay();
  let hours = time.getHours();

  let minutes = time.getMinutes();
  return ` ${day === timeNow ? "Today" : "Yesterday"} ${
    hours < 10 ? "0" + hours : hours
  }:${minutes < 10 ? "0" + minutes : minutes}`;
}
