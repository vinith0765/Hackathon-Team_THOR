const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "revenue in lakhs",
      backgroundColor: "rgb(185, 226, 175)",
      borderColor: "rgb(255, 99, 132)",
      data: [20, 1, 45, 25, 20, 30, 45],
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {},
};

const myChart1 = new Chart(document.getElementById("myChart1"), config);
