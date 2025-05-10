//Write your code here



//Needed for the tests to work. Don't modify

const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};
function logAttendeeName(attendee) {
  console.log(attendee.name);
}

logAttendeeName(attendee);

function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

logTicketPrice(attendee);

function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
}

updateTicketType(attendee, "Standard");
console.log(attendee.ticketType);

function removeEventProperty(attendee) {
  delete attendee.event;
  console.log("Event property removed:", attendee);
}

removeEventProperty(attendee);
console.log(attendee.event);

function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}

addCheckedInProperty(attendee);
console.log(attendee.checkedIn);

module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};

