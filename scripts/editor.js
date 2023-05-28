// The Goal of this script is to provide a simple editor

$('.edit_btn').on('click', async function () {
    try {
        const person = await construct_profile($('#name').text());
        console.log(this.value);
        profile_editor(person);
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

function spell_editor() {

}

function skills_editor() {

}

function spells_editor() {

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
        $('.profile_editor_btns').slideUp();
        toast("DND", "Profile Saved!");
        console.log($('#name').text());
        initprofile($('#name').text());
        deactivate_loader();
        alert("Profile Saved!");
        location.reload();
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

