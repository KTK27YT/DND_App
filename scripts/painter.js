//THIS JUST POPULATES THE BASE HTML WITH THE ELEMENTS REQUIRED FOR THE OTHER FUNCTIONS TO WORK

//THIS IS KIND OF A RESET FUNCTION

function paint_profile() {
    const profile_root = document.getElementById('profile');
    profile_root.innerHTML = '';
    let profile_html = '' +
        '<div class="card text-center m-lg-4">' +
        '            ' +
        '              <div class="card-header">' +
        '                Profile ' +
        '                <button type="button" value="Profile" class="btn btn-primary edit_btn"><img src="icons/General/pen.svg" width="16" height="16"></button>' +
        '              </div>' +
        '              <div class="card-body profiledetails">' +
        '              <div class="race-image"><img id="raceimage" src="https://via.placeholder.com/150" alt="profile picture"><h3 id="raceinfo"></h3></div>' +
        '              <div class="class-image"><img src="https://via.placeholder.com/150" alt="class picture" id="classimage"><h3 id="classinfo"></h3></div>' +
        '              <div class="char-info">' +
        '                  <h5 class="card-title name" id="name">Placeholder Name</h5>' +
        '                  <p class="card-text" id="level">PlaceHolder level <br> XP: Placeholder</p>         ' +
        '                  </button>' +
        '                </div>          ' +
        '              </div>' +
        '              <div class="card-footer profile_editor_btns" style="display: none;">' +
        '                <div class="container">' +
        '                  <button type="button" class="btn btn-success save_btn" value="ProfileSave">Save</button>' +
        '                  <button type="button" class="btn btn-secondary cancel_btn" value="ProfileCancel">Cancel</button>' +
        '                </div>' +
        '              </div>' +
        '            </div>' +
        '';
    profile_root.innerHTML = profile_html;
    all_listeners();

}

function paint_stats() {
    const stats_root = document.getElementById('stats');
    stats_root.innerHTML = '';
    let stats_html = '' +
        '<div class="card text-center m-lg-4">' +
        '                <div class="card-header">' +
        '                  Stats' +
        '                  <button type="button" value="Stats" class="btn btn-primary edit_btn"><img src="icons/General/pen.svg" width="16" height="16"></button>' +
        '                </div>' +
        '                <div class="card-body profiledetails">' +
        '                  <div class="money">' +
        '                    <h2 style="color:greenyellow">$PlaceHolder</h2>' +
        '                  </div>' +
        '                <div class="stat-info">' +
        '                  <table class="table table-dark table-striped">' +
        '                    <thead>' +
        '                      <tr>' +
        '                        <th scope="col">Stat</th>' +
        '                        <th scope="col">Raw</th>' +
        '                        <th scope="col">Modifier</th>' +
        '                      </tr>' +
        '                    </thead>' +
        '                    <tbody>' +
        '                      <tr>' +
        '                        <td>Strength</td>' +
        '                        <td id="strength">Placeholder</td>' +
        '                        <td id="strength_mod">Placeholder</td>' +
        '                      </tr>' +
        '                      <tr>' +
        '                        <td>Dexterity</td>' +
        '                        <td id="dexterity">Placeholder</td>' +
        '                        <td id="dexterity_mod">Placeholder</td>' +
        '                      </tr>' +
        '                      <tr>' +
        '                        <td>Constitution</td>' +
        '                        <td id="constitution">Placeholder</td>' +
        '                        <td id="constitution_mod">Placeholder</td>' +
        '                      </tr>' +
        '                      <tr>' +
        '                        <td>Intelligence</td>' +
        '                        <td id="intelligence">Placeholder</td>' +
        '                        <td id="intelligence_mod">Placeholder</td>' +
        '                      </tr>' +
        '                      <tr>' +
        '                        <td>Wisdom</td>' +
        '                        <td id="wisdom">Placeholder</td>' +
        '                        <td id="wisdom_mod">Placeholder</td>' +
        '                      </tr>' +
        '                      <tr>' +
        '                        <td>Charisma</td>' +
        '                        <td id="charisma">Placeholder</td>' +
        '                        <td id="charisma_mod">Placeholder</td>' +
        '                      </tr>' +
        '                    </tbody>' +
        '                  </table>' +
        '                </div>          ' +
        '                </div>' +
        '                <div class="card-footer stats_editor_btns" style="display: none;">' +
        '                  <div class="container">' +
        '                    <button type="button" class="btn btn-success save_btn" value="StatsSave">Save</button>' +
        '                    <button type="button" class="btn btn-secondary cancel_btn" value="StatsCancel">Cancel</button>' +
        '                  </div>' +
        '                </div>' +
        '                </div>' +
        '';
    stats_root.innerHTML = stats_html;
    all_listeners();
}

