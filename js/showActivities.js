const Activityshowbtn = document.getElementById("activity-btn");
const Activityshowdiv = document.getElementById("activity-div");

function showActivities() {
  if (Activityshowdiv.innerHTML === "") {
    Activityshowdiv.innerHTML = `<p style="margin-top:2em">activities performed will be shown here</p>
    <p>see contests helding in our company in main page</p>`;
  } else {
    Activityshowdiv.innerHTML = "";
  }
}

Activityshowbtn.addEventListener("click", showActivities);
