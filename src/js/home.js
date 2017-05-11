var notesButton = document.getElementById('notesControl');
var hiddenNotesButton = document.getElementById('hiddenControlNotesButtons');
notesButton.addEventListener('click', function () { toggleControls(hiddenNotesButton); changeColorMenuButtons(notesButton); setEventsHiddenButtons(hiddenNotesButton) });

notesButton.addEventListener('mouseover', function () { toggleControls(hiddenNotesButton); });


var tagButton = document.getElementById('tagsControl');
var hiddenTagsButton = document.getElementById('hiddenControlTagsButtons');
tagButton.addEventListener('click', function () { toggleControls(hiddenTagsButton); changeColorMenuButtons(tagButton); setEventsHiddenButtons(hiddenTagsButton) });
tagButton.addEventListener('mouseover', function () { toggleControls(hiddenTagsButton); });


var folderButton = document.getElementById('foldersControl');
var hiddenFoldersButton = document.getElementById('hiddenControlFoldersButtons');

folderButton.addEventListener('click', function () { toggleControls(hiddenFoldersButton); changeColorMenuButtons(folderButton); setEventsHiddenButtons(hiddenFoldersButton) });
folderButton.addEventListener('mouseover', function () { toggleControls(hiddenFoldersButton); });

 
var searchForm =document.getElementById('searchForm');
var searchFormInput=  document.getElementById('searchForm__input');
hiddenButtonSearchNote.addEventListener('click', function(){  setSearchFormVisible(searchForm,searchFormInput );});


var titleNote = document.getElementById('titleNote');
titleNote.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        setTitleNote(titleNote)
    }
});

function setSearchFormVisible(controlComponent1, controlComponent2 ) {
    controlComponent1.classList.remove('searchFormHidden');
    controlComponent1.classList.add('searchFormVisible');
    controlComponent2.classList.remove('searchFormHidden');
    controlComponent2.classList.add('searchFormVisible');
}

function setEventsHiddenButtons(controlComponent) {
    for (var i = 0; i < controlComponent.childNodes.length; ++i) {
        controlComponent.childNodes[i].addEventListener('click', function(){  changeColorHiddenButtons(this);});
    }
}


function changeColorHiddenButtons(controlComponent) {
    resetColorHiddenButtons();
    controlComponent.classList.remove('disableHiddenButton');
    controlComponent.classList.add('activeHiddenButton');
}

function changeColorMenuButtons(controlComponent) {
    resetColorMenuButtons();
    resetColorHiddenButtons();
 
     controlComponent.classList.remove('disableHiddenButton');
    controlComponent.classList.add('activeHiddenButton');
}

function resetColorMenuButtons() {
    notesButton.classList.remove('activeHiddenButton');
    notesButton.classList.add('disableHiddenButton');

    tagButton.classList.remove('activeHiddenButton');
    tagButton.classList.add('disableHiddenButton');

    folderButton.classList.remove('activeHiddenButton');
    folderButton.classList.add('disableHiddenButton');
}

function resetColorHiddenButtons() {
    var hiddenButtons = document.getElementsByClassName('hiddenButtons__button');
    for (var i = 0; i < hiddenButtons.length; ++i) {
       hiddenButtons[i].classList.remove('activeHiddenButton');
        hiddenButtons[i].classList.add('disableHiddenButton');
    }
}

function toggleControls(controlComponent) {
    resetControls();
    if (controlComponent.style.visibility == 'hidden') {
        controlComponent.style.visibility = 'visible';
        controlComponent.style.opacity = 1;
        controlComponent.classList.remove('hiddenControl');
        controlComponent.classList.add('activeControl');
    } else {
        controlComponent.style.visibility = 'hidden';
        controlComponent.style.opacity = 0.3;
        controlComponent.classList.remove('activeControl');
        controlComponent.classList.add('hiddenControl');
    }
}

function resetControls() {
    hiddenNotesButton.style.visibility = 'hidden';
    hiddenNotesButton.style.opacity = 0.2;

    hiddenTagsButton.style.visibility = 'hidden';
    hiddenTagsButton.style.opacity = 0.2;

    hiddenFoldersButton.style.visibility = 'hidden';
    hiddenFoldersButton.style.opacity = 0.2;
}


/*Button's information about the notes, tags and folders*/
function resetControls() {
    hiddenNotesButton.style.visibility = "hidden";
    hiddenNotesButton.style.opacity = 0;
    hiddenNotesButton.classList.remove('activeControl');
    hiddenNotesButton.classList.add('hiddenControl');

    hiddenTagsButton.style.visibility = "hidden";
    hiddenTagsButton.style.opacity = 0;
    hiddenTagsButton.classList.remove('activeControl');
    hiddenTagsButton.classList.add('hiddenControl');

    hiddenFoldersButton.style.visibility = "hidden";
    hiddenFoldersButton.style.opacity = 0;
    hiddenFoldersButton.classList.remove('activeControl');
    hiddenFoldersButton.classList.add('hiddenControl');
}

toggleBarElement = document.getElementById('toggleBar');
toggleBarElement.addEventListener('click', toggleEditionBar);


function toggleEditionBar() {
    editionBarTexts = document.getElementsByClassName('editionBar__span');
    for (var i = 0; i < editionBarTexts.length; ++i) {
        if (toggleBarElement.classList.contains('active')) {
            editionBarTexts[i].style.visibility = "hidden";
            editionBarTexts[i].style.opacity = 0;
            editionBarTexts[i].classList.remove('activeControl');
            editionBarTexts[i].classList.add('hiddenControl');
        }
        else {
            editionBarTexts[i].style.visibility = "visible";
            editionBarTexts[i].style.opacity = 1;
            editionBarTexts[i].classList.remove('hiddenControl');
            editionBarTexts[i].classList.add('activeControl');
        }
    }

    if (toggleBarElement.classList.contains('active')) {
        toggleBarElement.classList.remove('active');
    }
    else {
        toggleBarElement.classList.add('active');
    }
}

function setTitleNote(controlComponent) {
   controlComponent.classList.add('increaseSizeNoteTitle');
   var textBoxNote = document.getElementById('noteContent');
   textBoxNote.focus();
}

function addNote() {

    console.log('NOOOTAASS');
  /*  var noteTextBox = document.getElementById('noteContent');
    var noteText = noteTextBox.value;

    document.querySelector('.panel-body').innerHTML = noteText;
    noteTextBox.value = '';

    var panelTitle = document.getElementById('panel1Title');
    var title = document.getElementById('titleNote');

    panelTitle.innerHTML = title.value;
    title.value = ""; */
}
