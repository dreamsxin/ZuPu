var zupu = {
	search: function(){
		navigator.notification.prompt('请输入關鍵字', function(results){
			alert(results.input1);
		},
		'搜索族譜',
		['确定'],
		'朱氏'
		);
	}
};

document.addEventListener('DOMContentLoaded', function () {
});