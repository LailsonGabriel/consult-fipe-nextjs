import { GetServerSideProps } from "next";
import SearchList from "../../components/SearchList";
import { BrandsProps } from "../../interfaces/ModelAndBrand";
import { getBrands } from "../../services/api";
import { useState } from "react";

export const getServerSideProps: GetServerSideProps<BrandsProps> = async () => {
  const response = await getBrands();

  return {
    props: {
      brands: response,
    },
  };
};

export default function Consult({ brands }: BrandsProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState("");

  console.log(selectedOption);

  return (
    <>
      <h1>Consulta de veículo</h1>
      <SearchList
        options={brands}
        onChange={(item: string) => setSelectedOption(item)}
        selected={selectedOption}
        placeholder={"Digite ou procure a marca"}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}
