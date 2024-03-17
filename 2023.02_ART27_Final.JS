
$("#card-form").submit(getVal);

function getVal(e) {
  e.preventDefault();
  console.log(e);
  const val = document.querySelector('input').value;
  console.log(val);

    
  const cardTitle = ("sol")
    const formControl = ("sun"||"Sun"||"SUN")
    function compareStrings (cardTitle, formControl){
  // doesn't like else, but if makes both return regardless of entry.
    if (cardTitle === formControl);{
    console.log("Yes! SOL means SUN in Latin.");
    }
    else {
      console.log("Not quite. SOL means SUN in Latin.");
      }
    }
    
  
compareStrings();
  }

