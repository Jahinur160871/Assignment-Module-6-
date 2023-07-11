function Content() {
    const [displayText, setDisplayText] = useState('');
  
    const handleButtonClick = () => {
      setDisplayText(document.getElementById('textarea').value);
    };
  
    return (
      <div>
        <button onClick={handleButtonClick}>Display Text</button>
        <textarea id="textarea" />
        <p>{displayText}</p>
      </div>
    );
  }
  
  export default Content;