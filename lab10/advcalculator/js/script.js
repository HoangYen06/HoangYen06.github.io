var FKeyPad = document.Keypad;
var Accum = 0;
var FlagNewNum = false;
var PendingOp = "";

function NumPressed(Num) {
    if (FlagNewNum) {
        FKeyPad.ReadOut.value = Num;
        FlagNewNum = false;
    } else {
        if (FKeyPad.ReadOut.value == "0")
            FKeyPad.ReadOut.value = Num;
        else
            FKeyPad.ReadOut.value += Num;
    }
}

function Operation(Op) {
    var Readout = FKeyPad.ReadOut.value;
    if (FlagNewNum && PendingOp != "=") {
        return;
    } else {
        FlagNewNum = true;
        if ('+' == PendingOp)
            Accum += parseFloat(Readout);
        else if ('-' == PendingOp)
            Accum -= parseFloat(Readout);
        else if ('/' == PendingOp)
            Accum /= parseFloat(Readout);
        else if ('*' == PendingOp)
            Accum *= parseFloat(Readout);
        else
            Accum = parseFloat(Readout);
        FKeyPad.ReadOut.value = Accum;
        PendingOp = Op;
    }
}

function Decimal() {
    var curReadOut = FKeyPad.ReadOut.value;
    if (FlagNewNum) {
        curReadOut = "0.";
        FlagNewNum = false;
    } else {
        if (curReadOut.indexOf(".") == -1)
            curReadOut += ".";
    }
    FKeyPad.ReadOut.value = curReadOut;
}

function ClearEntry() {
    FKeyPad.ReadOut.value = "0";
    FlagNewNum = true;
}

function Clear() {
    Accum = 0;
    PendingOp = "";
    ClearEntry();
}

function Neg() {
    FKeyPad.ReadOut.value = parseFloat(FKeyPad.ReadOut.value) * -1;
}

function Percent() {
    FKeyPad.ReadOut.value = (parseFloat(FKeyPad.ReadOut.value) / 100) * parseFloat(Accum);
}