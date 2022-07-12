import { useState } from "react";

export default function List({ obj }) {
  const [exapand, setexpand] = useState(false);
  const [exapandsub, setexpandsub] = useState([]);

  function subexpand(postid) {
    setexpandsub((pre) => {
      if (pre.includes(postid)) {
        return pre.filter((item, i) => item !== postid);
      }

      return [...pre, postid];
    });
  }
  return (
    <>
      {obj.length >= 1 && (
        <div className="App">
          {obj.map((item, i) => (
            <div key={i}>
              <ul onClick={() => setexpand(!exapand)}>{item.name}</ul>
              {exapand &&
                item?.sub?.map((item, i) => (
                  <li key={i} onClick={() => subexpand(i)}>
                    {item.name}
                    {item.isfolder && exapandsub.includes(i) && (
                      <List obj={item.sub} />
                    )}
                  </li>
                ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
