import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function CustomForm({ onChange }) {
  const { register, watch } = useForm({
    defaultValues: {
      height: 180,
      weight: 80,
      build: "athletic",
    },
  });

  const values = watch();

  useEffect(() => {
    onChange(values);
  }, []);

  return (
    <div className="flex flex-col gap-4 p-6 rounded-2xl border border-gray-300 w-full">
      <h2 className="text-xl font-semibold mb-2">Body Details</h2>
      <label className="flex flex-col text-sm">
        Height (cm)
        <input
          type="number"
          {...register("height")}
          className="mt-1 border border-gray-300 p-2 rounded-lg outline-none "
        />
      </label>
      <label className="flex flex-col text-sm">
        Weight (kg)
        <input
          type="number"
          {...register("weight")}
          className="mt-1 border border-gray-300 p-2 rounded-lg outline-none"
        />
      </label>
      <label className="flex flex-col text-sm">
        Build
        <select
          {...register("build")}
          className="mt-1 border border-gray-300 p-2 rounded-lg outline-none"
        >
          <option value="lean">Lean</option>
          <option value="regular">Regular</option>
          <option value="athletic">Athletic</option>
          <option value="big">Big</option>
        </select>
      </label>
    </div>
  );
}
