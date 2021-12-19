import Counts from "../../Component/Counts/Counts"
import Section1 from "../../Component/Section1/Section1"
import Section2 from "../../Component/Section2/Section2"
import Section3 from "../../Component/Section3/Section3"

const Home = ()=> {
    return(<>
        <div className="Section1">
            <Section1 />
        </div>
        <div className="Section2">
            <Section2 />
        </div>
        <div className="Section3">
            <Section3 />
        </div>
        <div className="Counts">
            <Counts />
        </div>
    </>)
}
export default Home;