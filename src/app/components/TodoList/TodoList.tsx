"use client";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../Button";
import { Input } from "../Inputs";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type ITodoListProps = {
  food: string;
  quantity: number;
  carb: number;
  prot: number;
  fat: number;
  foodCheck?: string;
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
});

export const TodoList = ({ item }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ITodoListProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      food: "",
      quantity: 0,
      carb: 0,
      prot: 0,
      fat: 0,
      foodCheck: "",
    },
  });
  const [foods, setFoods] = useState<ITodoListProps[]>([]);

  const handleAddFood = (data: ITodoListProps) => {
    setFoods([...foods, data]);
  };

  const handleDeleteFood = (index: number) => {
    const newFoods = [...foods];
    newFoods.splice(index, 1);
    setFoods(newFoods);
  };


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
          {foods.map((item, index) => (
            <div
              key={item.food}
              className="p-2 bg-slate-50 rounded-lg border-l-4 border-[#1749] flex flex-col gap-2 justify-between "
            >
              <div className="flex flex-col gap-2">
                <div className="flex gap-6 w-full">
                  <Controller
                    name="foodCheck"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <input
                        onChange={onChange}
                        value={value}
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
                onClick={() => handleDeleteFood(index)}
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
