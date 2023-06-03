import { Input } from "../Inputs";
import { Title } from "../Title";
import { useForm, Controller } from "react-hook-form";

type IFormInputs = {
  protein: string;
  carb: string;
  fat: string;
};

type IResultNutrientsProps = {
  object: string;
  data: any;
};

export const ResultMacronutrients = ({
  object,
  data,
}: IResultNutrientsProps) => {
  const { control, handleSubmit, setValue, watch } = useForm<IFormInputs>({});

  console.log(object, "object");

  const handleSubmitForm = (data: IFormInputs) => {
    //fazer a requisição
    if (!data.carb || !data.fat || !data.protein)
      return console.log("preencha todos os campos");
    console.log(data);
  };

  const handleInputChange = (name: keyof IFormInputs, value: string) => {
    setValue(name, value);
    handleSubmit(handleSubmitForm)();
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div>
        <Title title="Resultado dos macros" />
      </div>
      <div className="mb-4 text-md ">
        {object ? (
          <p>
            Seu total de Kcal para {object} é:{" "}
            <span className="text-green-600">{data}</span>
          </p>
        ) : (
          <p> Informe seu objetivo no campo de Informações pessoais</p>
        )}
      </div>
      <div className="w-full flex flex-row gap-4">
        <Controller
          name="protein"
          control={control}
          render={({ field: { value } }) => (
            <Input
              label="Proteína diaria(g)"
              onChange={(e) => handleInputChange("protein", e.target.value)}
              value={value || ""}
              InputType="number"
              placeholder={!value ? "150(g)" : ""}
            />
          )}
        />
        <Controller
          name="carb"
          control={control}
          render={({ field: { value } }) => (
            <Input
              label="Carbo diario(g)"
              onChange={(e) => handleInputChange("carb", e.target.value)}
              value={value || ""}
              InputType="number"
              placeholder={!value ? "300(g)" : ""}
            />
          )}
        />
        <Controller
          name="fat"
          control={control}
          render={({ field: { value } }) => (
            <Input
              label="Gordura diaria(g)"
              onChange={(e) => handleInputChange("fat", e.target.value)}
              value={value || ""}
              InputType="number"
              placeholder={!value ? "80(g)" : ""}
            />
          )}
        />
      </div>
    </form>
  );
};
