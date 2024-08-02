import React, { useState } from 'react';

const BmiCalculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState('');
    const [category, setCategory] = useState('');
    const [showResult, setShowResult] = useState(false);

    const calculateBmi = () => {
        const heightValue = parseFloat(height);
        const weightValue = parseFloat(weight);

        if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 0 || weightValue <= 0) {
            setBmi('');
            setCategory('Please enter valid height and weight.');
            setTimeout(() => {
                setShowResult(false);
            }, 1900);
            setShowResult(true);
            return;
        }

        const bmiValue = (weightValue / ((heightValue / 100) ** 2)).toFixed(2);
        setBmi(bmiValue);

        if (bmiValue < 18.5) setCategory('Underweight');
        else if (bmiValue >= 18.5 && bmiValue < 25) setCategory('Healthy Weight');
        else if (bmiValue >= 25 && bmiValue < 30) setCategory('Overweight');
        else setCategory('Obese');

        setShowResult(true);
    };

    return (
        <div className="container">
            <h1>BMI Calculator</h1>
            <div className="calculator">
                <div className="input-group">
                    <label htmlFor="height">Height (cm)</label>
                    <input
                        type="number"
                        id="height"
                        onChange={(e) => setHeight(e.target.value)}
                        value={height}
                        placeholder="Enter height in cm"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="weight">Weight (kg)</label>
                    <input
                        type="number"
                        id="weight"
                        onChange={(e) => setWeight(e.target.value)}
                        value={weight}
                        placeholder="Enter weight in kg"
                    />
                </div>
                <button id="calculate-btn" onClick={calculateBmi}>
                    Calculate BMI
                </button>
                {showResult && (
                    <div className="result">
                        <h2>Your BMI: <span id="bmi-result">{bmi}</span></h2>
                        <p id="bmi-category">{category}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BmiCalculator;
