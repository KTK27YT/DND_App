// This saves all the info from the creator
const fs = require('fs');
const filename = __dirname + '/data/profile.json';
const file = require(filename);

//takes all the data and then saves it 10/10
function create_profile_obj(name, money, race, classselected, level, xp, hp, ac, str, dex, con, int, wis, cha, skills, spells, equipment, languages, features, traits, ideals) {
    return name = [
        {
            "money": parseInt(money),
            "name": name,
            "race": race,
            "gender": "male",
            "class": classselected,
            "Adventure_League": "Curse of Strahd",
            "faction": "Zhentarim",
            "Ravnica Guild": "Azorius",
            "level": parseInt(level),
            "xp": parseInt(xp),
            "hp": parseInt(hp),
            "ac": parseInt(ac),
            "str": parseInt(str),
            "dex": parseInt(dex),
            "con": parseInt(con),
            "int": parseInt(int),
            "wis": parseInt(wis),
            "cha": parseInt(cha),
            "skills": skills,
            "spells": spells,
            "equipment": equipment,
            "languages": languages,
            "features": features,
            "traits": traits,
            "ideals": ideals
        }
    ];
}





async function creator_save() {
    try {
        //profile Section
        let name = $('#name').val();
        let items = $('#items').val();
        let level = $('#levelinput').val();
        let xp = $('#xpinput').val();
        let race = $('#raceinput').val();
        let classselected = $('#classinput').val();

        //stats Section
        let hp = 6;
        let ac = 10;
        let str = $('#strengthinput').val();
        let dex = $('#dexterityinput').val();
        let con = $('#constitutioninput').val();
        let int = $('#intelligenceinput').val();
        let wis = $('#wisdominput').val();
        let cha = $('#charismainput').val();
        let money = $('#moneyinput').val();

        //skills Section
        let skills = window.skills;

        //spells Section
        let spells = [];
        $('.spell_input').map(function () {
            spells.push($(this).val());
        });

        //equipment Section
        let equipment = [];
        $('.equipment_input').map(function () {
            equipment.push($(this).val());
        });

        //languages Section
        let languages = [];
        $('.language_input').map(function () {
            languages.push($(this).val());
        });

        //features Section
        let features = [];
        $('.feature_input').map(function () {
            features.push($(this).val());
        });

        //traits Section
        let traits = [];
        $('.trait_input').map(function () {
            traits.push($(this).val());
        });

        //ideals Section
        let ideals = [];
        $('.ideal_input').map(function () {
            ideals.push($(this).val());
        });
        let profile_obj = create_profile_obj(name, money, race, classselected, level, xp, hp, ac, str, dex, con, int, wis, cha, skills, spells, equipment, languages, features, traits, ideals);
        var data = fs.readFileSync(filename);
        var data_obj = JSON.parse(data);
        console.log(data_obj);
        data_obj[name] = profile_obj;
        var newdata = JSON.stringify(data_obj, null, 2);
        fs.writeFile(filename, newdata, err => {
            if (err) throw err;
            console.log('Data written to file');

        });
        alert("Profile Created!");
        window.location.href = "./index.html";
    } catch (err) {
        alert(err);
        console.log(err);
    }
};



// This checks if the profile.json file exists
async function check_file() {
    let file = await fs.existsSync(__dirname + '/data/profile.json');
    if (file) {
        return true;
    } else {
        return false;
    }
}