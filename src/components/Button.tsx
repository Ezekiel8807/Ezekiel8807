import React from "react";

type ChildType = {
  children: string;
  buttonStyle?: string;
  btnAction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button(props: ChildType) {
  const handleBtn = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(e);
  };
  return (
    <button onClick={handleBtn} className={props.buttonStyle}>
      {props.children}
    </button>
  );
}
