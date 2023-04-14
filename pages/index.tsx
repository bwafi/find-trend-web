import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-black">
      <div className="container">
        <nav className="flex w-full py-8 text-white justify-between">
          <div className="flex justify-center items-center">
            <Image src="./icon/find-trend.svg" alt="Fint Trend" width={40} height={40} />
            <h1 className="font-efrra font-bold text-2xl ml-2">Findtrend</h1>
          </div>
          <ul className="flex font-effra items-center space-x-6">
            <li className="text-lg">About</li>
            <li className="text-lg">How it work</li>
            <li className="text-lg">Pricing</li>
            <li className="text-lg">Solution </li>
            <li className="text-lg">Features </li>
          </ul>

          <div className="flex items-center font-efrra space-x-9">
            <div className="text-lg">Login</div>
            <div className="text-lg bg-white py-2 px-7 rounded-full text-black">Register</div>
          </div>
        </nav>
      </div>
    </div>
  );
}
