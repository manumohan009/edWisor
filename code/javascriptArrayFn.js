const companies = [
    { name:"Company One", category:"Finance", start:1981, end:2003 },
    { name:"Company Two", category:"Retail", start:1992, end:2007 },
    { name:"Company Three", category:"Auto", start:1999, end:2004 },
    { name:"Company Four", category:"Retail", start:1989, end:2003 },
    { name:"Company Five", category:"Technology", start:2009, end:2006 },
    { name:"Company Six", category:"Finance", start:1981, end:2001 },
    { name:"Company Seven", category:"Auto", start:1987, end:2003 },
    { name:"Company Eight", category:"Technology", start:1986, end:2005 },
    { name:"Company Nine", category:"Retail", start:2000, end:2006 },
    { name:"Company Ten", category:"Finance", start:1981, end:2008 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


//forEach
//filter
//map 
//sort
//reduce
// -------------------------------------------------------------------------------------------- //
// for(let i = 0; i<companies.length; i++) {
//     console.log(companies[i]);
// }
// -------------------------------------------------------------------------------------------- //

// companies.forEach(function(company, index, companies){
//     //console.log("Company Name: "+ company.name);
//     //console.log("Index: "+index);
//     //console.log("Companies: "+companies[index].name);
// });
// -------------------------------------------------------------------------------------------- //
let canDrink = [];
for(let i=0; i<ages.length; i++) {
    if(ages[i]>=21){
        canDrink.push(ages)
    }
}