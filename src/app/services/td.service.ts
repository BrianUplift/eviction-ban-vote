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
    email: "aengus.osnodaigh@oireachtas.ie",
    phone: "01 618 4084"
  },
  {
    name: "Aindrias Moynihan",
    imageUrl: "./assets/images/TDs/Aindrias Moynihan_FF_Cork North West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork North West",
    score: "./assets/images/negative.jpg",
    email: "aindrias.moynihan@oireachtas.ie",
    phone: "01 618 3428"
  },
  {
    name: "Alan Dillon",
    imageUrl: "./assets/images/TDs/Alan Dillon_FG_Mayo.jpg",
    partyName: "Fine Gael",
    constituency: "Mayo",
    score: "./assets/images/negative.jpg",
    email: "alan.dillon@oireachtas.ie",
    phone: "087 9955675"
  },
  {
    name: "Alan Farrell",
    imageUrl: "./assets/images/TDs/Alan Farrell_FG_Dublin Fingal.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Fingal",
    score: "./assets/images/negative.jpg",
    email: "alan.farrell@oireachtas.ie",
    phone: "01 618 4008"
  },
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
    name: "Anne Rabbitte",
    imageUrl: "./assets/images/TDs/Anne Rabbitte_FF_Galway East.jpg",
    partyName: "Fianna Fáil",
    constituency: "Galway East",
    score: "./assets/images/negative.jpg",
    email: "anne.rabbitte@oireachtas.ie",
    phone: "01 618 3901"
  },
  {
    name: "Aodhan O Riordain",
    imageUrl: "./assets/images/TDs/Aodhán Ó Ríordáin_Lab_Dublin Bay North.jpg",
    partyName: "Labour Party",
    constituency: "Dublin Bay North",
    score: "./assets/images/positive.jpg",
    email: "aodhan.oriordain@oir.ie",
    phone: "01 618 3209"
  },
  {
    name: "Barry Cowen",
    imageUrl: "./assets/images/TDs/Barry Cowen_FF_Laois–Offaly.jpg",
    partyName: "Fianna Fáil",
    constituency: "Laois Offaly",
    score: "./assets/images/negative.jpg",
    email: "barry.cowen@oireachtas.ie",
    phone: "01 618 3662"
  },
  {
    name: "Bernard Durkan",
    imageUrl: "./assets/images/TDs/Bernard Durkan_FG_Kildare North.jpg",
    partyName: "Fine Gael",
    constituency: "Kildare North",
    score: "./assets/images/negative.jpg",
    email: "bernard.durkan@oireachtas.ie",
    phone: "01 618 3732"
  },
  {
    name: "Brendan Griffin",
    imageUrl: "./assets/images/TDs/Brendan Griffin_FG_Kerry.jpg",
    partyName: "Fine Gael",
    constituency: "Kerry",
    score: "./assets/images/negative.jpg",
    email: "brendan.griffin@oireachtas.ie",
    phone: "01 618 4480"
  },
  {
    name: "Brendan Howlin",
    imageUrl: "./assets/images/TDs/Brendan Howlin_Lab_Wexford.jpg",
    partyName: "Labour Party",
    constituency: "Wexford",
    score: "./assets/images/positive.jpg",
    email: "brendan.howlin@oireachtas.ie",
    phone: "053 9124036"
  },
  {
    name: "Brendan Smith",
    imageUrl: "./assets/images/TDs/Brendan Smith_FF_Cavan–Monaghan.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cavan Monaghan",
    score: "./assets/images/negative.jpg",
    email: "brendan.smith@oireachtas.ie",
    phone: "01 618 3376"
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
    name: "Brian Stanley",
    imageUrl: "./assets/images/TDs/Brian_Stanley_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Laois Offaly",
    score: "./assets/images/positive.jpg",
    email: "brian.stanley@oireachtas.ie",
    phone: "01 618 3987"
  },
  {
    name: "Brid Smith",
    imageUrl: "./assets/images/TDs/Brid_Smith_PBP.jpg",
    partyName: "Solidarity - People Before Profit",
    constituency: "Dublin South Central",
    score: "./assets/images/positive.jpg",
    email: "brid.smith@oireachtas.ie",
    phone: "01 616 1003"
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
    name: "Catherine Murphy",
    imageUrl: "./assets/images/TDs/Catherine_Murphy_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Kildare North",
    score: "./assets/images/positive.jpg",
    email: "catherine.murphy@oireachtas.ie",
    phone: "01 618 3099"
  },
  {
    name: "Charlie Flanagan",
    imageUrl: "./assets/images/TDs/Charlie Flanagan_FG_Laois-Offaly.jpg",
    partyName: "Fine Gael",
    constituency: "Laois Offaly",
    score: "./assets/images/negative.jpg",
    email: "charles.flanagan@oireachtas.ie",
    phone: "01 602 8202"
  },
  {
    name: "Charlie McConalogue",
    imageUrl: "./assets/images/TDs/Charlie McConalogue_FF_Donegal.jpg",
    partyName: "Fianna Fáil",
    constituency: "Donegal",
    score: "./assets/images/negative.jpg",
    email: "charlie.mcconalogue@oireachtas.ie",
    phone: "01 618 3199"
  },
  {
    name: "Chris Andrews",
    imageUrl: "./assets/images/TDs/Chris_Andrews_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Bay South",
    score: "./assets/images/positive.jpg",
    email: "chris.andrews@oireachtas.ie",
    phone: "087 2851515"
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
    name: "Cian O'Callaghan",
    imageUrl: "./assets/images/TDs/Cian_OCallaghan_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Dublin Bay North",
    score: "./assets/images/positive.jpg",
    email: "Cian.OCallaghan@oireachtas.ie",
    phone: "01 618 3057"
  },
  {
    name: "Ciaran Cannon",
    imageUrl: "./assets/images/TDs/Ciarán Cannon_FG_Galway East.jpg",
    partyName: "Fine Gael",
    constituency: "Galway East",
    score: "./assets/images/negative.jpg",
    email: "ciaran.cannon@oireachtas.ie",
    phone: "01 618 3185"
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
    name: "Colm Burke",
    imageUrl: "./assets/images/TDs/Colm Burke_FG_Cork North Central.jpg",
    partyName: "Fine Gael",
    constituency: "Cork North Central",
    score: "./assets/images/negative.jpg",
    email: "colm.burke@oireachtas.ie",
    phone: "01 618 3115"
  },
  {
    name: "Cormac Devlin",
    imageUrl: "./assets/images/TDs/Cormac Devlin_FF_Dun Laoghaire.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dún Laoghaire",
    score: "./assets/images/negative.jpg",
    email: "cormac@cormacdevlin.ie",
    phone: "01 275 0786"
  },
  {
    name: "Damien English",
    imageUrl: "./assets/images/TDs/Damien English_FG_Meath West.jpg",
    partyName: "Fine Gael",
    constituency: "Meath West",
    score: "./assets/images/negative.jpg",
    email: "damien.english@oireachtas.ie",
    phone: "01 618 4012"
  },
  {
    name: "Danny Healy Rae",
    imageUrl: "./assets/images/TDs/Danny_HealyRae_Ind.jpg",
    partyName: "Independent",
    constituency: "Kerry",
    score: "./assets/images/negative.jpg",
    email: "danny.healy-rae@oireachtas.ie",
    phone: "01 618 4070"
  },
  {
    name: "Dara Calleary",
    imageUrl: "./assets/images/TDs/Dara Calleary_FF_Mayo.jpg",
    partyName: "Fianna Fáil",
    constituency: "Mayo",
    score: "./assets/images/negative.jpg",
    email: "dara.calleary@oireachtas.ie",
    phone: "01 618 3331"
  },
  {
    name: "Darragh O'Brien",
    imageUrl: "./assets/images/TDs/Darragh O_Brien _FF_Dublin Fingal.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin Fingal",
    score: "./assets/images/negative.jpg",
    email: "darragh.obrien@oireachtas.ie",
    phone: "01 618 3802"
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
    name: "David Cullinane",
    imageUrl: "./assets/images/TDs/David_Cullinane_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Waterford",
    score: "./assets/images/positive.jpg",
    email: "david.cullinane@oireachtas.ie",
    phone: "01 618 3176"
  },
  {
    name: "David Stanton",
    imageUrl: "./assets/images/TDs/David Stanton_FG_Cork East.jpg",
    partyName: "Fine Gael",
    constituency: "Cork East",
    score: "./assets/images/negative.jpg",
    email: "david.stanton@oireachtas.ie",
    phone: "01 618 3181"
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
    name: "Denise Mitchell",
    imageUrl: "./assets/images/TDs/Denise_Mitchell_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Bay North",
    score: "./assets/images/positive.jpg",
    email: "denise.mitchell@oireachtas.ie",
    phone: "01 618 3457"
  },
  {
    name: "Dessie Ellis",
    imageUrl: "./assets/images/TDs/Dessie_Ellis_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin North West",
    score: "./assets/images/positive.jpg",
    email: "dessie.ellis@oireachtas.ie",
    phone: "01 618 3006"
  },
  {
    name: "Donnchadh O Laoghaire",
    imageUrl: "./assets/images/TDs/Donnchadh_OLaoghaire_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Cork South Central",
    score: "./assets/images/did_not_vote.jpg",
    email: "donnchadh.olaoghaire@oireachtas.ie",
    phone: "01 618 3097"
  },
  {
    name: "Duncan Smith",
    imageUrl: "./assets/images/TDs/Duncan Smith_Lab_Dublin Fingal.jpg",
    partyName: "Labour Party",
    constituency: "Dublin Fingal",
    score: "./assets/images/positive.jpg",
    email: "duncan.smith@oireachtas.ie",
    phone: "087 9862686"
  },
  {
    name: "Eamon O Cuiv",
    imageUrl: "./assets/images/TDs/Éamon Ó Cuív_FF_Galway West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Galway West",
    score: "./assets/images/negative.jpg",
    email: "eamon.ocuiv@oireachtas.ie",
    phone: "01 618 4231"
  },
  {
    name: "Eamon Ryan",
    imageUrl: "./assets/images/TDs/Eamon Ryan_GP_Dublin Bay South.jpg",
    partyName: "Green Party",
    constituency: "Dublin Bay South",
    score: "./assets/images/negative.jpg",
    email: "eamon.ryan@oireachtas.ie",
    phone: "01 618 3892"
  },
  {
    name: "Emer Higgins",
    imageUrl: "./assets/images/TDs/Emer Higgins_FG_Dublin Mid West.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Mid West",
    score: "./assets/images/negative.jpg",
    email: "emer.higgins@oireachtas.ie",
    phone: "087 9217741"
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
    name: "Fergus O'Dowd",
    imageUrl: "./assets/images/TDs/Fergus O_Dowd_FG_Louth.jpg",
    partyName: "Fine Gael",
    constituency: "Louth",
    score: "./assets/images/negative.jpg",
    email: "fergus.odowd@oireachtas.ie",
    phone: "01 618 3078"
  },
  {
    name: "Francis Noel Duffy",
    imageUrl: "./assets/images/TDs/Francis Noel Duffy_GP_Dublin South-West.jpg",
    partyName: "Green Party",
    constituency: "Dublin South West",
    score: "./assets/images/negative.jpg",
    email: "francisnoel.duffy@oireachtas.ie",
    phone: "086 0664762"
  },
  {
    name: "Frank Feighan",
    imageUrl: "./assets/images/TDs/Frank Feighan_FG_Sligo-Leitrim.jpg",
    partyName: "Fine Gael",
    constituency: "Sligo Leitrim",
    score: "./assets/images/negative.jpg",
    email: "frank.feighan@oireachtas.ie",
    phone: "01 618 4289"
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
    name: "Ged Nash",
    imageUrl: "./assets/images/TDs/Ged Nash_Lab_Louth.jpg",
    partyName: "Labour Party",
    constituency: "Louth",
    score: "./assets/images/positive.jpg",
    email: "ged.nash@oir.ie",
    phone: "01 618 3576"
  },
  {
    name: "Gino Kenny",
    imageUrl: "./assets/images/TDs/Gino_Kenny_PBP.jpg",
    partyName: "Solidarity - People Before Profit",
    constituency: "Dublin Mid West",
    score: "./assets/images/positive.jpg",
    email: "gino.kenny@oireachtas.ie",
    phone: "085 7211574"
  },
  {
    name: "Heather Humphreys",
    imageUrl: "./assets/images/TDs/Heather Humphreys_FG_Cavan-Monaghan.jpg",
    partyName: "Fine Gael",
    constituency: "Cavan Monaghan",
    score: "./assets/images/negative.jpg",
    email: "minister@welfare.ie",
    phone: "01 618 3408"
  },
  {
    name: "Helen McEntee",
    imageUrl: "./assets/images/TDs/Helen McEntee_FG_Meath East.jpg",
    partyName: "Fine Gael",
    constituency: "Meath East",
    score: "./assets/images/did_not_vote.jpg",
    email: "minister@justice.ie",
    phone: "01 618 3253"
  },
  {
    name: "Hildegarde Naughton",
    imageUrl: "./assets/images/TDs/Hildegarde Naughton_FG_Galway West.jpg",
    partyName: "Fine Gael",
    constituency: "Galway West",
    score: "./assets/images/negative.jpg",
    email: "hildegarde.naughton@oireachtas.ie",
    phone: "091 569 677"
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
    name: "Ivana Bacik",
    imageUrl: "./assets/images/TDs/Ivana_Bacik_Labour.png",
    partyName: "Labour Party",
    constituency: "Dublin Bay South",
    score: "./assets/images/positive.jpg",
    email: "ivana.bacik@oireachtas.ie",
    phone: "01 618 3055"
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
    name: "Jackie Cahill",
    imageUrl: "./assets/images/TDs/Jackie Cahill_FF_Tipperary.jpg",
    partyName: "Fianna Fáil",
    constituency: "Tipperary",
    score: "./assets/images/negative.jpg",
    email: "jackie.cahill@oireachtas.ie",
    phone: "01 618 3725"
  },
  {
    name: "James Browne",
    imageUrl: "./assets/images/TDs/James Browne_FF_Wexford.jpg",
    partyName: "Fianna Fáil",
    constituency: "Wexford",
    score: "./assets/images/negative.jpg",
    email: "james.browne@oireachtas.ie",
    phone: "01 618 3094"
  },
  {
    name: "James Lawless",
    imageUrl: "./assets/images/TDs/James Lawless_FF_Kildare North.jpg",
    partyName: "Fianna Fáil",
    constituency: "Kildare North",
    score: "./assets/images/negative.jpg",
    email: "james.lawless@oireachtas.ie",
    phone: "01 618 3587"
  },
  {
    name: "James O'Connor",
    imageUrl: "./assets/images/TDs/James O_Connor_FF_Cork East.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork East",
    score: "./assets/images/negative.jpg",
    email: "james.oconnor@oireachtas.ie",
    phone: "085 8765844"
  },
  {
    name: "Jennifer Carroll MacNeill",
    imageUrl: "./assets/images/TDs/Jennifer Carroll MacNeill_FG_Dún Laoghaire.jpg",
    partyName: "Fine Gael",
    constituency: "Dún Laoghaire",
    score: "./assets/images/negative.jpg",
    email: "jennifer.carrollmacneill@oireachtas.ie",
    phone: "087 9257559"
  },
  {
    name: "Jennifer Murnane O'Connor",
    imageUrl: "./assets/images/TDs/Jennifer Murnane O_Connor_FF_Carlow–Kilkenny.jpg",
    partyName: "Fianna Fáil",
    constituency: "Carlow Kilkenny",
    score: "./assets/images/negative.jpg",
    email: "jennifer.murnaneoconnor@oireachtas.ie",
    phone: "01 618 3307"
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
    name: "Jim O'Callaghan",
    imageUrl: "./assets/images/TDs/Jim O_Callaghan_FF_Dublin Bay South.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin Bay South",
    score: "./assets/images/negative.jpg",
    email: "jim.ocallaghan@oireachtas.ie",
    phone: "01 618 3134"
  },
  {
    name: "Joan Collins",
    imageUrl: "./assets/images/TDs/Collins, Joan.png",
    partyName: "Independents 4 Change",
    constituency: "Dublin South Central",
    score: "./assets/images/positive.jpg",
    email: "joan.collins@oireachtas.ie",
    phone: "01 454 0085"
  },
  {
    name: "Joe Carey",
    imageUrl: "./assets/images/TDs/Joe Carey_FG_Clare.jpg",
    partyName: "Fine Gael",
    constituency: "Clare",
    score: "./assets/images/did_not_vote.jpg",
    email: "joe.carey@oireachtas.ie",
    phone: "01 618 3337"
  },
  {
    name: "Joe Flaherty",
    imageUrl: "./assets/images/TDs/Joe Flaherty_FF_Longford-Westmeath.jpg",
    partyName: "Fianna Fáil",
    constituency: "Longford Westmeath",
    score: "./assets/images/negative.jpg",
    email: "joe.flaherty@oireachtas.ie",
    phone: "086 8201261"
  },
  {
    name: "Joe McHugh",
    imageUrl: "./assets/images/TDs/Joe McHugh_FG_Donegal.jpg",
    partyName: "Fine Gael",
    constituency: "Donegal",
    score: "./assets/images/negative.jpg",
    email: "joe.mchugh@oireachtas.ie",
    phone: "01 618 4242"
  },
  {
    name: "Joe O'Brien",
    imageUrl: "./assets/images/TDs/Joe O_Brien_GP_Dublin Fingal.jpg",
    partyName: "Green Party",
    constituency: "Dublin Fingal",
    score: "./assets/images/negative.jpg",
    email: "joe.obrien@oireachtas.ie",
    phone: "01 618 4114"
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
    name: "John Lahart",
    imageUrl: "./assets/images/TDs/John Lahart_FF_Dublin South West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin South West",
    score: "./assets/images/negative.jpg",
    email: "john.lahart@oireachtas.ie",
    phone: "01 618 3712"
  },
  {
    name: "John McGuinness",
    imageUrl: "./assets/images/TDs/John McGuinness_FF_Carlow–Kilkenny.jpg",
    partyName: "Fianna Fáil",
    constituency: "Carlow Kilkenny",
    score: "./assets/images/negative.jpg",
    email: "john.mcguinness@oireachtas.ie",
    phone: "01 618 3137"
  },
  {
    name: "John Paul Phelan",
    imageUrl: "./assets/images/TDs/John Paul Phelan_FG_Carlow-Kilkenny.jpg",
    partyName: "Fine Gael",
    constituency: "Carlow Kilkenny",
    score: "./assets/images/negative.jpg",
    email: "johnpaul.phelan@oireachtas.ie",
    phone: "01 618 4202"
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
    name: "Josepha Madigan",
    imageUrl: "./assets/images/TDs/Josepha Madigan_FG_Dublin Rathdown.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Rathdown",
    score: "./assets/images/negative.jpg",
    email: "josepha.madigan@oireachtas.ie",
    phone: "01 618 3252"
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
    name: "Kieran O'Donnell",
    imageUrl: "./assets/images/TDs/Kieran O_Donnell_FG_Limerick City.jpg",
    partyName: "Fine Gael",
    constituency: "Limerick City",
    score: "./assets/images/negative.jpg",
    email: "kieran.odonnell@oireachtas.ie",
    phone: "01 618 3808"
  },
  {
    name: "Leo Varadkar",
    imageUrl: "./assets/images/TDs/Leo Varadkar_FG_Dublin West.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin West",
    score: "./assets/images/negative.jpg",
    email: "leo.varadkar@oireachtas.ie",
    phone: "01 640 3133"
  },
  {
    name: "Louise O'Reilly",
    imageUrl: "./assets/images/TDs/Louise_OReilly_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Fingal",
    score: "./assets/images/positive.jpg",
    email: "louise.oreilly@oireachtas.ie",
    phone: "01 618 3093"
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
    name: "Malcolm Noonan",
    imageUrl: "./assets/images/TDs/Malcolm Noonan_GP_Carlow-Kilkenny.jpg",
    partyName: "Green Party",
    constituency: "Carlow Kilkenny",
    score: "./assets/images/negative.jpg",
    email: "malcolm.noonan@oireachtas.ie",
    phone: "086 8399418"
  },
  {
    name: "Marc MacSharry",
    imageUrl: "./assets/images/TDs/Marc MacSharry_FF_Sligo-Leitim.jpg",
    partyName: "Fianna Fáil",
    constituency: "Sligo Leitrim",
    score: "./assets/images/positive.jpg",
    email: "marc.macsharry@oireachtas.ie",
    phone: "01 618 4221"
  },
  {
    name: "Marc O Cathasaigh",
    imageUrl: "./assets/images/TDs/Marc O_Cathasaigh_GP_Waterford.jpg",
    partyName: "Green Party",
    constituency: "Waterford",
    score: "./assets/images/negative.jpg",
    email: "marc.ocathasaigh@oireachtas.ie",
    phone: "086 1908147"
  },
  {
    name: "Marian Harkin",
    imageUrl: "./assets/images/TDs/Marian_Harkin.png",
    partyName: "Independent",
    constituency: "Sligo Leitrim",
    score: "./assets/images/positive.jpg",
    email: "marian.harkin@oireachtas.ie",
    phone: "‪071 9145890‬"
  },
  {
    name: "Mark Ward",
    imageUrl: "./assets/images/TDs/Mark_Ward_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Mid West",
    score: "./assets/images/positive.jpg",
    email: "mark.ward@oireachtas.ie",
    phone: "086 7038164"
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
    name: "Martin Heydon",
    imageUrl: "./assets/images/TDs/Martin Heydon_FG_Kildare South.jpg",
    partyName: "Fine Gael",
    constituency: "Kildare South",
    score: "./assets/images/negative.jpg",
    email: "martin.heydon@oir.ie",
    phone: "04 548 7624"
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
    name: "Mary Butler",
    imageUrl: "./assets/images/TDs/Mary Butler_FF_Waterford.jpg",
    partyName: "Fianna Fáil",
    constituency: "Waterford",
    score: "./assets/images/negative.jpg",
    email: "mary.butler@oireachtas.ie",
    phone: "01 618 3599"
  },
  {
    name: "Mary Lou McDonald",
    imageUrl: "./assets/images/TDs/MaryLou_McDonald_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Central",
    score: "./assets/images/positive.jpg",
    email: "marylou.mcdonald@oireachtas.ie",
    phone: "01 618 3230"
  },
  {
    name: "Matt Carthy",
    imageUrl: "./assets/images/TDs/Matt_Carthy_SF.png",
    partyName: "Sinn Féin",
    constituency: "Cavan Monaghan",
    score: "./assets/images/positive.jpg",
    email: "matt.carthy@oireachtas.ie",
    phone: "‪042 9674001‬"
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
    name: "Mattie McGrath",
    imageUrl: "./assets/images/TDs/Mattie_McGrath_Ind.jpg",
    partyName: "Independent",
    constituency: "Tipperary",
    score: "./assets/images/positive.jpg",
    email: "mattie.mcgrath@oireachtas.ie",
    phone: "01 618 4062"
  },
  {
    name: "Maurice Quinlivan",
    imageUrl: "./assets/images/TDs/Maurice_Quinlivan_SF.jpeg",
    partyName: "Sinn Féin",
    constituency: "Limerick City",
    score: "./assets/images/positive.jpg",
    email: "maurice.quinlivan@oireachtas.ie",
    phone: "01 618 3620"
  },
  {
    name: "Michael Collins",
    imageUrl: "./assets/images/TDs/Michael_Collins_Ind.jpg",
    partyName: "Independent",
    constituency: "Cork South West",
    score: "./assets/images/positive.jpg",
    email: "michael.collins@oireachtas.ie",
    phone: "01 618 3133"
  },
  {
    name: "Michael Creed",
    imageUrl: "./assets/images/TDs/Michael Creed_FG_Cork North West.jpg",
    partyName: "Fine Gael",
    constituency: "Cork North West",
    score: "./assets/images/negative.jpg",
    email: "michael.creed@oireachtas.ie",
    phone: "01 618 3525"
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
    name: "Michael Healy Rae",
    imageUrl: "./assets/images/TDs/Michael_HealyRae_Ind.jpg",
    partyName: "Independent",
    constituency: "Kerry",
    score: "./assets/images/positive.jpg",
    email: "michael.healy-rae@oireachtas.ie",
    phone: "01 618 3363"
  },
  {
    name: "Michael Lowry",
    imageUrl: "./assets/images/TDs/Michael_Lowry_Ind.jpg",
    partyName: "Independent",
    constituency: "Tipperary",
    score: "./assets/images/negative.jpg",
    email: "michael.lowry@oireachtas.ie",
    phone: "01 618 3504"
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
    name: "Michael Moynihan",
    imageUrl: "./assets/images/TDs/Michael Moynihan_FF_Cork North West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork North West",
    score: "./assets/images/negative.jpg",
    email: "michael.moynihan@oireachtas.ie",
    phone: "01 618 3595"
  },
  {
    name: "Michael Ring",
    imageUrl: "./assets/images/TDs/Michael Ring_FG_Mayo.jpg",
    partyName: "Fine Gael",
    constituency: "Mayo",
    score: "./assets/images/negative.jpg",
    email: "michael.ring@oireachtas.ie",
    phone: "01 618 4367"
  },
  {
    name: "Micheal Martin",
    imageUrl: "./assets/images/TDs/Micheál Martin_FF_Cork South Central.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork South Central",
    score: "./assets/images/negative.jpg",
    email: "micheal.martin@oireachtas.ie",
    phone: "021 4320088"
  },
  {
    name: "Mick Barry",
    imageUrl: "./assets/images/TDs/Mick_Barry_PBP.jpg",
    partyName: "Solidarity - People Before Profit",
    constituency: "Cork North Central",
    score: "./assets/images/positive.jpg",
    email: "mick.barry@oireachtas.ie",
    phone: "021 4399653"
  },
  {
    name: "Neale Richmond",
    imageUrl: "./assets/images/TDs/Neale Richmond_FG_Dublin Rathdown.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Rathdown",
    score: "./assets/images/negative.jpg",
    email: "neale.richmond@oireachtas.ie",
    phone: "01 618 3905"
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
    name: "Niall Collins",
    imageUrl: "./assets/images/TDs/Niall Collins_FF_Limerick County.jpg",
    partyName: "Fianna Fáil",
    constituency: "Limerick County",
    score: "./assets/images/negative.jpg",
    email: "niall.collins@oireachtas.ie",
    phone: "01 618 3577"
  },
  {
    name: "Niamh Smyth",
    imageUrl: "./assets/images/TDs/Niamh Smyth_FF_Cavan–Monaghan.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cavan Monaghan",
    score: "./assets/images/did_not_vote.jpg",
    email: "niamh.smyth@oireachtas.ie",
    phone: "01 618 3492"
  },
  {
    name: "Noel Grealish",
    imageUrl: "./assets/images/TDs/Grealish, Noel.jfif",
    partyName: "Independent",
    constituency: "Galway West",
    score: "./assets/images/did_not_vote.jpg",
    email: "noel.grealish@oireachtas.ie",
    phone: "09 176 4807"
  },
  {
    name: "Norma Foley",
    imageUrl: "./assets/images/TDs/Norma Foley_FF_Kerry.jpg",
    partyName: "Fianna Fáil",
    constituency: "Kerry",
    score: "./assets/images/negative.jpg",
    email: "norma.foley@oireachtas.ie",
    phone: "086 3900312"
  },
  {
    name: "Ossian Smyth",
    imageUrl: "./assets/images/TDs/Ossian Smyth_GP_Dun Laoghaire.jpg",
    partyName: "Green Party",
    constituency: "Dún Laoghaire",
    score: "./assets/images/negative.jpg",
    email: "ossian.smyth@oireachtas.ie",
    phone: "086 4611628"
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
    name: "Padraig MacLochlainn",
    imageUrl: "./assets/images/TDs/Padraig_McLochlainn_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Donegal",
    score: "./assets/images/positive.jpg",
    email: "padraig.maclochlainn@oireachtas.ie",
    phone: "01 618 4061"
  },
  {
    name: "Padraig O'Sullivan",
    imageUrl: "./assets/images/TDs/Pádraig O_Sullivan_FF_Cork North Central.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork North Central",
    score: "./assets/images/negative.jpg",
    email: "padraig.osullivan@oireachtas.ie",
    phone: "021 4502289"
  },
  {
    name: "Paschal Donohoe",
    imageUrl: "./assets/images/TDs/Paschal Donohoe_FG_Dublin Central.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Central",
    score: "./assets/images/negative.jpg",
    email: "paschal.donohoe@oireachtas.ie",
    phone: "01 618 3689"
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
    name: "Patricia Ryan",
    imageUrl: "./assets/images/TDs/Patricia_Ryan_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Kildare South",
    score: "./assets/images/positive.jpg",
    email: "patricia.ryan@oireachtas.ie",
    phone: "04 553 2723"
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
    name: "Patrick O'Donovan",
    imageUrl: "./assets/images/TDs/Patrick O_Donovan_FG_Limerick County.jpg",
    partyName: "Fine Gael",
    constituency: "Limerick County",
    score: "./assets/images/negative.jpg",
    email: "patrick.odonovan@oireachtas.ie",
    phone: "01 618 3610"
  },
  {
    name: "Paul Donnelly",
    imageUrl: "./assets/images/TDs/Paul_Donnelly_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin West",
    score: "./assets/images/positive.jpg",
    email: "paul.donnelly@oireachtas.ie",
    phone: "087 1341514"
  },
  {
    name: "Paul Kehoe",
    imageUrl: "./assets/images/TDs/Paul Kehoe_FG_Wexford.jpg",
    partyName: "Fine Gael",
    constituency: "Wexford",
    score: "./assets/images/negative.jpg",
    email: "paul.kehoe@oireachtas.ie",
    phone: "01 618 4473"
  },
  {
    name: "Paul McAuliffe",
    imageUrl: "./assets/images/TDs/Paul McAuliffe_FF_Dublin North West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin North West",
    score: "./assets/images/negative.jpg",
    email: "paul.mcauliffe@oireachtas.ie",
    phone: "087 6727060"
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
    name: "Pearse Doherty",
    imageUrl: "./assets/images/TDs/Pearse_Doherty_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Donegal",
    score: "./assets/images/positive.jpg",
    email: "pearse.doherty@oireachtas.ie",
    phone: "01 618 3960"
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
    name: "Peter Fitzpatrick",
    imageUrl: "./assets/images/TDs/Peter_Fitzpatrick_Louth_Independent.jfif",
    partyName: "Independent",
    constituency: "Louth",
    score: "./assets/images/positive.jpg",
    email: "peterm.fitzpatrick@oireachtas.ie",
    phone: "01 618 3563"
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
    name: "Richard Boyd Barrett",
    imageUrl: "./assets/images/TDs/Richard_BoydBarrett_PBP.jpg",
    partyName: "Solidarity - People Before Profit",
    constituency: "Dún Laoghaire",
    score: "./assets/images/positive.jpg",
    email: "richard.boydbarrett@oir.ie",
    phone: "01 618 3449"
  },
  {
    name: "Richard Bruton",
    imageUrl: "./assets/images/TDs/Richard Bruton_FG_Dublin Bay North.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Bay North",
    score: "./assets/images/negative.jpg",
    email: "richard.bruton@oireachtas.ie",
    phone: "01 618 3103"
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
    name: "Robert Troy",
    imageUrl: "./assets/images/TDs/Robert Troy_FF_Longford-Westmeath.jpg",
    partyName: "Fianna Fáil",
    constituency: "Longford Westmeath",
    score: "./assets/images/negative.jpg",
    email: "robert.troy@oireachtas.ie",
    phone: "01 618 4059"
  },
  {
    name: "Roderic O'Gorman",
    imageUrl: "./assets/images/TDs/Roderic O_Gorman_GP_Dublin West.jpg",
    partyName: "Green Party",
    constituency: "Dublin West",
    score: "./assets/images/negative.jpg",
    email: "roderic.ogorman@oireachtas.ie",
    phone: "087 4179777"
  },
  {
    name: "Roisin Shortall",
    imageUrl: "./assets/images/TDs/Roisin_Shortall_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Dublin North West",
    score: "./assets/images/positive.jpg",
    email: "roisin.shortall@oireachtas.ie",
    phone: "01 618 3593"
  },
  {
    name: "Rose Conway Walsh",
    imageUrl: "./assets/images/TDs/Rose_ConwayWalsh_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Mayo",
    score: "./assets/images/positive.jpg",
    email: "rose.conwaywalsh@oireachtas.ie",
    phone: "01 618 3664"
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
    name: "Sean Canney",
    imageUrl: "./assets/images/TDs/Sean_Canney_Ind.jpg",
    partyName: "Independent",
    constituency: "Galway East",
    score: "./assets/images/negative.jpg",
    email: "sean.canney@oireachtas.ie",
    phone: "01 618 3436"
  },
  {
    name: "Sean Crowe",
    imageUrl: "./assets/images/TDs/Sean_Crowe_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin South West",
    score: "./assets/images/positive.jpg",
    email: "sean.crowe@oireachtas.ie",
    phone: "01 618 3941"
  },
  {
    name: "Sean Fleming",
    imageUrl: "./assets/images/TDs/Seán Fleming_FF_Laois–Offaly.jpg",
    partyName: "Fianna Fáil",
    constituency: "Laois Offaly",
    score: "./assets/images/negative.jpg",
    email: "sean.fleming@oireachtas.ie",
    phone: "01 618 3472"
  },
  {
    name: "Sean Haughey",
    imageUrl: "./assets/images/TDs/Seán Haughey_FF_Dublin Bay North.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin Bay North",
    score: "./assets/images/negative.jpg",
    email: "sean.haughey@oireachtas.ie",
    phone: "01 618 4369"
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
    name: "Sean Sherlock",
    imageUrl: "./assets/images/TDs/Sean Sherlock_Lab_Cork East.jpg",
    partyName: "Labour Party",
    constituency: "Cork East",
    score: "./assets/images/positive.jpg",
    email: "sean.sherlock@oireachtas.ie",
    phone: "01 618 4049"
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
    name: "Simon Harris",
    imageUrl: "./assets/images/TDs/Simon Harris_FG_Wicklow.jpg",
    partyName: "Fine Gael",
    constituency: "Wicklow",
    score: "./assets/images/negative.jpg",
    email: "simon.harris@oireachtas.ie",
    phone: "01 618 3805"
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
    name: "Stephen Donnelly",
    imageUrl: "./assets/images/TDs/Stephen Donnelly_FF_Wicklow.jpg",
    partyName: "Fianna Fáil",
    constituency: "Wicklow",
    score: "./assets/images/negative.jpg",
    email: "stephen.donnelly@oireachtas.ie",
    phone: "01 618 4293"
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
    name: "Thomas Byrne",
    imageUrl: "./assets/images/TDs/Thomas Byrne_FF_Meath East.jpg",
    partyName: "Fianna Fáil",
    constituency: "Meath East",
    score: "./assets/images/negative.jpg",
    email: "Thomas.Byrne@oireachtas.ie",
    phone: "01 618 3310"
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
    name: "Thomas Pringle",
    imageUrl: "./assets/images/TDs/Thomas_Pringle_Ind.jpg",
    partyName: "Independent",
    constituency: "Donegal",
    score: "./assets/images/positive.jpg",
    email: "thomas.pringle@oireachtas.ie",
    phone: "01 618 3038"
  },
  {
    name: "Verona Murphy",
    imageUrl: "./assets/images/TDs/Verona_Murphy_Ind.jpg",
    partyName: "Independent",
    constituency: "Wexford",
    score: "./assets/images/positive.jpg",
    email: "verona.murphy@oireachtas.ie",
    phone: "01 6183329"
  },
  {
    name: "Violet-Anne Wynne",
    imageUrl: "./assets/images/TDs/Wynne, Violet-Anne.jfif",
    partyName: "Sinn Féin",
    constituency: "Clare",
    score: "./assets/images/positive.jpg",
    email: "violet-anne.wynne@oireachtas.ie",
    phone: "065 6842251"
  },
  {
    name: "Willie O'Dea",
    imageUrl: "./assets/images/TDs/Willie O_Dea_FF_Limerick City.jpg",
    partyName: "Fianna Fáil",
    constituency: "Limerick City",
    score: "./assets/images/negative.jpg",
    email: "willie.odea@oireachtas.ie",
    phone: "01 618 4259"
  }
]