type ChildType = {
  children: string;
  buttonStyle?: string;
  ischecked?: boolean;
  btnAction?: () => void;
};

export default function Button(props: ChildType) {
  return (
    <button
      disabled={!props.ischecked}
      onClick={props.btnAction}
      className={props.buttonStyle}
    >
      {props.children}
    </button>
  );
}
