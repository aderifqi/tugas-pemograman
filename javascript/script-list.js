fetch("./data/data-list.json",{mode:'no-cors'})
.then(response => {
   return response.json();
})
.then(data => console.log(data);

//$.getJSON('./data/data-list.json',function(data){
      //console.log(data)
//})

