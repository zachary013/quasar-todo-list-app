/**
  * vue-cal v4.8.1
  * (c) 2022 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const a = ["Ponedjeljak", "Utorak", "Srijeda", "\u010Cetvrtak", "Petak", "Subota", "Nedjelja"], e = ["Sije\u010Danj", "Velja\u010Da", "O\u017Eujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"], n = "Godine", d = "Godina", t = "Mjesec", j = "Tjedan", o = "Dan", s = "Dana\u0161nji dan", i = "Nema doga\u0111aja", r = "Cijeli dan", l = "Obri\u0161i", y = "Kreiraj doga\u0111aj", D = "dddd D MMMM YYYY", M = { weekDays: a, months: e, years: "Godine", year: "Godina", month: "Mjesec", week: "Tjedan", day: "Dan", today: "Dana\u0161nji dan", noEvent: "Nema doga\u0111aja", allDay: "Cijeli dan", deleteEvent: "Obri\u0161i", createEvent: "Kreiraj doga\u0111aj", dateFormat: "dddd D MMMM YYYY" };
export {
  r as allDay,
  y as createEvent,
  D as dateFormat,
  o as day,
  M as default,
  l as deleteEvent,
  t as month,
  e as months,
  i as noEvent,
  s as today,
  j as week,
  a as weekDays,
  d as year,
  n as years
};
