const images = [
    { file: "1.jpg", category: "pantai", caption: "Pasir putih yang memukau" },
    { file: "2.jpg", category: "pantai", caption: "Keindahan alam Belitung" },
    { file: "3.jpg", category: "desa", caption: "Kehijauan yang menenangkan" },
    { file: "4.jpg", category: "kegiatan", caption: "Bersama masyarakat desa" },
    { file: "5.jpg", category: "desa", caption: "Arsitektur lokal yang unik" },
    { file: "6.jpg", category: "kegiatan", caption: "Momen berharga bersama" },
    { file: "7.jpg", category: "pantai", caption: "Surga tersembunyi" },
    { file: "8.jpg", category: "desa", caption: "Keindahan yang memesona" },
    { file: "9.jpg", category: "desa", caption: "Arsitektur lokal yang unik" },
    { file: "10.jpg", category: "kegiatan", caption: "Momen berharga bersama" },
    { file: "11.jpg", category: "pantai", caption: "Surga tersembunyi" },
    { file: "12.jpg", category: "desa", caption: "Keindahan yang memesona" },
    { file: "13.jpg", category: "pantai", caption: "Pasir putih yang memukau" },
    { file: "14.jpg", category: "pantai", caption: "Keindahan alam Belitung" },
    { file: "15.jpg", category: "desa", caption: "Kehijauan yang menenangkan" },
    { file: "16.jpg", category: "kegiatan", caption: "Bersama masyarakat desa" },
    { file: "17.jpg", category: "desa", caption: "Arsitektur lokal yang unik" },
    { file: "18.jpg", category: "kegiatan", caption: "Momen berharga bersama" },
    { file: "19.jpg", category: "pantai", caption: "Surga tersembunyi" },
    { file: "20.jpg", category: "desa", caption: "Keindahan yang memesona" },
    { file: "21.jpg", category: "desa", caption: "Arsitektur lokal yang unik" },
    { file: "22.jpg", category: "kegiatan", caption: "Momen berharga bersama" },
    { file: "23.jpg", category: "pantai", caption: "Surga tersembunyi" },
    { file: "24.jpg", category: "desa", caption: "Keindahan yang memesona" },
    { file: "25.jpg", category: "pantai", caption: "Pasir putih yang memukau" },
    { file: "26.jpg", category: "pantai", caption: "Keindahan alam Belitung" },
    { file: "27.jpg", category: "desa", caption: "Kehijauan yang menenangkan" },
    { file: "28.jpg", category: "kegiatan", caption: "Bersama masyarakat desa" },
    { file: "29.jpg", category: "desa", caption: "Arsitektur lokal yang unik" },
    { file: "30.jpg", category: "kegiatan", caption: "Momen berharga bersama" },
    { file: "31.jpg", category: "pantai", caption: "Surga tersembunyi" },
    { file: "32.jpg", category: "desa", caption: "Keindahan yang memesona" },
    { file: "33.jpg", category: "desa", caption: "Arsitektur lokal yang unik" },
    { file: "34.jpg", category: "kegiatan", caption: "Momen berharga bersama" },
    { file: "35.jpg", category: "pantai", caption: "Surga tersembunyi" },
    { file: "36.jpg", category: "desa", caption: "Keindahan yang memesona" },
    { file: "37.jpg", category: "pantai", caption: "Pasir putih yang memukau" },
    { file: "38.jpg", category: "pantai", caption: "Keindahan alam Belitung" },
    { file: "39.jpg", category: "desa", caption: "Kehijauan yang menenangkan" },
    { file: "40.jpg", category: "kegiatan", caption: "Bersama masyarakat desa" },
    { file: "41.jpg", category: "desa", caption: "Arsitektur lokal yang unik" },
    { file: "42.jpg", category: "kegiatan", caption: "Momen berharga bersama" },
    { file: "43.jpg", category: "pantai", caption: "Surga tersembunyi" },
    { file: "44.jpg", category: "desa", caption: "Keindahan yang memesona" },
    { file: "45.jpg", category: "desa", caption: "Arsitektur lokal yang unik" },
    { file: "46.jpg", category: "kegiatan", caption: "Momen berharga bersama" },
    { file: "47.jpg", category: "pantai", caption: "Surga tersembunyi" },
    { file: "48.jpg", category: "desa", caption: "Keindahan yang memesona" }
];

/// Render & initialize slider
function renderSlider(filter = 'all') {
    const $slider = $('#gallerySlider');
    $slider.empty(); // Kosongkan isi slider

    const filtered = images.filter(img => filter === 'all' || img.category === filter);

    if (filtered.length === 0) {
        $slider.append(`<p style="text-align:center; width:100%;">Tidak ada gambar untuk kategori ini.</p>`);
        return;
    }

    // Tambahkan gambar ke slider
    filtered.forEach(img => {
        $slider.append(`
            <div class="gallery-item">
                <img src="img/${img.file}" alt="${img.caption}">
                <div class="gallery-overlay"><p>${img.caption}</p></div>
            </div>
        `);
    });

    // Un-slick jika sudah ada
    if ($slider.hasClass('slick-initialized')) {
        $slider.slick('unslick');
    }

    const minSlides = 3;  // slides per row
    const minRows = 2;
    const totalVisible = minSlides * minRows;

    $slider.slick({
        slidesToShow: minSlides,
        slidesToScroll: minSlides,
        rows: minRows,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        infinite: filtered.length >= totalVisible, // Loop hanya jika cukup
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, rows: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2, rows: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, rows: 2 } }
        ]
    });
}

$(document).ready(function () {
    renderSlider(); // Tampilkan semua saat awal

    $('.filter-btn').on('click', function () {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        const filter = $(this).data('filter');
        renderSlider(filter);
    });
});
