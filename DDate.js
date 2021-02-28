// Configuração
const config_Gregorian_Calendar = {
    start_year: 1900,
    start_day: 1,           
    start_month: 1,

    // A data 01/January/1900 caiu em uma segunda-feira
    day_of_the_week: 2,     // 1: Sunday, 2: Monday, 3: Tuesday, 4: Wednesday, 5: Thursday,
                            // 6: Friday, 7: Saturday
}

// Constantes para cálculo do número de anos bissextos até o ano 
// inicial (config_Gregorian_Calendar.start_year)
const DIVISION_BY_4_TRUNCATED = Math.trunc(config_Gregorian_Calendar.start_year/4);
const DIVISION_BY_100_TRUNCATED = Math.trunc(config_Gregorian_Calendar.start_year/100);
const DIVISION_BY_400_TRUNCATED = Math.trunc(config_Gregorian_Calendar.start_year/400);

// Constante usada nos cálculos de quantidade de anos bissextos em um período
const BISEXT_YEARS_TO_EARLY_YEAR = DIVISION_BY_4_TRUNCATED - DIVISION_BY_100_TRUNCATED + DIVISION_BY_400_TRUNCATED;

// Vetor com os dias de cada mês. Janeiro é índice zero.
const VECTOR_DAYS_PER_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const VECTOR_DAYS_PER_MONTH_BISSEXTILE = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Vetor com os dias acumulados de cada mês. Janeiro é índice zero.
const ACCUMULATED_VECTOR_DAYS_PER_MONTH = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
const ACCUMULATED_VECTOR_DAYS_PER_MONTH_BISSEXTILE = [31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];


// Retorna a quantidade de anos bissextos até este ano
function getBissext_Years_Until_This_Year(year) {

    let div_4_trunc = Math.trunc(year/4);
    let div_100_trunc = Math.trunc(year/100);
    let div_400_trunc = Math.trunc(year/400);

    return (div_4_trunc - div_100_trunc + div_400_trunc) - BISEXT_YEARS_TO_EARLY_YEAR;
}

// Retorna a quantidade de dias, desde de 'config_Gregorian_Calendar.start_year' até 'year'
function getNumber_Of_Days_Since_Start_Year(year) {

    let years_diff = year - config_Gregorian_Calendar.start_year;

    if (years_diff > 0){

        let bissextile_year = getBissext_Years_Until_This_Year(year);
        
        //365*(years_diff - bissextile_year) + 366*bissextile_year
        //365*years_diff - 365*bissextile_year + 366*bissextile_year
        //365*years_diff + bissextile_year
        return 365*years_diff + bissextile_year;
    }
    return 0;
}


// Retorna um vetor com o total de  dias de cada mês
function getVector_Days_Per_Month(year) {

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return VECTOR_DAYS_PER_MONTH_BISSEXTILE;
    }

    return VECTOR_DAYS_PER_MONTH;
}

// Retorna um vetor com acumulado de dias por mês.
// Exemplo: até janeiro tem 31 dias. Até fevereiro 59 dias (se ano não for bissexto)
function getAccumulated_Vector_Days_Per_Month(year) {

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return ACCUMULATED_VECTOR_DAYS_PER_MONTH_BISSEXTILE;
    }

    return ACCUMULATED_VECTOR_DAYS_PER_MONTH;
}

function getDays_in_Month(year, month){
    
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return VECTOR_DAYS_PER_MONTH_BISSEXTILE[month-1];
    }

    return VECTOR_DAYS_PER_MONTH[month-1];
}

function getAccumulated_Days_in_Month(year, month){
    
    if (month < 1) {
        return 0;
    }

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return ACCUMULATED_VECTOR_DAYS_PER_MONTH_BISSEXTILE[month-1];
    }

    return ACCUMULATED_VECTOR_DAYS_PER_MONTH[month-1];
}

function getNumber_Of_Days_since_January_1(day, month, year){

    // Contagem de dias de 01/jan até day/
    let days_since = getAccumulated_Days_in_Month(year, month-1);
    days_since += day;

    return days_since;
}

//Teste se number_value é do tipo numérico
function isNumber(number_value) {
    
    let has_error = !(typeof number_value === 'number') || !isFinite(number_value);

    if (has_error === false){
        has_error = isNaN(number_value);
    }

    return !has_error;
}

function test_param_year_is_error(year){

    if (isNumber(year) == false){
        return {isError: true, message: `O valor para 'year' ${year} não é um número`, idError: 1};
    }
    
    if (year < config_Gregorian_Calendar.start_year) {
        return {isError: true, message: `O ano ${year} é menor do que ${config_Gregorian_Calendar.start_year}`, idError: 2};
    }

    return {isError: false, message: "done", idError: 0};
}

function test_params_day_month_is_error(day, month, year){

    if (isNumber(day) == false){
        return {isError: true, message: `O valor para 'day' ${day} não é um número`, idError: 3};
    }

    if (isNumber(month) == false){
        return {isError: true, message: `O valor para 'month' ${month} não é um número`, idError: 4};
    }

    if (day < 1 && day > 31){
        return {isError: true, message: `O intervalo de 'day' é entre 1 e 31. O valor ${day} não é permitido`, idError: 5};
    }

    if (month < 1 && month > 12){
        return {isError: true, message: `O intervalo de 'month' é entre 1 e 12. O valor ${month} não é permitido`, idError: 6};
    }

    if (day >  getDays_in_Month(year, month)) {
        return {isError: true, message: `O mês '${month}' não possui o dia '${day}'. 'day' não permitido.`, idError: 7};
    }

    return {isError: false, message: "Done!", idError: 0};

}

class DDate {

    #time = 0; 
    #day = 0; #month = 0; #year = 0; 
    #isError; #message; #idError

    constructor(month_or_day, day_or_month, year, is_it_month_day_and_year = true) {
        
        let _month; let _day; let _year;

        if (is_it_month_day_and_year) {
            _month = month_or_day;
            _day = day_or_month;
        }else{
            _month = day_or_month;
            _day = month_or_day;

        }
        
        _year = year;
        {
            let {isError, message, idError} = test_param_year_is_error(_year);
            if (isError) {
                return {isError: true, message: message, idError: idError};
            }
        }

        {
            let {isError, message, idError} = test_params_day_month_is_error(_day, _month);
            if (isError) {
                return {isError: true, message: message,  idError: idError};
            }
        }

        let time = getNumber_Of_Days_Since_Start_Year(_year) + 
            getNumber_Of_Days_since_January_1(_day, _month, _year);

        this.#year = _year;
        this.#month = _month;
        this.#day = _day;
        this.#time = time;
        this.#isError = false;
        this.#message = "Done!";  
        this.#idError = 0;

        //Object.freeze(this);
    }

    getNativeDate(){
        return new Date(`${this.#month}/${this.#day}/${this.#year}`);
    }

    getTime(){
        return this.#time;
    }

    getDay(){
        return this.#day;
    }

    getMonth(){
        return this.#month;
    }

    getYear(){
        return this.#year;
    }

    getIsError(){
        return this.#isError;
    }

    getObjectError(){
        return {
            isError: this.#isError,
            message: this.#message, 
            idError: this.#idError,
            error: new Error(this.#message),
        } 
    }

}

let temp1 = new DDate(1, 28, 1972);

console.log (`Index: ${temp1.index}`);

temp1.index = 0;
console.log (`Index: ${temp1.index}`);

console.log (`Index: ${temp1.getIndex()}`);
