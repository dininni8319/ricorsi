import { RiconciliazioneFormData } from "../../UI/FormComponents/defaultProps";
import { defaultRicorsiData } from "../../UI/FormComponents/defaultData";
import { selectMeseRendicondazione } from "../../UI/FormComponents/selectPropsTributi";
import useInput from "../../../Hooks/useInput";
import { Input, SelectInput, Form } from "../../UI/index";
import { useParams } from "react-router";

const RiconciliazioneForm = () => {
  let { slug } = useParams();

  const { data, handleData } = useInput(defaultRicorsiData, slug);

  return (
    <div className="height-custom">
      <Form
        title="Avvia un Rendicondazione"
        createPath="crea_riconciliazione"
        navPath="riconciliazione_detail"
        subMitBtn="Invio"
        data={data}
      >
        <>
          {RiconciliazioneFormData?.formArr.map((input, index) => {
            return (
              <Input
                handleData={handleData}
                key={index}
                {...input}
                value={slug && data && data[input.name as keyof object]}
              />
          )})}

          <div className="md:flex">
            <SelectInput
              selectProps={selectMeseRendicondazione}
              handleData={handleData}
            /> 
          </div>
        </>
      </Form>
      {/* {errors && <span></span>} */}
    </div>
  );
};

export default RiconciliazioneForm;