import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <header className="header">
        <h1>Ritvars Mačs</h1>
        <div className="switch-div">
          <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleMode} />
            <span className="slider round"></span>
          </label>
          <span className="switch-label">
            {darkMode ? "Tumšais režīms" : "Gaišais režīms"}
          </span>
        </div>
      </header>
      <main className="content">
        <div className="hero">
          <img src="/sample-image.jpg" alt="Hero" className="hero-image" />
          <div className="hero-text">
            <h1>Mana digitālā pieredze mācoties Latvijas Universitātē</h1>
          </div>
        </div>
        <article className="article type-dark">
          <div className="image-div">
            <img
              src="/sample-image.jpg"
              alt="Sample"
              className="sample-image"
            />
          </div>
          <div className="text-div">
            <h2>Piedzīvojumi LU LUIS tīmekļa vietnē</h2>
            <p>
              Pirmo reizi apmeklējot LU LUIS tīmekļa vietni, es nedaudz samulsu,
              jo es redzēju daudz dažādu opciju, ko apskatīt, bet nezināju kā
              tikt pie informācijas, kas man ir svarīgā. Jauniem lietotājiem
              notiekt ir nepieciešams iziet cauri visam, ko šī tīmekļa vietne
              piedāvā, lai nerastos sajūta, ka tu esi apmaldījies. Es arī
              gaidīju modernāku dizainu no šīs mājaslapas, jo ir sajūta, ka tā
              ir nedaudz novecojusi.
            </p>
          </div>
        </article>
        <article className="article type-light">
          <div className="text-div">
            <h2>Lekcijas platformā Microsoft Teams</h2>
            <p>
              Microsoft Teams bija patīka pārmaiņa salīdzinājumā ar vidusskolā
              lietoto Google Meet, jo, manuprāt, Microsoft Teams dizains ir
              labāks un draudzīgāks lietotājam. Pati funkcionalitāte gan ne
              vienmēr ir draudzīga pret lietotāju, jo vairākas reizes ir
              gadījies tā, ka pirms pievienošanās zvanām tiek atzīmēts, ka
              mikrafonam vajadzētu būt izslēgtam, bet pievienojoties tas
              pārdomā. Pirms pievienošanās zvanam vajadzētu pārtraukt sarunās,
              savādāk nāksies dalīties tajās ar visiem pārējiem.
            </p>
          </div>
          <div className="image-div">
            <img
              src="/sample-image.jpg"
              alt="Sample"
              className="sample-image"
            />
          </div>
        </article>
        <article className="article type-dark">
          <div className="image-div">
            <img
              src="/sample-image.jpg"
              alt="Sample"
              className="sample-image"
            />
          </div>
          <div className="text-div">
            <h2>Code::Blocks iepazīšana LU</h2>
            <p>
              Lietotnē Code::Blocks studentiem nāksies notiekti pavadīt pirmos 2
              studiju gadus, tāpēc to ir vajadzīgs iepazīt un sadraudzēties ar
              to, lai atvieglotu savu studiju procesu. Ir redzams, ka tā ir
              veidota daudz gadu atpakaļ, bet tā arī ir lietotājam ļoti viegli
              lietojama. Protams, tai ir ļoti plaša fukncionalitāte, ko varētu
              mācīties vairākus gadus, bet studijām būs nepieciešams tikai
              nedaudz no tā.
            </p>
          </div>
        </article>
        <article className="article type-light">
          <div className="text-div">
            <h2>Digitālā pieredze prakses vietā</h2>
            <p>
              Mana digitālā pieredze prakses vietā bija interesanta, jo man bija
              jādarbojās ar tehnoloģijām ar ko es iepriekš nebiju darbojies, bet
              tas bija ļoti noderīgi. Grūtākais bija lietot pašas prakses vietas
              iekšējās pārvaldības mājāslapas, jo darbiniekiem interesējošo
              informāciju vajag meklēt pa vairākām mājaslapām un katra mājaslapa
              ir ļoti plaša un lietotājam grūti lietojama. Sarunās ar kolēģiem
              es noskaidroju, ka pat darbiniekiem, kas lieto tās vairākus gadus,
              ir tādas pašas problēmas, tāpēc nevajag baidīties ja jūties
              apmaldījies.
            </p>
          </div>
          <div className="image-div">
            <img
              src="/sample-image.jpg"
              alt="Sample"
              className="sample-image"
            />
          </div>
        </article>
        <article className="article type-dark">
          <div className="image-div">
            <img
              src="/sample-image.jpg"
              alt="Sample"
              className="sample-image"
            />
          </div>
          <div className="text-div">
            <h2>Digitālā pieredze kvalifikācijas darba veidošanā</h2>
            <p>
              Kvalifikācijas darba veidošana ir iespējama prakses vietā,
              atvieglojot savu darbu, bet man to neizdevās apvienot. Prakses
              vietā man bija jādarbojas ar mājaslapām, tāpēc es izvēlējos tādu
              pašu tēmu kvalifikācijas darbam. Iepriekšējā pieredze prakses
              vietā ļoti noderēja kvalifikācijas darba veidošanā, jo es jau
              praksē biju veidojis mājaslapas no nulles, bet es izvēlējos
              ieviest tehnoloģijas ar kurām es nebiju darbojies, kas tāpāt
              sarežģīja kvalifikācijas darba izveidi.
            </p>
          </div>
        </article>
        <footer className="footer"></footer>
      </main>
    </div>
  );
}

export default App;
