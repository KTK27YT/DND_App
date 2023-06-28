// This handles all the shit inside index.html

window.spelleditor = false;
window.equipmenteditor = false;
$(document).ready(function () {
    console.log("Yes");
    deactivate_loader();
});

//links the ahref tag
$('#homelink').attr('href', __dirname + "/index.html");

//links the create profile tag
$('#addprofile').attr('href', __dirname + "/create.html")


//read profile.json
$.getJSON(__dirname + '/data/profile.json', (data) => {
    // console.log(data);
    //append to options
    $.each(data, function (key) {
        $('#profiles').append($("<option></option").attr("value", key).text(key));
    });
});

//add event listener to select profile button
$("#select").click(function () {
    var selected_profile = $('#profiles').val();
    $('.selectprofile').fadeOut();
    activate_loader();
    initprofile(selected_profile);

});



//initalises the constructor, awaits its initalises then calls the function
//responsible for inputting and setting the elements in the DOM
async function initprofile(profile) {
    $('.home').attr('display', "");
    $('.home').fadeIn();
    try {
        let person = await construct_profile(profile);
        console.log("initprofile : recieved");
        console.log(person);
        loadprofile(person);
    } catch (error) {
        alert("An error has occured more details: " + error);
    }
}

function profile_loader(person) {
    $('.char-info > h5').textContent = String(person.name);
    $("#raceimage").attr("src", "icons/Race/" + person.race + ".svg");
    $("#classimage").attr("src", "icons/Class/" + person.class + ".svg");
    let html = "Level: " + person.level + "<br>" + "XP: " + person.xp;
    $("#level").html(html);
    $('#name').text(person.name);
    $('#raceinfo').text(person.race);
    $('#classinfo').text(person.class);
}

function stats_loader(person) {
    $('#level').html("Level: " + person.level + "<br>" + "XP: " + person.xp);
    $('.money > h2').text("$" + person.money);
    $('#strength').text(person.str);
    $('#strength_mod').text(calculate_modfiier(person.str));
    $('#dexterity').text(person.dex);
    $('#dexterity_mod').text(calculate_modfiier(person.dex));
    $('#constitution').text(person.con);
    $('#constitution_mod').text(calculate_modfiier(person.con));
    $('#intelligence').text(person.int);
    $('#intelligence_mod').text(calculate_modfiier(person.int));
    $('#wisdom').text(person.wis);
    $('#wisdom_mod').text(calculate_modfiier(person.wis));
    $('#charisma').text(person.cha);
    $('#charisma_mod').text(calculate_modfiier(person.cha));
}


function skill_loader(person) {
    $.each(person.skills, function (key, value) {
        $('#skilltable').append(
            "<tr>" +
            "<td>" + value + "</td>" +
            "<td>" + calculate_skillmodifier(value, person) + "</td>" +
            "<td>" + calculate_profficiency(person.level) + "</td>"
            + "</tr>"
        );
    });
};


function spell_loader(person) {
    $.each(person.spells, function (key, value) {
        $('#spellslist').append(
            "<button type='button' class='list-group-item list-group-item-action' id='" + clean_string(value) + "' value='" + value + "'>" + value + "</button>"
        );
    });
    //For spells Buttons (Its an event listener)
    $(".spells-info > .list-group > #spellslist > button").click(function (event) {
        if (!window.spelleditor) {
            activate_loader();
            // convert it to lowercase for API call
            let spellname = this.value;
            spellname = spellname.replace(/\s/g, "-").toLowerCase();
            async function display_spellalert(spell) {
                try {
                    let spelldata = await construct_spellsinfo(spell);
                    console.log(spelldata)
                    console.log("display_alert : recieved");

                    alert(
                        "Name: " + spelldata.name + "\n" +
                        "Level: " + spelldata.level + "\n" +
                        "Range: " + spelldata.range + "\n" +
                        "Components: " + spelldata.components + "\n" +
                        "Duration: " + spelldata.duration + "\n" +
                        "School: " + spelldata.school.name + "\n" +
                        "Description: " + spelldata.desc + "\n" +
                        "Higher Level: " + spelldata.higher_level + "\n"
                    );
                } catch (error) {
                    if (error == "Not Found") {
                        deactivate_loader();
                        alert("Spell not found from API")
                    } else {
                        deactivate_loader();
                        alert("An error has occured more details: " + error);
                    }

                }
            }
            display_spellalert(spellname);
        }

    });
}

function equipment_loader(person) {
    $.each(person.equipment, function (key, value) {
        $('#equipmentlist').append(
            "<button type='button' id='" + clean_string(value) + "'class='list-group-item list-group-item-action' value='" + clean_string(value) + "'>" + value + "</button>"
        );
    });
    //For equipment Buttons (Its an event listener)
    $("#equipmentlist > button").click(function (event) {
        if (!window.equipmenteditor) {
            activate_loader();
            // convert it to lowercase for API call
            let equipmentname = this.value;
            equipmentname = equipmentname.replace(/\s/g, "-").toLowerCase();
            async function display_equipalert(equipment) {
                try {
                    let equipmentdata = await construct_equipmentinfo(equipment);
                    console.log(equipmentdata)
                    deactivate_loader();
                    console.log("display_alert : recieved");
                    alert(
                        "Name: " + equipmentdata.name + "\n" +
                        "Equipment Category: " + equipmentdata.equipment_category + "\n" +
                        "Cost: " + equipmentdata.cost.quantity + " " + equipmentdata.cost.unit + "\n" +
                        "Weight: " + equipmentdata.weight + "\n" +
                        "Description: " + equipmentdata.desc + "\n"
                    );
                } catch (error) {
                    if (error == "Not Found") {
                        deactivate_loader();
                        alert("Equipment not found from API")
                    } else {
                        deactivate_loader();
                        alert("An error has occured more details: " + error);
                    }

                }
            }
            display_equipalert(equipmentname);
        }
    });
};

function language_loader(person) {
    $.each(person.languages, function (key, value) {
        $('#languagelist > ol').append(
            "<li class=\"list-group-item\" id='" + value + "' >" + value + "</li>"
        );
    });
}

function feature_loader(person) {
    $.each(person.features, function (key, value) {
        $('#featurelist > ol').append(
            "<li class=\"list-group-item\" id='" + clean_string(value) + "'>" + value + "</li>"
        );
    });
}

function trait_loader(person) {
    $.each(person.traits, function (key, value) {
        $('#traitlist > ol').append(
            "<li class=\"list-group-item\" id='" + clean_string(value) + "'>" + value + "</li>"
        );
    });
}

function ideal_loader(person) {
    $.each(person.ideals, function (key, value) {
        $('#idealist > ol').append(
            "<li class=\"list-group-item\" id='" + clean_string(value) + "'>" + value + "</li>"
        );
    });
}

//displays output to the website
function loadprofile(person) {
    //Profile Section
    profile_loader(person);
    //Stats Section
    stats_loader(person);

    //Skills Section
    skill_loader(person);

    //Spells Section
    spell_loader(person);

    //Equipment Section
    equipment_loader(person);

    //languages section
    language_loader(person);

    //features section
    feature_loader(person);

    //Traits section
    trait_loader(person);

    //Ideal Section
    ideal_loader(person);

    deactivate_loader();
}

//initprofile("William")

