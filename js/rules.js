$("#Rules").click(function() {
    $(".rules-modal").css("display", "flex")
    $(".rules-modal").css("transition", "1s")
    $(".game").css("display", "none")
    $(".game2").css("display", "none")
})

$(".rules-close").click(function() {
    $(".rules-modal").css("display", "none")
    $(".rules-modal").css("transition", "1s")
    $(".game").css("display", "flex")
    $(".game2").css("display", "none")
})
