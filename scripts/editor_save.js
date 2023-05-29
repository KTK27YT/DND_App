//This saves all the data from the editor to the json

//we declare these constants as all functions use them
const fs = require('fs');
const filename = './data/profile.json';
const file = require(filename);



//Why are they all Async?

async function profile_save(selected_profile) {
    return new Promise((resolve, reject) => {
        try {
            let new_level = $('#levelinput').val();
            let new_xp = $('#xpinput').val();
            let new_race = $('#raceinput').val();
            let new_class = $('#classinput').val();
            console.log(new_level, new_xp, new_race, new_class);

            //Commit the changes respectively
            try {
                console.log(selected_profile);
                console.log(file);
                console.log(file[selected_profile]);
                file[selected_profile][0]["level"] = parseInt(new_level, 10);
                file[selected_profile][0]["xp"] = parseInt(new_xp, 10);
                file[selected_profile][0]["race"] = new_race;
                file[selected_profile][0]["class"] = new_class;
                fs.writeFile(filename, JSON.stringify(file, null, 2), function writeJSON(err) {
                    if (err) return console.log(err);
                    console.log(JSON.stringify(file));
                    console.log('writing to ' + filename);
                });
                alert("Profile saved");
                location.reload();
                resolve("Profile saved");
            } catch (error) {
                console.log("While saving the profile section an error occured: " + error);
                alert(error);
                location.reload();
                reject(error);
            };
        } catch (error) {
            console.log("While saving the profile section an error occured: " + error);
            alert(error);
            location.reload();
            reject(error);
        }


    });

}

async function stats_save(selected_profile) {

    return new Promise((resolve, reject) => {
        try {
            let new_str = $('#strengthinput').val();
            let new_dex = $('#dexterityinput').val();
            let new_con = $('#constitutioninput').val();
            let new_int = $('#intelligenceinput').val();
            let new_wis = $('#wisdominput').val();
            let new_cha = $('#charismainput').val();
            let new_money = $('#moneyinput').val();
            console.log(new_str, new_dex, new_con, new_int, new_wis, new_cha, new_money);
            file[selected_profile][0]["str"] = parseInt(new_str, 10);
            file[selected_profile][0]["dex"] = parseInt(new_dex, 10);
            file[selected_profile][0]["con"] = parseInt(new_con, 10);
            file[selected_profile][0]["int"] = parseInt(new_int, 10);
            file[selected_profile][0]["wis"] = parseInt(new_wis, 10);
            file[selected_profile][0]["cha"] = parseInt(new_cha, 10);
            file[selected_profile][0]["money"] = parseInt(new_money, 10);
            fs.writeFile(filename, JSON.stringify(file, null, 2), function writeJSON(err) {
                if (err) return console.log(err);
                console.log(JSON.stringify(file));
                console.log('writing to ' + filename);
            });
            alert("stats saved");
            location.reload();
            resolve("Stats saved");
        } catch (error) {
            console.log("While saving the stats section an error occured: " + error);
            alert(error);
            location.reload();
            reject(error);
        }
    });
}

async function skill_save(selected_profile) {
    console.log(window.skills);
    return new Promise((resolve, reject) => {
        try {
            file[selected_profile][0]['skills'] = window.skills;
            fs.writeFile(filename, JSON.stringify(file, null, 2), function writeJSON(err) {
                if (err) return console.log(err);
                console.log(JSON.stringify(file));
                console.log('writing to ' + filename);
            });
            alert("skills saved");
            location.reload();
            resolve("Skills saved");
        } catch (error) {
            console.log("While saving the skills section an error occured: " + error);
            alert(error);
            location.reload();
            reject(error);
        }
    });
}

function spell_save(selected_profile) {
    window.spelleditor = false;
    var spell_added = [];
    return new Promise((resolve, reject) => {
        try {
            //spell_input
            for (let i = 0; i < window.spells.length; i++) {
                spell_added.push(window.spells[i]);
            };
            $('.spell_input').map(function () {
                spell_added.push($(this).val());
            });
            file[selected_profile][0]['spells'] = spell_added;
            fs.writeFile(filename, JSON.stringify(file, null, 2), function writeJSON(err) {
                if (err) return console.log(err);
                console.log(JSON.stringify(file));
                console.log('writing to ' + filename);
            });
            alert("spells saved");
            location.reload();
            resolve("Spells saved");
        } catch (error) {
            console.log("While saving the spells section an error occured: " + error);
            alert(error);
            reject(error);
        }
    });
}

