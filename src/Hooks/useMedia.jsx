import React from "react";

const useMedia = (media) => {
  const [valor, setValor] = React.useState(null);

  React.useEffect(() => {
    function alterarValor() {
      const { matches } = window.matchMedia(media);
      setValor(matches);
    }

    alterarValor();
    window.addEventListener("resize", alterarValor);
    return () => window.removeEventListener("resize", alterarValor);
  }, [media]);

  return valor;
};

export default useMedia;
