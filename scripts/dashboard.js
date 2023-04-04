const data = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
];

new Chart(document.getElementById("chart-one"), {
  type: "bar",
  options: {
    animation: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  },
  data: {
    labels: data.map((row) => row.year),
    datasets: [
      {
        label: "Acquisitions by year",
        data: data.map((row) => row.count),
      },
    ],
  },
});

new Chart(document.getElementById("chart-two"), {
  type: "bar",
  options: {
    animation: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  },
  data: {
    labels: data.map((row) => row.year),
    datasets: [
      {
        label: "Acquisitions by year",
        data: data.map((row) => row.count),
      },
    ],
  },
});

new Chart(document.getElementById("chart-three"), {
  type: "bar",
  options: {
    animation: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  },
  data: {
    labels: data.map((row) => row.year),
    datasets: [
      {
        label: "Acquisitions by year",
        data: data.map((row) => row.count),
      },
    ],
  },
});

new Chart(document.getElementById("chart-four"), {
  type: "bar",
  options: {
    animation: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  },
  data: {
    labels: data.map((row) => row.year),
    datasets: [
      {
        label: "Acquisitions by year",
        data: data.map((row) => row.count),
      },
    ],
  },
});

$(function () {
  $(".sidebar-placeholder").load("../sidebar.html");
  $(".navbar-top-placeholder").load("../navbarTop.html");
  $(".navbar-bottom-placeholder").load("../navbarBottom.html");
  $("#new-transaction-modal-placeholder").load(
    "../modals/addNewTransaction.html"
  );
});
