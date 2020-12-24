
export default function(that,val){
  if(val){
    that.value = val
  }else{
    return that.value
  }
}