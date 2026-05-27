import Header from "@/components/header";
import TarjetaPelicula from "@/components/tarjetaPelicula";

export default function Home() {
  const PELICULAS = [
    {
      url: "https://substackcdn.com/image/fetch/$s_!xHyH!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1c174707-dbe3-4a5f-8b3b-7d0be75a95df_1800x1013.jpeg",
      title: "titanic la película",
      desc: "titanic es una película épica de drama y romance de 1997, escrita y dirigida por james cameron, que relata la historia de amor ficticia entre jack dawson (leonardo dicaprio) y rose dewitt bukater (kate winslet) a bordo del rms titanic durante su viaje inaugural en 1912.",
    },
    {
      url: "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/thumbs/e6950bd2-a735-4c77-882d-eb052d7b1516/d_360_620/portada_shrek-un-ogro-diferente_editorial-planeta-s-a_201504271212.webp",
      title: "shrek",
      desc: "shrek es una película animada estadounidense de comedia y fantasía de 2001, basada libremente en el libro infantil ilustrado de 1990, shrek!, de william steig.",
    },
    {
      url: "https://m.media-amazon.com/images/I/61SCfJkXkrL._AC_.jpg",
      title: "el señor de los anillos",
      desc: "el señor de los anillos (título original en inglés: the lord of the rings) es una novela de fantasía épica escrita por el filólogo y escritor británico j. r. r. tolkien",
    },
    {
      url: "https://lumiere-a.akamaihd.net/v1/images/zootopia_7a25da70.jpeg?region=0,0,1200,675&width=960",
      title: "zootopia",
      desc: "zootopia (zootrópolis en algunos países de europa) es una película de comedia animada estadounidense de amigos policías de 2016 producida por walt disney animation studios. ",
    },
  ];

  return (
    <div>
      <Header />

      <main className="app">
        {PELICULAS.map((item, key) => {
          return (
            <TarjetaPelicula
              key={key}
              url={item.url}
              titulo={item.title}
              descripcion={item.desc}
            />
          );
        })}
      </main>
    </div>
  );
}
