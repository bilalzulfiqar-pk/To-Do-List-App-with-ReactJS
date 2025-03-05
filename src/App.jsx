import { useState, useEffect, useRef } from "react";
import List from "./components/list";
import { v4 as uuidv4 } from "uuid";
import { motion, AnimatePresence } from "framer-motion"; //  Framer Motion for animation

function App() {
  const [lists, setlists] = useState([]); // Initialize with an empty array
  const [taskText, settaskText] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [ShowChecked, setShowChecked] = useState(false);
  const [buttonText, setButtonText] = useState("ADD");

  const inputRef = useRef(null);

  function handleChange(e) {
    settaskText(e.target.value);
  }

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("todo-lists"));
    // Check if data exists and is an array
    if (data && Array.isArray(data)) {
      setlists(data);
    } else {
      setlists([]); // Default to an empty array if data is null or not an array
    }
  }, []);

  useEffect(() => {
    if (lists && Array.isArray(lists) && lists.length > 0) {
      // Save lists to localStorage if it's a valid array
      let strLists = JSON.stringify(lists);
      localStorage.setItem("todo-lists", strLists);
    }
  }, [lists, ShowChecked]);

  useEffect(() => {
    setButtonText(selectedId ? "SAVE" : "ADD");
  }, [selectedId]);

  function handleClick(e) {
    if (taskText.length > 0) {
      if (selectedId === "") {
        setlists([
          ...lists,
          { task: taskText, isCompleted: false, id: uuidv4() },
        ]);
      } else {
        // let index = lists.findIndex((item) => selectedId === item.id);
        // if (index !== -1) {
        //   let newLists = [...lists];
        //   newLists[index].task = taskText;
        //   setlists(newLists);
        // }

        let newLists = lists.map((item) =>
          item.id === selectedId ? { ...item, task: taskText } : item
        );
        setlists(newLists);

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
      <div className="container p-7 sm:min-h-[500px] sm:w-[500px] lg:w-[50vw] sm:border-y-2 border-[#ff604f] min-h-screen w-screen rounded-xl flex flex-col gap-4 bg-white shadow-2xl transition-all overflow-hidden">
        <div className="title">
          <h1 className="font-semibold text-xl">To-Do List 📝</h1>
        </div>
        <div className="bar relative">
          <input
            type="text"
            className="bg-neutral-200/80 rounded-full w-full h-[50px] p-2 px-4 pr-[130px] placeholder:text-[12px] outline-none"
            placeholder="ADD YOUR TASK"
            value={taskText}
            ref={inputRef}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleClick(); // Save on Enter
              } else if (e.key === "Escape") {
                settaskText(""); // Clear input on Escape
              }
            }}
          />
          <button
            onClick={handleClick}
            className="bg-[#ff604f] rounded-full w-[120px] p-2 h-[50px] px-10 absolute right-0 hover:bg-[#ff503d] transition-all duration-200"
          >
            {buttonText}
          </button>
        </div>
        {/* ✅ Framer Motion Animated List Container */}
        <motion.div
          className="lists px-5 flex flex-col gap-3 overflow-hidden"
          // initial={{ height: 300 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          layout
          layoutRoot
        >
          <div className="flex gap-3 items-center">
            <input
              type="checkbox"
              name="chk"
              className="size-5"
              checked={ShowChecked}
              onChange={handleShowCheck}
            />
            <label htmlFor="chk">Show Finished?</label>
          </div>
          {/* ✅ Animated List Items */}
          <AnimatePresence>
            {Array.isArray(lists) &&
              lists.map((item) => {
                if (ShowChecked || !item.isCompleted) {
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, height: 0, }} // ✅ Start hidden
                      animate={{ opacity: 1, height: "auto" }} // ✅ Expand smoothly
                      exit={{ opacity: 0, height: 0 }} // ✅ Collapse on removal
                      layout
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <List
                        task={item}
                        lists={lists}
                        setlists={setlists}
                        settaskText={settaskText}
                        setSelectedId={setSelectedId}
                        inputRef={inputRef}
                      />
                    </motion.div>
                  );
                }
              })}
          </AnimatePresence>
          {lists.length < 1 ? (
            <div className="text-lg">Nothing to Show</div>
          ) : lists.filter((item) => !item.isCompleted).length < 1 &&
            !ShowChecked ? (
            <div className="text-lg">Nothing to Show</div>
          ) : (
            ""
          )}
        </motion.div>
      </div>
    </>
  );
}

export default App;
