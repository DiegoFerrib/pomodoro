interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
}

function Button(props: Props) {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.text}
    </button>
  );
}
export default Button;
