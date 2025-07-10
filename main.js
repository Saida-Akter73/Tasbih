let counters = {
  numberContainer1: 0,
  numberContainer2: 0,
  numberContainer3: 0,
};

function showSingleNumber(id) {
  if (counters[id] < 33) {
    counters[id]++;
    document.getElementById(id).innerText = counters[id];
  }
}

function resetNumber(id) {
  counters[id] = 0;
  document.getElementById(id).innerText = "";
}
