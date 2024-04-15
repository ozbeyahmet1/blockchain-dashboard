import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { BlockData } from "@/helpers/interfaces/queryTypes";
import styles from "./blockTable.module.scss";

export interface BlockTableProps {
  blockDatas: Array<BlockData>;
}

export default function BlockTable({ blockDatas }: BlockTableProps) {
  return (
    <TableContainer className={styles["blockTable"]}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className={styles["blockTable_head"]}>
          <TableRow>
            <TableCell className={styles["blockTable_cell--top"]}>Block Number</TableCell>
            <TableCell className={styles["blockTable_cell--top"]} align="left">
              Transaction Count
            </TableCell>
            <TableCell className={styles["blockTable_cell--top"]} align="left">
              Block Size
            </TableCell>
            <TableCell className={styles["blockTable_cell--top"]} align="left">
              Reward
            </TableCell>
            <TableCell className={styles["blockTable_cell--top"]} align="left">
              Miner Address
            </TableCell>
          </TableRow>
        </TableHead>
        {blockDatas && (
          <TableBody>
            {blockDatas?.map((blockData, i) => {
              return (
                <TableRow key={i}>
                  <TableCell component="th" scope="row" className={styles["blockTable_cell"]}>
                    {blockData.height}
                  </TableCell>
                  <TableCell className={styles["blockTable_cell"]} align="left">
                    {blockData.transactionCount}
                  </TableCell>
                  <TableCell className={styles["blockTable_cell"]} align="left">
                    {blockData.size}
                  </TableCell>
                  <TableCell className={styles["blockTable_cell"]} align="left">
                    {blockData.reward}
                  </TableCell>
                  <TableCell className={styles["blockTable_cell"]} align="left">
                    {blockData.miner.address}
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
