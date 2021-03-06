"use strict";

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString


/*

    nu(Numbering system), ca(Calendar), hc(Hour cycle)

*/


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat

//Numbering system. Possible values include:
const enum_nu = {

    arab: {nu: "arab"}, 
    arabext: {nu: "arabext"},
    bali: {nu: "bali"}, 
    beng: {nu: "beng"}, 
    deva: {nu: "deva"}, 
    fullwide: {nu: "fullwide"}, 
    gujr: {nu: "gujr"}, 
    guru: {nu: "guru"}, 
    hanidec: {nu: "hanidec"}, 
    khmr: {nu: "khmr"}, 
    knda: {nu: "knda"}, 
    laoo: {nu: "laoo"}, 
    latn: {nu: "latn"}, 
    limb: {nu: "limb"}, 
    mlym: {nu: "mlym"}, 
    mong: {nu: "mong"}, 
    mymr: {nu: "mymr"}, 
    orya: {nu: "orya"}, 
    tamldec: {nu: "tamldec"}, 
    telu: {nu: "telu"}, 
    thai: {nu: "thai"}, 
    tibt: {nu: "tibt"},

}

//Calendar. Possible values include:
const enum_ca =  {

    buddhist: {ca: "buddhist"}, 
    chinese: {ca: "chinese"}, 
    coptic: {ca: "coptic"}, 
    ethiopia: {ca: "ethiopia"}, 
    ethiopic: {ca: "ethiopic"}, 
    gregory: {ca: "gregory"}, 
    hebrew: {ca: "hebrew"}, 
    indian: {ca: "indian"}, 
    islamic: {ca: "islamic"}, 
    iso8601: {ca: "iso8601"}, 
    japanese: {ca: "japanese"}, 
    persian: {ca: "persian"}, 
    roc: {ca: "roc"},
}

// Hour cycle. Possible values include:
const enum_hc = {

    h11: {hc: "h11"}, 
    h12: {hc: "h12"}, 
    h23: {hc: "h23"}, 
    h24: {hc: "h24"},
}

//The date formatting style to use when calling format(). Possible values include:
const enum_dateStyle = {

    full: {dateStyle: "full"},
    long: {dateStyle: "long"},
    medium: {dateStyle: "medium"},
    short: {dateStyle: "short"},
}

// The time formatting style to use when calling format(). Possible values include:
const enum_timeStyle = {

    full: {timeStyle: "full"},
    long: {timeStyle: "long"},
    medium: {timeStyle: "medium"},
    short: {timeStyle: "short"},

}

// The locale matching algorithm to use. Possible values are "lookup" and "best fit"; 
// the default is "best fit". For information about this option, see the Intl page.
const enum_localeMatcher = {

    best_fit: {localeMatcher: "best fit"},
    lookup: {localeMatcher: "lookup"},

}

// The time zone to use. The only value implementations must recognize is "UTC"; 
// the default is the  runtime's default time zone. Implementations may also recognize 
// the time zone names of the IANA time zone database, such as "Asia/Shanghai", 
// "Asia/Kolkata", "America/New_York".

