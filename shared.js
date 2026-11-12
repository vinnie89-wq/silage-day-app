/* Shared data for the Silage Day prototype – used by the visitor app (index.html) and the operations app (ops.html).
   Needs a global parseTime("HH:MM") defined by the page. */
const TYPES=[
 ["Tractor","power"],["Self-propelled forage harvester","self"],["Self-propelled mower","self"],["Loader / telehandler","self"],
 ["Trailed forage harvester","impl"],["Silage trailer","impl"],["Forage wagon","impl"],["Mower","impl"],["Tedder","impl"],["Rake","impl"],["Buckrake","impl"],["Baler","impl"],["Bale wrapper","impl"],["Other implement","impl"]
];
const KIND=Object.fromEntries(TYPES);
const KIND_LABEL={power:"Power unit",self:"Self-propelled",impl:"Implement"};
const DEFAULT_CHECKS=["Brakes and handbrake working","PTO shafts and guards in place","Lights and beacon working","No fluid leaks","Tyres and wheels sound","Hitch, drawbar and pins secure","Emergency stop / shut-off known","Machine complete and in safe working order"];
const OPS_KEY="psd_ops1";
function seed(){
 const E=(id,name,contact,phone,email)=>({id,name,contact,phone,email,status:"approved",at:"01/03/2027"});
 const M=(id,exId,type,make,year,reg,pairWith,status)=>({id,exId,type,kind:KIND[type],make,year,reg,pairWith:pairWith||"",story:"",status:status||"approved",photo:null,scrut:null});
 const D=(id,exId,name,phone)=>({id,exId,name,phone,declared18:true,onDay:false,id18:null,briefing:null});
 const ex=[E("EX-01","Sample Contracting Ltd","Sample Name A","07700 900001","a@example.com"),E("EX-02","Sample Farm Partnership","Sample Name B","07700 900002","b@example.com"),E("EX-03","Sample Vintage Club","Sample Name C","07700 900003","c@example.com"),E("EX-04","Sample Dealer B","Sample Name D","07700 900004","d@example.com")];
 const m=[
  M("M-101","EX-01","Self-propelled forage harvester","Claas Jaguar 960","2024","AB24 CDE"),
  M("M-102","EX-01","Tractor","John Deere 6250R","2022","CD22 EFG"),
  M("M-103","EX-01","Silage trailer","Smyth 20 t silage trailer","2021",""),
  M("M-104","EX-02","Tractor","New Holland T7.270","2020","EF20 GHI"),
  M("M-105","EX-02","Silage trailer","Herron 18 t silage trailer","2019",""),
  M("M-106","EX-02","Buckrake","Teagle buckrake","2018","","M-104"),
  M("M-107","EX-03","Tractor","Ford 7810","1986","C123 ABC"),
  M("M-108","EX-03","Trailed forage harvester","Claas Jaguar 75","1978","","M-107"),
  M("M-109","EX-03","Rake","Kuhn twin-rotor rake","2005","","M-107"),
  M("M-110","EX-04","Tractor","Massey Ferguson 7S.180","2027","GH27 JKL"),
  M("M-111","EX-04","Tedder","Kuhn 8-rotor tedder","2027","","M-110"),
  M("M-112","EX-04","Mower","Front & rear butterfly mower","2026","","M-110","pending")
 ];
 const d=[D("D-01","EX-01","Sample Driver 1","07700 900101"),D("D-02","EX-01","Sample Driver 2","07700 900102"),D("D-03","EX-02","Sample Driver 3","07700 900103"),D("D-04","EX-03","Sample Driver 4","07700 900104"),D("D-05","EX-04","Sample Driver 5","07700 900105")];
 const S=(id,field,start,demo,team)=>({id,field,start:parseTime(start),demo,team,delay:0,state:null});
 const T=(role,power,impls,driver)=>({role,power:power||"",impls:impls||[],driver:driver||"",confirmed:null});
 const slots=[
  S("S1",6,"10:30","Mowing",[T("Mower team","M-110",["M-112"],"D-05")]),
  S("S2",8,"11:10","Tedding",[T("Tedder team","M-110",["M-111"],"D-05")]),
  S("S3",11,"11:50","Vintage raking",[T("Rake team","M-107",["M-109"],"D-04")]),
  S("S4",11,"13:10","Vintage harvesting",[T("Harvester","M-107",["M-108"],"D-04"),T("Trailer 1","M-104",["M-105"],"D-03")]),
  S("S5",9,"14:30","Forage harvesting",[T("Harvester","M-101",[],"D-01"),T("Trailer 1","M-102",["M-103"],"D-02"),T("Trailer 2","M-104",["M-105"],"D-03")]),
  S("S6",10,"14:30","Buckraking the clamp",[T("Buckrake","M-104",["M-106"],"D-03")])
 ];
 return {v:1,exhibitors:ex,machines:m,drivers:d,slots,settings:{first:630,len:30,gap:10,count:10,changeover:15},checks:{"*":DEFAULT_CHECKS.slice()},calls:[],audit:[]};
}

