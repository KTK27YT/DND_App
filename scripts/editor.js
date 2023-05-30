// The Goal of this script is to provide a simple editor


// Creates an event listener to check if any edit buttons were clicked and route them
$('.edit_btn').on('click', async function () {
    try {
        const person = await construct_profile($('#name').text());
        console.log(this.value);
        editor_profile_router(this.value, person);
    } catch (error) {
        console.log(error);
        alert(error);
        return error;
    }

});


async function profile_editor(person, editor) {
    //turns the Level and XP and adds a dropdown to change the race
    //#level
    let races_input = "";
    let class_input = "";
    try {
        races_input = "<select class='form-select' id='raceinput'>";
        const races = await construct_config("Race");
        $.each(races, function (key, value) {
            races_input += "<option value='" + value + "'>" + value + "</option>";
        });
        races_input += "</select>";
        class_input = "<select class='form-select' id='classinput'>";
        const classes = await construct_config("Class");
        $.each(classes, function (key, value) {
            class_input += "<option value='" + value + "'>" + value + "</option>";
        });
        class_input += "</select>";
    } catch (error) {
        console.log(error);
        alert(error);
        return error;
    }
    if (editor) {
        $('#level').html(bootstrap_input("number", "levelinput", "level", person.level) +
            bootstrap_input("number", "xpinput", "xp", person.xp) + races_input + class_input);
        //reveal the edit buttons
        $('.profile_editor_btns').slideDown();
    } else {
        $('#level').html(bootstrap_input("number", "levelinput", "level", "") +
            bootstrap_input("number", "xpinput", "xp", "") + races_input + class_input);
    }
}

function stats_editor(person, editor) {
    $('#strength').html(bootstrap_input("number", "strengthinput", "strength", person.str));
    $('#dexterity').html(bootstrap_input("number", "dexterityinput", "dexterity", person.dex));
    $('#constitution').html(bootstrap_input("number", "constitutioninput", "constitution", person.con));
    $('#intelligence').html(bootstrap_input("number", "intelligenceinput", "intelligence", person.int));
    $('#wisdom').html(bootstrap_input("number", "wisdominput", "wisdom", person.wis));
    $('#charisma').html(bootstrap_input("number", "charismainput", "charisma", person.cha));
    $('.money > h2').html(bootstrap_input("number", "moneyinput", "money", person.money));
    if (editor) {
        $('.stats_editor_btns').slideDown();
    }
}

function spell_editor() {

}

async function skill_editor(person, editor) {
    window.skills = person.skills;
    if (!editor) { window.skills = []; }
    if (editor) { $('.skill-info > table').slideUp(); }
    try {
        const skills_list = await construct_config("Skills");
        var skill_check_html = "<div class='list-group skills'>"
        $.each(skills_list, function (key, value) {
            var classlist = "";
            if (editor) {
                if (skills.includes(value)) {
                    classlist = "list-group-item list-group-item-action active";
                } else { classlist = "list-group-item list-group-item-action"; }
            }
            if (!editor) { classlist = "list-group-item list-group-item-action"; }
            skill_check_html += "<a class='" + classlist + "' id='" + value + "'>" + value + "</a>";
        });
        skill_check_html += "</div>";
        $('.skill-info').html(skill_check_html);

    } catch (error) {
        console.log(error);
        alert(error);
        return error;
    }
    if (editor) { $('.skills_editor_btns').slideDown(); };
    $('.skills > .list-group-item').on('click', function () {
        let classlist = $(this).attr("class");
        let index = $(this).attr("id");
        if (classlist.includes("active")) {
            console.log("active drop");
            $(this).removeClass("active");
            console.log($(this).attr("id"));
            //drop the array element
            window.skills = $.grep(skills, function (value) {
                return value != String(index);
            });
            console.log(window.skills);
        } else {
            console.log("inactive add");
            $(this).addClass("active");
            window.skills.push(index);
            console.log(window.skills);
        }

    })
}

