(function(){
  var LANGS = ['zh-CN','zh-TW','ja','en'];
  var LABELS = {'zh-CN':'简','zh-TW':'繁','ja':'日','en':'EN'};
  var saved = localStorage.getItem('blog_lang') || 'zh-CN';
  if(LANGS.indexOf(saved)===-1) saved='zh-CN';

  // 创建切换器
  var bar = document.createElement('div');
  bar.className = 'lang-switcher';
  LANGS.forEach(function(lang){
    var btn = document.createElement('button');
    btn.textContent = LABELS[lang];
    btn.setAttribute('data-lang', lang);
    if(lang === saved) btn.className = 'active';
    btn.addEventListener('click', function(){
      switchLang(lang);
    });
    bar.appendChild(btn);
  });
  document.body.appendChild(bar);

  function switchLang(lang){
    saved = lang;
    localStorage.setItem('blog_lang', lang);
    // 更新按钮
    var btns = bar.querySelectorAll('button');
    for(var i=0;i<btns.length;i++){
      btns[i].className = btns[i].getAttribute('data-lang')===lang ? 'active' : '';
    }
    // 切换内容块
    var blocks = document.querySelectorAll('.lang-block');
    for(var j=0;j<blocks.length;j++){
      blocks[j].className = blocks[j].getAttribute('data-lang')===lang ? 'lang-block active' : 'lang-block';
    }
  }

  // 初始化
  switchLang(saved);
})();
