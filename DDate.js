
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

const LEAP_YEARS_UNTIL_1970 = Math.trunc(1970/4) - Math.trunc(1970/100) + Math.trunc(1970/400);

function strategy_func_Month(objDayMonthYear){
    
    return {
        strategy_time: objDayMonthYear.month,
        strategy_function: "setMonth",
        objDayMonthYear: objDayMonthYear,
    };
}

function strategy_func_Year(objDayMonthYear){
    
    return {
        strategy_time: objDayMonthYear.year,
        strategy_function: "setYear",
        objDayMonthYear: objDayMonthYear,
    };
}


function add_range_base(interval_is_of_type, strategy_func) {

    //Exemple, interval_is_of_type = 2.73 months

    let value_frac = interval_is_of_type % 1;           // 0.73 months
    let value_trunc = Math.trunc(interval_is_of_type);  // 2 months

    //this.get_Year_Month_Day(this): retona um objeto {day, month, year}
    //objStrategy: retorna um objeto {strategy_time, strategy_function, objDayMonthYear}
    //objDayMonthYear é  {day, month, year}
    let objStrategy = strategy_func(this.get_Year_Month_Day(this));

    let {day: tDay, year:tYear, month: tMonth} = objStrategy.objDayMonthYear;

    // let date = new Date(`${tMonth+1}/${tDay}/${tYear}`);     // add 2 months
    let date = new Date(this.getTime());     // add 2 months
    // date.setHours(0);
    // date.setYear(tYear); date.setMonth(tMonth); date.setDate(tDay);
    

    // tMonth += month_trunc;  //value_trunc
    objStrategy.strategy_time += value_trunc;
    if (value_trunc != 0){
        // date.setMonth(tMonth);
        date[objStrategy.strategy_function](objStrategy.strategy_time);
    }

    tDay = date.getDate();
    tMonth = date.getMonth()+1;
    tYear = date.getFullYear();    


    // if (month_frac != 0){       // 0.73 != 0 ? true
    if (value_frac != 0){       // 0.73 != 0 ? true

        let objStrategy2 = strategy_func(this.get_Year_Month_Day(date));

        let {day, year, month} = objStrategy2.objDayMonthYear;

        // let nextDate = new Date(`${month+1}/${day}/${year}`);     // add 2 months
        let nextDate = new Date(date.getTime());     // add 2 months

        nextDate[objStrategy2.strategy_function]( objStrategy2.strategy_time + 1*Math.sign(value_frac) );

        let diff_getTime = Math.abs(nextDate.getTime() - date.getTime()); // difference in getTime
        let diff_days = diff_getTime/TimeFactors.days;            // difference in days

        let new_day = diff_days * value_frac       // diff_days * 0.73 months

        let day_frac = new_day % 1;                 //the whole part is day. The fractional part is time
        let day_trunc = Math.trunc(new_day);

        if (day_trunc > 0){
            tDay += day_trunc;
            date.setDate(tDay - 1);

            tDay = date.getDate();
            tMonth = date.getMonth()+1;
            tYear = date.getFullYear();    

        }else if (day_frac < 0){
            date.setDate(tDay + day_trunc);

            tDay = date.getDate();
            tMonth = date.getMonth()+1;
            tYear = date.getFullYear();    

        }else{
            tDay = date.getDate();
            tMonth = date.getMonth()+1;
            tYear = date.getFullYear();    
        }
        
        
        // let theDate1 = new Date(`${tMonth}/${tDay}/${tYear}`);

        if (day_frac != 0){

            let hours = 24*day_frac;
            let hour_int = Math.trunc(hours);
            let hour_frac = hours % 1;
            
            let minutes = hour_frac * 60;
            let minute_int = Math.trunc(minutes);
            let minute_frac = minutes % 1;

            let seconds = minute_frac * 60;
            let second_int = Math.trunc(seconds);
            let second_frac = seconds % 1;

            let millisecond_int = second_frac * 1000;

            // let theDate2 = new Date(`${tMonth}/${tDay}/${tYear}`);
            let theDate2 = new Date(date.getTime());

            theDate2.setHours(hour_int + date.getHours());
            theDate2.setMinutes(minute_int + date.getMinutes());
            theDate2.setSeconds(second_int + date.getSeconds());
            theDate2.setMilliseconds(millisecond_int + + date.getMilliseconds());
        
            return  new DDate(theDate2.getTime());
        }

        return new DDate(theDate1.getTime());

    }

    return new DDate(date.getTime());
    
}


class DDate extends Date {
    
    constructor(value){
        super(value);
    }

