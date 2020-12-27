
function card(m){
   return `
      <div class="col">
        <div class="card">
          <img src="${m.gambar}" class="card-img-top h- " style="height: 300px;" alt="lokasi wisata">
          <div class="card-body">
            <h5 class="card-title">${m.lokasi}</h5>
            <p class="card-text">${m.deskripsi}</p>
            <button class="btn btn-primary" type="button">booking</button>
          </div>
        </div>
      </div>
   `
}

function filteredItems(keyword,data) {
   let filtered = []
    if(data.lokasi.toLowerCase().match(keyword.toLowerCase())){
       filtered.push(card(data))
    }else if(keyword == ''){
       filtered.push(card(data))
    }
      console.log(filtered)
      return filtered 
}

function dataWisata(f='false'){
   fetch("./data/data-list.json")
   .then(response => response.json())
      .then(data =>{
         const daftar = data.daftar
         let list = ''
         daftar.forEach(d => { 
            if(f != 'false'){
               let searchWisata = filteredItems(f,d)
               list += searchWisata
            }else{
               list += card(d)
            }
         })
         const cardWista = document.querySelector('.cardWista')
         cardWista.innerHTML = list
         
      })
}
dataWisata()
let form = document.querySelector(".searchForm")
form.onsubmit = function(e){
   event.preventDefault()
   let submit = document.querySelector(".searchInput").value;
   dataWisata(submit);
}

   //.catch(error => console.error(error))


