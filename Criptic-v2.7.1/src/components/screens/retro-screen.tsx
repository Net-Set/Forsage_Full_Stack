import TransactionTable from '@/components/transaction/transaction-table';
import Program from '@/components/program/program';
//images
import PriceFeedSlider from '@/components/ui/live-price-feed';
import { priceFeedData } from '@/data/static/price-feed-retro';
import ComparisonChart from '@/components/ui/chats/retro-comparision-chart';

export default function RetroScreen() {
  return (
    <>
      <div className="retro-container">
        {/* <div>
          <ComparisonChart />
        </div> */}
          {/* <div className="mt-7">
            <PriceFeedSlider
              priceFeeds={priceFeedData}
              limit={3}
              gridClassName="2xl:grid-cols-3 2xl:gap-4"
            />
          </div> */}

<div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <Program />
      </div>
        <div className="mt-7">
          <TransactionTable />
        </div>
      </div>
    </>
  );
}
