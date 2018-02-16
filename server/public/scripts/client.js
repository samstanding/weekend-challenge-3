$(document).ready(onReady);

function onReady () {
    console.log('whatup');
}

//create an event listener so that an input goes into the database

function intakeTdItem () {
    let item = {
        task: $('#taskIn').val();
        duedate: $('#dueDateIn').val();
        notes: $('#notesIn').val();    
        complete: 'n'
    };
}

function postTdItem () {
   let item = intakeTdItem ();
    $.ajax({
        type:'POST',
        url:'/todos/add',
        data: item
    }).done(function (response) {
        console.log('send item');
        getItems();
        displayItems(response);
        clearInputs();
    }).fail(function (error){
        console.log(error);        
    })
}

