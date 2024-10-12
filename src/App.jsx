import { BackgroundLines } from "./components/ui/background-lines.jsx";
import Logo from "./assets/logo.png";

function App() {
  return (
    <>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-black">
      <div className="absolute top-0 left-0 p-4">
          <img src={Logo} width={125} height={125} className="animate-bounce"/>
        </div>
    </BackgroundLines>
    </>
  );
}

export default App;