//Font: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
const enum_timeZone = {

    'Africa/Abidjan': { timeZone: 'Africa/Abidjan'},
    'Africa/Accra': { timeZone: 'Africa/Accra'},
    'Africa/Addis_Ababa': { timeZone: 'Africa/Addis_Ababa'},
    'Africa/Algiers': { timeZone: 'Africa/Algiers'},
    'Africa/Asmara': { timeZone: 'Africa/Asmara'},
    'Africa/Asmera': { timeZone: 'Africa/Asmera'},
    'Africa/Bamako': { timeZone: 'Africa/Bamako'},
    'Africa/Bangui': { timeZone: 'Africa/Bangui'},
    'Africa/Banjul': { timeZone: 'Africa/Banjul'},
    'Africa/Bissau': { timeZone: 'Africa/Bissau'},
    'Africa/Blantyre': { timeZone: 'Africa/Blantyre'},
    'Africa/Brazzaville': { timeZone: 'Africa/Brazzaville'},
    'Africa/Bujumbura': { timeZone: 'Africa/Bujumbura'},
    'Africa/Cairo': { timeZone: 'Africa/Cairo'},
    'Africa/Casablanca': { timeZone: 'Africa/Casablanca'},
    'Africa/Ceuta': { timeZone: 'Africa/Ceuta'},
    'Africa/Conakry': { timeZone: 'Africa/Conakry'},
    'Africa/Dakar': { timeZone: 'Africa/Dakar'},
    'Africa/Dar_es_Salaam': { timeZone: 'Africa/Dar_es_Salaam'},
    'Africa/Djibouti': { timeZone: 'Africa/Djibouti'},
    'Africa/Douala': { timeZone: 'Africa/Douala'},
    'Africa/El_Aaiun': { timeZone: 'Africa/El_Aaiun'},
    'Africa/Freetown': { timeZone: 'Africa/Freetown'},
    'Africa/Gaborone': { timeZone: 'Africa/Gaborone'},
    'Africa/Harare': { timeZone: 'Africa/Harare'},
    'Africa/Johannesburg': { timeZone: 'Africa/Johannesburg'},
    'Africa/Juba': { timeZone: 'Africa/Juba'},
    'Africa/Kampala': { timeZone: 'Africa/Kampala'},
    'Africa/Khartoum': { timeZone: 'Africa/Khartoum'},
    'Africa/Kigali': { timeZone: 'Africa/Kigali'},
    'Africa/Kinshasa': { timeZone: 'Africa/Kinshasa'},
    'Africa/Lagos': { timeZone: 'Africa/Lagos'},
    'Africa/Libreville': { timeZone: 'Africa/Libreville'},
    'Africa/Lome': { timeZone: 'Africa/Lome'},
    'Africa/Luanda': { timeZone: 'Africa/Luanda'},
    'Africa/Lubumbashi': { timeZone: 'Africa/Lubumbashi'},
    'Africa/Lusaka': { timeZone: 'Africa/Lusaka'},
    'Africa/Malabo': { timeZone: 'Africa/Malabo'},
    'Africa/Maputo': { timeZone: 'Africa/Maputo'},
    'Africa/Maseru': { timeZone: 'Africa/Maseru'},
    'Africa/Mbabane': { timeZone: 'Africa/Mbabane'},
    'Africa/Mogadishu': { timeZone: 'Africa/Mogadishu'},
    'Africa/Monrovia': { timeZone: 'Africa/Monrovia'},
    'Africa/Nairobi': { timeZone: 'Africa/Nairobi'},
    'Africa/Ndjamena': { timeZone: 'Africa/Ndjamena'},
    'Africa/Niamey': { timeZone: 'Africa/Niamey'},
    'Africa/Nouakchott': { timeZone: 'Africa/Nouakchott'},
    'Africa/Ouagadougou': { timeZone: 'Africa/Ouagadougou'},
    'Africa/Porto-Novo': { timeZone: 'Africa/Porto-Novo'},
    'Africa/Sao_Tome': { timeZone: 'Africa/Sao_Tome'},
    'Africa/Timbuktu': { timeZone: 'Africa/Timbuktu'},
    'Africa/Tripoli': { timeZone: 'Africa/Tripoli'},
    'Africa/Tunis': { timeZone: 'Africa/Tunis'},
    'Africa/Windhoek': { timeZone: 'Africa/Windhoek'},
    'America/Adak': { timeZone: 'America/Adak'},
    'America/Anchorage': { timeZone: 'America/Anchorage'},
    'America/Anguilla': { timeZone: 'America/Anguilla'},
    'America/Antigua': { timeZone: 'America/Antigua'},
    'America/Araguaina': { timeZone: 'America/Araguaina'},
    'America/Argentina/Buenos_Aires': { timeZone: 'America/Argentina/Buenos_Aires'},
    'America/Argentina/Catamarca': { timeZone: 'America/Argentina/Catamarca'},
    'America/Argentina/ComodRivadavia': { timeZone: 'America/Argentina/ComodRivadavia'},
    'America/Argentina/Cordoba': { timeZone: 'America/Argentina/Cordoba'},
    'America/Argentina/Jujuy': { timeZone: 'America/Argentina/Jujuy'},
    'America/Argentina/La_Rioja': { timeZone: 'America/Argentina/La_Rioja'},
    'America/Argentina/Mendoza': { timeZone: 'America/Argentina/Mendoza'},
    'America/Argentina/Rio_Gallegos': { timeZone: 'America/Argentina/Rio_Gallegos'},
    'America/Argentina/Salta': { timeZone: 'America/Argentina/Salta'},
    'America/Argentina/San_Juan': { timeZone: 'America/Argentina/San_Juan'},
    'America/Argentina/San_Luis': { timeZone: 'America/Argentina/San_Luis'},
    'America/Argentina/Tucuman': { timeZone: 'America/Argentina/Tucuman'},
    'America/Argentina/Ushuaia': { timeZone: 'America/Argentina/Ushuaia'},
    'America/Aruba': { timeZone: 'America/Aruba'},
    'America/Asuncion': { timeZone: 'America/Asuncion'},
    'America/Atikokan': { timeZone: 'America/Atikokan'},
    'America/Atka': { timeZone: 'America/Atka'},
    'America/Bahia': { timeZone: 'America/Bahia'},
    'America/Bahia_Banderas': { timeZone: 'America/Bahia_Banderas'},
    'America/Barbados': { timeZone: 'America/Barbados'},
    'America/Belem': { timeZone: 'America/Belem'},
    'America/Belize': { timeZone: 'America/Belize'},
    'America/Blanc-Sablon': { timeZone: 'America/Blanc-Sablon'},
    'America/Boa_Vista': { timeZone: 'America/Boa_Vista'},
    'America/Bogota': { timeZone: 'America/Bogota'},
    'America/Boise': { timeZone: 'America/Boise'},
    'America/Buenos_Aires': { timeZone: 'America/Buenos_Aires'},
    'America/Cambridge_Bay': { timeZone: 'America/Cambridge_Bay'},
    'America/Campo_Grande': { timeZone: 'America/Campo_Grande'},
    'America/Cancun': { timeZone: 'America/Cancun'},
    'America/Caracas': { timeZone: 'America/Caracas'},
    'America/Catamarca': { timeZone: 'America/Catamarca'},
    'America/Cayenne': { timeZone: 'America/Cayenne'},
    'America/Cayman': { timeZone: 'America/Cayman'},
    'America/Chicago': { timeZone: 'America/Chicago'},
    'America/Chihuahua': { timeZone: 'America/Chihuahua'},
    'America/Coral_Harbour': { timeZone: 'America/Coral_Harbour'},
    'America/Cordoba': { timeZone: 'America/Cordoba'},
    'America/Costa_Rica': { timeZone: 'America/Costa_Rica'},
    'America/Creston': { timeZone: 'America/Creston'},
    'America/Cuiaba': { timeZone: 'America/Cuiaba'},
    'America/Curacao': { timeZone: 'America/Curacao'},
    'America/Danmarkshavn': { timeZone: 'America/Danmarkshavn'},
    'America/Dawson': { timeZone: 'America/Dawson'},
    'America/Dawson_Creek': { timeZone: 'America/Dawson_Creek'},
    'America/Denver': { timeZone: 'America/Denver'},
    'America/Detroit': { timeZone: 'America/Detroit'},
    'America/Dominica': { timeZone: 'America/Dominica'},
    'America/Edmonton': { timeZone: 'America/Edmonton'},
    'America/Eirunepe': { timeZone: 'America/Eirunepe'},
    'America/El_Salvador': { timeZone: 'America/El_Salvador'},
    'America/Ensenada': { timeZone: 'America/Ensenada'},
    'America/Fort_Nelson': { timeZone: 'America/Fort_Nelson'},
    'America/Fort_Wayne': { timeZone: 'America/Fort_Wayne'},
    'America/Fortaleza': { timeZone: 'America/Fortaleza'},
    'America/Glace_Bay': { timeZone: 'America/Glace_Bay'},
    'America/Godthab': { timeZone: 'America/Godthab'},
    'America/Goose_Bay': { timeZone: 'America/Goose_Bay'},
    'America/Grand_Turk': { timeZone: 'America/Grand_Turk'},
    'America/Grenada': { timeZone: 'America/Grenada'},
    'America/Guadeloupe': { timeZone: 'America/Guadeloupe'},
    'America/Guatemala': { timeZone: 'America/Guatemala'},
    'America/Guayaquil': { timeZone: 'America/Guayaquil'},
    'America/Guyana': { timeZone: 'America/Guyana'},
    'America/Halifax': { timeZone: 'America/Halifax'},
    'America/Havana': { timeZone: 'America/Havana'},
    'America/Hermosillo': { timeZone: 'America/Hermosillo'},
    'America/Indiana/Indianapolis': { timeZone: 'America/Indiana/Indianapolis'},
    'America/Indiana/Knox': { timeZone: 'America/Indiana/Knox'},
    'America/Indiana/Marengo': { timeZone: 'America/Indiana/Marengo'},
    'America/Indiana/Petersburg': { timeZone: 'America/Indiana/Petersburg'},
    'America/Indiana/Tell_City': { timeZone: 'America/Indiana/Tell_City'},
    'America/Indiana/Vevay': { timeZone: 'America/Indiana/Vevay'},
    'America/Indiana/Vincennes': { timeZone: 'America/Indiana/Vincennes'},
    'America/Indiana/Winamac': { timeZone: 'America/Indiana/Winamac'},
    'America/Indianapolis': { timeZone: 'America/Indianapolis'},
    'America/Inuvik': { timeZone: 'America/Inuvik'},
    'America/Iqaluit': { timeZone: 'America/Iqaluit'},
    'America/Jamaica': { timeZone: 'America/Jamaica'},
    'America/Jujuy': { timeZone: 'America/Jujuy'},
    'America/Juneau': { timeZone: 'America/Juneau'},
    'America/Kentucky/Louisville': { timeZone: 'America/Kentucky/Louisville'},
    'America/Kentucky/Monticello': { timeZone: 'America/Kentucky/Monticello'},
    'America/Knox_IN': { timeZone: 'America/Knox_IN'},
    'America/Kralendijk': { timeZone: 'America/Kralendijk'},
    'America/La_Paz': { timeZone: 'America/La_Paz'},
    'America/Lima': { timeZone: 'America/Lima'},
    'America/Los_Angeles': { timeZone: 'America/Los_Angeles'},
    'America/Louisville': { timeZone: 'America/Louisville'},
    'America/Lower_Princes': { timeZone: 'America/Lower_Princes'},
    'America/Maceio': { timeZone: 'America/Maceio'},
    'America/Managua': { timeZone: 'America/Managua'},
    'America/Manaus': { timeZone: 'America/Manaus'},
    'America/Marigot': { timeZone: 'America/Marigot'},
    'America/Martinique': { timeZone: 'America/Martinique'},
    'America/Matamoros': { timeZone: 'America/Matamoros'},
    'America/Mazatlan': { timeZone: 'America/Mazatlan'},
    'America/Mendoza': { timeZone: 'America/Mendoza'},
    'America/Menominee': { timeZone: 'America/Menominee'},
    'America/Merida': { timeZone: 'America/Merida'},
    'America/Metlakatla': { timeZone: 'America/Metlakatla'},
    'America/Mexico_City': { timeZone: 'America/Mexico_City'},
    'America/Miquelon': { timeZone: 'America/Miquelon'},
    'America/Moncton': { timeZone: 'America/Moncton'},
    'America/Monterrey': { timeZone: 'America/Monterrey'},
    'America/Montevideo': { timeZone: 'America/Montevideo'},
    'America/Montreal': { timeZone: 'America/Montreal'},
    'America/Montserrat': { timeZone: 'America/Montserrat'},
    'America/Nassau': { timeZone: 'America/Nassau'},
    'America/New_York': { timeZone: 'America/New_York'},
    'America/Nipigon': { timeZone: 'America/Nipigon'},
    'America/Nome': { timeZone: 'America/Nome'},
    'America/Noronha': { timeZone: 'America/Noronha'},
    'America/North_Dakota/Beulah': { timeZone: 'America/North_Dakota/Beulah'},
    'America/North_Dakota/Center': { timeZone: 'America/North_Dakota/Center'},
    'America/North_Dakota/New_Salem': { timeZone: 'America/North_Dakota/New_Salem'},
    'America/Nuuk': { timeZone: 'America/Nuuk'},
    'America/Ojinaga': { timeZone: 'America/Ojinaga'},
    'America/Panama': { timeZone: 'America/Panama'},
    'America/Pangnirtung': { timeZone: 'America/Pangnirtung'},
    'America/Paramaribo': { timeZone: 'America/Paramaribo'},
    'America/Phoenix': { timeZone: 'America/Phoenix'},
    'America/Port-au-Prince': { timeZone: 'America/Port-au-Prince'},
    'America/Port_of_Spain': { timeZone: 'America/Port_of_Spain'},
    'America/Porto_Acre': { timeZone: 'America/Porto_Acre'},
    'America/Porto_Velho': { timeZone: 'America/Porto_Velho'},
    'America/Puerto_Rico': { timeZone: 'America/Puerto_Rico'},
    'America/Punta_Arenas': { timeZone: 'America/Punta_Arenas'},
    'America/Rainy_River': { timeZone: 'America/Rainy_River'},
    'America/Rankin_Inlet': { timeZone: 'America/Rankin_Inlet'},
    'America/Recife': { timeZone: 'America/Recife'},
    'America/Regina': { timeZone: 'America/Regina'},
    'America/Resolute': { timeZone: 'America/Resolute'},
    'America/Rio_Branco': { timeZone: 'America/Rio_Branco'},
    'America/Rosario': { timeZone: 'America/Rosario'},
    'America/Santa_Isabel': { timeZone: 'America/Santa_Isabel'},
    'America/Santarem': { timeZone: 'America/Santarem'},
    'America/Santiago': { timeZone: 'America/Santiago'},
    'America/Santo_Domingo': { timeZone: 'America/Santo_Domingo'},
    'America/Sao_Paulo': { timeZone: 'America/Sao_Paulo'},
    'America/Scoresbysund': { timeZone: 'America/Scoresbysund'},
    'America/Shiprock': { timeZone: 'America/Shiprock'},
    'America/Sitka': { timeZone: 'America/Sitka'},
    'America/St_Barthelemy': { timeZone: 'America/St_Barthelemy'},
    'America/St_Johns': { timeZone: 'America/St_Johns'},
    'America/St_Kitts': { timeZone: 'America/St_Kitts'},
    'America/St_Lucia': { timeZone: 'America/St_Lucia'},
    'America/St_Thomas': { timeZone: 'America/St_Thomas'},
    'America/St_Vincent': { timeZone: 'America/St_Vincent'},
    'America/Swift_Current': { timeZone: 'America/Swift_Current'},
    'America/Tegucigalpa': { timeZone: 'America/Tegucigalpa'},
    'America/Thule': { timeZone: 'America/Thule'},
    'America/Thunder_Bay': { timeZone: 'America/Thunder_Bay'},
    'America/Tijuana': { timeZone: 'America/Tijuana'},
    'America/Toronto': { timeZone: 'America/Toronto'},
    'America/Tortola': { timeZone: 'America/Tortola'},
    'America/Vancouver': { timeZone: 'America/Vancouver'},
    'America/Virgin': { timeZone: 'America/Virgin'},
    'America/Whitehorse': { timeZone: 'America/Whitehorse'},
    'America/Winnipeg': { timeZone: 'America/Winnipeg'},
    'America/Yakutat': { timeZone: 'America/Yakutat'},
    'America/Yellowknife': { timeZone: 'America/Yellowknife'},
    'Antarctica/Casey': { timeZone: 'Antarctica/Casey'},
    'Antarctica/Davis': { timeZone: 'Antarctica/Davis'},
    'Antarctica/DumontDUrville': { timeZone: 'Antarctica/DumontDUrville'},
    'Antarctica/Macquarie': { timeZone: 'Antarctica/Macquarie'},
    'Antarctica/Mawson': { timeZone: 'Antarctica/Mawson'},
    'Antarctica/McMurdo': { timeZone: 'Antarctica/McMurdo'},
    'Antarctica/Palmer': { timeZone: 'Antarctica/Palmer'},
    'Antarctica/Rothera': { timeZone: 'Antarctica/Rothera'},
    'Antarctica/South_Pole': { timeZone: 'Antarctica/South_Pole'},
    'Antarctica/Syowa': { timeZone: 'Antarctica/Syowa'},
    'Antarctica/Troll': { timeZone: 'Antarctica/Troll'},
    'Antarctica/Vostok': { timeZone: 'Antarctica/Vostok'},
    'Arctic/Longyearbyen': { timeZone: 'Arctic/Longyearbyen'},
    'Asia/Aden': { timeZone: 'Asia/Aden'},
    'Asia/Almaty': { timeZone: 'Asia/Almaty'},
    'Asia/Amman': { timeZone: 'Asia/Amman'},
    'Asia/Anadyr': { timeZone: 'Asia/Anadyr'},
    'Asia/Aqtau': { timeZone: 'Asia/Aqtau'},
    'Asia/Aqtobe': { timeZone: 'Asia/Aqtobe'},
    'Asia/Ashgabat': { timeZone: 'Asia/Ashgabat'},
    'Asia/Ashkhabad': { timeZone: 'Asia/Ashkhabad'},
    'Asia/Atyrau': { timeZone: 'Asia/Atyrau'},
    'Asia/Baghdad': { timeZone: 'Asia/Baghdad'},
    'Asia/Bahrain': { timeZone: 'Asia/Bahrain'},
    'Asia/Baku': { timeZone: 'Asia/Baku'},
    'Asia/Bangkok': { timeZone: 'Asia/Bangkok'},
    'Asia/Barnaul': { timeZone: 'Asia/Barnaul'},
    'Asia/Beirut': { timeZone: 'Asia/Beirut'},
    'Asia/Bishkek': { timeZone: 'Asia/Bishkek'},
    'Asia/Brunei': { timeZone: 'Asia/Brunei'},
    'Asia/Calcutta': { timeZone: 'Asia/Calcutta'},
    'Asia/Chita': { timeZone: 'Asia/Chita'},
    'Asia/Choibalsan': { timeZone: 'Asia/Choibalsan'},
    'Asia/Chongqing': { timeZone: 'Asia/Chongqing'},
    'Asia/Chungking': { timeZone: 'Asia/Chungking'},
    'Asia/Colombo': { timeZone: 'Asia/Colombo'},
    'Asia/Dacca': { timeZone: 'Asia/Dacca'},
    'Asia/Damascus': { timeZone: 'Asia/Damascus'},
    'Asia/Dhaka': { timeZone: 'Asia/Dhaka'},
    'Asia/Dili': { timeZone: 'Asia/Dili'},
    'Asia/Dubai': { timeZone: 'Asia/Dubai'},
    'Asia/Dushanbe': { timeZone: 'Asia/Dushanbe'},
    'Asia/Famagusta': { timeZone: 'Asia/Famagusta'},
    'Asia/Gaza': { timeZone: 'Asia/Gaza'},
    'Asia/Harbin': { timeZone: 'Asia/Harbin'},
    'Asia/Hebron': { timeZone: 'Asia/Hebron'},
    'Asia/Ho_Chi_Minh': { timeZone: 'Asia/Ho_Chi_Minh'},
    'Asia/Hong_Kong': { timeZone: 'Asia/Hong_Kong'},
    'Asia/Hovd': { timeZone: 'Asia/Hovd'},
    'Asia/Irkutsk': { timeZone: 'Asia/Irkutsk'},
    'Asia/Istanbul': { timeZone: 'Asia/Istanbul'},
    'Asia/Jakarta': { timeZone: 'Asia/Jakarta'},
    'Asia/Jayapura': { timeZone: 'Asia/Jayapura'},
    'Asia/Jerusalem': { timeZone: 'Asia/Jerusalem'},
    'Asia/Kabul': { timeZone: 'Asia/Kabul'},
    'Asia/Kamchatka': { timeZone: 'Asia/Kamchatka'},
    'Asia/Karachi': { timeZone: 'Asia/Karachi'},
    'Asia/Kashgar': { timeZone: 'Asia/Kashgar'},
    'Asia/Kathmandu': { timeZone: 'Asia/Kathmandu'},
    'Asia/Katmandu': { timeZone: 'Asia/Katmandu'},
    'Asia/Khandyga': { timeZone: 'Asia/Khandyga'},
    'Asia/Kolkata': { timeZone: 'Asia/Kolkata'},
    'Asia/Krasnoyarsk': { timeZone: 'Asia/Krasnoyarsk'},
    'Asia/Kuala_Lumpur': { timeZone: 'Asia/Kuala_Lumpur'},
    'Asia/Kuching': { timeZone: 'Asia/Kuching'},
    'Asia/Kuwait': { timeZone: 'Asia/Kuwait'},
    'Asia/Macao': { timeZone: 'Asia/Macao'},
    'Asia/Macau': { timeZone: 'Asia/Macau'},
    'Asia/Magadan': { timeZone: 'Asia/Magadan'},
    'Asia/Makassar': { timeZone: 'Asia/Makassar'},
    'Asia/Manila': { timeZone: 'Asia/Manila'},
    'Asia/Muscat': { timeZone: 'Asia/Muscat'},
    'Asia/Nicosia': { timeZone: 'Asia/Nicosia'},
    'Asia/Novokuznetsk': { timeZone: 'Asia/Novokuznetsk'},
    'Asia/Novosibirsk': { timeZone: 'Asia/Novosibirsk'},
    'Asia/Omsk': { timeZone: 'Asia/Omsk'},
    'Asia/Oral': { timeZone: 'Asia/Oral'},
    'Asia/Phnom_Penh': { timeZone: 'Asia/Phnom_Penh'},
    'Asia/Pontianak': { timeZone: 'Asia/Pontianak'},
    'Asia/Pyongyang': { timeZone: 'Asia/Pyongyang'},
    'Asia/Qatar': { timeZone: 'Asia/Qatar'},
    'Asia/Qostanay': { timeZone: 'Asia/Qostanay'},
    'Asia/Qyzylorda': { timeZone: 'Asia/Qyzylorda'},
    'Asia/Rangoon': { timeZone: 'Asia/Rangoon'},
    'Asia/Riyadh': { timeZone: 'Asia/Riyadh'},
    'Asia/Saigon': { timeZone: 'Asia/Saigon'},
    'Asia/Sakhalin': { timeZone: 'Asia/Sakhalin'},
    'Asia/Samarkand': { timeZone: 'Asia/Samarkand'},
    'Asia/Seoul': { timeZone: 'Asia/Seoul'},
    'Asia/Shanghai': { timeZone: 'Asia/Shanghai'},
    'Asia/Singapore': { timeZone: 'Asia/Singapore'},
    'Asia/Srednekolymsk': { timeZone: 'Asia/Srednekolymsk'},
    'Asia/Taipei': { timeZone: 'Asia/Taipei'},
    'Asia/Tashkent': { timeZone: 'Asia/Tashkent'},
    'Asia/Tbilisi': { timeZone: 'Asia/Tbilisi'},
    'Asia/Tehran': { timeZone: 'Asia/Tehran'},
    'Asia/Tel_Aviv': { timeZone: 'Asia/Tel_Aviv'},
    'Asia/Thimbu': { timeZone: 'Asia/Thimbu'},
    'Asia/Thimphu': { timeZone: 'Asia/Thimphu'},
    'Asia/Tokyo': { timeZone: 'Asia/Tokyo'},
    'Asia/Tomsk': { timeZone: 'Asia/Tomsk'},
    'Asia/Ujung_Pandang': { timeZone: 'Asia/Ujung_Pandang'},
    'Asia/Ulaanbaatar': { timeZone: 'Asia/Ulaanbaatar'},
    'Asia/Ulan_Bator': { timeZone: 'Asia/Ulan_Bator'},
    'Asia/Urumqi': { timeZone: 'Asia/Urumqi'},
    'Asia/Ust-Nera': { timeZone: 'Asia/Ust-Nera'},
    'Asia/Vientiane': { timeZone: 'Asia/Vientiane'},
    'Asia/Vladivostok': { timeZone: 'Asia/Vladivostok'},
    'Asia/Yakutsk': { timeZone: 'Asia/Yakutsk'},
    'Asia/Yangon': { timeZone: 'Asia/Yangon'},
    'Asia/Yekaterinburg': { timeZone: 'Asia/Yekaterinburg'},
    'Asia/Yerevan': { timeZone: 'Asia/Yerevan'},
    'Atlantic/Azores': { timeZone: 'Atlantic/Azores'},
    'Atlantic/Bermuda': { timeZone: 'Atlantic/Bermuda'},
    'Atlantic/Canary': { timeZone: 'Atlantic/Canary'},
    'Atlantic/Cape_Verde': { timeZone: 'Atlantic/Cape_Verde'},
    'Atlantic/Faeroe': { timeZone: 'Atlantic/Faeroe'},
    'Atlantic/Faroe': { timeZone: 'Atlantic/Faroe'},
    'Atlantic/Jan_Mayen': { timeZone: 'Atlantic/Jan_Mayen'},
    'Atlantic/Madeira': { timeZone: 'Atlantic/Madeira'},
    'Atlantic/Reykjavik': { timeZone: 'Atlantic/Reykjavik'},
    'Atlantic/South_Georgia': { timeZone: 'Atlantic/South_Georgia'},
    'Atlantic/St_Helena': { timeZone: 'Atlantic/St_Helena'},
    'Atlantic/Stanley': { timeZone: 'Atlantic/Stanley'},
    'Australia/ACT': { timeZone: 'Australia/ACT'},
    'Australia/Adelaide': { timeZone: 'Australia/Adelaide'},
    'Australia/Brisbane': { timeZone: 'Australia/Brisbane'},
    'Australia/Broken_Hill': { timeZone: 'Australia/Broken_Hill'},
    'Australia/Canberra': { timeZone: 'Australia/Canberra'},
    'Australia/Currie': { timeZone: 'Australia/Currie'},
    'Australia/Darwin': { timeZone: 'Australia/Darwin'},
    'Australia/Eucla': { timeZone: 'Australia/Eucla'},
    'Australia/Hobart': { timeZone: 'Australia/Hobart'},
    'Australia/LHI': { timeZone: 'Australia/LHI'},
    'Australia/Lindeman': { timeZone: 'Australia/Lindeman'},
    'Australia/Lord_Howe': { timeZone: 'Australia/Lord_Howe'},
    'Australia/Melbourne': { timeZone: 'Australia/Melbourne'},
    'Australia/North': { timeZone: 'Australia/North'},
    'Australia/NSW': { timeZone: 'Australia/NSW'},
    'Australia/Perth': { timeZone: 'Australia/Perth'},
    'Australia/Queensland': { timeZone: 'Australia/Queensland'},
    'Australia/South': { timeZone: 'Australia/South'},
    'Australia/Sydney': { timeZone: 'Australia/Sydney'},
    'Australia/Tasmania': { timeZone: 'Australia/Tasmania'},
    'Australia/Victoria': { timeZone: 'Australia/Victoria'},
    'Australia/West': { timeZone: 'Australia/West'},
    'Australia/Yancowinna': { timeZone: 'Australia/Yancowinna'},
    'Brazil/Acre': { timeZone: 'Brazil/Acre'},
    'Brazil/DeNoronha': { timeZone: 'Brazil/DeNoronha'},
    'Brazil/East': { timeZone: 'Brazil/East'},
    'Brazil/West': { timeZone: 'Brazil/West'},
    'Canada/Atlantic': { timeZone: 'Canada/Atlantic'},
    'Canada/Central': { timeZone: 'Canada/Central'},
    'Canada/Eastern': { timeZone: 'Canada/Eastern'},
    'Canada/Mountain': { timeZone: 'Canada/Mountain'},
    'Canada/Newfoundland': { timeZone: 'Canada/Newfoundland'},
    'Canada/Pacific': { timeZone: 'Canada/Pacific'},
    'Canada/Saskatchewan': { timeZone: 'Canada/Saskatchewan'},
    'Canada/Yukon': { timeZone: 'Canada/Yukon'},
    'CET': { timeZone: 'CET'},
    'Chile/Continental': { timeZone: 'Chile/Continental'},
    'Chile/EasterIsland': { timeZone: 'Chile/EasterIsland'},
    'CST6CDT': { timeZone: 'CST6CDT'},
    'Cuba': { timeZone: 'Cuba'},
    'EET': { timeZone: 'EET'},
    'Egypt': { timeZone: 'Egypt'},
    'Eire': { timeZone: 'Eire'},
    'EST': { timeZone: 'EST'},
    'EST5EDT': { timeZone: 'EST5EDT'},
    'Etc/GMT': { timeZone: 'Etc/GMT'},
    'Etc/GMT+0': { timeZone: 'Etc/GMT+0'},
    'Etc/GMT+1': { timeZone: 'Etc/GMT+1'},
    'Etc/GMT+10': { timeZone: 'Etc/GMT+10'},
    'Etc/GMT+11': { timeZone: 'Etc/GMT+11'},
    'Etc/GMT+12': { timeZone: 'Etc/GMT+12'},
    'Etc/GMT+2': { timeZone: 'Etc/GMT+2'},
    'Etc/GMT+3': { timeZone: 'Etc/GMT+3'},
    'Etc/GMT+4': { timeZone: 'Etc/GMT+4'},
    'Etc/GMT+5': { timeZone: 'Etc/GMT+5'},
    'Etc/GMT+6': { timeZone: 'Etc/GMT+6'},
    'Etc/GMT+7': { timeZone: 'Etc/GMT+7'},
    'Etc/GMT+8': { timeZone: 'Etc/GMT+8'},
    'Etc/GMT+9': { timeZone: 'Etc/GMT+9'},
    'Etc/GMT-0': { timeZone: 'Etc/GMT-0'},
    'Etc/GMT-1': { timeZone: 'Etc/GMT-1'},
    'Etc/GMT-10': { timeZone: 'Etc/GMT-10'},
    'Etc/GMT-11': { timeZone: 'Etc/GMT-11'},
    'Etc/GMT-12': { timeZone: 'Etc/GMT-12'},
    'Etc/GMT-13': { timeZone: 'Etc/GMT-13'},
    'Etc/GMT-14': { timeZone: 'Etc/GMT-14'},
    'Etc/GMT-2': { timeZone: 'Etc/GMT-2'},
    'Etc/GMT-3': { timeZone: 'Etc/GMT-3'},
    'Etc/GMT-4': { timeZone: 'Etc/GMT-4'},
    'Etc/GMT-5': { timeZone: 'Etc/GMT-5'},
    'Etc/GMT-6': { timeZone: 'Etc/GMT-6'},
    'Etc/GMT-7': { timeZone: 'Etc/GMT-7'},
    'Etc/GMT-8': { timeZone: 'Etc/GMT-8'},
    'Etc/GMT-9': { timeZone: 'Etc/GMT-9'},
    'Etc/GMT0': { timeZone: 'Etc/GMT0'},
    'Etc/Greenwich': { timeZone: 'Etc/Greenwich'},
    'Etc/UCT': { timeZone: 'Etc/UCT'},
    'Etc/Universal': { timeZone: 'Etc/Universal'},
    'Etc/UTC': { timeZone: 'Etc/UTC'},
    'Etc/Zulu': { timeZone: 'Etc/Zulu'},
    'Europe/Amsterdam': { timeZone: 'Europe/Amsterdam'},
    'Europe/Andorra': { timeZone: 'Europe/Andorra'},
    'Europe/Astrakhan': { timeZone: 'Europe/Astrakhan'},
    'Europe/Athens': { timeZone: 'Europe/Athens'},
    'Europe/Belfast': { timeZone: 'Europe/Belfast'},
    'Europe/Belgrade': { timeZone: 'Europe/Belgrade'},
    'Europe/Berlin': { timeZone: 'Europe/Berlin'},
    'Europe/Bratislava': { timeZone: 'Europe/Bratislava'},
    'Europe/Brussels': { timeZone: 'Europe/Brussels'},
    'Europe/Bucharest': { timeZone: 'Europe/Bucharest'},
    'Europe/Budapest': { timeZone: 'Europe/Budapest'},
    'Europe/Busingen': { timeZone: 'Europe/Busingen'},
    'Europe/Chisinau': { timeZone: 'Europe/Chisinau'},
    'Europe/Copenhagen': { timeZone: 'Europe/Copenhagen'},
    'Europe/Dublin': { timeZone: 'Europe/Dublin'},
    'Europe/Gibraltar': { timeZone: 'Europe/Gibraltar'},
    'Europe/Guernsey': { timeZone: 'Europe/Guernsey'},
    'Europe/Helsinki': { timeZone: 'Europe/Helsinki'},
    'Europe/Isle_of_Man': { timeZone: 'Europe/Isle_of_Man'},
    'Europe/Istanbul': { timeZone: 'Europe/Istanbul'},
    'Europe/Jersey': { timeZone: 'Europe/Jersey'},
    'Europe/Kaliningrad': { timeZone: 'Europe/Kaliningrad'},
    'Europe/Kiev': { timeZone: 'Europe/Kiev'},
    'Europe/Kirov': { timeZone: 'Europe/Kirov'},
    'Europe/Lisbon': { timeZone: 'Europe/Lisbon'},
    'Europe/Ljubljana': { timeZone: 'Europe/Ljubljana'},
    'Europe/London': { timeZone: 'Europe/London'},
    'Europe/Luxembourg': { timeZone: 'Europe/Luxembourg'},
    'Europe/Madrid': { timeZone: 'Europe/Madrid'},
    'Europe/Malta': { timeZone: 'Europe/Malta'},
    'Europe/Mariehamn': { timeZone: 'Europe/Mariehamn'},
    'Europe/Minsk': { timeZone: 'Europe/Minsk'},
    'Europe/Monaco': { timeZone: 'Europe/Monaco'},
    'Europe/Moscow': { timeZone: 'Europe/Moscow'},
    'Europe/Nicosia': { timeZone: 'Europe/Nicosia'},
    'Europe/Oslo': { timeZone: 'Europe/Oslo'},
    'Europe/Paris': { timeZone: 'Europe/Paris'},
    'Europe/Podgorica': { timeZone: 'Europe/Podgorica'},
    'Europe/Prague': { timeZone: 'Europe/Prague'},
    'Europe/Riga': { timeZone: 'Europe/Riga'},
    'Europe/Rome': { timeZone: 'Europe/Rome'},
    'Europe/Samara': { timeZone: 'Europe/Samara'},
    'Europe/San_Marino': { timeZone: 'Europe/San_Marino'},
    'Europe/Sarajevo': { timeZone: 'Europe/Sarajevo'},
    'Europe/Saratov': { timeZone: 'Europe/Saratov'},
    'Europe/Simferopol': { timeZone: 'Europe/Simferopol'},
    'Europe/Skopje': { timeZone: 'Europe/Skopje'},
    'Europe/Sofia': { timeZone: 'Europe/Sofia'},
    'Europe/Stockholm': { timeZone: 'Europe/Stockholm'},
    'Europe/Tallinn': { timeZone: 'Europe/Tallinn'},
    'Europe/Tirane': { timeZone: 'Europe/Tirane'},
    'Europe/Tiraspol': { timeZone: 'Europe/Tiraspol'},
    'Europe/Ulyanovsk': { timeZone: 'Europe/Ulyanovsk'},
    'Europe/Uzhgorod': { timeZone: 'Europe/Uzhgorod'},
    'Europe/Vaduz': { timeZone: 'Europe/Vaduz'},
    'Europe/Vatican': { timeZone: 'Europe/Vatican'},
    'Europe/Vienna': { timeZone: 'Europe/Vienna'},
    'Europe/Vilnius': { timeZone: 'Europe/Vilnius'},
    'Europe/Volgograd': { timeZone: 'Europe/Volgograd'},
    'Europe/Warsaw': { timeZone: 'Europe/Warsaw'},
    'Europe/Zagreb': { timeZone: 'Europe/Zagreb'},
    'Europe/Zaporozhye': { timeZone: 'Europe/Zaporozhye'},
    'Europe/Zurich': { timeZone: 'Europe/Zurich'},
    'Factory': { timeZone: 'Factory'},
    'GB': { timeZone: 'GB'},
    'GB-Eire': { timeZone: 'GB-Eire'},
    'GMT': { timeZone: 'GMT'},
    'GMT+0': { timeZone: 'GMT+0'},
    'GMT-0': { timeZone: 'GMT-0'},
    'GMT0': { timeZone: 'GMT0'},
    'Greenwich': { timeZone: 'Greenwich'},
    'Hongkong': { timeZone: 'Hongkong'},
    'HST': { timeZone: 'HST'},
    'Iceland': { timeZone: 'Iceland'},
    'Indian/Antananarivo': { timeZone: 'Indian/Antananarivo'},
    'Indian/Chagos': { timeZone: 'Indian/Chagos'},
    'Indian/Christmas': { timeZone: 'Indian/Christmas'},
    'Indian/Cocos': { timeZone: 'Indian/Cocos'},
    'Indian/Comoro': { timeZone: 'Indian/Comoro'},
    'Indian/Kerguelen': { timeZone: 'Indian/Kerguelen'},
    'Indian/Mahe': { timeZone: 'Indian/Mahe'},
    'Indian/Maldives': { timeZone: 'Indian/Maldives'},
    'Indian/Mauritius': { timeZone: 'Indian/Mauritius'},
    'Indian/Mayotte': { timeZone: 'Indian/Mayotte'},
    'Indian/Reunion': { timeZone: 'Indian/Reunion'},
    'Iran': { timeZone: 'Iran'},
    'Israel': { timeZone: 'Israel'},
    'Jamaica': { timeZone: 'Jamaica'},
    'Japan': { timeZone: 'Japan'},
    'Kwajalein': { timeZone: 'Kwajalein'},
    'Libya': { timeZone: 'Libya'},
    'MET': { timeZone: 'MET'},
    'Mexico/BajaNorte': { timeZone: 'Mexico/BajaNorte'},
    'Mexico/BajaSur': { timeZone: 'Mexico/BajaSur'},
    'Mexico/General': { timeZone: 'Mexico/General'},
    'MST': { timeZone: 'MST'},
    'MST7MDT': { timeZone: 'MST7MDT'},
    'Navajo': { timeZone: 'Navajo'},
    'NZ': { timeZone: 'NZ'},
    'NZ-CHAT': { timeZone: 'NZ-CHAT'},
    'Pacific/Apia': { timeZone: 'Pacific/Apia'},
    'Pacific/Auckland': { timeZone: 'Pacific/Auckland'},
    'Pacific/Bougainville': { timeZone: 'Pacific/Bougainville'},
    'Pacific/Chatham': { timeZone: 'Pacific/Chatham'},
    'Pacific/Chuuk': { timeZone: 'Pacific/Chuuk'},
    'Pacific/Easter': { timeZone: 'Pacific/Easter'},
    'Pacific/Efate': { timeZone: 'Pacific/Efate'},
    'Pacific/Enderbury': { timeZone: 'Pacific/Enderbury'},
    'Pacific/Fakaofo': { timeZone: 'Pacific/Fakaofo'},
    'Pacific/Fiji': { timeZone: 'Pacific/Fiji'},
    'Pacific/Funafuti': { timeZone: 'Pacific/Funafuti'},
    'Pacific/Galapagos': { timeZone: 'Pacific/Galapagos'},
    'Pacific/Gambier': { timeZone: 'Pacific/Gambier'},
    'Pacific/Guadalcanal': { timeZone: 'Pacific/Guadalcanal'},
    'Pacific/Guam': { timeZone: 'Pacific/Guam'},
    'Pacific/Honolulu': { timeZone: 'Pacific/Honolulu'},
    'Pacific/Johnston': { timeZone: 'Pacific/Johnston'},
    'Pacific/Kiritimati': { timeZone: 'Pacific/Kiritimati'},
    'Pacific/Kosrae': { timeZone: 'Pacific/Kosrae'},
    'Pacific/Kwajalein': { timeZone: 'Pacific/Kwajalein'},
    'Pacific/Majuro': { timeZone: 'Pacific/Majuro'},
    'Pacific/Marquesas': { timeZone: 'Pacific/Marquesas'},
    'Pacific/Midway': { timeZone: 'Pacific/Midway'},
    'Pacific/Nauru': { timeZone: 'Pacific/Nauru'},
    'Pacific/Niue': { timeZone: 'Pacific/Niue'},
    'Pacific/Norfolk': { timeZone: 'Pacific/Norfolk'},
    'Pacific/Noumea': { timeZone: 'Pacific/Noumea'},
    'Pacific/Pago_Pago': { timeZone: 'Pacific/Pago_Pago'},
    'Pacific/Palau': { timeZone: 'Pacific/Palau'},
    'Pacific/Pitcairn': { timeZone: 'Pacific/Pitcairn'},
    'Pacific/Pohnpei': { timeZone: 'Pacific/Pohnpei'},
    'Pacific/Ponape': { timeZone: 'Pacific/Ponape'},
    'Pacific/Port_Moresby': { timeZone: 'Pacific/Port_Moresby'},
    'Pacific/Rarotonga': { timeZone: 'Pacific/Rarotonga'},
    'Pacific/Saipan': { timeZone: 'Pacific/Saipan'},
    'Pacific/Samoa': { timeZone: 'Pacific/Samoa'},
    'Pacific/Tahiti': { timeZone: 'Pacific/Tahiti'},
    'Pacific/Tarawa': { timeZone: 'Pacific/Tarawa'},
    'Pacific/Tongatapu': { timeZone: 'Pacific/Tongatapu'},
    'Pacific/Truk': { timeZone: 'Pacific/Truk'},
    'Pacific/Wake': { timeZone: 'Pacific/Wake'},
    'Pacific/Wallis': { timeZone: 'Pacific/Wallis'},
    'Pacific/Yap': { timeZone: 'Pacific/Yap'},
    'Poland': { timeZone: 'Poland'},
    'Portugal': { timeZone: 'Portugal'},
    'PRC': { timeZone: 'PRC'},
    'PST8PDT': { timeZone: 'PST8PDT'},
    'ROC': { timeZone: 'ROC'},
    'ROK': { timeZone: 'ROK'},
    'Singapore': { timeZone: 'Singapore'},
    'Turkey': { timeZone: 'Turkey'},
    'UCT': { timeZone: 'UCT'},
    'Universal': { timeZone: 'Universal'},
    'US/Alaska': { timeZone: 'US/Alaska'},
    'US/Aleutian': { timeZone: 'US/Aleutian'},
    'US/Arizona': { timeZone: 'US/Arizona'},
    'US/Central': { timeZone: 'US/Central'},
    'US/East-Indiana': { timeZone: 'US/East-Indiana'},
    'US/Eastern': { timeZone: 'US/Eastern'},
    'US/Hawaii': { timeZone: 'US/Hawaii'},
    'US/Indiana-Starke': { timeZone: 'US/Indiana-Starke'},
    'US/Michigan': { timeZone: 'US/Michigan'},
    'US/Mountain': { timeZone: 'US/Mountain'},
    'US/Pacific': { timeZone: 'US/Pacific'},
    'US/Samoa': { timeZone: 'US/Samoa'},
    'UTC': { timeZone: 'UTC'},
    'W-SU': { timeZone: 'W-SU'},
    'WET': { timeZone: 'WET'},
    'Zulu': { timeZone: 'Zulu'},

}

