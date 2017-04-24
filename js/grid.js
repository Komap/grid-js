var html = '<table style="margin: 0 auto;"><tr>';
for (var i in columns){
		 html += '<td style="padding:10px 10px;">'+columns[i].key + ' ' +'</td>';
}
html += '</tr></table>';
document.getElementById('block').innerHTML = html;