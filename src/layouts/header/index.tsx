import { ConnectButton } from "@rainbow-me/rainbowkit";
import Logo from "@/components/ui/logo";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["header_inner"] + " container"}>
        <Logo />
        <div className={styles["header--right"]}>
          <ConnectButton />
        </div>
      </div>
    </header>
  );
}