/*
Whether to use 12-hour time (as opposed to 24-hour time). Possible values 
are true and false; the default is locale dependent. This option overrides 
the hc language tag and/or the hourCycle option in case both are present.
*/
const enum_hour12 = {
    'true': {hour12: true},
    'false': {hour12: false},
}

/*
The hour cycle to use. Possible values are "h11", "h12", "h23", or "h24". 
This option overrides the hc language tag, if both are present, and the hour12
 option takes precedence in case both options have been specified.
*/
const enum_hourCycle = {
    h11: {hourCycle: "h11"},
    h12: {hourCycle: "h12"},
    h23: {hourCycle: "h23"},
    h24: {hourCycle: "h24"},
}

/*
The format matching algorithm to use.  Possible values are "basic" and "best fit"; 
the default is "best fit". See the following paragraphs for information about the 
use of this property.
*/
const enum_formatMatcher = {

    basic: {formatMatcher: "basic"},
    best_fit: {formatMatcher:  "best fit"},

}


/*
The following properties describe the date-time components to use in formatted output, 
and their desired representations. Implementations are required to support at least 
the following subsets:

const enum_formatSubsets = {

    1: "weekday, year, month, day, hour, minute, second",
    2: "weekday, year, month, day",
    3: "year, month, day",
    4: "year, month",
    5: "month, day",
    6: "hour, minute, second",
    7: "hour, minute"
    
    // Implementations may support other subsets, and requests will be negotiated against all available
    // subset-representation combinations to find the best match. Two algorithms are available for this
    // negotiation and selected by the formatMatcher property: A fully specified "basic" algorithm 
    // and an implementation-dependent "best fit" algorithm.
    
}

*/

