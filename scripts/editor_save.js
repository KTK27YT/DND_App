//This saves all the data from the editor to the json

//we declare these constants as all functions use them
const fs = require('fs');
const filename = './data/profile.json';
const file = require(filename);


async function profile_save(selected_profile) {
    return new Promise((resolve, reject) => {
        try {
            let new_level = $('#levelinput').val();
            let new_xp = $('#xpinput').val();
            let new_race = $('#raceinput').val();
            console.log(new_level, new_xp, new_race);

            //Commit the changes respectively
            try {
                console.log(selected_profile);
                console.log(file);
                console.log(file[selected_profile]);
                file[selected_profile][0]["level"] = parseInt(new_level, 10);
                file[selected_profile][0]["xp"] = parseInt(new_xp, 10);
                file[selected_profile][0]["race"] = new_race;
                fs.writeFile(filename, JSON.stringify(file, null, 2), function writeJSON(err) {
                    if (err) return console.log(err);
                    console.log(JSON.stringify(file));
                    console.log('writing to ' + filename);
                });
                resolve("Profile saved");
            } catch (error) {
                console.log("While saving the profile section an error occured: " + error);
                alert(error);
                reject(error);
            };
        } catch (error) {
            console.log("While saving the profile section an error occured: " + error);
            alert(error);
            reject(error);
        }


    });

}