function paint_skills() {
    const skills_root = document.getElementById('skills');
    skills_root.innerHTML = '';
    let skills_html = '' +
        '<div class="card text-center m-lg-4">' +
        '                <div class="card-header">' +
        '                  Skills' +
        '                  <button type="button" value="Skills" class="btn btn-primary edit_btn"><img src="icons/General/pen.svg" width="16" height="16"></button>' +
        '                </div>' +
        '                <div class="card-body profiledetails">' +
        '                <div class="skill-info">' +
        '                  <table class="table table-dark table-striped">' +
        '                    <thead>' +
        '                      <tr>' +
        '                        <th scope="col">Skill</th>' +
        '                        <th scope="col">Modifer</th>' +
        '                        <th scope="col">Profficency</th>' +
        '                      </tr>' +
        '                    </thead>' +
        '                    <tbody id="skilltable">' +
        '                    </tbody>' +
        '                  </table>' +
        '                </div>          ' +
        '                </div>' +
        '                <div class="card-footer skills_editor_btns" style="display: none;"> ' +
        '                  <div class="container">' +
        '                    <button type="button" class="btn btn-success save_btn" value="SkillSave">Save</button>' +
        '                    <button type="button" class="btn btn-secondary cancel_btn" value="SkillCancel">Cancel</button>' +
        '                  </div>' +
        '                </div>' +
        '                </div>' +
        '';
    skills_root.innerHTML = skills_html;
    all_listeners();
}

function paint_spells() {
    const spells_root = document.getElementById('spells');
    spells_root.innerHTML = '';
    let spells_html = '' +
        '<div class="card text-center m-lg-4">' +
        '                <div class="card-header">' +
        '                  Spells' +
        '                  <button type="button" value="Spells" class="btn btn-primary edit_btn"><img src="icons/General/pen.svg" width="16" height="16"></button>' +
        '                </div>' +
        '                <div class="card-body profiledetails">' +
        '                <div class="spells-info">' +
        '                  <div class="list-group">' +
        '                    <div id="spellslist">' +
        '  ' +
        '                    </div>' +
        '                  </div>' +
        '                </div>          ' +
        '                </div>' +
        '                <div class="card-footer spells_editor_btns" style="display: none;">' +
        '                  <div class="container">' +
        '                    <button type="button" class="btn btn-success save_btn" value="SpellSave">Save</button>' +
        '                    <button type="button" class="btn btn-secondary cancel_btn" value="SpellCancel">Cancel</button>' +
        '                    <button type="button" class="btn btn-primary add_btn" value="SpellsAdd">+</button>' +
        '                  </div>' +
        '                </div>' +
        '                </div>' +
        '';
    spells_root.innerHTML = spells_html;
    all_listeners();
}

function paint_equipment() {
    const equipment_root = document.getElementById('equipment');
    equipment_root.innerHTML = '';
    let equipment_html = '' +
        '<div class="card text-center m-lg-4">' +
        '                <div class="card-header">' +
        '                  Equipment' +
        '                  <button type="button" value="Equipment" class="btn btn-primary edit_btn"><img src="icons/General/pen.svg" width="16" height="16"></button>' +
        '                </div>' +
        '                <div class="card-body profiledetails">' +
        '                <div class="spells-info">' +
        '                  <div class="list-group">' +
        '                    <div id="equipmentlist">' +
        '  ' +
        '                    </div>' +
        '                  </div>' +
        '                </div>          ' +
        '                </div>' +
        '                <div class="card-footer equipment_editor_btns" style="display: none;">' +
        '                  <div class="container">' +
        '                    <button type="button" class="btn btn-success save_btn" value="EquipmentSave">Save</button>' +
        '                    <button type="button" class="btn btn-secondary  cancel_btn" value="EquipmentCancel">Cancel</button>' +
        '                    <button type="button" class="btn btn-primary  add_btn" onclick="equipment_add()" value="EquipmentAdd">+</button>' +
        '                  </div>' +
        '                </div>' +
        '                </div>' +
        '';
    equipment_root.innerHTML = equipment_html;
    all_listeners();
}

function paint_language() {
    const language_root = document.getElementById('language');
    language_root.innerHTML = '';
    let language_html = '' +
        '<div class="card text-center m-lg-4">' +
        '                  <div class="card-header">' +
        '                    Language' +
        '                    <button type="button" value="Language" class="btn btn-primary edit_btn"><img src="icons/General/pen.svg" width="16" height="16"></button>' +
        '                  </div>' +
        '                  <div class="card-body profiledetails">' +
        '                  <div class="spells-info">' +
        '                    <div class="list-group">' +
        '                      <div id="languagelist">' +
        '                        <ol class="list-group">' +
        '                        </ol>' +
        '                      </div>' +
        '                    </div>' +
        '                  </div>          ' +
        '                  </div>' +
        '                  <div class="card-footer Language_editor_btns" style="display: none;">' +
        '                    <div class="container">' +
        '                      <button type="button" class="btn btn-success save_btn" value="LanguageSave">Save</button>' +
        '                      <button type="button" class="btn btn-secondary cancel_btn" value="LanguageCancel">Cancel</button>' +
        '                      <button type="button" class="btn btn-primary add_btn" onclick="language_add()" value="LanguageAdd">+</button>' +
        '                    </div>' +
        '                  </div>' +
        '                  </div>' +
        '' +
        '';
    language_root.innerHTML = language_html;
    all_listeners();
}

