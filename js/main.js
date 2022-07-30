let son1 = +prompt('1 son kiriting')
let son2 = +prompt('2 son kiriting')
let son3 = +prompt('3 son kiriting')
if (son1 > son2 && son1 < son3 || son1 > son3 && son1 < son2 ) {
alert(son1)
} else if (son2 > son1 && son2 < son3 || son2 > son3 && son2 < son1) {
alert(son2)
} else{
alert(son3)
}