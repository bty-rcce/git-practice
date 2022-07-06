function bmiCalculator (weight, height) {
    var bmi = Math.round(weight /  Math.pow(height,2));
    var message = "Your BMI is ";
    var bmiCategory;

    if (bmi < 18.5) {
        bmiCategory = "so you are underweight."
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = "so you have a normal weight."
    } else if (bmi > 25 && bmi < 29.9) {
        bmiCategory = "so you are overweight."
    } else if (bmi > 30 && bmi < 34.9) {
        bmiCategory = "so you are obese."
    } else {
        bmiCategory = "so you are extremely obese."
    }

    var interpretation = message + " " +bmi+ ", " + bmiCategory;

    return interpretation;
}

console.log(bmiCalculator(80,1.60));