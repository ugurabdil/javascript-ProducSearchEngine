let urun1 = {
  isim: "ACER notebook swift",
  kategori: "teknoloji",
  fiyat: 6.219,
};
let urun2 = {
  isim: "LENOVA notebook",
  kategori: "teknoloji",
  fiyat: 6.532,
};
let urun3 = {
  isim: "SAMSUNG notebook gaming",
  kategori: "teknoloji",
  fiyat: 7.522,
};
let urun4 = {
  isim: " ASUS notebook ",
  kategori: "teknoloji",
  fiyat: 5.022,
};
let urun5 = {
  isim: "ACER aspire 3",
  kategori: "teknoloji",
  fiyat: 5.033,
};
let urun6 = {
  isim: "MACBOOK PRO ",
  kategori: "teknoloji",
  fiyat: 10.033,
};

let urunler = [urun1, urun2, urun3, urun4, urun5, urun6];
let filtreliUrunler = [];
let kullanıcıUrunİsmi = prompt("Aramak istediğiniz ürünün ismini giriniz. ");

filtreliUrunleriGetir(urunler);
filtreliUrunleriYazdır(filtreliUrunler);

function filtreliUrunleriGetir(urunler) {
  urunler.forEach(function (urun) {
    if (urun.isim.toUpperCase().includes(kullanıcıUrunİsmi.toUpperCase(), 0)) {
      filtreliUrunler.push(urun);
    }
  });
}

function filtreliUrunleriYazdır(urunler) {
  urunler.forEach(function (urun) {
    console.log("______________________________________________________");
    console.log("| Ürün Adı:" + urun.isim + "| Ürün Fiyatı:" + urun.fiyat + "| Ürün Kategorisi:" + urun.kategori);
    console.log("______________________________________________________");
  });
}
