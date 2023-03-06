const renderArtist = () => {
  const itemsSold = document.querySelector(".items-sold-val");
  const totalIncome = document.querySelector(".total-income-val");
  const artistName = localStorage.getItem("artist");

  let soldItemsCount = 0;
  let artistItemsCount = 0;
  let totalIncomeVal = 0;

  for (let i = 0; i < itemsLC.length; i++) {
    const item = itemsLC[i];

    if (item.artist === artistName) {
      artistItemsCount++;
      if (item.dateSold) {
        soldItemsCount++;
        totalIncomeVal += item.priceSold;
      }
    }
  }

  itemsSold.textContent = `${soldItemsCount}/${artistItemsCount}`;
  totalIncome.textContent = `$${totalIncomeVal}`;
};
