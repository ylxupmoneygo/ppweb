// src/pages/Products.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  title: string;
  image: string;
  category: string;
}

interface Category {
  id: string;
  title: string;
}

const categories: Category[] = [
  { id: 'safety-shoes', title: 'Safety Shoes' },
  { id: 'reflective-workwear', title: 'Reflective Workwear' },
  { id: 'workwear', title: 'Workwear' },
  { id: 'chemical-protective', title: 'Chemical Protective Clothing' },
  { id: 'accessories', title: 'Accessories' },
  { id: 'safety-gloves', title: 'Safety Gloves' },
  { id: 'limited-use-protective', title: 'Limited-use Industrial Protective Clothing' },
];

const products: Product[] = [
  // Safety Shoes
  {
    id: 'safety-shoes-1',
    title: 'Steel Toe Safety Boots',
    image: '/images/products/DT115.jpg',
    category: 'safety-shoes'
  },
  {
    id: 'safety-shoes-2',
    title: 'Composite Toe Work Shoes',
    image: '/images/products/DT115.jpg',
    category: 'safety-shoes'
  },
  {
    id: 'safety-shoes-3',
    title: 'Waterproof Safety Boots',
    image: '/images/products/DT115.jpg',
    category: 'safety-shoes'
  },
  {
    id: 'safety-shoes-4',
    title: 'Athletic Safety Shoes',
    image: '/images/products/DT115.jpg',
    category: 'safety-shoes'
  },
  {
    id: 'safety-shoes-5',
    title: 'Electrical Hazard Safety Boots',
    image: '/images/products/DT115.jpg',
    category: 'safety-shoes'
  },

  // Reflective Workwear
  {
    id: 'reflective-1',
    title: 'High Visibility Safety Vest',
    image: '/images/products/reflective-1.jpg',
    category: 'reflective-workwear'
  },
  {
    id: 'reflective-2',
    title: 'Reflective Safety Jacket',
    image: '/images/products/reflective-2.jpg',
    category: 'reflective-workwear'
  },
  {
    id: 'reflective-3',
    title: 'Hi-Vis Rain Gear',
    image: '/images/products/reflective-3.jpg',
    category: 'reflective-workwear'
  },
  {
    id: 'reflective-4',
    title: 'Reflective Work Pants',
    image: '/images/products/reflective-4.jpg',
    category: 'reflective-workwear'
  },
  {
    id: 'reflective-5',
    title: 'Class 3 Safety T-Shirt',
    image: '/images/products/reflective-5.jpg',
    category: 'reflective-workwear'
  },

  // Workwear
  {
    id: 'workwear-1',
    title: 'Heavy Duty Work Pants',
    image: '/images/products/workwear-1.jpg',
    category: 'workwear'
  },
  {
    id: 'workwear-2',
    title: 'Work Shirt Long Sleeve',
    image: '/images/products/workwear-2.jpg',
    category: 'workwear'
  },
  {
    id: 'workwear-3',
    title: 'Cargo Work Shorts',
    image: '/images/products/workwear-3.jpg',
    category: 'workwear'
  },
  {
    id: 'workwear-4',
    title: 'Work Coveralls',
    image: '/images/products/workwear-4.jpg',
    category: 'workwear'
  },
  {
    id: 'workwear-5',
    title: 'Work Jacket',
    image: '/images/products/workwear-5.jpg',
    category: 'workwear'
  },

  // Chemical Protective
  {
    id: 'chemical-1',
    title: 'Chemical Resistant Suit',
    image: '/images/products/chemical-1.jpg',
    category: 'chemical-protective'
  },
  {
    id: 'chemical-2',
    title: 'Splash Protection Coverall',
    image: '/images/products/chemical-2.jpg',
    category: 'chemical-protective'
  },
  {
    id: 'chemical-3',
    title: 'Chemical Resistant Apron',
    image: '/images/products/chemical-3.jpg',
    category: 'chemical-protective'
  },
  {
    id: 'chemical-4',
    title: 'Chemical Protective Boots',
    image: '/images/products/chemical-4.jpg',
    category: 'chemical-protective'
  },
  {
    id: 'chemical-5',
    title: 'Chemical Splash Goggles',
    image: '/images/products/chemical-5.jpg',
    category: 'chemical-protective'
  },

  // Accessories
  {
    id: 'accessories-1',
    title: 'Safety Helmet',
    image: '/images/products/accessories-1.jpg',
    category: 'accessories'
  },
  {
    id: 'accessories-2',
    title: 'Safety Goggles',
    image: '/images/products/accessories-2.jpg',
    category: 'accessories'
  },
  {
    id: 'accessories-3',
    title: 'Ear Protection',
    image: '/images/products/accessories-3.jpg',
    category: 'accessories'
  },
  {
    id: 'accessories-4',
    title: 'Knee Pads',
    image: '/images/products/accessories-4.jpg',
    category: 'accessories'
  },
  {
    id: 'accessories-5',
    title: 'Tool Belt',
    image: '/images/products/accessories-5.jpg',
    category: 'accessories'
  },

  // Safety Gloves
  {
    id: 'gloves-1',
    title: 'Cut Resistant Gloves',
    image: '/images/products/gloves-1.jpg',
    category: 'safety-gloves'
  },
  {
    id: 'gloves-2',
    title: 'Chemical Resistant Gloves',
    image: '/images/products/gloves-2.jpg',
    category: 'safety-gloves'
  },
  {
    id: 'gloves-3',
    title: 'Heat Resistant Gloves',
    image: '/images/products/gloves-3.jpg',
    category: 'safety-gloves'
  },
  {
    id: 'gloves-4',
    title: 'Anti-Vibration Gloves',
    image: '/images/products/gloves-4.jpg',
    category: 'safety-gloves'
  },
  {
    id: 'gloves-5',
    title: 'Disposable Gloves',
    image: '/images/products/gloves-5.jpg',
    category: 'safety-gloves'
  },

  // Limited-use Protective
  {
    id: 'limited-1',
    title: 'Disposable Coverall',
    image: '/images/products/limited-1.jpg',
    category: 'limited-use-protective'
  },
  {
    id: 'limited-2',
    title: 'Disposable Lab Coat',
    image: '/images/products/limited-2.jpg',
    category: 'limited-use-protective'
  },
  {
    id: 'limited-3',
    title: 'Disposable Boot Covers',
    image: '/images/products/limited-3.jpg',
    category: 'limited-use-protective'
  },
  {
    id: 'limited-4',
    title: 'Disposable Hair Net',
    image: '/images/products/limited-4.jpg',
    category: 'limited-use-protective'
  },
  {
    id: 'limited-5',
    title: 'Disposable Face Mask',
    image: '/images/products/limited-5.jpg',
    category: 'limited-use-protective'
  }
];

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].id);

  const filteredProducts = products.filter(
    product => product.category === selectedCategory
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8 ">
          {/* Left Sidebar - Categories */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-32">
              <h2 className="text-xl font-bold mb-6">Categories</h2>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-md transition-colors duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Content - Product Grid */}
          <div className="flex-grow pt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-w-3 aspect-h-2 relative bg-gray-100 rounded-t-xl overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Product+Image';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors">
                      {product.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No products found in this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;