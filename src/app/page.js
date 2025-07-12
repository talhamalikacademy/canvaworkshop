import Banner from '../components/Banner';
// import StickyBox from '../components/StickyBox';
import WhyLearnThis from '../components/WhyLearnThis';
import Curriculum from '../components/Curriculum';
import VideoModal from '../components/VideoModal';
import MeetCreator from '../components/MeetCreator';
import EnrollNow from '../components/EnrollNow';
// import Footer from '../components/Footer';
import HashScrollHandler from '../components/HashScrollHandler';
import StickyLogo from '../components/StickyLogo';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <HashScrollHandler />
      <StickyLogo />
      <Banner />
      {/* <StickyBox /> */}
      <WhyLearnThis />
      <Curriculum />
      <VideoModal />
      <MeetCreator />
      <EnrollNow />
      {/* <Footer /> */}
    </main>
  );
}
