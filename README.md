# Retro Bot Altyapısı
RetroLUN için geliştirilen ücretsiz bir alt yapıdır.

# Ön Hazırlık
+ Node.JS'i bilgisayarınıza kurun.
+ Projeyi ZIP ya da bir klasör hâlinde bilgisayarınıza indirin.
+ Masaüstünüze ya da bilgisayarınız herhangi bir yerine bir klasör oluşturun.
+ İndirdiğiniz klasördeki tüm dosyaları o botun içerisine atın.

# Şimdi Kurulum Aşamasına
+ `index.js` dosyasını açın ve içerisinde olan `client.twenzy` kısmındaki Token ve Prefix ayarlarınızı yapın. Eğer `index.js` dosyasının içerisindeki şeylerin ne işe yaradığını bilmiyorsan Parametreler kısmını oku.
+ CMD'yi yönetici olarak çalıştırıyoruz ve aşağıdaki adımları uyguluyoruz.
```
$ cd \path\to\klasörIsmi
$ npm install
```
Botumuzun genel kurulumunu yaptıktan sonra çalıştırma aşamasına geliyoruz, bot tamamen `index.js`'den çalıştırılması gerekiyor. Ayrıca, bot tamamen senkronize çalışıyor.
```
$ node .
```
Yazarak çalıştıramazsanız `node index.js` kullanmayı deneyin.
+ Tada! Kurulum başarılı.

# Parametreler
+ `Token`: Botunuzun aktif olabilmesi için size özel olarak verilen tokendir. `Varsayılan: YOK`
+ `Prefix`: Komutlarınızın çalışması için kullanılacak ön ektir. `Varsayılan: !`

# İçindekiler
+ **Kayıt Sistemi**
+ **Uyarı Sistemi**
+ **Mute Sistemi**

# Bilgilendirme
Bu altyapı **RetroLUN** sunucusu için **Twenzy ve Wertoyg** tarafından hazırlanmıştır.
