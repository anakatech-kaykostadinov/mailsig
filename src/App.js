import React, { useState } from 'react'

import Header from './components/Header';
import Footer from './components/Footer';
import Editor from './components/Editor';
// import Source from './components/Source';
import ThemePicker from './components/ThemePicker';
import Preview from './components/Preview';
// import Theme from './components/Theme';


function App() {
  const [data, setData] = useState({
    name: '',
    position: '',
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
      <ThemePicker selected={selected} setSelected={setSelected} />
      <main>
        <Editor data={data} setData={setData} />
        <Preview selected={selected}/>
      </main>
      {/* <Footer /> */}
    </div>
  );
}


export default App;
