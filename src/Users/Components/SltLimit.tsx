const SltLimit = ({ total }: { total: number }) => {
  return (
    <>
      <p>
        Mostrar{" "}
        <select
          name="Limit"
          id="Limit"
          title="Resultados por página"
          className=" bg-inherit border-none rounded-lg"
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
