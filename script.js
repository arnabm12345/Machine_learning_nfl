document.getElementById('predictionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const submitButton = document.getElementById('submitButton');
  submitButton.disabled = true;
  submitButton.textContent = 'Please Wait...';
    // Function to convert empty input fields to 0
    function convertToNumber(value) {
      return value.trim() === '' ? 0 : parseFloat(value);
    }
  
    // Get form values and convert empty fields to 0
    const Age = convertToNumber(document.getElementById('Age').value);
    const G = convertToNumber(document.getElementById('G').value);
    const GS = convertToNumber(document.getElementById('GS').value);
    const Cmp = convertToNumber(document.getElementById('Cmp').value);
    const Att = convertToNumber(document.getElementById('Att').value);
    const CmpPercent = convertToNumber(document.getElementById('CmpPercent').value);
    const Yds = convertToNumber(document.getElementById('Yds').value);
    const TD = convertToNumber(document.getElementById('TD').value);
    const TDPercent = convertToNumber(document.getElementById('TDPercent').value);
    const Int = convertToNumber(document.getElementById('Int').value);
    const IntPercent = convertToNumber(document.getElementById('IntPercent').value);
    const FirstDown = convertToNumber(document.getElementById('FirstDown').value);
    const Lng = convertToNumber(document.getElementById('Lng').value);
    const YPerA = convertToNumber(document.getElementById('YPerA').value);
    const AYPerA = convertToNumber(document.getElementById('AYPerA').value);
    const YPerC = convertToNumber(document.getElementById('YPerC').value);
    const YPerG = convertToNumber(document.getElementById('YPerG').value);
    const Sk = convertToNumber(document.getElementById('Sk').value);
    const YdsPerSk = convertToNumber(document.getElementById('YdsPerSk').value);
    const SkPercent = convertToNumber(document.getElementById('SkPercent').value);
    const NYPerA = convertToNumber(document.getElementById('NYPerA').value);
    const ANYPerA = convertToNumber(document.getElementById('ANYPerA').value);
  
    // Create payload object
    const data = {
      Age: Age,
      G: G,
      GS: GS,
      Cmp: Cmp,
      Att: Att,
      CmpPercent: CmpPercent,
      Yds: Yds,
      TD: TD,
      TDPercent: TDPercent,
      Int: Int,
      IntPercent: IntPercent,
      FirstDown: FirstDown,
      Lng: Lng,
      YPerA: YPerA,
      AYPerA: AYPerA,
      YPerC: YPerC,
      YPerG: YPerG,
      Sk: Sk,
      YdsPerSk: YdsPerSk,
      SkPercent: SkPercent,
      NYPerA: NYPerA,
      ANYPerA: ANYPerA,
    };
  
    // Make API call
    fetch('https://fastapi-d37k.onrender.com/predict', { // Update the URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      // Display prediction result
      document.getElementById('predictionResult').classList.remove('hidden');
      document.getElementById('predictionValue').textContent = data.prediction[0];
      submitButton.disabled = false;
     submitButton.textContent = 'Calculate Rate';
    })
    .catch(error => console.error('Error:', error)
    );
    submitButton.disabled = false;
     submitButton.textContent = 'Calculate Rate';
  });
  