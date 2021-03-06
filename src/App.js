import React, { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Editor from './components/Editor';
import ThemePicker from './components/ThemePicker';
import ThemeNP1 from './components/ThemeNp1';
import ThemeNP2 from './components/ThemeNp2';
import Alert from './components/Alert';


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
        icon: 'https://github.com/anakatech-kaykostadinov/mailsig/blob/main/src/images/filled_icons/facebook%20(1).png?raw=true'
      },
      ig: {
        link: '',
        icon: 'https://github.com/anakatech-kaykostadinov/mailsig/blob/main/src/images/filled_icons/instagram%20(1).png?raw=true'
      },
      linkedin: {
        link: '',
        icon: 'https://github.com/anakatech-kaykostadinov/mailsig/blob/main/src/images/filled_icons/linkedin%20(1).png?raw=true'
      },
      twitter: {
        link: '',
        icon: 'https://github.com/anakatech-kaykostadinov/mailsig/blob/main/src/images/filled_icons/twitter%20(1).png?raw=true'
      },
    }
  })


  const [selected, setSelected] = useState('nm')

  function copyToClipboard() {
    const table = document.getElementById('table-content');
    let range = document.createRange();
    range.selectNodeContents(table);
    let select = window.getSelection();
    select.removeAllRanges();
    select.addRange(range);
    document.execCommand('copy');
    select.removeRange(range);

  };

  return (
    <div className="ms-main">
      <Header />
      <ThemePicker selected={selected} setSelected={setSelected} />
      <main>
        <Editor data={data} setData={setData} />
        <section className="preview-col">
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
          <button className="copy-btn" onClick={copyToClipboard}>
            <i className="far fa-copy"></i> Copy Signature
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}


export default App;
