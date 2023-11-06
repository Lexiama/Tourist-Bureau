// populate catergories for the select menu
function populateCategories() {
  for (var i = 0; i < categories.length; i++) {
    var option = document.createElement("option");
    option.value = categories[i];
    option.innerText = categories[i];
    document.getElementById("categoryDropdown").appendChild(option);
  }
}


populateCategories(); 
const catergoriesSelect = document.getElementById("categoryDropdown"); 
catergoriesSelect.addEventListener("change", function(event) {
  const category = event.target.value; 
  populateActivities(category); 
});

// populate activities for the selected category

function populateActivities(category) {
    const filteredActivities = activities.filter(function(activity) {
      return activity.category === category; 
    });
    
    document.getElementById("activityDropdown").innerHTML = "<option value='Select one' selected>Select one</option>";

    for (var i = 0; i < filteredActivities.length; i++) {
        var option = document.createElement("option");
        option.value = filteredActivities[i].name;
        option.innerText = filteredActivities[i].name;
        document.getElementById("activityDropdown").appendChild(option);
      }
}