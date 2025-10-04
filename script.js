function volume_sphere(event) {
    event.preventDefault(); // prevent form submission

    // Get the input element and its value
    const radiusInput = document.getElementById("radius").value;

    // Convert to number
    const radius = parseFloat(radiusInput);

    // Calculate volume
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Handle invalid input: negative or non-numeric
    if (isNaN(volume) || radius < 0) {
        volume = NaN;
    } else {
        // Round to 4 decimal places
        volume = volume.toFixed(4);
    }

    // Display in the output field
    document.getElementById("volume").value = volume;
}

// Attach function to form submission
window.onload = function() {
    document.getElementById("MyForm").onsubmit = volume_sphere;
};