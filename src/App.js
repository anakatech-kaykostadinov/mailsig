import React, { useState } from 'react'

import Header from './components/Header';
import Footer from './components/Footer';
import Editor from './components/Editor';
import ThemePicker from './components/ThemePicker';
import ThemeNP1 from './components/ThemeNp1';
import ThemeNP2 from './components/ThemeNp2';


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
        {
          (()=> {
            switch (selected) {
              case 'nm':
                return <ThemeNP1 name={selected} data={data} />
              case 'np':
                return <ThemeNP2 name={selected} data={data} />
              default:
                break;
            }
          })()
        }
      </main>
      <Footer />
    </div>
  );
}


export default App;
