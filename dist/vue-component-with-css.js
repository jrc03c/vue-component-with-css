(()=>{var s=(t,n)=>()=>(n||t((n={exports:{}}).exports,n),n.exports);var l=s((y,u)=>{function o(t){let n=0,e;t=t||{};let d=t.data?t.data:function(){},f=t.mounted?t.mounted:function(){},r=t.unmounted?t.unmounted:function(){};return d.css||(d.css=""),t.data=function(){return d.bind(this)()},t.mounted=function(){f.bind(this)(),n++;let i=this.$root.$el.getRootNode();i===document&&(i=i.body),e||(e=document.createElement("style"),i.appendChild(e),e.innerHTML=this.css)},t.unmounted=function(){r.bind(this)(),n--;let i=this.$root.$el.getRootNode();if(i===document&&(i=i.body),n<1){if(e)try{i.removeChild(e)}catch{try{e.parentElement.removeChild(e)}catch{}}e=null}},t}typeof u<"u"&&(u.exports=o);typeof window<"u"&&(window.createVueComponentWithCSS=o)});l();})();
