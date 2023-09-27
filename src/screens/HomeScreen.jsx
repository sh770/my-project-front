import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const HomeScreen = () => {
const api = "https://djangoapp-s1x8.onrender.com/"
  const [visible, setVisible] = useState(false);

  const [btnText, setBtnText] = useState("על הפרוייקט");

  const toggleText = () => {
    setVisible(!visible);
    setBtnText(visible ? "על הפרוייקט" : "הסתר");
    // eslint-disable-next-line no-undef
    console.log(`${api}`);
  }

  return (
    <div>
      <Button
        variant="outline-primary"
        onClick={toggleText}>
        {btnText}
      </Button>

      {visible && (
        <div>
          <h2>הפרוייקט שלי</h2>
          <h6>
            הפרויקט הוא אפליקציית מסרים אישיים
            המאפשרת למשתמשים לשלוח ולקבל הודעות באופן מאובטח. <br />
            המשתמש יכול לנהל את כל המסרים שלו במקום אחד.
          </h6>
        </div>
      )}
    </div>
  );
}

export default HomeScreen
{/* <Button
        type="button"
        variant="outline-success"
        onClick={() => {
          console.info("הפרוייקט")
        }}
      >
        אודות
      </Button> */}