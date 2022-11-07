function Pagination({ users, usersPerPage, currentPage, setCurrentPage }) {
  const nPages = Math.ceil(users.length / usersPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= nPages; i++) {
    pageNumbers.push(i);
  }

  const pageSelectHandler = (num) => {
    if (num === 8) {
      throw new Error();
    }
    setCurrentPage(num);
  };

  const prevPageHandler = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const nextPageHandler = () => {
    if (currentPage < nPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <section className="page-controls">
        <nav className="page-nav">
          <ul className="page-nav__list">
            <li key="page-prev">
              <button disabled={currentPage === 1 ? true : false} onClick={() => prevPageHandler()}>Prev</button>
            </li>
            {pageNumbers.map((pageNumber, index) => {
              return (
                <li key={`page-${index}`}>
                  <button className={pageNumber === currentPage ? "active" : ""} onClick={() => pageSelectHandler(pageNumber)}>
                    {pageNumber}
                  </button>
                </li>
              );
            })}
            <li key="page-next">
              <button disabled={currentPage === (nPages) ? true : false} onClick={() => nextPageHandler()}>Next</button>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Pagination;
