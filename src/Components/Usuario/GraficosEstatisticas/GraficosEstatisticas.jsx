import React from "react";
import Head from "../../Helpers/Head/Head";
import style from "./GraficosEstatisticas.module.css";
import { VictoryPie, VictoryBar, VictoryChart } from "victory";

const GraficosEstatisticas = ({ dados }) => {
  const [grafico, setGrafico] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const dadosParaGrafico = dados.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    setTotal(
      dados
        .map(({ acessos }) => Number(acessos))
        .reduce((anterior, proximo) => anterior + proximo, 0)
    );

    setGrafico(dadosParaGrafico);
  }, [dados]);

  return (
    <section className={`${style.grafico} animacaoEsquerda`}>
      <Head titulo="Gráficos" />
      <div className={`${style.total} ${style.item}`}>
        <p>Acessos: {total}</p>
      </div>

      <div className={style.item}>
        <VictoryPie
          data={grafico}
          padding={{
            top: 20,
            bottom: 20,
            left: 80,
            right: 80,
          }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>

      <div className={style.item}>
        <VictoryChart>
          <VictoryBar alignment="start" data={grafico} />
        </VictoryChart>
      </div>
    </section>
  );
};

export default GraficosEstatisticas;
