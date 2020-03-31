var showSum = function(){
    var num1 = document.getElementsByTagName("input")[0].value; // height
    var num2 = document.getElementsByTagName("input")[1].value; // weight

    var result = parseInt(num2) / ((parseFloat(num1) * parseFloat(num1)) / 10000);

    document.getElementsByTagName("input")[2].value = result.toFixed(2);
}