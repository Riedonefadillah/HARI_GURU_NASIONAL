// --- POPUP UCAPAN ---
    const showBtn = document.getElementById('showMessage');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closePopup');

    showBtn.addEventListener('click', () => {
      popup.classList.add("active");
    });

    closeBtn.addEventListener('click', () => {
      popup.classList.remove("active");
    });

    // --- GALERI FOTO DENGAN SLIDE ---
    const fotoKecil = document.getElementById('fotoKecil');
    const popupFoto = document.getElementById('popupFoto');
    const fotoBesar = document.getElementById('fotoBesar');
    const closeFoto = document.getElementById('closeFoto');
    const nextBtn = document.getElementById('nextFoto');
    const prevBtn = document.getElementById('prevFoto');

    // daftar gambar untuk slide
    const gambarList = ['img.jpg', 'img2.jpg', 'img3.jpg','img4.jpg','img5.jpg'];
    let indexSekarang = 0;

    // buka popup foto
    fotoKecil.addEventListener('click', () => {
      popupFoto.style.display = 'flex';
      fotoBesar.src = gambarList[indexSekarang];
    });

    // tombol close
    closeFoto.addEventListener('click', () => {
      popupFoto.style.display = 'none';
    });

    // klik di luar gambar menutup popup
    popupFoto.addEventListener('click', (e) => {
      if (e.target === popupFoto) popupFoto.style.display = 'none';
    });

    // tombol panah kanan & kiri
    nextBtn.addEventListener('click', () => {
      indexSekarang = (indexSekarang + 1) % gambarList.length;
      fotoBesar.src = gambarList[indexSekarang];
    });

    prevBtn.addEventListener('click', () => {
      indexSekarang = (indexSekarang - 1 + gambarList.length) % gambarList.length;
      fotoBesar.src = gambarList[indexSekarang];
    });

    // kontrol lewat keyboard
    document.addEventListener('keydown', (e) => {
      if (popupFoto.style.display === 'flex') {
        if (e.key === 'ArrowRight') {
          indexSekarang = (indexSekarang + 1) % gambarList.length;
          fotoBesar.src = gambarList[indexSekarang];
        } else if (e.key === 'ArrowLeft') {
          indexSekarang = (indexSekarang - 1 + gambarList.length) % gambarList.length;
          fotoBesar.src = gambarList[indexSekarang];
        } else if (e.key === 'Escape') {
          popupFoto.style.display = 'none';
        }
      }
    });