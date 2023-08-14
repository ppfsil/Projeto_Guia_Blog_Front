import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';



function Home() {
    return (
        <>
        <div className="bg-indigo-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Expresse aqui seus pensamentos e opiniões</p>
  
              <div className="flex justify-around gap-4">
              <ModalPostagem />
              <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
            </div>
            </div>
  
            <div className="flex justify-center ">
              {/* <img src='https://i.pinimg.com/564x/1b/df/d2/1bdfd2e818502a5d193e45f9aec9115c.jpg' alt="" className='w-2/3' /> */}
      
            </div>
          </div>
        </div>
        <ListaPostagens />
      </>
    );
}

export default Home;