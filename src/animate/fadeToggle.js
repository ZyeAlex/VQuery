
import fadeOut from './fadeOut'
import fadeIn from './fadeIn'

export default function(that,...operate){
  if( that.style.opacity ){
    if( that.style.opacity == '0' || that.style.display == 'none' ){
      fadeIn(that,...operate)
    }else{
      fadeOut(that,...operate)
    }
  }else{
    if( that.style.display == 'none' ){
      fadeIn(that,...operate)
    }else{
      fadeOut(that,...operate)
    }
  }
}