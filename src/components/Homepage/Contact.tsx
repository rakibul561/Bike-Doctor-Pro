import { BiMapPin, BiPhoneIncoming } from "react-icons/bi";
import { LiaCalendarDaySolid } from "react-icons/lia";


export default function ContactInfo() {
  return (
    <div className="bg-black max-w-7xl mx-auto text-white py-14 px-4 md:px-12 rounded-lg">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        
        {/* Opening Hours */}
        <div className="flex items-center gap-3">
          <LiaCalendarDaySolid className="text-white bg-red-500 rounded-full p-1 w-10 h-10" />
          <div>
            <p className="text-sm">We are open monday-friday</p>
            <p className="text-lg font-bold">7:00 am - 9:00 pm</p>
          </div>
        </div>

        {/* Contact Number */}
        <div className="flex items-center gap-3">
          <BiPhoneIncoming className="text-white bg-red-500 rounded-full p-1 w-10 h-10" />
          <div>
            <p className="text-sm">Have a question?</p>
            <p className="text-lg font-bold">+2546 251 2658</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-3">
          <BiMapPin className="text-white bg-red-500 rounded-full p-1 w-10 h-10" />
          <div>
            <p className="text-sm">Need a repair? our address</p>
            <p className="text-lg font-bold">Liza Street, New York</p>
          </div>
        </div>
      </div>
    </div>
  );
}
