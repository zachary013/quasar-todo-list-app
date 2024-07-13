/**
  * vue-cal v4.8.1
  * (c) 2022 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const e = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "L\xF8rdag", "S\xF8ndag"], a = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"], d = "Velg \xE5r", s = "\xC5r", n = "M\xE5ned", r = "Uke", t = "Dag", g = "Idag", l = "Ingen hendelse", o = "Hele dagen", y = "Ta bort", M = "Ny hendelse", m = "dddd, D. MMMM YYYY", D = { weekDays: e, months: a, years: "Velg \xE5r", year: "\xC5r", month: "M\xE5ned", week: "Uke", day: "Dag", today: "Idag", noEvent: "Ingen hendelse", allDay: "Hele dagen", deleteEvent: "Ta bort", createEvent: "Ny hendelse", dateFormat: "dddd, D. MMMM YYYY" };
export {
  o as allDay,
  M as createEvent,
  m as dateFormat,
  t as day,
  D as default,
  y as deleteEvent,
  n as month,
  a as months,
  l as noEvent,
  g as today,
  r as week,
  e as weekDays,
  s as year,
  d as years
};
