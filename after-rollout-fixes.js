$(document).ready(function () {
        var a = window.location.pathname; //  /medical-coding-education/conferences/regional/anaheim-2018/
        //alert(a);
    if (a == "/medical-coding-education/conferences/regional/anaheim-2018/registration.aspx") {
       
        $("#disneyland").parent().next(".well").children("p").append('- <strong class="red-txt">Sold Out</strong>');
        $("#disneyland").closest(".col-md-8").next(".col-md-4").find(".disnyland-hotel-img").children("p").append('- <strong class="red-txt">Sold Out</strong>');
        $("#disneyland").remove();
        
}


});