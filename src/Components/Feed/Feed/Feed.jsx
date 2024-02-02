import React from "react";
import FeedFotos from "../Fotos/Fotos";
import FeedModal from "../Modal/Modal";

const Feed = ({ usuario }) => {
  const [fotoModal, setFotoModal] = React.useState(null);
  const [paginas, setPaginas] = React.useState([1]);
  const [infinito, setInfinito] = React.useState(true);

  React.useEffect(() => {
    if (infinito) {
      let esperar = false;
      function scrollInfinito() {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
  
        if (scroll > height * 0.75 && !esperar) {
          setPaginas((paginas) => [...paginas, paginas.length + 1]);
          esperar = true;
          setTimeout(() => {
            esperar = false;
          }, 500);
        }
      }
  
      window.addEventListener("wheel", scrollInfinito);
      window.addEventListener("scroll", scrollInfinito);
  
      return () => {
        window.removeEventListener("wheel", scrollInfinito);
        window.removeEventListener("scroll", scrollInfinito);
      };
    }
  }, [infinito]);

  return (
    <div>
      {fotoModal && <FeedModal foto={fotoModal} setFotoModal={setFotoModal} />}

      {paginas.map((pagina) => {
        return (
          <FeedFotos
            key={pagina}
            usuario={usuario}
            pagina={pagina}
            setFotoModal={setFotoModal}
            setInfinito={setInfinito}
          />
        );
      })}
    </div>
  );
};

export default Feed;
