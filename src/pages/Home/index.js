import { MONSTERS_RACE, SPELL_RACES, TRAP_RACES } from '../../utils/types';
import CardType from '../../components/CardType';


const Home = () => {
    return (
        <div className='container home'>
            <CardType title={"Monsters"} info={MONSTERS_RACE}/>
            <CardType title={"Spells"} info={SPELL_RACES}/>
            <CardType title={"Traps"} info={TRAP_RACES}/>
            </div>
    );
}

export default Home;
