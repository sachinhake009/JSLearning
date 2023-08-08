

// Step 1: Create 'bankSbi' object

let bankSbi = {
    name: "State Bank of India",
    branch: "Main Branch",
    accountType: "Savings",
    balance: 100000
};
console.log(bankSbi);

let bankLocation = {
    street: "123 Main Street",
    city: "Pandharpur",
    pinCode: "12345"
};
console.log(bankLocation);

// Step 3: Clone objects using Object.assign() and Spread Operator

const clonedBanksbi1 = Object.assign({}, bankSbi);
const clonedBankLocation = {...bankLocation};

// Step 4: Create 'rateOfInterest' object

const rateOfInterest = {
    homeLoneInterest : 5.0,
    personalLoanInterest : 8.5,
    duelInterest : 15.5,
};

// Step 5: Merge objects into 'sbiDetails'

const sbiDetails = { ...bankSbi, ...bankLocation, ...rateOfInterest };

// Step 6: Traverse the merged object using a loop

for (const key in sbiDetails) {
    if (sbiDetails.hasOwnProperty(key)) {
    console.log(`${key} : ${sbiDetails[key]}`);        
    }
}