import { RicorsoProps, FasiListProps, Fasi } from "../../interfaces/interfaces";
import { memo } from "react";

const DetailPage = ( { slug, children }: RicorsoProps) => {

    return (
        <>
          {children}
        </>
    )   
}

export default memo(DetailPage);