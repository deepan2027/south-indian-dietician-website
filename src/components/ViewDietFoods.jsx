import React from 'react';

const dummyFoods = [
  {
    name: 'Ragi Dosa',
    calories: 180,
    protein: 5,
    carbs: 30,
    fat: 3,
    fiber: 4,
    image: 'https://via.placeholder.com/120'
  },
  {
    name: 'Kambu Upma',
    calories: 150,
    protein: 4,
    carbs: 25,
    fat: 2,
    fiber: 3,
    image: 'https://via.placeholder.com/120'
  }
];

export default function ViewDietFoods() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {dummyFoods.map((food, idx) => (
        <div key={idx} className="bg-white p-4 shadow rounded">
          <img src={food.image} alt={food.name} className="w-full h-32 object-cover mb-2 rounded" />
          <h3 className="font-semibold">{food.name}</h3>
          <p>Calories: {food.calories}</p>
          <p>Protein: {food.protein}g | Carbs: {food.carbs}g</p>
          <p>Fat: {food.fat}g | Fiber: {food.fiber}g</p>
        </div>
      ))}
    </div>
  );
}