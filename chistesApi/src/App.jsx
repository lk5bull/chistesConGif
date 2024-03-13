import { useEffect , useState } from 'react'
import axios from 'axios'
import './style.css'


function App() {
  const [chisteingles , pregunta] = useState ([])
  const [respuesta, respuestaChiste] = useState ([])
  const [payaso , payasito] = useState ([])

  useEffect(() => {

    const obtenerDatos = async() =>{
      try {
        const parrafo = await axios.get("https://v2.jokeapi.dev/joke/Any?lang=es&format=txt");

        const parrafo2 = await axios.get("https://v2.jokeapi.dev/joke/Any?format=txt");

        const imagen =await axios.get("https://tenor.googleapis.com/v2/search?q=clown&key=AIzaSyArGknlQv4h_vjazq_CNql2kZkIdCfjgJw&client_key=my_test_app");

        pregunta(imagen.data.results);

        
        respuestaChiste(parrafo.data);
        payasito(imagen.data.results[Math.floor(Math.random() * 20)].media_formats.gif.url);
        
        
        


        
        
      } catch (error) {
        console.log(error);
        
      }

      

    }

    obtenerDatos();
   
  },[])

  console.log (respuesta);
  console.log(chisteingles);
  console.log(payaso);
  console.log(chisteingles);
 




  return (
    <>

      <h1>te cuento un chiste? </h1>

      <div>
      <img src={`${payaso}`} alt="payaso" width={300} height={300} />
      
        <h2>{respuesta}</h2>

        <button onClick={() => window.location.reload()}>Contate otro</button>
      </div>
    </>
  )
}

export default App
