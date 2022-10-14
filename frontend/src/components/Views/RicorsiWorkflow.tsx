import { formRicorsiLabels } from "../UI/FormComponents/defaultProps";
import { defaultRicorsiData } from "../UI/FormComponents/defaultData";
import {
  selectPropsTributi,
  selectPropsTipologiaAtto,
  selectPropsEsito,
} from "../UI/FormComponents/selectPropsTributi";
import useInput from "../../Hooks/useInput";
import { Input, SelectInput, TextArea, Form } from "../UI/index";
import { isTextarea, validate } from "../Utilities/index";
import { useParams } from "react-router";

const Workflow = () => {
  let { slug } = useParams();

  const { data, handleData } = useInput(defaultRicorsiData, slug);

  return (
    <div className="height-custom">
      <Form
        title="Avvia un Ricorso"
        createPath="crea_ricorso"
        navPath="ricorsi_detail"
        subMitBtn="Invio"
        data={data}
      >
        <>
          {formRicorsiLabels?.formArr.map((input, index) => {
            return isTextarea(input.id) ? (
              <TextArea
                handleData={handleData}
                key={index}
                value={slug && data && data[input.name as keyof object]}
                {...input}
              />
            ) : (
              <Input
                handleData={handleData}
                key={index}
                {...input}
                value={slug && data && data[input.name as keyof object]}
              />
            );
          })}

          <div className="md:flex">
            <SelectInput
              selectProps={selectPropsTributi}
              handleData={handleData}
            />
            <SelectInput
              selectProps={selectPropsTipologiaAtto}
              handleData={handleData}
            />
            <SelectInput
              selectProps={selectPropsEsito}
              handleData={handleData}
            />
          </div>
        </>
      </Form>
      {/* {errors && <span></span>} */}
    </div>
  );
};

export default Workflow;
