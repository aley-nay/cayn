    let items = document.getElementsByClassName("product-item");
    let info = document.getElementsByClassName("product-info");
    
    for (let i = 0; i < items.length; i++) {
        let ilk = info[i].innerHTML;
    
        items[i].onmouseover = function() {
            info[i].innerHTML = "Sepete Ekle";
        };
    
        items[i].onmouseout = function() {
            info[i].innerHTML = ilk;
        };
    }
    
    