async function spell_editor(person, editor) {
    window.spells = person.spells;
    window.spelleditor = true;
    console.log(window.spells);
    if (!editor) { window.spells = []; }
    if (editor) { $('.spellslist').slideUp(); }
    try {
        window.spells_list = await construct_config("Spells");
        $.each(window.spells, function (key, value) {
            let spell_element_id = "#" + clean_string(value);
            $(spell_element_id).html(value + "<button style='margin-left: 15px' type=\"button\" class=\"btn btn-outline-danger spell_btn_delete\" value='" + value + "'>" +
                "<img src=\"./icons/general/trash.svg\" alt=\"trash\" width=\"16\" height=\"16\">" +
                "</button>");
        });
    } catch (error) {
        console.log(error);
        alert(error);
        return error;
    }
    if (editor) { $('.spells_editor_btns').slideDown(); }
    $('.spells > .list-group-item').on('click', function () {
        let classlist = $(this).attr("class");
        let index = $(this).attr("id");
        if (classlist.includes("active")) {
            console.log("active drop");
            $(this).removeClass("active");
            console.log($(this).attr("id"));
            //drop the array element
            window.spells = $.grep(spells, function (value) {
                return value != String(index);
            });
            console.log(window.spells);
        } else {
            console.log("inactive add");
            $(this).addClass("active");
            window.spells.push(index);
            console.log(window.spells);
        }
    });
    $('.spell_btn_delete').on('click', function () {
        let spell = $(this).attr("value");
        console.log(spell);
        window.spells = $.grep(spells, function (value) {
            return value != String(spell);
        });
        console.log(window.spells);
        $(this).parent().remove();
    });
}

async function equipment_editor(person, editor) {
    window.equipment = person.equipment;
    console.log(window.equipment);
    console.log(person.equipment);
    window.equipmenteditor = true;
    console.log(window.equipment);
    if (!editor) { window.equipment = []; }
    // $('#equipmentlist').slideUp();
    try {
        window.equipment_list = await construct_config("Equipment");
        $.each(window.equipment, function (key, value) {
            let equipment_element_id = "#" + clean_string(value);
            $(equipment_element_id).html(value + "<button style='margin-left: 15px' type=\"button\" class=\"btn btn-outline-danger equipment_btn_delete\" value='" + clean_string(value) + "'>" +
                "<img src=\"./icons/general/trash.svg\" alt=\"trash\" width=\"16\" height=\"16\">" +
                "</button>");
        });
    } catch (error) {
        console.log(error);
        alert(error);
        return error;
    }
    if (editor) { $('.equipment_editor_btns').slideDown(); }
    $('.equipment_btn_delete').on('click', function () {
        let equipmentval = $(this).attr('value');
        console.log(equipmentval);
        console.log(window.equipment);
        window.equipment = $.grep(equipment, function (value) {
            return clean_string(value) != String(equipmentval);
        });
        console.log(window.equipment);
        $(this).parent().remove();
    });
}

async function language_editor(person, editor) {
    window.language = person.languages;
    console.log(window.language);
    if (!editor) { window.language = []; }
    try {
        window.language_list = await construct_config("Languages");
        console.log(window.language_list);
        $.each(window.language, function (key, value) {
            let language_element_id = "#" + value;
            $(language_element_id).html(value + "<button style='margin-left: 15px' type=\"button\" class=\"btn btn-outline-danger language_btn_delete\" value='" + clean_string(value) + "'>" +
                "<img src=\"./icons/general/trash.svg\" alt=\"trash\" width=\"16\" height=\"16\">" +
                "</button>");
        });
    } catch (error) {
        console.log(error);
        alert(error);
        return error;
    }
    if (editor) { $('.Language_editor_btns').slideDown(); }
    $('.language_btn_delete').on('click', function () {
        let languageval = $(this).attr('value');
        console.log(languageval);
        console.log(window.language);
        window.language = $.grep(language, function (value) {
            return clean_string(value) != String(languageval);
        });
        console.log(window.language);
        $(this).parent().remove();
    }
    );
}

