function valuexy(e) {
    var a = document.getElementById('answer')
    a.value += e
}

function cal() {
    var a = document.getElementById('answer')
    a.value = eval(a.value)
}


function clearxy(){
    var a = document.getElementById('answer')
    a.value = ''
}