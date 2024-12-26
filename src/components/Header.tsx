// src/components/Header.tsx
import { Link } from 'react-router-dom';

// src/components/Header.tsx
export const Header = () => {
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="flex items-center justify-between h-20 px-8">
        <Link to="/" className="flex items-center">
          <img src="/images/logo.svg" alt="Logo" className="h-12" />
        </Link>

        <nav className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};