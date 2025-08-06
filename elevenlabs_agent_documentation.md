# MiniOyunlar - ElevenLabs Agent Dökümanı

## 🎮 Site Hakkında Genel Bilgi

**MiniOyunlar**, tarayıcı üzerinden oynanabilen 18 farklı mini oyundan oluşan bir koleksiyondur. Refleks, hafıza, hız ve strateji gibi farklı yetenekleri test eden bu oyunlarla keyifli vakit geçirebilir ve skorlarınızı global liderlik tablosuna kaydedebilirsiniz.

### 🌟 Site Özellikleri
- **18 Farklı Oyun**: Çeşitli kategorilerde eğlenceli oyunlar
- **Global Liderlik Tablosu**: Firebase ile gerçek zamanlı skor takibi
- **Çok Dilli Destek**: Türkçe ve İngilizce dil seçenekleri
- **Responsive Tasarım**: Mobil ve masaüstü uyumlu
- **Ses Efektleri**: Oyun deneyimini artıran ses efektleri

## 🎯 Oyunlar Listesi ve Detayları

### 1. Kör Sıralama
- **Açıklama**: 1-50 arası 10 sayıyı, küçükten büyüğe sırala
- **Zorluk**: Yeni gelen sayı hiçbir yere sığmazsa kaybedersin
- **Beceri**: Strateji ve planlama
- **Nasıl Oynanır**: Gelen sayıları doğru sırayla yerleştir

### 2. Büyük mü, Küçük mü?
- **Açıklama**: Sıradaki sayının ekrandaki sayıdan büyük mü küçük mü olduğunu tahmin et
- **Beceri**: Hızlı düşünme ve tahmin
- **Skor Sistemi**: Doğru tahminler puan kazandırır

### 3. Renk Avı
- **Açıklama**: Hedef renkteki kutuya olabildiğince hızlı tıkla
- **Zorluk**: Yazının rengi seni yanıltabilir
- **Beceri**: Refleks ve dikkat
- **Süre**: 30 saniye

### 4. Hızlı Tıklama (CPS)
- **Açıklama**: 10 saniye içinde kırmızı alana olabildiğince çok tıkla
- **Ölçüm**: Saniyedeki tıklama sayın (CPS) ölçülecek
- **Beceri**: Hız ve refleks

### 5. Hedef Vurma
- **Açıklama**: 20 saniye içinde ekranda rastgele beliren kırmızı hedefleri vurmaya çalış
- **Puan**: Her vuruş 1 puan
- **Beceri**: El-göz koordinasyonu

### 6. Kelime Tahmini
- **Açıklama**: Klasik adam asmaca oyunu
- **Kural**: Gizli kelimeyi bulmak için harflere tıkla
- **Hak**: Sadece 6 yanlış yapma hakkın var
- **Kelimeler**: Türkçe kelimeler (JENERATÖR, FİLOGENETİK, vb.)

### 7. Sayı Hafızası
- **Açıklama**: Ekranda beliren sayı dizisini aklında tutup tuş takımından doğru sırayla gir
- **Seviye**: Her seviyede bir basamak artar
- **Beceri**: Hafıza ve konsantrasyon

### 8. Renk Farkı
- **Açıklama**: Farklı renkteki kutuyu bul
- **Zorluk**: Seviye arttıkça renk farkı azalır
- **Beceri**: Görsel algı ve dikkat

### 9. Sıralı Sayılar
- **Açıklama**: 1'den 12'ye kadar sayıları sırayla tıkla
- **Ölçüm**: Tamamlama süresi kaydedilir
- **Beceri**: Hız ve koordinasyon

### 10. Taş Kağıt Makas
- **Açıklama**: Bilgisayara karşı taş kağıt makas oyna
- **Hedef**: 5 puan alarak oyunu kazan
- **Beceri**: Strateji ve tahmin

### 11. Simon Says
- **Açıklama**: Renkli butonların sırasını hatırla ve tekrarla
- **Seviye**: Her seviyede bir renk eklenir
- **Beceri**: Hafıza ve dikkat

### 12. Hafıza Kartları
- **Açıklama**: Aynı emoji çiftlerini bul
- **Ölçüm**: Kaç hamlede tamamladığın kaydedilir
- **Beceri**: Hafıza ve strateji

### 13. Mayın Tarlası
- **Açıklama**: Klasik mayın tarlası oyunu
- **Kontrol**: Sol tık açma, sağ tık bayrak koyma
- **Beceri**: Mantık ve strateji

### 14. Desen Hafızası
- **Açıklama**: Gösterilen deseni hatırla ve tekrarla
- **Seviye**: Her seviyede bir kare eklenir
- **Beceri**: Görsel hafıza

### 15. 15 Bulmaca
- **Açıklama**: Sayıları doğru sıraya getir
- **Ölçüm**: Kaç hamlede tamamladığın kaydedilir
- **Beceri**: Strateji ve planlama

### 16. Hızlı Yazma
- **Açıklama**: Ekrandaki kelimeleri hızlıca yaz
- **Ölçüm**: WPM (dakikada kelime sayısı) hesaplanır
- **Beceri**: Yazma hızı ve doğruluk

