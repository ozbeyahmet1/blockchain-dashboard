import gql from "graphql-tag";
// block.timestamp.time;
export const GET_TRANSACTIONS = gql`
  query GetTransactions($network: EthereumNetwork!, $limit: Int!) {
    transactions: ethereum(network: $network) {
      transactions(options: { desc: "block.timestamp.time", limit: $limit }, time: { after: "2024-03-27T00:00:35" }) {
        block {
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
          height
        }
        gasPrice
        hash
        sender {
          address
        }
        to {
          address
        }
      }
    }
  }
`;
export const GET_BLOCKS_QUERY = gql`
  query GetBlocks($network: EthereumNetwork!, $limit: Int!) {
    blocks: ethereum(network: $network) {
      blocks(options: { desc: "timestamp.time", limit: $limit }, time: { after: "2023-03-27T00:00:35" }) {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
        size
        reward
        miner {
          address
        }
        transactionCount
      }
    }
  }
`;
