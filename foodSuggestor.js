const myFoodOptions = {
    sunny: ['Grilled Chicken Salad', 'Ice Cream', 'Lemonade', 'BBQ Ribs'],
    rainy: ['Tomato Soup', 'Grilled Cheese Sandwich', 'Hot Chocolate', 'Pasta'],
    snowy: ['Hot Pot', 'Chili', 'Roast Beef', 'Baked Potato'],
    cloudy: ['Pizza', 'Burger', 'Fries', 'Smoothie']
};

function myGetWeather() {
    const myWeatherConditions = ['sunny', 'rainy', 'snowy', 'cloudy'];
    const myCurrentWeather = myWeatherConditions[Math.floor(Math.random() * myWeatherConditions.length)];
    return myCurrentWeather;
}

function mySuggestFood(myWeather) {
    const mySuggestions = myFoodOptions[myWeather];
    const myRandomSuggestion = mySuggestions[Math.floor(Math.random() * mySuggestions.length)];
    return myRandomSuggestion;
}

function myDisplaySuggestion() {
    const myWeather = myGetWeather();
    const mySuggestion = mySuggestFood(myWeather);
    document.getElementById('myWeather').innerText = `Current Weather: ${myWeather.charAt(0).toUpperCase() + myWeather.slice(1)}`;
    document.getElementById('mySuggestion').innerText = `Suggested Food: ${mySuggestion}`;
}

myDisplaySuggestion();
