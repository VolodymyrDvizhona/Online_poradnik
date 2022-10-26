
  
  
let categories = [
  {
    categoryName: "biznes",
    questions: [
      "zarządzanie biznesem",
      "markoekonomia biznesu",
      "jak utworzyć biznes"
    ]
  },
  {
    categoryName: "literatura naukowa",
    questions: [
      "Fizyka kwantowa",
      "Nauka(Ogólne)",
      "Nauka programowania"
    ]
  },
  {
    categoryName: "historia",
    questions: [
      "Historia światu",
      "Historia Polski"
    ]
  }
];

let headings = document.querySelectorAll('.categories p');
let answersWrapper = document.querySelector('.answers');
let submitButton = document.querySelector('.button')
let selected;


headings.forEach(item => {
  item.addEventListener('click', function (e){

    selected = e.target.getAttribute('data-category');

    document.querySelector('.categories').style.display = 'none';
    document.querySelector('.question-wrapper').style.display = 'block';

    categories.forEach(item => {
      if (selected === item.categoryName){
        item.questions.forEach((option, index) => {
          answersWrapper.insertAdjacentHTML('beforeend',
            '<div class="option">'
            +     '<input name="options" type="radio" id="'+index+'" value="'+option+'"><label for="'+index+'">'+option+'</label><br>'
            +   '</div>'
            );
        });
      }
    })
  })
})

