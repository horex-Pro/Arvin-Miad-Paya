

let searchInput = document.getElementById('searchInput');

searchInput.addEventListener('focus' , ()=>{

    document.getElementById('searchBox').style.borderColor = '#810000';
    

})

searchInput.addEventListener('blur' , ()=>{

    document.getElementById('searchBox').style.borderColor = '#fff';
    
})

