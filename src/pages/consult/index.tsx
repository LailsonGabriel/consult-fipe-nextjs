import { GetServerSideProps } from "next";
import SearchList from "../../components/SearchList";
import { BrandsProps } from "../../interfaces/ModelAndBrand";
import { getBrands } from "../../services/api";

export const getServerSideProps: GetServerSideProps<BrandsProps> = async () => {
  const response = await getBrands();

  return {
    props: {
      brands: response,
    },
  };
};

export default function Consult({ brands }: BrandsProps) {
  return (
    <>
      <h1>Consulta de veículo</h1>
      <SearchList />
    </>
  );
}
