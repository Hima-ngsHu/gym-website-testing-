document.getElementById('dietForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const ageGroup = document.getElementById('ageGroup').value;
    const gender = document.getElementById('gender').value;

    const dietPlans = {
        kids: {
            male: [
                "Breakfast: Milk with poha or upma",
                "Lunch: Roti with dal and vegetables",
                "Snack: Fruits like bananas or apples",
                "Dinner: Khichdi with curd"
            ],
            female: [
                "Breakfast: Dalia with milk",
                "Lunch: Roti with paneer sabzi",
                "Snack: Handful of nuts and fruits",
                "Dinner: Rice with dal and vegetables"
            ]
        },
        teens: {
            male: [
                "Breakfast: Eggs with toast and a glass of milk",
                "Lunch: Roti with chicken curry and salad",
                "Snack: Protein shake or sprouts",
                "Dinner: Rice with dal, sabzi, and curd"
            ],
            female: [
                "Breakfast: Oats with nuts and fruits",
                "Lunch: Roti with paneer bhurji",
                "Snack: Yogurt with fruits",
                "Dinner: Rice with dal and green veggies"
            ]
        },
        adults: {
            male: [
                "Breakfast: Paratha with curd or boiled eggs",
                "Lunch: Brown rice with chicken curry",
                "Snack: Protein shake with dry fruits",
                "Dinner: Roti with dal, sabzi, and salad"
            ],
            female: [
                "Breakfast: Multigrain toast with peanut butter",
                "Lunch: Roti with rajma or chole",
                "Snack: Fruit salad or boiled eggs",
                "Dinner: Quinoa salad or grilled paneer"
            ]
        },
        seniors: {
            male: [
                "Breakfast: Soft idli with chutney",
                "Lunch: Khichdi with vegetables",
                "Snack: Fruits like papaya or guava",
                "Dinner: Light dal soup with roti"
            ],
            female: [
                "Breakfast: Dalia with milk or almond milk",
                "Lunch: Rice with vegetable stew",
                "Snack: Boiled chana or roasted makhana",
                "Dinner: Roti with soft sabzi and curd"
            ]
        }
    };

    const resultElement = document.getElementById('dietResult');
    const selectedDiet = dietPlans[ageGroup][gender];

    resultElement.innerHTML = `<h3>Your Diet Plan:</h3><ul>${selectedDiet.map(meal => `<li>${meal}</li>`).join('')}</ul>`;
});
