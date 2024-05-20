import React, { useEffect, useRef, useState } from "react";
import './index.css';
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { SupplementaryPage } from "./components/SupplementaryPage";

function App() {
  const ref = useRef();
  const [showSupplementaryPage, setShowSupplementaryPage] = useState(false);
  const [supplementaryPage, setSupplementaryPage] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('visitedBefore')) {
      localStorage.setItem('visitedBefore', true);
    }
  }, []);

  return (
    <div ref={ref}>
      <Header setShowSupplementaryPage={setShowSupplementaryPage} setSupplementaryPage={setSupplementaryPage} />
      {
        showSupplementaryPage && <SupplementaryPage page={supplementaryPage} setShowSupplementaryPage={setShowSupplementaryPage} />
      }
      <Home />
    </div>
  );
}

export default App;
