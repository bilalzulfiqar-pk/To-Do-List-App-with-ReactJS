import { useState, useEffect } from "react";
import List from "./components/list";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [lists, setlists] = useState([]);
  const [taskText, settaskText] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [ShowChecked, setShowChecked] = useState(false);

  // State for Height
  const [Height, setHeight] = useState("0px");

  function handleChange(e) {
    settaskText(e.target.value);
  }

  useEffect(() => {
    // setlists([
    //   {
    //     task: "task 1",
    //     isCompleted: false,
    //     id: "1",
    //   },
    //   {
    //     task: "task 2",
    //     isCompleted: false,
    //     id: "2",
    //   },
    // ]);

    let data = JSON.parse(localStorage.getItem("todo-lists"));
    setlists(data);
  }, []);

  useEffect(() => {
    if (lists.length > 0) {
      // console.log(lists);
      let strLists = JSON.stringify(lists);
      // console.log(strLists);
      localStorage.setItem("todo-lists", strLists);
    }

    // Set Height to scrollHeight of the lists
    if (ShowChecked) {
      setHeight(lists.length * 68 + 22 + "px");
    } else {
      setHeight(
        lists.filter((item) => !item.isCompleted).length * 68 + 22 + "px"
      );
      console.log(lists.length * 68 + "px");
    }

    // if (ShowChecked || lists.some(item => item.isCompleted)) {
    //   setHeight(`${document.querySelector('.lists').scrollHeight}px`);
    // } else {
    //   setHeight("0px"); // Collapse if no tasks to show
    // }
  }, [lists, ShowChecked]);

  function handleClick(e) {
    if (taskText.length > 0) {
      if (selectedId == "") {
        setlists([
          ...lists,
          { task: taskText, isCompleted: false, id: uuidv4() },
        ]);
      } else {
        let index = lists.findIndex((item) => selectedId === item.id);
        if (index !== -1) {
          // console.log(index);
          let newLists = [...lists];
          newLists[index].task = taskText;
          setlists(newLists);
        }
        setSelectedId("");
      }
    }
    settaskText("");
  }

  function handleShowCheck(e) {
    setShowChecked(!ShowChecked);
  }

  return (
    <>
      <div className="container p-7 sm:min-h-[500px] sm:w-[500px] lg:w-[50vw] min-h-screen w-screen rounded-xl border-2 flex flex-col gap-4 bg-white transition-all overflow-hidden">
        <div className="title">
          <h1 className="font-semibold text-xl">To-Do List 📝</h1>
        </div>
        <div className="bar relative">
          <input
            type="text"
            className="bg-neutral-200/80 rounded-full w-full h-[50px] p-2 px-4 pr-[130px] placeholder:text-[12px] outline-none"
            placeholder="ADD YOUR TASK"
            value={taskText}
            onChange={handleChange}
          />
          <button
            onClick={handleClick}
            className="bg-[#ff604f] rounded-full p-2 h-[50px] px-10 absolute right-0 hover:bg-[#ff503d] transition-all duration-200"
          >
            SAVE
          </button>
        </div>
        <div
          className="lists px-5 flex flex-col gap-3 transition-all"
          style={{ height: Height }}
        >
          <div className=" flex gap-3 items-center">
            <input
              type="checkbox"
              name="chk"
              className="size-5"
              checked={ShowChecked}
              onChange={handleShowCheck}
            />
            <label htmlFor="chk">Show Finished?</label>
          </div>
          {lists.map((item) => {
            if (ShowChecked) {
              return (
                <List
                  key={item.id}
                  task={item}
                  lists={lists}
                  setlists={setlists}
                  settaskText={settaskText}
                  setSelectedId={setSelectedId}
                />
              );
            } else {
              if (!item.isCompleted) {
                return (
                  <List
                    key={item.id}
                    task={item}
                    lists={lists}
                    setlists={setlists}
                    settaskText={settaskText}
                    setSelectedId={setSelectedId}
                  />
                );
              }
            }
          })}
          {lists.length < 1 ? (
            <div className="text-lg">Nothing to Show</div>
          ) : lists.filter((item) => !item.isCompleted).length < 1 &&
            !ShowChecked ? (
            <div className="text-lg">Nothing to Show</div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default App;
