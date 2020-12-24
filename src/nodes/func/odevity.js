// 奇偶
export default function(theV,odd){

  let that = new V.fn.v(null,theV)

    for(let i = 0; i < theV.length; i++){

      if( i % 2 === odd ? 0 : 1 ){

        that[that.length] = theV[i]

        that.length++

      }

    }

    return that

}