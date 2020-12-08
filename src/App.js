import Header from './components/Header';
import Footer from './components/Footer';
import Editor from './components/Editor';
import Source from './components/Source';
import ThemePicker from './components/ThemePicker';
import Theme from './components/Theme';


function App() {
  return (
    <div className="ms-main">
      <Header/>
      <main>
        <Editor />

      </main>
      <Footer />
    </div>
  );
}

export default App;
