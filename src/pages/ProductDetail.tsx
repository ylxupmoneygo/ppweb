// src/pages/ProductDetail.tsx
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Product {
  id: string;
  title: string;
  description: string;
  images: string[];
}

// 模拟产品数据
const product: Product = {
  id: '1',
  title: 'Steel Toe Safety Boots',
  description: `
    Professional grade safety boots with steel toe protection.
    - Made with genuine leather
    - Oil and slip resistant sole
    - Meets ASTM F2413-18 safety standards
    - Waterproof and breathable
    - Comfortable padded collar and tongue
    - Available in sizes 7-13
  `,
  images: [
    '/images/products/DT115.jpg',
    '/images/products/DT116.jpg',
    '/images/products/DT117.jpg',
  ],
};

export const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8 pt-32">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-gray-500">
            <li>
              <Link to="/products" className="hover:text-blue-600">Products</Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-900">{product.title}</li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Image Gallery */}
          <div className="lg:w-1/2">
            {/* Main Image */}
            <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-full object-contain p-4"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/600x450?text=Product+Image';
                }}
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${
                    selectedImage === index 
                      ? 'ring-2 ring-blue-500' 
                      : 'ring-1 ring-gray-200 hover:ring-blue-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.title} - View ${index + 1}`}
                    className="w-full h-full object-cover hover:opacity-75 transition-opacity"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/150?text=Thumbnail';
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:w-1/2 pt-8 lg:pt-0">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {product.title}
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="whitespace-pre-line text-gray-600">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;