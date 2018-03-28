//var s = '07:05:45PM';
//var s = '9:05:45AM';
// pm = 12
var s = '12:00:00PM';

function myOutput() {
	var res = '';
	if(s.includes('PM')) {
		if(s == '12:00:00PM') {
			return '12:00:00';
		} else {
			var arr = s.split(':');
			var hour = parseInt(arr[0]);
			hour = hour + 12;
			return res = hour + ':' + arr[1] + ':' + arr[2].substring(0, arr[2].length-2);
		}
	} else {
		if(s == '12:00:00AM') {
			return '00:00:00';
		} else {
			// AM
    	return res = s.substring(0, s.length-2);
		}
	}

}

var out = myOutput();
console.log(out);
