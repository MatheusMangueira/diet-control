import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "../Button";
import { Input } from "../Inputs";
import { Title } from "../Title";

type IFormInputs = {
  protein: number;
  carb: number;
  fat: number;
};

type IResultNutrientsProps = {
  object: string;
  resultMacro: IFormInputs;
  totalKcal: string;
};

const schema = yup.object().shape({
  protein: yup.number().required("Proteína é obrigatório"),
  carb: yup.number().required("Carbo é obrigatório"),
  fat: yup.number().required("Gordura é obrigatório"),
});

export const ResultMacronutrients = ({
  object,
  resultMacro,
  totalKcal,
}: IResultNutrientsProps) => {
  const { control, handleSubmit, setValue } = useForm<IFormInputs>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (resultMacro) {
      setValue("protein", Number(resultMacro.protein.toFixed(2)));
      setValue("carb", Number(resultMacro.carb.toFixed(2)));
      setValue("fat", Number(resultMacro.fat.toFixed(2)));
    }
  }, [resultMacro, setValue]);

  const handleSubmitForm = async (data: IFormInputs) => {
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
