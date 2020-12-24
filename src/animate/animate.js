

export default function(that,obj,t=2000,e='ease',f=()=>{}){

  that.style.transition = `${t/1000}s ${e}`

  for( let prop in obj ){
    that.style[prop] = obj[prop]
  }
  
}