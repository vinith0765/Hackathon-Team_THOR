const labels_2 = [
  "On apps",
  "On websites",
  "On our products",
  "On our Services",
  "On our applications",
  "On our transport",
];

const data_2 = {
  labels: labels_2,
  datasets: [
    {
      label: "New Deals",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [36, 1, 5, 2, 20, 30, 45],
    },
  ],
};

const config_2 = {
  type: "bar",
  data: data_2,
  options: {},
};

const myChart2 = new Chart(document.getElementById("myChart2"), config_2);
