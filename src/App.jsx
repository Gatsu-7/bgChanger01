import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap gap-3 shadow-xl bg-white justify-center rounded-3xl px-3 py-2">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => {
              setColor("pink");
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => {
              setColor("salmon");
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "salmon" }}
          >
            Salmon
          </button>
          <button
            onClick={() => {
              setColor("crimson");
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "crimson" }}
          >
            Crimson
          </button>
          <button
            onClick={() => {
              setColor("brown");
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
          <button
            onClick={() => {
              setColor("black");
            }}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => {
              setColor("royalblue");
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "royalblue" }}
          >
            Royal-Blue
          </button>
          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => {
              setColor("purple");
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => {
              setColor("violet");
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
          <button
            onClick={() => {
              setColor("white");
            }}
            className="outline-none px-4 py-1 rounded-full text-black"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
