// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// 正确导入 Swiper 模块
import { Pagination, Autoplay } from 'swiper/modules';

// Swiper 样式
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Home = () => {
  const slides = [
    {
      image: '/images/slide1.png',
      title: '',
      description: ''
    },
    {
      image: '/images/slide2.png',
      title: '',
      description: ''
    }
  ];

  const categories = [
    {
      id: 1,
      name: 'Industrial Safety',
      icon: '/images/categories/industrial.svg',
      description: 'Complete protection for industrial environments'
    },
    {
      id: 2,
      name: 'Personal Protection',
      icon: '/images/categories/personal.svg',
      description: 'Individual safety equipment and gear'
    },
    {
      id: 3,
      name: 'Specialized Equipment',
      icon: '/images/categories/specialized.svg',
      description: 'Custom solutions for specific needs'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-20">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="h-[600px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30">
                  <div className="container mx-auto h-full flex items-center px-8">
                    <div className="text-white max-w-2xl">
                      <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                      <p className="text-xl">{slide.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Categories Section */}
      <section className="py-24">
  <div className="container mx-auto px-8">
    <h2 className="text-4xl font-bold text-center mb-16">Our Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {categories.map(category => (
        <Link 
          key={category.id} 
          to={`/products?category=${category.id}`}
          className="group"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 rounded-full bg-gray-100 flex items-center justify-center mb-6 transition-transform group-hover:scale-105">
              <img
                src={category.icon}
                alt={category.name}
                className="w-24 h-24"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-600">{category.name}</h3>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <span className="inline-flex items-center text-blue-600 group-hover:text-blue-700">
              View Products
              <svg 
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>
      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/images/about.jpg"
                alt="About GatherWell"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold mb-6">About Our Company</h2>

              <p className="text-gray-600">
                Qingdao GatherWell Co., Ltd. is a company that focuses on providing customers with safety protection solutions from head to toe.
              </p>

              <p className="text-gray-600">
                The main products include: a variety of limited-use protective clothing, chemical protective clothing, flame-retardant work clothes, clean room clothing, safety gloves, safety shoes, reflective vests, work clothes, etc.
              </p>

              <p className="text-gray-600">
                GatherWell provides customers with high-quality products by insisting on continuous product research and development and technological innovation. The products comply with GB standards, CE European standards, etc., to provide users with the best protection.
              </p>

              <p className="text-gray-600">
                Over the years, GatherWell's products have been exported to more than 30 countries and regions including Europe, Japan, South Korea, Singapore, Thailand, the United States, Canada, and South America, etc. It is deeply loved by users.
              </p>

              <p className="text-gray-600">
                In the future, we will continue to provide users with better safety protection with our products with excellent quality, professional team, and meticulous service.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More About Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};