$(document).ready(function () {

    $("#grow").on("click", function (event) {
        event.preventDefault();
        $("h1").animate({ fontSize: "80px" }, "slow");
    });
    $("#shrink").on("click", function (event) {
        event.preventDefault();
        $("h1").animate({ fontSize: "30px" }, "slow");
    });

})