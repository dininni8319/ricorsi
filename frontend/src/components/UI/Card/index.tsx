import { ObjFormType, Fasi } from "../../interfaces/interfaces";
import { CardStyleComponent, CardHeaderStyle } from "./style";
import { baseURL } from "../../Utilities/index";
import useApiRequest from "../../state/useApiRequest";
import { useNavigate } from "react-router";

const Card = ({
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
    <CardStyleComponent className="card-style bg-base-100 m-2">
      <section className="p-6">{children}</section>
      <div className="btn-delete">
        <button
          onClick={(e) => handleDelete(e, taxunit.id)}
          className="bg-red-500 text-white outline-none cursor-pointer px-5 mr-1 py-2 font-semibold"
        >
          Cancella
        </button>
      </div>
      <CardHeaderStyle></CardHeaderStyle>
    </CardStyleComponent>
  );
};

export default Card;
