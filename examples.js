
$(document).ready(function() {

    $.ajax('data.json', {
        success: function(response){
            console.log(response);
        },
        error: function(request, errorType, errorMessage){
            alert(errorType + " " + errorMessage);
        }
    });

})