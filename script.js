function toggleMenu() {
  document.querySelector('#burger-container').classList.toggle('invisible');
  document.querySelector('#nav').classList.toggle('invisible');
}

document.getElementById('burger-container').onclick = () => { toggleMenu(); };

const speakers = [
  {
    imagesURL: ['./assets/11-chess-board-removebg-preview.png', './assets/11-chess-board-gray.png', './assets/person-1.jpg'],
    name: 'June Jusper',
    occupation: 'CEO of Golden View School',
    info: 'June is the CEO of Golden View School, She is a founded this school for the aim of supporting students to acquire Knowleadge and skills they need',
  },
  {
    imagesURL: ['./assets/11-chess-board-removebg-preview.png', './assets/11-chess-board-gray.png', './assets/person-2.jpg'],
    name: 'Anite Caren',
    occupation: 'Managing Director',
    info: 'She ensures all students get the materials they need for they study and ensure everything else run smooth for both online classes and physical',

  },
  {
    imagesURL: ['./assets/11-chess-board-removebg-preview.png', './assets/11-chess-board-gray.png', './assets/persons2.jpg'],
    name: 'Faith Mercy',
    occupation: 'Admission Officer',
    info: 'Mercy will be the one in-charge of your admission process and admits you to the system and provide neccesary assistant when required.You will enjoy the admission process with her',
  },
  {
    imagesURL: ['./assets/11-chess-board-removebg-preview.png', './assets/11-chess-board-gray.png', './assets/person-4.jpg'],
    name: 'Brian Kevin',
    occupation: 'Career Coach',
    info: 'Brian will be in-charge and will be a person to talk to frequently about your career and will advise alot about the career path you want to take',
  },
  {
    imagesURL: ['./assets/11-chess-board-removebg-preview.png', './assets/11-chess-board-gray.png', './assets/persons1.jpg'],
    name: 'James Omollo',
    occupation: 'Department of Software engineering',
    info: 'James is incharge of the Software Engineering school. He approves the courses offered and also learning material to check if they meet the standard required in the field',
  },
  {
    imagesURL: ['./assets/11-chess-board-removebg-preview.png', './assets/11-chess-board-gray.png', './assets/person-6.jpg'],
    name: 'Hart Davies',
    occupation: 'Dean of Students',
    info: 'Hart is the dean of students and ensure the students experience a nice environment in school.He also ensure the school rules and regulation are followed to ensure smooth running',
  },
];

function htmlGen(num) {
  for (let i = 0; i < num; i += 1) {
    const spkCard = `
      <div class="speaker-card">
        <img src="#" alt="" class="speaker-deco">
        <img src="#" alt="Headshot picture" class="speaker-img">
        <div class="speaker-info">
          <h3 class="speaker-name"></h3>
          <h4 class="speaker-occ" ></h4>
          <hr>
          <p class="speaker-para"></p>
        </div>
      </div>
    `;

    document.getElementById('speaker-container').innerHTML += spkCard;

    const deco = document.querySelectorAll('.speaker-deco');
    const img = document.querySelectorAll('.speaker-img');
    const name = document.querySelectorAll('.speaker-name');
    const occ = document.querySelectorAll('.speaker-occ');
    const info = document.querySelectorAll('.speaker-para');

    if (window.innerWidth > 768) {
      deco[i].setAttribute('src', `${speakers[i].imagesURL[1]}`);
    } else {
      deco[i].setAttribute('src', `${speakers[i].imagesURL[0]}`);
    }

    img[i].setAttribute('src', `${speakers[i].imagesURL[2]}`);
    name[i].innerHTML = speakers[i].name;
    occ[i].innerHTML = speakers[i].occupation;
    info[i].innerHTML = speakers[i].info;
  }
}

function spkBtnValid() {
  if (document.querySelector('#morles').innerHTML === 'MORE ') {
    return false;
  }
  return true;
}

function widthTeller() {
  if (spkBtnValid() || window.innerWidth > 768) {
    document.getElementById('speaker-container').innerHTML = '';
    htmlGen(6);
  } else {
    document.getElementById('speaker-container').innerHTML = '';
    htmlGen(2);
  }
  return window.innerWidth;
}

function toggleSpeakers() {
  const btnValue = document.getElementById('morles').innerHTML;
  if (btnValue === 'MORE ') {
    document.getElementById('morles').innerHTML = 'LESS ';
    document.getElementById('chevron').classList.replace('fa-chevron-down', 'fa-chevron-up');
    return widthTeller();
  }
  document.getElementById('morles').innerHTML = 'MORE ';
  document.getElementById('chevron').classList.replace('fa-chevron-up', 'fa-chevron-down');
  return widthTeller();
}

const btn = document.querySelector('.speaker-btn');
window.addEventListener('resize', widthTeller);
btn.onclick = () => { toggleSpeakers(); };

widthTeller();