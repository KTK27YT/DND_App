//This saves all the data from the editor to the json

async function profile_save(selected_profile) {
    let level = $('#levelinput').val();
    let xp = $('#xpinput').val();
    let race = $('#raceinput').val();
    console.log(level, xp, race);

    //Commit the changes respectively
    try {
        const person = await construct_profile(selected_profile);
        person.level = level;
        person.xp = xp;
        person.race = race;
        console.log(person);
        localStorage.setItem(selected_profile, JSON.stringify(person));
    } catch (error) {
        console.log("construct_profile : Promise Rejected");
        alert(error);
    };
}