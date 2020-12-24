
import show from './show'
import hide from './hide'

export default function(that,...operate){
  if( that.style.height ){
    if( that.style.height == '0px' || that.style.display == 'none' ){
      show(that,...operate)
    }else{
      hide(that,...operate)
    }
  }else{
    if( that.style.display == 'none' ){
      show(that,...operate)
    }else{
      hide(that,...operate)
    }
  }
}