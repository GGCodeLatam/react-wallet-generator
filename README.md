# react-wallet-generator

library to generate wallets in evm blockchains
Simply usage:

```javascript
import React, { useState } from 'react';
import { generateRandomWallet } from 'react-wallet-generator';


function App() {
  const [wallet, setWallet] = useState(null);

  // Generate a new wallet at the click of a button
  const handleClick = () => {
    const newWallet = generateRandomWallet();
    setWallet(newWallet);
  }

  return (
    <div>
      <button onClick={handleClick}>Genete wallet</button>
      {wallet && (
        <div>
          <p>Address: {wallet.address}</p>
          <p>Private Key: {wallet.privateKey}</p>
        </div>
      )}
    </div>
  );
}


export default App;
```
