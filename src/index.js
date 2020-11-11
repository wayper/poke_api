import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react-lite";

import Header from '../src/components/Header';
import Main from '../src/components/Main/VMain';
import Footer from '../src/components/Footer';

const App = observer(() => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
