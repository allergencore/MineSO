function _load(){
document.userName.value=System.Gadget.Settings.readString("username");
document.pass.value=System.Gadget.Settings.readString("pass");
document.audio.value=System.Gadget.Settings.readString("audio");
document.addrRead.value=System.Gadget.Settings.readString("addrRead");
document.addrSend.value=System.Gadget.Settings.readString("addrSend");
document.method.value=System.Gadget.Settings.readString("method");
document.var.value=System.Gadget.Settings.readString("var");
};