const labels_3 = [
  "On apps",
  "On websites",
  "On our products",
  "On our Services",
  "On our applications",
  "On our transport",
];

const data_3 = {
  labels: labels_3,
  datasets: [
    {
      label: "Deals",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [36, 1, 5, 2, 20, 30, 45],
    },
  ],
};

const config3 = {
  type: "line",
  data: data_3,
  options: {},
};

const myChart3 = new Chart(document.getElementById("myChart3"), config3);
