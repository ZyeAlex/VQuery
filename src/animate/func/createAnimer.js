
import animer from './animer'

export default function(that){
  if( !animer[that] ){
    animer[that] = {}
    Object.assign(animer[that],getComputedStyle(that))
  } 
}