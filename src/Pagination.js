import * as React from 'react';

export const Pagination = ({ data, noOfLines }) => {
  const [paginatedData, setPaginatedData] = React.useState(data);
  const [currentPageData, setCurrentPageData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);
  const [noOfDataLines, setNoOfDataLines] = React.useState(noOfLines);

  console.log(
    'currentPageData ***********',
    totalPage,
    currentPageData,
    noOfDataLines
  );

  React.useEffect(() => {
    setCurrentPageData(paginatedData.slice(0, 5));
    setTotalPage(Math.ceil(paginatedData.length / 5));
  }, [paginatedData]);

  const handleNextClick = () => {
    console.log('clicked next');
    setNoOfDataLines(noOfDataLines + 5);
    setPage(page + 1);
    setCurrentPageData(
      paginatedData.slice(0 + noOfDataLines, 5 + noOfDataLines)
    );
  };

  const handlePrevClick = () => {
    setNoOfDataLines(noOfDataLines - 5);
    setPage(page - 1);
    // setCurrentPageData(paginatedData.slice(noOfDataLines - 5, noOfDataLines));
  };

  return (
    <>
      <div>
        <h3>pagination</h3>
        <h3>Total pages: {totalPage}</h3>
      </div>
      <div>
        {currentPageData.map((item, index) => {
          return (
            <div key={index}>
              <ul>
                <li>{item.name}</li>
              </ul>
              {currentPageData.length - 1 === index && (
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
