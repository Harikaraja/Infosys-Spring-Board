var hospitalName = "Motherhood Hospital";
var locationData = "324, Nagarjuna Sadan, 1st Stage, 2nd Block,HBR Layout, Bengaluru, Karnataka 560043, India";
var phoneNumber = "+91-80-4242-9999";
var email = "info@motherhood.com";
var website = "www.motherhood.com";
var services = ["Fertility", "Paediatrics", "Feotal Medicine","Internal Medicine"];
var facilities = ["Physiotherapy", "Radiology", "Gynaecology","Cosmetology","Neonatology"];
var insuranceCompanies = [
    "Universal Sompo Insurance Chola Mandalam",
"Star health and Allied Insurance Co. Ltd.",
"Religare Hearth Insurance Co Ltd",
"Reliance General Insurance",
"HDFC ERGO General Insurance Co. Ltd.",
"Future Generali India Insurance Co. Ltd",
"NIVA Bupa Health Insurance Co. Ltd",
"Aditya Birla Health Insurance Co.Ltd",
"IFFCO Tokio General Insurance Co. Ltd",
"Bajaj Allianz General Insurance Co Pvt Ltd",
"CIGNA TTK Health Insurance Co. Ltd",
"ICICI Lombard General Insurance Company Pvt. Ltd.",
"Liberty General Insurance Ltd",
"Magma HDI General Insurance Co. Ltd",
"Bharti Axa GI",
"The New India Assurance Co. Ltd",
"The Oriental Insurance Co. Ltd.",
"United India Insurance Co. Ltd.",
"National Insurance Co. Ltd.",
"Tata AIG General Insurance Co. Ltd.",
"Bharti AXA General Insurance Co. Ltd.",
"Edelweiss General Insurance Co. Ltd.",
"Kotak Mahindra General Insurance Co. Ltd.",
"Liberty General Insurance Ltd.",
"Magma HDI General Insurance Co. Ltd.",
"Royal Sundaram General Insurance Co. Ltd.",
"SBI General Insurance Co. Ltd.",
"Manipal Cigna Health Insurance",
"Reliance Health Insurance Ltd.",
"Future Generali India Insurance Co. Ltd.",
"Star Health & Allied Insurance Co. Ltd.",
"Religare Health Insurance Co. Ltd",
"IFFCO TOKIO General Insurance Co. Ltd.",
"cko General Insurance Ltd.",
"Agriculture Insurance Company of India Ltd.",
"Navi General Insurance Ltd.",
"Go Digit General Insurance Ltd",
"Shriram General Insurance Co. Ltd.",
"Chola Mandalam General Insurance Co. Ltd",
"Care Health Insurance Co Ltd"
];


// Update content with the data
document.getElementById("location").textContent = locationData;
document.getElementById("phone").textContent = phoneNumber;
document.getElementById("email").textContent = email;
document.getElementById("website").textContent = website;

var servicesList = document.getElementById("services");
services.forEach(function(service) {
    var li = document.createElement("li");
    li.textContent = service;
    servicesList.appendChild(li);
});

var facilitiesList = document.getElementById("facilities");
facilities.forEach(function(facility) {
    var li = document.createElement("li");
    li.textContent = facility;
    facilitiesList.appendChild(li);
});

var insuranceCompaniesList = document.getElementById("insurance-companies");
insuranceCompanies.forEach(function(company) {
    var li = document.createElement("li");
    li.textContent = company;
    insuranceCompaniesList.appendChild(li);
});

