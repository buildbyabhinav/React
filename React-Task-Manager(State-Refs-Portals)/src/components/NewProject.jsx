import { useRef } from "react";
import Input from "./Input.jsx";

export default function NewProject() {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  function handleSave(){
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDate = dateRef.current.value;
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" ref={titleRef} />
        <Input label="Description" textarea ref={descriptionRef} />
        <Input label="Due Date" ref={dateRef} />
      </div>
    </div>
  );
}
