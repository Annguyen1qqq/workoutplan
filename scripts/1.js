//Function trang chính (passwork)

var password = "an";

function passcheck() {
	if(document.getElementById('pass1').value == password) {
		aleart('Đúng Rồi vào đi!!');
	}
	if(document.getElementById('pass1').value != password) {
		alert('Đell đúng tí nào');
		return false;
	}
}
function updateTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();

    // Format the date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString('en-US', options);

    // Format the time
    const time = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    // Update the content
    timeElement.innerHTML = `${date} <br> ${time}`;
}

// Update time every second
setInterval(updateTime, 1000);

// Initialize
updateTime();
