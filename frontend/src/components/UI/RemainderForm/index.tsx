import { Input, SelectInput } from "../";
import { baseURL } from "../../Utilities/index";
import { selectTasks } from "../FormComponents/selectPropsTributi";
import { defaultRemainderData } from "../FormComponents/defaultData";
import useInput from "../../../Hooks/useInput";
import { RemainderStyleComponent } from "./style";
import { useNavigate } from "react-router";

const RemainderForm = ({ slug }: { slug?: string }) => {
  const navigate = useNavigate();
  const { data, handleData } = useInput(defaultRemainderData);

  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(data);

    fetch(`${baseURL}/api/cienneffe/taskrimender/${slug}}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          navigate(`/ricorsi_detail/${slug}`);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <RemainderStyleComponent>
      <form className="p-5 bg-white mt-3 task-remainer" onSubmit={HandleSubmit}>
        <section className="mb-3 flex flex-col mx-3">
          <h5 className="font-bold">Invia una notifica</h5>
          <div className="">
            <Input
              type="date"
              label="Scadenza del Compito"
              name="scadenza_del_compito"
              handleData={handleData}
            />
            <Input
              type="text"
              label="Descrizione Compito"
              name="descrizione_compito"
              handleData={handleData}
            />
          </div>
          <div className="md:flex md:flex-col">
            <SelectInput selectProps={selectTasks} handleData={handleData} />
            <button className="btn-send border-solid bg-orange-500 text-white mt-5 py-2 w-full">
              Inserisci
            </button>
          </div>
        </section>
      </form>
      <div className="p-5 mt-2 bg-white ml-5 ">
        {/* <h6 className="font-bold">Scadenza impostata:</h6> */}
        {/* @foreach ($tasks as $task)
                  <p> {{$task->scadenza_del_compito}} </p>
              @endforeach */}
        <h6 className="font-bold">Descrizione del compito:</h6>
        {/* @foreach ($tasks as $task)
                {/* <p> {{$task->descrizione_compito}} </p> */}
        {/* @endforeach */}
      </div>
    </RemainderStyleComponent>
  );
};

export default RemainderForm;
