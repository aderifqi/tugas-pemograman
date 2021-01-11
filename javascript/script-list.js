//card list wisata
function card(m) {
   return `
      <div class="col">
        <div class="card">
          <img src="${m.gambar}" class="card-img-top h- " style="height: 300px;" alt="lokasi wisata">
          <div class="card-body">
            <h5 class="card-title">${m.lokasi}</h5>
            <p class="card-text">${m.deskripsi}</p>
            <button type="button" class="btn detailBooking btn-primary" data-id="${m.id}" data-bs-toggle="modal" data-bs-target="#exampleModal"> booking </button>
          </div>
        </div>
      </div>
   `
}

function detail(m) {
   return `
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${m.lokasi}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form>
          <div class="modal-body">
            <div class="row">
              <div class="col">
              <img src="${m.gambar}" class="card-img-top h- " style="height: 230px;" alt="lokasi wisata">
              <h5 class="card-title">${m.lokasi}</h5>
              <p class="card-text">${m.deskripsi}</p>
              </div>
              <div class="col">
                <div class="col-md-6">
                  <td>Nama Lengkap</td>
                  <td><input type="text" name="nama" required></td>
                </div>
                <div class="col-md-6">
                  <td>Jumlah anggota Yang Ikut</td>
                  <td><input type="text" Jumlah anggota Yang Ikut="Jumlah anggota Yang Ikut" required></td>
                </div>
                <div class="col-md-6">
                  <td>Jumlah Hari Liburan</td>
                  <td><input type="text" Jumlah Hari Liburan="Jumlah Hari Liburan" required></td>
                </div>
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">Pilihan Kamar Hotel</label>
                  <td><select>
                      <option>Kamar (STD))</option>
                      <option>Kamar (SUP)</option>
                      <option>Kamar (DLX))</option>
                      <option>Kamar (JRSTE))</option>
                    </select>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button type="submit" class="btn btn-primary">Save</button>
            </div>
        </form>
   `
}

// fungsi untuk mencari wisata
function filteredItems(keyword, data) {

   let filtered = []
   if (data.lokasi.toLowerCase().match(keyword.toLowerCase())) {
      filtered.push(card(data))
   } else if (keyword == '') {
      filtered.push(card(data))
   }
   console.log(filtered)
   return filtered
}

//retrieve data from json
//
function dataWisata(f = 'false') {
   fetch("./data/data-list.json")
      .then(response => response.json())
      .then(data => {
         const daftar = data.daftar
         let list = ''
         daftar.forEach(d => {
            if (f != 'false') {
               let searchWisata = filteredItems(f, d)
               list += searchWisata
            } else {
               list += card(d)
               console.log(d)
            }
         })
         const cardWista = document.querySelector('.cardWisata');
         cardWista.innerHTML = list;

         const detailBooking = document.querySelectorAll('.detailBooking');
         detailBooking.forEach(btn => {
            btn.addEventListener('click', function () {
               const id = this.dataset.id
               console.log(id)
               let tampilDetail = ''
               daftar.forEach(d => {
                  if (d.id == id) {
                     tampilDetail += detail(d)
                  }
               });
               modalContent = document.querySelector('.modal-content')
               modalContent.innerHTML = tampilDetail
               console.log(tampilDetail)
            })
         })


      })
}

//memangil fungsi,
dataWisata()

//ketika tombbol search di tekan
let form = document.querySelector(".searchForm")
form.onsubmit = function (e) {
   event.preventDefault()
   let submit = document.querySelector(".searchInput").value;
   dataWisata(submit);
}

//.catch(error => console.error(error))