import "./Sidebar.css";
import { useState, useEffect, useContext } from "react";
import { fiction, nonFiction, bookCondition, NovelsData } from "../../data";
import { Context } from "../../Context/AuthContext";

export const SideBar = () => {
  const { setNovelData, novelsData } = useContext(Context);
  const [checkedCategory, setCheckedCategory] = useState([]);
  const [newData, setNewdata] = useState(NovelsData)
  const filterNovels = (e) => {
    if (e.target.checked) {
      setCheckedCategory([...checkedCategory, e.target.name]);
    } else {
      checkedCategory.splice(checkedCategory.indexOf(e.target.name), 1);
      setCheckedCategory([...checkedCategory]);
    }
  };

  const searchAndFilter = () => {
    const searchResult = NovelsData.filter(
      (novel) =>
        novel.subcategory?.some((r) => checkedCategory.includes(r)) ||
        checkedCategory.includes(novel.condition)
    );
    setNovelData(searchResult);
  };

  useEffect(() => {
    if (checkedCategory.length === 0) {
      setNovelData(newData);
    }
    else {
      searchAndFilter();
    }

  }, [checkedCategory]);

  useEffect(() => {
    setNovelData(novelsData);
  }, []);

  return (
    <section className="sidebar-container max-h-screen overflow-y-scroll hide-scrollbar">
      <div className="sidebar-section">
        <h2 className="Category-lable">Fictions</h2>
        <ul className="category-con">
          {fiction?.map((item, index) => (
            <li key={index}>
              <label><input
                type="checkbox"
                name={item.label}
                onChange={filterNovels}
                className="inpt-box"
              />
                {item.label}</label>
            </li>
          ))}
        </ul>
        <h2 className="Category-lable">Non - Fictions</h2>
        <ul className="category-con">
          {nonFiction?.map((item, index) => (
            <li key={index}>
              <label><input
                type="checkbox"
                name={item.label}
                onChange={filterNovels}
                className="inpt-box"
              />
                {item.label}</label>
            </li>
          ))}
        </ul>
        <h2 className="Category-lable">Book Condition</h2>
        <ul className="category-con">
          {bookCondition.map((item, index) => (
            <li key={index}>
              <label><input
                type="checkbox"
                name={index}
                onChange={filterNovels}
                className="inpt-box"
              />
                {item.condition}</label>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};