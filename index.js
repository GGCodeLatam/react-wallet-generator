const ethers = require('ethers');

// Función para generar una wallet aleatoria
function generateRandomWallet() {
  const wallet = ethers.Wallet.createRandom();
  return {
    address: wallet.address,
    privateKey: wallet.privateKey
  };
}

// Función para generar una wallet a partir de una frase secreta
function generateWalletFromSeed(seed) {
  const wallet = ethers.Wallet.fromMnemonic(seed);
  return {
    address: wallet.address,
    privateKey: wallet.privateKey
  };
}

module.exports = {
  generateRandomWallet: generateRandomWallet,
  generateWalletFromSeed: generateWalletFromSeed
};