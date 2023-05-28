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


async function profile_editor(person) {
    //turns the Level and XP and adds a dropdown to change the race
    //#level
    let races_input = "";
    try {
        races_input = "<select class='form-select' id='raceinput'>";
        const races = await construct_config("Race");
        $.each(races, function (key, value) {
            races_input += "<option value='" + value + "'>" + value + "</option>";
        });
        races_input += "</select>";
    } catch (error) {
        console.log(error);
        alert(error);
        return error;
    }
    $('#level').html(bootstrap_input("number", "levelinput", "level", person.level) +
        bootstrap_input("number", "xpinput", "xp", person.xp) + races_input);
    //reveal the edit buttons
    $('.profile_editor_btns').slideDown();
}

function stats_editor(person) {
    $('#strength').html(bootstrap_input("number", "strengthinput", "strength", person.str));
    $('#dexterity').html(bootstrap_input("number", "dexterityinput", "dexterity", person.dex));
    $('#constitution').html(bootstrap_input("number", "constitutioninput", "constitution", person.con));
    $('#intelligence').html(bootstrap_input("number", "intelligenceinput", "intelligence", person.int));
    $('#wisdom').html(bootstrap_input("number", "wisdominput", "wisdom", person.wis));
    $('#charisma').html(bootstrap_input("number", "charismainput", "charisma", person.cha));
    $('.money > h2').html(bootstrap_input("number", "moneyinput", "money", person.money));
    $('.stats_editor_btns').slideDown();
}

function spell_editor() {

}

async function skill_editor(person) {
    window.skills = person.skills;
    $('.skill-info > table').slideUp();
    try {
        const skills_list = await construct_config("Skills");
        var skill_check_html = "<div class='list-group skills'>"
        $.each(skills_list, function (key, value) {
            var classlist = "";
            if (skills.includes(value)) {
                classlist = "list-group-item list-group-item-action active";
            } else { classlist = "list-group-item list-group-item-action"; }
            skill_check_html += "<a class='" + classlist + "' id='" + value + "'>" + value + "</a>";
        });
        skill_check_html += "</div>";
        $('.skill-info').html(skill_check_html);

    } catch (error) {
        console.log(error);
        alert(error);
        return error;
    }
    $('.skills_editor_btns').slideDown();
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

async function spell_editor(person) {
    window.spells = person.spells;
    window.spelleditor = true;
    console.log(window.spells);
    $('.spellslist').slideUp();
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
    $('.spells_editor_btns').slideDown();
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

function equipment_editor() {

}

function language_editor() {

}

function features_editor() {

}

function traits_editor() {

}

function ideals_editor() {

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
    var spells_dropdown_list = "<select class='form-select spell_input' id='spellsinput'>";
    $.each(spells_list, function (key, value) {
        spells_dropdown_list += "<option value='" + value + "'>" + value + "</option>";
    });
    spells_dropdown_list += "</select>";
    $('#spellslist').append(spells_dropdown_list);
}

//This function routes the edit buttons to the correct editor
function editor_profile_router(value, person) {
    switch (value) {
        case "Profile":
            profile_editor(person);
            break;
        case "Stats":
            stats_editor(person);
            break;
        case "Skills":
            skill_editor(person);
            break;
        case "Spells":
            spell_editor(person);
            break;
        case "Equipment":
            equipment_editor(person);
            break;
        case "Language":
            language_editor(person);
            break;
        case "Features":
            feature_editor(person);
            break;
        case "Traits":
            trait_editor(person);
            break;
        case "Ideals":
            ideal_editor(person);
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