function paint_features() {
    const features_root = document.getElementById('feature');
    features_root.innerHTML = '';
    let features_html = '' +
        '<div class="card text-center m-lg-4">' +
        '                  <div class="card-header">' +
        '                    Features' +
        '                    <button type="button" value="Features" class="btn btn-primary edit_btn"><img src="icons/General/pen.svg" width="16" height="16"></button>' +
        '                  </div>' +
        '                  <div class="card-body profiledetails">' +
        '                  <div class="spells-info">' +
        '                    <div class="list-group">' +
        '                      <div id="featurelist">' +
        '                        <ol class="list-group">' +
        '                        </ol>' +
        '                      </div>' +
        '                    </div>' +
        '                  </div>          ' +
        '                  </div>' +
        '                  <div class="card-footer Features_editor_btns" style="display: none;">' +
        '                    <div class="container">' +
        '                      <button type="button" class="btn btn-success save_btn" value="FeatureSave">Save</button>' +
        '                      <button type="button" class="btn btn-secondary cancel_btn" value="FeatureCancel">Cancel</button>' +
        '                      <button type="button" class="btn btn-primary add_btn" onclick="feature_add()" value="FeatureAdd">+</button>' +
        '                    </div>' +
        '                  </div>' +
        '                  </div>' +
        '';
    features_root.innerHTML = features_html;
    all_listeners();
}

function paint_traits() {
    const traits_root = document.getElementById('trait');
    traits_root.innerHTML = '';
    let traits_html = '' +
        '<div class="card text-center m-lg-4">' +
        '                  <div class="card-header">' +
        '                    Traits' +
        '                    <button type="button" value="Traits" class="btn btn-primary edit_btn"><img src="icons/General/pen.svg" width="16" height="16"></button>' +
        '                  </div>' +
        '                  <div class="card-body profiledetails">' +
        '                  <div class="spells-info">' +
        '                    <div class="list-group">' +
        '                      <div id="traitlist">' +
        '                        <ol class="list-group">' +
        '                        </ol>' +
        '                      </div>' +
        '                    </div>' +
        '                  </div>          ' +
        '                  </div>' +
        '                  <div class="card-footer Traits_editor_btns" style="display: none;">' +
        '                    <div class="container">' +
        '                      <button type="button" class="btn btn-success save_btn" value="TraitSave">Save</button>' +
        '                      <button type="button" class="btn btn-secondary cancel_btn" value="TraitCancel">Cancel</button>' +
        '                      <button type="button" class="btn btn-primary add_btn" onclick="trait_add()" value="TraitAdd">+</button>' +
        '                    </div>' +
        '                  </div>' +
        '                  </div>' +
        '';
    traits_root.innerHTML = traits_html;
    all_listeners();
}

function paint_ideals() {
    const ideals_root = document.getElementById('ideal');
    ideals_root.innerHTML = '';
    let ideals_html = '' +
        '<div class="card text-center m-lg-4">' +
        '                  <div class="card-header">' +
        '                    Ideals' +
        '                    <button type="button" value="Ideals" class="btn btn-primary edit_btn"><img src="icons/General/pen.svg" width="16" height="16"></button>' +
        '                  </div>' +
        '                  <div class="card-body profiledetails">' +
        '                  <div class="spells-info">' +
        '                    <div class="list-group">' +
        '                      <div id="idealist">' +
        '                        <ol class="list-group">' +
        '                        </ol>' +
        '                      </div>' +
        '                    </div>' +
        '                  </div>          ' +
        '                  </div>' +
        '                  <div class="card-footer Ideals_editor_btns" style="display: none;">' +
        '                    <div class="container">' +
        '                      <button type="button" class="btn btn-success save_btn" value="IdealSave">Save</button>' +
        '                      <button type="button" class="btn btn-secondary cancel_btn" value="IdealCancel">Cancel</button>' +
        '                      <button type="button" class="btn btn-primary add_btn" onclick="ideal_add()" value="IdealAdd">+</button>' +
        '                    </div>' +
        '                  </div>' +
        '                  </div>' +
        '';
    ideals_root.innerHTML = ideals_html;
    all_listeners();
}


paint_profile();
paint_stats();
paint_skills();
paint_spells();
paint_equipment();
paint_language();
paint_features();
paint_traits();
paint_ideals();