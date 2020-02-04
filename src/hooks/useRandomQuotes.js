import { useState, useEffect } from 'react';

export default () => {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState({});

  async function handleGetQuote() {
    setloading(true);

    const rawResult = await fetch('https://api.quotable.io/random');
    const result = await rawResult.json();

    // If result not founds
    if (!result.content) {
      setdata({
        content:
          'Kita menilai diri kita dengan mengukur dari apa yang kita rasa mampu untuk kita kerjakan, orang lain menilai diri kita dengan mengukur dari apa yang telah kita lakukan. #CatatanMelintasiWaktu',
        author: 'Verdi Pratama'
      });
    } else {
      setdata(result);
    }
    // Stop loading state
    setloading(false);
  }

  useEffect(() => {
    handleGetQuote();
  }, []);

  return (
    // loading and data obj
    { loading, data }
  );
};
