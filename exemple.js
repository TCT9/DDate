

const DDate = require('./index').DDate;
const TimeFactors = require('./index').TimeFactors;

const addPropValue = require('./index').addPropValue;
const locales = require('./index').locales;
const locales2 = require('./index').locales2;

const optionsDate = require('./index').optionsDate;
const optionsStyle = require('./index').optionsStyle;
const optionsTimeZone = require('./index').optionsTimeZone;
const optionsMatcher = require('./index').optionsMatcher;
const optionsHour = require('./index').optionsHour;
const optionEra = require('./index').optionEra;
const optionNumberingSystem = require('./index').optionNumberingSystem;
const optionCalendar = require('./index').optionCalendar;
const optionHourCycle = require('./index').optionHourCycle;


let dataInicial = new DDate("09/30/1972 00:00:00");

dataInicial.setLocaleString(locales['pt-BR']);

let options = {};
addPropValue(options, optionsDate.enum_day.digit);
addPropValue(options, optionsDate.enum_month.short);
addPropValue(options, optionsDate.enum_year.numeric);

addPropValue(options, optionsDate.enum_hour.digit);
addPropValue(options, optionsDate.enum_minute.digit);
addPropValue(options, optionsDate.enum_second.digit);

dataInicial.setOptions_LocaleString(options);

console.log(`\nData inicial: \t\t\t${dataInicial}`);
console.log(`Dias: ${dataInicial.getTime()/TimeFactors.days}\n`);


let time  = 68; //524.76;  // time 32.76 mêses
console.log(`Time em meses: ${time}`);
let dataAdicaoMes = dataInicial.add_Range(time).months();               // adiciona um range(intervalo) ao objeto 'dataInicial'. Retorna um DDate.
dataAdicaoMes.clone_locales_and_options(dataInicial);                   // clona locale e objOptions do objeto 'dataInicial'
console.log(`Data final, após ${time} meses: \t${dataAdicaoMes}`);    // Adiciona 32.76 meses ao objeto 'dataInicial'
console.log(`Dias: ${dataAdicaoMes.getTime()/TimeFactors.days}\n`);


time  = -time;  // time é -32.76 meses
console.log(`Time em meses: ${time}`);
let dataSubtracaoMes = dataAdicaoMes.add_Range(time).months();          // subtrai, pois o mês é negativo, um range(intervalo) ao objeto 'dataInicial'. Retorna um DDate.
dataSubtracaoMes.clone_locales_and_options(dataInicial);                //clona locale e objOptions do objeto 'dataInicial'
console.log(`Data final, após ${time} meses: \t${dataSubtracaoMes}`);
console.log(`Dias: ${dataSubtracaoMes.getTime()/TimeFactors.days}\n`);


time = 5; //43.73;    // time é 2.73 anos
console.log(`Time em anos: ${time}`);
let dataAdicaoAno = dataInicial.add_Range(time).years();            // adiciona um range(intervalo) ao objeto 'dataInicial'. Retorna um DDate.
dataAdicaoAno.clone_locales_and_options(dataInicial);               // clona locale e objOptions do objeto 'dataInicial'
console.log(`Data final, após ${time} anos: \t${dataAdicaoAno}`);
console.log(`Dias: ${dataAdicaoAno.getTime()/TimeFactors.days}\n`);


time  = -time;  // time é -2.73 anos
console.log(`Time em anos: ${time}`);
let dataSubtracaoAno = dataAdicaoAno.add_Range(time).years();       // subtrai, pois o mês é negativo, um range(intervalo) ao objeto 'dataInicial'. Retorna um DDate.
dataSubtracaoAno.clone_locales_and_options(dataInicial);            // clona locale e objOptions do objeto 'dataInicial'
console.log(`Data final, após ${time} anos: \t${dataSubtracaoAno}`);
console.log(`Dias: ${dataSubtracaoAno.getTime()/TimeFactors.days}\n`);
