import React from 'react'

export const TopButtons = ({ setQuery }) => {

    const cities = [
        {
            id: 1,
            title: "London",
        },
        {
            id: 2,
            title: "Ottawa",
        },
        {
            id: 3,
            title: "Berlin",
        },
        {
            id: 4,
            title: "Paris",
        },
        {
            id: 5,
            title: "Athens",
        },
    ];

  return (
    <div className="flex itemss-center justify-around my-6">
        {
            cities.map((city) => (
                <button
                key={city.id}
                className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2
                rounded-md transition ease-in"
                onClick={() => setQuery({q: city.title})}
                >
                 {city.title}
                </button>
            ))
        }
    </div>
  )
}
