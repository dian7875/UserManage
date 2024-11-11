import { Dispatch, SetStateAction } from "react";

const SltLimit = ({ total, setLimit }: { total: number, setLimit:Dispatch<SetStateAction<number>> }) => {
  return (
    <>
      <p>
        Mostrar{" "}
        <select
          name="Limit"
          id="Limit"
          title="Resultados por página"
          className=" bg-inherit border-none rounded-lg"
          onChange={(event)=>setLimit(Number(event.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>{" "}
        registros por Pagina de {total} totales
      </p>
    </>
  );
};

export default SltLimit;
