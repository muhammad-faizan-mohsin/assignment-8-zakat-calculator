function zakat(){
    var gold = +document.getElementById("gld").value
    var silver = +document.getElementById("slvr").value
    var rupees = +document.getElementById("rps").value
    var result= document.getElementById("result")
     var gldmultiple =  gold*200000

     var slivermultiple = silver*2250

    var calcutate = gldmultiple + slivermultiple + rupees
 
    var zakatformula = Math.round(calcutate/40)

  result.innerHTML = zakatformula
  
}