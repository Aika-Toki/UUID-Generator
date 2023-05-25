let rowId = [];
function showValue() {
  document.querySelector("#countDisplay").textContent =
    document.querySelector("#count").value;
}
function generate() {
  document.querySelector("#result").innerHTML =
    "<thead><tr><th>UUID</th><th>Delete</th></tr></thead><tbody></tbody>";
  let results = [];
  rowId = [];
  for (let i = 0; i < document.querySelector("#count").value; i++) {
    let uuid = generateUUID();
    while (results.includes(uuid)) {
      uuid = generateUUID();
    }
    results.push(uuid);
    addRow(uuid, "result>tbody");
  }
}
function addRow(value, tag) {
  let el = document.createElement("tr");
  let elid = "_" + randstr("0aA", 16);
  while (rowId.includes(elid)) {
    elid = "_" + randstr("0aA", 16);
  }
  rowId.push(elid);
  el.id = elid;
  el.innerHTML = `<td><input type="text" value="${value}" onmouseover="this.select()" style="width:-webkit-fill-available;font-family:'Nova Mono', monospace;"></td><td><button onclick="remove('${elid}');" style="font-family: 'Noto Sans JP', sans-serif;">×</button></td>`;
  document.querySelector("table#" + tag).appendChild(el);
}
function remove(id) {
  document.querySelector(`tr#${id}`).remove();
  rowId.splice(rowId.indexOf(id), 1);
}
function generateUUID() {
  return [
    randstr("f", 8),
    randstr("f", 4),
    randstr("f", 4),
    randstr("f", 4),
    randstr("f", 12),
  ].join("-");
}
function randstr(type = "0aA", length = 6) {
  let charact = [];
  if (type.includes("0")) {
    charact = charact.concat("0123456789".split(""));
  }
  if (type.includes("a")) {
    charact = charact.concat("abcdefghijklmnopqrstuvwxyz".split(""));
  }
  if (type.includes("A")) {
    charact = charact.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
  }
  if (type.includes("f")) {
    charact = charact.concat("0123456789abcdef".split(""));
  }
  console.log(charact);
  let result = [];
  for (let i = 0; i < length; i++) {
    let num = Math.floor(Math.random() * charact.length);
    result.push(charact[num]);
  }
  return result.join("");
}
