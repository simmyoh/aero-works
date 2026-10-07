import { sourceRefs as ref } from './sources';

export type QuickReferenceGroup = { title:string; items:{label:string;value:string;note:string}[]; references:string[] };

export const quickReference: QuickReferenceGroup[] = [
  {title:'Test & certificate',references:[ref.acs,ref.rules],items:[
    {label:'UAG test',value:'60 questions · 2 hours · 70% to pass',note:'The FAA testing matrix lists test age 14; certificate eligibility begins at 16.'},
    {label:'Knowledge recency',value:'24 calendar months',note:'Complete an accepted initial test or recurrent training within the preceding 24 calendar months.'},
    {label:'Retest after failure',value:'Wait 14 days',note:'Bring the failed Airman Knowledge Test Report when retesting.'},
  ]},
  {title:'Core operating limits',references:[ref.rules,ref.limits],items:[
    {label:'Aircraft',value:'Less than 55 lb at takeoff',note:'The total includes payload and everything attached.'},
    {label:'Altitude',value:'400 ft AGL',note:'Within 400 ft horizontally of a structure, up to 400 ft above its immediate uppermost limit.'},
    {label:'Groundspeed',value:'87 kt / 100 mph',note:'This is groundspeed, not indicated airspeed.'},
    {label:'Visibility',value:'At least 3 statute miles',note:'Measured from the control station.'},
    {label:'Cloud clearance',value:'500 ft below · 2,000 ft horizontal',note:'Both distances must be maintained.'},
  ]},
  {title:'Airspace & charts',references:[ref.airspace,ref.studyGuide],items:[
    {label:'Prior authorization',value:'Class B, C, D and E surface areas',note:'A UAS Facility Map value supports review; it is not authorization.'},
    {label:'Boundary colors',value:'B solid blue · C solid magenta · D dashed blue · E surface dashed magenta',note:'Shaded magenta usually means Class E starts at 700 ft AGL; shaded blue, 1,200 ft AGL.'},
    {label:'Chart altitude',value:'Most figures are MSL',note:'Convert planned AGL altitude to MSL by adding the site elevation.'},
    {label:'Temporary changes',value:'Check NOTAMs and TFRs',note:'A sectional cannot show a restriction issued after the chart was published.'},
  ]},
  {title:'Night, people & Remote ID',references:[ref.night,ref.people,ref.rid],items:[
    {label:'Night lighting',value:'Visible for at least 3 statute miles',note:'Use anti-collision lighting with a flash rate sufficient to avoid collision; the remote PIC may reduce intensity for safety.'},
    {label:'Operations over people',value:'Use Category 1, 2, 3 or 4 conditions',note:'Category eligibility does not remove airspace, Remote ID, or other operating requirements.'},
    {label:'Remote ID paths',value:'Standard RID · broadcast module · FRIA',note:'A broadcast-module operation must remain within visual line of sight.'},
  ]},
  {title:'Reports & fitness',references:[ref.rules,ref.review],items:[
    {label:'FAA accident report',value:'Within 10 days',note:'Applies to serious injury, loss of consciousness, or qualifying property damage; exclude damage to the sUAS.'},
    {label:'Property threshold',value:'More than $500',note:'Use repair cost or fair-market value if the property is a total loss.'},
    {label:'Alcohol',value:'8 hours · under 0.04% · no impairment',note:'All applicable conditions must be met; medication and fatigue can also make a crewmember unfit.'},
  ]},
];
