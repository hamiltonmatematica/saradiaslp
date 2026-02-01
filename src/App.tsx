import Hero from './components/Hero';
import Transition from './components/Transition';
import CoursePresentation from './components/CoursePresentation';
import TargetAudience from './components/TargetAudience';
import Methodology from './components/Methodology';
import LearningOutcomes from './components/LearningOutcomes';
import Inclusions from './components/Inclusions';
import EmotionalGuarantee from './components/EmotionalGuarantee';
import Instructor from './components/Instructor';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Hero />
      <Transition />
      <CoursePresentation />
      <TargetAudience />
      <Methodology />
      <LearningOutcomes />
      <Inclusions />
      <EmotionalGuarantee />
      <Instructor />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
