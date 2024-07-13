/**
  * vue-cal v4.8.1
  * (c) 2022 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const a = ["Ponedeljak", "Utorak", "Sreda", "\u010Cetvrtak", "Petak", "Subota", "Nedelja"], e = ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"], d = "Godine", t = "Godina", r = "Mesec", n = "Sedmica", s = "Dan", o = "Danas", i = "Nema doga\u0111aja", l = "Celi dan", m = "Obri\u0161i", M = "Kreiraj doga\u0111aj", y = "dddd D MMMM YYYY", D = { weekDays: a, months: e, years: "Godine", year: "Godina", month: "Mesec", week: "Sedmica", day: "Dan", today: "Danas", noEvent: "Nema doga\u0111aja", allDay: "Celi dan", deleteEvent: "Obri\u0161i", createEvent: "Kreiraj doga\u0111aj", dateFormat: "dddd D MMMM YYYY" };
export {
  l as allDay,
  M as createEvent,
  y as dateFormat,
  s as day,
  D as default,
  m as deleteEvent,
  r as month,
  e as months,
  i as noEvent,
  o as today,
  n as week,
  a as weekDays,
  t as year,
  d as years
};
