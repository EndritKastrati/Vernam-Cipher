<p align="center">
  <a href="https://silasrodrigues.vercel.app">
    <img src="logo1.png" alt="Logo" height="40">
  </a>

<h3 align="center">Vernam Cipher</h3>
</p>


## Përmbledhje

Vernam Cipher është një metodë e kriptimit të tekstit alfabetik. Është një nga teknikat e zëvendësimit për konvertimin e plain-textit në cipher text. Në këtë mekanizëm, ne i caktojmë një numër çdo karakteri të plain-textit, si (a = 0, b = 1, … z = 25).
Në algoritmin Vernam Cipher, ne marrim një çelës për të enkriptuar plain-textin, gjatësia e të cilit duhet të jetë e barabartë me gjatësinë e plain-textit.

## Hapat e Enkriptimit

1. Per cdo karakter/gjatsi te plain-textit edhe qelsi duhet te jete me gjatsi te njejt.
2. Caktojm një numër për çdo karakter të plain-textit dhe çelësin sipas rendit alfabetik.
    p.sh Plain-text: OAK
         Qelsi:      SON
    - Shkronja O ka numrin 14 sipas radhes se alfabetit anglez,duke fillluar me radhe si (a = 0, b = 1, … z = 25).
3. Vlerat numerike decimale perkatese te shkronjave si ne plain-text si ne qels i konvertojm ne numra binar.
4. Pas konvertimin ne numra binar, i krahasojme me XOR-gate numrat binar te shkronjave ne vende/pozita te njejta.
    p.sh ne shembullin e pikes.2 :  O = 14 = 01110 (shkronja e pare ne plain-text) dhe S = 18 = 10010,
         pas    XOR rezultat final kemi : 11100 ose 28 decimal.
5. Pasi marrim nje rezultat pas konvertimeve si te cekura me larte, shohim a osht vlera e marr >=26, nese po e zbresim me 26, nese jo nuk e ndryshojme.
6. Ne rastin ton pasi 28 > 26 e zbresim dhe mbesim me vleren 2.
7. Hapi i fundit osht konvertimi i rezultatit ne shkronje, ne rastin tone 2 = C.

- Pra ne rastin kur kemi plain-textin: O dhe qelsin: S rezultati do jet shkronja: C.

## Struktura/files e Projektit

- `index.html`: Strukturë e thjeshtë ku mund të shihet teksti i enkriptuar pasi shtypet butoni i caktuar.
- `Style.css`: Dizajn i thjeshtë/atraktiv.
- `apps.js`: Logjika e plotë kryesore e cipherit.

## Tools të përdorura

- Visual Studio Code 
- JavaScript, Html and Css extensions
  
## Shembuj të ekzekutimit

![Screenshot (64)](https://github.com/EndritKastrati/Vernam-Cipher/assets/122494705/44ef826b-6dec-4425-aead-3232e183b877)


## Marrja e projektit

### Klononi Repositorin

```sh
git@github.com:EndritKastrati/Vernam-Cipher.git
```

<a href="#top">Shko në fillim ↑</a>


