// Фрагмент кода для выведения значения ползунков

export const initRangeOutputs = () => {
  const range = document.querySelector('#range');
  const output = document.querySelector('#output-1');

  const range2 = document.querySelector('#range_2');
  const output2 = document.querySelector('#output-2');

  let ShowOutputResult = (a,b) => {  
    a.addEventListener('input', () => {
      return b.textContent = a.value;
    }); 
  };
  ShowOutputResult(range,output);
  ShowOutputResult(range2,output2);
}