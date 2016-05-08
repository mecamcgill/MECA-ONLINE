var data = [{
  id: "9349238",
  points: "10"
}, {
  id: "3332",
  points: "23"
}, {
  id: "22324",
  points: "123"
}, {
  id: "243432",
  points: "23"
}, {
  id: "23",
  points: "343344"
}, ];

document.getElementById("searchBtn").addEventListener('click', function() {
  var formInput = document.getElementById("formInput").value,
    foundItem = null; 

  for (i = 0; i < data.length; i++) {
    if (data[i].id == formInput) {
      foundItem = data[i];
      break;
    }
  }

  if (foundItem) {
    document.getElementById("results").innerHTML = "You have " + foundItem.points + " Points! ";
  } else {
    document.getElementById("results").innerHTML = "Cannot find user";
  }
});
