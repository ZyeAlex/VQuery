export default function(that,operate,html){
  if( html === undefined ){
    html = operate
    operate = `beforeend`
  }
  that.insertAdjacentHTML(operate,html)
}