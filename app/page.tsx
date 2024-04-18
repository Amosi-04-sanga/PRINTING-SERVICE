import {
  About,
  Contact,
  Copyright,
  FeaturedServices,
  Footer,
  Header,
  Portfolio,
  Services,
  
} from "@/components";

export default function Home() {
  return (
    <div>
      <Header />
      <FeaturedServices />
      <Portfolio />
      <About/>
      <Services />
      <Contact />
      <Footer/>
      <Copyright/>
    </div>
  );
}
