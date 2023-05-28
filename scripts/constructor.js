// So this turns data from the JSON into a JAVASCRIPT object
// makes my life hella easier



//Constructs the user profile as an object
//this function is combined with ASYNC + Promises
function construct_profile(selected_profile) {
    return new Promise((resolve, reject) => {
        const person = new Object();
        try {
            $.getJSON('data/profile.json', (data) => {
                let innerdata = data[selected_profile][0];
                $.each(innerdata, function (key, value) {
                    person[key] = value;
                });
                console.log("construct_profile : Promise Executed");
                // console.log(person);
                resolve(person);
            });
        } catch (error) {
            console.log("construct_profile : Promise Rejected");
            reject(error);
        }
    })
};

//This finds the spell and returns the data
function construct_spellsinfo(spellname) {
    return new Promise((resolve, reject) => {
        console.log("construct_spellsinfo: Running")
        const urlapi = "https://www.dnd5eapi.co/api/spells/"
        $.ajax({
            url: urlapi + spellname,
            contentType: "application/json",
            dataType: 'json',
            success: function (data) {
                //  console.log(data);
                resolve(data);
                deactivate_loader();
            },
            error: function (xhr, status, error) {
                console.log(error);
                reject(error);
            }
        });
    });
};

//This finds the equipment and returns the data
function construct_equipmentinfo(equipmentname) {
    return new Promise((resolve, reject) => {
        console.log("Construct Equipment Info: Running")
        const urlapi = "https://www.dnd5eapi.co/api/equipment/"
        $.ajax({
            url: urlapi + equipmentname,
            contentType: "application/json",
            dataType: 'json',
            success: function (data) {
                //  console.log(data);
                resolve(data);
            },
            error: function (xhr, status, error) {
                console.log(error);
                reject(error);
            }
        });
    });
};


function construct_config(config_type) {
    return new Promise((resolve, reject) => {
        console.log("Construct Config: Running");
        try {
            $.getJSON('data/config.json', (data) => {
                let innerdata = data[config_type];
                console.log(innerdata);
                resolve(innerdata);
            });
        } catch (error) {
            console.log("construct_config : Promise Rejected");
            reject(error);
        }
    });
};


