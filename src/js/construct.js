$(function () {

  $.getJSON('products.json', function (data) {
    $.each(data.items, function (i, f) {
      var tblRow = "<tr>" + "<td>" + f.productId + "</td>" + "<td>" + f.code + "</td>" + "<td>" + f.title + "</td>" + "<td>" + f.description +
        "</td>" + "<td>" + "<img src=" + "'" + f.primaryImageUrl + "'" + " alt='" + f.title + "'" + ">" + "</td>" + "<td>" + f.assocProducts + "</td>" + "<td>" + f.weight + "</td>" + "<td>" + f.unit +
        "</td>" + "<td>" + f.unitFull + "</td>" + "<td>" + f.unitRatio + "</td>" + "<td>" + f.unitAlt + "</td>" + "<td>" + f.unitRatioAlt +
        "</td>" + "<td>" + f.unitFullAlt + "</td>" + "<td>" + f.priceRetail + "</td>" + "<td>" + f.priceRetailAlt + "</td>" + "<td>" + f.priceGold +
        "</td>" + "<td>" + f.priceGoldAlt + "</td>" + "<td>" + f.bonusAmount + "</td>" + "<td>" + f.hasAlternateUnit + "</td>" + "<td>" + f.isActive +
        "</td>" + "<td>" + f.modified + "</td>" + "</tr>"
      $(tblRow).appendTo("#userdata tbody");
    });

  });

});