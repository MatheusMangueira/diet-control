"use client";

import { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import * as yup from "yup";
import { Button } from "../Button";
import { Input } from "../Inputs";

import { yupResolver } from "@hookform/resolvers/yup";
import useLocalStorage from "@/app/hooks/useLocalStorage";

type Form = {
  food: string;
  quantity: number;
  carb: number;
  prot: number;
  fat: number;
  foodCheck: boolean;
};

type OptionalForm = {
  [K in keyof Form]?: Form[K]
}

type ITodoListProps = {
  [item: number]: OptionalForm[];
};

type Props = {
  item: number;
};

const schema = yup.object().shape({
  food: yup.string().required("Campo obrigatório"),
  quantity: yup.number().required("Campo obrigatório"),
  carb: yup.number().required("Campo obrigatório"),
  prot: yup.number().required("Campo obrigatório"),
  fat: yup.number().required("Campo obrigatório"),
  foodCheck: yup.boolean().required("Campo obrigatório"),
});

const defaultValues = {}

export const TodoList = ({ item }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(schema),
    defaultValues: {
      food: "",
      quantity: 0,
      carb: 0,
      prot: 0,
      fat: 0,
      foodCheck: false
    },
  });

  const [foods, setFoods] = useState<ITodoListProps>({
    [item]: [defaultValues],
  });

  useEffect(() => {
    const todoFood = localStorage.getItem("todoFood") as string
    const food = JSON.parse(todoFood)
    
    const initialFood = {
      [item]: [defaultValues]
    }
    
    setFoods(food || initialFood)

    if (!food) {
      localStorage.setItem("todoFood", JSON.stringify(initialFood))
      return
    }
    
    if (!food[item]) {
      const newFood = {
        ...food,
        [item]: [defaultValues]
      } 
      
      localStorage.setItem('todoFood', JSON.stringify(newFood))
      return
    } 

  }, [])

  const handleAddFood = (data: Form) => {
    const todoFood = localStorage.getItem('todoFood') as string
    const foods = JSON.parse(todoFood)

    const newFood = { ...foods, [item]: foods[item].concat(data) }
    const food = { ...foods, ...newFood}

    setFoods(food)
    localStorage.setItem('todoFood', JSON.stringify(food));
  };

  // const handleDeleteFood = (index: number) => {
  //   const newFoods = [...foods];
  //   newFoods.splice(index, 1);
  //   setFoods(newFoods);
  // };

  // const handleSelectedFood = (id: string) => {
  //   const index = foods.findIndex((item) => item.id === id);
  //   if (index !== -1) {
  //     setFoods((prevFoods) => {
  //       const newFoods = [...prevFoods];
  //       newFoods[index].foodCheck = !newFoods[index].foodCheck;
  //       return newFoods;
  //     });
  //   }
  // };

  return (
    <div className="h-auto w-[300px] bg-gray-300 rounded-lg p-2 flex flex-col items-center gap-10 overflow-y-scroll">
      <h1> Refeição {item}</h1>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-md font-medium">Insira um alimento:</p>
          <div>
            <Controller
              name="food"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  errors={!!errors.food?.message}
                  onChange={onChange}
                  value={value}
                  placeholder="Alimento"
                  InputType="text"
                />
              )}
            />

            <Controller
              name="quantity"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  errors={!!errors.quantity?.message}
                  onChange={onChange}
                  value={value}
                  placeholder="Quantidade"
                  InputType="number"
                />
              )}
            />

            <Controller
              name="carb"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  errors={!!errors.carb?.message}
                  onChange={onChange}
                  value={value}
                  placeholder="Carb"
                  InputType="number"
                />
              )}
            />

            <Controller
              name="prot"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  errors={!!errors.prot?.message}
                  onChange={onChange}
                  value={value}
                  placeholder="Prot"
                  InputType="number"
                />
              )}
            />

            <Controller
              name="fat"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  errors={!!errors.fat?.message}
                  onChange={onChange}
                  value={value}
                  placeholder="Gord"
                  InputType="number"
                />
              )}
            />
          </div>
          <Button
            onClick={handleSubmit(handleAddFood)}
            title="salvar alimento"
          />
        </div>
        <div className="flex flex-col gap-3">
          {foods[item]?.length &&
            foods[item].map((item, index) => (
              <div
                key={index}
                className="p-2 bg-slate-50 rounded-lg border-l-4 border-[#1749] flex flex-col gap-2 justify-between "
              >
                <div className="flex flex-col gap-2">
                  <div className="flex gap-6 w-full">
                    <Controller
                      name="foodCheck"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <input
                          onChange={(e) => onChange(e.target.checked)}
                          checked={value}
                          className="cursor-pointer w-4"
                          type="checkbox"
                        />
                      )}
                    />
                    <p className="font-medium">{item.food}</p>
                  </div>
                  <div className="text-sm">
                    <p>Quantidade:{item.quantity}</p>
                    <p>Cab: {item.carb}g</p>
                    <p>Prot: {item.prot}g</p>
                    <p>Gord: {item.fat}g</p>
                  </div>
                </div>
                <button
                  onClick={() => {}}
                  className="w-full bg-green-500 rounded-lg text-white hover:bg-red-400 transition-all "
                >
                  Salvar
                </button>
                <button
                  // onClick={() => handleDeleteFood(index)}
                  className="w-full bg-red-500 rounded-lg text-white hover:bg-red-400 transition-all "
                >
                  Excluir
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
