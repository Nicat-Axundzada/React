import Social from "./pages/Social";
import Account from "./pages/Social/components/Account.jsx";
import "./global.css";
import data from "./data.js";
import React from "react";

function App() {
  return (
    <div className="container">
      <div>
        {data.map((user, index) => (
          <React.Fragment key={index}>
            <Social
              profilePicture={user.picture}
              name={user.name}
              address={user.address}
              info={user.info}
            />
            {user.accounts.map((account, accIndex) => (
              <Account
                media={account.media}
                link={account.link}
                key={`${index}-${accIndex}`}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;
