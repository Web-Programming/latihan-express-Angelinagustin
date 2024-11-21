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
