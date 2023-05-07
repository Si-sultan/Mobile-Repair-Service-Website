var addItemId = 0;
function addToCart(item){
    addItemId += 1;
    var selecteditem = document.createElement('div');
    selecteditem.style.display = 'flex';
    selecteditem.style.paddingRight = '50px';
    selecteditem.style.alignSelf='center';
    selecteditem.style.marginBottom='10px';
    selecteditem.style.marginTop='10px';
    selecteditem.style.borderBottom='2px solid #7f5eff';





    selecteditem.classList.add('cartImg');
    selecteditem.setAttribute('id', addItemId);
    // selecteditem.className('class',cartjust);
    var img = document.createElement('img');
    img.style.width = '50px';
    img.style.height = '50px';
    // img.style.paddingRight = '50px';



    img.setAttribute('src',item.children[0].currentSrc);
    var title = document.createElement('div');
    title.innerText = item.children[1].innerText;
    var label = document.createElement('div');
    label.innerText = item.children[2].children[0].innerText;
    var removeItem = document.createElement('button');
    removeItem.style.backgroundColor = '#7f5eff';
    removeItem.style.color = 'white';
    removeItem.style.padding = '8px';
    removeItem.style.borderRadius='5px';
    removeItem.style.height='30px';
    removeItem.style.alignSelf='center';
    removeItem.style.marginLeft='10rem';

    



    
    removeItem.innerText = "Remove";
    removeItem.setAttribute('onclick','del('+addItemId+')');

    
    // label.append(select);

    var cartItems = document.getElementById('title');
    selecteditem.append(img);
    selecteditem.append(title);
    selecteditem.append(removeItem);

    cartItems.append(selecteditem);
}

function del(item){
    document.getElementById(item).remove();
}