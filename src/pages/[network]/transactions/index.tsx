import Template from "@/layouts/template";
import BlocksPageView from "@/views/blocks";
import TransactionsPageView from "@/views/transactions";

export default function Blocks() {
  return (
    <Template>
      <TransactionsPageView />
    </Template>
  );
}
