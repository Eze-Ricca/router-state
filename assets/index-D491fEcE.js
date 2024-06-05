(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();class p extends HTMLElement{static get style(){return`
    div{
        width: 1440px;
        height: 60px;
        background-color: #FF8282;   
        display: flex;
        justify-content: center;
        align-items: center;     
    }
    h3 {
        margin: 0px;
        font-size: 22px;
        font-weight: 500;     
        }
    `}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
    <style>${p.style}</style>
    <div><h3>Header</h3></div>
    `}}customElements.define("header-el",p);class m extends HTMLElement{static get style(){return`
    div{
        background-color: #FFA0EA;
        width: 1440px;
        height: 233px;
        display: flex;
        justify-content: center;
        align-items: center
    }
    h3 {
        margin: 0;
        font-size: 22px;
        font-weight: 500;
    }
    `}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
    <style>${m.style}</style>
    <div><h3>footer</h3></div>
    `}}customElements.define("footer-el",m);class c extends HTMLElement{static get styleBase(){return`
    button{
        min-width:352px;
        background-color: "transparent";
        border: solid 2px black;
        border-radius: 4px;
        width: 100%;
        height: 55px;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 22px;
        cursor: pointer;       
    }
    `}static get styleConColor(){return`
    button{
        background-color: #9CBBE9;
        border: solid 2px transparent;        
    }   
    `}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
    <style>${c.styleBase}</style>    
    `,this.shadowRoot.innerHTML+=`
    <button>
       ${this.hasAttribute("contenido")?this.getAttribute("contenido"):""}
    </button>  
    `,this.hasAttribute("conColor")&&(this.shadowRoot.innerHTML+=`
          <style>${c.styleConColor}</style>
          `)}}customElements.define("button-el",c);class h extends HTMLElement{static get style(){return`
      h1{
          font-family: "Poppins", sans-serif;
          font-weight: 700;
          font-style: normal;
          font-size: 52px;   
       }
      `}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
      <style>${h.style}</style>
      <h1><slot></slot></h1>
      `}}customElements.define("title-el",h);const d={data:{},listener:[],getState(){return this.data},setState(o){this.data=o,this.listener.forEach(t=>t())},suscribe(o){this.listener.push(o)}};class f extends HTMLElement{static get style(){return`
      fieldset{
          
          min-width: 352px;
          height: 69px;               
          box-sizing: border-box;
          margin: 0px;
          padding: 0px;
          display: flex;
          flex-direction: column;
          border: none;
          outline: none;
      }
      label{
          font-family: "Roboto";
          font-size: 18px;
          font-weight: 400;
          line-height: 21.09px; 
      }
      input{
          width: 99%;
          height: 45px;
          padding: 0px;
          margin: 0px;
          border: solid 2px black;
          border-radius: 4px;
          font-family: "Roboto";
          font-size: 18px;
          font-weight: 400;
          line-height: 21.09px; 
          
        }
      `}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
      <style>${f.style}</style>
      <fieldset>
      <label for="">${this.getAttribute("labelEl")}</label>
      <input type="text" id="input"/>
      </fieldset>
      `;const t=this.shadowRoot.getElementById("input");let n=d.getState();t.addEventListener("change",s=>{n.input=s.target.value,d.setState(n)})}}customElements.define("input-el",f);class b extends HTMLElement{static get style(){return`
        fieldset{
            min-width: 352px;
            height: 69px;               
            box-sizing: border-box;
            margin: 0px;
            padding: 0px;
            display: flex;
            flex-direction: column;
            border: none;
            outline: none;
        }
        label{
            font-family: "Roboto";
            font-size: 18px;
            font-weight: 400;
            line-height: 21.09px; 
        }
        select{
            width: 99%;
            height: 55px;
            padding: 0px;
            margin: 0px;
            border: solid 2px black;
            border-radius: 4px;
            font-family: "Roboto";
            font-size: 18px;
            font-weight: 400;
            line-height: 21.09px; 
            
          }
        `}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
        <style>${b.style}</style>
        <fieldset>
           <label for="">${this.getAttribute("labelEl")}</label>
          <select>
              <option value="">Milanga</option>
              <option value="">Spagueti</option>
              <option value="">Asado</option>
           </select>
       </fieldset>
        `}}customElements.define("select-el",b);const r={data:{},listener:[],getState(){return this.data},setState(o){this.data=o,this.listener.forEach(t=>t())},suscribe(o){this.listener.push(o)}};function w(o){const t=document.createElement("div");t.classList.add("container"),t.innerHTML=`
      <style>
        .container {
          display:flex;
          gap: 30px;
          margin-bottom: 50px
        }
        form {
        max-width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;
      }
      .form-div {
        width: 100%;
      }
      input,
      label,
      button,
      select {
        width: 100%;
        height: 45px;
        border-radius: 3px;
        font-size: 16px;
      }
      button{
        min-width:352px;
        background-color: #9CBBE9;
        border: solid 2px black;
        border-radius: 4px;
        border: none;
        width: 100%;
        height: 55px;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 22px;
        cursor: pointer;
      }
      select {
        margin-bottom: 25px;
      }
      </style>
           <title-el>Necesitamos algunos datos más</title-el>         
          <form action="">
          <div class="form-div">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required/>
          </div>
          <div class="form-div">
            <label for="bebida">Bebida</label>
            <input type="text" id="bebida" name="bebida" required/>
          </div>
          <div class="form-div">
            <label for="comida">Comida favorita</label>
           <select id="comida" name="comida" required>
              <option name="comida">Fideos con salsa</option>
              <option name="comida">Milanesa con pure</option>
              <option name="comida">Asado</option>
          </select>
          <button id="continuar-button">Continuar!</button>
          </div>
          </form>
          
          <button-el contenido="Volver" id="step-2" ></button-el>
        `;const n=r.getState();return console.log(n),t.querySelector("form").addEventListener("submit",a=>{a.preventDefault();const l=a.target,u=new FormData(l),g=u.get("email")||"",x=u.get("bebida")||"",y=u.get("comida")||"";r.setState({email:g,bebida:x,comida:y,...n}),console.log(r.data)}),t.querySelector("#continuar-button").addEventListener("click",()=>{console.log("Estado antes de navegar:",r.getState()),setTimeout(()=>{o.goTo("/thankyou")},100)}),t.querySelector("#step-2").addEventListener("click",()=>{o.goTo("/welcome")}),t}function v(o){const t=document.createElement("div");t.innerHTML=`
     <title-el>Te damos la bienvenida a esta página</title-el>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur
      iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae 
      quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?</p>
    <input-el labelEl="Nombre" ></input-el>
    <p id="error" style="background-color:green;color:#c4c4c4;padding-left:10px;font-weight:800"></p>
    <br>
    <button-el  contenido="Comenzar" ConColor id="welcome"></button-el>
    `;const n=r.getState(),s=t.querySelector("#welcome"),e=t.querySelector("#error");return s.addEventListener("click",()=>{const a=d.getState().input;if(a){e.style.display="none";const l=n;l.nombre=a,r.setState(l),d.setState({input:""}),console.log(r.getState()),o.goTo("/step1")}else{e.textContent="El nombre no puede estar vacío!";return}}),t}function S(o){const t=document.createElement("div"),n=r.getState();return t.innerHTML=`
    <title-el style="text-align:center">Gracias ${n.nombre}</title-el>
    <subtitle-el>Toda la informacion que nos brindaste es muy importante</subtitle-el>
    <br>
    <br>
    <p>Email: <strong>${n.email}</strong></p>
    <p>Bebida: <strong>${n.bebida}</strong></p>
    <p>Comida:<strong>${n.comida}</strong></p>
    
    <button-el id="thankyou" contenido="De nada" ConColor><button-el>
    `,t.querySelector("#thankyou").addEventListener("click",()=>{o.goTo("/welcome")}),t}const E=[{path:/\/welcome/,component:v},{path:/\/step1/,component:w},{path:/\/thankyou/,component:S}];function L(o){function t(s){s==="/"&&n("/welcome"),E.forEach(e=>{if(e.path.test(s)){const i=e.component({goTo:n});o.innerHTML="",o.appendChild(i)}})}function n(s){history.pushState({},"",s),t(s)}t(location.pathname),window.addEventListener("popstate",()=>{t(location.pathname)})}const T=document.querySelector("#app");L(T);
