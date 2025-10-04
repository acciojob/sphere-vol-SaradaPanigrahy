function volume_sphere() {
    //Write your code here
	const radiusInput = document.getElementById("radius").value;
     if (isNaN(radius) || radius < 0) {
        alert("Please enter a valid non-negative number for radius.");
        return;
    }

    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById("volume").value = volume.toFixed(4);
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};