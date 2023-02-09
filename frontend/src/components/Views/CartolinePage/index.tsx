import { useState, useEffect, useCallback, useContext } from 'react';
import { Card, Loader3, Search, ImportCsv, Paginate } from '../../UI/index';
import { WrapperStyleComponent } from '../Home/style';
import { ConfigContext } from '../../../Contexts/Config';
import DetailsCard from './detailsCard';
import SearchedDetails from './searchedDetails';
import useHttp from '../../../Hooks/useHttp';
import useSearch from '../../../Hooks/useSearch';
import { perPage } from '../../Utilities/index';
import { CartolinaType } from '../../interfaces/interfaces';
const DoneImg = require('../../../assets/icons/icon-done.png');

const CartolinePage = () => {
    const {
        api_urls: { backend }
    } = useContext(ConfigContext);
    const [cartoline, setCartoline] = useState<CartolinaType[]>([]);
    const [searchedCartoline, setSearchedCartoline] = useState<any>([]);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9;
    const { pageCount, currentItems } = perPage(
        itemOffset,
        itemsPerPage,
        cartoline
    );

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % cartoline.length;
        setItemOffset(newOffset);
    };

    const handleCartoline = useCallback(
        ({ data }: { data: CartolinaType[] }) => {
            setCartoline(() => [...data]);
        },
        []
    );

    const {
        isLoading,
        error,
        sendRequest: fetchCartoline
    } = useHttp(handleCartoline);
    const {
        searchedTerm,
        selectedItem,
        cardId,
        handleSelectedItem,
        handleChange,
        handleResetSearch,
        handleNavigate
    } = useSearch(setSearchedCartoline);

    useEffect(() => {
        fetchCartoline({ url: `/api/cartoline` });
    }, [fetchCartoline]);

    useEffect(() => {
        if (searchedTerm.length > 3) {
            fetch(`/api/cartolina/search=${searchedTerm}`)
                .then((response) => response.json())
                .then((data) => setSearchedCartoline(data?.cartoline))
                .catch((error: unknown) => {
                    console.log(error);
                });
        }
    }, [searchedTerm]);

    return (
        <div className="height-custom flex flex-col items-center">
            <>
                <Search
                    title="Cartolina"
                    handleChange={handleChange}
                    handleResetSearch={handleResetSearch}
                >
                    {searchedCartoline
                        ?.slice(0, 6)
                        .map(
                            (
                                searched: { [key: string]: string },
                                id: number
                            ) => {
                                return (
                                    <SearchedDetails
                                        // key={id}
                                        selectedItem={selectedItem}
                                        searched={searched}
                                        cardId={cardId}
                                        handleSelectedItem={handleSelectedItem}
                                        handleNavigate={handleNavigate}
                                    />
                                );
                            }
                        )}
                </Search>
                <h1>Cartoline</h1>
                <ImportCsv />
                <Paginate
                    currentItems={currentItems}
                    pageCount={pageCount}
                    handlePageClick={handlePageClick}
                />
                <div className='flex justify-center'>
                  {currentItems.length === 0 && !isLoading && <img src={DoneImg} alt="done image"  width='200px' height='200px'/>}
                </div>
            </>
            <WrapperStyleComponent>
                <>
                    {currentItems ? (
                        currentItems?.map((cartolina: any, id: number) => {
                            return (
                                <>
                                    <Card
                                        taxunit={cartolina}
                                        id={id}
                                        path="cartolina/delete"
                                        current={cartoline}
                                        setCurrent={setCartoline}
                                    >
                                        <DetailsCard cartolina={cartolina} />
                                    </Card>
                                </>
                            );
                        })
                    ) : (
                        <Loader3 />
                    )}
                </>
            </WrapperStyleComponent>
        </div>
    );
};

export default CartolinePage;
