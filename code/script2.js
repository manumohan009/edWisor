// Block Scope

// console.log(carPrice);
// var carPrice = 200000;

// ----------------------------------

// var x = 1;
// for(var x = 0; x<10; x++){
//     console.log(x);
// }

// console.log('x='+x);

// ----------------------------------
// Const Keyword

// let oldUser = true;
// const discountPercentage = 10;

// if(oldUser == true){
//     const discountPercentage = 20;
//     console.log(discountPercentage);
// }
// console.log(discountPercentage);


// ----------------------------------
// Arrow functions

// let multiply = (x,y)=>{
//     return x*y;
// }

// let generateEmail = (name,message)=>{
//     var emailMessage = 'Hi '+ name+"\n"+"This is the message we have for you - \n"
//     +message+"\n copyright @edwisor 2018";
// return emailMessage;
// }



// function multiply(x,y){ 
//     return x*y;
// }


// var generateEmail = function(name,message){
//     var emailMessage = 'Hi '+ name+"\n"+"This is the message we have for you - \n"
//                         +message+"\n copyright @edwisor 2018";
//     return emailMessage;
//}

// console.log(multiply(4,8));
// console.log(generateEmail("Manu","Welcome to Edwisor"));

// ----------------------------------
// Default Parameters

// function multiply(x=1,y=3){ 
//     console.log(x);
//     console.log(y);
//     return x*y;
// }
// console.log(multiply(4));

// ----------------------------------
// REST and SPREAD Parameters


//REST ---- csv to array

// let allUserAddress = [];
// let storeUserAddress = (userId, ...addressToStore) =>{

//     console.log(userId);
//     console.log(addressToStore);

//     let customAddress = {userId:userId, userAddress:addressToStore};
//     allUserAddress.push(customAddress);
//     console.log(allUserAddress);
//     return allUserAddress;
// }

// let firstAddress = {
//     "streetAddress": "Some streetAddress",
//     "city": "New Delhi",
//     "state": "Delhi",
//     "pincode": "56799",
//     "country": "India"
// }

// let secondAddress = {
//     "streetAddress": "jhgjhgjg",
//     "city": "Mumbai",
//     "state": "MH",
//     "pincode": "56532",
//     "country": "India"
// }

// storeUserAddress("ManuMohan", firstAddress, secondAddress);

// -----------------------------------------------------------

// let allPeopleIWantToInvite = []
// let pushToPartyList = (...people) =>{
//     let newPeopleArray = people;
//     allPeopleIWantToInvite = allPeopleIWantToInvite.concat(newPeopleArray);
//     console.log(allPeopleIWantToInvite);
//     return allPeopleIWantToInvite;
// }

// pushToPartyList("Adithya", "sid", "rohit");
// pushToPartyList("Shika", "Kavitha", "Aarohi");

// -----------------------------------------------------------

//SPREAD ---- array to csv

// function sum(x,y,z){
//     return x + y + z;
// }

// const numbers = [1,2,3];
// console.log(sum(...numbers));

// -----------------------------------------------------------

// var a = [25,89];
// var b = [45,12];
// var c = [...a, ...b];

// console.log(c);

// -----------------------------------------------------------


// Object Literals

// let firstName ="Adithya";
// let lastName = "Kumar";
//               // let nameOfPerson = {firstName:firstName, lastName:lastName};
// let nameOfPerson = {firstName, lastName};

// console.log(nameOfPerson);

// -----------------------------------------------------------

// let actualPrice = 50000;
// let discountPercentage = 10;

// let priceOfProduct = {
//     actualPrice,
//     discountPercentage,
//     calculateFinalPrice(){ // method // donot use arrow function in object
//         return actualPrice - ((actualPrice*discountPercentage)/100);
//     }
// }
// console.log(priceOfProduct);
// console.log(priceOfProduct.calculateFinalPrice());

// -----------------------------------------------------------

// let keyIamStoring = "Some Key";
// let valueIamStoring = "Some value";

// let finalObject = {
//     [keyIamStoring]: valueIamStoring
// }
// console.log(finalObject);

// -----------------------------------------------------------

// Template Literals

// let generateEmail = function(name, message){
//     var emailMessage = `Hi ${name}\n
//     This is the message we have for you \n
//     ${message}\n
//     copyright @edwisor 2018
//     \${Here is the text}`

//     return emailMessage;
// }
// console.log(generateEmail("Aadithya","Welcome to edwisor"));

// -----------------------------------------------------------
// For in  loop and For of loop


// For in loop
// var customers = [{
//     'custId': '123',
//     'signedUpDate': '2016-12-11'
// },
// {
//     'custId': '456',
//     'signedUpDate': '2015-09-11'
// }]

// for(x in customers){
//     console.log(x); // iterator or array index
//     console.log(customers[x].custId);
// }