/* ===== Phase 3 shared content: sponsors, offers, vouchers, news, machine histories & media, notifications ===== */
const P3_KEY="psd_p3";
function seedP3(){
 const SP=(id,n,logo,web,tier,en,cy,bg)=>({id,n,logo,bg:bg||"",web,tier,en,cy,contact:"Sample Sponsor Contact "+id.slice(3),status:"approved",pending:null});
 const V=(code,holder,group,spId)=>({code,holder,group,spId:spId||"",used:null});
 return {v:1,
  sponsors:[
   SP("SP-1","Gwili Jones","sponsors/gwili.png","https://www.gwilitractors.co.uk","Gold","Family-run tractor dealership and New Holland main dealer, serving West Wales since 1947, with depots in Carmarthen and Lampeter.","Deliwr tractorau teuluol a phrif ddeliwr New Holland, yn gwasanaethu Gorllewin Cymru ers 1947, gyda safleoedd yng Nghaerfyrddin a Llanbed."),
   SP("SP-2","J E Lawrence & Son Ltd","sponsors/jel.png","https://www.jelawrence.co.uk","Gold","Serving West Wales since 1936 – heating fuel and oil, plus new and used machinery as main dealer for JCB, New Holland and other makes.","Yn gwasanaethu Gorllewin Cymru ers 1936 – tanwydd gwresogi ac olew, a pheiriannau newydd ac ail-law fel prif ddeliwr JCB, New Holland a gwneuthuriadau eraill.","#000"),
   SP("SP-3","CS Machinery Ltd","sponsors/csm.png","https://csmachinery.co.uk","Silver","Quality used agricultural machinery across the UK, Ireland and beyond. West Wales dealer for SlurryKat, including Doda parts and spares.","Peiriannau amaethyddol ail-law o safon ar draws y DU, Iwerddon a thu hwnt. Deliwr SlurryKat yng Ngorllewin Cymru, gan gynnwys darnau Doda."),
   SP("SP-4","Riverlea","sponsors/riverlea.png","https://riverlea.co.uk","Silver","CLAAS dealer covering South and West Wales from depots at Crymych, Whitland, Llandow and Raglan.","Deliwr CLAAS yn gwasanaethu De a Gorllewin Cymru o safleoedd yng Nghrymych, Hendy-gwyn, Llandŵ a Rhaglan.")],
  offers:[
   {id:"OF-1",spId:"SP-4",en:"Come and see a CLAAS forage harvester up close on our stand in the Main Show Field.",cy:"Dewch i weld cynaeafwr porthiant CLAAS yn agos ar ein stondin yn y Prif Gae Sioe.",status:"approved",at:"01/11/2026"},
   {id:"OF-2",spId:"SP-1",en:"Sample offer: 10% off filters ordered on the day – show this app at our stand.",cy:"Cynnig enghreifftiol: 10% oddi ar hidlwyr a archebir ar y diwrnod – dangoswch yr ap hwn ar ein stondin.",status:"pending",at:"06/11/2026"}],
  interest:[{id:"SI-1",name:"Sample Name E",biz:"Sample Feeds Ltd",email:"e@example.com",phone:"07700 900005",msg:"Interested in sponsoring the Main Show Field.",at:"05/11/2026",status:"new"}],
  vouchers:[V("MEAL-S1-01","Gwili Jones","Sponsor","SP-1"),V("MEAL-S1-02","Gwili Jones","Sponsor","SP-1"),V("MEAL-S4-01","Riverlea","Sponsor","SP-4"),V("MEAL-ST-01","Sample Staff 1","Staff"),V("MEAL-ST-02","Sample Staff 2","Staff"),V("MEAL-ST-03","Sample Staff 3","Staff")],
  news:[{id:"N-1",date:"2026-11-01",status:"published",img:"news/save-the-date-2027.jpg",video:"news/save-the-date-2027.mp4",
    en:{t:"Save the date: Saturday 11 September 2027",b:"Pembrokeshire Silage Day is back for 2027 at Slade Hall Farm, Haverfordwest – another day of grass, with mowing, tedding, raking, harvesting and baling all working live."},
    cy:{t:"Cadwch y dyddiad: Dydd Sadwrn 11 Medi 2027",b:"Mae Diwrnod Silwair Sir Benfro yn ôl yn 2027 ar Fferm Slade Hall, Hwlffordd – diwrnod arall o borfa, gyda thorri, chwalu, rhacanu, cynaeafu a byrnu i gyd yn gweithio'n fyw."}}],
  hist:{}, media:[],
  notices:[
   {id:"NT-1",at:600,kind:"info",en:"Gates are open! Follow the signs from the A487 to Car Parks 1 and 2.",cy:"Mae'r gatiau ar agor! Dilynwch yr arwyddion o'r A487 i Feysydd Parcio 1 a 2.",status:"scheduled"},
   {id:"NT-2",at:780,kind:"info",en:"Vintage harvesting starts in Field 11 at 1:10pm – head over now for a good spot.",cy:"Mae'r cynaeafu hen beiriannau yn dechrau yng Nghae 11 am 1:10yp – ewch draw nawr i gael lle da.",status:"scheduled"},
   {id:"NT-3",at:990,kind:"info",en:"Thank you for coming! The show closes at 5pm – please drive slowly on the lanes.",cy:"Diolch am ddod! Mae'r sioe yn cau am 5yp – gyrrwch yn araf ar y lonydd, os gwelwch yn dda.",status:"scheduled"}]
 };
}
function loadP3(){try{const v=JSON.parse(localStorage.getItem(P3_KEY)||"null");if(v&&v.v===1)return v}catch(e){}const s=seedP3();try{localStorage.setItem(P3_KEY,JSON.stringify(s))}catch(e){}return s}
// A notice is "out" once its time has passed (or it was sent manually) and it hasn't been withdrawn
const noticeOut=(n,now)=>n.status!=="cancelled"&&(n.status==="sent"||(n.at!=null&&n.at<=now));
const ytId=u=>{const m=String(u||"").match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/))([A-Za-z0-9_-]{11})/);return m?m[1]:null};
