//resize
$(window).resize(function () {
  var prodwidth = ((window.innerWidth * 0.84).toFixed(0) - $(".product__item__picture").width() - $(".product__item__buysection").width() - 100);
    if (window.innerWidth > 1000) {
    $(".product__item__prodinfo").css("width", prodwidth + "px");
    $(".prodinfo_code").css("width", prodwidth + "px");
    $(".prodinfo_title").css("width", prodwidth + 140 + "px")
    $(".prodinfo_assocproducts").css("width", prodwidth + "px");
    $(".prodinfo_decription").css("width", prodwidth + "px");
    }
});

