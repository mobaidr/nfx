function hello() {
  alert("Hello");
}

function render(root, ctx){
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_1 = document.createElement('div');
ljs_1.addEventListener('click', function() { console.log('kaka') }, false);
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_2 = document.createElement('div');
var ljs_3 = "title";
ljs_2.setAttribute('class', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_3, ctx) : WAVE.strEscapeHTML(ljs_3));
var ljs_4 = "alert('just data')";
ljs_2.setAttribute('data-alert', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_4, ctx) : WAVE.strEscapeHTML(ljs_4));
var ljs_5 = "<script>alert(\"script\")</script>";
ljs_2.setAttribute('data-alert-script', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_5, ctx) : WAVE.strEscapeHTML(ljs_5));
ljs_1.appendChild(ljs_2);
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_6 = document.createElement('div');
var ljs_7 = "rate";
ljs_6.setAttribute('id', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_7, ctx) : WAVE.strEscapeHTML(ljs_7));
ljs_1.appendChild(ljs_6);
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_8 = document.createElement('div');
var ljs_9 = "@color@";
ljs_8.setAttribute('class', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_9, ctx) : WAVE.strEscapeHTML(ljs_9));
ljs_1.appendChild(ljs_8);
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_10 = document.createElement('div');
var ljs_11 = "stub @color@";
ljs_10.setAttribute('class', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_11, ctx) : WAVE.strEscapeHTML(ljs_11));
ljs_1.appendChild(ljs_10);
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_12 = document.createElement('div');
var ljs_13 = "<script>alert(\"'<script>alert();</script>'text\")</script>";
ljs_12.innerText = ljs_useCtx ? WAVE.strHTMLTemplate(ljs_13, ctx) : WAVE.strEscapeHTML(ljs_13);
ljs_1.appendChild(ljs_12);
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_14 = document.createElement('div');
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_15 = document.createElement('div');
var ljs_16 = "@color@";
ljs_15.setAttribute('class', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_16, ctx) : WAVE.strEscapeHTML(ljs_16));
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_17 = document.createElement('div');
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_18 = document.createElement('div');
var ljs_19 = "@color@";
ljs_18.setAttribute('class', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_19, ctx) : WAVE.strEscapeHTML(ljs_19));
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_20 = document.createElement('div');
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_21 = document.createElement('div');
var ljs_22 = "@color@";
ljs_21.setAttribute('class', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_22, ctx) : WAVE.strEscapeHTML(ljs_22));
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_23 = document.createElement('div');
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_24 = document.createElement('div');
var ljs_25 = "@color@";
ljs_24.setAttribute('class', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_25, ctx) : WAVE.strEscapeHTML(ljs_25));
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_26 = document.createElement('div');
ljs_24.appendChild(ljs_26);
ljs_23.appendChild(ljs_24);
ljs_21.appendChild(ljs_23);
ljs_20.appendChild(ljs_21);
ljs_18.appendChild(ljs_20);
ljs_17.appendChild(ljs_18);
ljs_15.appendChild(ljs_17);
ljs_14.appendChild(ljs_15);
ljs_1.appendChild(ljs_14);
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_27 = document.createElement('div');
var ljs_28 = "@height@";
ljs_27.setAttribute('data-height', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_28, ctx) : WAVE.strEscapeHTML(ljs_28));
var ljs_29 = "@color@";
ljs_27.setAttribute('class', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_29, ctx) : WAVE.strEscapeHTML(ljs_29));
ljs_1.appendChild(ljs_27);
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_30 = document.createElement('div');
var ljs_31 = "controls";
ljs_30.setAttribute('id', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_31, ctx) : WAVE.strEscapeHTML(ljs_31));
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_32 = document.createElement('input');
var ljs_33 = "2013-06-06";
ljs_32.setAttribute('value', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_33, ctx) : WAVE.strEscapeHTML(ljs_33));
var ljs_34 = "date";
ljs_32.setAttribute('type', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_34, ctx) : WAVE.strEscapeHTML(ljs_34));
ljs_30.appendChild(ljs_32);
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_35 = document.createElement('input');
var ljs_36 = "234.11";
ljs_35.setAttribute('value', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_36, ctx) : WAVE.strEscapeHTML(ljs_36));
var ljs_37 = "text";
ljs_35.setAttribute('type', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_37, ctx) : WAVE.strEscapeHTML(ljs_37));
ljs_30.appendChild(ljs_35);
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_38 = document.createElement('input');
var ljs_39 = "234.11";
ljs_38.setAttribute('value', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_39, ctx) : WAVE.strEscapeHTML(ljs_39));
var ljs_40 = "number";
ljs_38.setAttribute('type', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_40, ctx) : WAVE.strEscapeHTML(ljs_40));
ljs_30.appendChild(ljs_38);
ljs_1.appendChild(ljs_30);
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_41 = document.createElement('div');
var ljs_42 = "container";
ljs_41.setAttribute('id', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_42, ctx) : WAVE.strEscapeHTML(ljs_42));
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_43 = document.createElement('h1');
var ljs_44 = "Animation Test";
ljs_43.innerText = ljs_useCtx ? WAVE.strHTMLTemplate(ljs_44, ctx) : WAVE.strEscapeHTML(ljs_44);
ljs_41.appendChild(ljs_43);
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_45 = document.createElement('button');
var ljs_46 = "highlight";
ljs_45.setAttribute('class', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_46, ctx) : WAVE.strEscapeHTML(ljs_46));
var ljs_47 = "Highlight";
ljs_45.innerText = ljs_useCtx ? WAVE.strHTMLTemplate(ljs_47, ctx) : WAVE.strEscapeHTML(ljs_47);
ljs_45.addEventListener('click', hello, false);
ljs_41.appendChild(ljs_45);
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_48 = document.createElement('button');
var ljs_49 = "fade";
ljs_48.setAttribute('class', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_49, ctx) : WAVE.strEscapeHTML(ljs_49));
var ljs_50 = "Fade";
ljs_48.innerText = ljs_useCtx ? WAVE.strHTMLTemplate(ljs_50, ctx) : WAVE.strEscapeHTML(ljs_50);
ljs_48.addEventListener('click', hello, false);
ljs_41.appendChild(ljs_48);
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_51 = document.createElement('button');
var ljs_52 = "rizzle";
ljs_51.setAttribute('class', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_52, ctx) : WAVE.strEscapeHTML(ljs_52));
var ljs_53 = "Rizzle";
ljs_51.innerText = ljs_useCtx ? WAVE.strHTMLTemplate(ljs_53, ctx) : WAVE.strEscapeHTML(ljs_53);
ljs_51.addEventListener('click', hello, false);
ljs_41.appendChild(ljs_51);
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_54 = document.createElement('button');
var ljs_55 = "knit";
ljs_54.setAttribute('class', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_55, ctx) : WAVE.strEscapeHTML(ljs_55));
var ljs_56 = "Knit";
ljs_54.innerText = ljs_useCtx ? WAVE.strHTMLTemplate(ljs_56, ctx) : WAVE.strEscapeHTML(ljs_56);
ljs_54.addEventListener('click', hello, false);
ljs_41.appendChild(ljs_54);
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_57 = document.createElement('button');
var ljs_58 = "shrink";
ljs_57.setAttribute('class', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_58, ctx) : WAVE.strEscapeHTML(ljs_58));
var ljs_59 = "Shrink";
ljs_57.innerText = ljs_useCtx ? WAVE.strHTMLTemplate(ljs_59, ctx) : WAVE.strEscapeHTML(ljs_59);
ljs_57.addEventListener('click', hello, false);
ljs_41.appendChild(ljs_57);
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_60 = document.createElement('button');
var ljs_61 = "rotate";
ljs_60.setAttribute('class', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_61, ctx) : WAVE.strEscapeHTML(ljs_61));
var ljs_62 = "Rotate";
ljs_60.innerText = ljs_useCtx ? WAVE.strHTMLTemplate(ljs_62, ctx) : WAVE.strEscapeHTML(ljs_62);
ljs_60.addEventListener('click', hello, false);
ljs_41.appendChild(ljs_60);
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_63 = document.createElement('button');
var ljs_64 = "boom";
ljs_63.setAttribute('class', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_64, ctx) : WAVE.strEscapeHTML(ljs_64));
var ljs_65 = "Boom";
ljs_63.innerText = ljs_useCtx ? WAVE.strHTMLTemplate(ljs_65, ctx) : WAVE.strEscapeHTML(ljs_65);
ljs_63.addEventListener('click', hello, false);
ljs_41.appendChild(ljs_63);
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_66 = document.createElement('button');
var ljs_67 = "squeeze";
ljs_66.setAttribute('class', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_67, ctx) : WAVE.strEscapeHTML(ljs_67));
var ljs_68 = "Squeeze";
ljs_66.innerText = ljs_useCtx ? WAVE.strHTMLTemplate(ljs_68, ctx) : WAVE.strEscapeHTML(ljs_68);
ljs_66.addEventListener('click', hello, false);
ljs_41.appendChild(ljs_66);
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_69 = document.createElement('button');
var ljs_70 = "deform";
ljs_69.setAttribute('class', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_70, ctx) : WAVE.strEscapeHTML(ljs_70));
var ljs_71 = "Deform";
ljs_69.innerText = ljs_useCtx ? WAVE.strHTMLTemplate(ljs_71, ctx) : WAVE.strEscapeHTML(ljs_71);
ljs_69.addEventListener('click', hello, false);
ljs_41.appendChild(ljs_69);
ljs_1.appendChild(ljs_41);
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_72 = document.createElement('h1');
var ljs_73 = "Compiler output example";
ljs_72.innerText = ljs_useCtx ? WAVE.strHTMLTemplate(ljs_73, ctx) : WAVE.strEscapeHTML(ljs_73);
ljs_1.appendChild(ljs_72);
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_74 = document.createElement('code');
var ljs_75 = "      function noRoot() {        var ljs_useCtx = WAVE.isObject(ctx);        var ljs_1 = document.createElement('section');        var ljs_2 = 'sect';        ljs_1.setAttribute('id', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_2, ctx) : WAVE.strEscapeHTML(ljs_2));        var ljs_3 = 'sect';        ljs_1.setAttribute('class', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_3, ctx) : WAVE.strEscapeHTML(ljs_3));        var ljs_4 = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sollicitudin interdum,      sollicitudin condimentum montes nulla bibendum aliquam velit? Fermentum mattis aenean nec...      Orci proin litora nec ullamcorper?    ';        ljs_1.innerText = ljs_useCtx ? WAVE.strHTMLTemplate(ljs_4, ctx) : WAVE.strEscapeHTML(ljs_4);        if (typeof(root) !== 'undefined' && root !== null) {        if (WAVE.isString(root))        root = WAVE.id(root);        if (WAVE.isObject(root))        root.appendChild(ljs_1);      }    ";
ljs_74.innerText = ljs_useCtx ? WAVE.strHTMLTemplate(ljs_75, ctx) : WAVE.strEscapeHTML(ljs_75);
ljs_1.appendChild(ljs_74);
if (typeof(root) !== 'undefined' && root !== null) {
if (WAVE.isString(root))
root = WAVE.id(root);
if (WAVE.isObject(root))
root.appendChild(ljs_1);
}

}


function noRoot() {
var ljs_useCtx = WAVE.isObject(ctx);
var ljs_1 = document.createElement('section');
var ljs_2 = "sect";
ljs_1.setAttribute('id', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_2, ctx) : WAVE.strEscapeHTML(ljs_2));
var ljs_3 = "sect";
ljs_1.setAttribute('class', ljs_useCtx ? WAVE.strHTMLTemplate(ljs_3, ctx) : WAVE.strEscapeHTML(ljs_3));
var ljs_4 = "      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sollicitudin interdum,      sollicitudin condimentum montes nulla bibendum aliquam velit? Fermentum mattis aenean nec...      Orci proin litora nec ullamcorper?    ";
ljs_1.innerText = ljs_useCtx ? WAVE.strHTMLTemplate(ljs_4, ctx) : WAVE.strEscapeHTML(ljs_4);
if (typeof(root) !== 'undefined' && root !== null) {
if (WAVE.isString(root))
root = WAVE.id(root);
if (WAVE.isObject(root))
root.appendChild(ljs_1);
}

}