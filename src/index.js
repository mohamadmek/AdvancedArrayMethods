const companies = [
  { id: 1, name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { id: 2, name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13];

// forEach

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i].name);
// }

// companies.forEach((c) => console.log(c.name));

// filter

// Get all ages above 21

// let newArr = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] > 21) {
//     newArr.push(ages[i]);
//   }
// }
// console.log(newArr);

// const filteredArr = ages.filter((age) => age > 21);

// console.log(filteredArr);

// Filter All retail companies

// const retailCompanies = companies.filter((company) => company.id != 2);

// console.log(retailCompanies);

// map

// Create a new array on companies

// const newArr = companies.map((company) => company.name);

// console.log(newArr);

// const testMap = companies.map(function (company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

// console.log(testMap);

// const ageMap = ages.map((age) => age * 2);

// console.log(ageMap);

// sort

// sorting Ages

// const sortedAges = ages.sort((a, b) => a - b);

// console.log(sortedAges);

// sort companies by start year

// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedCompanies = companies.sort((c1, c2) =>
//   c1.start > c2.start ? 1 : -1
// );

// console.log(sortedCompanies);

// reduce

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// console.log(ageSum);

// const ageSum = ages.reduce((total, age) => total + age ,0);

// console.log(ageSum);

// Get totatl years for all companies

// const totalYears = companies.reduce(function (total, company) {
//   return total + (company.end - company.start);
// }, 0);

// console.log(totalYears);

const combine = ages.map((age) => age * 2).filter((age) => age > 40);

console.log(combine);