async function feature_editor(person, editor) {
    window.feature = person.features;
    console.log(window.feature);
    if (!editor) { window.feature = []; }
    try {
        window.feature_list = await construct_config("Features")
        console.log(window.feature_list);
        $.each(window.feature, function (key, value) {
            let feature_element_id = "#" + clean_string(value);
            $(feature_element_id).html(value + "<button style='margin-left: 15px' type=\"button\" class=\"btn btn-outline-danger feature_btn_delete\" value='" + clean_string(value) + "'>" +
                "<img src=\"./icons/general/trash.svg\" alt=\"trash\" width=\"16\" height=\"16\">" +
                "</button>");
        });
    } catch (error) {
        console.log(error);
        alert(error);
        return error;
    }
    if (editor) { $('.Features_editor_btns').slideDown(); }
    $('.feature_btn_delete').on('click', function () {
        let featureval = $(this).attr('value');
        console.log(featureval);
        console.log(window.feature);
        window.feature = $.grep(feature, function (value) {
            return clean_string(value) != String(featureval);
        });
        console.log(window.feature);
        $(this).parent().remove();
    });
}

function trait_editor(person, editor) {
    window.traits = person.traits;
    if (!editor) { window.traits = []; }
    try {
        $.each(window.traits, function (key, value) {
            let trait_element_id = "#" + clean_string(value);
            $(trait_element_id).html(value + "<button style='margin-left: 15px' type=\"button\" class=\"btn btn-outline-danger trait_btn_delete\" value='" + clean_string(value) + "'>" +
                "<img src=\"./icons/general/trash.svg\" alt=\"trash\" width=\"16\" height=\"16\">" +
                "</button>");
        });
    } catch (error) {
        console.log(error);
        alert(error);
        return error;
    }
    if (editor) { $('.Traits_editor_btns').slideDown(); }
    $('.trait_btn_delete').on('click', function () {
        let traitval = $(this).attr('value');
        console.log(traitval);
        console.log(window.traits);
        window.traits = $.grep(traits, function (value) {
            return clean_string(value) != String(traitval);
        });
        console.log(window.traits);
        $(this).parent().remove();
    });
}

function ideal_editor(person, editor) {
    window.ideals = person.ideals;
    if (!editor) { window.ideals = []; }
    try {
        $.each(window.ideals, function (key, value) {
            let ideal_element_id = "#" + clean_string(value);
            $(ideal_element_id).html(value + "<button style='margin-left: 15px' type=\"button\" class=\"btn btn-outline-danger ideal_btn_delete\" value='" + clean_string(value) + "'>" +
                "<img src=\"./icons/general/trash.svg\" alt=\"trash\" width=\"16\" height=\"16\">" +
                "</button>");
        });
    } catch (error) {
        console.log(error);
        alert(error);
        return error;
    }
    if (editor) { $('.Ideals_editor_btns').slideDown(); }
    $('.ideal_btn_delete').on('click', function () {
        let idealval = $(this).attr('value');
        console.log(idealval);
        console.log(window.ideals);
        window.ideals = $.grep(ideals, function (value) {
            return clean_string(value) != String(idealval);
        });
        console.log(window.ideals);
        $(this).parent().remove();
    });
}

function save_profile_router(value, selected_profile) {
    switch (value) {
        case "ProfileSave":
            profile_save(selected_profile);
            break;
        case "StatsSave":
            stats_save(selected_profile);
            break;
        case "SkillSave":
            skill_save(selected_profile);
            break;
        case "SpellSave":
            spell_save(selected_profile);
            break;
        case "EquipmentSave":
            equipment_save(selected_profile);
            break;
        case "LanguageSave":
            language_save(selected_profile);
            break;
        case "FeatureSave":
            feature_save(selected_profile);
            break;
        case "TraitSave":
            trait_save(selected_profile);
            break;
        case "IdealSave":
            ideal_save(selected_profile);
            break;
        default:
            break;
    }
};



