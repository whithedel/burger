$(function(){

$(`.postForm`).on(`submit`, function(event){
    event.preventDefault();

    var addedBurger = {
        burger_name : $(`#burgerWanted`).val().trim()
    };

    $.ajax(`/burgers`,{
        type: `POST`,
        data: addedBurger
    }).then(function(){
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
})

})