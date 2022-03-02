import { MONSTERS_RACE, SPELL_RACES, TRAP_RACES } from '../../utils/types';
import Dragao from '../../assets/dragao.png';
import Kuriboh from '../../assets/kuriboh.png';
import MagoNegro from '../../assets/mago_negro.png';
import CardType from '../../components/CardType';


const Home = () => {
    return (
        <div className='container home'>
            <CardType 
            icon={MagoNegro}
            info={MONSTERS_RACE}
            title={"Monsters"}/>
            <CardType 
            icon={Kuriboh}
            info={SPELL_RACES}
            title={"Spells"} 
            />
            <CardType 
            icon={Dragao}
            info={TRAP_RACES}
            title={"Traps"}/> 
            </div>
    );
}

export default Home;
