import { useEffect, useRef } from "react";

export default function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useEffect(() => {
    const callback = (e) => {
      if (document.activeElement === inputEl.current) {
        if (e.code === "Escape") {
          inputEl.current.blur();
          setQuery("");
        } else if (e.code === "Enter") {
          inputEl.current.blur();
        }
        return;
      } else if (e.code === "Enter") {
        inputEl.current.focus();
      }
    };

    document.addEventListener("keydown", callback);
    return () => document.removeEventListener("keydown", callback);
  }, [setQuery]);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
