import './App.css';
import BrandContainer from './Components/Brand/BrandContainer';
import Header from "./Components/Header/Header";
import About from './Components/About/About';
import Accordions from './Components/Accordion/Accordions';
import Skills from './Components/Skills/Skills';
import Services from './Components/Services/Services';
import Action from './Components/Action/Action';
import Portfolio from './Components/Portfolio/Portfolio';
import Team from './Components/Team/Team';
import Pricing from './Components/Pricing/Pricing';
import Asked from './Components/Frequently/Asked';
import Content from './Components/Content/Content';
import Join from './Components/Join/Join';
import Footer from './Components/Footer/Footer';
import Class from './Components/Class/Arsha';
import Arsha from './Components/Class/Arsha';
const App = () => {

  return (
    <div>
      <Header />
      <BrandContainer />
      <About />
      <Accordions />
      <Skills />
      <Services />
      <Action />
      <Portfolio />
      <Team />
      <Pricing />
      <Asked />
      <Content />
      <Join />
      <Footer/>
     <Arsha/>
    </div >
  );
}

export default App;
