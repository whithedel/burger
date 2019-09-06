$(function(){

$(`.postForm`).on(`submit`, function(event){
    event.preventDefault();

    var addedBurger = {
        burger_name : $(`#burgerWanted`).val().trim()
    };

    $.ajax(`/burgers`,{
        type: `POST`,
        data: addedBurger
    }).then(function(result){
        console.log(result);
    console.log("burger created.");
    location.reload();
})
});

$(`.devour`).on(`click`, function(event){
    var id = $(this).data(`id`);

    $.ajax(`/burgers/${id}`, {
        type : `PUT`
    }).then(function(){
        console.log(`it was delicious`);
        location.reload();

    })
});

$(`.devoured`).on(`click`, function(event) {
    var id = $(this).data(`id`);
    
    // Send the DELETE request.
    $.ajax(`/burgers/${id}`, {
        type: `DELETE`
    }).then(
        function () {
            console.log("deleted burger", id);
            location.reload();
        }
    );
});

})