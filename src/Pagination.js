import * as React from 'react';

export const Pagination = ({ data, itemsForEachPage }) => {
  const [paginatedData, setPaginatedData] = React.useState(data);
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);

  console.log('currentPageData ***********', totalPage);

  React.useEffect(() => {
    setTotalPage(Math.ceil(paginatedData.length / itemsForEachPage));
  }, [paginatedData]);

  const handleNextClick = () => {
    // console.log('clicked next');
    // // setNoOfDataLines(noOfDataLines + 5);
    setPage(page + 1);
    // setCurrentPageData(
    //   // paginatedData.slice(0 + noOfDataLines, 5 + noOfDataLines)
    // );
  };

  const handlePrevClick = () => {
    // setNoOfDataLines(noOfDataLines - 5);
    setPage(page - 1);
    // setCurrentPageData(paginatedData.slice(noOfDataLines - 5, noOfDataLines));
  };

  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(itemsForEachPage);

  const pages = [];
  for (
    let i = 0;
    i <= Math.ceil(paginatedData.length / itemsForEachPage);
    i++
  ) {
    pages.push(i);
  }

  let indexOfLastItem = currentPage * itemsPerPage;
  let indexOfFirstItem = indexOfLastItem - itemsForEachPage;
  const currentItems = paginatedData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div>
        <h3>pagination</h3>
        <h3>Total pages: {totalPage}</h3>
      </div>
      <div>
        {currentItems.map((item, index) => {
          return (
            <div key={index}>
              <ul>
                <li>{item.name}</li>
              </ul>
              {currentItems.length - 1 === index && (
                <>
                  <button disabled={page === 1} onClick={handlePrevClick}>
                    previous
                  </button>
                  Page: {page}
                  <button
                    disabled={page === totalPage}
                    onClick={handleNextClick}
                  >
                    Next
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