    getLeap_Years_from_1970_this_date(date) {

        let year = date.getFullYear();

        let until_1970 = LEAP_YEARS_UNTIL_1970;
        let until_year = Math.trunc(year/4) - Math.trunc(year/100) + Math.trunc(year/400);
        let leap_years = until_year - until_1970;

        return leap_years;
    }

    //Retorna o month+1 e day+1
    get_Year_Month_Day(date) {

        return {
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDate(),
        };
    }
    


    add_Range(interval_is_of_type){

        return {
            milliseconds: () => {
                let date = new DDate(this.getTime() + interval_is_of_type);
                return date;
            },

            seconds: () => {
                let date = new DDate(this.getTime() + interval_is_of_type*TimeFactors.seconds);
                return date;
            },

            minutes: () => {
                let date = new DDate(this.getTime() + interval_is_of_type*TimeFactors.minutes);
                return date;
            },

            hours: () => {
                let date = new DDate(this.getTime() + interval_is_of_type*TimeFactors.hours);
                return date;
            },

            days: () => {
                let date = new DDate(this.getTime() + interval_is_of_type*TimeFactors.days);
                return date;
            },

            months: () => add_range_base.call(this, interval_is_of_type, strategy_func_Month),
            
            years: () => add_range_base.call(this, 12*interval_is_of_type, strategy_func_Month),
            // years: () => add_range_base.call(this, interval_is_of_type, strategy_func_Year),
            
        };
    }

    setLocaleString(locale){
        this.locale = locale;
    }

    setOptions_LocaleString(objOptions){
        this.objOptions = objOptions;
    }

    toString(){
        let strDate = this.toLocaleDateString(this.locale, this.objOptions);
        return strDate;
    }

    clone_locales_and_options(objDDate){
        this.locale = objDDate.locale;
        this.objOptions = objDDate.objOptions
    }

    diff_dates(date1, date2){

    }

}



let dataInicial = new DDate("01/31/1972 00:00:00");

dataInicial.setLocaleString(locales['pt-BR']);

let options = {};
addPropValue(options, optionsDate.enum_day.digit);
addPropValue(options, optionsDate.enum_month.digit);
addPropValue(options, optionsDate.enum_year.digit);

addPropValue(options, optionsDate.enum_hour.digit);
addPropValue(options, optionsDate.enum_minute.digit);
addPropValue(options, optionsDate.enum_second.digit);

dataInicial.setOptions_LocaleString(options);

console.log(`Data inicial: \t\t\t${dataInicial}\n`);



let time  = 32.76;  // time 32.76 mêses
console.log(`Time em meses: ${time}`);
let dataAdicaoMes = dataInicial.add_Range(time).months();               // adiciona um range(intervalo) ao objeto 'dataInicial'. Retorna um DDate.
dataAdicaoMes.clone_locales_and_options(dataInicial);                   // clona locale e objOptions do objeto 'dataInicial'
console.log(`Data final, após ${time} meses: \t${dataAdicaoMes}\n`);    // Adiciona 32.76 meses ao objeto 'dataInicial'

time  = -time;  // time é -32.76 meses
console.log(`Time em meses: ${time}`);
let dataSubtracaoMes = dataAdicaoMes.add_Range(time).months();          // subtrai, pois o mês é negativo, um range(intervalo) ao objeto 'dataInicial'. Retorna um DDate.
dataSubtracaoMes.clone_locales_and_options(dataInicial);                //clona locale e objOptions do objeto 'dataInicial'
console.log(`Data final, após ${time} meses: \t${dataSubtracaoMes}\n`);

time = 2.73;    // time é 2.73 anos
console.log(`Time em anos: ${time}`);
let dataAdicaoAno = dataInicial.add_Range(time).years();            // adiciona um range(intervalo) ao objeto 'dataInicial'. Retorna um DDate.
dataAdicaoAno.clone_locales_and_options(dataInicial);               // clona locale e objOptions do objeto 'dataInicial'
console.log(`Data final, após ${time} anos: \t${dataAdicaoAno}\n`);

time  = -time;  // time é -2.73 anos
console.log(`Time em anos: ${time}`);
let dataSubtracaoAno = dataAdicaoAno.add_Range(time).years();       // subtrai, pois o mês é negativo, um range(intervalo) ao objeto 'dataInicial'. Retorna um DDate.
dataSubtracaoAno.clone_locales_and_options(dataInicial);            // clona locale e objOptions do objeto 'dataInicial'
console.log(`Data final, após ${time} anos: \t${dataSubtracaoAno}\n`);
