
console.log("onJSinit");


const products = [
    {
        title : "Каша гречневая в стаканчике с говядиной и овощами, 60г",
        image : "product01.jpg",
        descs : [ {k: "Кому", v: "детям, женщинам" }
        , { k: "Бренд", v: "Новоукраїнка" }
        , { k: "Тип", v: "хлопья" }
        , { k: "Вид крупы", v: "гречневая" }
        , { k: "Свойства", v: "без гмо" }
        ]
    }, {
        title : "Каша овсяная в стаканчике с клубликой и сливками, 60г",
        image : "product02.jpeg",
        descs : [ {k: "Кому", v: "спортсменам" }
        , { k: "Бренд", v: "Новоукраїнка" }
        , { k: "Тип", v: "хлопья" }
        , { k: "Вид крупы", v: "овсяная" }
        , { k: "Свойства", v: "с гмо" }
        ]
    }, {
        title : "Каша овсяная в стаканчике с апельсином, 50г",
        image : "product03.webp",
        descs : [ {k: "Кому", v: "спортсменам" }
        , { k: "Бренд", v: "STREET SOUP" }
        , { k: "Тип", v: "хлопья" }
        , { k: "Вид крупы", v: "овсяная" }
        , { k: "Свойства", v: "с гмо" }
        ]
    }, {
        title : "Крем-Суп STREET SOUP шпинатный 50г",
        image : "product04.webp",
        descs : [ {k: "Кому", v: "всем" }
        , { k: "Бренд", v: "STREET SOUP" }
        , { k: "Тип", v: "суп" }
        , { k: "Свойства", v: "21% protein" }
        ]
    }, {
        title : "Крем-Суп STREET SOUP томатный 50г",
        image : "product05.webp",
        descs : [ {k: "Кому", v: "всем" }
        , { k: "Бренд", v: "STREET SOUP" }
        , { k: "Тип", v: "суп" }
        , { k: "Свойства", v: "20% protein" }
        ]
    }, {
        title : "Овсяная протеиновая каша",
        image : "product06.jpeg",
        descs : [ {k: "Кому", v: "спортсменам" }
        , { k: "Бренд", v: "boombar.ru" }
        , { k: "Тип", v: "каша" }
        , { k: "Свойства", v: "20% protein" }
        ]
    }
];

const removeChilds = function (node) {
    var last;
    while (last = node.lastChild) node.removeChild(last);
};


var active = 0;

function load()
{
    console.log("onLoad");

    const main_menu = document.querySelector('ul.main_menu');
    const main_widget = document.querySelector('div.main_widget');

    window.addEventListener('keypress', function (k){
        const key = k.key;
        // console.log('keypress', key);

        switch(key) {
            case 'a':
            case 'A':
                if(active <= 0) {
                    active == 5;
                } else {
                    active -= 1;
                }
                break;
            case 'd':
            case 'D':
                if(active >= 5) {
                    active == 0;
                } else {
                    active += 1;
                }
                break;
        }

        const lis = main_menu.querySelectorAll('li');

        [].forEach.call(lis, function (li, i) {
            if(i == active) {
                li.className = "active";
            } else {
                li.className = "";
            }
            // console.log('li', li, i);
        });

        const product = products[active];

        removeChilds(main_widget);

        main_widget.innerHTML = `<div><img src="images/${product.image}"></div>
        <div>
           <h4>${product.title}</h4>
           <ul>
              <li><span>Пол</span><span> : </span><span>детям, женщинам</span></li>
              <li><span>Бренд</span><span> : </span><span>Новоукраїнка</span></li>
              <li><span>Тип</span><span> : </span><span>хлопья</span></li>
              <li><span>Вид крупы</span><span> : </span><span>гречневая</span></li>
              <li><span>Свойства</span><span> : </span><span>без гмо</span></li>
           </ul>
        </div>`;


    });
}

window.addEventListener('load', load);
