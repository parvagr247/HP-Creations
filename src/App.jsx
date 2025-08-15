import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./navbar";
import Container from "./container";
import WorkshopCard from "./WorkshopCard";
import UpcomingWorkshops from "./UpcomingWorkshops";
import BookCard from "./BookCard";
import BookSection from "./BookSection";
import StoriesSection from "./StoriesSection";
import EducatorsSection from "./EducatorsSection";
import EducatorCard from "./EducatorCard";
import Footer from "./footer";
import Timeline from "./Timeline";
function App() {
  return (
    <>
      <Navbar />
      <Container />
      <Timeline />
      <UpcomingWorkshops />
      <BookSection />
      <StoriesSection />
      <EducatorsSection />
      <EducatorCard />
      <Footer />
    </>
  );
}

export default App;