// For of loop 
// for(customer of customers){ // can use only with array not object
//     console.log(customer);
// }

// -----------------------------------------------------------

// var singleUser = {
//     name: "Adithya",
//     email: "someemail@edwisor.com",
//     mobileNumber:999999999
// }

// for (x in singleUser){ // can use with array and object
//     console.log(x); // key
//     console.log(singleUser[x]);
// }



/*Given below is the list of cities in the states of India . You are supposed to complete
the function given after this list which takes input as state name and sends output as 
a csv of firstLetter of all the cities in that particular state 

sample input - findCityFunction("Manipur")
output - "I,L,M,T"
explanation - "Imphal*","Lilong","Mayang Imphal","Thoubal" have their first letters as I, L, M and T


*/
/*
let cityData = {
    "Andaman and Nicobar Islands": [
      "Port Blair*"
    ],
    "Andhra Pradesh": [
      "Adoni",
      "Amalapuram",
      "Anakapalle",
      "Anantapur",
      "Bapatla",
      "Bheemunipatnam",
      "Bhimavaram",
      "Bobbili",
      "Chilakaluripet",
      "Chirala",
      "Chittoor",
      "Dharmavaram",
      "Eluru",
      "Gooty",
      "Gudivada",
      "Gudur",
      "Guntakal",
      "Guntur",
      "Hindupur",
      "Jaggaiahpet",
      "Jammalamadugu",
      "Kadapa",
      "Kadiri",
      "Kakinada",
      "Kandukur",
      "Kavali",
      "Kovvur",
      "Kurnool",
      "Macherla",
      "Machilipatnam",
      "Madanapalle",
      "Mandapeta",
      "Markapur",
      "Nagari",
      "Naidupet",
      "Nandyal",
      "Narasapuram",
      "Narasaraopet",
      "Narsipatnam",
      "Nellore",
      "Nidadavole",
      "Nuzvid",
      "Ongole",
      "Palacole",
      "Palasa Kasibugga",
      "Parvathipuram",
      "Pedana",
      "Peddapuram",
      "Pithapuram",
      "Ponnur",
      "Proddatur",
      "Punganur",
      "Puttur",
      "Rajahmundry",
      "Rajam",
      "Rajampet",
      "Ramachandrapuram",
      "Rayachoti",
      "Rayadurg",
      "Renigunta",
      "Repalle",
      "Salur",
      "Samalkot",
      "Sattenapalle",
      "Srikakulam",
      "Srikalahasti",
      "Srisailam Project (Right Flank Colony) Township",
      "Sullurpeta",
      "Tadepalligudem",
      "Tadpatri",
      "Tanuku",
      "Tenali",
      "Tirupati",
      "Tiruvuru",
      "Tuni",
      "Uravakonda",
      "Venkatagiri",
      "Vijayawada",
      "Vinukonda",
      "Visakhapatnam",
      "Vizianagaram",
      "Yemmiganur",
      "Yerraguntla"
    ],
    "Arunachal Pradesh": [
      "Naharlagun",
      "Pasighat"
    ],
    "Assam": [
      "Barpeta",
      "Bongaigaon City",
      "Dhubri",
      "Dibrugarh",
      "Diphu",
      "Goalpara",
      "Guwahati",
      "Jorhat",
      "Karimganj",
      "Lanka",
      "Lumding",
      "Mangaldoi",
      "Mankachar",
      "Margherita",
      "Mariani",
      "Marigaon",
      "Nagaon",
      "Nalbari",
      "North Lakhimpur",
      "Rangia",
      "Sibsagar",
      "Silapathar",
      "Silchar",
      "Tezpur",
      "Tinsukia"
    ],
    "Bihar": [
      "Araria",
      "Arrah",
      "Arwal",
      "Asarganj",
      "Aurangabad",
      "Bagaha",
      "Barh",
      "Begusarai",
      "Bettiah",
      "Bhabua",
      "Bhagalpur",
      "Buxar",
      "Chhapra",
      "Darbhanga",
      "Dehri-on-Sone",
      "Dumraon",
      "Forbesganj",
      "Gaya",
      "Gopalganj",
      "Hajipur",
      "Jamalpur",
      "Jamui",
      "Jehanabad",
      "Katihar",
      "Kishanganj",
      "Lakhisarai",
      "Lalganj",
      "Madhepura",
      "Madhubani",
      "Maharajganj",
      "Mahnar Bazar",
      "Makhdumpur",
      "Maner",
      "Manihari",
      "Marhaura",
      "Masaurhi",
      "Mirganj",
      "Mokameh",
      "Motihari",
      "Motipur",
      "Munger",
      "Murliganj",
      "Muzaffarpur",
      "Narkatiaganj",
      "Naugachhia",
      "Nawada",
      "Nokha",
      "Patna*",
      "Piro",
      "Purnia",
      "Rafiganj",
      "Rajgir",
      "Ramnagar",
      "Raxaul Bazar",
      "Revelganj",
      "Rosera",
      "Saharsa",
      "Samastipur",
      "Sasaram",
      "Sheikhpura",
      "Sheohar",
      "Sherghati",
      "Silao",
      "Sitamarhi",
      "Siwan",
      "Sonepur",
      "Sugauli",
      "Sultanganj",
      "Supaul",
      "Warisaliganj"
    ],
    "Chandigarh": [
      "Chandigarh*"
    ],
    "Chhattisgarh": [
      "Ambikapur",
      "Bhatapara",
      "Bhilai Nagar",
      "Bilaspur",
      "Chirmiri",
      "Dalli-Rajhara",
      "Dhamtari",
      "Durg",
      "Jagdalpur",
      "Korba",
      "Mahasamund",
      "Manendragarh",
      "Mungeli",
      "Naila Janjgir",
      "Raigarh",
      "Raipur*",
      "Rajnandgaon",
      "Sakti",
      "Tilda Newra"
    ],
    "Dadra and Nagar Haveli": [
      "Silvassa*"
    ],
    "Delhi": [
      "Delhi",
      "New Delhi*"
    ],
    "Goa": [
      "Mapusa",
      "Margao",
      "Marmagao",
      "Panaji*"
    ],
    "Gujarat": [
      "Adalaj",
      "Ahmedabad",
      "Amreli",
      "Anand",
      "Anjar",
      "Ankleshwar",
      "Bharuch",
      "Bhavnagar",
      "Bhuj",
      "Chhapra",
      "Deesa",
      "Dhoraji",
      "Godhra",
      "Jamnagar",
      "Kadi",
      "Kapadvanj",
      "Keshod",
      "Khambhat",
      "Lathi",
      "Limbdi",
      "Lunawada",
      "Mahesana",
      "Mahuva",
      "Manavadar",
      "Mandvi",
      "Mangrol",
      "Mansa",
      "Mahemdabad",
      "Modasa",
      "Morvi",
      "Nadiad",
      "Navsari",
      "Padra",
      "Palanpur",
      "Palitana",
      "Pardi",
      "Patan",
      "Petlad",
      "Porbandar",
      "Radhanpur",
      "Rajkot",
      "Rajpipla",
      "Rajula",
      "Ranavav",
      "Rapar",
      "Salaya",
      "Sanand",
      "Savarkundla",
      "Sidhpur",
      "Sihor",
      "Songadh",
      "Surat",
      "Talaja",
      "Thangadh",
      "Tharad",
      "Umbergaon",
      "Umreth",
      "Una",
      "Unjha",
      "Upleta",
      "Vadnagar",
      "Vadodara",
      "Valsad",
      "Vapi",
      "Vapi",
      "Veraval",
      "Vijapur",
      "Viramgam",
      "Visnagar",
      "Vyara",
      "Wadhwan",
      "Wankaner"
    ],
    "Haryana": [
      "Bahadurgarh",
      "Bhiwani",
      "Charkhi Dadri",
      "Faridabad",
      "Fatehabad",
      "Gohana",
      "Gurgaon",
      "Hansi",
      "Hisar",
      "Jind",
      "Kaithal",
      "Karnal",
      "Ladwa",
      "Mahendragarh",
      "Mandi Dabwali",
      "Narnaul",
      "Narwana",
      "Palwal",
      "Panchkula",
      "Panipat",
      "Pehowa",
      "Pinjore",
      "Rania",
      "Ratia",
      "Rewari",
      "Rohtak",
      "Safidon",
      "Samalkha",
      "Sarsod",
      "Shahbad",
      "Sirsa",
      "Sohna",
      "Sonipat",
      "Taraori",
      "Thanesar",
      "Tohana",
      "Yamunanagar"
    ],
    "Himachal Pradesh": [
      "Mandi",
      "Nahan",
      "Palampur",
      "Shimla*",
      "Solan",
      "Sundarnagar"
    ],
    "Jammu and Kashmir": [
      "Anantnag",
      "Baramula",
      "Jammu",
      "Kathua",
      "Punch",
      "Rajauri",
      "Sopore",
      "Srinagar*",
      "Udhampur"
    ],
    "Jharkhand": [
      "Adityapur",
      "Bokaro Steel City",
      "Chaibasa",
      "Chatra",
      "Chirkunda",
      "Medininagar (Daltonganj)",
      "Deoghar",
      "Dhanbad",
      "Dumka",
      "Giridih",
      "Gumia",
      "Hazaribag",
      "Jamshedpur",
      "Jhumri Tilaiya",
      "Lohardaga",
      "Madhupur",
      "Mihijam",
      "Musabani",
      "Pakaur",
      "Patratu",
      "Phusro",
      "Ramgarh",
      "Ranchi*",
      "Sahibganj",
      "Saunda",
      "Simdega",
      "Tenu dam-cum-Kathhara"
    ],
    "Karnataka": [
      "Adyar",
      "Afzalpur",
      "Arsikere",
      "Athni",
      "Bengaluru",
      "Belagavi",
      "Ballari",
      "Chikkamagaluru",
      "Davanagere",
      "Gokak",
      "Hubli-Dharwad",
      "Karwar",
      "Kolar",
      "Lakshmeshwar",
      "Lingsugur",
      "Maddur",
      "Madhugiri",
      "Madikeri",
      "Magadi",
      "Mahalingapura",
      "Malavalli",
      "Malur",
      "Mandya",
      "Mangaluru",
      "Manvi",
      "Mudalagi",
      "Mudabidri",
      "Muddebihal",
      "Mudhol",
      "Mulbagal",
      "Mundargi",
      "Nanjangud",
      "Nargund",
      "Navalgund",
      "Nelamangala",
      "Pavagada",
      "Piriyapatna",
      "Puttur",
      "Rabkavi Banhatti",
      "Raayachuru",
      "Ranebennuru",
      "Ramanagaram",
      "Ramdurg",
      "Ranibennur",
      "Robertson Pet",
      "Ron",
      "Sadalagi",
      "Sagara",
      "Sakaleshapura",
      "Sindagi",
      "Sanduru",
      "Sankeshwara",
      "Saundatti-Yellamma",
      "Savanur",
      "Sedam",
      "Shahabad",
      "Shahpur",
      "Shiggaon",
      "Shikaripur",
      "Shivamogga",
      "Surapura",
      "Shrirangapattana",
      "Sidlaghatta",
      "Sindhagi",
      "Sindhnur",
      "Sira",
      "Sirsi",
      "Siruguppa",
      "Srinivaspur",
      "Tarikere",
      "Tekkalakote",
      "Terdal",
      "Talikota",
      "Tiptur",
      "Tumkur",
      "Udupi",
      "Vijayapura",
      "Wadi",
      "Yadgir"
    ],
    "Karnatka": [
      "Mysore"
    ],
    "Kerala": [
      "Adoor",
      "Alappuzha",
      "Attingal",
      "Chalakudy",
      "Changanassery",
      "Cherthala",
      "Chittur-Thathamangalam",
      "Guruvayoor",
      "Kanhangad",
      "Kannur",
      "Kasaragod",
      "Kayamkulam",
      "Kochi",
      "Kodungallur",
      "Kollam",
      "Kottayam",
      "Kozhikode",
      "Kunnamkulam",
      "Malappuram",
      "Mattannur",
      "Mavelikkara",
      "Mavoor",
      "Muvattupuzha",
      "Nedumangad",
      "Neyyattinkara",
      "Nilambur",
      "Ottappalam",
      "Palai",
      "Palakkad",
      "Panamattom",
      "Panniyannur",
      "Pappinisseri",
      "Paravoor",
      "Pathanamthitta",
      "Peringathur",
      "Perinthalmanna",
      "Perumbavoor",
      "Ponnani",
      "Punalur",
      "Puthuppally",
      "Koyilandy",
      "Shoranur",
      "Taliparamba",
      "Thiruvalla",
      "Thiruvananthapuram",
      "Thodupuzha",
      "Thrissur",
      "Tirur",
      "Vaikom",
      "Varkala",
      "Vatakara"
    ],
    "Madhya Pradesh": [
      "Alirajpur",
      "Ashok Nagar",
      "Balaghat",
      "Bhopal",
      "Ganjbasoda",
      "Gwalior",
      "Indore",
      "Itarsi",
      "Jabalpur",
      "Lahar",
      "Maharajpur",
      "Mahidpur",
      "Maihar",
      "Malaj Khand",
      "Manasa",
      "Manawar",
      "Mandideep",
      "Mandla",
      "Mandsaur",
      "Mauganj",
      "Mhow Cantonment",
      "Mhowgaon",
      "Morena",
      "Multai",
      "Mundi",
      "Murwara (Katni)",
      "Nagda",
      "Nainpur",
      "Narsinghgarh",
      "Narsinghgarh",
      "Neemuch",
      "Nepanagar",
      "Niwari",
      "Nowgong",
      "Nowrozabad (Khodargama)",
      "Pachore",
      "Pali",
      "Panagar",
      "Pandhurna",
      "Panna",
      "Pasan",
      "Pipariya",
      "Pithampur",
      "Porsa",
      "Prithvipur",
      "Raghogarh-Vijaypur",
      "Rahatgarh",
      "Raisen",
      "Rajgarh",
      "Ratlam",
      "Rau",
      "Rehli",
      "Rewa",
      "Sabalgarh",
      "Sagar",
      "Sanawad",
      "Sarangpur",
      "Sarni",
      "Satna",
      "Sausar",
      "Sehore",
      "Sendhwa",
      "Seoni",
      "Seoni-Malwa",
      "Shahdol",
      "Shajapur",
      "Shamgarh",
      "Sheopur",
      "Shivpuri",
      "Shujalpur",
      "Sidhi",
      "Sihora",
      "Singrauli",
      "Sironj",
      "Sohagpur",
      "Tarana",
      "Tikamgarh",
      "Ujjain",
      "Umaria",
      "Vidisha",
      "Vijaypur",
      "Wara Seoni"
    ],
    "Maharashtra": [
      "[[]]",
      "Ahmednagar",
      "Akola",
      "Akot",
      "Amalner",
      "Ambejogai",
      "Amravati",
      "Anjangaon",
      "Arvi",
      "Aurangabad",
      "Bhiwandi",
      "Dhule",
      "Kalyan-Dombivali",
      "Ichalkaranji",
      "Kalyan-Dombivali",
      "Karjat",
      "Latur",
      "Loha",
      "Lonar",
      "Lonavla",
      "Mahad",
      "Malegaon",
      "Malkapur",
      "Mangalvedhe",
      "Mangrulpir",
      "Manjlegaon",
      "Manmad",
      "Manwath",
      "Mehkar",
      "Mhaswad",
      "Mira-Bhayandar",
      "Morshi",
      "Mukhed",
      "Mul",
      "Greater Mumbai*",
      "Murtijapur",
      "Nagpur",
      "Nanded-Waghala",
      "Nandgaon",
      "Nandura",
      "Nandurbar",
      "Narkhed",
      "Nashik",
      "Navi Mumbai",
      "Nawapur",
      "Nilanga",
      "Osmanabad",
      "Ozar",
      "Pachora",
      "Paithan",
      "Palghar",
      "Pandharkaoda",
      "Pandharpur",
      "Panvel",
      "Parbhani",
      "Parli",
      "Partur",
      "Pathardi",
      "Pathri",
      "Patur",
      "Pauni",
      "Pen",
      "Phaltan",
      "Pulgaon",
      "Pune",
      "Purna",
      "Pusad",
      "Rahuri",
      "Rajura",
      "Ramtek",
      "Ratnagiri",
      "Raver",
      "Risod",
      "Sailu",
      "Sangamner",
      "Sangli",
      "Sangole",
      "Sasvad",
      "Satana",
      "Satara",
      "Savner",
      "Sawantwadi",
      "Shahade",
      "Shegaon",
      "Shendurjana",
      "Shirdi",
      "Shirpur-Warwade",
      "Shirur",
      "Shrigonda",
      "Shrirampur",
      "Sillod",
      "Sinnar",
      "Solapur",
      "Soyagaon",
      "Talegaon Dabhade",
      "Talode",
      "Tasgaon",
      "Thane",
      "Tirora",
      "Tuljapur",
      "Tumsar",
      "Uchgaon",
      "Udgir",
      "Umarga",
      "Umarkhed",
      "Umred",
      "Uran",
      "Uran Islampur",
      "Vadgaon Kasba",
      "Vaijapur",
      "Vasai-Virar",
      "Vita",
      "Wadgaon Road",
      "Wai",
      "Wani",
      "Wardha",
      "Warora",
      "Warud",
      "Washim",
      "Yavatmal",
      "Yawal",
      "Yevla"
    ],
    "Manipur": [
      "Imphal*",
      "Lilong",
      "Mayang Imphal",
      "Thoubal"
    ],
    "Meghalaya": [
      "Nongstoin",
      "Shillong*",
      "Tura"
    ],
    "Mizoram": [
      "Aizawl",
      "Lunglei",
      "Saiha"
    ],
    "Nagaland": [
      "Dimapur",
      "Kohima*",
      "Mokokchung",
      "Tuensang",
      "Wokha",
      "Zunheboto"
    ],
    "Odisha": [
      "Balangir",
      "Baleshwar Town",
      "Barbil",
      "Bargarh",
      "Baripada Town",
      "Bhadrak",
      "Bhawanipatna",
      "Bhubaneswar*",
      "Brahmapur",
      "Byasanagar",
      "Cuttack",
      "Dhenkanal",
      "Jatani",
      "Jharsuguda",
      "Kendrapara",
      "Kendujhar",
      "Malkangiri",
      "Nabarangapur",
      "Paradip",
      "Parlakhemundi",
      "Pattamundai",
      "Phulabani",
      "Puri",
      "Rairangpur",
      "Rajagangapur",
      "Raurkela",
      "Rayagada",
      "Sambalpur",
      "Soro",
      "Sunabeda",
      "Sundargarh",
      "Talcher",
      "Tarbha",
      "Titlagarh"
    ],
    "Puducherry": [
      "Karaikal",
      "Mahe",
      "Pondicherry*",
      "Yanam"
    ],
    "Punjab": [
      "Amritsar",
      "Barnala",
      "Batala",
      "Bathinda",
      "Dhuri",
      "Faridkot",
      "Fazilka",
      "Firozpur",
      "Firozpur Cantt.",
      "Gobindgarh",
      "Gurdaspur",
      "Hoshiarpur",
      "Jagraon",
      "Jalandhar Cantt.",
      "Jalandhar",
      "Kapurthala",
      "Khanna",
      "Kharar",
      "Kot Kapura",
      "Longowal",
      "Ludhiana",
      "Malerkotla",
      "Malout",
      "Mansa",
      "Moga",
      "Mohali",
      "Morinda, India",
      "Mukerian",
      "Muktsar",
      "Nabha",
      "Nakodar",
      "Nangal",
      "Nawanshahr",
      "Pathankot",
      "Patiala",
      "Pattran",
      "Patti",
      "Phagwara",
      "Phillaur",
      "Qadian",
      "Raikot",
      "Rajpura",
      "Rampura Phul",
      "Rupnagar",
      "Samana",
      "Sangrur",
      "Sirhind Fatehgarh Sahib",
      "Sujanpur",
      "Sunam",
      "Talwara",
      "Tarn Taran",
      "Urmar Tanda",
      "Zira",
      "Zirakpur"
    ],
    "Rajasthan": [
      "Ajmer",
      "Alwar",
      "Bikaner",
      "Bharatpur",
      "Bhilwara",
      "Jaipur*",
      "Jodhpur",
      "Lachhmangarh",
      "Ladnu",
      "Lakheri",
      "Lalsot",
      "Losal",
      "Makrana",
      "Malpura",
      "Mandalgarh",
      "Mandawa",
      "Mangrol",
      "Merta City",
      "Mount Abu",
      "Nadbai",
      "Nagar",
      "Nagaur",
      "Nasirabad",
      "Nathdwara",
      "Neem-Ka-Thana",
      "Nimbahera",
      "Nohar",
      "Nokha",
      "Pali",
      "Phalodi",
      "Phulera",
      "Pilani",
      "Pilibanga",
      "Pindwara",
      "Pipar City",
      "Prantij",
      "Pratapgarh",
      "Raisinghnagar",
      "Rajakhera",
      "Rajaldesar",
      "Rajgarh (Alwar)",
      "Rajgarh (Churu)",
      "Rajsamand",
      "Ramganj Mandi",
      "Ramngarh",
      "Ratangarh",
      "Rawatbhata",
      "Rawatsar",
      "Reengus",
      "Sadri",
      "Sadulshahar",
      "Sadulpur",
      "Sagwara",
      "Sambhar",
      "Sanchore",
      "Sangaria",
      "Sardarshahar",
      "Sawai Madhopur",
      "Shahpura",
      "Shahpura",
      "Sheoganj",
      "Sikar",
      "Sirohi",
      "Sojat",
      "Sri Madhopur",
      "Sujangarh",
      "Sumerpur",
      "Suratgarh",
      "Taranagar",
      "Todabhim",
      "Todaraisingh",
      "Tonk",
      "Udaipur",
      "Udaipurwati",
      "Vijainagar, Ajmer"
    ],
    "Tamil Nadu": [
      "Arakkonam",
      "Aruppukkottai",
      "Chennai*",
      "Coimbatore",
      "Erode",
      "Gobichettipalayam",
      "Kancheepuram",
      "Karur",
      "Lalgudi",
      "Madurai",
      "Manachanallur",
      "Nagapattinam",
      "Nagercoil",
      "Namagiripettai",
      "Namakkal",
      "Nandivaram-Guduvancheri",
      "Nanjikottai",
      "Natham",
      "Nellikuppam",
      "Neyveli (TS)",
      "O' Valley",
      "Oddanchatram",
      "P.N.Patti",
      "Pacode",
      "Padmanabhapuram",
      "Palani",
      "Palladam",
      "Pallapatti",
      "Pallikonda",
      "Panagudi",
      "Panruti",
      "Paramakudi",
      "Parangipettai",
      "Pattukkottai",
      "Perambalur",
      "Peravurani",
      "Periyakulam",
      "Periyasemur",
      "Pernampattu",
      "Pollachi",
      "Polur",
      "Ponneri",
      "Pudukkottai",
      "Pudupattinam",
      "Puliyankudi",
      "Punjaipugalur",
      "Ranipet",
      "Rajapalayam",
      "Ramanathapuram",
      "Rameshwaram",
      "Rasipuram",
      "Salem",
      "Sankarankoil",
      "Sankari",
      "Sathyamangalam",
      "Sattur",
      "Shenkottai",
      "Sholavandan",
      "Sholingur",
      "Sirkali",
      "Sivaganga",
      "Sivagiri",
      "Sivakasi",
      "Srivilliputhur",
      "Surandai",
      "Suriyampalayam",
      "Tenkasi",
      "Thammampatti",
      "Thanjavur",
      "Tharamangalam",
      "Tharangambadi",
      "Theni Allinagaram",
      "Thirumangalam",
      "Thirupuvanam",
      "Thiruthuraipoondi",
      "Thiruvallur",
      "Thiruvarur",
      "Thuraiyur",
      "Tindivanam",
      "Tiruchendur",
      "Tiruchengode",
      "Tiruchirappalli",
      "Tirukalukundram",
      "Tirukkoyilur",
      "Tirunelveli",
      "Tirupathur",
      "Tirupathur",
      "Tiruppur",
      "Tiruttani",
      "Tiruvannamalai",
      "Tiruvethipuram",
      "Tittakudi",
      "Udhagamandalam",
      "Udumalaipettai",
      "Unnamalaikadai",
      "Usilampatti",
      "Uthamapalayam",
      "Uthiramerur",
      "Vadakkuvalliyur",
      "Vadalur",
      "Vadipatti",
      "Valparai",
      "Vandavasi",
      "Vaniyambadi",
      "Vedaranyam",
      "Vellakoil",
      "Vellore",
      "Vikramasingapuram",
      "Viluppuram",
      "Virudhachalam",
      "Virudhunagar",
      "Viswanatham"
    ],
    "Telangana": [
      "Adilabad",
      "Bellampalle",
      "Bhadrachalam",
      "Bhainsa",
      "Bhongir",
      "Bodhan",
      "Farooqnagar",
      "Gadwal",
      "Hyderabad*",
      "Jagtial",
      "Jangaon",
      "Kagaznagar",
      "Kamareddy",
      "Karimnagar",
      "Khammam",
      "Koratla",
      "Kothagudem",
      "Kyathampalle",
      "Mahbubnagar",
      "Mancherial",
      "Mandamarri",
      "Manuguru",
      "Medak",
      "Miryalaguda",
      "Nagarkurnool",
      "Narayanpet",
      "Nirmal",
      "Nizamabad",
      "Palwancha",
      "Ramagundam",
      "Sadasivpet",
      "Sangareddy",
      "Siddipet",
      "Sircilla",
      "Suryapet",
      "Tandur",
      "Vikarabad",
      "Wanaparthy",
      "Warangal",
      "Yellandu"
    ],
    "Tripura": [
      "Agartala*",
      "Belonia",
      "Dharmanagar",
      "Kailasahar",
      "Khowai",
      "Pratapgarh",
      "Udaipur"
    ],
    "Uttar Pradesh": [
      "Achhnera",
      "Agra",
      "Aligarh",
      "Allahabad",
      "Amroha",
      "Azamgarh",
      "Bahraich",
      "Chandausi",
      "Etawah",
      "Firozabad",
      "Fatehpur Sikri",
      "Hapur",
      "Hardoi *",
      "Jhansi",
      "Kalpi",
      "Kanpur",
      "Khair",
      "Laharpur",
      "Lakhimpur",
      "Lal Gopalganj Nindaura",
      "Lalitpur",
      "Lalganj",
      "Lar",
      "Loni",
      "Lucknow*",
      "Mathura",
      "Meerut",
      "Modinagar",
      "Moradabad",
      "Nagina",
      "Najibabad",
      "Nakur",
      "Nanpara",
      "Naraura",
      "Naugawan Sadat",
      "Nautanwa",
      "Nawabganj",
      "Nehtaur",
      "Niwai",
      "Noida",
      "Noorpur",
      "Obra",
      "Orai",
      "Padrauna",
      "Palia Kalan",
      "Parasi",
      "Phulpur",
      "Pihani",
      "Pilibhit",
      "Pilkhuwa",
      "Powayan",
      "Pukhrayan",
      "Puranpur",
      "Purquazi",
      "Purwa",
      "Rae Bareli",
      "Rampur",
      "Rampur Maniharan",
      "Rampur Maniharan",
      "Rasra",
      "Rath",
      "Renukoot",
      "Reoti",
      "Robertsganj",
      "Rudauli",
      "Rudrapur",
      "Sadabad",
      "Safipur",
      "Saharanpur",
      "Sahaspur",
      "Sahaswan",
      "Sahawar",
      "Sahjanwa",
      "Saidpur",
      "Sambhal",
      "Samdhan",
      "Samthar",
      "Sandi",
      "Sandila",
      "Sardhana",
      "Seohara",
      "Shahabad, Hardoi",
      "Shahabad, Rampur",
      "Shahganj",
      "Shahjahanpur",
      "Shamli",
      "Shamsabad, Agra",
      "Shamsabad, Farrukhabad",
      "Sherkot",
      "Shikarpur, Bulandshahr",
      "Shikohabad",
      "Shishgarh",
      "Siana",
      "Sikanderpur",
      "Sikandra Rao",
      "Sikandrabad",
      "Sirsaganj",
      "Sirsi",
      "Sitapur",
      "Soron",
      "Suar",
      "Sultanpur",
      "Sumerpur",
      "Tanda",
      "Thakurdwara",
      "Thana Bhawan",
      "Tilhar",
      "Tirwaganj",
      "Tulsipur",
      "Tundla",
      "Ujhani",
      "Unnao",
      "Utraula",
      "Varanasi",
      "Vrindavan",
      "Warhapur",
      "Zaidpur",
      "Zamania"
    ],
    "Uttarakhand": [
      "Bageshwar",
      "Dehradun",
      "Haldwani-cum-Kathgodam",
      "Hardwar",
      "Kashipur",
      "Manglaur",
      "Mussoorie",
      "Nagla",
      "Nainital",
      "Pauri",
      "Pithoragarh",
      "Ramnagar",
      "Rishikesh",
      "Roorkee",
      "Rudrapur",
      "Sitarganj",
      "Srinagar",
      "Tehri"
    ],
    "West Bengal": [
      "Adra",
      "Alipurduar",
      "Arambagh",
      "Asansol",
      "Baharampur",
      "Balurghat",
      "Bankura",
      "Darjiling",
      "English Bazar",
      "Gangarampur",
      "Habra",
      "Hugli-Chinsurah",
      "Jalpaiguri",
      "Jhargram",
      "Kalimpong",
      "Kharagpur",
      "Kolkata",
      "Mainaguri",
      "Malda",
      "Mathabhanga",
      "Medinipur",
      "Memari",
      "Monoharpur",
      "Murshidabad",
      "Nabadwip",
      "Naihati",
      "Panchla",
      "Pandua",
      "Paschim Punropara",
      "Purulia",
      "Raghunathpur",
      "Raghunathganj",
      "Raiganj",
      "Rampurhat",
      "Ranaghat",
      "Sainthia",
      "Santipur",
      "Siliguri",
      "Sonamukhi",
      "Srirampore",
      "Suri",
      "Taki",
      "Tamluk",
      "Tarakeswar"
    ]
  }

let findCityFunction = (stateName)=>{
    let result;
    for(x in cityData){
        if(x===stateName){
            for(y of cityData[x] )  {
                console.log(y.substring(0,1));
                //result.push(y.substring(0,1));
                //result = result.concat(y.substring(0,1));
                if(result){
                    result = result + y[0];
                }
            }  
        }
    }
    return(result);
}
console.log(findCityFunction("Manipur"));

//module.exports ={findCityFunction:findCityFunction}

*/

