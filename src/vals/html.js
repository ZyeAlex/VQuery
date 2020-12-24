export default function(that,val){
  if(val!==undefined){
    that.innerHTML=val
  }else{
    return that.innerHTML
  }
}