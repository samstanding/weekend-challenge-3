$(document).ready(onReady);

function onReady () {
    getItems();
    $('#addTaskBtn').on('click', function (event) {
        event.preventDefault();
        postTdItem ();
    });
    $('#outputItems').on('click', '#deleteBtn', deleteItem );
    $('#outputItems').on('click', '#completeBtn', markComplete );
    $('#outputItems').on('click', '#undoCompleteBtn', markIncomplete );


    }//end onReady


function postTdItem () {
    let item = {
        task: $('#taskIn').val(),
        duedate: $('#dueDateIn').val(),
        complete: 'no'
    };
   console.log(item);
    $.ajax({
        type:'POST',
        url:'/todo/add',
        data: item
    }).done(function (response) {
        console.log('send item');
        getItems();
        clearInputs();
    }).fail(function (error){
        console.log(error);        
    })
}

function displayItems(obj) {
    let output = $('#outputItems');
    output.empty();
    for (item of obj) {
        output.append(`<tr><td>${item.task}</td>
        <td>${item.duedate.substring(5,10)}</td>
        <td>${item.complete}</td><td>${changeCompleteBtn (item.complete, item.id)}</td>
        <td><button id="deleteBtn" data-id="${item.id}">Delete</button></td></tr>`);
    }
}

function getItems () {
    $.ajax({
        type:'GET',
        url:'/todo/getitems'
    }).done(function (response) {
        displayItems(response);
        console.log('you got to do items');
    }).fail(function (response){
        console.log('you did not get items');    
    })
}
function clearInputs () {
    $('#taskIn').val('');
    $('#dueDateIn').val('');
    $('#notesIn').val('');
}

function deleteItem () {
    let id = $(this).data('id');
    $.ajax({
        type:'DELETE',
        url: '/todo/delete',
        data: {itemId: id}
    }).done(function (response) {
        console.log('item deleted');
        getItems ();
    }).fail(function (response) {
        console.log(response);
    })
}

function markComplete () {
    let id = $(this).data('id');
    $.ajax({
        type:'put',
        url: '/todo/complete',
        data: {itemId: id}
    }).done(function (response) {
        console.log('item completed');
        getItems ();
    }).fail(function (response) {
        console.log(response);
    })
}

function changeCompleteBtn (input, id) { 
    if (input == 'no') {
        return `<button id="completeBtn" data-id="${id}">
        Mark Completed</button>`;
    } else if (input == 'yes') {
        return `<button id="undoCompleteBtn" data-id="${id}">
        Mark Not Complete</button>`
    };

}

function markIncomplete () {
    let id = $(this).data('id');
    console.log(id);
    
    $.ajax({
        type:'put',
        url: '/todo/incomplete',
        data: {itemId: id}
    }).done(function (response) {
        console.log('item no longer completed');
        getItems ();
    }).fail(function (response) {
        console.log(response);
    })
}