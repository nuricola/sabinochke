const no_btn = document.getElementById('no');
var yes_btn = document.getElementById('yes');
var modal = document.getElementById('modal');


no_btn.addEventListener('click', function() {
    function moveButton() {
        var randomX = Math.floor(Math.random() * (window.innerWidth - no_btn.offsetWidth));
        var randomY = Math.floor(Math.random() * (window.innerHeight - no_btn.offsetHeight));

        no_btn.style.position = 'absolute';
        no_btn.style.left = randomX + 'px';
        no_btn.style.top = randomY + 'px';
    }
    moveButton();
});

var close_btn = document.getElementsByClassName('close')[0];

yes_btn.onclick = function(){
    modal.style.display = "block";
}

close_btn.onclick = function() {
    modal.style.display = "none";
}
