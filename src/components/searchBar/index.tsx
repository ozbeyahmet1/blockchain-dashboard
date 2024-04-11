import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdStarOutline } from "react-icons/io";
import styles from "./searchBar.module.scss";
import Tag from "../ui/tag";
import Input from "../ui/input";

/**
 * SearchBar component for searching networks, tokens and transactions.
 * @param networks - An array of networks.
 */
interface SearchBarProps {
  networks: Array<string>;
}

export default function SearchBar({ networks }: SearchBarProps) {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?q=${search}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  return (
    <div className={styles["searchBar"]}>
      <div className={styles["searchBar--top"]}>
        <CiSearch size={40} color="white" />
        <form onSubmit={handleSearch}>
          <Input
            type="text"
            placeholder="Search by Network, Transactions and Tokens"
            value={search}
            onChange={handleInputChange}
            className={styles.searchBar_input}
          />
        </form>
      </div>
      <div className={styles["searchBar--middle"]}>
        <p>Quick search</p>
        <hr />
      </div>
      <div className={styles["searchBar--bottom"]}>
        <div className={styles["searchBar_recentSearches"]}>
          <IoMdStarOutline color="white" size={20} />
          <p>Popular Searchs</p>
        </div>
        <div className={styles["searchBar_tags"]}>
          {networks.map((network) => {
            return <Tag key={network} icon={<CiSearch size={20} color="white" />} text={network} />;
          })}
        </div>
      </div>
    </div>
  );
}
