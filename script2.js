//Road Trip Cost

var main2 = function (input) {
  var petrolCost = 2.2;
  var distanceInKMPerMetre = 9;
  var totalCost = (input / distanceInKMPerMetre) * petrolCost;
  return `It will cost you $${totalCost} to travel ${input}km in the ferrari! `;
};

// Beer Order

function main(input) {
  var perCustomerPints = 2;
  var quarterDays = 90;
  var perBarrelKegPints = 124;
  var barrelKegsPerQuarter =
    (input * perCustomerPints * quarterDays) / perBarrelKegPints;
  var perDayKegsRequired = barrelKegsPerQuarter / 90;
  return `If you have an estimated of ${input} customers a day, you will require ${barrelKegsPerQuarter} half-barrel kegs every quarter, which averages down to ${perDayKegsRequired} half-barrel kegs a day!`;
}