function equipment_save(selected_profile) {
    window.equipmenteditor = false;
    var equipment_added = [];
    return new Promise((resolve, reject) => {
        try {
            for (let i = 0; i < window.equipment.length; i++) {
                equipment_added.push(window.equipment[i]);
            };
            $('.equipment_input').map(function () {
                equipment_added.push($(this).val());
            });
            file[selected_profile][0]['equipment'] = equipment_added;
            fs.writeFile(filename, JSON.stringify(file, null, 2), function writeJSON(err) {
                if (err) return console.log(err);
                console.log(JSON.stringify(file));
                console.log('writing to ' + filename);
            });
            alert("equipment saved");
            location.reload();
            resolve("Equipment saved");
        } catch (error) {
            console.log("While saving the equipment section an error occured: " + error);
            alert(error);
            reject(error);
        }
    });
}

function language_save(selected_profile) {
    var language_added = [];
    return new Promise((resolve, reject) => {
        try {
            for (let i = 0; i < window.language.length; i++) {
                language_added.push(window.language[i]);
            }
            $('.language_input').map(function () {
                language_added.push($(this).val());
            }
            );
            file[selected_profile][0]['languages'] = language_added;
            fs.writeFile(filename, JSON.stringify(file, null, 2), function writeJSON(err) {
                if (err) return console.log(err);
                console.log(JSON.stringify(file));
                console.log('writing to ' + filename);
            });
            alert("languages saved");
            resolve("Languages saved");
            location.reload();
        } catch (error) {
            console.log("While saving the language section an error occured: " + error);
            alert(error);
            reject(error);
        }
    });
}

function feature_save(selected_profile) {
    var feature_added = [];
    return new Promise((resolve, reject) => {
        try {
            for (let i = 0; i < window.feature.length; i++) {
                feature_added.push(window.feature[i]);
            }
            $('.feature_input').map(function () {
                feature_added.push($(this).val());
            });
            file[selected_profile][0]['features'] = feature_added;
            fs.writeFile(filename, JSON.stringify(file, null, 2), function writeJSON(err) {
                if (err) return console.log(err);
                console.log(JSON.stringify(file));
                console.log('writing to ' + filename);
            });
            alert("features saved");
            resolve("Features saved");
            location.reload();
        } catch (error) {
            console.log("While saving the feature section an error occured: " + error);
            alert(error);
            reject(error);
        }
    });
}

function trait_save(selected_profile) {
    var trait_added = [];
    return new Promise((resolve, reject) => {
        try {
            for (let i = 0; i < window.traits.length; i++) {
                trait_added.push(window.traits[i]);
            }
            $('#trait_input').map(function () {
                trait_added.push($(this).val());
            });
            file[selected_profile][0]['traits'] = trait_added;
            fs.writeFile(filename, JSON.stringify(file, null, 2), function writeJSON(err) {
                if (err) return console.log(err);
                console.log(JSON.stringify(file));
                console.log('writing to ' + filename);
            });
            alert("traits saved");
            resolve("Traits saved");
            location.reload();
        } catch (error) {
            console.log("While saving the trait section an error occured: " + error);
            alert(error);
            reject(error);
        }
    });
};

function ideal_save(selected_profile) {
    var ideal_added = [];
    return new Promise((resolve, reject) => {
        try {
            for (let i = 0; i < window.ideals.length; i++) {
                ideal_added.push(window.ideals[i]);
            }
            $('#ideal_input').map(function () {
                ideal_added.push($(this).val());
            });
            file[selected_profile][0]['ideals'] = ideal_added;
            fs.writeFile(filename, JSON.stringify(file, null, 2), function writeJSON(err) {
                if (err) return console.log(err);
                console.log(JSON.stringify(file));
                console.log('writing to ' + filename);
            });
            alert("ideals saved");
            resolve("Ideals saved");
            location.reload();
        } catch (error) {
            console.log("While saving the ideal section an error occured: " + error);
            alert(error);
            reject(error);
        }
    });
}