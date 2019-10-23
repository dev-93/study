// 방법 1
function TextPrompter__showNextWord($el) {
    var text = $el.attr('data-text'); // 남은 문장을 가져온다.
    
    if ( text.length > 0) { // 남은 문장이 있다면
        var word = text.substr(0, 1); // 남은 문장의 첫 문자만 가져와서
        
        $el.append(word); // 뒤에 삽입한다.
        
        $el.attr('data-text', text.substr(1)); // 남은 문장을 고친다.
        
        setTimeout(function() {
            TextPrompter__showNextWord($el);
        }, 40);
    }
}

$('.text-prompter').each(function(index, node) {
    var $node = $(node);
    var $span = $node.find('>span:first-child');
    
    TextPrompter__showNextWord($span);
});


// 방법 2
var i = 0, txt;
text = "Welcome To Taenam World"

function typing() {
	if(i<text.length){
		document.getElementById("text").innerHTML += text.charAt(i);
		i++;
		setTimeout(typing,100);
	}
}
typing();