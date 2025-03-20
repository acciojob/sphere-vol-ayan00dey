function volume_sphere() {
    // Get the radius value from the input field
    let radius = parseFloat(document.getElementById('radius').value);
    let volumeField = document.getElementById('volume');
    
    // Validate: check if radius is a non-negative number
    if (isNaN(radius) || radius < 0) {
        volumeField.value = 'NaN';
    } else {
        // Calculate the volume of the sphere
        let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        
        // Display the result rounded to 4 decimal places
        volumeField.value = volume.toFixed(4);
    }

    // Prevent form submission
    return false;
}

// Attach the function to the form's submit event
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
