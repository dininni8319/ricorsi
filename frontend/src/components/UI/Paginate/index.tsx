import ReactPaginate from 'react-paginate';
import { PaginateStyleComponent } from "./style";
import {
    CartolinaType,
    ObjFormType,
    IRiscossione, 
    EnteType,
} from '../../interfaces/interfaces';

const Paginate = ({
    currentItems,
    pageCount,
    handlePageClick
}: {
    currentItems: CartolinaType[] | ObjFormType[] | IRiscossione[] | EnteType[];
    pageCount: number;
    handlePageClick: any;
}) => {
    return (
        <PaginateStyleComponent>
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
        </PaginateStyleComponent>
    );
};

export default Paginate;
