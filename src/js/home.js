var notesButton = document.getElementById('notesControl');
var hiddenNotesButton = document.getElementById('hiddenControlNotesButtons');                               
var eventNotesButton = notesButton.addEventListener('click', function () {toggleControls(hiddenNotesButton) });
notesButton.addEventListener('mouseover', function () {toggleControls(hiddenNotesButton) });
notesButton.addEventListener("mouseout", resetControls);


var tagButton = document.getElementById('tagsControl');
var hiddenTagsButton = document.getElementById('hiddenControlTagsButtons');       
var eventTagsButton = tagButton.addEventListener('click', function () { toggleControls(hiddenTagsButton) });
tagButton.addEventListener('mouseover', function () { toggleControls(hiddenTagsButton) });
tagButton.addEventListener("mouseout", resetControls);


var folderButton = document.getElementById('foldersControl');
var hiddenFoldersButton = document.getElementById('hiddenControlFoldersButtons');       
var eventFoldersButton = folderButton.addEventListener('click', function () { toggleControls(hiddenFoldersButton)});
folderButton.addEventListener("mouseout", resetControls);



function toggleControls(controlComponent) {
    resetControls();
   // console.log(controlComponent);
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

toggleBarElement = document.getElementById('toggleBar');
toggleBarElement.addEventListener('click', toggleEditionBar);


function toggleEditionBar(){
    editionBarTexts = document.getElementsByClassName('editionBar__span');

    for(var i=0; i<editionBarTexts.length; ++i )
    {
        if(toggleBarElement.classList.contains('active'))
        {
            editionBarTexts[i].style.visibility = "hidden";
            editionBarTexts[i].style.opacity = 0;
            editionBarTexts[i].classList.remove('activeControl');
            editionBarTexts[i].classList.add('hiddenControl');

            //editionBarTexts[i].style.display = "none";
        }
        else
        {
            editionBarTexts[i].style.visibility = "visible";
            editionBarTexts[i].style.opacity = 1;
            editionBarTexts[i].classList.remove('hiddenControl');
            editionBarTexts[i].classList.add('activeControl');

            //editionBarTexts[i].style.display = "inline";
        }  
    }

    if(toggleBarElement.classList.contains('active'))
    {
        toggleBarElement.classList.remove('active');
    }
    else
    {
        toggleBarElement.classList.add('active');
    }
}

