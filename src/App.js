import React, {useState} from 'react'

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

console.log(data);

  return (
    <div className="ms-main">
      <Header/>
      <main>
        <Editor data={data} setData={setData} />

      </main>
      <Footer />
    </div>
  );
}

export default App;
