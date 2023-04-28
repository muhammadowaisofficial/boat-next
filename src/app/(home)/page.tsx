import HeroBanner from '@/components/home/hero-banner';
import DestinationBlock from '@/components/home/destination-block/destination-block';
import InstructionBlock from '@/components/home/instruction-block';
import TopBoats from '@/components/home/top-boats';
import PromotionalBlock from '@/components/home/promotional-block';
import NewBoats from '@/components/home/new-boats';
import TestimonialBlock from '@/components/home/testimonial-block';
import SubscriptionBlock from '@/components/subscription/subscription-block';


export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <DestinationBlock />
      <InstructionBlock />
      <TopBoats />
      <PromotionalBlock />
      <NewBoats />
      <TestimonialBlock />
      <SubscriptionBlock sectionClassName="4xl:!px-16" />
    </>
  );
}
