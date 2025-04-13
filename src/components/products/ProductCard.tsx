
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="h-64 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-800 mb-1">{product.name}</h3>
          <p className="text-kosheli-green font-semibold">NPR {product.price.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
