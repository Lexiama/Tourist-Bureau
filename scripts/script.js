let activityPrice= 0;
let activityName = "";




// populate catergories for the select menu
function populateCategories() {
  for (var i = 0; i < categories.length; i++) {
    var option = document.createElement("option");
    option.value = categories[i];
    option.innerText = categories[i];
    document.getElementById("categoryDropdown").appendChild(option); // like push 
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



const activitiesSelect = document.getElementById("activityDropdown"); 
activitiesSelect.addEventListener("change", function(event) {
  const activity = event.target.value; 
  populateActivityDetails(activity); 
});

function populateActivityDetails(name) { 
  const filteredActivities = activities.filter(function(activity) {
    return activity.name === name; 
  });
   
    document.getElementById("activityId").innerText = filteredActivities[0].id;
    document.getElementById("activityName").innerText = filteredActivities[0].name;
    document.getElementById("activityDescription").innerText = filteredActivities[0].description;
    document.getElementById("activityLocation").innerText = filteredActivities[0].location;
    document.getElementById("activityPrice").innerText = filteredActivities[0].price;

    activityPrice = filteredActivities[0].price;
    activityName = filteredActivities[0].name;

  if (filteredActivities[0].price > 0) {
        document.getElementById ("ticketPurchaseForm").style.display = "block"; 
  }
  else {
    document.getElementById ("ticketPurchaseForm").style.display = "none"; 
  }
}

// purchase tickets

const form = document.getElementById("ticketPurchaseForm");
form.addEventListener("submit", function(event) { 
event.preventDefault(); 
const numberOfTickets = document.getElementById("ticketQuantity").value;
const email = document.getElementById("email").value;
const amount = numberOfTickets * activityPrice;
const confirmationMessage = document.getElementById("purchaseMessage");
const message = `Your credit card has been charged $${amount} for ${numberOfTickets} tickets to ${activityName}. A confirmation email has been sent to ${email}.`;

confirmationMessage.innerText = message;

//"Your credit card has been charged $(amount) for (number-of- tickets) to
//(adventure-name). A confirmation email has been sent to (email)."

});