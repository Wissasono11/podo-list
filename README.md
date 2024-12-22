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
  
### Device Support Responsive:
- Mobile Device✅
- Tablet Device✅
- Laptop Device✅

### Pomodoro Timer View
- Timer circular progress
- Work/Break mode buttons
- Custom time settings

### Todo List Interface
- Task management interface
- Checkbox completion

- Edit/Delete controls

### Spotify Integration
- Embedded player
- Playlist access
- Playback controls

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
<br>

## 📜 Copyright & License

## Copyright Notice
Copyright © 2024 PodoList All rights reserved.<br>
Developed by:
Bayu Wicaksono | AsepVanDjikstra (@Wissasono11)

## MIT License
MIT License

Copyright (c) 2024 PodoList

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    


      
