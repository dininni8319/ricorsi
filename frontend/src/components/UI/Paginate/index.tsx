import ReactPaginate from 'react-paginate';
import {
    CartolinaType,
    ObjFormType,
    IRiscossione
} from '../../interfaces/interfaces';

const Paginate = ({
    currentItems,
    pageCount,
    handlePageClick
}: {
    currentItems: CartolinaType[] | ObjFormType[] | IRiscossione[];
    pageCount: number;
    handlePageClick: any;
}) => {
    return (
        <div className="my-3 flex">
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
                    disabledClassName={'pagination__link--disabled'}
                    activeClassName={'pagination__link--active'}
                />
            )}
        </div>
    );
};

export default Paginate;
