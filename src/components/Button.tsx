import React from "react";

type ChildType = {
  children: React.ReactNode;
  buttonStyle?: object;
};

export default function Button(props: ChildType) {
  return <button style={props.buttonStyle}>{props.children}</button>;
}
