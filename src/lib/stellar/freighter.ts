import {
  getAddress,
  isConnected,
  signTransaction,
} from '@stellar/freighter-api';

export async function getWalletAddress(): Promise<string | null> {
  const connected = await isConnected();
  if (!connected) return null;
  const { address } = await getAddress();
  return address;
}

export async function signTx(xdr: string, network: string): Promise<string> {
  const { signedTxXdr } = await signTransaction(xdr, { networkPassphrase: network });
  return signedTxXdr;
}
