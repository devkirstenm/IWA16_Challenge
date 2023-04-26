// creates array called 'months' that has a list of 12 string values
// each value in arrays has associated index no
const MONTHS = [
    'Jan', 
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

// creates variable/object 'data' that contains nested key-value pairs that further contain nested key-vale pairs [nested arrays]
// You can access individual values in an object using their keys. 
// For example, data.response.requestType would return "FETCH_ATHLETE_DATA",
const data = {
response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
    NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
        {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
        },
        {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
        },
        ],
    },

    SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
        {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
        },
        {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
        },
        {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
        },
        {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
        },
        ],
    },
    },
},
};

// Only edit below this comment

// arrow function declaration
const createHtml = (athlete) => { // changed athlete to specific ID number
const {firstName, surname, id, races} = athlete // added const and {}
const [{date, time}] = races.reverse() // added [] and {} around date/time

const fragment = document.createDocumentFragment();

const title = document.createElement(h2); // added const to variable title
title.textContent = id; // set the text of the element
fragment.appendChild(title);

const list = document.createElement(dl);

const day = date.getDate();
const month = MONTHS[date.month];
const year = date.year;

const [first, second, third, fourth] = time; // changed timeasarray to time as its already an array and added const to variable
const total = first + second + third + fourth; // added const

const hours = total / 60;
const minutes = total / hours / 60;

// correct format for variables
const athleteInfo = document.getElementById("athlete-info");
athleteInfo.list.innerHTML = /* html */ ` 
    <dt>Athlete</dt>
    <dd>${firstName} ${surname}</dd>  

    <dt>Total Races</dt>
    <dd>${races.length}</dd> 

    <dt>Event Date (Latest)</dt>
    <dd>${day} ${month} ${year}</dd>

    <dt>Total Time (Latest)</dt>
    <dd>${hours.padStart(2, '0')} ${minutes}</dd>
`;

fragment.appendChild(list);
}
const {NM372, SV782} = data.response.data // added other variables nested inside to properly access the athletes
document.querySelector(NM372).appendChild(createHtml(NM372));
document.querySelector(SV782).appendChild(createHtml(SV782));