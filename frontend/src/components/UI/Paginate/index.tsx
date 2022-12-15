import ReactPaginate from 'react-paginate';
import { CartolinaType } from '../../interfaces/interfaces';

const Paginate = ({
    currentItems,
    pageCount,
    handlePageClick
}: {
    currentItems: CartolinaType[];
    pageCount: number;
    handlePageClick: any;
}) => {
    return (
        <div className="d-flex justify-content-center align-items-end my-3">
            {currentItems && (
                <ReactPaginate
                    nextLabel="next >"
                    previousLabel="< previous"
                    onPageChange={handlePageClick}
                    breakLabel="..."
                    pageCount={pageCount}
                    pageRangeDisplayed={5}
                    containerClassName={'pagination'}
                    previousLinkClassName={'pagination__link'}
                    nextLinkClassName={'pagination__link'}
                    // pageRangeDisplayed={5}
                    disabledClassName={'pagination__link--disabled'}
                    activeClassName={'pagination__link--active'}
                />
            )}
        </div>
    );
};

export default Paginate;
