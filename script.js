function tinhMBTI() {
  let score = {E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0};

  for (let i = 1; i <= 24; i++) {
    let radios = document.getElementsByName('q' + i);
    for (let r of radios) {
      if (r.checked) {
        score[r.value]++;
      }
    }
  }

  let result = '';
  result += (score.E >= score.I) ? 'E' : 'I';
  result += (score.S >= score.N) ? 'S' : 'N';
  result += (score.T >= score.F) ? 'T' : 'F';
  result += (score.J >= score.P) ? 'J' : 'P';

  document.getElementById('result').innerText = "Kết quả MBTI: " + result;
}
