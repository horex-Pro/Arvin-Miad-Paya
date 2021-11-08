let formdata =[];
let pageOneData ={};
let pageone = document.querySelector('#pageone');

pageone.addEventListener('submit' , (e) => {
     pageOneData ={
          fullName: e.target.fullname.value,
          date: e.target.date.value,
          phonenumber: e.target.phonenumber.value,
          gender: e.target.gender.value,
          marriedstatus: e.target.marriedstatus.value
     };
     formdata.push(pageOneData);
     e.preventDefault();
});
