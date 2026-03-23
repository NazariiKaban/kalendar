const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-contrainer");

function addTask(){
  if (inputBox.value === ""){
    alert('You must write something');
  }
  else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    
  }
  inputBox.value = '';
  saveData();
}

listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } 
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask()


const monthYearEl = document.getElementById('month-year');
const daysContainer = document.getElementById('calendar-days');
const dayNamesContainer = document.querySelector('.calendar_day-names');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

//Массивы месяцев и дней недели

const monthNames = [
  'January', 'February', 'March',
   'April', 'May', 'June',
   'July', 'August', 'September',
    'October', 'November', 'December'
];

const dayNames = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday',
   'Friday', 'Saturday', 'Sunday'
];

let currentDate = new Date();

const renderDayNames = () => {
  dayNamesContainer.innerHTML = dayNames.map(day => 
    `<span>${day}</span>`).join(``);
}

const renderCalendar = () => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  monthYearEl.textContent = `${monthNames[month]} ${year}`;

  const firstDay = (new Date(year,month).getDay() + 6) % 7;
  const daysInMonth = 32 - new Date(year,month, 32).getDate();

  daysContainer.innerHTML = '';

  for (let i = 0; i  < firstDay; i++) {
      daysContainer.innerHTML += '<span class="calendar_days-hidden"></span>';
  } 

  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = day === new Date().getDate() &&
                        month === new Date().getMonth() &&
                        year === new Date().getFullYear();

  daysContainer.innerHTML += `<span class="${isToday ? 'today' : ''}">${day}</span>`
  }
}
const changeMonth = (delta) => {
  currentDate.setMonth(currentDate.getMonth() + delta);
  renderCalendar();
}

prevBtn.addEventListener('click',() => changeMonth(-1));
nextBtn.addEventListener('click',() => changeMonth(1));

renderDayNames();
renderCalendar();