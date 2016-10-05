var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function salesTaxReport(salesData, taxRates) {

// first make a new object to store values
var results = {};
// look into company sales data
companySalesData.forEach(function(current){
  console.log(current);)

}
  // get the sums of the sales
  // find the taxes of those sales
  // if company has been name then add values
  // create new object and key



var results = salesTaxReport(companySalesData, salesTaxRates);

console.log(salesTaxReport);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/