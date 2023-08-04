

let sbiBank = {
    bankName: "SBI Bank",
    location: "Pandharpur",
    accountNo: 123456781234,
    ifsc: 559955,
    interestRate: 9,
    showDetails: function () {
        console.log(`Bank Details: ${this.bankName}, ${this.location}, ${this.accountNo}, ${this.ifsc}, ${this.interestRate}`);
    }
}

let axisBank = {
    bankName: "Axis Bank",
    location: "Pandharpur",
    accountNo: 123456781234,
    ifsc: 559955,
    interestRate: 9, 
    showDetails: function () {
        console.log(`Bank Details: ${this.bankName}, ${this.location}, ${this.accountNo}, ${this.ifsc}, ${this.interestRate}`);
    }
}

let hdfcBank = {
    bankName: "HDFC Bank",
    location: "Pandharpur",
    accountNo: 123456781234,
    ifsc: 559955,
    interestRate: 9, 
    showDetails: function () {
        console.log(`Bank Details: ${this.bankName}, ${this.location}, ${this.accountNo}, ${this.ifsc}, ${this.interestRate}`);
    }
}

let yesBank = {
    bankName: "Axis Bank",
    location: "Pandharpur",
    accountNo: 123456781234,
    ifsc: 559955,
    interestRate: 9,
    showDetails: function () {
        console.log(`Bank Details: ${this.bankName}, ${this.location}, ${this.accountNo}, ${this.ifsc}, ${this.interestRate}`);
    }
}
sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();