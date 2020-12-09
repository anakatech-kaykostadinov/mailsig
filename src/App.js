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
    title: '',
    phone: '',
    fax: '',
    website: '',
    address: '',
    social: {
        fb: {
          link: '',
          icon: 'fab fa-facebook',
        },
        ig: {
          link: '',
          icon: 'fab fa-instagram',
        },
        linkedin: {
          link: '',
          icon: 'fab fa-linkedin-in',
        },
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
        <ThemePicker selected={selected} setSelected={setSelected} />
        <Theme name={selected} data={data} />
      </main>
      {/* <Footer /> */}
    </div>
  );
}


export default App;
