type PropsWithTypename<P = unknown> = P & { __typename: string };

interface DateTime extends PropsWithTypename {
  time: string;
}

interface EthereumAddressInfo extends PropsWithTypename {
  address: string;
}

export interface BlockData extends PropsWithTypename {
  timestamp: DateTime;
  height: number;
  size: number;
  reward: number;
  miner: EthereumAddressInfo;
  transactionCount: number;
}

export interface BlockQuery {
  [typename: string]: {
    __typename: string;
    blocks: BlockData[];
  };
}

interface Timestamp extends PropsWithTypename {
  timestamp: DateTime;
}

interface TxnBlock extends PropsWithTypename {
  timestamp: DateTime;
  height: number;
}

export interface TxnData extends PropsWithTypename {
  block: TxnBlock;
  gasPrice: number;
  hash: string;
  sender: EthereumAddressInfo;
  to: EthereumAddressInfo;
}
export interface TxnQuery {
  [typename: string]: {
    __typename: string;
    transactions: TxnData[];
  };
}
