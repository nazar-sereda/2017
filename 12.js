/**
 * Created by Nazar on 09.04.2017.
 */
var x = prompt ("Enter number x", "x");
var n = prompt ("Enter number n", "n");

function pow (x, n) {

    var result = Math.pow(x,n);
    return result;


}
var resultPow = pow(x,n);
document.write(resultPow);