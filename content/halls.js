"use strict";
/* ================= HALLS & ZONES ================= */
/* ---------- halls / zones ---------- */
const ZONES = {
  foyer:  {name:"THE FOYER",               color:"#e0b478", rgb:[46,38,30]},
  fail:   {name:"THE GALLERY OF FAILURES", color:"#ee6a5c", rgb:[48,27,26]},
  gov:    {name:"THE ROTUNDA",             color:"#e2c46e", rgb:[45,39,27]},
  origins:{name:"ORIGINS HALL",            color:"#c9a06a", rgb:[42,36,27]},
  interp: {name:"THE GLASS BRAIN",         color:"#63d6d0", rgb:[24,39,41]},
  align:  {name:"THE GENIE ROOM",          color:"#b48ce8", rgb:[37,29,48]},
  finale: {name:"THE LAST ROOM",           color:"#f2ede2", rgb:[40,39,36]},
  office: {name:"THE OLD OFFICE",          color:"#d9a05f", rgb:[52,42,30]},
  forecast:{name:"THE HALL OF FORECASTS",  color:"#7ec3e8", rgb:[26,33,44]},
  shop:    {name:"THE GIFT SHOP · GET INVOLVED", color:"#e0993f", rgb:[50,40,28]}
};
function zoneAt(x,y){
  if (x>=39) return "forecast";
  if (y>=36) return "shop";
  if (y>=27) return x<=10?"office":"foyer";
  if (y>=21) return "fail";
  if (y>=9)  return (x<=12)?"interp":(x>=26)?"align":"gov";
  return "origins";
}
const WINGNAME = {
  foyer:"Foyer", fail:"Gallery of Failures", gov:"Governance · The Rotunda",
  origins:"Origins Hall", interp:"Interpretability · The Glass Brain",
  align:"Alignment · The Genie Room", finale:"The Last Room",
  office:"Period Rooms · The Old Office", forecast:"Futures · The Hall of Forecasts",
  shop:"The Gift Shop"
};

/* Order halls appear in the directory (G). Add new halls here too. */
const HALLORDER=["foyer","office","fail","gov","origins","interp","align","forecast","finale"];