//The representation of the weekday. Possible values are:
const enum_weekday = {

    long: {weekday: "long"},       // (e.g., Thursday)
    short: {weekday: "short"},     // (e.g., Thu)
    narrow: {weekday: "narrow"},   // (e.g., T). Two weekdays may have the same narrow style for some locales (e.g. Tuesday's narrow style is also T).
}


//The representation of the era. Possible values are:
const enum_era = {
    long: {era: "long"},     // (e.g., Anno Domini)
    short: {era: "short"},   // (e.g., AD)
    narrow: {era: "narrow"}, // (e.g., A)
}

//The representation of the year. Possible values are:
const enum_year = {

    numeric: {year: "numeric"},    // (e.g., 2012)
    digit: {year: "2-digit"},  // (e.g., 12)

}


// The representation of the month. Possible values are:
const enum_month = {

    numeric: {month: "numeric"},      //(e.g., 2)
    digit: {month: "2-digit"},        //(e.g., 02)
    long: {month: "long"},            // (e.g., March),
    short: {month: "short"},          //(e.g., Mar)
    narrow: {month: "narrow"}        // (e.g., M) Two months may have the same narrow style for some locales (e.g. May's narrow style is also M).
}


//The representation of the day. Possible values are:
const enum_day = {

    numeric: {day: "numeric"},    // (e.g., 1)
    digit: {day: "2-digit"},       // (e.g., 01)

}

