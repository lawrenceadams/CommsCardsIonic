import { Scenario } from "./osce.model";

export const OSCE_SCENARIOS: Scenario[] = [
    {
        "id": 0,
        "year": 1,
        "system": "resp",
        "title": "Respiratory History",
        "question": `<p><b>Context:</b> You are a medical student on placement in the Accident &amp; Emergency department</p><p><b>Task:</b> Please take a history from this patient presenting with chest pain</p><p><b>Essential Background:</b> Mr Thomas (DoB 23/05/70) has come in to the A&amp;E departement complaining of chest pain</p>`,
        "script": `<div><b>Presenting Complaint:</b>    <p>Chest pain – 45 year old A&amp;E    </p></div><div>    <p><b>History of Presenting Complaint</b></p>    <p>        <ul>            <li>You had sudden onset of right-sided ‘sharp’ pleuritic chest pain while sitting down a few hours.</li>            <li>Pain had a severity score of 7/10, there is no radiation or exacerbating/alleviating factors.</li>            <li>There was an associated shortness of breath, you can still complete sentences and it has only lasted the duration of the chest pain.</li>            <li>There is no haemoptysis, unexplained weight loss, pyrexia, hoarse voice or sputum.</li>            <li>No nausea no vomiting no palpitations.</li>            <li>Pain ongoing but a bit less than before.</li>        </ul>    </p></div><div>    <p>        <b>Past Medical History</b>        <ul>            <li>Cholecystectomy: August 2014</li>            <li>Hypertension: 2007</li>            <li><i>No diabetes, asthma, COPD, IHD</i></li>        </ul>    </p></div><div>    <p>        <b>Drug History</b>        <ul>            <li>Ramipril: 2.5mg OD</li>            <li>Bisoprolol: 2.5mg OD</li>            <li><i>No known drug allergies</i></li>        </ul>    </p></div><div><p>    <b>Family History</b>    <ul>        <li>Mum died of M.I. aged 70</li>        <li>Brother has COPD</li>    </ul></p></div><div>    <p>        <b>            Social History        </b><br>        <ul>            <li>Smoker 15 per day for 20 years </li>            <li>No alcohol consumption</li>            <li>Retired nurse</li>            <li>Widowed, now living home alone</li>            <li>No recent travel or pets </li>            <li>Healthy diet, cooks and cleans daily</li>        </ul>    </p></div><div>    <p>        <b>Systemic Review</b>        <ul>            <li><i>General</i> – No weight loss, no fatigue, no loss of appetite</li>            <li><i>Cardiovascular</i> – Swollen warm right leg, no palpitations</li>            <li><i>Gastrointestinal</i> – no loss of appetite, no nausea, vomiting, abdominal pain or change of bowel movements</li>            <li><i>Musculoskeletal</i> – no notable muscle or joint pain DD – Pulmonary Embolism, Pneumothorax</li>        </ul>    </p></div><div>    <p>        <b>Ideas, Concerns &amp; Expectations</b>        <ul>            <li>You think this may be a heart attack.</li>            <li>You smoke and have high blood pressure and your mum died of a heart attack.</li>            <li>You are anxious that the dr covers this, and if he does not, you will ask him directly “do you think this could                be my heart?”</li>        </ul>    </p></div>`,
        "expectations": `<div><b>Accuracy</b>    <ul>        <li>Pleuritic pain</li>        <li>Check for other respiratory symptoms</li>        <li>Considers cardiac symptoms as well</li>        <li>Elicits concern regarding MI</li>        <li>Elicits risk factors – smoker and hypertension</li>    </ul></div><div><b>Skillfulness</b>    <ul>        <li>Appropriately utilises open/closed questioning</li>        <li>Shares managements options with patient and reaches a plan</li>        <li>All students should allow the patient to talk and listen</li>        <li>All students should facilitate responses both verbally and non-verbally</li>        <li>All students should use open and closed questions to good effect</li>        <li>Good students will respond to cues, clarify points of uncertainty, summarise appropriately and invite correction</li>    </ul></div><div><b>Supportiveness</b>    <ul>         <li>All students should display some empathy/care/concern</li>        <li>All students should display good active listening skills</li>        <li>Good students will explore the patient’s concerns</li>        <li>Good students will alleviate concerns as far as is possible</li>        <li>Good students will put the patient at ease and engender trust through the consultation</li>        <li>Address concern of MI. by patient </li>        <li>Supportive during pain and breathlessness</li>    </ul></div><div><b>Efficiency</b>    <ul>        <li>All students should clarify the tasks of the consultation at the start with the patient</li>        <li>All students should complete the tasks in the time allocated</li>        <li>All students should allocate appropriate time to each element of the consultation</li>        <li>Good students will have a well-structured consultation with student taking appropriate level of control</li>        <li>Good students will reach a conclusion and enable next steps to be discussed</li>    </ul></div><div><b>Saftey</b>    <ul>        <li>Checks red flags and no worrying or dangerous actions or omissions</li>        <li>Arranges appropriate follow up/safety netting</li>        <li>All students should identify self and role, and ensure the patient’s identity is clear</li>        <li>All students should ensure the consultation enhances health and wellbeing of patient(s)</li>        <li>All students should act and within their competence and professional boundaries</li>        <li>All students should ensure specific features of the consultation relating to safety are met: details</li>        <li>Good students may ask about symptoms of serious complications or consequences: details</li>        <li>Good students will ensure the patient is clear regarding appropriate management/follow up</li>        <li>Asks for haemoptysis/weight loss. Recognises need for further investigations (CXR / D Dimer / CTPA)</li>    </ul></div>`
    },
    {
        "id": 1,
        "year": 1,
        "system": "cardio",
        "title": "Cardiovascular History",
        "question": "<p><b>Context:</b> You are a medical student on placement in a General Practice</p><p><b>Task:</b> Please take a history from this patient presenting with breathlessness</p><p><b>Essential Background:</b> Mr/Mrs Smith (DoB 11/09/75) has presented today complaining of SoB.</p>",
        "script": `<div>    <p>        <b>Patient details:</b>        <ul>            <li><i>Name:</i> Mr/Mrs Smith</li>            <li><i>Age:</i> 40 years old</li>            <li><i>DoB:</i> 11/09/75</li>        </ul>    </p></div><div>    <p><b>Presenting Complaint:</b></p>    <p>Increasing breathlessness</p></div><div>    <p><b>Presenting Complaint History</b></p>    <p>        <ul>            <li>You have been getting increasingly breathless over the last few weeks. </li>            <li>You first noticed it when out for a day trip in Edinburgh where you had to climb some steps and felt rotten.</li>            <li>The breathing really got to you and you had to stop for a rest on a bench half way up a long flight, which made you feel old.</li>            <li>The only other thing of note was a sensation of fluttering in your chest which came on and off for the rest of that day.</li>            <li>Since that day trip you have had similar problems with exercise and breathing – having to take things easy much more than you are used to doing.</li>            <li>Currently you can walk a good distance on the flat just so long as you don’t go too fast.</li>            <li>Any stairs "puff you out".</li>            <li>The fluttering has been apparent on a few more occasions – and just last night you noticed a rather erratic thumping in your chest which lasted for a few minutes.</li>            <li>It was quite fast, and difficult to know whether it was regular or not.</li>        </ul>    </p></div><div>    <p><b>Additional Informaton</b> <i>(If specifically asked for)</i></p>    <p>        <ul>            <li>Your breathing does not change if you lie down flat.</li>            <li>Nor have you not been waking gasping for breath.</li>            <li>You have not had any pains or tightness in your chest.</li>            <li>You have had no swelling in your ankles.</li>            <li>You are not coughing anything up.</li>            <li>You have no cough.</li>            <li>You have had no fevers and you do not feel unwell.</li>            <li>You are not losing blood from anywhere.</li>            <li>You eat a normal diet.</li>        </ul>    </p></div><div>    <p><b>Past Medical History</b></p>    <p>        <ul>            <li>You have never had a problem with your heart.</li>            <li>You do not have diabetes.</li>            <li>You do not have any lung disease.</li>            <li><i>Feel free to ‘create’ other medical issues in the past which are unlikely to be connected with this one!</i></li>        </ul>    </p></div><div>    <p><b>Medication</b></p>    <p>        <ul>            <li><i>Nil.</i></li>        </ul>    </p></div><div>    <p><b>Allergies</b></p>    <p>        <ul>            <li><i>Nil.</i></li>        </ul>    </p></div><div>    <p><b>Social History</b></p>    <p>        <ul>            <li>Lives with spouse</li>            <li>Employment history: <i>Make up appropriate employment</i></li>            <li>Smokes 10 per day, occasional alcohol (max 4 units) on Fridays / Saturdays</li>        </ul>    </p></div><div>    <p><b>Family History</b></p>    <p>        <ul><i>None that you are aware of</i></ul>    </p></div><div>    <p><b>Ideas Concerns Expectations</b></p>    <p>        <ul>            <li>You think that the breathlessness may be due to an infection in your chest, and you are wondering whether some antibiotics would help to sort it out.</li>            <li>You have had a chest infection before and did get antibiotics then.</li>            <li>You have not really considered this to be to do with your heart.</li>            <li>Yes you are having some palpitations – but you suspected the infection was causing them, rather than the other way round (in reality it could be either).</li>            <li>If the student expresses that it might be connected with your heart please ask them to explain what they mean and what you have to do to find out for sure</li>        </ul>    </p></div>`,
        "expectations": `<div><b>Accuracy</b>    <p>        <ul>            <li>Check for Dyspnoea mainly on stairs. </li>            <li>Palpitations – gathers details – regularity, speed, onset, duration etc</li>            <li>Other respiratory symptoms – cough, sputum, wheeze etc</li>            <li>Covers cardiac symptoms – chest pains, orthopnoea ankle swelling</li>            <li>Smoking history</li>        </ul>    </p></div><div><b>Skillfulness</b>    <p>        <ul>            <li>Appropriately utilises open/closed questioning</li>            <li>Shares managements options with patient and reaches a plan</li>            <li>Appropriate communication - clear instructions and explanations during examination</li>            <li>Use of open / closed questions to gather history</li>            <li>Active listening</li>            <li>Signpost and summarises</li>            <li>Explores ICE – patient thinking chest infection, thinks antibiotics will help</li>        </ul>    </p></div><div><b>Supportiveness</b>    <p>        <ul>            <li>Gains rapport</li>            <li>Establishes patient concerns/expectations</li>            <li>Manages patient’s concerns expectations</li>            <li>Communication and rapport maintained during all aspects of the consultation</li>            <li>Gains rapport with patient.</li>            <li>Acknowledges patient’s ideas of chest infection</li>            <li>Supports patient if informed may be related to the heart</li>        </ul>    </p></div><div><b>Efficiency</b>    <p>        <ul>            <li>Closes the consultation</li>            <li>Structures the consultation well using signposting, summarizing.</li>            <li>Closes with clear idea of what is happening next</li>        </ul>    </p></div><div><b>Safety</b>    <p>        <ul>            <li>Checks red flags and no worrying or dangerous actions or omissions</li>            <li>Arranges appropriate follow up/safety netting</li>            <li>Check for symptoms of haemoptysis and chest pains. </li>            <li>Make sure palpitations and breathlessness not present during consultation.</li>        </ul>    </p></div>`
    },
    {
        "id": 2,
        "year": 1,
        "system": "cardio",
        "title": "Cardiovascular History 2",
        "question": "<p><b>Context:</b> You are a medical student on placement in the Accident and Emergency department.</p><p><b>Task:</b> Please take a history from this patient who has been brought into A&amp;E following a collapse.</p><p><b>Essential Background:</b> Mr/Mrs Robert (DoB 11/09/60) has been brought into A&amp;E following a collapse.</p>",
        "script": `<div>    <p><b>Presenting Complaint</b></p>    <p>Sudden faint – 55 year old, presented to A&amp;E</p></div><div>    <p><b>History of Presenting Complaint</b></p>    <p>        <ul>            <li>You have known angina and aortic stenosis (scheduled for valve replacement in 4 weeks).</li>            <li>You were playing golf 4 days ago, and was feeling completely fine with no recent illness when you suddenly collapsed while walking up a hill, s/he did not use his GTN spray.</li>            <li>Your friend says you were unconscious for 10 minutes and regained consciousness: feeling light-headed and dizzy, with very                cold peripheries but rousable and orientated.</li>            <li>There was no accompanying chest pain, ankle oedema, palpitations or shortness of breath. No tongue biting, no                incontinence.</li>        </ul>    </p></div><div>    <p><b>Past Medical History</b></p>    <p>        <ul>            <li>GORD: 1987</li>            <li>Fundoplication (for GORD): 1995</li>            <li>Angina: 2002</li>            <li>No hypertension, asthma, diabetes or recent surgery</li>            <li>No allergies</li>        </ul>    </p></div><div>    <p><b>Family History</b></p>    <p>        <ul>            <li>Mother had open-heart surgery for 2 “leaky valves” aged 65 and is asthmatic</li>        </ul>    </p></div><div>    <p><b>Drug History</b></p>    <p>        <ul>            <li>PRN: GTN – 2 puffs</li>            <li>Over-the-counter paracetemol for headaches (stress-related)</li>            <li>No drug allergies</li>        </ul>    </p></div><div>    <p><b>Social History</b></p>    <p>        <ul>            <li>Previously professional footballer / hockey player, now desk-job</li>            <li>Smokes 30 cigarettes a day for past 30 years (45 pack-year history)</li>            <li>Currently a social-drinker (2 units per week)</li>            <li>Lives with spouse, meat-rich and low-fibre diet</li>            <li>No longer exercises due to anginal pains</li>        </ul>    </p></div><div>    <p><b>Systemic Enquiry</b></p>    <p>        <ul>            <li>General – no weight loss, fatigue, fever</li>            <li>Respiratory­ – no shortness of breath, cough, wheeze or sputum</li>            <li>Cardiovascular – As above; no PND, no orthopnoea</li>            <li>Gastrointestinal – no loss of appetite, abdominal pain, nausea or vomiting; normal bowel movements</li>            <li>Musculoskeletal – no notable muscular pain</li>        </ul>    </p></div><div>    <p><b>Differential Diagnosis</b></p>    <p>Aortic Stenosis, Unstable Angina</p></div><div>    <p><b>Ideas, Concerns and Expectations</b></p>    <p>        <ul>            <li>Worried about his heart, can you hurry up the surgery sooner? – will it happen again? It was very embarassing</li>            <li>Reluctant to give up smoking as gets very stressed</li>        </ul>    </p></div>`,
        "expectations": `<div><b>Accuracy</b>    <p>        <ul>            <li>Elicits history of angina and aortic stenosis</li>            <li>Checks risk factors for IHD</li>            <li>Considers epilepsy</li>        </ul>    </p></div><div><b>Skillfulness</b>    <p>        <ul>            <li>Appropriately utilises open/closed questioning</li>            <li>Shares managements options with patient and reaches a plan</li>            <li>All students should allow the patient to talk and listen</li>            <li>All students should facilitate responses both verbally and non-verbally</li>            <li>All students should use open and closed questions to good effect</li>            <li>Good students will respond to cues, clarify points of uncertainty, summarise appropriately and invite correction</li>        </ul>    </p></div><div><b>Supportiveness</b>    <p>        <ul>            <li>All students should display some empathy/care/concern</li>            <li>All students should display good active listening skills</li>            <li>Good students will explore the patient’s concerns</li>            <li>Good students will alleviate concerns as far as is possible</li>            <li>Good students will put the patient at ease and engender trust through the consultation</li>            <li>Manages concern re hurrying up surgery and risk of further episodes </li>            <li>Appropriately supportive re smoking</li>        </ul>    </p></div><div><b>Efficiency</b>    <p>        <ul>            <li>All students should clarify the tasks of the consultation at the start with the patient</li>            <li>All students should complete the tasks in the time allocated</li>            <li>All students should allocate appropriate time to each element of the consultation</li>            <li>Good students will have a well-structured consultation with student taking appropriate level of control</li>            <li>Good students will reach a conclusion and enable next steps to be discussed</li>        </ul>    </p></div><div><b>Safety</b>    <p>        <ul>            <li>Checks red flags and no worrying or dangerous actions or omissions</li>            <li>Arranges appropriate follow up/safety netting</li>            <li>Red flags – ongoing chest pain or dyspnoeic at presentation,</li>            <li>Weight loss and appetite loss (heavy smoker risk of malignancy)</li>            <li>Safety netting with appropriate info re symptoms of MI or prolonged collapse</li>        </ul>    </p></div>`
    },
    {
        "id": 3,
        "year": 1,
        "system": "gi",
        "title": "GI History",
        "question": "<p><b>Context:</b> You are a medical student on placement in a General Practice</p><p><b>Task:</b> Please take a history from this patient presenting with Abdominal pain.</p><p><b>Essential Background:</b> Mr Smith (DoB 11/09/60) has presented today complaining of Abdominal pain.</p>",
        "script": `<div>    <p><b>Presenting Complaint</b></p>    <p>Abdominal pain – presented to GP practice</p></div><div>    <p><b>History of Presenting Complaint</b></p>    <p>        <ul>            <li>55-year old overweight person with a 2-day history of severe, sudden onset right upper quadrant abdominal pain                whilst sitting down, which is ‘dull’ but has occasional ‘spasms’.</li>            <li>The pain has no radiation and lying down exacerbates the pain.</li>            <li>The pain has been constant for the past 2 days, initially given a severity score of 7/10 but has now reached                10/10 on day 2.</li>            <li>There is also a 2-day history of fever, malaise and nausea.</li>            <li>You have vomited six times since the onset, not keeping much down, with no blood present in the vomit.</li>            <li>There has been no change in bowel habits, abdominal bloating, tenesmus, weight loss or change in appetite.</li>            <li>No recent travel and patient does not recall eating any ‘dodgy food’.</li>        </ul>    </p></div><div>    <p><b>Past Medical History</b></p>    <p>        <ul>            <li>Transient Ischaemic Attacks: 2013 and 2014</li>            <li>GORD: 2008</li>            <li><i>No hypertension, diabetes or recent surgery</i></li>        </ul>    </p></div><div>    <p><b>Drug History</b></p>    <p>        <ul>            <li>Clopidogrel PO 75mg OD</li>            <li>Simvastatin PO 40mg OD</li>            <li>Omeprazole PO 40mg OD </li>            <li><i>No known drug allergies</i></li>        </ul>    </p></div><div>    <p><b>Family History</b></p>    <p>        <ul>            <li>Mother and brother have both had cholecystectomies</li>            <li>Father died of heart attack</li>        </ul>    </p></div><div>    <p><b>Social History</b></p>    <p>        <ul>            <li>Smoker of 10 per day for 30 years = 15 pack years</li>            <li>Drinks, around 10-15 units per week</li>            <li>Unemployed, lives with husband who is a support worker</li>            <li>No recent travel</li>            <li>Patient admits to relying a lot on takeaways and ready meals</li>        </ul>    </p></div><div>    <p><b>Systemic Inquiry</b></p>    <p>        <ul>            <li><i>General</i> – no weight loss, lethargy, malaise</li>            <li><i>Respiratory­</i> – no SOB, sputum, wheeze, chest pain</li>            <li><i>Cardiovascular</i> – no palpitations, chest pain</li>            <li><i>Musculoskeletal</i> – no notable muscular pain</li>        </ul>    </p></div><div>    <p><b>Differential Diagnosis</b></p>    <p>Gallstones causing biliary colic, cholecystitis</p></div><div>    <p><b>Ideas, Concerns and Expectations</b></p>    <p>        <ul>            <li>Quite laid back, thinks it heartburn and just wants some strong tablets for it (the Rennies are Rubbish) – shocked                if needs to see surgeon – will it be ok to have an operation with my stroke? </li>            <li>Laid back about smoking but may think twice if linked with gallstones or anaesthetic risk</li>        </ul>    </p></div>`,
        "expectations": `<div><b>Accuracy</b>    <p>        <ul>            <li>RUQ pains – nature of pain</li>            <li>Associate GI symptoms.</li>            <li>History of TIA</li>            <li>Family history of cholecystectomies.</li>        </ul>    </p></div><div><b>Skillfulness</b>    <p>        <ul>            <li>Appropriately utilises open/closed questioning</li>            <li>Shares managements options with patient and reaches a plan</li>            <li>All students should allow the patient to talk and listen</li>            <li>All students should facilitate responses both verbally and non-verbally</li>            <li>All students should use open and closed questions to good effect</li>            <li>Good students will respond to cues, clarify points of uncertainty, summarise appropriately and invite correction</li>            <li>Elicits laid back attitude to this.</li>        </ul>    </p></div><div><b>Supportiveness</b>    <p>        <ul>            <li>All students should display some empathy/care/concern</li>            <li>All students should display good active listening skills</li>            <li>Good students will explore the patient’s concerns</li>            <li>Good students will alleviate concerns as far as is possible</li>            <li>Good students will put the patient at ease and engender trust through the consultation</li>            <li>Considers support for smoking and diet</li>            <li>Manages shock of requiring further referral if mentioned. </li>            <li>Manages concern re anaesthetic</li>        </ul>    </p></div><div><b>Efficiency</b>    <p>        <ul>            <li>All students should clarify the tasks of the consultation at the start with the patient</li>            <li>All students should complete the tasks in the time allocated</li>            <li>All students should allocate appropriate time to each element of the consultation</li>            <li>Good students will have a well-structured consultation with student taking appropriate level of control</li>            <li>Good students will reach a conclusion and enable next steps to be discussed</li>        </ul>    </p></div><div><b>Safety</b>    <p>        <ul>            <li>Checks red flags and no worrying or dangerous actions or omissions</li>            <li>Arranges appropriate follow up/safety netting</li>            <li>All students should identify self and role, and ensure the patient’s identity is clear</li>            <li>All students should ensure the consultation enhances health and wellbeing of patient(s)</li>            <li>All students should act and within their competence and professional boundaries</li>            <li>All students should ensure specific features of the consultation relating to safety are met: details</li>            <li>Good students may ask about symptoms of serious complications or consequences: details</li>            <li>Good students will ensure the patient is clear regarding appropriate management/follow up</li>            <li><b>Consider admission to hospital</b></li>        </ul>    </p></div>`
    },
    {
        "id": 4,
        "year": 2,
        "system": "renal",
        "title": "Renal History",
        "question": `<p><b>Context:</b> You are a medical student on placement in a General Practice</p><p><b>Task:</b> Please take a history from this patient presenting with Ankle swelling.</p><p><b>Essential Background:</b> Mr/Mrs Smith (DoB 11/09/55) has presented today complaining of Ankle swelling.</p>`,
        "script": `<div>    <p><b>Presenting Complaint</b></p>    <p>You have come to see your GP because your ankles are swollen.</p></div><div>    <p><b>History of Presenting Complaint</b></p>    <ul>        <li>You first noticed this about 10 days ago.</li>        <li>They are swollen all the time, but tend to be more swollen towards the end of the day.</li>        <li>When you wake in the morning, your face is swollen, but this improves during the day.</li>    </ul></div><div>    <p><b>Additional Information</b> <i>(if specifically asked for)</i></p>    <ul>        <li>For about 2 weeks, you’ve noticed that your urine has been frothy.</li>        <li>You haven’t noticed any blood or any change of colour in your urine.</li>        <li>You have not been breathless, and don’t have a cough.</li>        <li>Your weight has increased by about 5kg (10-11lb) over the last 2 weeks, and your trousers are a little tight.</li>        <li>Until 2 weeks ago, your weight had been steady for years.</li>        <li>Your appetite is good, and you feel generally well, but a bit more tired than usual.</li>    </ul></div><div>    <p><b>Past Medical History</b></p>    <ul>        <li>You had regular medicals as a police officer, and there were never any concerns about your blood pressure or your            general health.</li>        <li>You have had no serious illnesses or operations in the past.</li>    </ul></div><div>    <p><b>Medication</b></p>    <p><i>Nil.</i></p></div><div>    <p><b>Allergies</b></p>    <p><i>Nil.</i></p></div><div>    <p><b>Social History</b></p>    <ul>        <li>Lives with wife.</li>        <li>Recently retired, used to be a police officer for many years.</li>        <li>You don’t smoke and don’t drink alcohol excessively.</li>        <li>You have a healthy lifestyle and are keen on golf (handicap of 4) and fishing.</li>    </ul></div><div>    <p><b>Family History</b></p>    <p><i>Nil relevant.</i></p></div><div>    <p><b>Ideas, Concerns and Expectations</b></p>    <ul>        <li>You are concerned about these symptoms, but not too much.</li>        <li>If you had had blood in your urine you would have been much more worried.</li>        <li>However you are not pleased to be unwell as you have retired with the expectation of enjoying yourself and that means            being fit enough to play golf and go fishing most days.</li>    </ul></div><div>    <p><b><i>Delivery</i></b></p>    <ul>        <li>You want to know what the likely diagnosis might be and what needs to be done by way of investigations and possible            treatment.</li>        <li>You are keen to be given as much information as possible even though it is the first visit to the doctor.</li>        <li>You can push the student with questions around, “if this, then what?” or, “if that, then what?”.</li>        <li>Be very pleasant but persistent in getting explanations around the options.</li>    </ul></div>`,
        "expectations": `<div><b>Accuracy</b>    <p>        <ul>            <li>Elicits ankle and face swelling</li>            <li>Elicits frothy urine</li>            <li>Elicits weight gain</li>            <li>Otherwise well and fit.</li>        </ul>    </p></div><div><b>Skillfulness</b>    <p>        <ul>            <li>Appropriately utilises open/closed questioning. </li>            <li>Explain possible diagnoses and investigations (urine test, blood tests) </li>            <li>Shares managements options with patient and reaches a plan</li>        </ul>    </p></div><div><b>Supportiveness</b>    <p>Gains rapport:</p>    <p>        <ul>            <li>Establishes patient concerns/expectations</li>            <li>Manages patient’s concerns expectations</li>            <li>Communication and rapport maintained during all aspects of the consultation</li><li>Elicits expectation to be well now retired. </li>            <li>Addresses possible effects on golf and fishing</li>            <li>Builds good rapport with patient</li>        </ul>    </p></div><div><b>Efficiency</b>    <p>        <ul>            <li>Explains reason for consultation. </li>            <li>Signposts and summarises </li>            <li>Clear outcome of consultation and next steps</li>        </ul>    </p></div><div><b>Safety</b>    <p>        <ul>            <li>Checks red flags and no worrying or dangerous actions or omissions</li>            <li>Arranges appropriate follow up/safety netting</li>            <li>Check patient name and DOB </li>            <li>Checks for weight loss, appetite. </li>            <li>Also checks for symptoms of heart failure</li>            <li>Safety net – “if things get worse…”</li>        </ul>    </p></div>`
    },
    {
        "id": 5,
        "year": 3,
        "system": "psych",
        "title": "Psychiatric History",
        "question": `<p><b>Context:</b> You are a medical student on placement in a General Practice</p><p><b>Task:</b> Please take a history from this patient who is becoming increasingly forgetful.</p><p><b>Essential Background:</b> Mr/Mrs Smith (DoB 11/09/65) has presented today complaining of becoming increasingly forgetful, and his/her son has persuaded them to see the doctor.</p>`,
        "script": `<div>    <p><b>Presenting Complaint</b></p>    <p>I've become more forgetful</p></div><div>    <p><b>History of Presenting Complaint</b></p>    <p>        <ul>            <li>You have noticed that you are becoming increasingly “forgetful” and people are beginning to comment on this.                You are puzzled why as you have always being a little vague about minor and boring details about day to day                living. You are a Professor of English Literature and specialise in Shakespearean sonnets. You can recite                many of them easily still.</li>            <li>You have recently lost your wife/husband (she/he died of a stroke suddenly, six months ago) and she/he used to                do all the day to day things, running the house, the bank accounts etc. She/he started doing all this when                the children came along as your career was more important. It paid more and she/he was only too happy to                give up working to be a house wife/husband.</li>            <li>As far as you’re concerned your absent mindedness is only a little bit worse and is not a problem, but your son                has insisted you come along to see the doctor today. Your son plays golf with this doctor and has spoken                to him/her about you to make sure he/she knows you are becoming forgetful. He cannot come today however as                he is away on business and, anyway, you would not have allowed him to come with you. After all you’re not                senile!</li>            <li>You are not sleeping well and know you are very tired a lot of the time. You have just gone back to work after                compassionate leave, and your head of department is very understanding and has allowed you to continue in                an administrative capacity with very few lectures and no tutorials.</li>            <li>Last week you were lecturing and did seem to lose your place a little, but it was alright as you decided to end                the lecture early and the students were mostly pleased, although one did complain to your head of department.</li>        </ul>    </p></div><div>    <p><b>Additional Information</b> <i>(if specifically asked for)</i></p>    <p>        <ul>            <li>If asked – you are not weepy, you eat OK, you wake at about 6am after your disturbed nights – but always have                done. You admit that you are not happy, but you would deny being depressed. You do look forward to seeing                your son and his family. You have never thought about harming yourself.</li>        </ul>    </p></div><div>    <p><b><i>Delivery</i></b></p>    <p>        <ul>            <li>If asked to be specific about recent events be as vague as possible, as you can’t really remember any details                about recent events</li>            <li>Try and deflect the doctor from finding out too much though by going back to older memories, which are quite                clear. </li>            <li>You can even recite a bit of a sonnet about grief, if it seems a good way of showing how good your memory really                is and making the point that you are grieving right now!</li>        </ul>    </p></div><div>    <p><b>Past Medical History</b></p>    <p>        <ul>            Fracture shin from bicycle accident 30 years ago        </ul>    </p></div><div>    <p><b>Medication</b></p>    <p><i>Nil.</i></p></div><div>    <p><b>Allergies</b></p>    <p><i>Nil.</i></p></div><div>    <p><b>Social History</b></p>    <p>        <ul>            <li>Lives along - bereaved 6 months ago - Husband/Wife died of a stroke</li>            <li>Works as a Professor of History</li>            <li>Doesn’t smoke. Very occasionally alcohol (a couple of times a month, when visiting friends or family)</li>            <li>Having trouble looking after self. House untidy, skips meals or makes easy ready made foods.</li>        </ul>    </p></div><div>    <p><b>Family History</b></p>    <p><i>Nil of note.</i></p></div><div>    <p><b>Ideas, Concerns and Expectations</b></p>    <p>        <ul>            <li>You expect that the doctor will understand that there is nothing wrong with you other than understandable stress                at losing your wife/husband, and will tell your son that when he/she next sees him at golf.</li>        </ul>    </p></div>`,
        "expectations": `<div><b>Accuracy</b>    <p>        <ul>            <li>Elicit forgetfulness with examples</li>            <li>Recent bereavement</li>            <li>Issues at work</li>        </ul>    </p></div><div><b>Skillfulness</b>    <p>        <ul>            <li>Appropriately utilises open/closed questioning</li>            <li>Shares managements options with patient and reaches a plan</li>            <li>Empathises with bereavement </li>            <li>Supportive of patient’s memory difficulties</li>        </ul>    </p></div><div><b>Supportiveness</b>    <p>        <ul>            <li>Considers implications for work </li>            <li>Elicits patient’s lack of concern for symptosm</li>            <li>Approaches subject of memory loss with sensitivity</li>            <li>Identify and explores issues of living alone</li>        </ul>    </p></div><div><b>Efficiency</b>    <p>        <ul>            <li>Uses signposting and summarising effectively to help steer conversation</li>        </ul>    </p></div><div><b>Safety</b>    <p>        <ul>            <li>Checks red flags and no worrying or dangerous actions or omissions</li>            <li>Arranges appropriate follow up/safety netting</li>            <li>Checks patient’s identification </li>            <li>Makes a management plan to include patient returning for further review, if patient agrees</li>            <li>Check for symptoms of depression – low mood, weepiness, early morning awakening etc.</li>        </ul>    </p></div>`
    }
]