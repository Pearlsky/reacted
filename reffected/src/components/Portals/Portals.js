import { useState, useEffect } from "react";

function Portals() {
  const [, setDateInput] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 3) {
      throw new Error();
    }
  }, [count]);
  return (
    <main className="main">
      <form>
        <label htmlFor="portalDateInput">
          <input
            id="portalDateInput"
            onChange={(e) => {
              setDateInput(e.target.value);
            }}
            type="text"
            placeholder="Type a portal day to set"
          />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            setCount((prev) => prev + 1);
          }}
        >
          Set Date
        </button>
      </form>
      <div>
        <p>You're allowed only three date slots. Try not to exceed it</p>
        <p>You've set the date {count} times</p>
      </div>
    </main>
  );
}

export default Portals;