//The representation of the hour. Possible values are:
const enum_hour = {

    numeric: {hour: "numeric"},    // (e.g., 1)
    digit: {hour: "2-digit"},       // (e.g., 01)

}

//The representation of the minute. Possible values are:
const enum_minute = {

    numeric: {minute: "numeric"},    // (e.g., 1)
    digit: {minute: "2-digit"},       // (e.g., 01)

}

//The representation of the second. Possible values are:
const enum_second = {

    numeric: {second: "numeric"},    // (e.g., 1)
    digit: {second: "2-digit"},       // (e.g., 01)

}

//The representation of the time zone name. Possible values are:
const enum_timeZoneName = {
    long: {timeZoneName: "long"},                //(e.g., British Summer Time)
    short: {timeZoneName: "short"}              //(e.g., GMT+1)
}


//Font: https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers
const enum_locales = {

    ['ar-SA']: 'ar-SA',
    ['bg-BG']: 'bg-BG',
    ['ca-ES']: 'ca-ES',
    ['zh-TW']: 'zh-TW',
    ['cs-CZ']: 'cs-CZ',
    ['da-DK']: 'da-DK',
    ['de-DE']: 'de-DE',
    ['el-GR']: 'el-GR',
    ['en-US']: 'en-US',
    ['es-ES_tradnl']: 'es-ES_tradnl',
    ['fi-FI']: 'fi-FI',
    ['fr-FR']: 'fr-FR',
    ['he-IL']: 'he-IL',
    ['hu-HU']: 'hu-HU',
    ['is-IS']: 'is-IS',
    ['it-IT']: 'it-IT',
    ['ja-JP']: 'ja-JP',
    ['ko-KR']: 'ko-KR',
    ['nl-NL']: 'nl-NL',
    ['nb-NO']: 'nb-NO',
    ['pl-PL']: 'pl-PL',
    ['pt-BR']: 'pt-BR',
    ['rm-CH']: 'rm-CH',
    ['ro-RO']: 'ro-RO',
    ['ru-RU']: 'ru-RU',
    ['hr-HR']: 'hr-HR',
    ['sk-SK']: 'sk-SK',
    ['sq-AL']: 'sq-AL',
    ['sv-SE']: 'sv-SE',
    ['th-TH']: 'th-TH',
    ['tr-TR']: 'tr-TR',
    ['ur-PK']: 'ur-PK',
    ['id-ID']: 'id-ID',
    ['uk-UA']: 'uk-UA',
    ['be-BY']: 'be-BY',
    ['sl-SI']: 'sl-SI',
    ['et-EE']: 'et-EE',
    ['lv-LV']: 'lv-LV',
    ['lt-LT']: 'lt-LT',
    ['tg-Cyrl-TJ']: 'tg-Cyrl-TJ',
    ['fa-IR']: 'fa-IR',
    ['vi-VN']: 'vi-VN',
    ['hy-AM']: 'hy-AM',
    ['az-Latn-AZ']: 'az-Latn-AZ',
    ['eu-ES']: 'eu-ES',
    ['wen-DE']: 'wen-DE',
    ['mk-MK']: 'mk-MK',
    ['st-ZA']: 'st-ZA',
    ['ts-ZA']: 'ts-ZA',
    ['tn-ZA']: 'tn-ZA',
    ['ven-ZA']: 'ven-ZA',
    ['xh-ZA']: 'xh-ZA',
    ['zu-ZA']: 'zu-ZA',
    ['af-ZA']: 'af-ZA',
    ['ka-GE']: 'ka-GE',
    ['fo-FO']: 'fo-FO',
    ['hi-IN']: 'hi-IN',
    ['mt-MT']: 'mt-MT',
    ['se-NO']: 'se-NO',
    ['ms-MY']: 'ms-MY',
    ['kk-KZ']: 'kk-KZ',
    ['ky-KG']: 'ky-KG',
    ['sw-KE']: 'sw-KE',
    ['tk-TM']: 'tk-TM',
    ['uz-Latn-UZ']: 'uz-Latn-UZ',
    ['tt-RU']: 'tt-RU',
    ['bn-IN']: 'bn-IN',
    ['pa-IN']: 'pa-IN',
    ['gu-IN']: 'gu-IN',
    ['or-IN']: 'or-IN',
    ['ta-IN']: 'ta-IN',
    ['te-IN']: 'te-IN',
    ['kn-IN']: 'kn-IN',
    ['ml-IN']: 'ml-IN',
    ['as-IN']: 'as-IN',
    ['mr-IN']: 'mr-IN',
    ['sa-IN']: 'sa-IN',
    ['mn-MN']: 'mn-MN',
    ['bo-CN']: 'bo-CN',
    ['cy-GB']: 'cy-GB',
    ['km-KH']: 'km-KH',
    ['lo-LA']: 'lo-LA',
    ['my-MM']: 'my-MM',
    ['gl-ES']: 'gl-ES',
    ['kok-IN']: 'kok-IN',
    ['mni']: 'mni',
    ['sd-IN']: 'sd-IN',
    ['syr-SY']: 'syr-SY',
    ['si-LK']: 'si-LK',
    ['chr-US']: 'chr-US',
    ['iu-Cans-CA']: 'iu-Cans-CA',
    ['am-ET']: 'am-ET',
    ['tmz']: 'tmz',
    ['ne-NP']: 'ne-NP',
    ['fy-NL']: 'fy-NL',
    ['ps-AF']: 'ps-AF',
    ['fil-PH']: 'fil-PH',
    ['dv-MV']: 'dv-MV',
    ['bin-NG']: 'bin-NG',
    ['fuv-NG']: 'fuv-NG',
    ['ha-Latn-NG']: 'ha-Latn-NG',
    ['ibb-NG']: 'ibb-NG',
    ['yo-NG']: 'yo-NG',
    ['quz-BO']: 'quz-BO',
    ['nso-ZA']: 'nso-ZA',
    ['ba-RU']: 'ba-RU',
    ['lb-LU']: 'lb-LU',
    ['kl-GL']: 'kl-GL',
    ['ig-NG']: 'ig-NG',
    ['kr-NG']: 'kr-NG',
    ['gaz-ET']: 'gaz-ET',
    ['ti-ER']: 'ti-ER',
    ['gn-PY']: 'gn-PY',
    ['haw-US']: 'haw-US',
    ['so-SO']: 'so-SO',
    ['ii-CN']: 'ii-CN',
    ['pap-AN']: 'pap-AN',
    ['arn-CL']: 'arn-CL',
    ['moh-CA']: 'moh-CA',
    ['br-FR']: 'br-FR',
    ['ug-CN']: 'ug-CN',
    ['mi-NZ']: 'mi-NZ',
    ['oc-FR']: 'oc-FR',
    ['co-FR']: 'co-FR',
    ['gsw-FR']: 'gsw-FR',
    ['sah-RU']: 'sah-RU',
    ['qut-GT']: 'qut-GT',
    ['rw-RW']: 'rw-RW',
    ['wo-SN']: 'wo-SN',
    ['prs-AF']: 'prs-AF',
    ['plt-MG']: 'plt-MG',
    ['gd-GB']: 'gd-GB',
    
}

