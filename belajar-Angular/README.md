# BelajarAngular
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0.

## Melakukan installasi pada anggular
```bash
npm install -g @angular/cli
```

## Membuat project baru 
```bash
ng new <project-name>
```
Memilih format CSS, Memilih static site, dan API


## Memilih Proyek
```bash
cd nama proyek
```

## Cara Menjalankan server
1:
```bash
ng serve
```
2:
```bash
npm serve
```
buka browser dan jalankan `http://localhost:4200/`.


## Membuat Component
```bash
ng g c home
```
```bash
ng g c HousingLocation --standalone --inline-template
```
```bash
ng g c details --standalone --inline-template
```
```bash
ng g c login
```
```bash
ng g c register
```
```bash
ng generate --help
```


## Membuat Models monggo db
```bash
ng g i HousingLocation
```

## Membuat service
```bash
ng g s housing
```

```bash
ng g s authentication
```
```bash
ng g i storage
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

selesaikan component detail sehingga dapat menampilkan data housing location dari API 
- buat route / housing/{id} yang menerima parameter id untuk mendapatkan data housing dari mongo db berdasarkan id yang dikirim 
- buat model untuk data register (apply housing) dengan property/ fielsd firstName, lastName dan email
- tentukan controller dan routes untuk menyimpan/ insert data registrassi. pastikan route daoat diakses dan digunakan untuk menginsert data ke monggo db 
- selesaikan methid submitApplication() pada service housing dengan memanggil API insert/ register menggunakan fungsi HTTP fetch dengan methode post. pastikan fitur appy to live here dapat berjalan hingga data dapat tersimpan ke monggo db 

contoh pengunaan fetch dengan methode POST:
contoh data = fect (apiurl, 
{
  methode :'POST',
  data :JSON.stingify ({nama: "Rachmat", npm : "00000001"})
});
