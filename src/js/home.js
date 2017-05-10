var notesButton = document.getElementById('notesControl');
var hiddenNotesButton = document.getElementById('hiddenControlNotesButtons');                               
var eventNotesButton = notesButton.addEventListener('click', function () {toggleControls(hiddenNotesButton) });
notesButton.addEventListener('mouseover', function () {toggleControls(hiddenNotesButton) });


var tagButton = document.getElementById('tagsControl');
var hiddenTagsButton = document.getElementById('hiddenControlTagsButtons');       
var eventTagsButton = tagButton.addEventListener('click', function () { toggleControls(hiddenTagsButton) });
tagButton.addEventListener('mouseover', function () { toggleControls(hiddenTagsButton) });


var folderButton = document.getElementById('foldersControl');
var hiddenFoldersButton = document.getElementById('hiddenControlFoldersButtons');       
var eventFoldersButton = folderButton.addEventListener('click', function () { toggleControls(hiddenFoldersButton)});
folderButton.addEventListener('mouseover', function () { toggleControls(hiddenFoldersButton)});



function toggleControls(controlComponent) {
    resetControls();
    console.log(controlComponent);
    if (controlComponent.style.visibility == 'hidden') {
        
        controlComponent.style.visibility = 'visible';
        controlComponent.style.opacity = 1;

    } else {
        controlComponent.style.visibility = 'hidden';
        controlComponent.style.opacity = 0.3;
    }

    
}

function resetControls(){
    hiddenNotesButton.style.visibility = 'hidden';
    hiddenNotesButton.style.opacity = 0.2;
    
    hiddenTagsButton.style.visibility = 'hidden';
    hiddenTagsButton.style.opacity = 0.2;
    
    hiddenFoldersButton.style.visibility = 'hidden';
    hiddenFoldersButton.style.opacity = 0.2;
    
}
