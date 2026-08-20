(()=>{
  const d=document;
  const $=(s,r=d)=>r.querySelector(s);
  const $$=(s,r=d)=>[...r.querySelectorAll(s)];

  const vp=$('meta[name="viewport"]');
  if(vp) vp.content='width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover';

  $('.nav-scroll')?.remove();
  $('footer')?.remove();

  const brand=$('.brand span:last-child');
  if(brand) brand.textContent='Estudio personal · Familia';

  const hero=$('.hero');
  if(hero){
    hero.innerHTML='<div class="hero-card"><span class="hero-kicker">Estudio personal</span><h1 id="hero-title">Programa especial sobre la familia</h1></div>';
  }

  $$('.note').forEach(n=>{
    const t=n.textContent.toLowerCase();
    if(t.includes('textos mostrados literalmente')||t.includes('material suministrado')) n.remove();
  });

  const summaries={
    1:'La familia forma parte del propósito de Jehová. Él creó una familia celestial, preparó la Tierra para la familia humana y nos enseña cómo protegerla.',
    2:'Rut y Noemí muestran que una familia real no depende de su tamaño ni solamente de los lazos de sangre. La congregación también puede ser una verdadera familia.',
    3:'La adoración en familia puede ser divertida e instructiva. El programa destaca la importancia de pensar en las necesidades, la edad y los gustos de cada miembro de la familia.',
    4:'Sarah, Abenezer y Sophie pasaron por problemas distintos. Los tres meditaron en la Biblia, conocieron mejor a Jehová y llegaron a verlo como un Padre cercano.',
    5:'Gary Breaux explica qué se puede hacer cuando parece imposible que haya paz en la familia. El relato de Jacob y Esaú deja seis lecciones prácticas.',
    6:'Sofonías muestra que Jehová quiere que estemos cerca de él y que valora nuestros esfuerzos. El programa también presenta experiencias de jóvenes que recibieron consuelo después de perder a seres queridos.',
    7:'La videopostal presenta Chipre, la llegada de las buenas noticias a la isla y el crecimiento de la predicación desde 1924 hasta la actualidad.'
  };

  const s1=$('#seccion-1');
  if(s1){
    const mm=$('.mindmap',s1);
    if(mm){
      const card=mm.closest('.interactive-card');
      const heading=$('h3',card);
      const lead=$(':scope > p',card);
      if(heading) heading.textContent='Resumen';
      if(lead) lead.textContent='Este mapa resume el hilo que sigue el programa.';
      const map=d.createElement('div');
      map.className='topic-map';
      map.innerHTML=`
        <div class="map-step blue"><strong>La familia celestial</strong><p>Jehová creó a Jesús y, por medio de él, a los ángeles que forman su familia celestial.</p></div>
        <span class="map-arrow" aria-hidden="true">→</span>
        <div class="map-step mint"><strong>La Tierra</strong><p>Durante los días creativos, Jehová preparó un hogar para la familia humana.</p></div>
        <span class="map-arrow" aria-hidden="true">→</span>
        <div class="map-step lavender"><strong>La primera pareja</strong><p>Al final del sexto día creativo creó al hombre y a la mujer.</p></div>
        <span class="map-arrow" aria-hidden="true">→</span>
        <div class="map-step rose"><strong>Ataques a la familia</strong><p>Satanás intenta debilitarla con ataques directos y también aprovechándose de las imperfecciones y las emociones.</p></div>
        <span class="map-arrow" aria-hidden="true">→</span>
        <div class="map-step amber"><strong>Cómo protegerla</strong><p>Confiar en Jehová y poner en práctica lo que enseña la Biblia.</p></div>`;
      mm.replaceWith(map);
      $('.mind-detail',s1)?.remove();
    }
  }

  const s2=$('#seccion-2');
  if(s2){
    const loyalty=$('.loyalty-card',s2);
    if(loyalty){
      loyalty.innerHTML=`
        <h3>Resumen</h3>
        <p>Rut podía volver con sus familiares en Moab, pero decidió quedarse con Noemí. El relato muestra que una familia real no depende solamente del parentesco ni de cuántas personas la formen.</p>
        <div class="plain-steps">
          <div class="plain-step"><strong>Una familia puede ser pequeña</strong><span>Rut y Noemí seguían siendo una familia real.</span></div>
          <div class="plain-step"><strong>Nos cuidamos unos a otros</strong><span>Los siervos de Jehová pueden dar cariño, amor y cuidado a quienes lo necesitan.</span></div>
          <div class="plain-step"><strong>La congregación también es familia</strong><span>Jesús explicó que sus seguidores recibirían hermanos, hermanas y madres dentro de la familia espiritual.</span></div>
          <div class="plain-step"><strong>No hagamos grupos cerrados</strong><span>El programa anima a tratar a la congregación como familia y a no dejar a otros fuera.</span></div>
        </div>`;
    }
    const cards=$$('.grid-2 > .interactive-card',s2);
    if(cards[1]){
      const h=$('h3',cards[1]);
      const p=$(':scope > p',cards[1]);
      if(h) h.textContent='Preguntas para pensar';
      if(p) p.remove();
      const faces=$$('.flash-face',cards[1]);
      faces.forEach((face,i)=>{
        const small=$('small',face);
        const hint=$('span',face);
        if(small) small.textContent=i%2===0?'Pregunta':'Otra pregunta';
        if(hint) hint.remove();
        if(face.classList.contains('flash-back')) face.classList.add('question-back');
      });
    }
  }

  const s3=$('#seccion-3');
  if(s3){
    const cards=$$('.grid-2 > .interactive-card',s3);
    if(cards[0]){
      const h=$('h3',cards[0]);
      const p=$(':scope > p',cards[0]);
      if(h) h.textContent='Plan de adoración en familia';
      if(p) p.remove();

      const need=$('#need',cards[0]);
      const needField=need?.closest('.field');
      if(needField && !$('.example-set',needField)){
        const examples=d.createElement('div');
        examples.className='example-set';
        examples.innerHTML=`
          <span class="example-label">Ejemplos</span>
          <div class="example-chips">
            <button type="button" class="example-chip">Resistir la presión de grupo</button>
            <button type="button" class="example-chip">Aprender a concentrarse mejor</button>
            <button type="button" class="example-chip">Mejorar en la predicación</button>
            <button type="button" class="example-chip">Hablar de temas que les cuesta expresar</button>
            <button type="button" class="example-chip">Conocer mejor a Jehová y a Jesús</button>
          </div>`;
        needField.append(examples);
        $$('.example-chip',examples).forEach(btn=>btn.addEventListener('click',()=>{
          if(need) need.value=btn.textContent;
        }));
      }

      const video=$('#video',cards[0]);
      if(video){
        video.placeholder='Ej.: Las buenas noticias según Jesús';
        const field=video.closest('.field');
        if(field && !$('.field-note',field)){
          const note=d.createElement('small');
          note.className='field-note';
          note.textContent='Título de un video relacionado con el tema de la adoración en familia.';
          field.append(note);
        }
      }
    }

    if(cards[1]){
      const h=$('h3',cards[1]);
      const p=$(':scope > p',cards[1]);
      if(h) h.textContent='Experiencias';
      if(p) p.remove();
      cards[1].classList.add('media-card');

      const data=[
        ['Deborah','Contemplar las estrellas','Su papá los llevaba a ver las estrellas y hablaban de las constelaciones que veía Job. Eso la ayudó a conocer mejor a Jehová.'],
        ['Sandra','La oración','Lo aprendido sobre el universo hizo que la oración se sintiera mucho más real para ella. También recuerda cuánto se reían juntos.'],
        ['Cyrus','Conversar y practicar','Sus padres apartaban tiempo para conversar y hacían juegos para practicar situaciones difíciles. Él también proponía temas.'],
        ['Jackie','Pensar en cada hijo','Busca temas que interesen a sus hijos porque tienen distintas edades y cada uno aprende de una manera diferente.'],
        ['Rubén','Aprovechar los videos','Explica que no se trata solo de ver un video, sino de pausarlo, conversar, aprender y buscar algo que puedan poner en práctica.']
      ];

      const carousel=$('.carousel',cards[1]);
      if(carousel){
        carousel.classList.add('media-carousel');
        if(!$('.media-status',cards[1])){
          const status=d.createElement('div');
          status.className='media-status';
          status.innerHTML='<span class="media-mark" aria-hidden="true">▶</span><strong>Experiencias</strong><span id="media-count">1 de 5</span>';
          carousel.before(status);
        }
      }

      $$('.testimonial-card',cards[1]).forEach((card,i)=>{
        const eyebrow=$('.eyebrow',card);
        const h3=$('h3',card);
        const p=$('p',card);
        if(data[i]){
          if(eyebrow) eyebrow.textContent=data[i][0];
          if(h3) h3.textContent=data[i][1];
          if(p) p.textContent=data[i][2];
        }
      });

      const updateMediaCount=()=>{
        const dots=$$('#carousel-dots .dot');
        let index=dots.findIndex(dot=>dot.classList.contains('active'));
        if(index<0) index=0;
        const counter=$('#media-count');
        if(counter) counter.textContent=`${index+1} de ${Math.max(1,dots.length)}`;
      };
      $('#prev-slide')?.addEventListener('click',()=>setTimeout(updateMediaCount,0));
      $('#next-slide')?.addEventListener('click',()=>setTimeout(updateMediaCount,0));
      setTimeout(updateMediaCount,0);
    }
  }

  const s4=$('#seccion-4');
  if(s4){
    const profiles=$$('.profile-card',s4);
    const flows=[
      [
        ['Lo que le pasaba','Siempre ha sido muy tímida, le cuesta hablar con la gente y a veces se sentía muy sola.'],
        ['Qué le ayudó','Isaías 48:17 la ayudó a ver a Jehová como el Padre que necesitaba. El video “Borra la tristeza” le hizo sentir que Jehová entendía lo que estaba pasando.'],
        ['Qué pasó después','Empezó a leer la Biblia más seguido, asistió con más regularidad a las reuniones, se bautizó y ahora siente que la congregación es su lugar.']
      ],
      [
        ['Lo que le pasaba','Se le presentó la oportunidad de estudiar en el extranjero y su familia lo animaba a irse. Eso lo confundió y frenó su progreso espiritual.'],
        ['Qué le ayudó','Génesis 39:2 le hizo pensar en José: le fue bien por mantenerse leal a Jehová, no por estudiar en una escuela prestigiosa.'],
        ['Qué pasó después','Decidió no irse al extranjero, aprendió el oficio de mecánico, se bautizó y seis meses después se hizo precursor regular.']
      ],
      [
        ['Lo que le pasaba','De joven se molestó mucho cuando no pudo hacerse publicadora y se alejó de Jehová durante casi 5 años.'],
        ['Qué le ayudó','Salmo 103:11 la ayudó a ver a Jehová como un Padre cariñoso y compasivo. También volvió a orarle y pidió ayuda para ver a los ancianos como Jehová los ve.'],
        ['Qué pasó después','Retomó su progreso, se hizo publicadora y se esfuerza por imitar la compasión de Jehová. Ahora siente el cariño de su congregación.']
      ]
    ];
    profiles.forEach((profile,i)=>{
      const flow=$('.profile-flow',profile);
      if(flow&&flows[i]){
        flow.innerHTML=flows[i].map(([a,b])=>`<div class="flow-item"><small>${a}</small>${b}</div>`).join('');
      }
    });
  }

  const s5=$('#seccion-5');
  if(s5){
    const card=$('.interactive-card',s5);
    const h=$('h3',card);
    if(h) h.textContent='6 lecciones para recuperar la paz en la familia';

    const filterBar=$('.filter-bar',s5);
    if(filterBar && !$('.filter-caption',s5)){
      const label=d.createElement('div');
      label.className='filter-caption';
      label.textContent='Categorías';
      filterBar.before(label);
    }
    const all=$('.filter-btn[data-filter="all"]',s5);
    if(all) all.classList.add('filter-all');
    $$('.filter-btn:not([data-filter="all"])',s5).forEach(b=>b.classList.add('filter-category'));

    const lessons=[
      ['Dar tiempo','Para que se calmen los ánimos, puede que tenga que pasar tiempo. No se puede obligar a nadie a hacer las paces.'],
      ['Centrarnos en hacer la voluntad de Jehová','Jacob aprovechó esos años para hacer la voluntad de Jehová. Nosotros podemos hacer lo mismo mientras esperamos.'],
      ['Buscar la guía de Jehová','Jacob oró, esperó el momento adecuado y tomó la iniciativa cuando llegó el momento de acercarse a Esaú.'],
      ['Mostrar respeto','Jacob no habló de Esaú como si fuera “el malo”. Lo trató con respeto y se fijó en lo positivo.'],
      ['Dejar atrás el pasado','Jacob fue humilde, dejó claro que venía en son de paz y no volvió a meter el dedo en la llaga.'],
      ['No esperar una disculpa','La Biblia no dice que Esaú pidiera perdón. El consejo es valorar que vuelva la comunicación y dejar siempre abierta la puerta a la reconciliación.']
    ];
    $$('.matrix-item',s5).forEach((item,i)=>{
      const st=$('strong',item),p=$('p',item);
      if(lessons[i]&&st&&p){st.textContent=lessons[i][0];p.textContent=lessons[i][1];}
    });
  }

  const s6=$('#seccion-6');
  if(s6){
    const grid=$('.grid-2',s6);
    if(grid){
      grid.innerHTML=`
        <article class="interactive-card source-card">
          <h3>Sofonías</h3>
          <div class="plain-steps">
            <div class="plain-step"><strong>Buscar a Jehová</strong><span>El programa explica que significa forjar y conservar una estrecha relación personal con él y conocer su modo de pensar y de sentir.</span></div>
            <div class="plain-step"><strong>Sofonías 3:17</strong><span>La nota que se consulta en el video dice “tranquilo, en paz, satisfecho”. La expresión muestra lo profundos que son los sentimientos de Jehová por quienes se acercan a él.</span></div>
            <div class="plain-step"><strong>Cuando alguien se siente invisible</strong><span>La dramatización recuerda que Jehová ve la fidelidad de sus siervos y valora sus esfuerzos.</span></div>
          </div>
        </article>
        <article class="interactive-card source-card">
          <h3>Cómo sobrellevar el dolor</h3>
          <div class="plain-steps">
            <div class="plain-step"><strong>Abrirse con otros</strong><span>Harman explica que la congregación se convirtió en su familia y que ayuda contar cómo uno se siente.</span></div>
            <div class="plain-step"><strong>Orar y desahogarse</strong><span>Jugraj llamó a la oración su “salvavidas”. Brianne contó a Jehová exactamente cómo se sentía.</span></div>
            <div class="plain-step"><strong>Meditar en la resurrección</strong><span>Jugraj pensaba en el día en que volvería a ver a su papá y en cómo sería ese encuentro.</span></div>
            <div class="plain-step"><strong>Mantener la rutina espiritual</strong><span>Las reuniones, la predicación y la adoración en familia ayudaron a Harman a manejar lo que sentía.</span></div>
          </div>
        </article>`;
    }

    const timelineCard=$('.timeline',s6)?.closest('.interactive-card');
    timelineCard?.remove();

    const verseUpdates={
      'Santiago 1:13':['En el programa se explica que el dolor, el sufrimiento y la muerte no vienen de Jehová.','El versículo se menciona y se explica, pero no se lee completo en la transcripción.'],
      'Juan 3:16':['Brianne explica que sintió este texto como algo personal: Jehová entregó a su Hijo unigénito por ella.','El versículo se comenta, pero no se lee completo en la transcripción.'],
      'Apocalipsis 21:4':['Brianne habla de la promesa de volver a ver a sus seres queridos cuando Jehová los traiga de vuelta.','El versículo se menciona, pero no se lee completo en la transcripción.'],
      'Salmo 34:18':['Brianne dice que este salmo muestra que Jehová está cerca de los que tienen el corazón destrozado.','El contenido se explica, pero el versículo no se lee completo en la transcripción.'],
      'Mateo 10:29-31':['Se venden dos gorriones por una moneda de poco valor, ¿no es cierto? Sin embargo, ni uno de ellos cae a tierra sin que su Padre lo sepa.','En la conclusión del programa se cita esta parte del pasaje.']
    };
    $$('.verse-chip',s6).forEach(b=>{
      const v=verseUpdates[b.dataset.title];
      if(v){b.dataset.text=v[0];b.dataset.note=v[1];}
    });
  }

  if(!$('#seccion-7')){
    const sec=d.createElement('section');
    sec.className='section';
    sec.id='seccion-7';
    sec.innerHTML=`
      <div class="section-card">
        <header class="section-header">
          <div><span class="eyebrow">Sección 7</span><h2>Chipre</h2><p class="summary"></p></div>
          <div class="section-number">7</div>
        </header>
        <article class="interactive-card cyprus-card">
          <h3>La predicación en Chipre</h3>
          <p>La videopostal repasa cómo empezó y cómo ha crecido la obra en la isla.</p>
          <div class="timeline cyprus-timeline">
            <div class="time-item"><span class="time-year">1924</span><p>Cyrus Charalambous volvió de Estados Unidos con publicaciones y empezó a enviarlas desde Nicosia.</p></div>
            <div class="time-item"><span class="time-year">Década de 1930</span><p>Se formó la primera congregación en Xylophagou.</p></div>
            <div class="time-item"><span class="time-year">1947–1948</span><p>Llegó Antonios Karandinos. Un año después había 59 publicadores y se abrió una sucursal.</p></div>
            <div class="time-item"><span class="time-year">1960–1974</span><p>Hubo encarcelamientos por neutralidad y, en 1974, unos 300 hermanos tuvieron que dejar sus hogares debido a la guerra.</p></div>
            <div class="time-item"><span class="time-year">Actualidad</span><p>Hay más de 3 200 publicadores en 39 congregaciones y 14 grupos, y se sirve en 14 idiomas.</p></div>
          </div>
          <div class="cyprus-today">
            <strong>Pafos</strong>
            <span>431 publicadores</span>
            <span>5 congregaciones</span>
            <span>3 grupos</span>
            <span>7 idiomas</span>
            <span>85 sirven a tiempo completo</span>
          </div>
        </article>
      </div>`;
    s6?.after(sec);
  }

  const titleOverrides={
    1:'El origen de la familia',
    2:'Ruth y Noemí',
    3:'La pizarra animada',
    4:'Sarah, Abenezer y Sophie',
    5:'Discurso',
    6:'Sofonías y cómo sobrellevar el dolor',
    7:'Chipre'
  };

  const items=$$('section.section');
  items.forEach((section,i)=>{
    const n=i+1;
    const card=$(':scope > .section-card',section);
    const header=card&&$(':scope > .section-header',card);
    if(!card||!header) return;

    const title=titleOverrides[n]||$('h2',header)?.textContent.trim()||`Sección ${n}`;
    const nodes=[...card.childNodes].filter(x=>x!==header);
    header.remove();
    card.textContent='';

    const toggle=d.createElement('button');
    toggle.className='section-toggle';
    toggle.type='button';
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-controls',`panel-${n}`);
    toggle.dataset.section=n;
    toggle.dataset.title=title;
    toggle.innerHTML=`<span class="accordion-number" aria-hidden="true">${n}</span><span class="accordion-copy"><span class="accordion-eyebrow">Sección ${n}</span><span class="accordion-title">${title}</span></span><span class="accordion-chevron" aria-hidden="true">⌄</span>`;

    const panel=d.createElement('div');
    panel.className='section-panel';
    panel.id=`panel-${n}`;

    const inner=d.createElement('div');
    inner.className='section-panel-inner';

    const intro=d.createElement('div');
    intro.className='section-intro';
    intro.textContent=summaries[n]||'';
    inner.append(intro);

    nodes.forEach(x=>inner.append(x));
    panel.append(inner);
    card.append(toggle,panel);
    section.classList.add('accordion-item');
  });

  const topbar=$('.topbar');
  const reading=d.createElement('div');
  reading.id='reading-indicator';
  reading.className='reading-indicator';
  reading.setAttribute('aria-live','polite');
  d.body.append(reading);

  const accordion=$$('.accordion-item');
  const closeAll=()=>accordion.forEach(o=>{
    $('.section-toggle',o)?.setAttribute('aria-expanded','false');
    $('.section-panel',o)?.classList.remove('open');
    o.classList.remove('is-active');
  });
  const scrollToSection=item=>{
    const h=(topbar?.offsetHeight||0)+10;
    const y=item.getBoundingClientRect().top+window.scrollY-h;
    window.scrollTo({top:Math.max(0,y),behavior:'smooth'});
  };
  accordion.forEach(item=>{
    const b=$('.section-toggle',item),p=$('.section-panel',item);
    b?.addEventListener('click',()=>{
      const shouldOpen=b.getAttribute('aria-expanded')!=='true';
      closeAll();
      reading.classList.remove('show');
      if(shouldOpen){
        b.setAttribute('aria-expanded','true');
        p.classList.add('open');
        item.classList.add('is-active');
        reading.textContent=`${b.dataset.section} · ${b.dataset.title}`;
        reading.classList.add('show');
        setTimeout(()=>scrollToSection(item),420);
      }
    });
  });

  $('#modal-backdrop')?.remove();
  let z=300;
  let cardCount=0;

  function keepInViewport(card,x,y){
    const r=card.getBoundingClientRect();
    const pad=8;
    const maxX=Math.max(pad,window.innerWidth-r.width-pad);
    const maxY=Math.max(pad,window.innerHeight-r.height-pad);
    return [Math.min(Math.max(pad,x),maxX),Math.min(Math.max(pad,y),maxY)];
  }

  function makeDraggable(card){
    let dragging=false,dx=0,dy=0;
    card.addEventListener('pointerdown',e=>{
      if(e.target.closest('.floating-close')) return;
      dragging=true;
      card.classList.add('dragging');
      card.style.zIndex=++z;
      const r=card.getBoundingClientRect();
      dx=e.clientX-r.left;
      dy=e.clientY-r.top;
      card.setPointerCapture?.(e.pointerId);
      e.preventDefault();
    });
    card.addEventListener('pointermove',e=>{
      if(!dragging) return;
      const [x,y]=keepInViewport(card,e.clientX-dx,e.clientY-dy);
      card.style.left=`${x}px`;
      card.style.top=`${y}px`;
      card.style.right='auto';
      card.style.bottom='auto';
      e.preventDefault();
    });
    const end=e=>{
      if(!dragging) return;
      dragging=false;
      card.classList.remove('dragging');
      try{card.releasePointerCapture?.(e.pointerId)}catch(_){}
    };
    card.addEventListener('pointerup',end);
    card.addEventListener('pointercancel',end);
  }

  function openVerse(button){
    const card=d.createElement('article');
    card.className='floating-verse-card';
    card.style.zIndex=++z;
    const title=button.dataset.title||'Texto bíblico';
    const body=button.dataset.text||'';
    const note=button.dataset.note||'';
    card.innerHTML=`
      <div class="floating-handle" aria-hidden="true"></div>
      <div class="floating-head">
        <div><span class="floating-label">Texto bíblico</span><h3>${title}</h3></div>
        <button class="floating-close" type="button" aria-label="Cerrar">×</button>
      </div>
      <div class="floating-text"></div>
      ${note?'<div class="floating-note"></div>':''}`;
    $('.floating-text',card).textContent=body;
    const noteEl=$('.floating-note',card);
    if(noteEl) noteEl.textContent=note;
    $('.floating-close',card).addEventListener('click',()=>card.remove());
    card.addEventListener('pointerdown',()=>card.style.zIndex=++z,{capture:true});
    d.body.append(card);
    makeDraggable(card);

    requestAnimationFrame(()=>{
      const r=card.getBoundingClientRect();
      const step=cardCount++%5;
      let x=window.innerWidth-r.width-12-(step*10);
      let y=window.innerHeight-r.height-12-(step*12);
      [x,y]=keepInViewport(card,x,y);
      card.style.left=`${x}px`;
      card.style.top=`${y}px`;
    });
  }

  $$('.verse-chip').forEach(old=>{
    const b=old.cloneNode(true);
    old.replaceWith(b);
    b.addEventListener('click',()=>openVerse(b));
  });

  d.addEventListener('keydown',e=>{
    if(e.key==='Escape'){
      const cards=$$('.floating-verse-card');
      if(cards.length) cards.sort((a,b)=>(+a.style.zIndex||0)-(+b.style.zIndex||0)).at(-1)?.remove();
    }
  });

  window.addEventListener('resize',()=>{
    $$('.floating-verse-card').forEach(card=>{
      const r=card.getBoundingClientRect();
      const [x,y]=keepInViewport(card,r.left,r.top);
      card.style.left=`${x}px`;
      card.style.top=`${y}px`;
    });
  });

  ['gesturestart','gesturechange','gestureend'].forEach(ev=>d.addEventListener(ev,e=>e.preventDefault(),{passive:false}));
  d.addEventListener('wheel',e=>{if(e.ctrlKey)e.preventDefault()},{passive:false});
})();