const enum_locales2 = {

    ['Arabic, Saudi Arabia']: 'ar-SA',
    ['Bulgarian, Bulgaria']: 'bg-BG',
    ['Catalan, Spain']: 'ca-ES',
    ['Chinese, Taiwan, Province of China']: 'zh-TW',
    ['Czech, Czech Republic']: 'cs-CZ',
    ['Danish, Denmark']: 'da-DK',
    ['German, Germany']: 'de-DE',
    ['Modern Greek (1453-), Greece']: 'el-GR',
    ['English, United States']: 'en-US',
    ['Spanish']: 'es-ES_tradnl',
    ['Finnish, Finland']: 'fi-FI',
    ['French, France']: 'fr-FR',
    ['Hebrew, Israel']: 'he-IL',
    ['Hungarian, Hungary']: 'hu-HU',
    ['Icelandic, Iceland']: 'is-IS',
    ['Italian, Italy']: 'it-IT',
    ['Japanese, Japan']: 'ja-JP',
    ['Korean, Republic of Korea']: 'ko-KR',
    ['Dutch, Netherlands']: 'nl-NL',
    ['Norwegian Bokmål, Norway']: 'nb-NO',
    ['Polish, Poland']: 'pl-PL',
    ['Portuguese, Brazil']: 'pt-BR',
    ['Romansh, Switzerland']: 'rm-CH',
    ['Romanian, Romania']: 'ro-RO',
    ['Russian, Russian Federation']: 'ru-RU',
    ['Croatian, Croatia']: 'hr-HR',
    ['Slovak, Slovakia']: 'sk-SK',
    ['Albanian, Albania']: 'sq-AL',
    ['Swedish, Sweden']: 'sv-SE',
    ['Thai, Thailand']: 'th-TH',
    ['Turkish, Turkey']: 'tr-TR',
    ['Urdu, Pakistan']: 'ur-PK',
    ['Indonesian, Indonesia']: 'id-ID',
    ['Ukrainian, Ukraine']: 'uk-UA',
    ['Belarusian, Belarus']: 'be-BY',
    ['Slovenian, Slovenia']: 'sl-SI',
    ['Estonian, Estonia']: 'et-EE',
    ['Latvian, Latvia']: 'lv-LV',
    ['Lithuanian, Lithuania']: 'lt-LT',
    ['Tajik, Cyrillic, Tajikistan']: 'tg-Cyrl-TJ',
    ['Persian, Islamic Republic of Iran']: 'fa-IR',
    ['Vietnamese, Viet Nam']: 'vi-VN',
    ['Armenian, Armenia']: 'hy-AM',
    ['Azerbaijani, Latin, Azerbaijan']: 'az-Latn-AZ',
    ['Basque, Spain']: 'eu-ES',
    ['Sorbian languages, Germany']: 'wen-DE',
    ['Macedonian, The Former Yugoslav Republic of Macedonia']: 'mk-MK',
    ['Southern Sotho, South Africa']: 'st-ZA',
    ['Tsonga, South Africa']: 'ts-ZA',
    ['Tswana, South Africa']: 'tn-ZA',
    ['South Africa']: 'ven-ZA',
    ['Xhosa, South Africa']: 'xh-ZA',
    ['Zulu, South Africa']: 'zu-ZA',
    ['Afrikaans, South Africa']: 'af-ZA',
    ['Georgian, Georgia']: 'ka-GE',
    ['Faroese, Faroe Islands']: 'fo-FO',
    ['Hindi, India']: 'hi-IN',
    ['Maltese, Malta']: 'mt-MT',
    ['Northern Sami, Norway']: 'se-NO',
    ['Malay (macrolanguage), Malaysia']: 'ms-MY',
    ['Kazakh, Kazakhstan']: 'kk-KZ',
    ['Kirghiz, Kyrgyzstan']: 'ky-KG',
    ['Swahili (macrolanguage), Kenya']: 'sw-KE',
    ['Turkmen, Turkmenistan']: 'tk-TM',
    ['Uzbek, Latin, Uzbekistan']: 'uz-Latn-UZ',
    ['Tatar, Russian Federation']: 'tt-RU',
    ['Bengali, India']: 'bn-IN',
    ['Panjabi, India']: 'pa-IN',
    ['Gujarati, India']: 'gu-IN',
    ['Oriya, India']: 'or-IN',
    ['Tamil, India']: 'ta-IN',
    ['Telugu, India']: 'te-IN',
    ['Kannada, India']: 'kn-IN',
    ['Malayalam, India']: 'ml-IN',
    ['Assamese, India']: 'as-IN',
    ['Marathi, India']: 'mr-IN',
    ['Sanskrit, India']: 'sa-IN',
    ['Mongolian, Mongolia']: 'mn-MN',
    ['Tibetan, China']: 'bo-CN',
    ['Welsh, United Kingdom']: 'cy-GB',
    ['Central Khmer, Cambodia']: 'km-KH',
    ['Lao, Lao People’s Democratic Republic']: 'lo-LA',
    ['Burmese, Myanmar']: 'my-MM',
    ['Galician, Spain']: 'gl-ES',
    ['Konkani (macrolanguage), India']: 'kok-IN',
    ['Manipuri']: 'mni',
    ['Sindhi, India']: 'sd-IN',
    ['Syriac, Syrian Arab Republic']: 'syr-SY',
    ['Sinhala, Sri Lanka']: 'si-LK',
    ['Cherokee, United States']: 'chr-US',
    ['Inuktitut, Unified Canadian Aboriginal Syllabics, Canada']: 'iu-Cans-CA',
    ['Amharic, Ethiopia']: 'am-ET',
    ['Tamanaku']: 'tmz',
    ['Nepali, Nepal']: 'ne-NP',
    ['Western Frisian, Netherlands']: 'fy-NL',
    ['Pushto, Afghanistan']: 'ps-AF',
    ['Filipino, Philippines']: 'fil-PH',
    ['Dhivehi, Maldives']: 'dv-MV',
    ['Bini, Nigeria']: 'bin-NG',
    ['Nigerian Fulfulde, Nigeria']: 'fuv-NG',
    ['Hausa, Latin, Nigeria']: 'ha-Latn-NG',
    ['Ibibio, Nigeria']: 'ibb-NG',
    ['Yoruba, Nigeria']: 'yo-NG',
    ['Cusco Quechua, Bolivia']: 'quz-BO',
    ['Pedi, South Africa']: 'nso-ZA',
    ['Bashkir, Russian Federation']: 'ba-RU',
    ['Luxembourgish, Luxembourg']: 'lb-LU',
    ['Kalaallisut, Greenland']: 'kl-GL',
    ['Igbo, Nigeria']: 'ig-NG',
    ['Kanuri, Nigeria']: 'kr-NG',
    ['West Central Oromo, Ethiopia']: 'gaz-ET',
    ['Tigrinya, Eritrea']: 'ti-ER',
    ['Guarani, Paraguay']: 'gn-PY',
    ['Hawaiian, United States']: 'haw-US',
    ['Somali, Somalia']: 'so-SO',
    ['Sichuan Yi, China']: 'ii-CN',
    ['Papiamento, Netherlands Antilles']: 'pap-AN',
    ['Mapudungun, Chile']: 'arn-CL',
    ['Mohawk, Canada']: 'moh-CA',
    ['Breton, France']: 'br-FR',
    ['Uighur, China']: 'ug-CN',
    ['Maori, New Zealand']: 'mi-NZ',
    ['Occitan (post 1500), France']: 'oc-FR',
    ['Corsican, France']: 'co-FR',
    ['Swiss German, France']: 'gsw-FR',
    ['Yakut, Russian Federation']: 'sah-RU',
    ['Guatemala']: 'qut-GT',
    ['Kinyarwanda, Rwanda']: 'rw-RW',
    ['Wolof, Senegal']: 'wo-SN',
    ['Dari, Afghanistan']: 'prs-AF',
    ['Plateau Malagasy, Madagascar']: 'plt-MG',
    ['Scottish Gaelic, United Kingdom']: 'gd-GB',

}


