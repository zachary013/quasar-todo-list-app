/**
  * vue-cal v4.8.1
  * (c) 2022 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const a = ["\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F", "\u65E5"], e = ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], t = "\u5E74", s = "\u4ECA\u5E74", d = "\u6708", n = "\u9031", o = "\u65E5", y = "\u4ECA\u65E5", r = "\u30A4\u30D9\u30F3\u30C8\u306A\u3057", M = "\u7D42\u65E5", Y = "\u524A\u9664", l = "\u30A4\u30D9\u30F3\u30C8\u4F5C\u6210", m = "YYYY\u5E74 MMMM D\u65E5 (dddd)", D = { weekDays: a, months: e, years: "\u5E74", year: "\u4ECA\u5E74", month: "\u6708", week: "\u9031", day: "\u65E5", today: "\u4ECA\u65E5", noEvent: "\u30A4\u30D9\u30F3\u30C8\u306A\u3057", allDay: "\u7D42\u65E5", deleteEvent: "\u524A\u9664", createEvent: "\u30A4\u30D9\u30F3\u30C8\u4F5C\u6210", dateFormat: "YYYY\u5E74 MMMM D\u65E5 (dddd)" };
export {
  M as allDay,
  l as createEvent,
  m as dateFormat,
  o as day,
  D as default,
  Y as deleteEvent,
  d as month,
  e as months,
  r as noEvent,
  y as today,
  n as week,
  a as weekDays,
  s as year,
  t as years
};
