"use client";
import { useState } from "react";
import { Button } from "../Button";
import { InputSelect, Input } from "../Inputs";
import { ResultMacronutrients } from "../ResultMacronutrients";
import { Title } from "../Title/Title";
import { useForm, Controller } from "react-hook-form";
import useTMBCalculation from "@/app/hooks/useTMBCalculation";

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

export const PersonInformation = () => {
  const { control, handleSubmit } = useForm<IFormInputs>({
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
            <InputSelect onChange={onChange} value={value} placeholder="Sexo">
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
        <Button onClick={handleSubmit(handleSubmitForm)} title="Calcular" />
      </div>
      {result && (
        <div className="">
          <ResultMacronutrients data={result} object={objectPerson} />
        </div>
      )}
    </div>
  );
};
