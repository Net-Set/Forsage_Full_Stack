'use client';

import { useEffect, useState } from 'react';
import ComparisonChart from '@/components/ui/chats/comparison-chart';
import Avatar from '@/components/ui/avatar';
import OverviewChart from '@/components/ui/chats/overview-chart';
import TopPools from '@/components/ui/top-pools';
import TransactionTable from '@/components/transaction/transaction-table';
import WalletCard from '@/components/ui/wallet-card';
import TransactCoin from '@/components/ui/transact-coin';
import PriceFeedSlider from '@/components/ui/live-price-feed';
import { priceFeedData } from '@/data/static/price-feed';
import { useBreakpoint } from '@/lib/hooks/use-breakpoint';
import ImageCarousel from '../ui/imageCarsoule';
import Roadmap from '@/components/ui/roadmap';
import SupportPage from '@/components/ui/footer';
import AccountPreview from '@/components/ui/accountpreview';
import PlatformRecentActivity from '@/components/ui/platformrecentactivity';
//images
import AuthorImage from '@/assets/images/author.jpg';

const topPoolsLimit = (breakpoint: string) => {
  switch (breakpoint) {
    case 'md':
      return 5;
    case '2xl':
      return 5;
    default:
      return 4;
  }
};

export default function MinimalScreen() {
  const [limit, setLimit] = useState(4);
  const breakpoint = useBreakpoint();
  const backgroundColor = '#1a202c'; // Example background color

  useEffect(() => {
    setLimit(topPoolsLimit(breakpoint));
  }, [breakpoint]);

   
  const handleRegisterBUSD = () => {
    window.location.href = 'https://criptic-kzgz-git-main-somil-merugawars-projects.vercel.app/retro'; // Replace with your desired URL
  };

  return (
    <>
      <div className="">
      <div className="relative w-full h-40 bg-cover bg-center rounded-xl bg-blue-500">
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

      {/* Content inside the banner */}
      <div className="absolute inset-0 flex items-center justify-between p-8 rounded-xl bg-blue-500">
        <div className="text-white text-left">
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">Your Banner Title</h1>
          <p className="text-lg lg:text-1xl mb-4">Your banner subtitle or call to action</p>
          <div className="space-x-4">
            <button className="bg-black hover:bg-black-700 text-white py-1 px-2 rounded" onClick={handleRegisterBUSD} >Go TO Dashboard</button>
            <button className="bg-grey-500 hover:bg-grey-700 text-white py-1 px-2 rounded">Watch Tutorial</button>
          </div>
        </div>
      </div>
    </div>

        <ImageCarousel />
        <AccountPreview />
        <Roadmap />
        <PlatformRecentActivity />
   
     
      </div>


      <SupportPage />
    </>
  );
}
