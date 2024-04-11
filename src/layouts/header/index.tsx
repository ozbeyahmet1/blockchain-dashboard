import styles from "./header.module.scss";
import Logo from "@/components/ui/logo";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["header_inner"] + " container"}>
        <Logo />
        <div className={styles["header--right"]}>

        </div>
      </div>
    </header>
  );
}
