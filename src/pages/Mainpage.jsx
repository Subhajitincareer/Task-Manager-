import HeroX from "../assets/01_Hero_2x.png";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Cards, Views, Automotion } from "../app/tabSlice";
import Graphic from "../assets/Features-Graphic-Cards.png";
import ViewUi from "../assets/Features-UI-Views.png";
import AutoUi from "../assets/Features-UI-Automation.png";
import power from "../assets/03D_Power-ups_2x.png"
import workflow from "../assets/automate_your_workflow.png"
import Premium from "../assets/PremiumLP_HeroImage_2x.png"
import Boards from '../assets/Boards_2x.png'


const Mainpage = () => {
  const dispatch = useDispatch();
  const Tab = useSelector((state) => state.Tab.value);

  const navigate = useNavigate();
  const signup = () => {
    navigate("/signup");
  };

  return (
    <div className="w-full h-auto">
      <div className="h-[60px] w-full  flex justify-center sticky top-0 bg-white">
        <div className="w-[86%] h-[60px] flex items-center">
          <div className="text-center"> TaskFlow</div>
        </div>
      </div>
      <div className="w-full  xl:flex justify-center items-center h-[762px]  bg-gradient-to-b from-blue-400 via-pink-500 to-green-500">
        <div className="xl:w-[538px] h-[487px] mr-4">
          <h1 className="text-5xl h-[180px] text-left text-white font-medium leading-[60px] m-0 mb-6  xs:text-center">
            TaskFlow makes it easier for teams to manage projects and tasks
          </h1>
          <p className=" text-left text-white leading-[1.875rem] m-0 mb-6 text-2xl ">
            Simple, flexible, and powerful. All it takes are boards, lists, and
            cards to get a clear view of who’s doing what and what needs to get
            done.
          </p>
          <div>
            <strong className=" text-left text-white ">
              WHAT YOU GET ON THE FREE PLAN:
            </strong>
            <ul className="mt-5 pl-4 text-[20px] leading-[30px]">
              <li className="text-white list-item list-disc ">
                {" "}
                Unlimited cards{" "}
              </li>
              <li className="text-white list-item list-disc">
                Unlimited Power-Ups per board
              </li>
            </ul>
          </div>
          <button
            onClick={signup}
            className=" bg-blue-500 px-6 py-3 mt-4 rounded-lg text-white shadow-lg hover:bg-blue-600 hover:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-400 active:bg-blue-700 active:scale-95 transition duration-300"
          >
            {" "}
            Sign up-it&#39;s free!
          </button>
        </div>

        <div>
          <img src={HeroX} alt="" className="mb-6 ml-5  w-[633px]h-[487px] " />
        </div>
      </div>
      {/* feature header */}
      <div className="w-full h-[112px] flex justify-center">
        <div className="w-6xl h-[112px] flex justify-center items-center">
          <h1 className="text-3xl text-[#091E42] font-medium ">
            Explore Taskflow features that help your team succeed {Tab}
          </h1>
        </div>
      </div>
      <div className="w-full h-[83px] flex justify-center">
        <div className="w-md flex justify-center gap-2 items-center ">
          <button
            className={` w-[117px]   text-xl rounded-[21px] h-[51px] hover:border  ${
              Tab === "Tab 1"
                ? "bg-[#403294] text-white "
                : "bg-[#c0b6f2] text-[#091E42]  border-[#2474d6 ]"
            }`}
            onClick={() => dispatch(Cards())}
          >
            Cards
          </button>
          <button
            className={`  w-[110px] h-[51px] rounded-[21px] text-xl  hover:border border-[#2474d6] ${
              Tab === "Tab 2"
                ? "bg-[#403294] text-white "
                : "bg-[#c0b6f2] text-[#091E42]  border-[#2474d6 ]"
            } `}
            onClick={() => dispatch(Views())}
          >
            {" "}
            Views
          </button>
          <button
            className={` w-[165px] h-[51px] rounded-[21px] text-xl hover:border border-[#2474d6] ${
              Tab === "Tab 3"
                ? "bg-[#403294] text-white "
                : "bg-[#c0b6f2] text-[#091E42]  border-[#2474d6 ]"
            }`}
            onClick={() => dispatch(Automotion())}
          >
            Automotion
          </button>
        </div>
      </div>
      {/* feature display */}
      <div className="w-full h-[687px]">
        <div>
          {Tab === "Tab 1" && (
            <div className="w-full h-[681px] grid grid-cols-2 ">
              <div className="cols-span-1 ml-[258px]">
                <h1>Manage tasks with ease.</h1>
                <ul>
                  <li>
                    <strong>Members:</strong> Keep everyone accountable and
                    never have to ask “who’s doing that” by adding members to
                    cards for their projects and tasks.{" "}
                  </li>
                  <li>
                    <strong>Due dates:</strong> They're easy to set, hard to
                    miss (with reminders!), and oh-so-satisfying to mark as
                    “done.”
                  </li>
                  <li>
                    <strong>Attachments: </strong>No more digging through
                    endless email chains to find attachments. Just drag and drop
                    them onto a card so the right files stay with the right
                    tasks.
                  </li>
                  <li>
                    {" "}
                    <strong>Checklists: </strong>Your best tool to overpower
                    overwhelming asks. Break big tasks into small ones, check
                    things off the list, and watch that status bar go to 100%
                    complete.
                  </li>
                </ul>
              </div>
              <div className="cols-span-2">
                {" "}
                <img src={Graphic} alt="features-graphic-cards" />
              </div>
            </div>
          )}
          {Tab === "Tab 2" && (
            <>
              {" "}
              <h2 className="text-center">
                Bring powerful new views to your team’s work.
              </h2>
              <div className="w-full h-[681px] grid grid-cols-2 ">
                <div className="cols-span-1 ml-[258px]">
                  <ul>
                    <li>
                      Success starts with a Trello board: Similar to a Kanban
                      board, a Trello board is the easiest way to go from idea
                      to action. Plan projects and break down each step of the
                      way to getting things done.
                    </li>
                    <li>
                      Hit deadlines every time with Timeline: Stay on top of
                      every sprint and stay on track of every goal. Use Timeline
                      to see how all of the moving parts piece together over
                      time and drag and drop dates to make adjustments on the
                      fly.
                    </li>
                    <li>
                      Use Calendar to stay on top of tasks: Whether scheduling a
                      quarterly editorial calendar or staying on top of your
                      to-dos, Calendar is like a crystal ball giving you a clear
                      vision of what work lies ahead.
                    </li>
                  </ul>
                </div>
                <div className="cols-span2-">
                  <img src={ViewUi} alt="features-graphic-cards" />
                </div>
              </div>
            </>
          )}
          {Tab === "Tab 3" && (
            <>
              {" "}
              <h2 className="text-center">
                Create rules, buttons, and commands in Taskflow.
              </h2>
              <div className="w-full h-[681px] grid grid-cols-2 ">
                <div className="cols-span-1 ml-[258px]">
                  <ul>
                    <li>
                      Rules for boards: Setting rules means important tasks
                      won’t fall through the cracks. Set a trigger and the
                      actions to be performed, and let Butler run the show.
                    </li>
                    <li>
                      Move work forward: Get to the next step faster with custom
                      card and board buttons. Perform a series of actions in a
                      single click!.
                    </li>
                    <li>
                      Integrate your favorite apps: Extend beyond your boards
                      with integrations. Post messages to Slack, create Jira
                      tickets, and send emails right from your boards.
                    </li>
                    <li>
                      Intelligent automation tips: As you use a Taskflow board,
                      Butler will recognize repetitive actions and suggest
                      automations that can be enabled in a single click.
                    </li>
                  </ul>
                </div>
                <div className="cols-span2-">
                  <img src={AutoUi} alt="features-graphic-cards" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>

    

      <div className="w-full h-[64px]"></div>
      <section className="w-full h-[485px] bg-gradient-to-b from-[rgb(234,230,255)] to-[rgb(255,255,255)] ">
        <div className="w-[74.32%] h-[485px] grid grid-cols-2 mx-auto">
          <div className="cols-span-1">
            <h2>Features to help your team succeed</h2>
            <p>Powering a productive team means using a powerful tool (and plenty of snacks). From meetings and projects to events and goal setting, Trello’s intuitive features give any team the ability to quickly set up and customize workflows for just about anything.</p>
          </div>
          <div className="cols-span-2">
            <img src={Boards} alt="" />
          </div>
        </div>
      </section>

      <div className="w-full h-[64px]"></div>
      <section className="w-full h-[485px]  ">
        <div className="w-[74.32%] h-[485px] grid grid-cols-2 mx-auto">
          <div className="cols-span-1"><img src={Premium}alt="" /></div>
          <div className="cols-span-2">
            <h2>The board is just the beginning</h2>
            <p>Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task assignments, timelines, productivity metrics, calendars, and more.</p>
          </div>
        </div>
      </section>

      <div className="w-full h-[64px]"></div>
      <section className="w-full h-[485px] ">
        <div className="w-[74.32%] h-[485px] grid grid-cols-2 mx-auto">
          <div className="cols-span-1">
<h2>Automate your workflow</h2>
<p>Create a foolproof process for moving work forward with Trello’s built-in automation system. Run commands and set automated rules for almost any action in Trello so that your team can focus on what matters most.</p>
          </div>
          <div className="cols-span-2">
<img src={workflow} alt="" />
          </div>
        </div>
      </section>

      <div className="w-full h-[64px]"></div>
      <section className="w-full h-[485px] ">
        <div className="w-[74.32%] h-[485px] grid grid-cols-2  mx-auto">
          <div className="cols-span-1"><img src={power}alt="" /></div>
          <div className="cols-span-2">
<h2>Integrate top work tools</h2>
<p>Easily connect the apps your team already uses into your Trello workflow, or add a Power-Up that helps fine-tune one specific need. With hundreds of Power-Ups available, your team’s workflow wishes are covered.</p>
          </div>
        </div>
      </section>

      <section className="w-full h-[130px] bg-[#162949]">
        <div className="w-[73.27%] h-[130px] mx-auto grid grid-cols-2 ">
          <div className="cols-span-1">
            <h1 className="text-red-600">taskflow</h1>
            <span></span>
          </div>
          <div className=" grid grid-cols-4 cols-span-2 ">
            <div className=" text-white">
              <Link to="/login">
                <div>About taskflow</div>
                <p>what&#39;s behind the boards</p>
              </Link>
            </div>
            <div className="text-white">
              <Link to="/login">
                <div>Jobs </div>
                <p>Learn about open roles on the Taskflow team.</p>
              </Link>
            </div>
            <div className="text-white ">
              <Link to="/login">
                <div>Apps</div>
                <p>Download the Trello App for your Desktop or Mobile devices.</p>
              </Link>
            </div>
            <div className="text-white">
              <Link to="/login">
                <div>Contact us</div>
                <p>Need anything? Get in touch and we can help.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className=" w-full h-[62px] bg-[#162949]">
        <div className="w-[73.27%] h-[56px] mx-auto grid grid-cols-3">
          <div className="cols-span-1"></div>
          <div className="cols-span-2"></div>
          <div className="cols-span-3"></div>
        </div>
      </section>
    </div>
  );
};

export default Mainpage;
