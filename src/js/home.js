var notesButton = document.getElementById('notesControl');
var hiddenNotesButton = document.getElementById('hiddenControlNotesButtons');

notesButton.addEventListener('click', function () { toggleControls(hiddenNotesButton); changeColorMenuButtons(notesButton); setEventsHiddenButtons(hiddenNotesButton) });
notesButton.addEventListener('mouseover', function () { toggleControls(hiddenNotesButton); });

notesButton.addEventListener('click', function () {
    toggleControls(hiddenNotesButton);
    changeColorMenuButtons(notesButton);
    setEventsHiddenButtons(hiddenNotesButton);
    setInformationPanelTittle(notesButton)
});

notesButton.addEventListener('mouseover', function () {
    toggleControls(hiddenNotesButton)
});



var tagButton = document.getElementById('tagsControl');
var hiddenTagsButton = document.getElementById('hiddenControlTagsButtons');
tagButton.addEventListener('click', function () {
    toggleControls(hiddenTagsButton);
    changeColorMenuButtons(tagButton);
    setEventsHiddenButtons(hiddenTagsButton);
    setInformationPanelTittle(tagButton)
});
tagButton.addEventListener('mouseover', function () {
    toggleControls(hiddenTagsButton);
});


var folderButton = document.getElementById('foldersControl');
var hiddenFoldersButton = document.getElementById('hiddenControlFoldersButtons');

folderButton.addEventListener('click', function () {
    toggleControls(hiddenFoldersButton);
    changeColorMenuButtons(folderButton);
    setEventsHiddenButtons(hiddenFoldersButton);
    setInformationPanelTittle(folderButton);
});
folderButton.addEventListener('mouseover', function () {
    toggleControls(hiddenFoldersButton);
});


var searchForm = document.getElementById('searchForm');
var searchFormInput = document.getElementById('searchForm__input');
var hiddenButtonSearchNote = document.getElementById('hiddenButtonSearchNote');
hiddenButtonSearchNote.addEventListener('click', function () {
    setSearchFormVisible(searchForm, searchFormInput);
});

//When the hidden button of search tag is clicked the form of seacrh tag comes visisble 
var hiddenButtonSearchTag = document.getElementById('hiddenButtonSearchTag');
hiddenButtonSearchTag.addEventListener('click', function () {
    setSearchFormVisible(searchForm, searchFormInput);
});
//When the hidden button of search folder is clicked the form of folder comes visisble 
var hiddenButtonSearchFolder = document.getElementById('hiddenButtonSearchFolder');
hiddenButtonSearchFolder.addEventListener('click', function () {
    setSearchFormVisible(searchForm, searchFormInput);
});

// Form for adding a new tag o a new folder
var addNewElementForm = document.getElementById('addNewElementForm');

//When the hidden button of add tag is clicked the form of add a new tag comes visisble 
var hiddenButtonAddTag = document.getElementById('hiddenButtonAddTag');
hiddenButtonAddTag.addEventListener('click', function () {
    setAddNewElementFormVisible(addNewElementForm);
});

//When the hidden button of add folder is clicked the form of add a new folder comes visisble 
var hiddenButtonAddFolder = document.getElementById('hiddenButtonAddFolder');
hiddenButtonAddFolder.addEventListener('click', function () {
    setAddNewElementFormVisible(addNewElementForm);
});





function setAddNewElementFormVisible(controlComponent) {
    controlComponent.classList.remove('addNewElementFormHidden');
    controlComponent.classList.add('addNewElementFormVisible');

};



var titleNote = document.getElementById('titleNote');
titleNote.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        setTitleNote(titleNote)
    }
});

var addNoteButton = document.getElementById('addNoteButton');
addNoteButton.addEventListener('click', function(){ addNote() } );

