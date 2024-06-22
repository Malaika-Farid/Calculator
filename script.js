var x = "", y = "", flag = false, op = '', exp = "";
function Operand(a) {
    if (flag) {
        y += a.toString();
        exp += a.toString();
        document.getElementById('resultPara').innerHTML = exp;
    }
    else {
        x += a.toString();
        exp += a.toString();
        document.getElementById('resultPara').innerHTML = exp;
    }
}
function Operator(o) {
    if (exp.slice(-1) == op) {
        exp = exp.slice(0, (exp.length - 1));
    }
    else {
        flag = true;
    }
    op = o;
    exp += o;
    document.getElementById('resultPara').innerHTML = exp;
}
function Calculate() {
    let res;
    let x1 = Number(x);
    let y1 = Number(y);
    if (op == '+') {
        res = x1 + y1;
    }
    else if (op == '-') {
        res = x1 - y1;
    }
    else if (op == '*') {
        res = x1 * y1;
    }
    else if (op == '/') {
        res = x1 / y1;
    }
    else {
        res = x1 % y1;
    }
    document.getElementById('expressionPara').innerHTML = exp;
    document.getElementById('resultPara').innerHTML = Math.fround(res);
    x = y = op = exp = "";
    flag = false;
    exp = "";
}
function ClearAll() {
    document.getElementById('expressionPara').innerHTML = " ";
    document.getElementById('resultPara').innerHTML = '0';
    x = y = op = exp = "";
    flag = false;
}