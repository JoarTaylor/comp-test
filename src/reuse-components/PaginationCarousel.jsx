import React, { useEffect, useState } from "react";

export default function PaginationCarousel({
  data,
  numDisplayedItems,
  buttonName,
  hideDefaultButton,
}) {
  const [offset, setOffset] = useState(0);
  const [displayedArray, setDisplayedArray] = useState([]);

  useEffect(() => {
    setNextDisplayedItems();
  }, []);

  const setNextDisplayedItems = () => {
    const remainingItems = (offset + numDisplayedItems) % data.length;

    let result = [];

    if (remainingItems < offset) {
      result = data.slice(offset).concat(data.slice(0, remainingItems));
    } else {
      result = data.slice(offset, offset + numDisplayedItems);
    }

    setOffset(remainingItems);
    setDisplayedArray(result);
  };

  const mappedResults = displayedArray.map((item) => {
    return <img key={item} src={item}></img>;
  });


  return (
    <div>
      {mappedResults}
      <button
        style={hideDefaultButton ? { display: "none" } : { display: "block" }}
        onClick={setNextDisplayedItems}
      >
        {buttonName}
      </button>
    </div>
  );
}
