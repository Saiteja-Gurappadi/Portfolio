import Vector186 from "../Images/Vector 186.png";
import Group2346 from "../Images/Group 62.png";
import doodleitems from "../Images/doodle items.png";
const About = () => {
  return (
    <div className="flex h-screen bg-slate-900 relative p-5 items-center justify-evenly">
      <div className="h-[400px] w-[300px] text-white text-[18px] font-semibold" >
        <h1 className="text-bold text-[45px] text-center font-poppins">ABOUT <span className="text-cyan-400">ME</span></h1>
        <p>HI I am G.V.S.Saiteja I have handson experince on React and i have built some projects using.......................... </p>
        <img src={Vector186} alt=""  className=""/>
      </div>
      <div className="flex h-[75%] w-[35%] relative">
        <img src={Group2346} alt="" className="h-[60%] w-[60%] absolute bottom-[0%] left-[15%]" />
        <img src={doodleitems} alt=""  className="h-[80%] w-[100%]" />
      </div>
    </div>
  );
};

export default About;
