// app/page.tsx (if using the app directory in Next.js 13+)
import React from 'react';
import Image from 'next/image'; // Next.js Image component for optimization

const Page: React.FC = () => {
  return (
    <div className="grid border lg:mt-10 lg:mb-10  max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-2xl md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
      <div className="flex flex-col justify-between">
        <div className="space-y-2"> 
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Lets talk!</h2>
          <div className="dark:text-gray-600">Vivamus in nisl metus? Phasellus.</div>
        </div>
        <Image src={"/assets/images/team/2.jpg"} alt="Doodle" className=" rounded-lg h-52 md:h-64" width={400} height={400} />
      </div>
      <form noValidate className="space-y-6">
        <div>
          <label htmlFor="name" className="text-sm">Full name</label>
          <input id="name" type="text" placeholder="Your full name" className="w-full p-3 rounded dark:bg-gray-100 border" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            className="w-full p-3 rounded border dark:bg-gray-100"
            style={{
              backgroundImage: 'url("data:image/png;base64,iVBORw0KGgo...")',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '20px',
              backgroundPosition: '97% center',
            }}
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">Message</label>
          <textarea id="message" rows={3} className="w-full p-3 border rounded dark:bg-gray-100" placeholder="Your message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary  ">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Page;
