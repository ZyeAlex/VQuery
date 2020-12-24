
import ca from './func/createAnimer'
import animer from './func/animer'

export default function(that,t=2000,e='ease',f=()=>{}){
  ca(that);
  if(getComputedStyle(that).display=='none'){
    that.style.display = animer[that].display || 'block'
    that.style.opacity = 0
  }
  setTimeout(()=>{
    that.style.transition = `${t/1000}s ${e}`
    that.style.opacity = animer[that].opacity
  })
}