import { greet } from "./utils/greet";
import EmojiPicker from "./components/EmojiPicker"

function App(): JSX.Element {
  return <>
  <h1>{greet("World")}</h1>
  <EmojiPicker />
  </>
}

export default App;
