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
    name: "Aengus O Snodaigh",
    imageUrl: "./assets/images/TDs/Aengus_OSnodaigh_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin South Central",
    score: "./assets/images/positive.jpg",
    email: "aengus.osnodaigh@oireachtas.ie"
  },
  {
    name: "Aindrias Moynihan",
    imageUrl: "./assets/images/TDs/Aindrias Moynihan_FF_Cork North West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork North West",
    score: "./assets/images/negative.jpg",
    email: "aindrias.moynihan@oireachtas.ie"
  },
  {
    name: "Alan Dillon",
    imageUrl: "./assets/images/TDs/Alan Dillon_FG_Mayo.jpg",
    partyName: "Fine Gael",
    constituency: "Mayo",
    score: "./assets/images/negative.jpg",
    email: "alan.dillon@oireachtas.ie"
  },
  {
    name: "Alan Farrell",
    imageUrl: "./assets/images/TDs/Alan Farrell_FG_Dublin Fingal.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Fingal",
    score: "./assets/images/negative.jpg",
    email: "alan.farrell@oireachtas.ie"
  },
  {
    name: "Alan Kelly",
    imageUrl: "./assets/images/TDs/Alan Kelly_Lab_Tipperary.jpg",
    partyName: "Labour Party",
    constituency: "Tipperary",
    score: "./assets/images/positive.jpg",
    email: "alan.kelly@oir.ie"
  },
  {
    name: "Anne Rabbitte",
    imageUrl: "./assets/images/TDs/Anne Rabbitte_FF_Galway East.jpg",
    partyName: "Fianna Fáil",
    constituency: "Galway East",
    score: "./assets/images/negative.jpg",
    email: "anne.rabbitte@oireachtas.ie"
  },
  {
    name: "Aodhan O Riordain",
    imageUrl: "./assets/images/TDs/Aodhán Ó Ríordáin_Lab_Dublin Bay North.jpg",
    partyName: "Labour Party",
    constituency: "Dublin Bay North",
    score: "./assets/images/positive.jpg",
    email: "aodhan.oriordain@oir.ie"
  },
  {
    name: "Barry Cowen",
    imageUrl: "./assets/images/TDs/Barry Cowen_FF_Laois–Offaly.jpg",
    partyName: "Fianna Fáil",
    constituency: "Laois Offaly",
    score: "./assets/images/negative.jpg",
    email: "barry.cowen@oireachtas.ie"
  },
  {
    name: "Bernard Durkan",
    imageUrl: "./assets/images/TDs/Bernard Durkan_FG_Kildare North.jpg",
    partyName: "Fine Gael",
    constituency: "Kildare North",
    score: "./assets/images/negative.jpg",
    email: "bernard.durkan@oireachtas.ie"
  },
  {
    name: "Brendan Griffin",
    imageUrl: "./assets/images/TDs/Brendan Griffin_FG_Kerry.jpg",
    partyName: "Fine Gael",
    constituency: "Kerry",
    score: "./assets/images/negative.jpg",
    email: "brendan.griffin@oireachtas.ie"
  },
  {
    name: "Brendan Howlin",
    imageUrl: "./assets/images/TDs/Brendan Howlin_Lab_Wexford.jpg",
    partyName: "Labour Party",
    constituency: "Wexford",
    score: "./assets/images/positive.jpg",
    email: "brendan.howlin@oireachtas.ie"
  },
  {
    name: "Brendan Smith",
    imageUrl: "./assets/images/TDs/Brendan Smith_FF_Cavan–Monaghan.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cavan Monaghan",
    score: "./assets/images/negative.jpg",
    email: "brendan.smith@oireachtas.ie"
  },
  {
    name: "Brian Leddin",
    imageUrl: "./assets/images/TDs/Brian Leddin_GP_Limerick City.jpg",
    partyName: "Green Party",
    constituency: "Limerick City",
    score: "./assets/images/negative.jpg",
    email: "brian.leddin@greenparty.ie"
  },
  {
    name: "Brian Stanley",
    imageUrl: "./assets/images/TDs/Brian_Stanley_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Laois Offaly",
    score: "./assets/images/positive.jpg",
    email: "brian.stanley@oireachtas.ie"
  },
  {
    name: "Brid Smith",
    imageUrl: "./assets/images/TDs/Brid_Smith_PBP.jpg",
    partyName: "Solidarity - People Before Profit",
    constituency: "Dublin South Central",
    score: "./assets/images/positive.jpg",
    email: "brid.smith@oireachtas.ie"
  },
  {
    name: "Carol Nolan",
    imageUrl: "./assets/images/TDs/Carol_Nolan_Ind.jpg",
    partyName: "Independent",
    constituency: "Laois Offaly",
    score: "./assets/images/positive.jpg",
    email: "carol.nolan@oireachtas.ie"
  },
  {
    name: "Cathal Berry",
    imageUrl: "./assets/images/TDs/Cathal_Berry_Ind.jpg",
    partyName: "Independent",
    constituency: "Kildare South",
    score: "./assets/images/negative.jpg",
    email: "cathal.berry@oireachtas.ie"
  },
  {
    name: "Cathal Crowe",
    imageUrl: "./assets/images/TDs/Cathal Crowe_FF_Clare.jpg",
    partyName: "Fianna Fáil",
    constituency: "Clare",
    score: "./assets/images/negative.jpg",
    email: "cathal.crowe@oireachtas.ie"
  },
  {
    name: "Catherine Connolly",
    imageUrl: "./assets/images/TDs/Connolly, Catherine.jfif",
    partyName: "Independent",
    constituency: "Galway West",
    score: "./assets/images/positive.jpg",
    email: "catherine.connolly@oireachtas.ie"
  },
  {
    name: "Catherine Martin",
    imageUrl: "./assets/images/TDs/Catherine Martin_GP_Dublin Rathdown.jpg",
    partyName: "Green Party",
    constituency: "Dublin Rathdown",
    score: "./assets/images/negative.jpg",
    email: "ministers.office@tcagsm.gov.ie"
  },
  {
    name: "Catherine Murphy",
    imageUrl: "./assets/images/TDs/Catherine_Murphy_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Kildare North",
    score: "./assets/images/positive.jpg",
    email: "catherine.murphy@oireachtas.ie"
  },
  {
    name: "Charlie Flanagan",
    imageUrl: "./assets/images/TDs/Charlie Flanagan_FG_Laois-Offaly.jpg",
    partyName: "Fine Gael",
    constituency: "Laois Offaly",
    score: "./assets/images/negative.jpg",
    email: "charles.flanagan@oireachtas.ie"
  },
  {
    name: "Charlie McConalogue",
    imageUrl: "./assets/images/TDs/Charlie McConalogue_FF_Donegal.jpg",
    partyName: "Fianna Fáil",
    constituency: "Donegal",
    score: "./assets/images/negative.jpg",
    email: "charlie.mcconalogue@oireachtas.ie"
  },
  {
    name: "Chris Andrews",
    imageUrl: "./assets/images/TDs/Chris_Andrews_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Bay South",
    score: "./assets/images/positive.jpg",
    email: "chris.andrews@oireachtas.ie"
  },
  {
    name: "Christopher O'Sullivan",
    imageUrl: "./assets/images/TDs/Christopher O_Sullivan_FF_Cork South West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork South West",
    score: "./assets/images/negative.jpg",
    email: "christopher.osullivan@oireachtas.ie"
  },
  {
    name: "Cian O'Callaghan",
    imageUrl: "./assets/images/TDs/Cian_OCallaghan_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Dublin Bay North",
    score: "./assets/images/positive.jpg",
    email: "Cian.OCallaghan@oireachtas.ie"
  },
  {
    name: "Ciaran Cannon",
    imageUrl: "./assets/images/TDs/Ciarán Cannon_FG_Galway East.jpg",
    partyName: "Fine Gael",
    constituency: "Galway East",
    score: "./assets/images/negative.jpg",
    email: "ciaran.cannon@oireachtas.ie"
  },
  {
    name: "Claire Kerrane",
    imageUrl: "./assets/images/TDs/Claire_Kerrane_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Roscommon Galway",
    score: "./assets/images/positive.jpg",
    email: "claire.kerrane@oireachtas.ie"
  },
  {
    name: "Colm Brophy",
    imageUrl: "./assets/images/TDs/Colm Brophy_FG_Dublin South West.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin South West",
    score: "./assets/images/negative.jpg",
    email: "colm.brophy@oireachtas.ie"
  },
  {
    name: "Colm Burke",
    imageUrl: "./assets/images/TDs/Colm Burke_FG_Cork North Central.jpg",
    partyName: "Fine Gael",
    constituency: "Cork North Central",
    score: "./assets/images/negative.jpg",
    email: "colm.burke@oireachtas.ie"
  },
  {
    name: "Cormac Devlin",
    imageUrl: "./assets/images/TDs/Cormac Devlin_FF_Dun Laoghaire.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dún Laoghaire",
    score: "./assets/images/negative.jpg",
    email: "cormac@cormacdevlin.ie"
  },
  {
    name: "Damien English",
    imageUrl: "./assets/images/TDs/Damien English_FG_Meath West.jpg",
    partyName: "Fine Gael",
    constituency: "Meath West",
    score: "./assets/images/negative.jpg",
    email: "damien.english@oireachtas.ie"
  },
  {
    name: "Danny Healy Rae",
    imageUrl: "./assets/images/TDs/Danny_HealyRae_Ind.jpg",
    partyName: "Independent",
    constituency: "Kerry",
    score: "./assets/images/negative.jpg",
    email: "danny.healy-rae@oireachtas.ie"
  },
  {
    name: "Dara Calleary",
    imageUrl: "./assets/images/TDs/Dara Calleary_FF_Mayo.jpg",
    partyName: "Fianna Fáil",
    constituency: "Mayo",
    score: "./assets/images/negative.jpg",
    email: "dara.calleary@oireachtas.ie"
  },
  {
    name: "Darragh O'Brien",
    imageUrl: "./assets/images/TDs/Darragh O_Brien _FF_Dublin Fingal.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin Fingal",
    score: "./assets/images/negative.jpg",
    email: "darragh.obrien@oireachtas.ie"
  },
  {
    name: "Darren O'Rourke",
    imageUrl: "./assets/images/TDs/Darren_ORourke_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Meath East",
    score: "./assets/images/positive.jpg",
    email: "darren.orourke@oireachtas.ie"
  },
  {
    name: "David Cullinane",
    imageUrl: "./assets/images/TDs/David_Cullinane_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Waterford",
    score: "./assets/images/positive.jpg",
    email: "david.cullinane@oireachtas.ie"
  },
  {
    name: "David Stanton",
    imageUrl: "./assets/images/TDs/David Stanton_FG_Cork East.jpg",
    partyName: "Fine Gael",
    constituency: "Cork East",
    score: "./assets/images/negative.jpg",
    email: "david.stanton@oireachtas.ie"
  },
  {
    name: "Denis Naughten",
    imageUrl: "./assets/images/TDs/Denis_Naughten_Ind.png",
    partyName: "Independent",
    constituency: "Roscommon Galway",
    score: "./assets/images/negative.jpg",
    email: "Denis.Naughten@oireachtas.ie"
  },
  {
    name: "Denise Mitchell",
    imageUrl: "./assets/images/TDs/Denise_Mitchell_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Bay North",
    score: "./assets/images/positive.jpg",
    email: "denise.mitchell@oireachtas.ie"
  },
  {
    name: "Dessie Ellis",
    imageUrl: "./assets/images/TDs/Dessie_Ellis_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin North West",
    score: "./assets/images/positive.jpg",
    email: "dessie.ellis@oireachtas.ie"
  },
  {
    name: "Donnchadh O Laoghaire",
    imageUrl: "./assets/images/TDs/Donnchadh_OLaoghaire_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Cork South Central",
    score: "./assets/images/did_not_vote.jpg",
    email: "donnchadh.olaoghaire@oireachtas.ie"
  },
  {
    name: "Duncan Smith",
    imageUrl: "./assets/images/TDs/Duncan Smith_Lab_Dublin Fingal.jpg",
    partyName: "Labour Party",
    constituency: "Dublin Fingal",
    score: "./assets/images/positive.jpg",
    email: "duncan.smith@oireachtas.ie"
  },
  {
    name: "Eamon O Cuiv",
    imageUrl: "./assets/images/TDs/Éamon Ó Cuív_FF_Galway West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Galway West",
    score: "./assets/images/negative.jpg",
    email: "eamon.ocuiv@oireachtas.ie"
  },
  {
    name: "Eamon Ryan",
    imageUrl: "./assets/images/TDs/Eamon Ryan_GP_Dublin Bay South.jpg",
    partyName: "Green Party",
    constituency: "Dublin Bay South",
    score: "./assets/images/negative.jpg",
    email: "eamon.ryan@oireachtas.ie"
  },
  {
    name: "Emer Higgins",
    imageUrl: "./assets/images/TDs/Emer Higgins_FG_Dublin Mid West.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Mid West",
    score: "./assets/images/negative.jpg",
    email: "emer.higgins@oireachtas.ie"
  },
  {
    name: "Eoin O Broin",
    imageUrl: "./assets/images/TDs/Eoin_OBroin_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Mid West",
    score: "./assets/images/positive.jpg",
    email: "eoin.obroin@oireachtas.ie"
  },
  {
    name: "Fergus O'Dowd",
    imageUrl: "./assets/images/TDs/Fergus O_Dowd_FG_Louth.jpg",
    partyName: "Fine Gael",
    constituency: "Louth",
    score: "./assets/images/negative.jpg",
    email: "fergus.odowd@oireachtas.ie"
  },
  {
    name: "Francis Noel Duffy",
    imageUrl: "./assets/images/TDs/Francis Noel Duffy_GP_Dublin South-West.jpg",
    partyName: "Green Party",
    constituency: "Dublin South West",
    score: "./assets/images/negative.jpg",
    email: "francisnoel.duffy@oireachtas.ie"
  },
  {
    name: "Frank Feighan",
    imageUrl: "./assets/images/TDs/Frank Feighan_FG_Sligo-Leitrim.jpg",
    partyName: "Fine Gael",
    constituency: "Sligo Leitrim",
    score: "./assets/images/negative.jpg",
    email: "frank.feighan@oireachtas.ie"
  },
  {
    name: "Gary Gannon",
    imageUrl: "./assets/images/TDs/Gary_Gannon_SD.jpeg",
    partyName: "Social Democrats",
    constituency: "Dublin Central",
    score: "./assets/images/positive.jpg",
    email: "gary.gannon@oireachtas.ie"
  },
  {
    name: "Ged Nash",
    imageUrl: "./assets/images/TDs/Ged Nash_Lab_Louth.jpg",
    partyName: "Labour Party",
    constituency: "Louth",
    score: "./assets/images/positive.jpg",
    email: "ged.nash@oir.ie"
  },
  {
    name: "Gino Kenny",
    imageUrl: "./assets/images/TDs/Gino_Kenny_PBP.jpg",
    partyName: "Solidarity - People Before Profit",
    constituency: "Dublin Mid West",
    score: "./assets/images/positive.jpg",
    email: "gino.kenny@oireachtas.ie"
  },
  {
    name: "Heather Humphreys",
    imageUrl: "./assets/images/TDs/Heather Humphreys_FG_Cavan-Monaghan.jpg",
    partyName: "Fine Gael",
    constituency: "Cavan Monaghan",
    score: "./assets/images/negative.jpg",
    email: "minister@welfare.ie"
  },
  {
    name: "Helen McEntee",
    imageUrl: "./assets/images/TDs/Helen McEntee_FG_Meath East.jpg",
    partyName: "Fine Gael",
    constituency: "Meath East",
    score: "./assets/images/did_not_vote.jpg",
    email: "minister@justice.ie"
  },
  {
    name: "Hildegarde Naughton",
    imageUrl: "./assets/images/TDs/Hildegarde Naughton_FG_Galway West.jpg",
    partyName: "Fine Gael",
    constituency: "Galway West",
    score: "./assets/images/negative.jpg",
    email: "hildegarde.naughton@oireachtas.ie"
  },
  {
    name: "Holly Cairns",
    imageUrl: "./assets/images/TDs/Holly_Cairns_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Cork South West",
    score: "./assets/images/positive.jpg",
    email: "holly.cairns@oir.ie"
  },
  {
    name: "Imelda Munster",
    imageUrl: "./assets/images/TDs/Imelda_Munster_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Louth",
    score: "./assets/images/positive.jpg",
    email: "imelda.munster@oireachtas.ie"
  },
  {
    name: "Ivana Bacik",
    imageUrl: "./assets/images/TDs/Ivana_Bacik_Labour.png",
    partyName: "Labour Party",
    constituency: "Dublin Bay South",
    score: "./assets/images/positive.jpg",
    email: "ivana.bacik@oireachtas.ie"
  },
  {
    name: "Jack Chambers",
    imageUrl: "./assets/images/TDs/Jack Chambers_FF_Dublin West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin West",
    score: "./assets/images/negative.jpg",
    email: "jack@jackchambers.ie"
  },
  {
    name: "Jackie Cahill",
    imageUrl: "./assets/images/TDs/Jackie Cahill_FF_Tipperary.jpg",
    partyName: "Fianna Fáil",
    constituency: "Tipperary",
    score: "./assets/images/negative.jpg",
    email: "jackie.cahill@oireachtas.ie"
  },
  {
    name: "James Browne",
    imageUrl: "./assets/images/TDs/James Browne_FF_Wexford.jpg",
    partyName: "Fianna Fáil",
    constituency: "Wexford",
    score: "./assets/images/negative.jpg",
    email: "james.browne@oireachtas.ie"
  },
  {
    name: "James Lawless",
    imageUrl: "./assets/images/TDs/James Lawless_FF_Kildare North.jpg",
    partyName: "Fianna Fáil",
    constituency: "Kildare North",
    score: "./assets/images/negative.jpg",
    email: "james.lawless@oireachtas.ie"
  },
  {
    name: "James O'Connor",
    imageUrl: "./assets/images/TDs/James O_Connor_FF_Cork East.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork East",
    score: "./assets/images/negative.jpg",
    email: "james.oconnor@oireachtas.ie"
  },
  {
    name: "Jennifer Carroll MacNeill",
    imageUrl: "./assets/images/TDs/Jennifer Carroll MacNeill_FG_Dún Laoghaire.jpg",
    partyName: "Fine Gael",
    constituency: "Dún Laoghaire",
    score: "./assets/images/negative.jpg",
    email: "jennifer.carrollmacneill@oireachtas.ie"
  },
  {
    name: "Jennifer Murnane O'Connor",
    imageUrl: "./assets/images/TDs/Jennifer Murnane O_Connor_FF_Carlow–Kilkenny.jpg",
    partyName: "Fianna Fáil",
    constituency: "Carlow Kilkenny",
    score: "./assets/images/negative.jpg",
    email: "jennifer.murnaneoconnor@oireachtas.ie"
  },
  {
    name: "Jennifer Whitmore",
    imageUrl: "./assets/images/TDs/Jennifer_Whitmore_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Wicklow",
    score: "./assets/images/positive.jpg",
    email: "jennifer.whitmore@oireachtas.ie"
  },
  {
    name: "Jim O'Callaghan",
    imageUrl: "./assets/images/TDs/Jim O_Callaghan_FF_Dublin Bay South.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin Bay South",
    score: "./assets/images/negative.jpg",
    email: "jim.ocallaghan@oireachtas.ie"
  },
  {
    name: "Joan Collins",
    imageUrl: "./assets/images/TDs/Collins, Joan.png",
    partyName: "Independents 4 Change",
    constituency: "Dublin South Central",
    score: "./assets/images/positive.jpg",
    email: "joan.collins@oireachtas.ie"
  },
  {
    name: "Joe Carey",
    imageUrl: "./assets/images/TDs/Joe Carey_FG_Clare.jpg",
    partyName: "Fine Gael",
    constituency: "Clare",
    score: "./assets/images/did_not_vote.jpg",
    email: "joe.carey@oireachtas.ie"
  },
  {
    name: "Joe Flaherty",
    imageUrl: "./assets/images/TDs/Joe Flaherty_FF_Longford-Westmeath.jpg",
    partyName: "Fianna Fáil",
    constituency: "Longford Westmeath",
    score: "./assets/images/negative.jpg",
    email: "joe.flaherty@oireachtas.ie"
  },
  {
    name: "Joe McHugh",
    imageUrl: "./assets/images/TDs/Joe McHugh_FG_Donegal.jpg",
    partyName: "Fine Gael",
    constituency: "Donegal",
    score: "./assets/images/negative.jpg",
    email: "joe.mchugh@oireachtas.ie"
  },
  {
    name: "Joe O'Brien",
    imageUrl: "./assets/images/TDs/Joe O_Brien_GP_Dublin Fingal.jpg",
    partyName: "Green Party",
    constituency: "Dublin Fingal",
    score: "./assets/images/negative.jpg",
    email: "joe.obrien@oireachtas.ie"
  },
  {
    name: "John Brady",
    imageUrl: "./assets/images/TDs/John_Brady_TD.jpg",
    partyName: "Sinn Féin",
    constituency: "Wicklow",
    score: "./assets/images/positive.jpg",
    email: "john.brady@oireachtas.ie"
  },
  {
    name: "John Lahart",
    imageUrl: "./assets/images/TDs/John Lahart_FF_Dublin South West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin South West",
    score: "./assets/images/negative.jpg",
    email: "john.lahart@oireachtas.ie"
  },
  {
    name: "John McGuinness",
    imageUrl: "./assets/images/TDs/John McGuinness_FF_Carlow–Kilkenny.jpg",
    partyName: "Fianna Fáil",
    constituency: "Carlow Kilkenny",
    score: "./assets/images/negative.jpg",
    email: "john.mcguinness@oireachtas.ie"
  },
  {
    name: "John Paul Phelan",
    imageUrl: "./assets/images/TDs/John Paul Phelan_FG_Carlow-Kilkenny.jpg",
    partyName: "Fine Gael",
    constituency: "Carlow Kilkenny",
    score: "./assets/images/negative.jpg",
    email: "johnpaul.phelan@oireachtas.ie"
  },
  {
    name: "Johnny Guirke",
    imageUrl: "./assets/images/TDs/Johnny_Guirke_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Meath West",
    score: "./assets/images/positive.jpg",
    email: "johnny.guirke@oireachtas.ie"
  },
  {
    name: "Johnny Mythen",
    imageUrl: "./assets/images/TDs/Johnny_Mythen_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Wexford",
    score: "./assets/images/did_not_vote.jpg",
    email: "johnny.mythen@oireachtas.ie"
  },
  {
    name: "Josepha Madigan",
    imageUrl: "./assets/images/TDs/Josepha Madigan_FG_Dublin Rathdown.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Rathdown",
    score: "./assets/images/negative.jpg",
    email: "josepha.madigan@oireachtas.ie"
  },
  {
    name: "Kathleen Funchion",
    imageUrl: "./assets/images/TDs/Kathleen_Funchion_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Carlow Kilkenny",
    score: "./assets/images/positive.jpg",
    email: "kathleen.funchion@oireachtas.ie"
  },
  {
    name: "Kieran O'Donnell",
    imageUrl: "./assets/images/TDs/Kieran O_Donnell_FG_Limerick City.jpg",
    partyName: "Fine Gael",
    constituency: "Limerick City",
    score: "./assets/images/negative.jpg",
    email: "kieran.odonnell@oireachtas.ie"
  },
  {
    name: "Leo Varadkar",
    imageUrl: "./assets/images/TDs/Leo Varadkar_FG_Dublin West.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin West",
    score: "./assets/images/negative.jpg",
    email: "leo.varadkar@oireachtas.ie"
  },
  {
    name: "Louise O'Reilly",
    imageUrl: "./assets/images/TDs/Louise_OReilly_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Fingal",
    score: "./assets/images/positive.jpg",
    email: "louise.oreilly@oireachtas.ie"
  },
  {
    name: "Mairead Farrell",
    imageUrl: "./assets/images/TDs/Mairead_Farrell_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Galway West",
    score: "./assets/images/positive.jpg",
    email: "mairead.farrell@oireachtas.ie"
  },
  {
    name: "Malcolm Noonan",
    imageUrl: "./assets/images/TDs/Malcolm Noonan_GP_Carlow-Kilkenny.jpg",
    partyName: "Green Party",
    constituency: "Carlow Kilkenny",
    score: "./assets/images/negative.jpg",
    email: "malcolm.noonan@oireachtas.ie"
  },
  {
    name: "Marc MacSharry",
    imageUrl: "./assets/images/TDs/Marc MacSharry_FF_Sligo-Leitim.jpg",
    partyName: "Fianna Fáil",
    constituency: "Sligo Leitrim",
    score: "./assets/images/positive.jpg",
    email: "marc.macsharry@oireachtas.ie"
  },
  {
    name: "Marc O Cathasaigh",
    imageUrl: "./assets/images/TDs/Marc O_Cathasaigh_GP_Waterford.jpg",
    partyName: "Green Party",
    constituency: "Waterford",
    score: "./assets/images/negative.jpg",
    email: "marc.ocathasaigh@oireachtas.ie"
  },
  {
    name: "Marian Harkin",
    imageUrl: "./assets/images/TDs/Marian_Harkin.png",
    partyName: "Independent",
    constituency: "Sligo Leitrim",
    score: "./assets/images/positive.jpg",
    email: "marian.harkin@oireachtas.ie"
  },
  {
    name: "Mark Ward",
    imageUrl: "./assets/images/TDs/Mark_Ward_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Mid West",
    score: "./assets/images/positive.jpg",
    email: "mark.ward@oireachtas.ie"
  },
  {
    name: "Martin Browne",
    imageUrl: "./assets/images/TDs/Martin_Browne_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Tipperary",
    score: "./assets/images/positive.jpg",
    email: "martin.browne@oireachtas.ie"
  },
  {
    name: "Martin Heydon",
    imageUrl: "./assets/images/TDs/Martin Heydon_FG_Kildare South.jpg",
    partyName: "Fine Gael",
    constituency: "Kildare South",
    score: "./assets/images/negative.jpg",
    email: "martin.heydon@oir.ie"
  },
  {
    name: "Martin Kenny",
    imageUrl: "./assets/images/TDs/Martin_Kenny.png",
    partyName: "Sinn Féin",
    constituency: "Sligo Leitrim",
    score: "./assets/images/positive.jpg",
    email: "martin.kenny@oireachtas.ie"
  },
  {
    name: "Mary Butler",
    imageUrl: "./assets/images/TDs/Mary Butler_FF_Waterford.jpg",
    partyName: "Fianna Fáil",
    constituency: "Waterford",
    score: "./assets/images/negative.jpg",
    email: "mary.butler@oireachtas.ie"
  },
  {
    name: "Mary Lou McDonald",
    imageUrl: "./assets/images/TDs/MaryLou_McDonald_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Central",
    score: "./assets/images/positive.jpg",
    email: "marylou.mcdonald@oireachtas.ie"
  },
  {
    name: "Matt Carthy",
    imageUrl: "./assets/images/TDs/Matt_Carthy_SF.png",
    partyName: "Sinn Féin",
    constituency: "Cavan Monaghan",
    score: "./assets/images/positive.jpg",
    email: "matt.carthy@oireachtas.ie"
  },
  {
    name: "Matt Shanahan",
    imageUrl: "./assets/images/TDs/Matt_Shanahan_Ind.jpg",
    partyName: "Independent",
    constituency: "Waterford",
    score: "./assets/images/negative.jpg",
    email: "matt.shanahan@oireachtas.ie"
  },
  {
    name: "Mattie McGrath",
    imageUrl: "./assets/images/TDs/Mattie_McGrath_Ind.jpg",
    partyName: "Independent",
    constituency: "Tipperary",
    score: "./assets/images/positive.jpg",
    email: "mattie.mcgrath@oireachtas.ie"
  },
  {
    name: "Maurice Quinlivan",
    imageUrl: "./assets/images/TDs/Maurice_Quinlivan_SF.jpeg",
    partyName: "Sinn Féin",
    constituency: "Limerick City",
    score: "./assets/images/positive.jpg",
    email: "maurice.quinlivan@oireachtas.ie"
  },
  {
    name: "Michael Collins",
    imageUrl: "./assets/images/TDs/Michael_Collins_Ind.jpg",
    partyName: "Independent",
    constituency: "Cork South West",
    score: "./assets/images/positive.jpg",
    email: "michael.collins@oireachtas.ie"
  },
  {
    name: "Michael Creed",
    imageUrl: "./assets/images/TDs/Michael Creed_FG_Cork North West.jpg",
    partyName: "Fine Gael",
    constituency: "Cork North West",
    score: "./assets/images/negative.jpg",
    email: "michael.creed@oireachtas.ie"
  },
  {
    name: "Michael Fitzmaurice",
    imageUrl: "./assets/images/TDs/Fitzmaurice, Michael.jfif",
    partyName: "Independent",
    constituency: "Roscommon Galway",
    score: "./assets/images/did_not_vote.jpg",
    email: "michael.fitzmaurice@oireachtas.ie"
  },
  {
    name: "Michael Healy Rae",
    imageUrl: "./assets/images/TDs/Michael_HealyRae_Ind.jpg",
    partyName: "Independent",
    constituency: "Kerry",
    score: "./assets/images/positive.jpg",
    email: "michael.healy-rae@oireachtas.ie"
  },
  {
    name: "Michael Lowry",
    imageUrl: "./assets/images/TDs/Michael_Lowry_Ind.jpg",
    partyName: "Independent",
    constituency: "Tipperary",
    score: "./assets/images/negative.jpg",
    email: "michael.lowry@oireachtas.ie"
  },
  {
    name: "Michael McGrath",
    imageUrl: "./assets/images/TDs/Michael McGrath_FF_Cork South Central.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork South Central",
    score: "./assets/images/negative.jpg",
    email: "michael.mcgrath@oireachtas.ie"
  },
  {
    name: "Michael McNamara",
    imageUrl: "./assets/images/TDs/Michael_McNamara_Ind.jpg",
    partyName: "Independent",
    constituency: "Clare",
    score: "./assets/images/positive.jpg",
    email: "michael.mcnamara@oireachtas.ie"
  },
  {
    name: "Michael Moynihan",
    imageUrl: "./assets/images/TDs/Michael Moynihan_FF_Cork North West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork North West",
    score: "./assets/images/negative.jpg",
    email: "michael.moynihan@oireachtas.ie"
  },
  {
    name: "Michael Ring",
    imageUrl: "./assets/images/TDs/Michael Ring_FG_Mayo.jpg",
    partyName: "Fine Gael",
    constituency: "Mayo",
    score: "./assets/images/negative.jpg",
    email: "michael.ring@oireachtas.ie"
  },
  {
    name: "Micheal Martin",
    imageUrl: "./assets/images/TDs/Micheál Martin_FF_Cork South Central.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork South Central",
    score: "./assets/images/negative.jpg",
    email: "micheal.martin@oireachtas.ie"
  },
  {
    name: "Mick Barry",
    imageUrl: "./assets/images/TDs/Mick_Barry_PBP.jpg",
    partyName: "Solidarity - People Before Profit",
    constituency: "Cork North Central",
    score: "./assets/images/positive.jpg",
    email: "mick.barry@oireachtas.ie"
  },
  {
    name: "Neale Richmond",
    imageUrl: "./assets/images/TDs/Neale Richmond_FG_Dublin Rathdown.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Rathdown",
    score: "./assets/images/negative.jpg",
    email: "neale.richmond@oireachtas.ie"
  },
  {
    name: "Neasa Hourigan",
    imageUrl: "./assets/images/TDs/Neasa Hourigan_GP_Dublin Central.jpg",
    partyName: "Green Party",
    constituency: "Dublin Central",
    score: "./assets/images/positive.jpg",
    email: "neasa.hourigan@oireachtas.ie"
  },
  {
    name: "Niall Collins",
    imageUrl: "./assets/images/TDs/Niall Collins_FF_Limerick County.jpg",
    partyName: "Fianna Fáil",
    constituency: "Limerick County",
    score: "./assets/images/negative.jpg",
    email: "niall.collins@oireachtas.ie"
  },
  {
    name: "Niamh Smyth",
    imageUrl: "./assets/images/TDs/Niamh Smyth_FF_Cavan–Monaghan.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cavan Monaghan",
    score: "./assets/images/did_not_vote.jpg",
    email: "niamh.smyth@oireachtas.ie"
  },
  {
    name: "Noel Grealish",
    imageUrl: "./assets/images/TDs/Grealish, Noel.jfif",
    partyName: "Independent",
    constituency: "Galway West",
    score: "./assets/images/did_not_vote.jpg",
    email: "noel.grealish@oireachtas.ie"
  },
  {
    name: "Norma Foley",
    imageUrl: "./assets/images/TDs/Norma Foley_FF_Kerry.jpg",
    partyName: "Fianna Fáil",
    constituency: "Kerry",
    score: "./assets/images/negative.jpg",
    email: "norma.foley@oireachtas.ie"
  },
  {
    name: "Ossian Smyth",
    imageUrl: "./assets/images/TDs/Ossian Smyth_GP_Dun Laoghaire.jpg",
    partyName: "Green Party",
    constituency: "Dún Laoghaire",
    score: "./assets/images/negative.jpg",
    email: "ossian.smyth@oireachtas.ie"
  },
  {
    name: "Pa Daly",
    imageUrl: "./assets/images/TDs/Pa_Daly_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Kerry",
    score: "./assets/images/positive.jpg",
    email: "pa.daly@oireachtas.ie"
  },
  {
    name: "Padraig MacLochlainn",
    imageUrl: "./assets/images/TDs/Padraig_McLochlainn_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Donegal",
    score: "./assets/images/positive.jpg",
    email: "padraig.maclochlainn@oireachtas.ie"
  },
  {
    name: "Padraig O'Sullivan",
    imageUrl: "./assets/images/TDs/Pádraig O_Sullivan_FF_Cork North Central.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork North Central",
    score: "./assets/images/negative.jpg",
    email: "padraig.osullivan@oireachtas.ie"
  },
  {
    name: "Paschal Donohoe",
    imageUrl: "./assets/images/TDs/Paschal Donohoe_FG_Dublin Central.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Central",
    score: "./assets/images/negative.jpg",
    email: "paschal.donohoe@oireachtas.ie"
  },
  {
    name: "Pat Buckley",
    imageUrl: "./assets/images/TDs/Pat_Buckley_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Cork East",
    score: "./assets/images/positive.jpg",
    email: "pat.buckley@oireachtas.ie"
  },
  {
    name: "Patricia Ryan",
    imageUrl: "./assets/images/TDs/Patricia_Ryan_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Kildare South",
    score: "./assets/images/positive.jpg",
    email: "patricia.ryan@oireachtas.ie"
  },
  {
    name: "Patrick Costello",
    imageUrl: "./assets/images/TDs/Patrick Costello_GP_Dublin South Central.jpg",
    partyName: "Green Party",
    constituency: "Dublin South Central",
    score: "./assets/images/negative.jpg",
    email: "patrick.costello@oireachtas.ie"
  },
  {
    name: "Patrick O'Donovan",
    imageUrl: "./assets/images/TDs/Patrick O_Donovan_FG_Limerick County.jpg",
    partyName: "Fine Gael",
    constituency: "Limerick County",
    score: "./assets/images/negative.jpg",
    email: "patrick.odonovan@oireachtas.ie"
  },
  {
    name: "Paul Donnelly",
    imageUrl: "./assets/images/TDs/Paul_Donnelly_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin West",
    score: "./assets/images/positive.jpg",
    email: "paul.donnelly@oireachtas.ie"
  },
  {
    name: "Paul Kehoe",
    imageUrl: "./assets/images/TDs/Paul Kehoe_FG_Wexford.jpg",
    partyName: "Fine Gael",
    constituency: "Wexford",
    score: "./assets/images/negative.jpg",
    email: "paul.kehoe@oireachtas.ie"
  },
  {
    name: "Paul McAuliffe",
    imageUrl: "./assets/images/TDs/Paul McAuliffe_FF_Dublin North West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin North West",
    score: "./assets/images/negative.jpg",
    email: "paul.mcauliffe@oireachtas.ie"
  },
  {
    name: "Paul Murphy",
    imageUrl: "./assets/images/TDs/Murphy, Paul.jfif",
    partyName: "Solidarity - People Before Profit",
    constituency: "Dublin South West",
    score: "./assets/images/positive.jpg",
    email: "paul.murphy@oireachtas.ie"
  },
  {
    name: "Pauline Tully",
    imageUrl: "./assets/images/TDs/Pauline_Tully_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Cavan Monaghan",
    score: "./assets/images/positive.jpg",
    email: "pauline.tully@oireachtas.ie"
  },
  {
    name: "Peadar Toibin",
    imageUrl: "./assets/images/TDs/Peadar_Toibin_Aontu.jpg",
    partyName: "Aontú",
    constituency: "Meath West",
    score: "./assets/images/positive.jpg",
    email: "peadar.toibin@oireachtas.ie"
  },
  {
    name: "Pearse Doherty",
    imageUrl: "./assets/images/TDs/Pearse_Doherty_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Donegal",
    score: "./assets/images/positive.jpg",
    email: "pearse.doherty@oireachtas.ie"
  },
  {
    name: "Peter Burke",
    imageUrl: "./assets/images/TDs/Peter Burke_FG_Longford-Westmeath.jpg",
    partyName: "Fine Gael",
    constituency: "Longford Westmeath",
    score: "./assets/images/negative.jpg",
    email: "peter.burke@oireachtas.ie"
  },
  {
    name: "Peter Fitzpatrick",
    imageUrl: "./assets/images/TDs/Peter_Fitzpatrick_Louth_Independent.jfif",
    partyName: "Independent",
    constituency: "Louth",
    score: "./assets/images/positive.jpg",
    email: "peterm.fitzpatrick@oireachtas.ie"
  },
  {
    name: "Reada Cronin",
    imageUrl: "./assets/images/TDs/Reada_Cronin_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Kildare North",
    score: "./assets/images/positive.jpg",
    email: "reada.cronin@oireachtas.ie"
  },
  {
    name: "Richard Boyd Barrett",
    imageUrl: "./assets/images/TDs/Richard_BoydBarrett_PBP.jpg",
    partyName: "Solidarity - People Before Profit",
    constituency: "Dún Laoghaire",
    score: "./assets/images/positive.jpg",
    email: "richard.boydbarrett@oir.ie"
  },
  {
    name: "Richard Bruton",
    imageUrl: "./assets/images/TDs/Richard Bruton_FG_Dublin Bay North.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Bay North",
    score: "./assets/images/negative.jpg",
    email: "richard.bruton@oireachtas.ie"
  },
  {
    name: "Richard O'Donoghue",
    imageUrl: "./assets/images/TDs/Richard_ODonoghue_INd.jpg",
    partyName: "Independent",
    constituency: "Limerick County",
    score: "./assets/images/positive.jpg",
    email: "richard.odonoghue@oireachtas.ie"
  },
  {
    name: "Robert Troy",
    imageUrl: "./assets/images/TDs/Robert Troy_FF_Longford-Westmeath.jpg",
    partyName: "Fianna Fáil",
    constituency: "Longford Westmeath",
    score: "./assets/images/negative.jpg",
    email: "robert.troy@oireachtas.ie"
  },
  {
    name: "Roderic O'Gorman",
    imageUrl: "./assets/images/TDs/Roderic O_Gorman_GP_Dublin West.jpg",
    partyName: "Green Party",
    constituency: "Dublin West",
    score: "./assets/images/negative.jpg",
    email: "roderic.ogorman@oireachtas.ie"
  },
  {
    name: "Roisin Shortall",
    imageUrl: "./assets/images/TDs/Roisin_Shortall_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Dublin North West",
    score: "./assets/images/positive.jpg",
    email: "roisin.shortall@oireachtas.ie"
  },
  {
    name: "Rose Conway Walsh",
    imageUrl: "./assets/images/TDs/Rose_ConwayWalsh_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Mayo",
    score: "./assets/images/positive.jpg",
    email: "rose.conwaywalsh@oireachtas.ie"
  },
  {
    name: "Ruairi O Murchu",
    imageUrl: "./assets/images/TDs/Ruairi_OMurchu_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Louth",
    score: "./assets/images/positive.jpg",
    email: "ruairi.omurchu@oireachtas.ie"
  },
  {
    name: "Sean Canney",
    imageUrl: "./assets/images/TDs/Sean_Canney_Ind.jpg",
    partyName: "Independent",
    constituency: "Galway East",
    score: "./assets/images/negative.jpg",
    email: "sean.canney@oireachtas.ie"
  },
  {
    name: "Sean Crowe",
    imageUrl: "./assets/images/TDs/Sean_Crowe_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin South West",
    score: "./assets/images/positive.jpg",
    email: "sean.crowe@oireachtas.ie"
  },
  {
    name: "Sean Fleming",
    imageUrl: "./assets/images/TDs/Seán Fleming_FF_Laois–Offaly.jpg",
    partyName: "Fianna Fáil",
    constituency: "Laois Offaly",
    score: "./assets/images/negative.jpg",
    email: "sean.fleming@oireachtas.ie"
  },
  {
    name: "Sean Haughey",
    imageUrl: "./assets/images/TDs/Seán Haughey_FF_Dublin Bay North.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin Bay North",
    score: "./assets/images/negative.jpg",
    email: "sean.haughey@oireachtas.ie"
  },
  {
    name: "Sean O Fearghail",
    imageUrl: "./assets/images/TDs/Sean_O_Fearghail.png",
    partyName: "Fianna Fáil",
    constituency: "Kildare South",
    score: "./assets/images/did_not_vote.jpg",
    email: "sean.ofearghail@oireachtas.ie"
  },
  {
    name: "Sean Sherlock",
    imageUrl: "./assets/images/TDs/Sean Sherlock_Lab_Cork East.jpg",
    partyName: "Labour Party",
    constituency: "Cork East",
    score: "./assets/images/positive.jpg",
    email: "sean.sherlock@oireachtas.ie"
  },
  {
    name: "Simon Coveney",
    imageUrl: "./assets/images/TDs/Simon Coveney_FG_Cork South Central.jpg",
    partyName: "Fine Gael",
    constituency: "Cork South Central",
    score: "./assets/images/did_not_vote.jpg",
    email: "simon.coveney@oireachtas.ie"
  },
  {
    name: "Simon Harris",
    imageUrl: "./assets/images/TDs/Simon Harris_FG_Wicklow.jpg",
    partyName: "Fine Gael",
    constituency: "Wicklow",
    score: "./assets/images/negative.jpg",
    email: "simon.harris@oireachtas.ie"
  },
  {
    name: "Sorca Clarke",
    imageUrl: "./assets/images/TDs/Sorca_Clarke_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Longford Westmeath",
    score: "./assets/images/positive.jpg",
    email: "sorca.clarke@oireachtas.ie"
  },
  {
    name: "Stephen Donnelly",
    imageUrl: "./assets/images/TDs/Stephen Donnelly_FF_Wicklow.jpg",
    partyName: "Fianna Fáil",
    constituency: "Wicklow",
    score: "./assets/images/negative.jpg",
    email: "stephen.donnelly@oireachtas.ie"
  },
  {
    name: "Steven Matthews",
    imageUrl: "./assets/images/TDs/Steven Matthews_GP_Wicklow.jpg",
    partyName: "Green Party",
    constituency: "Wicklow",
    score: "./assets/images/negative.jpg",
    email: "steven.matthews@oireachtas.ie"
  },
  {
    name: "Thomas Byrne",
    imageUrl: "./assets/images/TDs/Thomas Byrne_FF_Meath East.jpg",
    partyName: "Fianna Fáil",
    constituency: "Meath East",
    score: "./assets/images/negative.jpg",
    email: "Thomas.Byrne@oireachtas.ie"
  },
  {
    name: "Thomas Gould",
    imageUrl: "./assets/images/TDs/Gould, Thomas.jfif",
    partyName: "Sinn Féin",
    constituency: "Cork North Central",
    score: "./assets/images/positive.jpg",
    email: "thomas.gould@oireachtas.ie"
  },
  {
    name: "Thomas Pringle",
    imageUrl: "./assets/images/TDs/Thomas_Pringle_Ind.jpg",
    partyName: "Independent",
    constituency: "Donegal",
    score: "./assets/images/positive.jpg",
    email: "thomas.pringle@oireachtas.ie"
  },
  {
    name: "Verona Murphy",
    imageUrl: "./assets/images/TDs/Verona_Murphy_Ind.jpg",
    partyName: "Independent",
    constituency: "Wexford",
    score: "./assets/images/positive.jpg",
    email: "verona.murphy@oireachtas.ie"
  },
  {
    name: "Violet-Anne Wynne",
    imageUrl: "./assets/images/TDs/Wynne, Violet-Anne.jfif",
    partyName: "Sinn Féin",
    constituency: "Clare",
    score: "./assets/images/positive.jpg",
    email: "violet-anne.wynne@oireachtas.ie"
  },
  {
    name: "Willie O'Dea",
    imageUrl: "./assets/images/TDs/Willie O_Dea_FF_Limerick City.jpg",
    partyName: "Fianna Fáil",
    constituency: "Limerick City",
    score: "./assets/images/negative.jpg",
    email: "willie.odea@oireachtas.ie"
  }
]