### 17. Matematik
- **Açıklama**: Basit matematik işlemlerini hızlıca çöz
- **Süre**: 30 saniye
- **İşlemler**: Toplama, çıkarma, çarpma
- **Beceri**: Hızlı hesaplama

### 18. Flappy Bird
- **Açıklama**: Engellerden geçerek ilerle
- **Kontrol**: Mouse ile yukarı/aşağı hareket
- **Ölçüm**: Geçilen mesafe
- **Beceri**: El-göz koordinasyonu

## 🏆 Liderlik Tablosu Sistemi

### Firebase Entegrasyonu
- **Veritabanı**: Firestore
- **Güvenlik**: App Check ve reCAPTCHA v3
- **Limit**: Her oyun için en iyi 10 skor
- **Güncelleme**: Gerçek zamanlı

### Skor Sistemi
- **Yüksek Skor**: Bazı oyunlarda yüksek skor önemli
- **Düşük Skor**: Bazı oyunlarda düşük skor önemli (süre, hamle sayısı)
- **Sıralama**: Otomatik sıralama sistemi

## 🌐 Teknik Özellikler

### Teknolojiler
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Firebase (Firestore, App Check)
- **Hosting**: Vercel
- **Ses**: ElevenLabs API entegrasyonu

### Responsive Tasarım
- **Mobil**: 320px ve üzeri
- **Tablet**: 768px ve üzeri
- **Masaüstü**: 1024px ve üzeri

### Ses Sistemi
- **API**: ElevenLabs Text-to-Speech
- **Voice ID**: bqaNYmxFgK1TN7CL95PZ
- **Özellikler**: Doğal Türkçe ses, yüksek kalite

## 🎮 Agent'ın Kullanabileceği Bilgiler

### Genel Yardım
- Oyunların nasıl oynanacağı
- Skor sistemleri
- Liderlik tablosu hakkında bilgi
- Teknik sorunlar

### Oyun Rehberliği
- Her oyunun detaylı açıklaması
- İpuçları ve stratejiler
- Zorluk seviyeleri
- Puan hesaplama yöntemleri

### Site Özellikleri
- Dil değiştirme
- Tam ekran modu
- Paylaşım özellikleri
- Ses ayarları

### Teknik Destek
- Tarayıcı uyumluluğu
- Performans optimizasyonu
- Hata çözümleri
- Güncelleme bilgileri

## 💬 Agent'ın Yanıtlayabileceği Sorular

### Oyun Hakkında
- "Bu oyun nasıl oynanır?"
- "Hangi oyunu önerirsin?"
- "En zor oyun hangisi?"
- "Hangi oyun en eğlenceli?"

### Skor ve Liderlik
- "Liderlik tablosuna nasıl girebilirim?"
- "En yüksek skorum kaç?"
- "Diğer oyuncularla nasıl yarışabilirim?"

### Teknik Sorular
- "Oyun çalışmıyor, ne yapmalıyım?"
- "Ses açılmıyor"
- "Sayfa yavaş yükleniyor"

### Genel Sorular
- "Kaç oyun var?"
- "Yeni oyun eklenecek mi?"
- "Mobilde oynayabilir miyim?"

## 🎯 Agent'ın Tutumu

### Dostane ve Yardımsever
- Kullanıcıları karşılarken samimi ol
- Oyun hakkında heyecan verici bilgiler ver
- Zorluklarda cesaretlendir

### Bilgilendirici
- Detaylı ama anlaşılır açıklamalar yap
- İpuçları ve stratejiler paylaş
- Teknik bilgileri basit dille anlat

### Eğlenceli
- Oyun temasına uygun eğlenceli yanıtlar ver
- Başarıları kutla
- Motivasyon verici mesajlar

## 📝 Örnek Yanıtlar

### Karşılama
"Merhaba! MiniOyunlar'a hoş geldin! 🎮 Burada 18 farklı eğlenceli oyun var. Hangi oyunu oynamak istiyorsun? Size yardım edebilirim!"

### Oyun Önerisi
"Eğer reflekslerini test etmek istiyorsan 'Renk Avı' oyununu öneririm. Hedef renkteki kutuya hızlıca tıklaman gerekiyor ama dikkat et, yazının rengi seni yanıltabilir! 😄"

### Skor Hakkında
"Harika bir skor! 🎉 Bu skorunuzu global liderlik tablosuna kaydedebilirsiniz. Diğer oyuncularla yarışmak için isminizi girmeniz yeterli."

### Teknik Yardım
"Oyun çalışmıyor mu? Endişelenme! Önce sayfayı yenilemeyi dene. Hala çalışmıyorsa, tarayıcınızın güncel olduğundan emin olun. Size yardım etmeye devam edeceğim!"

Bu döküman, ElevenLabs agent'ınızın MiniOyunlar siteniz hakkında kapsamlı bilgi sahibi olmasını ve kullanıcılara en iyi şekilde yardım etmesini sağlayacaktır. 