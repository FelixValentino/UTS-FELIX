import './App.css'
import TransaksiItem from './component/TransaksiItem';
import KartuRingkasan from './component/KartuRingkasan';
import { Badge } from 'react-bootstrap';
import WalletSummary from './component/WalletSummary';
import { Routes, Route } from 'react-router-dom';

import "./App.css";


// import transaksi Item
// import kartu Ringkasan
// import badge
// WalletSummary

function App() {
  return (
    <>
      <div className="container">
        <div className="main-wrapper">
          <main className="content-area">
            <Routes>
              <Route path="transaksiItem" element={<TransaksiItem />} />
              <Route path="kartuRingkasan" element={<KartuRingkasan />} />
              <Route path="badge" element={<Badge />} />
              <Route path="walletSummary" element={<WalletSummary />} />
            </Routes>
          </main>
        </div>
      </div>

      {/* buat Routes */}

      {/* Tempat untuk komponen  */}
      {/* Route transaksiItem */}
      {/* Route KartuRingaksan */}
      {/* Route Badge */}
      {/* Route WalletSummary */}
    </>
  );
}

export default App;
