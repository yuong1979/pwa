
    this.onmessage = function(e){

    // console.log(e)
    // console.log(e.data)
    // console.log(e.data.addThis)

      if(e.data.addThis !== undefined){
        this.postMessage({ result: e.data.addThis.num1 + e.data.addThis.num2 })
      }
    }