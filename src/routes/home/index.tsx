import _Home from './components/Home';
import { loader } from './modules/loader';
import { action } from './modules/action';

const Home = Object.assign(_Home, { loader, action });
export default Home;
