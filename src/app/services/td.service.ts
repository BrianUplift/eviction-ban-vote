import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TdService {
  getTds() {
    return TDS;
  }

  getTd(name: string) {
    return TDS.find((td) => td.name === name);
  }

  constructor() {}
}

const TDS = [
  {
    name: "Alan Kelly",
    imageUrl: "./assets/images/TDs/Alan Kelly_Lab_Tipperary.jpg",
    partyName: "Labour Party",
    constituency: "Tipperary",
    score: "./assets/images/positive.jpg",
    email: "alan.kelly@oir.ie",
    phone: "01 6183229"
  },
  {
    name: "Brian Leddin",
    imageUrl: "./assets/images/TDs/Brian Leddin_GP_Limerick City.jpg",
    partyName: "Green Party",
    constituency: "Limerick City",
    score: "./assets/images/negative.jpg",
    email: "brian.leddin@greenparty.ie",
    phone: "01 6183205"
  },
  {
    name: "Carol Nolan",
    imageUrl: "./assets/images/TDs/Carol_Nolan_Ind.jpg",
    partyName: "Independent",
    constituency: "Laois Offaly",
    score: "./assets/images/positive.jpg",
    email: "carol.nolan@oireachtas.ie",
    phone: "01 6183060"
  },
  {
    name: "Cathal Berry",
    imageUrl: "./assets/images/TDs/Cathal_Berry_Ind.jpg",
    partyName: "Independent",
    constituency: "Kildare South",
    score: "./assets/images/negative.jpg",
    email: "cathal.berry@oireachtas.ie",
    phone: "01 6183351"
  },
  {
    name: "Cathal Crowe",
    imageUrl: "./assets/images/TDs/Cathal Crowe_FF_Clare.jpg",
    partyName: "Fianna Fáil",
    constituency: "Clare",
    score: "./assets/images/negative.jpg",
    email: "cathal.crowe@oireachtas.ie",
    phone: "01 6183154"
  },
  {
    name: "Catherine Connolly",
    imageUrl: "./assets/images/TDs/Connolly, Catherine.jfif",
    partyName: "Independent",
    constituency: "Galway West",
    score: "./assets/images/positive.jpg",
    email: "catherine.connolly@oireachtas.ie",
    phone: "01 6184411"
  },
  {
    name: "Catherine Martin",
    imageUrl: "./assets/images/TDs/Catherine Martin_GP_Dublin Rathdown.jpg",
    partyName: "Green Party",
    constituency: "Dublin Rathdown",
    score: "./assets/images/negative.jpg",
    email: "ministers.office@tcagsm.gov.ie",
    phone: "01 6183018"
  },
  {
    name: "Christopher O'Sullivan",
    imageUrl: "./assets/images/TDs/Christopher O_Sullivan_FF_Cork South West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork South West",
    score: "./assets/images/negative.jpg",
    email: "christopher.osullivan@oireachtas.ie",
    phone: "01 6183095"
  },
  {
    name: "Claire Kerrane",
    imageUrl: "./assets/images/TDs/Claire_Kerrane_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Roscommon Galway",
    score: "./assets/images/positive.jpg",
    email: "claire.kerrane@oireachtas.ie",
    phone: "01 6184788"
  },
  {
    name: "Colm Brophy",
    imageUrl: "./assets/images/TDs/Colm Brophy_FG_Dublin South West.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin South West",
    score: "./assets/images/negative.jpg",
    email: "colm.brophy@oireachtas.ie",
    phone: "01 6183196"
  },
  {
    name: "Darren O'Rourke",
    imageUrl: "./assets/images/TDs/Darren_ORourke_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Meath East",
    score: "./assets/images/positive.jpg",
    email: "darren.orourke@oireachtas.ie",
    phone: "01 6184504"
  },
  {
    name: "Denis Naughten",
    imageUrl: "./assets/images/TDs/Denis_Naughten_Ind.png",
    partyName: "Independent",
    constituency: "Roscommon Galway",
    score: "./assets/images/negative.jpg",
    email: "Denis.Naughten@oireachtas.ie",
    phone: "090 6627557"
  },
  {
    name: "Eoin O Broin",
    imageUrl: "./assets/images/TDs/Eoin_OBroin_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Mid West",
    score: "./assets/images/positive.jpg",
    email: "eoin.obroin@oireachtas.ie",
    phone: "01 6183080"
  },
  {
    name: "Gary Gannon",
    imageUrl: "./assets/images/TDs/Gary_Gannon_SD.jpeg",
    partyName: "Social Democrats",
    constituency: "Dublin Central",
    score: "./assets/images/positive.jpg",
    email: "gary.gannon@oireachtas.ie",
    phone: "086 1780149"
  },
  {
    name: "Holly Cairns",
    imageUrl: "./assets/images/TDs/Holly_Cairns_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Cork South West",
    score: "./assets/images/positive.jpg",
    email: "holly.cairns@oir.ie",
    phone: "086 3615830"
  },
  {
    name: "Imelda Munster",
    imageUrl: "./assets/images/TDs/Imelda_Munster_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Louth",
    score: "./assets/images/positive.jpg",
    email: "imelda.munster@oireachtas.ie",
    phone: "01 6183043"
  },
  {
    name: "Jack Chambers",
    imageUrl: "./assets/images/TDs/Jack Chambers_FF_Dublin West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin West",
    score: "./assets/images/negative.jpg",
    email: "jack@jackchambers.ie",
    phone: "01 6183754"
  },
  {
    name: "Jennifer Whitmore",
    imageUrl: "./assets/images/TDs/Jennifer_Whitmore_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Wicklow",
    score: "./assets/images/positive.jpg",
    email: "jennifer.whitmore@oireachtas.ie",
    phone: "01 6183571"
  },
  {
    name: "John Brady",
    imageUrl: "./assets/images/TDs/John_Brady_TD.jpg",
    partyName: "Sinn Féin",
    constituency: "Wicklow",
    score: "./assets/images/positive.jpg",
    email: "john.brady@oireachtas.ie",
    phone: "01 6183365"
  },
  {
    name: "Johnny Guirke",
    imageUrl: "./assets/images/TDs/Johnny_Guirke_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Meath West",
    score: "./assets/images/positive.jpg",
    email: "johnny.guirke@oireachtas.ie",
    phone: "01 6184502"
  },
  {
    name: "Johnny Mythen",
    imageUrl: "./assets/images/TDs/Johnny_Mythen_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Wexford",
    score: "./assets/images/did_not_vote.jpg",
    email: "johnny.mythen@oireachtas.ie",
    phone: "01 6183911"
  },
  {
    name: "Kathleen Funchion",
    imageUrl: "./assets/images/TDs/Kathleen_Funchion_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Carlow Kilkenny",
    score: "./assets/images/positive.jpg",
    email: "kathleen.funchion@oireachtas.ie",
    phone: "01 6183567"
  },
  {
    name: "Leo Varadkar",
    imageUrl: "./assets/images/TDs/Leo Varadkar_FG_Dublin West.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin West",
    score: "./assets/images/negative.jpg",
    email: "leo.varadkar@oireachtas.ie",
    phone: "016403133"
  },
  {
    name: "Mairead Farrell",
    imageUrl: "./assets/images/TDs/Mairead_Farrell_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Galway West",
    score: "./assets/images/positive.jpg",
    email: "mairead.farrell@oireachtas.ie",
    phone: "01 6183132"
  },
  {
    name: "Martin Browne",
    imageUrl: "./assets/images/TDs/Martin_Browne_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Tipperary",
    score: "./assets/images/positive.jpg",
    email: "martin.browne@oireachtas.ie",
    phone: "01 6184603"
  },
  {
    name: "Martin Kenny",
    imageUrl: "./assets/images/TDs/Martin_Kenny.png",
    partyName: "Sinn Féin",
    constituency: "Sligo Leitrim",
    score: "./assets/images/positive.jpg",
    email: "martin.kenny@oireachtas.ie",
    phone: "01 6183860"
  },
  {
    name: "Matt Shanahan",
    imageUrl: "./assets/images/TDs/Matt_Shanahan_Ind.jpg",
    partyName: "Independent",
    constituency: "Waterford",
    score: "./assets/images/negative.jpg",
    email: "matt.shanahan@oireachtas.ie",
    phone: "01 6183522"
  },
  {
    name: "Michael Fitzmaurice",
    imageUrl: "./assets/images/TDs/Fitzmaurice, Michael.jfif",
    partyName: "Independent",
    constituency: "Roscommon Galway",
    score: "./assets/images/did_not_vote.jpg",
    email: "michael.fitzmaurice@oireachtas.ie",
    phone: "01 6183321"
  },
  {
    name: "Michael McGrath",
    imageUrl: "./assets/images/TDs/Michael McGrath_FF_Cork South Central.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork South Central",
    score: "./assets/images/negative.jpg",
    email: "michael.mcgrath@oireachtas.ie",
    phone: "021 4376699"
  },
  {
    name: "Michael McNamara",
    imageUrl: "./assets/images/TDs/Michael_McNamara_Ind.jpg",
    partyName: "Independent",
    constituency: "Clare",
    score: "./assets/images/positive.jpg",
    email: "michael.mcnamara@oireachtas.ie",
    phone: "01 6183879"
  },
  {
    name: "Neasa Hourigan",
    imageUrl: "./assets/images/TDs/Neasa Hourigan_GP_Dublin Central.jpg",
    partyName: "Green Party",
    constituency: "Dublin Central",
    score: "./assets/images/positive.jpg",
    email: "neasa.hourigan@oireachtas.ie",
    phone: "085 2849914"
  },
  {
    name: "Pa Daly",
    imageUrl: "./assets/images/TDs/Pa_Daly_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Kerry",
    score: "./assets/images/positive.jpg",
    email: "pa.daly@oireachtas.ie",
    phone: "01 6183779"
  },
  {
    name: "Pat Buckley",
    imageUrl: "./assets/images/TDs/Pat_Buckley_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Cork East",
    score: "./assets/images/positive.jpg",
    email: "pat.buckley@oireachtas.ie",
    phone: "01 6183062"
  },
  {
    name: "Patrick Costello",
    imageUrl: "./assets/images/TDs/Patrick Costello_GP_Dublin South Central.jpg",
    partyName: "Green Party",
    constituency: "Dublin South Central",
    score: "./assets/images/negative.jpg",
    email: "patrick.costello@oireachtas.ie",
    phone: "087 9431494"
  },
  {
    name: "Paul Murphy",
    imageUrl: "./assets/images/TDs/Murphy, Paul.jfif",
    partyName: "Solidarity - People Before Profit",
    constituency: "Dublin South West",
    score: "./assets/images/positive.jpg",
    email: "paul.murphy@oireachtas.ie",
    phone: "01 6183071"
  },
  {
    name: "Pauline Tully",
    imageUrl: "./assets/images/TDs/Pauline_Tully_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Cavan Monaghan",
    score: "./assets/images/positive.jpg",
    email: "pauline.tully@oireachtas.ie",
    phone: "01 6183210"
  },
  {
    name: "Peadar Toibin",
    imageUrl: "./assets/images/TDs/Peadar_Toibin_Aontu.jpg",
    partyName: "Aontú",
    constituency: "Meath West",
    score: "./assets/images/positive.jpg",
    email: "peadar.toibin@oireachtas.ie",
    phone: "046 90 23472"
  },
  {
    name: "Peter Burke",
    imageUrl: "./assets/images/TDs/Peter Burke_FG_Longford-Westmeath.jpg",
    partyName: "Fine Gael",
    constituency: "Longford Westmeath",
    score: "./assets/images/negative.jpg",
    email: "peter.burke@oireachtas.ie",
    phone: "01 6183070"
  },
  {
    name: "Reada Cronin",
    imageUrl: "./assets/images/TDs/Reada_Cronin_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Kildare North",
    score: "./assets/images/positive.jpg",
    email: "reada.cronin@oireachtas.ie",
    phone: "01 6183823"
  },
  {
    name: "Richard O'Donoghue",
    imageUrl: "./assets/images/TDs/Richard_ODonoghue_INd.jpg",
    partyName: "Independent",
    constituency: "Limerick County",
    score: "./assets/images/positive.jpg",
    email: "richard.odonoghue@oireachtas.ie",
    phone: "063 311 33"
  },
  {
    name: "Ruairi O Murchu",
    imageUrl: "./assets/images/TDs/Ruairi_OMurchu_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Louth",
    score: "./assets/images/positive.jpg",
    email: "ruairi.omurchu@oireachtas.ie",
    phone: "01 6184060"
  },
  {
    name: "Sean O Fearghail",
    imageUrl: "./assets/images/TDs/Sean_O_Fearghail.png",
    partyName: "Fianna Fáil",
    constituency: "Kildare South",
    score: "./assets/images/did_not_vote.jpg",
    email: "sean.ofearghail@oireachtas.ie",
    phone: "0598634805"
  },
  {
    name: "Simon Coveney",
    imageUrl: "./assets/images/TDs/Simon Coveney_FG_Cork South Central.jpg",
    partyName: "Fine Gael",
    constituency: "Cork South Central",
    score: "./assets/images/did_not_vote.jpg",
    email: "simon.coveney@oireachtas.ie",
    phone: "0214374200"
  },
  {
    name: "Sorca Clarke",
    imageUrl: "./assets/images/TDs/Sorca_Clarke_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Longford Westmeath",
    score: "./assets/images/positive.jpg",
    email: "sorca.clarke@oireachtas.ie",
    phone: "01 6183455"
  },
  {
    name: "Steven Matthews",
    imageUrl: "./assets/images/TDs/Steven Matthews_GP_Wicklow.jpg",
    partyName: "Green Party",
    constituency: "Wicklow",
    score: "./assets/images/negative.jpg",
    email: "steven.matthews@oireachtas.ie",
    phone: "01 6183513"
  },
  {
    name: "Thomas Gould",
    imageUrl: "./assets/images/TDs/Gould, Thomas.jfif",
    partyName: "Sinn Féin",
    constituency: "Cork North Central",
    score: "./assets/images/positive.jpg",
    email: "thomas.gould@oireachtas.ie",
    phone: "01 6183513"
  },
  {
    name: "Verona Murphy",
    imageUrl: "./assets/images/TDs/Verona_Murphy_Ind.jpg",
    partyName: "Independent",
    constituency: "Wexford",
    score: "./assets/images/positive.jpg",
    email: "verona.murphy@oireachtas.ie",
    phone: "01 6183329"
  }
]