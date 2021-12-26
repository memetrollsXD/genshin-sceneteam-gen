var charMQ = {
    character: 'Aether',
    level: 1,
    constellation: 6,
    weaponID: 11301,
    weaponLvl: 1,
    weaponRefinement: 1,
    baseAtk: 100,
    baseHP: 1000,
    baseDef: 100,
    baseEM: 0,
    baseCR: 50,
    baseCD: 100,
    talent: {
        normal: 0,
        skill: 0,
        burst: 0
    },
};
var charMg = {
    character: 'Aether',
    level: 1,
    constellation: 6,
    weaponID: 11301,
    weaponLvl: 1,
    weaponRefinement: 1,
    baseAtk: 69420,
    baseHP: 42069,
    baseDef: 514,
    baseEM: 0,
    baseCR: 10,
    baseCD: 400,
    talent: {
        normal: 0,
        skill: 0,
        burst: 0
    },
};
var charMw = {
    character: 'Aether',
    level: 1,
    constellation: 6,
    weaponID: 11301,
    weaponLvl: 1,
    weaponRefinement: 1,
    baseAtk: 69420,
    baseHP: 42069,
    baseDef: 514,
    baseEM: 0,
    baseCR: 10,
    baseCD: 400,
    talent: {
        normal: 0,
        skill: 0,
        burst: 0
    },
};
var charNA = {
    character: 'Aether',
    level: 1,
    constellation: 6,
    weaponID: 11301,
    weaponLvl: 1,
    weaponRefinement: 1,
    baseAtk: 69420,
    baseHP: 42069,
    baseDef: 514,
    baseEM: 0,
    baseCR: 10,
    baseCD: 400,
    talent: {
        normal: 0,
        skill: 0,
        burst: 0
    },
};
let phase = 1;
let talentHTML = 0;
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
function $(id) {
    if (id.charAt(0) == '#') {
        return document.getElementById(id.substring(1));
    } else if (id.charAt(0) == '.') {
        return document.getElementsByClassName(id.substring(1));
    } else if (id.charAt(0) == '*') {
        return document.querySelectorAll(id.substring(1));
    } else {
        return document.getElementById(id);
    }
}
function approve(n) { nextPhase(); eval(`phase${n}('end')`); }
$('start').onclick = function () {
    nextPhase();
};
$('debug').onclick = function () {
    let debug = prompt("Debug mode. Enter a phase number to go to.");
    if (debug) approve(debug);
};

$('*datalist').forEach(function (datalist) {
    // Create an option element with the data from characters.json
    datalist.innerHTML = '';
    for (let i = 0; i < characters.length; i++) {
        if (characters[i].active != false) {
            let option = document.createElement('option');
            option.value = characters[i].name;
            option.innerText = characters[i].name;
            datalist.appendChild(option);
        }
    }
});
$('autoFillBtn').onclick = function () {
    for (let i = 0; i < talentHTML; i++) {
        $('level' + i).value = charMQ.level;
        $('constellation' + i).value = charMQ.constellation;
        $('talentNormal' + i).value = charMQ.talent.normal;
        $('talentSkill' + i).value = charMQ.talent.skill;
        $('talentBurst' + i).value = charMQ.talent.burst;
        $('weaponID' + i).value = charMQ.weaponID;
        $('weaponLvl' + i).value = charMQ.weaponLvl;
        $('weaponRefinement' + i).value = charMQ.weaponRefinement;
        $('baseATK' + i).value = charMQ.baseAtk;
        $('baseDEF' + i).value = charMQ.baseDef;
        $('baseHP' + i).value = charMQ.baseHP;
        $('baseEM' + i).value = charMQ.baseEM;
        $('baseCR' + i).value = charMQ.baseCR;
        $('baseCD' + i).value = charMQ.baseCD;
    }
};
$('clearBtn').onclick = function () {
    for (let i = 0; i < talentHTML; i++) {
        $('level' + i).value = '';
        $('constellation' + i).value = '';
        $('talentNormal' + i).value = '';
        $('talentSkill' + i).value = '';
        $('talentBurst' + i).value = '';
        $('weaponID' + i).value = '';
        $('weaponLvl' + i).value = '';
        $('weaponRefinement' + i).value = '';
        $('baseATK' + i).value = '';
        $('baseDEF' + i).value = '';
        $('baseHP' + i).value = '';
        $('baseEM' + i).value = '';
        $('baseCR' + i).value = '';
        $('baseCD' + i).value = '';
    }
};
function nextPhase(phase_opt) {
    if (phase_opt) {
        eval(`nextPhase();`.repeat(phase_opt));
    }
    switch (phase) {
        case 1:
            phase1('start');
            if ($('input')) charMQ.character = $('input').value;
            if ($('input2')) charMg.character = $('input2').value;
            if ($('input3')) charMw.character = $('input3').value;
            if ($('input4')) charNA.character = $('input4').value;
            if (charMQ == '') { alert('Must have at least one character!') }
            if (charMg == '') charMg = undefined;
            if (charMw == '') charMw = undefined;
            if (charNA == '') charNA = undefined;
            talentHTML = 0
            if (charMQ.character) talentHTML++;
            if (charMg.character) talentHTML++;
            if (charMw.character) talentHTML++;
            if (charNA.character) talentHTML++;
            subtitle.innerHTML = 'You can get weapon IDs from <a style="color:white; text-decoration:underline;" href="https://github.com/Dimbreath/GenshinData/blob/master/ExcelBinOutput/WeaponExcelConfigData.json">Dimbreaths Repo</a>.';
            for (let i = 0; i < talentHTML; i++) {
                $('subtitle').innerHTML += `
                <h2>Character #${i+1} - ${getChar(i+1)}</h2>
                <input type="number" id="level${i}" placeholder="Lvl" min="1" max="90" step="1" class="talentInput"/>
                <input type="number" id="constellation${i}" placeholder="Const." min="0" max="6" step="1" class="talentInput"/>
                <input type="number" id="talentNormal${i}" placeholder="NA" class="talentInput"/>
                <input type="number" id="talentSkill${i}" placeholder="Skill" class="talentInput"/>
                <input type="number" id="talentBurst${i}" placeholder="Burst" class="talentInput"/><br>
                <input type="number" id="weaponID${i}" placeholder="Weapon ID"/>
                <input type="number" id="weaponLvl${i}" placeholder="Weapon Level" min="1" max="90"/>
                <input type="number" id="weaponRefinement${i}" placeholder="Refinement" class="talentInput" min="1" max="5"/>
                <input type="number" id="baseATK${i}" placeholder="ATK" class="talentInput"/>
                <input type="number" id="baseDEF${i}" placeholder="DEF" class="talentInput"/>
                <input type="number" id="baseHP${i}" placeholder="HP" class="talentInput"/>
                <input type="number" id="baseEM${i}" placeholder="EM" class="talentInput"/>
                <input type="number" id="baseCR${i}" placeholder="CR" class="talentInput"/>
                <input type="number" id="baseCD${i}" placeholder="CD" class="talentInput"/>
                `
            }
            break;
        case 2:
            phase2('start');
            subtitle.innerHTML = 'Output: (LostTree this is your thing)';
            $('output').innerText = JSON.stringify(charMQ) + JSON.stringify(charMg) + JSON.stringify(charMw) + JSON.stringify(charNA);
            break;
    }
    phase++;
}

