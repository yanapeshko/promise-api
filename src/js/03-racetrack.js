import { bindAll } from 'lodash';
import '../css/common.css';

const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];
let raceCounter = 0;
const refs={
  startBtn:document.querySelector('.js-start-race'),
  winnerField:document.querySelector('.js-winner'),
  progressField:document.querySelector('.js-progress'),
  tableBody:document.querySelector('.js-results-table>tbody'),

}
refs.startBtn.addEventListener('click', onStart);
  
function onStart(){
  raceCounter +=1;
  const promises = horses.map(run);

  updateWinnerField('');
  updateProgressField('Заезд начался, ставки не принимаются!'); 
  
  determineWinner(promises);
  waitForAll(promises);
}

 



function determineWinner(horsesP){
  Promise.race(horsesP).then(({horse, time})=>{
    updateWinnerField(`Победил ${horse}, финишировала за ${time} времени!`);
    updateRusultsTable({horse, time, raceCounter});
  });
}

function waitForAll(horsesP){
  Promise.all(promises).then(()=>{
    updateProgressField('Заезд окончен принимаются ставки!');
  });
  
}
function updateWinnerField(message){
  refs.winnerField.textContent = message;
}

function updateProgressField(message){
  refs.progressField.textContent=message;
}

function updateRusultsTable({horse,time, raceCounter}){
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend',tr);
}
// console.log(
//   'Заезд начался, ставки не принимаются!',
// );
// run('Mango').then(x=>console.log(x));

const promises = horses.map(run);
console.log(promises);




/*
 * Promise.race([]) для ожидания первого выполнившегося промиса
 */




/*
 * Promise.all([]) для ожидания всех промисов
 */


function run(horse){
  return new Promise((resolve, reject)=>{
    const time = getRandomTime(2000,3500)

    setTimeout(()=>{
      resolve({horse, time});
    }, time);
  });
}

function getRandomTime(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
