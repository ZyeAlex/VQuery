

import slideDown from './slideDown'
import slideUp from './slideUp'

export default function(that,...operate){
  if( that.style.height ){
    if( that.style.height == '0px' || that.style.display == 'none' ){
      slideDown(that,...operate)
    }else{
      slideUp(that,...operate)
    }
  }else{
    if( that.style.display == 'none' ){
      slideDown(that,...operate)
    }else{
      slideUp(that,...operate)
    }
  }
}