function phase1(state) {
    if (state == 'start') {
        $('input').style.display = 'none';
        $('input2').style.display = 'none';
        $('input3').style.display = 'none';
        $('input4').style.display = 'none';
        $('inputL').style.display = 'none';
        $('input2L').style.display = 'none';
        $('input3L').style.display = 'none';
        $('input4L').style.display = 'none';
        $('autoFillBtn').style.display = 'block';
        $('clearBtn').style.display = 'block';
    } else {
        $('autoFillBtn').style.display = 'none';
        $('clearBtn').style.display = 'none';
        for (let i = 1; i < talentHTML; i++) {
            $('level' + i).style.display = 'none';
            $('constellation' + i).style.display = 'none';
            $('talentNormal' + i).style.display = 'none';
            $('talentSkill' + i).style.display = 'none';
            $('talentBurst' + i).style.display = 'none';
            $('weaponID' + i).style.display = 'none';
            $('weaponLvl' + i).style.display = 'none';
            $('weaponRefinement' + i).style.display = 'none';
            $('baseATK' + i).style.display = 'none';
            $('baseDEF' + i).style.display = 'none';
            $('baseHP' + i).style.display = 'none';
            $('baseEM' + i).style.display = 'none';
            $('baseCR' + i).style.display = 'none';
            $('baseCD' + i).style.display = 'none';
            eval(`char${btoa(i).slice(0, -2)}`).level = $('level' + i).value;
            eval(`char${btoa(i).slice(0, -2)}`).constellation = $('constellation' + i).value;
            eval(`char${btoa(i).slice(0, -2)}`).talentNormal = $('talentNormal' + i).value;
            eval(`char${btoa(i).slice(0, -2)}`).talentSkill = $('talentSkill' + i).value;
            eval(`char${btoa(i).slice(0, -2)}`).talentBurst = $('talentBurst' + i).value;
            eval(`char${btoa(i).slice(0, -2)}`).weaponID = $('weaponID' + i).value;
            eval(`char${btoa(i).slice(0, -2)}`).weaponLvl = $('weaponLvl' + i).value;
            eval(`char${btoa(i).slice(0, -2)}`).weaponRefinement = $('weaponRefinement' + i).value;
            eval(`char${btoa(i).slice(0, -2)}`).baseATK = $('baseATK' + i).value;
            eval(`char${btoa(i).slice(0, -2)}`).baseDEF = $('baseDEF' + i).value;
            eval(`char${btoa(i).slice(0, -2)}`).baseHP = $('baseHP' + i).value;
            eval(`char${btoa(i).slice(0, -2)}`).baseEM = $('baseEM' + i).value;
            eval(`char${btoa(i).slice(0, -2)}`).baseCR = $('baseCR' + i).value;
            eval(`char${btoa(i).slice(0, -2)}`).baseCD = $('baseCD' + i).value;
        }
    }
}

function phase2(state) {
    if (state == 'start') {
        phase1('end');
        $('output').style.display = 'block';
    }
}