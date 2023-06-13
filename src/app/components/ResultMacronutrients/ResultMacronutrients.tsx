import { Input } from "../Inputs";
import { Title } from "../Title";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useMacronutrients from "@/app/hooks/useMacronutrients";
import { useEffect } from "react";
import { Button } from "../Button";

type IFormInputs = {
  protein: string;
  carb: string;
  fat: string;
};

type IResultNutrientsProps = {
  object: string;
  resultMacro: {
    proteinGrams: number;
    carbGrams: number;
    fatGrams: number;
  };
  totalKcal: string;
};

const schema = yup.object().shape({
  protein: yup.string().required("Proteína é obrigatório"),
  carb: yup.string().required("Carbo é obrigatório"),
  fat: yup.string().required("Gordura é obrigatório"),
});

export const ResultMacronutrients = ({
  object,
  resultMacro,
  totalKcal,
}: IResultNutrientsProps) => {
  const { control, handleSubmit, setValue } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (resultMacro) {
      setValue("protein", resultMacro.proteinGrams.toFixed(2).toString() || "");
      setValue("carb", resultMacro.carbGrams.toFixed(2).toString() || "");
      setValue("fat", resultMacro.fatGrams.toFixed(2).toString() || "");
    }
  }, [resultMacro, setValue]);

  const handleSubmitForm = (data: IFormInputs) => {
    //fazer a requisição
    console.log(data, "data");
    if (!data.carb || !data.fat || !data.protein)
      return console.log("preencha todos os campos");
  };

  return (
    <form>
      <div>
        <Title title="Resultado dos macros" />
      </div>
      <div className="mb-4 text-md ">
        {object ? (
          <p>
            Seu total de Kcal para {object} é:{" "}
            <span className="text-green-600">{totalKcal}</span>
          </p>
        ) : (
          <p> Informe seu objetivo no campo de Informações pessoais</p>
        )}
      </div>
      <div className="w-full flex flex-row gap-4 ">
        <Controller
          name="protein"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              label="Proteína diaria(g)"
              onChange={onChange}
              value={value}
              InputType="number"
              placeholder={!value ? "150(g)" : ""}
            />
          )}
        />
        <Controller
          name="carb"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              label="Carbo diario(g)"
              onChange={onChange}
              value={value}
              InputType="number"
              placeholder={!value ? "300(g)" : ""}
            />
          )}
        />
        <Controller
          name="fat"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              label="Gordura diaria(g)"
              onChange={onChange}
              value={value}
              InputType="number"
              placeholder={!value ? "80(g)" : ""}
            />
          )}
        />
      </div>
      <div className="mt-4">
        <Button
          title="Salvar macros"
          onClick={handleSubmit(handleSubmitForm)}
        />
      </div>
    </form>
  );
};
