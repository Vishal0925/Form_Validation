

const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const members = document.getElementById('members');
const address = document.getElementById('address');
const contact = document.getElementById('mobile');
const pickup = document.getElementById('pickup');
const drop = document.getElementById('drop');

form.addEventListener('submit', (e) => {

    var emailCheck = '^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
    
    if(fname.value === '' || fname.value == null){
        e.preventDefault();
        fname_error.innerHTML = "First Name !!";
    }
    if(lname.value === '' || lname.value == null){
        e.preventDefault();
        lname_error.innerHTML = "Last Name !!";
    }
    if(!email.value.match(emailCheck)){
        e.preventDefault();
        email_error.innerHTML = "Enter Email !!";
    }
    if(members.value === '' || members.value == null){
        e.preventDefault();
        members_error.innerHTML = "Enter No. of Members !!";
    }
    if(contact.value === '' || contact.value == null){
        e.preventDefault();
        mobile_error.innerHTML = "Contact Numbers !!";
    }
    if(address.value === '' || address.value == null){
        e.preventDefault();
        address_error.innerHTML = "Enter Address !!";
    }
    if(pickup.value === '' || pickup.value == null){
        e.preventDefault();
        pickup_error.innerHTML = "Pick-up Point !!";
    }
    if(drop.value === '' || drop.value == null){
        e.preventDefault();
        drop_error.innerHTML = "Dropping Point !!";
    }
    
})

