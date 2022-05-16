import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeBlock from "./components/HomeBlock";
import BusinessesBlock from "./components/BusinessesBlock";
import OurFeatureBlock from "./components/OurFeatureBlock";
import YetPreferenceBlock from "./components/YetPreferenceBlock";
import ReadMoreBlock from "./components/ReadMoreBlock";
import RecentBlogsBlock from "./components/RecentBlogsBlock";
import JoinBlock from "./components/JoinBlock";
import Fade from "react-reveal";

function App() {
  return (
    <div className="App">
        <Header/>
        <main>
            <Fade><HomeBlock/></Fade>
            <BusinessesBlock/>
            <Fade><OurFeatureBlock/></Fade>
            <Fade><YetPreferenceBlock/></Fade>
            <Fade><ReadMoreBlock/></Fade>
            <Fade><RecentBlogsBlock/></Fade>
            <Fade><JoinBlock/></Fade>
        </main>
        <Fade><Footer/></Fade>
    </div>
  );
}

export default App;
