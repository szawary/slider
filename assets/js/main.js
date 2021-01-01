'use strict';
const btnPicture1 = document.querySelector('.btnPicture1');
const btnPicture2 = document.querySelector('.btnPicture2');
const btnPicture3 = document.querySelector('.btnPicture3');
const btnPicture4 = document.querySelector('.btnPicture4');
const btnPicture5 = document.querySelector('.btnPicture5');
const btnPicture6 = document.querySelector('.btnPicture6');

const picNumber1 = 'var(--picture1)';
const picNumber2 = 'var(--picture2)';
const picNumber3 = 'var(--picture3)';
const picNumber4 = 'var(--picture4)';
const picNumber5 = 'var(--picture5)';
const picNumber6 = 'var(--picture6)';

const captionText1 = 'Tengerpart apálykor';
const captionText2 = 'Piros házak közötti csatorna';
const captionText3 = 'Naplemente a tengerparton';
const captionText4 = 'Virágzó fák Japánban';
const captionText5 = 'Őszi park Párizsban';
const captionText6 = 'Vihar utáni csend a parton';

const headerPicCounter1 = '1/6';
const headerPicCounter2 = '2/6';
const headerPicCounter3 = '3/6';
const headerPicCounter4 = '4/6';
const headerPicCounter5 = '5/6';
const headerPicCounter6 = '6/6';


function clickBtnPicture(btn, picNumber, captionText, headerPicCounter) {
    btn.addEventListener('click', () => {
        document.querySelector('.img__container').style.backgroundImage = `${picNumber}`;
        document.querySelector('.captionText').textContent = captionText;
        document.querySelector('.headerPicCounter').textContent = headerPicCounter;
        document.querySelector('.activeDot').classList.replace('activeDot', 'inactiveDot');
        btn.classList.replace('inactiveDot', 'activeDot');
    });
};

clickBtnPicture(btnPicture1, picNumber1, captionText1, headerPicCounter1);
clickBtnPicture(btnPicture2, picNumber2, captionText2, headerPicCounter2);
clickBtnPicture(btnPicture3, picNumber3, captionText3, headerPicCounter3);
clickBtnPicture(btnPicture4, picNumber4, captionText4, headerPicCounter4);
clickBtnPicture(btnPicture5, picNumber5, captionText5, headerPicCounter5);
clickBtnPicture(btnPicture6, picNumber6, captionText6, headerPicCounter6);




/*

Slider
Git-et használj! A repository-d neve: slider. Case sensitive-en.

Egy image slidert kell készítened JavaScript segítségével.

A képek adatai külön modulban legyenek
Egyszerre mindig csak egy kép látszódik
A képeknek van egy rövid megnevezése ami a slider alsó részében megjelenik
A képek automatikusan paraméterként megadható időközönként váltanak
A képek közötti átmenet valamilyen egyszerű animációval legyen megoldva, ez nem kell, hogy paraméterezhető legyen
A slider magassága paraméterként legyen megadható
A képek minden esetben töltsék ki rendelkezésre álló helyet
Ha egy kép túl nagy, egyszerűen ne jelenjen meg a felesleges rész
A bal felső sarokban kerüljön kiírásra, hogy hány kép van összesen és a lejátszás jelenleg hányadiknál tart
A jobb és a bal oldalon szerepeljen egy-egy ikon, amikkel manuálisan is tudunk lapozni
Az alsó részen a képek alatt a képeknek megfelelő számú jelölő legyen elhelyezve, melyekre kattintva a hozzá tartozó sorszámú képre tudunk váltani, tehát ez is egy lehetőség a manuális lapozásra

*/