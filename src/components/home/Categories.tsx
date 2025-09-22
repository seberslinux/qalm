import React from 'react';
const categories = [{
  id: 1,
  name: 'Tops',
  image: 'https://images.unsplash.com/photo-1555009393-f20bdb245c4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'
}, {
  id: 2,
  name: 'Bottoms',
  image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'
}, {
  id: 3,
  name: 'Accessories',
  image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'
}];
export const Categories = () => {
  return <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-light text-center mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(category => <a key={category.id} href="#" className="group relative h-80 overflow-hidden">
              <img src={category.image} alt={category.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-2xl font-light tracking-wider">
                  {category.name}
                </span>
              </div>
            </a>)}
        </div>
      </div>
    </section>;
};