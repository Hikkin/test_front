$(function () {

  $.getJSON('products.json', function (data) {
    var points;
    var lastFour;
    var ratioAlt;
    $.each(data.items, function (i, f) {
      f.primaryImageUrlcut = f.primaryImageUrl.substring(0,f.primaryImageUrl.length - 4);
      f.lastFour = f.primaryImageUrl.substr(f.primaryImageUrl.length - 4);
      if (f.unitFull == "упаковка") {
        f.infoUnitFull = "упаковками";
      } else if (f.unitFull == "штука"){
        f.infoUnitFull = "штучно";
      } else {
        f.infoUnitFull = "метрами погонными";
      };
      f.points = f.priceGoldAlt * f.unitRatioAlt;
      f.ratioAlt = f.unitRatio / f.unitRatioAlt;
      var tblRow = "<div class="+"'product__item'"+">"+
      "<div class="+"'product__item__picture'"+"><img src="+f.primaryImageUrlcut+"_220x220_1"+f.lastFour+" alt="+f.title+"/></div>"+
      "<div class="+"'product__item__prodinfo'>"+"<div class="+"'prodinfo_code'>"+"<p>Код:"+f.code+"</p></div><div class="+"'prodinfo_title'>"+
      "<p>"+f.title+"</p></div><div class="+"'prodinfo_assocproducts'><p>Могут понадобиться: "+f.assocProducts+"</p></div><div class="+
      "'prodinfo_decription'><p>"+f.description+"</p></div></div><div class="+"'product__item__buysection'><div class="+
      "'buysection_isActive'><a>Наличие</a></div><div class="+"'buysection_prices'><p class="+"'club_price'>По карте клуба</p><span class="+
      "'buysection_numbers'><p class="+"'club_price'>"+f.priceGoldAlt.toFixed(2)+" &#8381;</p><p class="+"'basic_price'>"+f.priceRetailAlt.toFixed(2)+
      " &#8381;</p></span><p class="+"'point_price'>Можно купить за "+f.points.toFixed(2)+" балла</p></div><div class="+"'buysection_switcher'><span class="+
      "'switch_item active' id="+"'prod_switch_mkv'><a>За м.кв</a></span><span class="+"'switch_item' id="+
      "'prod_switch_pack'><a>За упаковку</a></span></div><div class="+"'buysection_info'><i class="+"'fas fa-info-circle'></i><p>Продается "+
      f.infoUnitFull+":<br> 1 "+f.unitFull+" = "+f.ratioAlt.toFixed(2)+" "+f.unitAlt+"</div><div class="+"'buysection_countselect'><input class="+
      "'buysection_countselect_input' type='text' maxlength='3' min='1' value='1'/><div class="+"'buysection_countselect_arrows'><button class="+
      "'countselect_arrow_btn' id='arrow_btn_up'><i class="+"'fas fa-caret-up'></i></button><button class="+"'countselect_arrow_btn' id="+
      "'arrow_btn_down'><i class='fas fa-caret-down'></i></button></div></div><div class='buysection_btn'><button class='product_buy_btn'><i class="+
      "'fas fa-shopping-cart'></i><p>В корзину</p></button></div></div></div>"
      $(tblRow).appendTo("#products");
    });

  });

});