const username = document.querySelector('.username');
const jobs = document.querySelector('.jobs');
const email = document.querySelector('.email');
const telp = document.querySelector('.telp');
const address = document.querySelector('.address');

// console.log(username);
let no = 0;

const submit = document.querySelector('.submit');
submit.addEventListener('click', function(e) {
    e.preventDefault();
    
    no++;

    const Data = {
        // num: no,
        username: username.value,
        jobs: jobs.value,
        email: email.value,
        telp: telp.value,
        address: address.value
    }

    putData(Data);
    // renderData();
    username.value = '';
    jobs.value = '';
    email.value = '';
    telp.value = '';
    address.value = '';
})

