function volume_sphere() {
    //Write your code here
	const radiusInput = document.getElementById("radius").value;
    const radius = parseFloat(radiusInput);
	const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // 4. Round to 4 decimal places
    const roundedVolume = volume.toFixed(4);

    // 5. Display result in the output field/span
    document.getElementById("volume").value = roundedVolume;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
