import { useState } from "react";

const AddField = () => {
  const [ContributorList, setContributorList] = useState([{ ContributorName: "", Split: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...ContributorList];
    list[index][name] = value;
    setContributorList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...ContributorList];
    list.splice(index, 1);
    setContributorList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setContributorList([...ContributorList, { ContributorName: "", Split: "" }]);
  };

  return (
    <div className="App">
      {ContributorList.map((x, i) => {
        return (
          <div key={i} className="box">
            <input
              name="ContributorName"
			  placeholder="Contributor Name"
              value={x.ContributorName}
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className="ml10"
              name="Split"
			  placeholder="Split %"
              value={x.Split}
              onChange={e => handleInputChange(e, i)}
            />
            <div className="btn-box">
              {ContributorList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>-</button>}
              {ContributorList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;