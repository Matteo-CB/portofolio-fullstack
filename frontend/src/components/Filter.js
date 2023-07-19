import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../filterSlice";

const Filter = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [filterLanguage, setFilterLanguage] = useState("");
  const onOptionChange = (e) => {
    setFilterLanguage(e.target.value);
  };
  useEffect(() => {
    dispatch(toggleFilter(filterLanguage));
  }, [filterLanguage]);

  return (
    <div className="radio-inputs">
      <label className="radio">
        <input
          type="radio"
          name="radio"
          id={""}
          value={""}
          checked={!filterLanguage}
          onChange={onOptionChange}
        />
        <span className="name">Tous</span>
      </label>
      {data &&
        data.uniqueItems.techno.map((e, index) => {
          return (
            <label key={index} className="radio">
              <input
                type="radio"
                name="radio"
                id={e}
                value={e}
                checked={filterLanguage === e}
                onChange={onOptionChange}
              />
              <span className="name">{e}</span>
            </label>
          );
        })}
    </div>
  );
};

export default Filter;
