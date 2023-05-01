const keyboard = [ 96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,"Backspace","Tab",113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92,"Del","CapsLock", 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13,"ArrowUp","Shift", 122, 120, 99, 118, 98, 110, 109, 44, 46, 47,"Shift","Ctrl","Win","Alt","Space","Alt","ArrowLeft","ArrowDown","ArrowRight","Ctrl"];
//document.onkeypress = function (event) {
   // console.log(event);
  // keyboard.push(event.charCode);
  // console.log(keyboard);
//}
function init(){
    let exit = '';
    for (let i = 0; i< keyboard.length; i++) {
        if (i==14 || i==29 || i== 43 || i==56){
            exit +='<div class="transfer"></div>';
        }
        exit += '<div class="key-board" num-key="' + keyboard[i] +'" >' + String.fromCharCode(keyboard[i]) + '</div>';
    }
    document.body.innerHTML = exit;
}
    init();

    document.onkeypress = function (event) {
        console.log(event.code);
        console.log(event.keyCode);
        document.querySelectorAll('body .key-board').forEach(function(element){
           element.classList.remove('key-push');
        });
        document.querySelector('body .key-board[num-key="' + event.keyCode + '"]').classList.add('key-push');
    }

    document.querySelectorAll('body .key-board').forEach(function(element){
    element.onclick = function (event) {
        document.querySelectorAll('body .key-board').forEach(function(element) {
            element.classList.remove('key-push');
    });
    const code = this.getAttribute('num-key');
    this.classList.add('key-push');
    console.log(code);
}
    });
    
