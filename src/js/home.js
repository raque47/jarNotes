var notesButton = document.getElementById('notesControl');
var hiddenNotesButton = document.getElementById('hiddenControlNotesButtons');                               
notesButton.addEventListener('click', function () {toggleControls(hiddenNotesButton); changeColorMenuButtons(notesButton); setEventsHiddenButtons(hiddenNotesButton)  });

notesButton.addEventListener('mouseover', function () {toggleControls(hiddenNotesButton); });



var tagButton = document.getElementById('tagsControl');
var hiddenTagsButton = document.getElementById('hiddenControlTagsButtons');       
tagButton.addEventListener('click', function () { toggleControls(hiddenTagsButton); changeColorMenuButtons(tagButton); setEventsHiddenButtons(hiddenTagsButton) });
tagButton.addEventListener('mouseover', function () { toggleControls(hiddenTagsButton);  });




var folderButton = document.getElementById('foldersControl');
var hiddenFoldersButton = document.getElementById('hiddenControlFoldersButtons');       

folderButton.addEventListener('click', function () { toggleControls(hiddenFoldersButton); changeColorMenuButtons(folderButton); setEventsHiddenButtons(hiddenFoldersButton) });
folderButton.addEventListener('mouseover', function () { toggleControls(hiddenFoldersButton); });




function setEventsHiddenButtons(controlComponent)
{
    for(var i=0; i<controlComponent.childNodes.length; ++i )
    {
        console.log('el hijo es: ' + controlComponent.childNodes[i]);
        controlComponent.childNodes[i].addEventListener('click', function(){changeColorHiddenButtons(controlComponent)});
    }
}


function changeColorHiddenButtons(controlComponent) {
    var hiddenButtons = controlComponent.childNodes;
    console.log('hijo escondido' + hiddenButtons[counter]);

    var counter = 1;
    var inactive = true;
    while( inactive ){
        
        if(hiddenButtons[counter]. ==true)
            {
                inactive = false;
            }
        counter = counter + 2;
    }
    hiddenButtons[counter].style.backgroundColor ='#FF0000';
      console.log('ENTREEEEE');

    
 
   
}

function changeColorMenuButtons(controlComponent) {
    resetColorMenuButtons();
    if(controlComponent.style.backgroundColor == '#FF0000'){
         controlComponent.style.backgroundColor = '#F8F8F8';
    }
    else{
         controlComponent.style.backgroundColor = '#FF0000';
    }
    console.log(controlComponent); 
  
   
}

function resetColorMenuButtons(){
    notesButton.style.backgroundColor = '#F8F8F8';    
    tagButton.style.backgroundColor = '#F8F8F8';
    folderButton.style.backgroundColor = '#F8F8F8';
}

function resetColorHiddenButtons(){
    var hiddenButtons = document.getElementsByClassName('hiddenButtons__button');
    for(var i=0; i<hiddenButtons.length; ++i ){
        hiddenButtons[i].style.backgroundColor ='#F8F8F8';
    }
}

function toggleControls(controlComponent) {
    resetControls();
   // console.log(controlComponent);
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

function resetControls(){
    hiddenNotesButton.style.visibility = 'hidden';
    hiddenNotesButton.style.opacity = 0.2;
    
    hiddenTagsButton.style.visibility = 'hidden';
    hiddenTagsButton.style.opacity = 0.2;
    
    hiddenFoldersButton.style.visibility = 'hidden';
    hiddenFoldersButton.style.opacity = 0.2; 
}


/*Button's information about the notes, tags and folders*/
function resetControls()
{
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
        }
        else
        {
            editionBarTexts[i].style.visibility = "visible";
            editionBarTexts[i].style.opacity = 1;
            editionBarTexts[i].classList.remove('hiddenControl');
            editionBarTexts[i].classList.add('activeControl');
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


