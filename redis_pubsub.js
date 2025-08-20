//Redis PubSub adalah salah satu fitur di Redis yang bisa digunakan untuk implementasi integrasi menggunakan messaging menggunakan teknik Publish Subscribe
//Cara kerja Redis PubSub sedikit berbeda dengan aplikasi PubSub pada umumnya, dimana Redis hanya akan mengirim data di PubSub ketika terdapat Consumer/Subscriber
//Jika tidak ada Consumer/Publisher, maka Redis tidak akan mengirimkan data apapun, dan secara otomatis datanya akan hilang
//Oleh karena itu, jangan gunakan Redis PubSub sebagai media penyimpanan atau untuk antrian

//Subscriber
//Jika kita mengirim data ke Channel, tapi belum ada Subscriber nya, secara otomatis datanya akan hilang, oleh karena itu ada baiknya di awal kita menjalankan Subscriber nya terlebih dahulu
subscribe chat notification //sesi 1 subscribe ke chatt & notification
subscribe chat //sesi lainnya hanya subscribe ke chat