import React, { useEffect, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import styled from "styled-components";

const List = ({
  task,
  lists,
  setlists,
  settaskText,
  setSelectedId,
  inputRef,
}) => {
  const [isChecked, setIsChecked] = useState(task.isCompleted);
  // console.log("Render "+isChecked)

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (!isFirstRender) {
      // Check if not the first render
      // console.log("test");

      let index = lists.findIndex((item) => task.id === item.id);
      // console.log(index);
      if (index !== -1) {
        // Check if the item was found

        // Create a new array without the item at the found index
        const newLists = [...lists]; // Copy the existing lists
        newLists[index].isCompleted = isChecked; //set checked
        // console.log(newLists);
        setlists(newLists); // Update the state
        if (newLists.length < 1) {
          let strLists = JSON.stringify(newLists);
          localStorage.setItem("todo-lists", strLists);
        }
      }
    } else {
      setIsFirstRender(false); // Set to false after the first render
    }
  }, [isChecked]);

  function handleDelete(e) {
    let index = lists.findIndex((item) => task.id === item.id);
    // console.log(index);
    if (index !== -1) {
      // Check if the item was found

      // Create a new array without the item at the found index
      const newLists = [...lists]; // Copy the existing lists
      newLists.splice(index, 1); // Remove the item
      // console.log(newLists);
      setlists(newLists); // Update the state
      if (newLists.length < 1) {
        let strLists = JSON.stringify(newLists);
        localStorage.setItem("todo-lists", strLists);
        // localStorage.removeItem("todo-lists");
      }
    }
  }

  function handleEdit(e) {
    settaskText(task.task);
    setSelectedId(task.id);
    // console.log(task.task, task.id);
    // console.log(inputRef);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  function handleCheckClick(e) {
    setIsChecked(!isChecked);
  }

  function handleOnChnage(e) {}

  return (
    <div className="list flex justify-between h-fit border-2 rounded-lg p-3 bg-white">
      <div className="left flex gap-4 items-center relative justify-center">
        <StyledWrapper>
          <label className="checkbox w-6">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleOnChnage}
            />
            <div
              className="checkbox-circle cursor-pointer"
              onClick={handleCheckClick}
            >
              <svg viewBox="0 0 52 52" className="checkmark">
                <circle
                  fill="none"
                  r="25"
                  cy="26"
                  cx="26"
                  className="checkmark-circle"
                />
                {/* <path d="M16 26l9.2 8.4 17.4-21.4" className="checkmark-kick" /> */}
                <path d="M14 29l9.2 8.4 17.4-21.4" className="checkmark-kick" />
              </svg>
            </div>
          </label>
        </StyledWrapper>
        <div>
          <p
            className={`break-all mr-3 mt-[1px] ${
              isChecked ? "line-through" : ""
            }`}
          >
            {task.task}
          </p>
        </div>
      </div>
      <div className="right flex gap-2 items-center">
        <MdEdit
          onClick={handleEdit}
          className="size-5 cursor-pointer text-[#bcbcbc] hover:text-[#ff5845] transition-all duration-200"
        />
        <IoCloseOutline
          onClick={handleDelete}
          className="size-7 cursor-pointer text-[#bcbcbc] hover:text-[#FF5845] transition-all duration-200"
        />
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  .checkbox {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin-right: 0px;
  }

  .checkbox input[type="checkbox"] {
    position: absolute;
    opacity: 0;
  }

  .checkbox-circle {
    position: relative;
    // display: inline-block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #aaa;
    transition: all 0.3s;
  }

  .checkbox input[type="checkbox"]:checked ~ .checkbox-circle {
    // background: #4CAF50;
    // border-color: #4CAF50;
    background: #ff6e60;
    border-color: #ff6e60;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    fill: none;
    stroke: #fff;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    opacity: 0;
    transition: all 0.3s;
  }

  .checkbox input[type="checkbox"]:checked ~ .checkbox-circle .checkmark {
    opacity: 1;
  }

  .checkmark-circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    transition: stroke-dashoffset 0.3s;
  }

  .checkbox
    input[type="checkbox"]:checked
    ~ .checkbox-circle
    .checkmark-circle {
    stroke-dashoffset: 0;
  }

  .checkmark-kick {
    stroke-dasharray: 50;
    stroke-dashoffset: 50;
    transition: stroke-dashoffset 0.3s;
  }

  .checkbox input[type="checkbox"]:checked ~ .checkbox-circle .checkmark-kick {
    stroke-dashoffset: 0;
  }
`;

export default List;
