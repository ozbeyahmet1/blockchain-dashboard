import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { BlockData, TxnData } from "@/helpers/interfaces/queryTypes";
import styles from "./txnTable.module.scss";

export interface TxnTableProps {
  txnDatas: Array<TxnData>;
}

export default function TransactionTable({ txnDatas }: TxnTableProps) {
  return (
    <TableContainer className={styles["txnTable"]}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className={styles["txnTable_head"]}>
          <TableRow>
            <TableCell className={styles["txnTable_cell--top"]}>Transaction Hash</TableCell>
            <TableCell className={styles["txnTable_cell--top"]} align="left">
              Block
            </TableCell>
            <TableCell className={styles["txnTable_cell--top"]} align="left">
              Gas Price
            </TableCell>
            <TableCell className={styles["txnTable_cell--top"]} align="left">
              From
            </TableCell>
            <TableCell className={styles["txnTable_cell--top"]} align="left">
              To
            </TableCell>
          </TableRow>
        </TableHead>
        {txnDatas && (
          <TableBody>
            {txnDatas?.map((txnData, i) => {
              return (
                <TableRow key={i}>
                  <TableCell component="th" scope="row" className={styles["txnTable_cell"]}>
                    {txnData.hash.slice(0, 20)}...
                  </TableCell>
                  <TableCell className={styles["txnTable_cell"]} align="left">
                    {txnData.block.height}
                  </TableCell>
                  <TableCell className={styles["txnTable_cell"]} align="left">
                    {txnData.gasPrice}
                  </TableCell>
                  <TableCell className={styles["txnTable_cell"]} align="left">
                    {txnData.sender.address}
                  </TableCell>
                  <TableCell className={styles["txnTable_cell"]} align="left">
                    {txnData.to.address}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}
