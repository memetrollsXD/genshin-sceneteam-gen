/**
 * @function getChar
 * @param {number} slot Party slot 1-4
 * @returns {string} The character at the given index
 */
function getChar(slot) {
    return eval(`char${btoa(slot).slice(0, -2)}.character`);
}

/**
 * @function getCharacterObject
 * @param {number} slot Party slot 1-4 
 * @returns {object} The character object
 */
/* Sample data
    {
    "character":"Jean",
    "level":"1",
    "constellation":"6",
    "weaponID":"11301",
    "weaponLvl":"1",
    "weaponRefinement":"1",
    "baseAtk":100,
    "baseHP":"1000",
    "baseDef":100,
    "baseEM":"0",
    "baseCR":"50",
    "baseCD":"100",
    "talent":{
        "normal":0,
        "skill":0,
        "burst":0
    },
    "talentNormal":"0",
    "talentSkill":"0",
    "talentBurst":"0",
    "baseATK":"100",
    "baseDEF":"100"
    }
    So, getCharacterObject(1).character would return "Jean"
*/
function getCharacterObject(slot) {
    return eval(`char${btoa(slot).slice(0, -2)}`);
}

/**
 * @function getIDfromName
 * @param {string} name The name of the character
 * @returns {number} The ID of the character
 */
function getIDfromName(name) {
    for (let i = 0; i < characters.length; i++) {
        if (characters[i].name == name) {
            return i;
        }
    }
}

var characters = [
    {
        "id": "1",
        "name": "Kate",
        "active": false
    },
    {
        "id": "2",
        "name": "Ayaka",
        "active": true
    },
    {
        "id": "3",
        "name": "Jean",
        "active": true
    },
    {
        "id": "5",
        "name": "Aether",
        "active": true
    },
    {
        "id": "6",
        "name": "Lisa",
        "active": true
    },
    {
        "id": "7",
        "name": "Lumine",
        "active": true
    },
    {
        "id": "14",
        "name": "Barbara",
        "active": true
    },
    {
        "id": "15",
        "name": "Kaeya",
        "active": true
    },
    {
        "id": "16",
        "name": "Diluc",
        "active": true
    },
    {
        "id": "20",
        "name": "Razor",
        "active": true
    },
    {
        "id": "21",
        "name": "Amber",
        "active": true
    },
    {
        "id": "22",
        "name": "Venti",
        "active": true
    },
    {
        "id": "23",
        "name": "Xiangling",
        "active": true
    },
    {
        "id": "24",
        "name": "Beidou",
        "active": true
    },
    {
        "id": "25",
        "name": "Xinqgiu",
        "active": true
    },
    {
        "id": "26",
        "name": "Xiao",
        "active": true
    },
    {
        "id": "27",
        "name": "Ningguang",
        "active": true
    },
    {
        "id": "29",
        "name": "Klee",
        "active": true
    },
    {
        "id": "30",
        "name": "Zhongli",
        "active": true
    },
    {
        "id": "31",
        "name": "Fischl",
        "active": true
    },
    {
        "id": "32",
        "name": "Bennett",
        "active": true
    },
    {
        "id": "33",
        "name": "Tartaglia",
        "active": true
    },
    {
        "id": "34",
        "name": "Noelle",
        "active": true
    },
    {
        "id": "35",
        "name": "Qiqi",
        "active": true
    },
    {
        "id": "36",
        "name": "Chongyun",
        "active": true
    },
    {
        "id": "37",
        "name": "Ganyu",
        "active": true
    },
    {
        "id": "38",
        "name": "Albedo",
        "active": true
    },
    {
        "id": "39",
        "name": "Diona",
        "active": true
    },
    {
        "id": "41",
        "name": "Mona",
        "active": true
    },
    {
        "id": "42",
        "name": "Keqing",
        "active": true
    },
    {
        "id": "43",
        "name": "Sucrose",
        "active": true
    },
    {
        "id": "44",
        "name": "Xinyan",
        "active": true
    },
    {
        "id": "45",
        "name": "Rosaria",
        "active": true
    },
    {
        "id": "46",
        "name": "Hu Tao",
        "active": true
    },
    {
        "id": "47",
        "name": "Kazuha",
        "active": true
    },
    {
        "id": "48",
        "name": "Yanfei",
        "active": true
    },
    {
        "id": "49",
        "name": "Yoimiya",
        "active": true
    },
    {
        "id": "50",
        "name": "Thoma",
        "active": true
    },
    {
        "id": "51",
        "name": "Eula",
        "active": true
    },
    {
        "id": "52",
        "name": "Raiden",
        "active": true
    },
    {
        "id": "53",
        "name": "Sayu",
        "active": true
    },
    {
        "id": "54",
        "name": "Kokomi",
        "active": true
    },
    {
        "id": "55",
        "name": "Gorou",
        "active": true
    },
    {
        "id": "56",
        "name": "Sara",
        "active": true
    },
    {
        "id": "57",
        "name": "Itto",
        "active": true
    },
    {
        "id": "62",
        "name": "Aloy",
        "active": true
    }
]