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
        icon: 'https://lh3.googleusercontent.com/VzkzAPL-eflEPSSDKB1hnq-ZwPgqHOtLUos2GtXolQXMT4S4UnSXsAzwKmIq_mqBx7oaWc-hpIhAU3YKRVPPQqh-pqbxnvI-PLUy4RRPltDz3vboXO546ljyyhGu3cZOOhA6SO1L6250Z2cdCbPqPEB-PrzbZ2zun8ACK8zjL6X6dBi4SktZ-O_pMx6Jq3pACHVq-Yx3nZpHkWbOm12AKEPuhziqjL31OM4nWqWGXkJjCb2hjiEvOvqVGEewUo9ABRvWHYaDvTEnj3t5gxwqu5UYEh6umiSIgnxXOt0p-5cvNA7kSfl2tHlSiZyqVgFG2s7sZvItdKEm9PpptWg53DaKAVO7_2iH0akRvJ-owJfoNiKdfFCRPBwEYcZfYkQUI16iyQLpiN7OFQXAN48YwHA-JkCLS8qUADdrkKB7OxAqN7AUudfrjVo6JwWF-CLhER0FGKOgDgi9ljmGMBNf3VGw1gESPv02YdodnVWu21UhYKTO6S5wsa8P_wmq3Wf0po4BiIx0CPDbJEfFItiCU6K6U7Tw1gV0fOWx50qLv-4_0EWU-79afI0UmYPj2NAqiPxz_c5u-cNleSR6s9iiTtjMfuAV2KEKfSoTZn9Tjqsn-OekAuJhqLKHbct5yNwGCgqEQWLfdxG6XoS_KvAUpsVqQ0VSCrUNeAhHWVfdN3fNvGEy4vRChXYhk3o=s164-no?authuser=0',
      },
      ig: {
        link: '',
        icon: 'https://lh3.googleusercontent.com/t1fzNAVU5Rj1AxckCF6mqc5zCg8CCI7vz4KOJjVY9y1cL1jSZhdshayth_jjD5UgUwwSVCgX8sppHvol3hJi13P4vXG37jQzkfzW496tja0Tqj95FW1vPUqsIZQ7uVlZ32wbYdP3tGkGQjaanFNI8jnTm-i7QQqqaPzG53WGZK11YD33OqPKWJO_aPmRvf5UtE6PWt4ACgktmKJETH9XrmQjU8ZSZNPGEiynU_z0Je98czHEikN0ziGboD6-THRkyqm1cKTWBOZwbw_pKo4IzelECCTuhwKGhDMwyzF24SQXN79ZC446zTHl6rIsEcrX8XqAKP6nTAozMwn8cLBraoRQ4ZsS48tHOKTVebgK4DP_eICnVEXJjjOHQc7EqByQbsblOcQ1D11g2wRGvfhrPqlObbXXLiqayMYqAweWPc4kUcPKvQOk_PK58DP-JM2O-_DUFK6cBwZVM2dOczgrpq5Pm1uA5elXlSVTmFFQ7TMJv6bSEVzinqXZ3SExQ-2PqVw63la3KaRF2HaAHc3hHBc22O_WnD-Z7hkIJd2rbqASH1M7Yiyn7kQ7wBLv8br49CsZ6D0CvZcoq6wkasAeLMjcnJszn9T-_xDVfoteWWxHu-XmjSzDiZiHzSjER37h9HnSP16TzEUnTlU74hNn5xLSHJR8sk7KjuxOezCEBVa9gl36HhnKRs_x32I=w162-h164-no?authuser=0',
      },
      linkedin: {
        link: '',
        icon: 'https://lh3.googleusercontent.com/ToANLg_7Z_VU1tZRiJ-wSUBQkd9wu9nQI7KCHfU-q0lzQyhVjUZk8_1BmNYCaNPVJMvXPymcvh4ATvSQPCdAcCw-gx1hAsPOkuxXZ36l6s1qeSXlobkMHpMiANsf_H9Vg-QVmvuIxP54A-DFmWtDAbpyLaWsd_0RbuJ-edQP1F-XgEJs3EOJ_RMK3b_i_PyIfo3AAKhLaBSRr71f-vem5LsZ8_EiUVPxrwIQPwbD08TzwKc_QzntkIT-V_gwrh_y9SgUwM9f3qSQNyi0LkeW_eU_UTDC2TdHoS_Jh6GAUbxPmEfQ_wSUed6aMfC2fy_9HOd3R_kMIX2h0kqUcwk2w4nZhBch7u-sJRLL3vN4gt-Iqz-28TOVtxSS9KRGPNGvJnUNqGPmzUouug81eap2Btjzg-DYMOjceNMS-EtOSTP8fpsGYyTL2SPhJMwPvVIYKHl0E3_7bpiRIVnbr0nK0f-7qsTXMEVUMos7bRhAzP21kvyND0yoMtNLgxW0LLkFWHQ8t7AXgjjpl0huA_ztA4Tg0NpjJ156uzsZ9cK5qdgZXCBQzZp15nAEEqhOFyCe9MO4FNF1I1uI-uaJKGM6__TgdGOpna7BXbTspHJrKxdUl61h7uD5fJveMT48rvfF7gDnE3Q5PrgTYSFnplHEfmq5eg2ayNEDeg5rcn1wymPlSoC8IQB6Ipr_BtE=w163-h165-no?authuser=0',
      },
      twitter: {
        link: '',
        icon: 'https://lh3.googleusercontent.com/_Yn5t3BEGmhO8arvr_o16XlRY_G5rKrGm4RoxUlYtGGYJOLJwK-vhlwh6olfcXGiqtQR90AVSSva-N_q1BEVJBJmhc4BJPR53XavFGtzFoFkMbKBzTU1z5gH56PlXZhYY7bEFf9FHpF96zmm4nDryIXJw6GrFT93rlkme1mmFvdfxyoYgV0jDsiNqNGcWOMIN2EY_REy3-pnBlSRAh8pFmwzvoGNb0wbabHMorqfRjkm3UA3jjiFdisutrqXxbz1dT9vc0HMAZN1Yr-igut98TbavR7mglCVp8Dwg2kCTbxVaZldb4PANcQn1aVZdoU73E6xG2pfhfjXpV0VNDVRweZjp3TzaVKNhHe09i5ijo9AKktjZScCbuRnckDibHiIKWg5wNsbLtG208HQKejD8c28MGGeFinRS3PtlsjL_9q0RdFR9KGD2X1l9664e9wveDwzmHRp37Kk0OPT6tM7f_oqdPtnsxfYolDfLfmhRkr-UOc9BPdUIN2HsGPMBBC3nxnqfIvdST_qwl_qsVb_VptKbjiV9GpT7HaRhp-q8gAAxH4O1STXML2V-gJs3VY9HQLJA7wsBeyi1cFaw1IxYGitxUsrObwtwdUpvatlfQMYnD35P7npWAehRdQNs-zfGx9z9JNSS9bJvopUpF1XzooE4SgNDxDTjhy5mEt78YtX-aXbSjku4dXVmFc=w163-h164-no?authuser=0',
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
    select.removeRange(range)
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
