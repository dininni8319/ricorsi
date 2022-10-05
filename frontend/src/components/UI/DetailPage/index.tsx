import { RicorsoProps, FasiListProps, Fasi } from "../../interfaces/interfaces";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useLayoutEffect, useState } from "react";
import Modal from "../Modal";
import { baseURL } from '../../Utilities/index'
import useFetch from '../../../Hooks/useFetch';
import Card from "../Card";
import { WrapperStyleComponent } from "../../Views/Home/style";
import useApiRequest from '../../state/useApiRequest';
import { memo } from "react";

const DetailPage = ( { slug, children }: RicorsoProps) => {

    return (
        <>
          {children}
        </>
    )   
}

export default memo(DetailPage);