"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "../Button";
import { Input } from "../Inputs";
import { Title } from "../Title";
import useLocalStorage from "@/app/hooks/useLocalStorage";
import { useRouter } from "next/navigation";

type IFormInputs = {
  protein: number;
  carb: number;
  fat: number;
};

type IResultNutrientsProps = {
  object: {
    name: string;
    meals: number;
    objective: string;
  };
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

  const navigate = useRouter();

  // const getLocalStorageMacros = useLocalStorage("macros", {}).getLocalStorage();

  const [storedValue, setStoredValue] = useLocalStorage("macros", {
    macros: {
      protein: 0,
      carb: 0,
      fat: 0,
    },
    object: {
      name: "",
      objective: "",
    },
  });

  const [todos, setTodos] = useLocalStorage("todos", {
    object: {
      meals: 0,

    }
  })

  const [name, setName] = useLocalStorage("name", {
    object: {
      name: "",
    },
  });

  useEffect(() => {
    if (resultMacro) {
      setValue("protein", Number(resultMacro.protein.toFixed(2)));
      setValue("carb", Number(resultMacro.carb.toFixed(2)));
      setValue("fat", Number(resultMacro.fat.toFixed(2)));
    }
  }, [resultMacro, setValue]);

  const handleSubmitForm = async (macros: IFormInputs) => {
    if (!macros.carb || !macros.fat || !macros.protein)
      return console.log("preencha todos os campos");

    try {
      setStoredValue({ macros, object });
      setTodos({ object: { meals: object.meals } });
      setName({ object: { name: object.name } });
      navigate.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  // useLocalStorage("macros", macros).setLocalStorage(macros);

  return (
    <form>
      <div>
        <Title title="Resultado dos macros" />
      </div>
      <div className="mb-4 text-md ">
        {object ? (
          <p>
            Seu total de Kcal para {object.objective} é:{" "}
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
