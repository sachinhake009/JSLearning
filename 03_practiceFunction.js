
console.log('===================Step 1======================');
function study(){
    console.log('I Love India');
    console.log('I Love Study');
    console.log('------------------------------------------------------');
}
study();

function personalDetails(firstName, lastName, collageName) {
    console.log('First Name==>',firstName);
    console.log('Last Name==>',lastName);
    console.log('Collage Name==>',collageName);
    console.log('-------------------------------------------------------');
}
personalDetails('Sachin','Hake','SKN Sinhgad');

function swap(n1,n2){
console.log('Before Swapping==>',n1, ':',n2);
var temp=n1;
n1=n2;
n2=temp;
console.log('After Swapping==>',n1,':',n2);
}
swap('Virat','Anushaka');
swap(1000,2000);

console.log('=======================================');

function addition(a1,a2,a3) {
    console.log('Addition==>',a1,a2,a3);
    var result = a1+a2+a3;
    return result;
}
var res = addition(10.23,600,40);
console.log('Result is==>', res);

function bankDetails(bankName,accountNo,location,pinCode) {
    console.log('-------------Bank Details----------------------');
    console.log('Bank Name',bankName, 'Account No',accountNo,'Location',location,'Pin Code',pinCode);
}
bankDetails('HBFD',66332255,'PUNE',413304);
bankDetails('HBFD',66332255,'PUNE',413304);
bankDetails('HBFD',66332255,'PUNE',413304);
bankDetails('HBFD',66332255,'PUNE',413304);
bankDetails('HBFD',66332255,'PUNE',413304);
bankDetails('HBFD',66332255,'PUNE',413304);
bankDetails('HBFD',66332255,'PUNE',413304);
bankDetails('HBFD',66332255,'PUNE',413304);