submitButton.addEventListener('click', function (event){
  event.preventDefault();
  let answer = document.querySelector('input[name="options"]:checked');
  document.querySelector('.question-wrapper').style.display = 'none';

  if ( answer.value === 'zarządzanie biznesem'){
    document.querySelector('.results').insertAdjacentHTML('beforeend',
  '<h3><a href="https://www.swiatksiazki.pl/kodeks-pracy-wynagrodzenia-urlopy-i-czas-pracy-pracownicze-plany-kapitalowe-ochrona-zatrudnienia-6911845-ksiazka.html">Chcę doznać się jak działa plan,realizacja i inny...</a></h3>'
      +'<h3><a href="https://www.swiatksiazki.pl/skuteczne-zarzadzanie-zespolem-jak-uzyskac-harmonie-zaufanie-i-widoczne-efekty-pracy-w-zespole-6827280-ksiazka.html">Chcę doznać się jak pracować w zespołe(zarządzanie ludzi jako szef np)</a></h3>'
      +'<h3><a href="https://www.swiatksiazki.pl/git-i-github-kontrola-wersji-zarzadzanie-projektami-i-zasady-pracy-zespolowej-6856202-ksiazka.html">Nie wiem jak kontrolować wszystkie chwile biznesu, i chcę doznać się</a></h3>'
      +'<h3><a href="https://www.spiderscribe.net/">Mam płan na biznes i chcę doznać się który jest najlepszyj sposób do schematyky płanu(pomoże w budowie planu)</a></h3>'
    )
  } else if( answer.value === 'markoekonomia biznesu'){
    document.querySelector('.results').insertAdjacentHTML('beforeend',
      '<h3><a href="https://www.swiatksiazki.pl/ekonomia-dla-kazdego-6621726-ksiazka.html">Chcę doznać się co jest makroekonimia, jaka różnica  między makro i mikro</a></h3>'
      +'<h3><a href="https://www.swiatksiazki.pl/wspolpraca-zawodowa-w-srodowisku-wielokulturowym-6636740-ksiazka.html">Mam problemy z realizacją spółpracy z innymy krajami</a></h3>'
      +'<h3><a href="https://www.swiatksiazki.pl/job-crafting-nowa-metoda-budowania-zaangazowania-i-poczucia-sensu-pracy-przedsprzedaz-6921058-ksiazka.html">Chcę doznać się wszystki momenty w jednej książke.</a></h3>'
    )
   } else if( answer.value === 'jak utworzyć biznes'){
    document.querySelector('.results').insertAdjacentHTML('beforeend',
      '<h3><a href="https://www.swiatksiazki.pl/job-crafting-nowa-metoda-budowania-zaangazowania-i-poczucia-sensu-pracy-przedsprzedaz-6921058-ksiazka.html">Odrazu może cię zaproponować </a></h3>'
    )
  }
else if( answer.value === 'Historia światu'){
  document.querySelector('.results').insertAdjacentHTML('beforeend',
    '<h3><a href="https://www.swiatksiazki.pl/znaczenie-wojny-6592032-ksiazka.html">Wojny, co to jest? </a></h3>'
    +'<h3><a href="https://www.swiatksiazki.pl/o-rewolucji-6588431-ksiazka.html">Rewolucja w świacie </a></h3>'
    +'<h3><a href="https://www.swiatksiazki.pl/the-oxford-illustrated-history-of-the-world-6889525-ksiazka.html">History of the world </a></h3>'
  )
}

else if( answer.value === 'Fizyka kwantowa'){
  document.querySelector('.results').insertAdjacentHTML('beforeend',
    '<h3><a href="https://www.swiatksiazki.pl/fizyka-kwantowa-na-co-dzien-6835476-ksiazka.html">Fizyka kwantowa dla początku </a></h3>'
    +'<h3><a href="https://www.swiatksiazki.pl/kwantowa-rzeczywistosc-w-poszukiwaniu-prawdziwego-znaczenia-mechaniki-kwantowej-6740109-ksiazka.html">Fizyka kwantowa dla tych, którzy są zaznajomieni z nią </a></h3>'
    +'<h3><a href="https://www.swiatksiazki.pl/przestrzen-kwantowa-petlowa-grawitacja-kwantowa-i-poszukiwanie-struktury-przestrzeni-czasu-i-wszec-6649405-e-book.html">Czas i grawitacja </a></h3>'
  )
}
else if( answer.value === 'Nauka(Ogólne)'){
  document.querySelector('.results').insertAdjacentHTML('beforeend',
    '<h3><a href="https://www.swiatksiazki.pl/wszystkie-podlosci-nauki-morderstwa-oszustwa-i-kradzieze-popelniane-przez-naukowcow-6794903-ksiazka.html">Niewidzialne chwile nauki</a></h3>'
    +'<h3><a href="https://www.swiatksiazki.pl/300-faktow-nauka-6370759-ksiazka.html">Co jest nauką?</a></h3>'
  )
}
else if( answer.value === 'Nauka programowania'){
  document.querySelector('.results').insertAdjacentHTML('beforeend',
    '<h3><a href="https://www.swiatksiazki.pl/visual-c-dla-zupelnie-poczatkujacych-owoce-programowania-wydanie-iv-6501800-ksiazka.html">C# </a></h3>'
    +'<h3><a href="https://www.swiatksiazki.pl/wprowadzenie-do-c-6878233-ksiazka.html">C++ </a></h3>'
    +'<h3><a href="https://www.swiatksiazki.pl/efektywny-c-wprowadzenie-do-profesjonalnego-programowania-6809934-ksiazka.html">C </a></h3>'
    +'<h3><a href="https://www.swiatksiazki.pl/python-wprowadzenie-wydanie-v-6850926-ksiazka.html">Python </a></h3>'
    +'<h3><a href="https://www.swiatksiazki.pl/java-uniwersalne-techniki-programowania-6624729-e-book.html">Java </a></h3>'
    +'<h3><a href="https://www.swiatksiazki.pl/javascript-przewodnik-poznaj-jezyk-mistrzow-programowania-wydanie-vii-6725341-ksiazka.html">Javascript </a></h3>'
  )
} else if( answer.value === 'Historia Polski'){
  document.querySelector('.results').insertAdjacentHTML('beforeend',
    '<h3><a href="https://www.swiatksiazki.pl/historia-polski-1914-2022-6913726-ksiazka.html">Wszystka historia Polski </a></h3>'
    +'<h3><a href="https://www.swiatksiazki.pl/tajemnicza-polska-niewyjasnione-historie-zapomniane-skarby-sensacyjne-odkrycia-6913717-ksiazka.html">Tajemnicza Polska historia </a></h3>'
  )
}
})
