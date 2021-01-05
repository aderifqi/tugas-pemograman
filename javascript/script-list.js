//card list wisata
function card(m){
   return `
      <div class="col">
        <div class="card">
          <img src="${m.gambar}" class="card-img-top h- " style="height: 300px;" alt="lokasi wisata">
          <div class="card-body">
            <h5 class="card-title">${m.lokasi}</h5>
            <p class="card-text">${m.deskripsi}</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> booking </button>
          </div>
        </div>
      </div>
   `
}

// fungsi untuk mencari wisata
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

//retrieve data from json
//
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
       const cardWista = document.querySelector('.cardWisata')
       cardWista.innerHTML = list
       
    })
}
//memangil fungsi,
dataWisata()

//ketika tombbol search di tekan
let form = document.querySelector(".searchForm")
form.onsubmit = function(e){
   event.preventDefault()
   let submit = document.querySelector(".searchInput").value;
   dataWisata(submit);
}

   //.catch(error => console.error(error))


