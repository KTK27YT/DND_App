//This contains functions and general functions for making my life easier



//calculates modifier for each stat
function calculate_modfiier(stat) {
    return (stat - 10) / 2;
}

//caluculates profficiency for skill
function calculate_profficiency(level) {
    if (level >= 1 && level <= 4) {
        return 2;
    }
    if (level >= 5 && level <= 16) {
        return 5;
    }
    if (level >= 17) {
        return 8;
    }
}

//calculates the modifier for the skill
function calculate_skillmodifier(skill, person) {
    switch (skill) {
        case "Acrobatics":
            return calculate_modfiier(person.dex);
        case "Animal Handling":
            return calculate_modfiier(person.wis);
        case "Arcana":
            return calculate_modfiier(person.int);
        case "Athletics":
            return calculate_modfiier(person.str);
        case "Deception":
            return calculate_modfiier(person.cha);
        case "History":
            return calculate_modfiier(person.int);
        case "Insight":
            return calculate_modfiier(person.wis);
        case "Intimidation":
            return calculate_modfiier(person.cha);
        case "Investigation":
            return calculate_modfiier(person.int);
        case "Medicine":
            return calculate_modfiier(person.wis);
        case "Nature":
            return calculate_modfiier(person.int);
        case "Perception":
            return calculate_modfiier(person.wis);
        case "Performance":
            return calculate_modfiier(person.cha);
        case "Persuasion":
            return calculate_modfiier(person.cha);
        case "Religion":
            return calculate_modfiier(person.int);
        case "Sleight of Hand":
            return calculate_modfiier(person.dex);
        case "Stealth":
            return calculate_modfiier(person.dex);
        case "Survival":
            return calculate_modfiier(person.wis);
    }
}


//functions handles activating loader
function activate_loader() {
    $('.spinner-bg').fadeIn();
}

//functions handles deactivating loader
function deactivate_loader() {
    $('.spinner-bg').fadeOut();
}


//function returns back a bootstrap input field with
function bootstrap_input(type, id, placeholder, value) {
    return "<div class=\"mb-3\">" +
        "<input type=\"" + type + "\" class=\"form-control\" id=\"" + id + "\" placeholder=\"" + placeholder + "\" value=\"" + value + "\">" +
        "</div>";
}

function clean_string(string) {
    return string.replace(/\s/g, "-").toLowerCase();
}