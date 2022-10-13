import { useState, ChangeEvent, useEffect } from "react";
import { validate, baseURL } from "../components/Utilities/index";
import useApiRequest from "../components/state/useApiRequest";
import { ObjFormType } from "../components/interfaces/interfaces";

export default function useInput(
  initialSate: { [key: string]: string },
  slug?: number | string
) {
  const [data, setData] = useState(initialSate);

  const handleData = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    index?: number
  ) => {
    let { name, value } = e.target;

    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  return {
    data,
    handleData,
  };
}
