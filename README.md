# .urPlann - Podo-list Web 

## 📝 Overview
.urPlann adalah aplikasi web yang menggabungkan Pomodoro Timer dengan Todo List untuk meningkatkan produktivitas. Dilengkapi dengan integrasi Spotify untuk menciptakan suasana kerja yang nyaman.

## ⭐ Fitur Utama
- **Pomodoro Timer**
  - Sesi kerja 25 menit
  - Istirahat pendek 5 menit
  - Timer kustom (1-60 menit)
  - Animasi progress circular

- **Todo List**
  - Tambah, edit, hapus tugas
  - Tandai tugas selesai
  - Tugas tersimpan di penyimpanan lokal
  - Animasi smooth
  
- **Integrasi Spotify**
  - Koneksi dengan akun Spotify
  - Akses playlist
  - Pemutar musik terintegrasi
  - Kontrol musik sambil bekerja
- **😋Fitur Pemanis**
  - Icon Contact Us
  - Quotes Statis

## 🛠️ Alat Tempur
- HTML5
- CSS3 (Flexbox & Grid)
- Vanilla JavaScript
- Spotify Web API
  
## 📸 Screenshot & Preview
### Fullview Web:
![image](https://github.com/user-attachments/assets/930fbffd-a80e-4e89-bdc0-cef319ae489c)

### Other Device:
- Mobile Device✅

  ![image](https://github.com/user-attachments/assets/6d1a515f-59c4-46f2-beef-5dd439eb521d)
  
- Tablet Device✅

  ![image](https://github.com/user-attachments/assets/5400462b-2500-4fbe-bf00-d504ee9f64e2)
  
- Laptop Device✅

  ![image](https://github.com/user-attachments/assets/fc50c24c-7e69-45bb-8937-1841af192a21)


### Pomodoro Timer View
- Timer circular progress
- Work/Break mode buttons
- Custom time settings

  ![image](https://github.com/user-attachments/assets/67a4f0f6-0ab7-4a90-b84f-e941afabaf33)

### Todo List Interface
- Task management interface
- Checkbox completion

  ![image](https://github.com/user-attachments/assets/cf4d8528-0925-42dd-8d69-a925ffafe59f)

- Edit/Delete controls

  ![image](https://github.com/user-attachments/assets/36d51ca9-f954-4d5d-b124-63b18d2c592c)

### Spotify Integration
- Embedded player
- Playlist access
- Playback controls

![image](https://github.com/user-attachments/assets/16c800e3-e025-48a9-9e90-511fc5ec97fb)


## 📥 Instalasi
1. Clone Repository
```bash
git clone https://github.com/yourusername/podo-list.git
```
2. Project Structure:
```
.urPlann/
├── index.html
├── css/
│   ├── main.css
│   ├── podomoro.css
│   ├── responsive.css
│   ├── sidebar.css
│   └── todolist.css
├── script/
│   ├── api.js
│   ├── podomoro.js
│   ├── quote.js
│   ├── sidebar.js
│   ├── spotify-ui.js
│   └── todolist.js
└── assets/
```
3. Setup Spotify API:
   - Kunjungi Spotify Developer Dashboard
   - Login dengan akun Spotify Anda
   - Buka menu Create App:
     ![image](https://github.com/user-attachments/assets/95afcc6b-af59-4592-8624-d5321595f703)
   - Isi form app name, app desc, website, dll (example: (localhost/example.php), dan isi redirect URL yang sama juga)
     kemudian simpan:
     ![image](https://github.com/user-attachments/assets/0c5ec8f1-f74d-4f8a-8fed-a0ad3c6f57ca)
   - Pergi ke Settings dan copy Client ID dan Client Secret:
     ![Screenshot 2024-12-21 145953](https://github.com/user-attachments/assets/65e47552-f919-4c52-8d9c-fcb1ccdd5746)
   - Masuk ke dalam file api.js dan ganti Client ID dan Client Secret dengan milik anda
     Noted (Jangan lupa untuk mengganti link redirect URL yang sebelumnya anda sudah buat di Spotify Developer Dashboard):
     ![Screenshot 2024-12-21 150344](https://github.com/user-attachments/assets/30d31860-0fde-4af0-8842-4121fc484772)
   - Selanjutnya anda dapat menuju index.html dan mengganti struktur <iframe></iframe> dengan milik
     anda sendiri:
     ![Screenshot 2024-12-21 200802](https://github.com/user-attachments/assets/f8abd7f6-1287-4bb2-a3b2-29b58ee99e8e)
   - Untuk mendapatkan baris kode tersebut anda dapat membuka playlist musik Spotify anda:
     - Playlist musik
     - Share
     - Embed Playlist
     - Centang Show Code
     ![image](https://github.com/user-attachments/assets/afb38dc2-9737-4276-9677-7a4ba86bc3b8)
   - 🎉Selamat anda sudah bisa meintegrasikan website ini dengan playlist Spotify Anda!.
    


      
