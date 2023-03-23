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
    name: "Alan Dillon",
    imageUrl: "./assets/images/TDs/Alan Dillon_FG_Mayo.jpg",
    partyName: "Fine Gael",
    constituency: "Mayo",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Barry Cowen",
    imageUrl: "./assets/images/TDs/Barry Cowen_FF_Laois–Offaly.jpg",
    partyName: "Fianna Fáil",
    constituency: "Laois Offaly",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Cathal Berry",
    imageUrl: "./assets/images/TDs/Cathal_Berry_Ind.jpg",
    partyName: "Independent",
    constituency: "Kildare South",
    score: "./assets/images/negative.jpg",
    partyScore: "28%"
  },
  {
    name: "Cathal Crowe",
    imageUrl: "./assets/images/TDs/Cathal Crowe_FF_Clare.jpg",
    partyName: "Fianna Fáil",
    constituency: "Clare",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Catherine Connolly",
    imageUrl: "./assets/images/TDs/Connolly, Catherine.jfif",
    partyName: "Independent",
    constituency: "Galway West",
    score: "./assets/images/positive.jpg",
    partyScore: "28%"
  },
  {
    name: "Chris Andrews",
    imageUrl: "./assets/images/TDs/Chris_Andrews_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Bay South",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Ciaran Cannon",
    imageUrl: "./assets/images/TDs/Ciarán Cannon_FG_Galway East.jpg",
    partyName: "Fine Gael",
    constituency: "Galway East",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Colm Brophy",
    imageUrl: "./assets/images/TDs/Colm Brophy_FG_Dublin South West.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin South West",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Colm Burke",
    imageUrl: "./assets/images/TDs/Colm Burke_FG_Cork North Central.jpg",
    partyName: "Fine Gael",
    constituency: "Cork North Central",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Cormac Devlin",
    imageUrl: "./assets/images/TDs/Cormac Devlin_FF_Dun Laoghaire.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dún Laoghaire",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Dara Calleary",
    imageUrl: "./assets/images/TDs/Dara Calleary_FF_Mayo.jpg",
    partyName: "Fianna Fáil",
    constituency: "Mayo",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "David Cullinane",
    imageUrl: "./assets/images/TDs/David_Cullinane_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Waterford",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Holly Cairns",
    imageUrl: "./assets/images/TDs/Holly_Cairns_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Cork South West",
    score: "./assets/images/positive.jpg",
    partyScore: "50%"
  },
  {
    name: "Jack Chambers",
    imageUrl: "./assets/images/TDs/Jack Chambers_FF_Dublin West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin West",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Jackie Cahill",
    imageUrl: "./assets/images/TDs/Jackie Cahill_FF_Tipperary.jpg",
    partyName: "Fianna Fáil",
    constituency: "Tipperary",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "James Browne",
    imageUrl: "./assets/images/TDs/James Browne_FF_Wexford.jpg",
    partyName: "Fianna Fáil",
    constituency: "Wexford",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Jennifer Carroll MacNeill",
    imageUrl: "./assets/images/TDs/Jennifer Carroll MacNeill_FG_Dún Laoghaire.jpg",
    partyName: "Fine Gael",
    constituency: "Dún Laoghaire",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Joan Collins",
    imageUrl: "./assets/images/TDs/Collins, Joan.png",
    partyName: "Independents 4 Change",
    constituency: "Dublin South Central",
    score: "./assets/images/positive.jpg",
    partyScore: "0%"
  },
  {
    name: "Joe Carey",
    imageUrl: "./assets/images/TDs/Joe Carey_FG_Clare.jpg",
    partyName: "Fine Gael",
    constituency: "Clare",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "John Brady",
    imageUrl: "./assets/images/TDs/John_Brady_TD.jpg",
    partyName: "Sinn Féin",
    constituency: "Wicklow",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Martin Browne",
    imageUrl: "./assets/images/TDs/Martin_Browne_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Tipperary",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Mary Butler",
    imageUrl: "./assets/images/TDs/Mary Butler_FF_Waterford.jpg",
    partyName: "Fianna Fáil",
    constituency: "Waterford",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Matt Carthy",
    imageUrl: "./assets/images/TDs/Matt_Carthy_SF.png",
    partyName: "Sinn Féin",
    constituency: "Cavan Monaghan",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Michael Collins",
    imageUrl: "./assets/images/TDs/Michael_Collins_Ind.jpg",
    partyName: "Independent",
    constituency: "Cork South West",
    score: "./assets/images/positive.jpg",
    partyScore: "28%"
  },
  {
    name: "Michael Creed",
    imageUrl: "./assets/images/TDs/Michael Creed_FG_Cork North West.jpg",
    partyName: "Fine Gael",
    constituency: "Cork North West",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Mick Barry",
    imageUrl: "./assets/images/TDs/Mick_Barry_PBP.jpg",
    partyName: "Solidarity - People Before Profit",
    constituency: "Cork North Central",
    score: "./assets/images/positive.jpg",
    partyScore: "20%"
  },
  {
    name: "Niall Collins",
    imageUrl: "./assets/images/TDs/Niall Collins_FF_Limerick County.jpg",
    partyName: "Fianna Fáil",
    constituency: "Limerick County",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Pa Daly",
    imageUrl: "./assets/images/TDs/Pa_Daly_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Kerry",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Pat Buckley",
    imageUrl: "./assets/images/TDs/Pat_Buckley_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Cork East",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Patrick Costello",
    imageUrl: "./assets/images/TDs/Patrick Costello_GP_Dublin South Central.jpg",
    partyName: "Green Party",
    constituency: "Dublin South Central",
    score: "./assets/images/negative.jpg",
    partyScore: "58%"
  },
  {
    name: "Peter Burke",
    imageUrl: "./assets/images/TDs/Peter Burke_FG_Longford-Westmeath.jpg",
    partyName: "Fine Gael",
    constituency: "Longford Westmeath",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Reada Cronin",
    imageUrl: "./assets/images/TDs/Reada_Cronin_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Kildare North",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Richard Boyd Barrett",
    imageUrl: "./assets/images/TDs/Richard_BoydBarrett_PBP.jpg",
    partyName: "Solidarity - People Before Profit",
    constituency: "Dún Laoghaire",
    score: "./assets/images/positive.jpg",
    partyScore: "20%"
  },
  {
    name: "Richard Bruton",
    imageUrl: "./assets/images/TDs/Richard Bruton_FG_Dublin Bay North.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Bay North",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Rose Conway Walsh",
    imageUrl: "./assets/images/TDs/Rose_ConwayWalsh_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Mayo",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Sean Canney",
    imageUrl: "./assets/images/TDs/Sean_Canney_Ind.jpg",
    partyName: "Independent",
    constituency: "Galway East",
    score: "./assets/images/negative.jpg",
    partyScore: "28%"
  },
  {
    name: "Sean Crowe",
    imageUrl: "./assets/images/TDs/Sean_Crowe_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin South West",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Simon Coveney",
    imageUrl: "./assets/images/TDs/Simon Coveney_FG_Cork South Central.jpg",
    partyName: "Fine Gael",
    constituency: "Cork South Central",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "Sorca Clarke",
    imageUrl: "./assets/images/TDs/Sorca_Clarke_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Longford Westmeath",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Thomas Byrne",
    imageUrl: "./assets/images/TDs/Thomas Byrne_FF_Meath East.jpg",
    partyName: "Fianna Fáil",
    constituency: "Meath East",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Pearse Doherty",
    imageUrl: "./assets/images/TDs/Pearse_Doherty_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Donegal",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Paul Donnelly",
    imageUrl: "./assets/images/TDs/Paul_Donnelly_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin West",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Stephen Donnelly",
    imageUrl: "./assets/images/TDs/Stephen Donnelly_FF_Wicklow.jpg",
    partyName: "Fianna Fáil",
    constituency: "Wicklow",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Paschal Donohoe",
    imageUrl: "./assets/images/TDs/Paschal Donohoe_FG_Dublin Central.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Central",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Francis Noel Duffy",
    imageUrl: "./assets/images/TDs/Francis Noel Duffy_GP_Dublin South-West.jpg",
    partyName: "Green Party",
    constituency: "Dublin South West",
    score: "./assets/images/negative.jpg",
    partyScore: "58%"
  },
  {
    name: "Bernard J. Durkan",
    imageUrl: "./assets/images/TDs/Bernard Durkan_FG_Kildare North.jpg",
    partyName: "Fine Gael",
    constituency: "Kildare North",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Dessie Ellis",
    imageUrl: "./assets/images/TDs/Dessie_Ellis_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin North West",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Damien English",
    imageUrl: "./assets/images/TDs/Damien English_FG_Meath West.jpg",
    partyName: "Fine Gael",
    constituency: "Meath West",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Alan Farrell",
    imageUrl: "./assets/images/TDs/Alan Farrell_FG_Dublin Fingal.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Fingal",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Mairead Farrell",
    imageUrl: "./assets/images/TDs/Mairead_Farrell_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Galway West",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Frank Feighan",
    imageUrl: "./assets/images/TDs/Frank Feighan_FG_Sligo-Leitrim.jpg",
    partyName: "Fine Gael",
    constituency: "Sligo Leitrim",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Michael Fitzmaurice",
    imageUrl: "./assets/images/TDs/Fitzmaurice, Michael.jfif",
    partyName: "Independent",
    constituency: "Roscommon Galway",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "28%"
  },
  {
    name: "Joe Flaherty",
    imageUrl: "./assets/images/TDs/Joe Flaherty_FF_Longford-Westmeath.jpg",
    partyName: "Fianna Fáil",
    constituency: "Longford Westmeath",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Charlie Flanagan",
    imageUrl: "./assets/images/TDs/Charlie Flanagan_FG_Laois-Offaly.jpg",
    partyName: "Fine Gael",
    constituency: "Laois Offaly",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Sean Fleming",
    imageUrl: "./assets/images/TDs/Seán Fleming_FF_Laois–Offaly.jpg",
    partyName: "Fianna Fáil",
    constituency: "Laois Offaly",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Norma Foley",
    imageUrl: "./assets/images/TDs/Norma Foley_FF_Kerry.jpg",
    partyName: "Fianna Fáil",
    constituency: "Kerry",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Kathleen Funchion",
    imageUrl: "./assets/images/TDs/Kathleen_Funchion_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Carlow Kilkenny",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Gary Gannon",
    imageUrl: "./assets/images/TDs/Gary_Gannon_SD.jpeg",
    partyName: "Social Democrats",
    constituency: "Dublin Central",
    score: "./assets/images/positive.jpg",
    partyScore: "50%"
  },
  {
    name: "Thomas Gould",
    imageUrl: "./assets/images/TDs/Gould, Thomas.jfif",
    partyName: "Sinn Féin",
    constituency: "Cork North Central",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Noel Grealish",
    imageUrl: "./assets/images/TDs/Grealish, Noel.jfif",
    partyName: "Independent",
    constituency: "Galway West",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "28%"
  },
  {
    name: "Brendan Griffin",
    imageUrl: "./assets/images/TDs/Brendan Griffin_FG_Kerry.jpg",
    partyName: "Fine Gael",
    constituency: "Kerry",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Johnny Guirke",
    imageUrl: "./assets/images/TDs/Johnny_Guirke_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Meath West",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Marian Harkin",
    imageUrl: "./assets/images/TDs/Marian_Harkin_Ind.jpg",
    partyName: "Independent",
    constituency: "Sligo Leitrim",
    score: "./assets/images/positive.jpg",
    partyScore: "28%"
  },
  {
    name: "Simon Harris",
    imageUrl: "./assets/images/TDs/Simon Harris_FG_Wicklow.jpg",
    partyName: "Fine Gael",
    constituency: "Wicklow",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Sean Haughey",
    imageUrl: "./assets/images/TDs/Seán Haughey_FF_Dublin Bay North.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin Bay North",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Danny Healy-Rae",
    imageUrl: "./assets/images/TDs/Danny_HealyRae_Ind.jpg",
    partyName: "Independent",
    constituency: "Kerry",
    score: "./assets/images/negative.jpg",
    partyScore: "28%"
  },
  {
    name: "Michael Healy-Rae",
    imageUrl: "./assets/images/TDs/Michael_HealyRae_Ind.jpg",
    partyName: "Independent",
    constituency: "Kerry",
    score: "./assets/images/positive.jpg",
    partyScore: "28%"
  },
  {
    name: "Martin Heydon",
    imageUrl: "./assets/images/TDs/Martin Heydon_FG_Kildare South.jpg",
    partyName: "Fine Gael",
    constituency: "Kildare South",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Emer Higgins",
    imageUrl: "./assets/images/TDs/Emer Higgins_FG_Dublin Mid West.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Mid West",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Neasa Hourigan",
    imageUrl: "./assets/images/TDs/Neasa Hourigan_GP_Dublin Central.jpg",
    partyName: "Green Party",
    constituency: "Dublin Central",
    score: "./assets/images/positive.jpg",
    partyScore: "58%"
  },
  {
    name: "Brendan Howlin",
    imageUrl: "./assets/images/TDs/Brendan Howlin_Lab_Wexford.jpg",
    partyName: "Labour Party",
    constituency: "Wexford",
    score: "./assets/images/positive.jpg",
    partyScore: "71%"
  },
  {
    name: "Heather Humphreys",
    imageUrl: "./assets/images/TDs/Heather Humphreys_FG_Cavan-Monaghan.jpg",
    partyName: "Fine Gael",
    constituency: "Cavan Monaghan",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Paul Kehoe",
    imageUrl: "./assets/images/TDs/Paul Kehoe_FG_Wexford.jpg",
    partyName: "Fine Gael",
    constituency: "Wexford",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Alan Kelly",
    imageUrl: "./assets/images/TDs/Alan Kelly_Lab_Tipperary.jpg",
    partyName: "Labour Party",
    constituency: "Tipperary",
    score: "./assets/images/positive.jpg",
    partyScore: "71%"
  },
  {
    name: "Gino Kenny",
    imageUrl: "./assets/images/TDs/Gino_Kenny_PBP.jpg",
    partyName: "Solidarity - People Before Profit",
    constituency: "Dublin Mid West",
    score: "./assets/images/positive.jpg",
    partyScore: "20%"
  },
  {
    name: "Martin Kenny",
    imageUrl: "./assets/images/TDs/Martin_Kenny_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Sligo Leitrim",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Claire Kerrane",
    imageUrl: "./assets/images/TDs/Claire_Kerrane_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Roscommon Galway",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "John Lahart",
    imageUrl: "./assets/images/TDs/John Lahart_FF_Dublin South West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin South West",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "James Lawless",
    imageUrl: "./assets/images/TDs/James Lawless_FF_Kildare North.jpg",
    partyName: "Fianna Fáil",
    constituency: "Kildare North",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Brian Leddin",
    imageUrl: "./assets/images/TDs/Brian Leddin_GP_Limerick City.jpg",
    partyName: "Green Party",
    constituency: "Limerick City",
    score: "./assets/images/negative.jpg",
    partyScore: "58%"
  },
  {
    name: "Michael Lowry",
    imageUrl: "./assets/images/TDs/Michael_Lowry_Ind.jpg",
    partyName: "Independent",
    constituency: "Tipperary",
    score: "./assets/images/negative.jpg",
    partyScore: "28%"
  },
  {
    name: "Pádraig MacLochlainn",
    imageUrl: "./assets/images/TDs/Padraig_McLochlainn_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Donegal",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Marc MacSharry",
    imageUrl: "./assets/images/TDs/Marc MacSharry_FF_Sligo-Leitim.jpg",
    partyName: "Fianna Fáil",
    constituency: "Sligo Leitrim",
    score: "./assets/images/positive.jpg",
    partyScore: "42%"
  },
  {
    name: "Josepha Madigan",
    imageUrl: "./assets/images/TDs/Josepha Madigan_FG_Dublin Rathdown.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Rathdown",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Catherine Martin",
    imageUrl: "./assets/images/TDs/Catherine Martin_GP_Dublin Rathdown.jpg",
    partyName: "Green Party",
    constituency: "Dublin Rathdown",
    score: "./assets/images/negative.jpg",
    partyScore: "58%"
  },
  {
    name: "Micheal Martin",
    imageUrl: "./assets/images/TDs/Micheál Martin_FF_Cork South Central.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork South Central",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Steven Matthews",
    imageUrl: "./assets/images/TDs/Steven Matthews_GP_Wicklow.jpg",
    partyName: "Green Party",
    constituency: "Wicklow",
    score: "./assets/images/negative.jpg",
    partyScore: "58%"
  },
  {
    name: "Paul McAuliffe",
    imageUrl: "./assets/images/TDs/Paul McAuliffe_FF_Dublin North West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin North West",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Charlie McConalogue",
    imageUrl: "./assets/images/TDs/Charlie McConalogue_FF_Donegal.jpg",
    partyName: "Fianna Fáil",
    constituency: "Donegal",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Mary Lou McDonald",
    imageUrl: "./assets/images/TDs/MaryLou_McDonald_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Central",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Helen McEntee",
    imageUrl: "./assets/images/TDs/Helen McEntee_FG_Meath East.jpg",
    partyName: "Fine Gael",
    constituency: "Meath East",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "Mattie McGrath",
    imageUrl: "./assets/images/TDs/Mattie_McGrath_Ind.jpg",
    partyName: "Independent",
    constituency: "Tipperary",
    score: "./assets/images/positive.jpg",
    partyScore: "28%"
  },
  {
    name: "Michael McGrath",
    imageUrl: "./assets/images/TDs/Michael McGrath_FF_Cork South Central.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork South Central",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "John McGuinness",
    imageUrl: "./assets/images/TDs/John McGuinness_FF_Carlow–Kilkenny.jpg",
    partyName: "Fianna Fáil",
    constituency: "Carlow Kilkenny",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Joe McHugh",
    imageUrl: "./assets/images/TDs/Joe McHugh_FG_Donegal.jpg",
    partyName: "Fine Gael",
    constituency: "Donegal",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Michael McNamara",
    imageUrl: "./assets/images/TDs/Michael_McNamara_Ind.jpg",
    partyName: "Independent",
    constituency: "Clare",
    score: "./assets/images/positive.jpg",
    partyScore: "28%"
  },
  {
    name: "Denise Mitchell",
    imageUrl: "./assets/images/TDs/Denise_Mitchell_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Bay North",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Aindrias Moynihan",
    imageUrl: "./assets/images/TDs/Aindrias Moynihan_FF_Cork North West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork North West",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Michael Moynihan",
    imageUrl: "./assets/images/TDs/Michael Moynihan_FF_Cork North West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork North West",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Imelda Munster",
    imageUrl: "./assets/images/TDs/Imelda_Munster_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Louth",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Jennifer Murnane O'Connor",
    imageUrl: "./assets/images/TDs/Jennifer Murnane O_Connor_FF_Carlow–Kilkenny.jpg",
    partyName: "Fianna Fáil",
    constituency: "Carlow Kilkenny",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Catherine Murphy",
    imageUrl: "./assets/images/TDs/Catherine_Murphy_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Kildare North",
    score: "./assets/images/positive.jpg",
    partyScore: "50%"
  },
  {
    name: "Paul Murphy",
    imageUrl: "./assets/images/TDs/Murphy, Paul.jfif",
    partyName: "Solidarity - People Before Profit",
    constituency: "Dublin South West",
    score: "./assets/images/positive.jpg",
    partyScore: "20%"
  },
  {
    name: "Verona Murphy",
    imageUrl: "./assets/images/TDs/Verona_Murphy_Ind.jpg",
    partyName: "Independent",
    constituency: "Wexford",
    score: "./assets/images/positive.jpg",
    partyScore: "28%"
  },
  {
    name: "Johnny Mythen",
    imageUrl: "./assets/images/TDs/Johnny_Mythen_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Wexford",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "43%"
  },
  {
    name: "Ged Nash",
    imageUrl: "./assets/images/TDs/Ged Nash_Lab_Louth.jpg",
    partyName: "Labour Party",
    constituency: "Louth",
    score: "./assets/images/positive.jpg",
    partyScore: "71%"
  },
  {
    name: "Denis Naughten",
    imageUrl: "./assets/images/TDs/Denis_Naughten_Ind.png",
    partyName: "Independent",
    constituency: "Roscommon Galway",
    score: "./assets/images/negative.jpg",
    partyScore: "28%"
  },
  {
    name: "Hildegarde Naughton",
    imageUrl: "./assets/images/TDs/Hildegarde Naughton_FG_Galway West.jpg",
    partyName: "Fine Gael",
    constituency: "Galway West",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Carol Nolan",
    imageUrl: "./assets/images/TDs/Carol_Nolan_Ind.jpg",
    partyName: "Independent",
    constituency: "Laois Offaly",
    score: "./assets/images/positive.jpg",
    partyScore: "28%"
  },
  {
    name: "Malcolm Noonan",
    imageUrl: "./assets/images/TDs/Malcolm Noonan_GP_Carlow-Kilkenny.jpg",
    partyName: "Green Party",
    constituency: "Carlow Kilkenny",
    score: "./assets/images/negative.jpg",
    partyScore: "58%"
  },
  {
    name: "Darragh O'Brien",
    imageUrl: "./assets/images/TDs/Darragh O_Brien _FF_Dublin Fingal.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin Fingal",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Joe O'Brien",
    imageUrl: "./assets/images/TDs/Joe O_Brien_GP_Dublin Fingal.jpg",
    partyName: "Green Party",
    constituency: "Dublin Fingal",
    score: "./assets/images/negative.jpg",
    partyScore: "58%"
  },
  {
    name: "Cian O'Callaghan",
    imageUrl: "./assets/images/TDs/Cian_OCallaghan_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Dublin Bay North",
    score: "./assets/images/positive.jpg",
    partyScore: "50%"
  },
  {
    name: "Jim O'Callaghan",
    imageUrl: "./assets/images/TDs/Jim O_Callaghan_FF_Dublin Bay South.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin Bay South",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "James O'Connor",
    imageUrl: "./assets/images/TDs/James O_Connor_FF_Cork East.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork East",
    score: "./assets/images/positive.jpg",
    partyScore: "42%"
  },
  {
    name: "Willie O'Dea",
    imageUrl: "./assets/images/TDs/Willie O_Dea_FF_Limerick City.jpg",
    partyName: "Fianna Fáil",
    constituency: "Limerick City",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Peter Fitzpatrick",
    imageUrl: "./assets/images/TDs/Peter_Fitzpatrick_Louth_Independent.jfif",
    partyName: "Independent",
    constituency: "Louth",
    score: "./assets/images/positive.jpg",
    partyScore: "28%"
  },
  {
    name: "Kieran O'Donnell",
    imageUrl: "./assets/images/TDs/Kieran O_Donnell_FG_Limerick City.jpg",
    partyName: "Fine Gael",
    constituency: "Limerick City",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Richard O'Donoghue",
    imageUrl: "./assets/images/TDs/Richard_ODonoghue_INd.jpg",
    partyName: "Independent",
    constituency: "Limerick County",
    score: "./assets/images/positive.jpg",
    partyScore: "28%"
  },
  {
    name: "Patrick O'Donovan",
    imageUrl: "./assets/images/TDs/Patrick O_Donovan_FG_Limerick County.jpg",
    partyName: "Fine Gael",
    constituency: "Limerick County",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Fergus O'Dowd",
    imageUrl: "./assets/images/TDs/Fergus O_Dowd_FG_Louth.jpg",
    partyName: "Fine Gael",
    constituency: "Louth",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Roderic O'Gorman",
    imageUrl: "./assets/images/TDs/Roderic O_Gorman_GP_Dublin West.jpg",
    partyName: "Green Party",
    constituency: "Dublin West",
    score: "./assets/images/negative.jpg",
    partyScore: "58%"
  },
  {
    name: "Louise O'Reilly",
    imageUrl: "./assets/images/TDs/Louise_OReilly_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Fingal",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Darren O'Rourke",
    imageUrl: "./assets/images/TDs/Darren_ORourke_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Meath East",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Christopher O'Sullivan",
    imageUrl: "./assets/images/TDs/Christopher O_Sullivan_FF_Cork South West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork South West",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Padraig O'Sullivan",
    imageUrl: "./assets/images/TDs/Pádraig O_Sullivan_FF_Cork North Central.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork North Central",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "John Paul Phelan",
    imageUrl: "./assets/images/TDs/John Paul Phelan_FG_Carlow-Kilkenny.jpg",
    partyName: "Fine Gael",
    constituency: "Carlow Kilkenny",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Thomas Pringle",
    imageUrl: "./assets/images/TDs/Thomas_Pringle_Ind.jpg",
    partyName: "Independent",
    constituency: "Donegal",
    score: "./assets/images/positive.jpg",
    partyScore: "28%"
  },
  {
    name: "Maurice Quinlivan",
    imageUrl: "./assets/images/TDs/Maurice_Quinlivan_SF.jpeg",
    partyName: "Sinn Féin",
    constituency: "Limerick City",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Anne Rabbitte",
    imageUrl: "./assets/images/TDs/Anne Rabbitte_FF_Galway East.jpg",
    partyName: "Fianna Fáil",
    constituency: "Galway East",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Neale Richmond",
    imageUrl: "./assets/images/TDs/Neale Richmond_FG_Dublin Rathdown.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Rathdown",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Michael Ring",
    imageUrl: "./assets/images/TDs/Michael Ring_FG_Mayo.jpg",
    partyName: "Fine Gael",
    constituency: "Mayo",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Eamon Ryan",
    imageUrl: "./assets/images/TDs/Eamon Ryan_GP_Dublin Bay South.jpg",
    partyName: "Green Party",
    constituency: "Dublin Bay South",
    score: "./assets/images/negative.jpg",
    partyScore: "58%"
  },
  {
    name: "Patricia Ryan",
    imageUrl: "./assets/images/TDs/Patricia_Ryan_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Kildare South",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Matt Shanahan",
    imageUrl: "./assets/images/TDs/Matt_Shanahan_Ind.jpg",
    partyName: "Independent",
    constituency: "Waterford",
    score: "./assets/images/negative.jpg",
    partyScore: "28%"
  },
  {
    name: "Sean Sherlock",
    imageUrl: "./assets/images/TDs/Sean Sherlock_Lab_Cork East.jpg",
    partyName: "Labour Party",
    constituency: "Cork East",
    score: "./assets/images/positive.jpg",
    partyScore: "71%"
  },
  {
    name: "Roisin Shortall",
    imageUrl: "./assets/images/TDs/Roisin_Shortall_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Dublin North West",
    score: "./assets/images/positive.jpg",
    partyScore: "50%"
  },
  {
    name: "Brendan Smith",
    imageUrl: "./assets/images/TDs/Brendan Smith_FF_Cavan–Monaghan.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cavan Monaghan",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Brid Smith",
    imageUrl: "./assets/images/TDs/Brid_Smith_PBP.jpg",
    partyName: "Solidarity - People Before Profit",
    constituency: "Dublin South Central",
    score: "./assets/images/positive.jpg",
    partyScore: "20%"
  },
  {
    name: "Duncan Smith",
    imageUrl: "./assets/images/TDs/Duncan Smith_Lab_Dublin Fingal.jpg",
    partyName: "Labour Party",
    constituency: "Dublin Fingal",
    score: "./assets/images/positive.jpg",
    partyScore: "71%"
  },
  {
    name: "Niamh Smyth",
    imageUrl: "./assets/images/TDs/Niamh Smyth_FF_Cavan–Monaghan.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cavan Monaghan",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "42%"
  },
  {
    name: "Ossian Smyth",
    imageUrl: "./assets/images/TDs/Ossian Smyth_GP_Dun Laoghaire.jpg",
    partyName: "Green Party",
    constituency: "Dún Laoghaire",
    score: "./assets/images/negative.jpg",
    partyScore: "58%"
  },
  {
    name: "Brian Stanley",
    imageUrl: "./assets/images/TDs/Brian_Stanley_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Laois Offaly",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "David Stanton",
    imageUrl: "./assets/images/TDs/David Stanton_FG_Cork East.jpg",
    partyName: "Fine Gael",
    constituency: "Cork East",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Robert Troy",
    imageUrl: "./assets/images/TDs/Robert Troy_FF_Longford-Westmeath.jpg",
    partyName: "Fianna Fáil",
    constituency: "Longford Westmeath",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Pauline Tully",
    imageUrl: "./assets/images/TDs/Pauline_Tully_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Cavan Monaghan",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Peadar Tóibín",
    imageUrl: "./assets/images/TDs/Peadar_Toibin_Aontu.jpg",
    partyName: "Aontú",
    constituency: "Meath West",
    score: "./assets/images/positive.jpg",
    partyScore: "100%"
  },
  {
    name: "Leo Varadkar",
    imageUrl: "./assets/images/TDs/Leo Varadkar_FG_Dublin West.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin West",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Mark Ward",
    imageUrl: "./assets/images/TDs/Mark_Ward_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Mid West",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Jennifer Whitmore",
    imageUrl: "./assets/images/TDs/Jennifer_Whitmore_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Wicklow",
    score: "./assets/images/positive.jpg",
    partyScore: "50%"
  },
  {
    name: "Violet-Anne Wynne",
    imageUrl: "./assets/images/TDs/Wynne, Violet-Anne.jfif",
    partyName: "Sinn Féin",
    constituency: "Clare",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Eoin Ó Broin",
    imageUrl: "./assets/images/TDs/Eoin_OBroin_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Mid West",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Marc Ó Cathasaigh",
    imageUrl: "./assets/images/TDs/Marc O_Cathasaigh_GP_Waterford.jpg",
    partyName: "Green Party",
    constituency: "Waterford",
    score: "./assets/images/negative.jpg",
    partyScore: "58%"
  },
  {
    name: "Eamon Ó Cuív",
    imageUrl: "./assets/images/TDs/Éamon Ó Cuív_FF_Galway West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Galway West",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Donnchadh Ó Laoghaire",
    imageUrl: "./assets/images/TDs/Donnchadh_OLaoghaire_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Cork South Central",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "43%"
  },
  {
    name: "Ruairi Ó Murchú",
    imageUrl: "./assets/images/TDs/Ruairi_OMurchu_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Louth",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Aodhan Ó Ríordáin",
    imageUrl: "./assets/images/TDs/Aodhán Ó Ríordáin_Lab_Dublin Bay North.jpg",
    partyName: "Labour Party",
    constituency: "Dublin Bay North",
    score: "./assets/images/positive.jpg",
    partyScore: "71%"
  },
  {
    name: "Aengus Ó Snodaigh",
    imageUrl: "./assets/images/TDs/Aengus_OSnodaigh_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin South Central",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Ivana Bacik",
    imageUrl: "./assets/images/TDs/Bacik, Ivana_Lab.png",
    partyName: "Labour Party",
    constituency: "Dublin Bay South",
    score: "./assets/images/positive.jpg",
    partyScore: "71%"
  },
  {
    name: "Seán Ó Fearghaíl",
    imageUrl: "./assets/images/TDs/O Fearghail, Sean_FF.png",
    partyName: "Fianna Fáil",
    constituency: "Kildare South",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "42%"
  }
 ]