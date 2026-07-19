import Header from "./sections/Header";
import Hero from "./sections/Hero";
import ServiceAndPricing from "./sections/ServiceAndPricing";
import WhyChooseUs from "./sections/WhyChooseUs";
import Garansi from "./sections/Garansi";
import Testimoni from "./sections/Testimoni";
import FAQ from "./sections/FAQ";
import FinalCTA from "./sections/FinalCta";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ServiceAndPricing />
      <WhyChooseUs />
      <Garansi />
      <Testimoni />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