//adds event listeners to all save buttons
$('.save_btn').on('click', async function () {
    $(this).html("<span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>");
    let id = this.value;
    console.log(id);
    try {
        console.log($('#name').text());
        let profile_saver = await save_profile_router(id, $('#name').text());
        $(this).html("Save");
        activate_loader();
        // $('.profile_editor_btns').slideUp();
        toast("DND", "Profile Saved!");
        // console.log($('#name').text());
        // initprofile($('#name').text());
        // deactivate_loader();
        //  alert("Profile Saved!");
        //  location.reload();
    } catch (error) {
        console.log(error);
        alert(error);
        return error;
    }
});


//adds event listeners to all cancel buttons
$('.cancel_btn').on('click', function () {
    location.reload();
});


function skillchecklist() {
    let classlist = $(this).attr("class");
    if (classlist.includes("active")) {
        $(this).removeClass("active");
        delete skills[$(this).attr("id")];
        console.log(skills);
    } else {
        $(this).addClass("active");
        skills[$(this).attr("id")] = $(this).attr("id");
        console.log(skills);
    }
}

function spell_add() {
    var spells_dropdown_list = "<select class='dropdown form-select spell_input' id='spellsinput' data-live-search='true'>";
    $.each(spells_list, function (key, value) {
        spells_dropdown_list += "<option data-tokens='" + value + "' value='" + value + "'>" + value + "</option>";
    });
    spells_dropdown_list += "</select>";
    $('#spellslist').append(spells_dropdown_list);
}

function equipment_add() {
    var equipment_dropdown_list = "<select class='dropdown form-select equipment_input' id='equipmentinput' data-live-search='true'>";
    $.each(equipment_list, function (key, value) {
        equipment_dropdown_list += "<option data-tokens='" + value + "' value='" + value + "'>" + value + "</option>";
    });
    equipment_dropdown_list += "</select>";
    $('#equipmentlist').append(equipment_dropdown_list);
}

function language_add() {
    var language_dropdown_list = "<select class='dropdown form-select language_input' id='languageinput' data-live-search='true'>";
    $.each(window.language_list, function (key, value) {
        language_dropdown_list += "<option data-tokens='" + value + "' value='" + value + "'>" + value + "</option>";
    });
    language_dropdown_list += "</select>";
    $('#languagelist').append(language_dropdown_list);
}

function feature_add() {
    var feature_dropdown_list = "<select class='dropdown form-select feature_input' id='featureinput' data-live-search='true'>";
    $.each(window.feature_list, function (key, value) {
        feature_dropdown_list += "<option data-tokens='" + value + "' value='" + value + "'>" + value + "</option>";
    });
    feature_dropdown_list += "</select>";
    $('#featurelist').append(feature_dropdown_list);
}

function trait_add() {
    $('#traitlist').append(bootstrap_input("text", "trait_input", "trait", ""));
}

function ideal_add() {
    $('#idealist').append(bootstrap_input("text", "ideal_input", "ideal", ""));
};

//This function routes the edit buttons to the correct editor
function editor_profile_router(value, person) {
    switch (value) {
        case "Profile":
            profile_editor(person, true);
            break;
        case "Stats":
            stats_editor(person, true);
            break;
        case "Skills":
            skill_editor(person, true);
            break;
        case "Spells":
            spell_editor(person, true);
            break;
        case "Equipment":
            equipment_editor(person, true);
            break;
        case "Language":
            language_editor(person, true);
            break;
        case "Features":
            feature_editor(person, true);
            break;
        case "Traits":
            trait_editor(person, true);
            break;
        case "Ideals":
            ideal_editor(person, true);
            break;
        default:
            break;
    };
}

//Add a new dropdown/row to element
$('.add_btn').on('click', function () {
    switch (this.value) {
        case "SpellsAdd":
            spell_add();
            break;
        case "EquipmentAdd":
            equipment_add();
            break;
        case "LanguageAdd":
            language_add();
            break;
        case "FeatureAdd":
            feature_add();
            break;
        case "TraitAdd":
            trait_add();
            break;
        case "IdealAdd":
            ideal_add();
            break;
        default:
            break;
    };
});

