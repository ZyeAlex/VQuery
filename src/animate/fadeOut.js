
import ca from './func/createAnimer'
import animer from './func/animer'

export default function(that,t=2000,e='ease'){
  ca(that)
  that.style.transition = `${t/1000}s ${e}`
  that.style.opacity = 0
  setTimeout(()=>{
    if(getComputedStyle(that).opcity==='0'){
      that.style.display = 'none'
      that.style.opacity = animer[that].opacity
    }
  },t+10)
}