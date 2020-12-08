import React, { useState } from 'react'

import Header from './components/Header';
import Footer from './components/Footer';
import Editor from './components/Editor';
import Source from './components/Source';
import ThemePicker from './components/ThemePicker';
import Theme from './components/Theme';


function App() {
  const [data, setData] = useState({
    name: '',
    title: '',
    phone: '',
    fax: '',
    website: '',
    address: '',
    social: {
      fb: '',
      ig: '',
      linkedin: '',
    }
  })

const [selected, setSelected] = useState('')



  return (
    <div className="ms-main">
      <Header />
      <main>
        <Editor data={data} setData={setData} />
        <ThemePicker selected={selected} setSelected={setSelected} />
      </main>
      <Footer />
    </div>
  );
}


export default App;
