(()=>{var l=(t,n)=>()=>(n||t((n={exports:{}}).exports,n),n.exports);var a=l((r,i)=>{function s(t){let n=0,e;t=t||{};let d=t.data?t.data:function(){},f=t.mounted?t.mounted:function(){},o=t.unmounted?t.unmounted:function(){};return d.css||(d.css=""),t.data=function(){let u=this;return d.bind(u)()},t.mounted=function(){let u=this;f.bind(u)(),n++,e||(e=document.createElement("style"),document.body.appendChild(e),e.innerHTML=u.css)},t.unmounted=function(){let u=this;o.bind(u)(),n--,n<1&&(document.body.removeChild(e),e=null)},t}typeof i<"u"&&(i.exports=s);typeof window<"u"&&(window.createVueComponentWithCSS=s)});a();})();
