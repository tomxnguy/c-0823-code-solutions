function CustomButton({ text, color }) {
  function onCustomClick() {
    window.alert(text);
  }

  return (
    <button
      onClick={() => {
        onCustomClick(text);
      }}
      style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

export default CustomButton;
