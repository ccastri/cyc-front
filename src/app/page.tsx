'use client'

import DocumentosAfiliados from './_components/Test3';
import TuComponentePrincipal from './_components/Test3';
// import DocumentosAfiliados from './_components/SelectDocuments';
import { Provider } from 'react-redux';
import { store } from '../../redux/store'; // Importa tu store aquí
const Page = () => {


  return (
    <main>
      {/* <Home /> */}
    <Provider store={store}>
      {/* Resto de tu aplicación */}
      <TuComponentePrincipal />
    </Provider>
    </main>
  );
};

export default Page;