//Adds a key and value to an empty object.a
function addPropValue(options, settings) {

    for (let key in settings) {
        options[key] = settings[key];
    }
}

const AVERAGE_DAYS_PER_YEAR = 365.0 + 1.0/4.0 - 1.0/100.0 + 1.0/400.0;    // 365.2425 days
const AVERAGE_DAYS_PER_MONTH =  AVERAGE_DAYS_PER_YEAR / 12.0;             // 30.436875 months
const AVERAGE_WEEKS_PER_MONTH = AVERAGE_DAYS_PER_MONTH / 7.0;            // 4.3481250000000005 weeks

//Convert each unit of time to milliseconds
const TimeFactors = {

    milliseconds: 1,
    seconds: 1000.0,                       // 1 seconds = 1000 milliseconds
    minutes: (1000.0 * 60.0),              // 1 minutes = (1000.0 * 60.0) milliseconds
    hours: (1000.0 * 60.0 * 60),           // 1 hours = (1000.0 * 60.0 * 60) milliseconds
    days: (1000.0 * 60.0 * 60.0 * 24.0),

};

const LEAP_YEARS_UNTIL_1970 = Math.trunc(1970/4) - Math.trunc(1970/100) + Math.trunc(1970/400);


function  getLeap_Years_from_1970_this_date(date) {

    let year = date.getFullYear();

    let until_1970 = LEAP_YEARS_UNTIL_1970;
    let until_year = Math.trunc(year/4) - Math.trunc(year/100) + Math.trunc(year/400);
    let leap_years = until_year - until_1970;

    return leap_years;
}