function setSearchFormVisible(controlComponent1, controlComponent2 ) {


function setInformationPanelTittle(component) {
    var elementClicked = component.id;
    switch (elementClicked) {
        case "notesControl":
            console.log('notass');
            document.getElementById('informationPanelTittle').innerHTML = 'Notes';
            addNewElementForm.classList.remove('addNewElementFormVisible');
            addNewElementForm.classList.add('addNewElementFormHidden');
            searchForm.classList.remove('addNewElementFormVisible');
            searchForm.classList.add('addNewElementFormHidden');
            searchFormInput.classList.remove('addNewElementFormVisible');
            searchFormInput.classList.add('addNewElementFormHidden');
            
            break;
        case "tagsControl":
            console.log('tags');
            document.getElementById('informationPanelTittle').innerHTML = 'Tags';
            addNewElementForm.classList.remove('addNewElementFormVisible');
            addNewElementForm.classList.add('addNewElementFormHidden');
            searchForm.classList.remove('addNewElementFormVisible');
            searchForm.classList.add('addNewElementFormHidden');
            searchFormInput.classList.remove('addNewElementFormVisible');
            searchFormInput.classList.add('addNewElementFormHidden');
            break;
        case "foldersControl":
            console.log('folders');
            document.getElementById('informationPanelTittle').innerHTML = 'Folders';
            addNewElementForm.classList.remove('addNewElementFormVisible');
            addNewElementForm.classList.add('addNewElementFormHidden');
            searchForm.classList.remove('addNewElementFormVisible');
            searchForm.classList.add('addNewElementFormHidden');
            searchFormInput.classList.remove('addNewElementFormVisible');
            searchFormInput.classList.add('addNewElementFormHidden');
            break;
    }
}



function setSearchFormVisible(controlComponent1, controlComponent2) {
    controlComponent1.classList.remove('addNewElementFormHidden');
    controlComponent1.classList.add('addNewElementFormVisible');
    controlComponent2.classList.remove('addNewElementFormHidden');
    controlComponent2.classList.add('addNewElementFormVisible');
}

function setEventsHiddenButtons(controlComponent) {
    for (var i = 0; i < controlComponent.childNodes.length; ++i) {
        controlComponent.childNodes[i].addEventListener('click', function () {
            changeColorHiddenButtons(this);
        });
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
        } else {
            editionBarTexts[i].style.visibility = "visible";
            editionBarTexts[i].style.opacity = 1;
            editionBarTexts[i].classList.remove('hiddenControl');
            editionBarTexts[i].classList.add('activeControl');
        }
    }

    if (toggleBarElement.classList.contains('active')) {
        toggleBarElement.classList.remove('active');
    } else {
        toggleBarElement.classList.add('active');
    }
};

function setTitleNote(controlComponent) {
    controlComponent.classList.add('increaseSizeNoteTitle');
    var textBoxNote = document.getElementById('noteContent');
    textBoxNote.focus();
};

function addNote() {

    console.log('NOOOTAASS');

    var panelInformation = document.getElementById('listInformationPanel');

    var noteTextBox = document.getElementById('noteContent');
    var noteText = noteTextBox.value;

    var noteTitleBox = document.getElementById('titleNote');
    var noteTitle =  noteTitleBox.value;

    //Create the item from the notes
    var notePanel = document.createElement('li');

    //Create the title of the note 
    var titleArea = document.createElement('span');
    var noteTitleNode = document.createTextNode(noteTitle);
    titleArea.appendChild(noteTitleNode);
    titleArea.classList.add('noteAddedTitle');
    notePanel.appendChild(titleArea);
  

    //Create the buttons for the note control
    var imageViewButton = document.createElement("button");
    var imageLocation = '../images/view-button.svg';
    imageViewButton = appendImage(imageViewButton, imageLocation); 
    imageViewButton.classList.add('buttons');
    imageViewButton.classList.add('infoPanelButtons');
    imageViewButton.setAttribute('id', 'viewNote');
    imageViewButton.setAttribute('onclick', 'showNote(this)' );
    notePanel.appendChild(imageViewButton);

    imageViewButton =  document.createElement("button");
    imageLocation = '../images/edit-button.svg';
    imageViewButton = appendImage(imageViewButton, imageLocation); 
    imageViewButton.classList.add('buttons');
    imageViewButton.classList.add('infoPanelButtons');
    imageViewButton.setAttribute('id', 'editNote');
    imageViewButton.setAttribute('onclick', 'editNote(this)');
    notePanel.appendChild(imageViewButton);


    //Create the content of the note
    var textArea = document.createElement('p');
    textArea.classList.add('hideComponent');
    var noteContentNode = document.createTextNode(noteText);
    textArea.appendChild(noteContentNode);
    notePanel.appendChild(textArea);

    //Add style to the added note
    notePanel.classList.add('notesBackground');
 
    //Append the new note to the panel information   
    panelInformation.appendChild(notePanel);

    //Title area and text area from the note edition is cleaned
    noteTitleBox.value = "";
    noteTextBox.value = "";
};

function appendImage(component, imageLocation)
{
    var viewImage = document.createElement("img");
    viewImage.alt = "View Note";
    viewImage.setAttribute('src', imageLocation);
    viewImage.classList.add('navBar__images');

    component.appendChild(viewImage);

    return component;
    
};

function showNote(component){
    console.log('El componente es: !!!!' + component);
    var noteInformation = component.parentNode;
    var noteContent = noteInformation.childNodes[3]; //Se obtiene el contenido de la nota
    noteContent.classList.remove('hideComponent');
    //noteContent.classList.add('transitionShowNoteContent');
    noteContent.classList.add('showComponent');
 
    
    console.log('Mostrar nota!!!!' + noteContent);

    /*  var noteTextBox = document.getElementById('noteContent');
      var noteText = noteTextBox.value;

      document.querySelector('.panel-body').innerHTML = noteText;
      noteTextBox.value = '';

      var panelTitle = document.getElementById('panel1Title');
      var title = document.getElementById('titleNote');

      panelTitle.innerHTML = title.value;
      title.value = ""; */
} 


