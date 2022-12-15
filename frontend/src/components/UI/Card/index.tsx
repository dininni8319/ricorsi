import { ObjFormType, Fasi } from "../../interfaces/interfaces";
import { CardStyleComponent, CardHeaderStyle } from "./style";
import { baseURL } from "../../Utilities/index";
import { memo } from "react";
import { ButtonDelete } from "../index";
import useHttp from "../../../Hooks/useHttp";

const Card = ({
  id,
  taxunit,
  path,
  children,
  current,
  setCurrent,
}: {
  taxunit: ObjFormType | Fasi;
  path: string;
  children?: JSX.Element;
  current?: any;
  setCurrent?: any;
  id: number;
}) => {

  const handleDelete = (e: any, id?: number | string) => {
    e.preventDefault();

    let filteredData = current?.filter((el: any) => el.id !== id);
    setCurrent(() => [...filteredData]);
    deleteCard({
      url:`${baseURL}/api/cienneffe/${path}/${taxunit.id}`, 
      method: 'DELETE',
      headers: {"Content-Type": "application/json"},
    });
  };
  const {isLoading, error, sendRequest: deleteCard } = useHttp(handleDelete);

  return (
    <CardStyleComponent className="card-style bg-base-100 m-1" key={id}>
      <section className="p-3">{children}</section>
      <div className="btn-delete">
        <ButtonDelete 
          handleDelete={handleDelete}
          id={taxunit.id}
        />
      </div>
      <CardHeaderStyle></CardHeaderStyle>
    </CardStyleComponent>
  );
};

export default memo(Card);