function add_month(_this, interval_is_of_type){

    let newDate = new Date(_this.getTime());
    let int_month = Math.trunc(interval_is_of_type);
    
    newDate.setMonth(_this.getMonth() + int_month );

    return newDate.getTime();

}


class DDate extends Date {
    
    constructor(value){
        super(value);
    }

    static  getLeap_Years_from_1970_this_date(date) {

        let year = date.getFullYear();

        let until_1970 = LEAP_YEARS_UNTIL_1970;
        let until_year = Math.trunc(year/4) - Math.trunc(year/100) + Math.trunc(year/400);
        let leap_years = until_year - until_1970;

        return leap_years;
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

            months: () => {
                
                let time = add_month(this, interval_is_of_type);

                return new DDate(time);
            },
            
            years: () => {
                
                let time = add_month(this, 12*interval_is_of_type);

                return new DDate(time);
                
            },
            
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

    static diff_dates(date1, date2){

        let diff_date = Math.abs(date1.getTime() - date2.getTime());
        
        return {

            milliseconds: () => diff_date,
        
            seconds: () => TimeFactors.seconds*diff_date,

            minutes: () => TimeFactors.minutes*diff_date,

            hours: () => TimeFactors.hours*diff_date,

            days: () => TimeFactors.days*diff_date,

            months: () => {

                let months1 = data_in_months(date1); 
                let months2 = data_in_months(date2); 
                
                return Math.abs(months1 - months2) - 1;
            },
            
            years: () => Math.abs(date1.getFullYear() - date2.getFullYear()),

        };

    }

}


module.exports = {

    DDate: DDate,

    TimeFactors: TimeFactors, 

    addPropValue: addPropValue,     //Adds a key and value to an empty object.

    locales: enum_locales,

    locales2: enum_locales2,

    optionsDate: {enum_weekday, enum_day, enum_month, enum_year, enum_hour, enum_minute, enum_second},

    optionsStyle: {enum_dateStyle, enum_timeStyle},

    optionsTimeZone: {enum_timeZone, enum_timeZoneName},

    optionsMatcher: {enum_localeMatcher, enum_formatMatcher},

    optionsHour: {enum_hour12, enum_hourCycle},

    optionEra: {enum_era},

    optionNumberingSystem: {enum_nu},
 
    optionCalendar: {enum_ca},

    optionHourCycle: {enum_hc},

}
