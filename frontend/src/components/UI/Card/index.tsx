import { ObjFormType, Fasi } from "../../interfaces/interfaces";
import { CardStyleComponent, CardHeaderStyle } from "./style";
import { baseURL } from "../../Utilities/index";
import useApiRequest from "../../state/useApiRequest";
import { useNavigate } from "react-router";
import { memo } from "react";
import { ButtonDelete } from "../index";

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
  const [{ status, response }, makeRequest] = useApiRequest(
    `${baseURL}/api/cienneffe/${path}/${taxunit.id}`,
    {
      verb: "delete",
    }
  );

  const navigate = useNavigate();
  const handleDelete = (e: any, id?: number | string) => {
    e.preventDefault();

    let filteredData = current?.filter((el: any) => el.id !== id);
    setCurrent(() => [...filteredData]);
    makeRequest();
    // navigate('/')
  };

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
