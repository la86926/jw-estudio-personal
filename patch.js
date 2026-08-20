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
    hero.innerHTML='<div class="hero-card"><span class="hero-kicker">Estudio personal</span><h1 id="hero-title">Programa especial sobre la familia</h1><p class="hero-guide">Selecciona una de las 6 secciones para comenzar.</p></div>';
  }

  $$('.note').forEach(n=>{
    const t=n.textContent.toLowerCase();
    if(t.includes('textos mostrados literalmente')||t.includes('material suministrado')) n.remove();
  });

  const summaries={
    1:'La familia forma parte del propósito de Jehová. Él creó una familia celestial, preparó la Tierra para la familia humana y nos enseña cómo protegerla de lo que puede debilitarla.',
    2:'Ruth y Noemí muestran que una familia real no depende de su tamaño ni solamente de los lazos de sangre. La congregación puede convertirse en una verdadera familia espiritual.',
    3:'La adoración en familia puede ser divertida e instructiva. La clave es pensar en lo que cada uno necesita, tener en cuenta su edad y sus gustos, y no complicarse demasiado.',
    4:'Sarah, Abenezer y Sophie pasaron por problemas distintos. Los tres meditaron en la Biblia, conocieron mejor a Jehová y llegaron a verlo como un Padre cercano.',
    5:'Gary Breaux explica qué podemos hacer cuando parece imposible recuperar la paz en la familia. Para ello repasa lo que hizo Jacob con Esaú y saca seis lecciones.',
    6:'Sofonías enseña que Jehová quiere que estemos cerca de él y que valora nuestros esfuerzos. El programa también muestra cómo puede ayudarnos cuando perdemos a alguien que queremos.'
  };

  // Contenido fiel al orden y al lenguaje de la transcripción.
  const s1=$('#seccion-1');
  if(s1){
    const mm=$('.mindmap',s1);
    if(mm){
      const card=mm.closest('.interactive-card');
      const heading=$('h3',card);
      const lead=$('p',card);
      if(heading) heading.textContent='Cómo encaja todo';
      if(lead) lead.textContent='Este mapa resume el hilo que sigue el programa. No tienes que tocar nada: léelo de izquierda a derecha.';
      const map=d.createElement('div');
      map.className='topic-map';
      map.innerHTML=`
        <div class="map-step blue"><strong>Jehová crea una familia celestial</strong><p>Jesús y los ángeles forman parte de la familia celestial de Jehová.</p></div>
        <span class="map-arrow" aria-hidden="true">→</span>
        <div class="map-step mint"><strong>Prepara la Tierra</strong><p>Durante los días creativos prepara un hogar para la familia humana.</p></div>
        <span class="map-arrow" aria-hidden="true">→</span>
        <div class="map-step lavender"><strong>Crea a la primera pareja</strong><p>Al final del sexto día creativo crea al hombre y a la mujer.</p></div>
        <span class="map-arrow" aria-hidden="true">→</span>
        <div class="map-step rose"><strong>Satanás intenta debilitar la familia</strong><p>El programa muestra ataques directos y otros más sutiles que pueden dividirla.</p></div>
        <span class="map-arrow" aria-hidden="true">→</span>
        <div class="map-step amber"><strong>La protegemos poniendo en práctica la Biblia</strong><p>No basta con saber el camino: hay que andar en él.</p></div>`;
      mm.replaceWith(map);
      $('.mind-detail',s1)?.remove();
    }
  }

  const s2=$('#seccion-2');
  if(s2){
    const loyalty=$('.loyalty-card',s2);
    if(loyalty){
      loyalty.innerHTML=`
        <h3>Ruth y Noemí: una familia de verdad</h3>
        <p>Rut podía volver con sus familiares en Moab, pero decidió quedarse con Noemí. El programa usa ese relato para explicar qué significa ser familia.</p>
        <div class="plain-steps">
          <div class="plain-step"><strong>Una familia puede ser pequeña</strong><span>Rut y Noemí seguían siendo una familia real aunque no tuvieran la estructura que muchos imaginan.</span></div>
          <div class="plain-step"><strong>Nos cuidamos unos a otros</strong><span>Los siervos de Jehová pueden dar cariño, amor y cuidado a quienes lo necesitan.</span></div>
          <div class="plain-step"><strong>La congregación también es familia</strong><span>Jesús explicó que sus seguidores recibirían hermanos, hermanas y madres dentro de la familia espiritual.</span></div>
          <div class="plain-step"><strong>No hagamos grupos cerrados</strong><span>El programa anima a tratar a la congregación como familia y a no dejar a otros fuera.</span></div>
        </div>`;
    }
    const cards=$$('.grid-2 > .interactive-card',s2);
    if(cards[1]){
      const h=$('h3',cards[1]),p=$(':scope > p',cards[1]);
      if(h) h.textContent='Preguntas para pensar';
      if(p) p.textContent='Toca una tarjeta y piensa cómo puedes cuidar mejor a tu familia espiritual.';
      $$('.flash-face small',cards[1]).forEach((x,i)=>x.textContent=i%2===0?'Para pensar':'Piensa en esto');
      $$('.flash-face span',cards[1]).forEach(x=>{
        x.textContent=x.closest('.flash-front')?'Toca para ver otra pregunta':'Toca para volver';
      });
    }
  }

  const s3=$('#seccion-3');
  if(s3){
    const cards=$$('.grid-2 > .interactive-card',s3);
    if(cards[0]){
      const h=$('h3',cards[0]),p=$(':scope > p',cards[0]);
      if(h) h.textContent='Prepara una adoración en familia sencilla';
      if(p) p.textContent='Piensa primero en qué necesita tu familia y en qué les gusta hacer. No hace falta preparar una superproducción.';
    }
    if(cards[1]){
      const h=$('h3',cards[1]),p=$(':scope > p',cards[1]);
      if(h) h.textContent='Ideas que dieron otras familias';
      if(p) p.textContent='Estas son algunas ideas que aparecen en el video.';
      const data=[
        ['Contemplar las estrellas','Su papá los llevaba a ver las estrellas y hablaban de las constelaciones que veía Job. Eso ayudó a Deborah a conocer mejor a Jehová.'],
        ['Hacer que la oración sea real','Sandra recuerda que lo aprendido sobre el universo hizo que la oración se sintiera mucho más real para ella. También recuerda cuánto se reían juntos.'],
        ['Practicar situaciones y proponer temas','Los padres de Cyrus hacían juegos para practicar situaciones difíciles. Él también sugería temas y sentía que aportaba su granito de arena.'],
        ['Pensar en cada hijo','Jackie tiene hijos de distintas edades y formas de aprender, así que busca temas que les interesen y que les ayuden a aprender mientras se divierten.'],
        ['No limitarse a ver videos','Rubén explica que no se trata solo de ver un video, sino de detenerse, conversar, aprender y buscar algo que puedan poner en práctica.']
      ];
      $$('.testimonial-card',cards[1]).forEach((card,i)=>{
        const h3=$('h3',card),p=$('p',card);
        if(data[i]&&h3&&p){h3.textContent=data[i][0];p.textContent=data[i][1];}
      });
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
          <h3>Sofonías: Jehová quiere que estemos cerca de él</h3>
          <div class="plain-steps">
            <div class="plain-step"><strong>Buscar a Jehová es ser su amigo</strong><span>El programa explica que no se trata solo de llenar la mente de datos, sino de conocer su modo de pensar y de sentir.</span></div>
            <div class="plain-step"><strong>Sofonías 3:17 muestra cuánto le importamos</strong><span>La nota que se consulta en el video dice: “tranquilo, en paz, satisfecho”.</span></div>
            <div class="plain-step"><strong>Si alguna vez te sientes invisible</strong><span>La conversación entre el padre y el hijo recuerda que Jehová se fija en quienes lo buscan y valora su fidelidad.</span></div>
          </div>
        </article>
        <article class="interactive-card source-card">
          <h3>¿Qué les ayudó cuando perdieron a un ser querido?</h3>
          <div class="plain-steps">
            <div class="plain-step"><strong>Abrirse con otros</strong><span>Harman explica que la congregación se convirtió en su familia y que ayuda contar cómo uno se siente.</span></div>
            <div class="plain-step"><strong>Orar y desahogarse</strong><span>Jugraj llamó a la oración su “salvavidas”. Brianne contó a Jehová exactamente cómo se sentía.</span></div>
            <div class="plain-step"><strong>Meditar e imaginar la resurrección</strong><span>Jugraj pensaba en el día en que volvería a ver a su papá y en cómo sería ese encuentro.</span></div>
            <div class="plain-step"><strong>Mantener la rutina espiritual</strong><span>Reuniones, predicación y adoración en familia ayudaron a Harman a manejar lo que sentía.</span></div>
          </div>
        </article>`;
    }
    const timelineCard=$('.timeline')?.closest('.interactive-card');
    if(timelineCard&&s6.contains(timelineCard)){
      timelineCard.innerHTML=`
        <h3>Videopostal: Chipre</h3>
        <p>La obra comenzó de forma humilde y siguió adelante a pesar de muchas dificultades.</p>
        <div class="timeline">
          <div class="time-item"><span class="time-year">1924</span><p>Cyrus Charalambous volvió de Estados Unidos con publicaciones y empezó a enviarlas desde Nicosia.</p></div>
          <div class="time-item"><span class="time-year">Década de 1930</span><p>Se formó la primera congregación en Xylophagou.</p></div>
          <div class="time-item"><span class="time-year">1947–1948</span><p>Llegó Antonios Karandinos. Un año después había 59 publicadores y se abrió una sucursal.</p></div>
          <div class="time-item"><span class="time-year">Hoy</span><p>Hay más de 3 200 publicadores en 39 congregaciones y 14 grupos, y se sirve en 14 idiomas.</p></div>
        </div>`;
    }

    const verseUpdates={
      'Santiago 1:13': ['En el programa se explica que el dolor, el sufrimiento y la muerte no vienen de Jehová.','El versículo se menciona y se explica, pero no se lee completo.'],
      'Juan 3:16': ['Brianne explica que este texto la ayudó a sentir que Jehová entregó a su Hijo también por ella.','El versículo se menciona y se explica, pero no se lee completo.'],
      'Apocalipsis 21:4': ['Brianne lo relaciona con la esperanza de volver a ver a sus seres queridos.','El versículo se menciona y se explica, pero no se lee completo.'],
      'Salmo 34:18': ['Jehová está cerca de los que tienen el corazón destrozado.','En el programa se cita esta idea del versículo.'],
      'Mateo 10:29-31': ['Se venden dos gorriones por una moneda de poco valor, ¿no es cierto? Sin embargo, ni uno de ellos cae a tierra sin que su Padre lo sepa.','En el cierre del programa se cita esta parte del pasaje.']
    };
    $$('.verse-chip',s6).forEach(b=>{
      const u=verseUpdates[b.dataset.title];
      if(u){b.dataset.text=u[0];b.dataset.note=u[1];}
    });
  }

  // Convierte las seis secciones en persianas. Todas empiezan cerradas.
  const titleOverrides={
    1:'Protejamos nuestra familia',
    2:'Ruth y Noemí',
    3:'La pizarra animada',
    4:'Sarah, Abenezer y Sophie',
    5:'Discurso',
    6:'Sofonías y cómo sobrellevar el dolor'
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

  // El viejo modal ya no se usa. Cada texto bíblico crea su propia tarjeta flotante.
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
      card.style.left=`${x}px`;card.style.top=`${y}px`;
    });
  });

  ['gesturestart','gesturechange','gestureend'].forEach(ev=>d.addEventListener(ev,e=>e.preventDefault(),{passive:false}));
  d.addEventListener('wheel',e=>{if(e.ctrlKey)e.preventDefault()},{passive:false});
})();