// -----------------------------------------------------------

// let someKey = "key";
// let someValue= "value";
// let convertToKeyValuePair = (someKey,someValue)=>{
//     //console.log(someKey);
//     //console.log(someValue);
//     let obj ={
//     [someKey]:someValue
//     };
//     console.log(obj);
//     return obj;
// }
// convertToKeyValuePair(someKey,someValue);




// -----------------------------------------------------------
// Destructuring - (Max)

//object

// const person = {
//   name:'Max',
//   age: 29,
//   greet(){
//     console.log('Hi, I am '+ this.name);
//   }
// };

// const printName = ({ name }) => {
//   console.log(name);
// }
// printName(person);

// const { name, age } = person;
// console.log(name, age);

// //Array
// const hobbies = ['Sports', 'Cooking'];
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1,hobby2);

// -----------------------------------------------------------
// Async Code & Promises - (Max)

// const fetchData = () => {
//   const promise = new Promise((resolve, reject) =>{
//     setTimeout(()=> {
//       resolve('Done!');
//     }, 1500);
//   });
//   return promise;
// };

// setTimeout(() => {
//   console.log('Timer is done!');
//   fetchData()
//   .then(text => {
//     console.log(text);
//     return fetchData();
//   })
//   .then(text2 => {
//     console.log(text2);
//   });
// }, 2000);

// console.log('Hello');

// -----------------------------------------------------------
// creating a node Server - (Max)

// const http = require('http');
// const routes = require('./routes');
// const server = http.createServer(routes);
// server.listen(3000);

// -----------------------------------------------------------




















