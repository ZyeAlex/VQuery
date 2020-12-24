
import ca from './func/createAnimer'
import animer from './func/animer'

export default function(that,t=2000,e='ease',f=()=>{}){
  ca(that)
  that.style.transition = `${t/1000}s ${e}`
  that.style.width = 0
  that.style.height = 0
  setTimeout(()=>{
    if(getComputedStyle(that).height==='0px'){
      that.style.display = 'none'
      that.style.height = animer[that].height
      that.style.width = animer[that].width
    }
  },t+10)
}