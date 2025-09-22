import React from 'react';
export interface ProductProps {
  id: number;
  name: string;
  price: string;
  image: string;
  colors: string[];
}
export const ProductCard: React.FC<ProductProps> = ({
  name,
  price,
  image,
  colors
}) => {
  return <div className="group">
      <div className="relative overflow-hidden mb-4">
        <img src={image} alt={name} className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-90 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <button className="w-full py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
      <h3 className="text-lg font-light">{name}</h3>
      <p className="text-gray-700 mb-2">{price}</p>
      {colors.length > 0 && <div className="flex gap-2 mt-2">
          {colors.map((color, index) => <div key={index} className="w-4 h-4 rounded-full border border-gray-300" style={{
        backgroundColor: color
      }} aria-label={`Color: ${color}`} />)}
        </div>}
    </div>;
};