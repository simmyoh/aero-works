export type Part107Source = {id:string;title:string;kind:'Supplied PDF'|'Supplied video'|'Linked FAA resource';detail:string;url?:string};

export const part107Sources: Part107Source[] = [
  {id:'course-video',title:'Training - Learning Center Courses Content - FAA - FAASTeam - FAASafety.gov.mp4',kind:'Supplied video',detail:'ALC-677 course modules covering certification, aircraft requirements, crew roles, maintenance, preflight, Remote ID, operating rules, waivers, emergencies, and reporting.'},
  {id:'introduction',title:'Introduction - Learning Center Courses Content - FAA - FAASTeam - FAASafety.gov.pdf',kind:'Supplied PDF',detail:'Course audience, objectives, training structure, recency, and the § 107.73 knowledge areas.'},
  {id:'review',title:'Review - Learning Center Courses Content - FAA - FAASTeam - FAASafety.gov.pdf',kind:'Supplied PDF',detail:'FAA course review of eligibility, recency, aircraft characteristics, exclusions, registration, crew roles, maintenance, waivers, emergencies, and reporting.'},
  {id:'glossary',title:'Glossary - Learning Center Courses Content - FAA - FAASTeam - FAASafety.gov.pdf',kind:'Supplied PDF',detail:'FAA course definitions and abbreviations used throughout the guide and question bank.'},
  {id:'resources',title:'Resources_UAS-Recurrent-Non61.pdf',kind:'Supplied PDF',detail:'The supplied course reference list. All external sources below are drawn from this file.'},
  {id:'faa-uas',title:'FAA Unmanned Aircraft Systems',kind:'Linked FAA resource',detail:'Registration, operating guidance, LAANC, DroneZone, and UAS programs.',url:'https://www.faa.gov/uas'},
  {id:'part-107',title:'14 CFR Part 107 - Small Unmanned Aircraft Systems',kind:'Linked FAA resource',detail:'The governing operating and certification rules listed by the supplied resources PDF.',url:'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-107'},
  {id:'part-89',title:'14 CFR Part 89 - Remote Identification',kind:'Linked FAA resource',detail:'Remote Identification rules listed by the supplied resources PDF.',url:'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-89'},
  {id:'policy-library',title:'FAA UAS Policy Library',kind:'Linked FAA resource',detail:'FAA notices, policy, guidance, TFR, and NOTAM resources.',url:'https://www.faa.gov/uas/resources/policy_library/'},
  {id:'testing',title:'FAA Airman Testing',kind:'Linked FAA resource',detail:'Testing standards and reference handbooks identified in the supplied resources PDF.',url:'https://www.faa.gov/training_testing/testing/'},
  {id:'acs',title:'Remote Pilot - Small UAS Airman Certification Standards (FAA-S-ACS-10B)',kind:'Linked FAA resource',detail:'The FAA blueprint that identifies the knowledge and risk-management elements evaluated on the UAG knowledge test.',url:'https://www.faa.gov/training_testing/testing/acs'},
  {id:'study-guide',title:'Remote Pilot - Small UAS Study Guide (FAA-G-8082-22)',kind:'Linked FAA resource',detail:'FAA study material arranged around the Part 107 knowledge areas and listed by the supplied resources file.',url:'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation'},
];

export const sourceRefs = {
  rules:'ALC-677 supplied training video - certification and operating rules',
  airspace:'ALC-677 supplied training video - airspace, charts, NOTAMs, and flight restrictions',
  limits:'ALC-677 supplied training video - operational limitations',
  night:'ALC-677 supplied training video - night operations',
  people:'ALC-677 supplied training video - operations over people',
  rid:'ALC-677 supplied training video - Part 89 Remote ID',
  weather:'Resources_UAS-Recurrent-Non61.pdf - Aviation Weather Center',
  phak:'Resources_UAS-Recurrent-Non61.pdf - Pilot’s Handbook of Aeronautical Knowledge',
  ac:'Resources_UAS-Recurrent-Non61.pdf - AC 107-2',
  review:'Review - Learning Center Courses Content - FAA - FAASTeam - FAASafety.gov.pdf',
  glossary:'Glossary - Learning Center Courses Content - FAA - FAASTeam - FAASafety.gov.pdf',
  acs:'Resources_UAS-Recurrent-Non61.pdf - FAA Airman Certification Standards (FAA-S-ACS-10B)',
  studyGuide:'Resources_UAS-Recurrent-Non61.pdf - Remote Pilot Small UAS Study Guide (FAA-G-8082-22)',
};
