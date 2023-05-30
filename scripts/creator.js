//This prepares the creator page
// $('#name').html(bootstrap_input('Name', 'name', 'Enter your name', ''))
profile_editor("", false);
stats_editor("", false);
skill_editor("", false);
spell_editor("", false);
equipment_editor("", false);
language_editor("", false);
feature_editor("", false);
trait_editor("", false);
ideal_editor("", false);


$('.create_btn').click(function () {
    let name = $('#name').val();
    if (name === '' || name === undefined) {
        alert('Please enter a name');
        return;
    }
    creator_save();
});
