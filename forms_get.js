 class GetForms {
     constructor(kerjasama, nama, email, nomor_telfon, topik) {
         this.kerjasama = kerjasama;
         this.nama = nama;
         this.email = email;
         this.nomor_telfon = nomor_telfon;
         this.topik = topik;
     }
     out() {
         const data = this.kerjasama.options[this.kerjasama.selectedIndex].text
         console.log(this.data);
         console.log(this.nama);
         console.log(this.email);
         console.log(this.nomor_telfon);
         console.log(this.topik);
     }
 }

 export default GetForms;