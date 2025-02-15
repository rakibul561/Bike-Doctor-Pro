import Link from 'next/link';
import React from 'react';

const page = () => {
    return (

        <div>
           <h1 className='text-center text-5xl items-center font-bold'>this is a blog page </h1>

    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <Link
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </Link>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <Link
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Visit the East
            </Link>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <Link
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </Link>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <Link
              href="/"
              aria-label="Category"
              title="Simple is better"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Simple is better
            </Link>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <Link
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </Link>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <Link
              href="/"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Film It!
            </Link>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <Link
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </Link>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <Link
              href="/"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Film It!
            </Link>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <Link
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </Link>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <Link
              href="/"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Film It!
            </Link>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <Link
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </Link>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <Link
              href="/"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Film It!
            </Link>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <Link
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </Link>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <Link
              href="/"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Film It!
            </Link>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <Link
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </Link>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <Link
              href="/"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Film It!
            </Link>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <Link
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </Link>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <Link
              href="/"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Film It!
            </Link>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <Link
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </Link>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <Link
              href="/"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Film It!
            </Link>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <Link
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </Link>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <Link
              href="/"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Film It!
            </Link>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <Link
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </Link>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <Link
              href="/"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Film It!
            </Link>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <Link
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </Link>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <Link
              href="/"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Film It!
            </Link>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <Link
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </Link>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <Link
              href="/"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Film It!
            </Link>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
        
            
        </div>

    );
};



export default page;

const blogPosts = [
    {
      id: 1,
      title: "Top 5 Car Maintenance Tips Every Car Owner Should Know",
      author: "Car Doctor Team",
      date: "2025-02-13",
      category: "Car Maintenance",
      content: "Keeping your car in top shape is essential. Learn how to check engine oil, maintain tire pressure, inspect brakes, and more!",
      image: "car-maintenance-tips.jpg"
    },
    {
      id: 2,
      title: "How to Diagnose Common Car Problems at Home",
      author: "John Doe",
      date: "2025-01-25",
      category: "Car Repair",
      content: "This guide will help you identify common car problems such as battery issues, engine misfires, and strange noises.",
      image: "car-repair-guide.jpg"
    },
    {
      id: 3,
      title: "Best Cars of 2025: Features, Pros, and Cons",
      author: "Car Doctor Review Team",
      date: "2025-01-10",
      category: "Car Reviews",
      content: "Looking for a new car? Here’s our detailed review of the best cars of 2025 with pros and cons for each.",
      image: "best-cars-2025.jpg"
    },
    {
      id: 4,
      title: "Top 5 Must-Have Car Accessories",
      author: "Jane Smith",
      date: "2025-01-05",
      category: "Car Accessories",
      content: "Upgrade your car with these essential accessories for safety, comfort, and style.",
      image: "car-accessories.jpg"
    },
    {
      id: 5,
      title: "How to Drive Efficiently and Save Fuel",
      author: "Car Doctor Tips",
      date: "2024-12-22",
      category: "Driving Tips",
      content: "Save money and reduce emissions with these fuel-efficient driving tips.",
      image: "fuel-saving-tips.jpg"
    },
    {
      id: 6,
      title: "Best Road Trips for Car Enthusiasts",
      author: "Road Trip Diaries",
      date: "2024-12-15",
      category: "Travel",
      content: "Explore the most scenic routes and must-see destinations for car lovers.",
      image: "road-trip.jpg"
    },
    {
      id: 7,
      title: "How to Choose the Right Car for Your Needs",
      author: "Car Buyer’s Guide",
      date: "2024-12-10",
      category: "Car Buying Guide",
      content: "Confused about which car to buy? Here’s a step-by-step guide to help you choose the perfect car.",
      image: "car-buying-guide.jpg"
    },
    {
      id: 8,
      title: "DIY Car Detailing at Home",
      author: "DIY Expert",
      date: "2024-11-20",
      category: "DIY Projects",
      content: "Learn how to detail your car at home like a pro with this easy DIY guide.",
      image: "diy-car-detailing.jpg"
    },
    {
      id: 9,
      title: "Understanding Car Insurance: What You Need to Know",
      author: "Car Insurance Pro",
      date: "2024-11-05",
      category: "Car Insurance",
      content: "Discover different types of car insurance, how to choose the best policy, and tips for saving money.",
      image: "car-insurance.jpg"
    }
  ];
  