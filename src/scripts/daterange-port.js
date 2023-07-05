$(document).ready(function () {
  moment.locale("pt"); // Define o idioma como português
  moment.updateLocale("pt", {
    months: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    monthsShort: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    weekdays: [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ],
    weekdaysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    weekdaysMin: ["D", "S", "T", "Q", "Q", "S", "S"],
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D [de] MMMM [de] YYYY",
      LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
      LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm",
    },
    invalidDate: "Data inválida",
    invalidRange: "Intervalo de datas inválido",
    relativeTime: {
      future: "em %s",
      past: "%s atrás",
      s: "segundos",
      m: "um minuto",
      mm: "%d minutos",
      h: "uma hora",
      hh: "%d horas",
      d: "um dia",
      dd: "%d dias",
      M: "um mês",
      MM: "%d meses",
      y: "um ano",
      yy: "%d anos",
    },
    ordinal: function (number) {
      return number + "º";
    },
    week: {
      dow: 1, // Segunda-feira é o primeiro dia da semana
      doy: 4, // O primeiro dia do ano é uma quarta-feira
    },
  });

  $('input[name="daterange"]').daterangepicker({
    autoApply: true,
  });
});
