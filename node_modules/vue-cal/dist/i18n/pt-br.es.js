/**
  * vue-cal v4.8.1
  * (c) 2022 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const e = ["Segunda-feira", "Ter\xE7a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S\xE1bado", "Domingo"], a = ["Janeiro", "Fevereiro", "Mar\xE7o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], o = "Anos", t = "Ano", r = "M\xEAs", n = "Semana", s = "Dia", i = "Hoje", d = "Sem eventos", m = "Dia inteiro", v = "Remover", D = "Criar um evento", M = "dddd D MMMM YYYY", y = { weekDays: e, months: a, years: "Anos", year: "Ano", month: "M\xEAs", week: "Semana", day: "Dia", today: "Hoje", noEvent: "Sem eventos", allDay: "Dia inteiro", deleteEvent: "Remover", createEvent: "Criar um evento", dateFormat: "dddd D MMMM YYYY" };
export {
  m as allDay,
  D as createEvent,
  M as dateFormat,
  s as day,
  y as default,
  v as deleteEvent,
  r as month,
  a as months,
  d as noEvent,
  i as today,
  n as week,
  e as weekDays,
  t as year,
  o as years
};
