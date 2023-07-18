"use client";
import useMacronutrients from "@/app/hooks/useMacronutrients";
import useTMBCalculation from "@/app/hooks/useTMBCalculation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "../Button";
import { Input, InputSelect } from "../Inputs";
import { ResultMacronutrients } from "../ResultMacronutrients";
import { Title } from "../Title/Title";

export interface IFormInputs {
  name: string;
  objective: string;
  sex: string;
  height: string;
  Weight: string;
  age: string;
  activity: string;
  meals: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório").min(3),
  objective: yup.string().required("Objetivo é obrigatório"),
  sex: yup.string().required("Sexo é obrigatório"),
  height: yup.string().required("Altura é obrigatório"),
  Weight: yup.string().required("Peso é obrigatório"),
  age: yup.string().required("Idade é obrigatório"),
  activity: yup.string().required("Nivel de atividade é obrigatório"),
  meals: yup.string().required("Refeições no dia é obrigatório"),
});

export const PersonInformation = () => {
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      objective: "Emagrecer",
      sex: "Masculino",
      activity: "Sedentário",
      meals: "3 refeições no dia",
      height: "",
      Weight: "",
      age: "",
      name: "",
    },
  });

  const [objectPerson, setobjectPerson] = useState<string>("");
  const { result, calculateTMB } = useTMBCalculation();
  const { calculateMacronutrients, resultMacros } = useMacronutrients();

  useEffect(() => {
    if (result) {
      calculateMacronutrients({
        totalCalories: result,
      });
    }
  }, [result]);

  const handleSubmitForm = (data: IFormInputs) => {
    setobjectPerson(data.objective);
    calculateTMB(data);
  };

  return (
    <div>
      <div>
        <Title title={"Informações pessoais"} />
      </div>
      <div className="grid md:grid-rows-2 md:grid-cols-3 gap-4">
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              errors={!!errors.name?.message}
              label="Nome"
              onChange={onChange}
              value={value}
              placeholder="Name"
            />
          )}
        />
        <Controller
          name="objective"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputSelect
              errors={!!errors.objective?.message}
              value={value}
              onChange={onChange}
              placeholder="Objetivo"
            >
              <option value="Emagrecer">Emagrecer</option>
              <option value="Manter peso">Manter peso</option>
              <option value="Ganho de peso">Ganho de peso</option>
            </InputSelect>
          )}
        />
        <Controller
          name="sex"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputSelect
              errors={!!errors.sex?.message}
              onChange={onChange}
              value={value}
              placeholder="Sexo"
            >
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </InputSelect>
          )}
        />

        <div className="flex flex-row gap-4">
          <Controller
            name="height"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                errors={!!errors.height?.message}
                label="Altura(cm)"
                InputType="number"
                pattern="[0-9]*"
                min="0"
                onChange={onChange}
                value={value}
                placeholder="Altura(cm)"
              />
            )}
          />
          <Controller
            name="Weight"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                errors={!!errors.Weight?.message}
                label="Peso(kg)"
                InputType="number"
                min="0"
                onChange={onChange}
                value={value}
                placeholder="Peso(kg)"
              />
            )}
          />
          <Controller
            name="age"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                errors={!!errors.age?.message}
                label="Idade(anos)"
                InputType="number"
                onChange={onChange}
                value={value}
                placeholder="Idade"
              />
            )}
          />
        </div>

        <Controller
          name="activity"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputSelect
              errors={!!errors.activity?.message}
              onChange={onChange}
              value={value}
              placeholder="Nivel de atividade"
            >
              <option value="Sedentário">Sedentário</option>
              <option value="Levemente ativo">Levemente ativo</option>
              <option value="Moderadamente ativo">Moderadamente ativo</option>
              <option value="Muito ativo">Muito ativo</option>
              <option value="Extremamente ativo">Extremamente ativo</option>
            </InputSelect>
          )}
        />

        <Controller
          name="meals"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputSelect
              errors={!!errors.meals?.message}
              onChange={onChange}
              value={value}
              placeholder="Refeições no dia"
            >
              <option value="3 reifeições no dia">3 reifeições no dia</option>
              <option value="4 reifeições no dia">4 reifeições no dia</option>
              <option value="5 reifeições no dia">5 reifeições no dia</option>
              <option value="6 reifeições no dia">6 reifeições no dia</option>
            </InputSelect>
          )}
        />
      </div>
      <div className="my-5">
        <Button
          disabled={
            !!errors.name?.message ||
            !!errors.height?.message ||
            !!errors.Weight?.message ||
            !!errors.age?.message
          }
          onClick={handleSubmit(handleSubmitForm)}
          title="Calcular"
        />
        calcular o gasto calorico grafico de pizza com os macronutrientes um
        todoList para colocar a dieta e um grafico para mostrar o progresso do
        dia e oq falta
      </div>

      {result && (
        <div className="">
          <ResultMacronutrients
            totalKcal={result}
            resultMacro={resultMacros}
            object={objectPerson}
          />
        </div>
      )}
    </div>
  );
};
