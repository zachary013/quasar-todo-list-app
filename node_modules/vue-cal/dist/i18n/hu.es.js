/**
  * vue-cal v4.8.1
  * (c) 2022 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const e = ["H\xE9tfo", "Kedd", "Szerda", "Cs\xFCt\xF6rt\xF6k", "P\xE9ntek", "Szombat", "Vas\xE1rnap"], a = ["Janu\xE1r", "Febru\xE1r", "M\xE1rcius", "\xC1prilis", "M\xE1jus", "J\xFAnius", "J\xFAlius", "Augusztus", "Szeptember", "Okt\xF3ber", "November", "December"], s = "\xC9vek", t = "\xC9v", n = "H\xF3nap", r = "H\xE9t", d = "Nap", y = "Mai nap", o = "Nincs esem\xE9ny", m = "Eg\xE9sz nap", l = "Esem\xE9ny t\xF6rlese", p = "Esem\xE9ny l\xE9trehoz\xE1sa", M = "dddd D MMMM YYYY", E = { weekDays: e, months: a, years: "\xC9vek", year: "\xC9v", month: "H\xF3nap", week: "H\xE9t", day: "Nap", today: "Mai nap", noEvent: "Nincs esem\xE9ny", allDay: "Eg\xE9sz nap", deleteEvent: "Esem\xE9ny t\xF6rlese", createEvent: "Esem\xE9ny l\xE9trehoz\xE1sa", dateFormat: "dddd D MMMM YYYY" };
export {
  m as allDay,
  p as createEvent,
  M as dateFormat,
  d as day,
  E as default,
  l as deleteEvent,
  n as month,
  a as months,
  o as noEvent,
  y as today,
  r as week,
  e as weekDays,
  t as year,
  s as years
};
