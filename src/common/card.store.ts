import { Card } from "./card.model";

/**
 * ====== WARNING =======
 * This is the Flash Card Database File
 * Please Validate Database before publishing app.
 * 
 * ENSURE EACH ID IS UNIQUE OR TRACKING WILL NOT WORK!!!
 */

export const FLASHCARDS: Card[] = [
    {
        "id": 1,
        "front": "<p>Mr Arjo has recently stopped smoking cigarettes, with a 15 pack year history.</p><p>Explain to Mr Arjo that 10 years from now he will have a 50% risk reduction for lung cancer in comparison to his current risk.</p>",
        "back": "<p>All smokers have a higher chance of developing lung cancer than non-smokers. Smoking is the main cause of lung cancer and lung cancer is the UKs biggest cancer killer.</p><p>As soon as you stop smoking, the risk of lung cancer starts to reduce and over time the risk continues to reduce. Within ten years of stopping smoking, you will have halved your risk of developing lung cancer compared with someone who continued to smoke - this is a significant improvement.</p><p>Of course, by maintaining a healthy lifestyle (exercising, eating well, avoiding too much alcohol and not smoking) you can keep your body fitter for longer too.</p>",
        "title": "Explain a 10 year, 50% risk reduction in lung cancer",
        "system": [
            "resp",
            "cardio"
        ],
        "type": "risk",
        "year": 1,
        "CCP": [
            91,
            38
        ]
    },
    {
        "id": 2,
        "title": "Explain the lifestyle implications of coeliac disease to a newly diagnosed patient",
        "front": "<p>Explain the likely lifestyle implications of coeliac disease to a newly diagnosed patient.</p>",
        "back": "<p>Coeliac disease is a common condition in which the gut has an adverse reaction to gluten – a food substance that can be found in starchy foods. It is an autoimmune condition - the body’s immune system recognises gluten as a threat and mistakenly attacks the gut lining causing symptoms.</p> <p>This shouldn’t impact on your lifestyle too much, the main changes are dietary in nature and your symptoms should resolve once you cut gluten out of your diet. To do this you will need to stop eating foods such as bread, pasta, cakes and other wheat based products.</p> <p>Gluten free alternatives can be found in most supermarkets and some are available on prescription so there is no reason why you can’t continue to eat similar meals, you would simply have to substitute in gluten free ingredients. Rice and potatoes do not contain gluten so are still ok.</p> <p>It is a good idea to try to get into the habit of reading labels on foods as sometimes gluten is contained within a meal without you being aware of it; usually if something contains gluten it will be flagged up in the little ‘allergens’ box on the packet.</p>",
        "system": [
            "gi"
        ],
        "type": "healthpromo",
        "year": 1,
        "CCP": [
            19,
            23
        ]
    },
    {
        "id": 3,
        "title": "Explain what is meant by a unit of alcohol and give alcohol lifestyle advice",
        "front": "<p>Explain to your patient what is meant by a ‘unit’ of alcohol and give lifestyle advice relating to alcohol</p>",
        "back": "<p>A unit is how we standardise exactly how much alcohol is in a drink.</p> <p>1 unit equates to a single measure of spirits. As a guide a pint of beer or cider contains about 2-3 units and a glass of wine approximately 2 units, however this varies depending on the drink and of course the size of the glass! The Drink Aware Website allows you to calculate exact units in any drink, which might be a helpful place to visit if you think you might be drinking a little too much.</p> <p>As a guide, men should have no more than 3-4 units per day and women no more than 2-3 per day. However, you should ensure that you don’t drink alcohol every day as your body needs a day off to recover.</p>",
        "system": [
            "gi"
        ],
        "type": "healthpromo",
        "year": 1,
        "CCP": [
            91,
            81,
            30,
            87
        ]
    },
    {
        "id": 4,
        "title": "In your pair discuss the steps in an effective handover",
        "front": "<p>In your pair discuss the steps in giving an effective handover.</p>",
        "back": "<p><i>An iSBAR approach may be taken to ensure a succinct handover is given:</i></p><br><p><b style='color: #ff6264'>Identify</b> – Identify yourself (name, role) and the patient (name, DOB, location)</p><p><b style='color: #ff6264'>Situation</b> – What is currently going on? What are the main problems arising?</p><p><b style='color: #ff6264'>Background</b> – What relevant history is there? PMH, Medication, Investigations.</p><p><b style='color: #ff6264'>Assessment</b> –What do you think is going on? What have you found? Ensure you have relevant observations and examination findings to hand.</p><p><b style='color: #ff6264'>Recommendation</b> – What is the purpose of the call? What do you want to happen next? (Advice, referral, treatment, review?) Be clear about your request/time-frame.</p>",
        "system": [
            ""
        ],
        "type": "typesofconsul",
        "year": 1,
        "CCP": [
            0
        ]
    },
    {
        "id": 5,
        "title": "Interpret an X-ray report and explain the next steps to the patient",
        "front": "<p>Read the following radiology report for a 70 y/o man with shortness of breath and explain the next steps</p> <br> <p>‘CXR showed blunting of both costophrenic angles with a meniscus sign on the right and bilateral perihilar haze. There is an increased cardiothoracic ratio consistent with cardiomegaly’</p>",
        "back": "<p>Pleural effusions, perihilar oedema and cardiomegaly – suggests Congestive Cardiac Failure.</p><p>The X-Ray suggests that there is some fluid collecting around your lungs, and your heart appears a little enlarged. The most likely cause of your breathlessness is that this fluid in your lungs is making it difficult to breathe. This fluid has possibly started to accumulate because your heart isn’t working as it should, which means that it perhaps isn’t pumping the blood around your body as smoothly as we’d expect.</p> <p>We would like to do a type of ultrasound scan called an echocardiogram to tell us a bit more about how your heart is working as well as an ECG heart tracing looking at the electrical activity in your heart. We would also like to start some medication to remove the fluid in your lungs.</p>",
        "system": [
            "resp",
            "cardio",
            "radiol"
        ],
        "type": "interpret",
        "year": 1,
        "CCP": [
            20,
            38
        ]
    },
    {
        "id": 6,
        "title": "Explain and gain consent for a PR examination",
        "front": "<p>Explain and gain consent for a PR (digital rectal) examination</p>",
        "back": "<p>What I’d like to do is carry out an internal examination of your back passage in order to give some more information about the problems you have been experiencing.</p> <p>This will involve inserting a gloved, lubricated finger into your back passage and feeling for any lumps or bumps. The examination shouldn’t be painful. It may be a little uncomfortable; however it will only last for a few seconds.</p> <p>I’ll ask one of my colleagues to come in whilst I carry out the examination to make sure that you are comfortable; if you have any problems or pain during the examination you can just say and we’ll stop right away.</p> <p>Remember to check consent has been gained: ‘Is that alright with you?’, ‘Do you have any questions or anything you are unsure of?’ etc.</p>",
        "system": [
            "gi"
        ],
        "type": "consentproc",
        "year": 1,
        "CCP": [
            70
        ]
    },
    {
        "id": 7,
        "title": "Explain why antibiotics will not be prescribed for a 'chest infection'",
        "front": "<p>Mrs Watts has brought her 18 month old son to the GP looking for antibiotics for his ‘chest infection’.</p> <p>He is diagnosed with a viral infection. Explain to Mrs Watts why antibiotics will not be prescribed and what treatment she could give.</p>",
        "back": "<p>Your son has symptoms of a viral infection in his airways. Examining him he is well and there is nothing to suggest a bacterial infection. Viral infections are common and do not often cause children to become very unwell. It will get better without any treatment.</p> <p>Antibiotics wouldn’t help in this case as they only fight specific bacterial infections and don’t work for viral infections. If we use antibiotics unnecessarily then this can lead to problems such as antibiotic resistance – the antibiotics stop working against bacterial infections when they are needed in the future. It is important you make sure your son has plenty of fluids and rest. You can give him liquid paracetamol (Calpol) to keep his temperature down.</p> <p>It is important to get him re-assessed if he becomes more unwell with difficulty breathing or if he is drinking less and/or having dry nappies. Should you need medical advice when the GP is closed you should phone 111.</p>",
        "system": [
            "resp",
            "microbio"
        ],
        "type": "explainplan",
        "year": 1,
        "CCP": [
            0
        ]
    },
    {
        "id": 8,
        "title": "Explain some anatomical structures in lay terms",
        "front": "<p>Explain the following anatomical structures in lay terms:</p> <br> <p>‘Tympanic Membrane’</p> <p>‘Urethra’</p> <p>‘Rectum’</p>",
        "back": "<p>Tympanic Membrane – Also called the ear drum, this is a thin film deep within your ear which helps to detect sound and protects your inner ear.</p> <p>Urethra – The muscular tube which carries urine from your bladder, through which you pass urine.</p> <p>Rectum – “Bottom/back passage”. The last part of your bowels which ends at your bottom.</p> <br> <p><i>You may wish to consider other structures that you have had difficulty explaining to patients in the past and discuss these with your partner.</i></p>",
        "system": [
            "princ"
        ],
        "type": "explainplan",
        "year": 1,
        "CCP": [
            0
        ]
    },
    {
        "id": 9,
        "title": "Explain what a spirometry test is and how it is carried out",
        "front": "<p>Explain in understandable terms what a spirometry test is and how it is carried out.</p>",
        "back": "<p>Spirometry is a series of tests that look at how well the lungs are working to help us to diagnose certain conditions or make decisions about breathing problems.</p> <p>This will involve you breathing into a tube at various intervals so that we can have a look at the lungs and how much air they hold. Spirometry testing also gives us more information about the air that you breathe in and out, so sometimes you may need to blow into the tube more than once or even breathe out for as long as you can.</p> <p><i>For patients who are accustomed to peak flow testing it may be useful to describe spirometry as a similar process but ‘using electronic equipment for more accurate readings’.</i></p>",
        "system": [
            "resp"
        ],
        "type": "explainplan",
        "year": 1,
        "CCP": [
            20,
            56,
            74
        ]
    },
    {
        "id": 10,
        "title": "Explain to a patient how an Echo and an ECG are carried out",
        "front": "<p>Describe to a patient how the following are carried out:</p> <br> <p>1. Echocardiogram (Echo)</p> <p>2. Electrocardiogram (ECG)</p>",
        "back": "<p>1. <b style='color: is-primary'>Echocardiogram</b> – An echo is an ultrasound scan of the heart, which works in a similar way to the ultrasound scan used to examine the tummy of a pregnant lady. The probe is pressed against the skin, on the left side of the chest, to gather information about how well the heart is beating. An echo shouldn’t be sore or uncomfortable and usually doesn’t take any prior preparation.</p> <p>2. Electrocardiogram – An ECG, which you may have heard called a ‘heart tracing’ uses a machine to show pictures that tell us about the electrical signals in the heart muscle, hence the heart’s rhythm. A series of wires are connected to sticky pads attached to your chest and limbs, and these wires produce a reading on the machine. You won’t feel anything out of the ordinary, and certainly not any pain but you do have to remain still momentarily to give a clear reading.</p>",
        "system": [
            "cardio"
        ],
        "type": "explainplan",
        "year": 1,
        "CCP": [
            17,
            74
        ]
    },
    {
        "id": 11,
        "title": "Explain β-blocker side effects",
        "front": "<p>Explain to the patient the possible side effects they may experience when starting on beta blocker therapy for angina</p>",
        "back": "<p><i>Beta blockers are used for a number of conditions and so it maybe useful to start a discussion by explaining why the patient is receiving them:</\ti></p><p>So, you’re taking beta blockers because when we last checked your blood pressure it was a little high and this medicine should help to bring that down a bit. This is important as high blood pressure can put more pressure on your heart, especially when you have other medical problems such as angina.</p><p>Common side effects include nausea, diarrhoea, tiredness and cold hands and feet; these are nothing to be too worried about but if you do experience these you should contact your GP to discuss if a better alternative is available. People may experience light-headedness or even fainting when they stand up too quickly, this can be caused by too big a dose of beta blockers and so you should let your GP know so that they can alter the dose and hopefully prevent further problems. </p><p>Less commonly beta blockers may cause a change in mood or even your sleep pattern; if this is the case your GP can help you to find a better option which agrees with your body better. </p>",
        "system": [
            "cardio"
        ],
        "type": "explainplan",
        "year": 1,
        "CCP": [
            25,
            86,
            52,
            69
        ]
    },
    {
        "id": 12,
        "title": "Explain what is meant by the term ‘Heart Failure’",
        "front": "<p>Explain to the patient what is meant by the term ‘Heart Failure’<p>",
        "back": "<p>Sometimes when our heart is under a lot of strain because of other health problems it can become stiff or weak, which limits its ability to work as well as it used to. This means that the heart doesn’t pump blood around the body quite as well as it did.</p><p>This is called heart failure, although it is important to note that the heart does still work just not quite as effectively as it once did. It doesn’t mean your heart is about to suddenly stop.</p><p>With medication the symptoms that you feel because of your heart problems (such as breathlessness, ankle swelling and tiredness) may resolve or improve.</p><p>Although heart failure may be caused by a heart attack, they are not the same thing and one does not always lead to the other.</p>",
        "system": [
            "cardio"
        ],
        "type": "explaindisease",
        "year": 1,
        "CCP": [
            74,
            51
        ]
    },
    {
        "id": 13,
        "title": "Explain what 'angina' is and the likely treatment",
        "front": "<p>Explain the term ‘angina’ to a patient and how it may be treated</p>",
        "back": "<p>Angina happens when the blood that supplies the heart muscle with oxygen and energy is unable to reach it properly. Often this occurs because one or more of the blood vessels that carries blood to the heart has become slightly narrowed. Smoking, being overweight, a diet high in saturated fats, high blood pressure and family history of heart problems can all increase your risk of angina.</p><p>Most patients find that the symptoms of angina happen when they are working hard or exercising and this can cause problems such as chest pain because the heart muscle is not getting enough oxygen. Upon resting for a few minutes symptoms usually improve.</p><p>Medication is used to help control the symptoms and reduce your risk of the angina worsening. Improving your lifestyle can also help prevent further worsening.</p><p>It is important to remember that if medication or resting does not improve your symptoms then you should go to hospital or call an ambulance immediately as there is a chance that you are experiencing something more serious such as a heart attack.</p>",
        "system": [
            "cardio"
        ],
        "type": "explaindisease",
        "year": 1,
        "CCP": [
            14,
            74
        ]
    },
    {
        "id": 14,
        "title": "Explain the pathophysiology and management of GORD",
        "front": "<p>Explain the pathophysiology of Gastro-Oesophageal Reflux Disease to a patient and discuss ways to help this condition</p>",
        "back": "<p>Gastro-oesophageal reflux is the name given to a condition whereby some of the acid that is normally contained within your stomach to help breakdown food has made its way backwards into your oesophagus (the tube which connects your mouth and your stomach).</p><p>Most of the time this has happened because the muscles which stop food and acid flowing backwards into this tube have become weakened for one reason or another. The presence of acid in the oesophagus causes the pain or ‘heart burn’ like symptoms.</p><p>Avoidance of specific triggers can help (alcohol, caffeine, smoking, fatty and spicy foods). If you are overweight then weight loss can also help. In addition medications which reduce stomach acid can be used to relieve with symptoms.</p>",
        "system": [
            "gi"
        ],
        "type": "explaindisease",
        "year": 1,
        "CCP": [
            2
        ]
    },
    {
        "id": 15,
        "title": "Explain what 'Bronchiectasis' is",
        "front": "<p>Mrs Jones has just been told that she has bronchiectasis but has no idea what this means.</p><p>Explain the diagnosis to Mrs Jones</p>",
        "back": "<p>The lungs are made up of a series of tiny tubes which are lined by even smaller hairs and mucus in order to trap all of the bugs and dust that we breathe in.</p><p>In bronchiectasis these tubes are widened and so the hairs struggle to catch all of the dust and some of the mucus becomes stuck rather than being coughed up. This means that sometimes the tubes within the lungs become blocked up and it can be difficult to breathe. People with bronchiectasis often have a persistent cough and are more prone to chest infections.</p><p>Bronchiectasis is a long-term condition so cannot be ‘cured’ and the severity of symptoms can vary from one individual to another. However, there are treatments that can help to relieve these symptoms.</p><p><i>NB: Drawing a diagram to demonstrate this may help some patients to understand.</i></p>",
        "system": [
            "resp"
        ],
        "type": "explaindisease",
        "year": 1,
        "CCP": [
            74,
            20,
            38
        ]
    },
    {
        "id": 16,
        "title": "Explain Atrial Fibrillation to a patient",
        "front": "<p>Explain Atrial Fibrillation to a stable 50y/o patient <i>(BP 130/85, HR 85 Irregular)</i> who has presented to the GP with palpitations.</p><p>Then explain next steps in management.</p>",
        "back": "<p>Palpitations (or an awareness of your own heartbeat) can be caused by various things including something called Atrial Fibrillation (AF). AF is a condition whereby the heart’s rhythm has been disrupted and so instead of beating regularly as it should, it beats more irregularly.</p><p>There is a simple test we can do called an ECG, which shows the rhythm of your heart. If we confirm AF then we will look into why this might have occurred and discuss further treatment options. Treatment might include tablets to control the heart rate and to prevent future problems associated with AF such as a stroke.</p><p>People with AF may not have any symptoms; however, AF can cause symptoms such as breathlessness, dizziness or chest pain. If you develop any of these symptoms you need to see a doctor urgently.</p><p><i>NB: It may be useful to ‘tap out’ a normal heart rhythm and then the patient’s heart rhythm. This would give you an extra method of communication to enhance understanding and discussions.</i></p>",
        "system": [
            "cardio"
        ],
        "type": "explaindisease",
        "year": 1,
        "CCP": [
            62
        ]
    },
    {
        "id": 17,
        "title": "Ankle swelling and medications with CKD",
        "front": "<p>Mrs Clark has CKD Stage 3 and recently sprained her wrist. She has been self medicating for the pain but has now noticed mild ankle swelling. Blood tests showed eGFR had fallen from 45 to 35.</p><p>What is the likely cause? Give Mrs Clark advice on pain management.</p>",
        "back": "<p><i>It is possible that the soft tissue injury to Mrs Clark’s arm has been treated with non-steroidal antiinflammatory drugs (such as ibuprofen) which need to be used with caution in renal impairment with monitoring of U+Es or avoided altogether. This could explain the drop in renal function.</i></p><p>Because your kidneys aren’t working as best they could, it means that some medications can’t be handled by the body quite so well. This includes some medicines for controlling pain such as Ibuprofen. What we would normally recommend is that you avoid these types of pain relief and opt for other options such as paracetamol. You may also find that the pain in your wrist could be eased using non-medical therapies such as cold or hot compresses or support dressings.</p><p>I know it can be quite tricky trying to suss out which medicines you can and can’t take so we’d usually advise that you double check the information leaflet that comes with the box, or pop into ask your local pharmacist or GP if you are unsure.</p><p>I’d like to check your kidney blood test again in one week to make sure it is staying stable. Are you happy to come back for this? If you feel worse in the meantime please book a GP appointment.</p>",
        "system": [
            "renal",
            "pharma"
        ],
        "type": "typesofconsul",
        "year": 2,
        "CCP": [
            51,
            92
        ]
    },
    {
        "id": 18,
        "title": "Discuss aspects of a collateral history",
        "front": "<p>Discuss the following regarding a collateral history:</p><ul><li>What it is?</li><li>Why/when it is helpful?</li><li>Important considerations when taking one</li></ul>",
        "back": "<p>A collateral history may be taken from a family member, spouse, parent, partner, carer or a witness to an event etc. to help give another perspective on a patient’s wellbeing/events.</p><ul><li>A collateral history is particularly relevant if the patient has difficulties communicating or is too young or unwell to give clear information.</li><li>Consider if the patient has given consent for you to discuss with the third party – if the patient has capacity and is able to consent then you should seek their consent.</li><li>Try not to ignore the patient if they are also present - make the discussion three-way/ involve the patient where possible</li><li>Don’t guide or influence the history by putting words in the persons mouth</li><li>Consider if the source is reputable; how well does the third party know the patient/events?</li></ul>",
        "system": [
            ""
        ],
        "type": "typesofconsul",
        "year": 2,
        "CCP": [
            0
        ]
    },
    {
        "id": 19,
        "title": "Discuss how to approach a NAI case",
        "front": "<p>In your pair discuss how to approach a possible case of Non-Accidental Injury in a 4y/o child</p>",
        "back": "<p>Each case should be taken for it’s own merit. The following are NICE recommendations:</p><ol class='danger-text'><li><b>Listen and Observe</b> – all relevant history, the child’s demeanour, parent-child interaction</li><li><b>Seek an explanation</b> – from both parent and child</li><li><b>Consider, suspect or exclude</b> – discuss the case with a senior colleague, consider all options and look for evidence to include or exclude possible NAI </li><li><b>Record</b> – ensure the interaction and your clinical judgement are documented</li></ol><p>You should try to interview both the parent/carer and the child together as well as separately. Open questioning should be used and whilst an element of suspicion should be maintained you should avoid appearing judgemental.</p>",
        "system": [
            "paeds",
            "ethlaw"
        ],
        "type": "typesofconsul",
        "year": 2,
        "CCP": [
            15
        ]
    },
    {
        "id": 20,
        "title": "Discuss the challenges in complex communication needs",
        "front": "<p>In your pair discuss how to overcome potential challenges in consulting with a patient with learning disabilities</p>",
        "back": "<p>Each individual is different in their communication needs, however, the following points should be considered:</p><ul><li>Talk to the patient, not just their carer or companion</li><li>Check if the patient is happy for you to ask their carer questions</li><li>Watch the patient and their facial expressions/gestures</li><li>Establish the method that the patient prefers to communicate</li><li>Reciprocate by use of non-verbal communication</li><li>Take your time and be patient</li><li>Don’t make assumptions</li><li>Be comfortable with silence</li><li>Consider using visual aids or other aids e.g. leaflets with large print</li><li>Use clear understandable terms</li><li>Check understanding and don’t be afraid to repeat yourself</li></ul>",
        "system": [
            "paeds",
            "psych"
        ],
        "type": "typesofconsul",
        "year": 2,
        "CCP": [
            0
        ]
    },
    {
        "id": 21,
        "title": "Discuss the features of a paediatric consultation",
        "front": "<p>In your pair discuss the key features of a paediatric consultation</p>",
        "back": "<p>Both the approach and content of a paediatric consultation differs from that of a consultation with an adult. The following points should be considered:</p><p><b>Content:</b></p><ul><li>Maternal/ pregnancy history</li><li>Perinatal history (Problems at birth, birth weight, neonatal admission?)</li><li>Developmental history (Milestones: motor, social, language, hearing)</li><li>Family history (Parents, siblings, including stillbirth or miscarriage)</li><li>Social history (Living arrangements, are parents together? Schooling? Smokers at home?)</li></ul><p><b>Approach:</b></p><ul><li>Frequently history is from third party (Parent, carer etc.)</li><li>Allow child to give their account, even from young age (approx. 3 yrs)</li><li>As always use open questions and follow Calgary-Cambridge Guide</li><li>Always be wary of parental influence/bias in a history</li><li>The approach will need to be flexible depending on age and maturity of child</li></ul>",
        "system": [
            "paeds"
        ],
        "type": "typesofconsul",
        "year": 2,
        "CCP": [
            75
        ]
    },
    {
        "id": 22,
        "title": "Discuss communicating to those with a hearing impairment",
        "front": "<p>In your pair discuss how to communicate with a patient who has a hearing impairment</p>",
        "back": "<p><i>The same principles apply as communicating with any other patient, but the following are also advised by the Royal Association for Deaf People (RADP):</i></p><ul><li>Ensure that the patient has hearing aids in and turned on (if applicable)</li><li>Speak clearly and succinctly but not too slowly</li><li>Do not over exaggerate mouthing words as this can make lip reading difficult</li><li>Use natural gestures</li><li>Do not shout</li><li>Use diagrams of images to aid oral communication</li><li>Communicate through a sign language interpreter (if applicable)</li><li>Use hearing loop technology</li><li>Access voluntary societies/charities for additional support</li><li>Ensure hearing aids are kept safe – once lost they take a long time to remould and replace</li></ul>",
        "system": [
            "ent",
            "gp"
        ],
        "type": "typesofconsul",
        "year": 2,
        "CCP": [
            21
        ]
    },
    {
        "id": 23,
        "title": "Discuss the factors in Breaking Bad News",
        "front": "<p>In your pair consider the environmental factors and set up required when planning to break bad news</p>",
        "back": "<p>Firstly, you should consider if you are the best person to break the news to the patient. Do you have the experience, knowledge of the patient and their situation etc?</p><p><b>Preparation</b></p><ul><li>Pre-plan the steps of consultation and rehearse roughly in your mind</li><li>Be clear on the objective of the consultation</li><li>Be aware that you may need to adapt the consultation depending on the patient’s reaction</li><li>Clear your schedule to ensure you arrive on time/ don’t have to leave promptly after</li><li>Hand over your bleep to prevent interruptions</li></ul><p><b>Environment</b></p><ul><li>Peaceful, private side room or clinic room</li><li>No telephones or interruptions</li><li>Tissues to hand</li><li>Appropriate notes, imaging, test results available and to hand</li></ul>",
        "system": [
            ""
        ],
        "type": "typesofconsul",
        "year": 2,
        "CCP": [
            0
        ]
    },
    {
        "id": 24,
        "title": "Explain the process of Catheterisation",
        "front": "<p>A 73y/o man needs catheterised to relieve acute urinary retention Explain the procedure to the gentleman</p>",
        "back": "<p>Because your bladder isn’t emptying properly, what we would like to do is insert a small plastic tube called a catheter to allow the urine to drain away, which should hopefully relieve the pain you have in your tummy.</p><p>This will involve cleaning and then applying some numbing jelly to your penis and then gently inserting the plastic tube into your bladder via your penis. This may be a little uncomfortable for you but shouldn’t be too painful as the jelly should ease the pain. We would expect that as soon as the catheter is in, your bladder will begin to empty and so the relief should be almost immediate. Someone else will be in the room when the catheter is inserted to assist with the procedure and also to ensure your comfort, is that alright?</p><p>The procedure is usually straightforward but occasionally a catheter can be tricky to insert – if this was the case we would get a specialist to help. The main risk of the procedure is causing a urine infection. There is also a small risk of causing some bleeding or damage when inserting the catheter. The catheter may need to stay in for a number of days before we take it out.</p>",
        "system": [
            "renal",
            "urol",
            "ethlaw"
        ],
        "type": "consentproc",
        "year": 2,
        "CCP": [
            92
        ]
    },
    {
        "id": 25,
        "title": "Explain U&E results to a patient",
        "front": "<p>Mrs Barnes (67y/o) has had 3 abnormal eGFR results in the last 12 weeks; she is asymptomatic. Further investigations have ruled out a serious cause.</p><p>1. 67 ml/min 2. 71 ml/min 3. 66ml/min</p><p>Explain these results to Mrs Barnes.</p>",
        "back": "<p>The blood tests that we have recently carried out have shown that your kidneys appear to be working a little bit under the expected level, but not significantly so and they are still doing their job well enough. Importantly they don’t appear to be getting any worse.</p><p>All of the other tests that we have done have come back as perfectly normal too and this is very reassuring. It is common for kidneys to work a little less well as we get older and this is likely what is going on for you. At the minute there is no cause for concern.</p><p>However, we would suggest monitoring the kidney blood tests to pick up if the kidneys were working less well, which can happen for some individuals. In the meantime if you feel unwell or very tired, notice any swelling of your ankles, blood in your urine or other changes with your water works then you should make another appointment and we’ll do some further investigating. You should try to avoid dehydration and check with the pharmacist or GP before taking any new medications.</p>",
        "system": [
            "renal"
        ],
        "type": "explainplan",
        "year": 2,
        "CCP": [
            5,
            92,
            51
        ]
    },
    {
        "id": 26,
        "title": "Give the likely treatment options for a Melanoma",
        "front": "<p>72y/o gentleman with 1.5cm nasal skin lesion. He is aware of the diagnosis.</p><p>Explain the likely treatment options.</p><img class='image' style='max-width: 300px; width: 80%; margin-top:20px; border-radius:10px;'src='./assets/images/derm_melanoma.jpg'></img>",
        "back": "<p><i>It is important to note that histology, examination and history should all be considered here. However, based on examination alone this is likely to be a malignant melanoma.</i></p><p>As you know, we suspect that this growth maybe a cancerous mole however it is impossible to say exactly which type or how bad this is without further tests. In the first instance, we would like to refer you to see the skin specialist who will be able to do a few more tests and work out the best way forward.</p><p>However, the most likely scenario is that the skin specialist will decide to remove the mole, usually while you are still awake. They would do this by injecting some local anaesthetic which will numb the skin and then cutting the mole out. Now, because of the size of the mole it might be that some skin needs to be taken from elsewhere on your body and used to patch up the area of skin removed; but this will all be discussed with you at the time of the operation so don’t worry about it too much as there will be plenty of opportunities to ask questions and discuss things before any action is taken.</p>",
        "system": [
            "derm"
        ],
        "type": "explainplan",
        "year": 2,
        "CCP": [
            76
        ]
    },
    {
        "id": 27,
        "title": "Explain the diagnosis of renal stones",
        "front": "<p>Explain a diagnosis of renal stones to a patient and how they may be managed</p>",
        "back": "<p>A kidney stone occurs when a small blockage forms in the tubes which drain urine from your kidneys into your bladder. Your kidneys filter waste chemicals from your body and when there is an increase in these chemicals for one reason or another, they clump together to form a stone. This can be very painful as the tubes are only used to having liquid passing through them; this pain is often felt in the tummy or groin and will differ in severity depending on size of the stone.</p><p>In most cases the stone can be passed in the urine naturally after a day or two and the pain should subside; during this time you may need some painkillers to ease the symptoms of the stone.</p><p>Very rarely when the stone is too large to be moved through the tube naturally we may need to use other techniques or an operation to remove the stone. One technique is called lithotripsy. This involves a special machine which directs waves of energy from outside the body towards to stone. The stone breaks up into smaller pieces which can be passed.</p>",
        "system": [
            "renal",
            "urol"
        ],
        "type": "explaindisease",
        "year": 2,
        "CCP": [
            2,
            37,
            92
        ]
    },
    {
        "id": 28,
        "title": "Explain BPH to a patient",
        "front": "<p>Explain Benign Prostatic Hypertrophy (BPH) to a patient</p>",
        "back": "<p>BPH occurs when the prostate gland, which surrounds the tube that takes urine out of the body in men, becomes enlarged. This is quite common in older men and can go unnoticed in many cases.</p><p>BPH can lead to some recurring symptoms relating to your water works including dribbling, poor flow or difficulty getting started when you try to pass urine. Some men are happy to put up with some of these symptoms; however some men may find these symptoms frustrating. There are some drug treatments which can help to control these symptoms or if that doesn’t work there are some surgical options too.</p><p><i>NB: You may consider using illustrations, models or images to help portray this to the patient</i></p>",
        "system": [
            "renal",
            "urol"
        ],
        "type": "explaindisease",
        "year": 2,
        "CCP": [
            92
        ]
    },
    {
        "id": 29,
        "title": "Explain the differences in types of Diabetes",
        "front": "<p>Explain to a Type 2 Diabetic patient the difference between NIDDM &amp; IDDM, including why insulin treatment is not always essential in NIDDM</p>",
        "back": "<p>There are two types of diabetes: type one and type two. Diabetes occurs when the level of sugar (glucose) in the blood becomes higher than normal, usually because of a problem with the hormone insulin which controls the sugar levels in the body.</p><p>Type one diabetes is caused by the body’s inability to produce insulin. However, in type 2 diabetes, which is what you suffer from, the body is still producing insulin however perhaps not quite enough, or the cells in the body aren’t responding to this insulin correctly.</p><p>Although both types of diabetes have the same effect on the body and often have the same symptoms, they are treated with different medications because of the different causes.</p><p>In your case your body has plenty of insulin and so adding more with small injections wouldn’t help and in fact might make you feel more unwell. It maybe that as you get older things change and insulin would be helpful for you, however in the meantime we can hopefully control your diabetes with diet, exercise and perhaps some oral medications.</p>",
        "system": [
            "endo",
            "gp"
        ],
        "type": "explaindisease",
        "year": 2,
        "CCP": [
            84,
            86
        ]
    },
    {
        "id": 30,
        "title": "Give the diagnosis from a TFT",
        "front": "<p>Jane is 49y/o and presents with fatigue, weight gain &amp; memory loss </p><p>T4 ↓, TSH ↑</p><p>From the blood results, explain the diagnosis/initial management</p>",
        "back": "<p><i>The blood test results suggest a diagnosis of hypothyroidism. Most likely treatment would be with levothyroxine to boost levels of T3/4.</i></p><p>The blood tests that we carried out the last time I saw you tell us about how well your thyroid is working. The thyroid is a small gland in your neck which produces hormones to help control lots of processes in the body. The thyroid gland is controlled by another gland in the brain called the pituitary gland. The pituitary gland tells the thyroid gland when to produce more or less of the hormone thyroxine. If your thyroid gland has stopped working properly the pituitary gland tries to wake it up again by sending out lots of another hormone (thyroid stimulating hormone). It keeps doing this in an attempt to kick start the thyroid gland which is why the TSH level rises.</p><p><i>NB: Sometimes a visual diagram can help illustrate this to patients.</i></p><p>Your levels of this hormone (TSH) are high, which tells us that your thyroid gland is working a bit slower than would be expected. We can help this by giving you a medication called levothyroxine which replaces the hormone normally produced by the thyroid gland. Once you are on this tablet we need to monitor your thyroid tests to establish if the tablet is working properly.</p>",
        "system": [
            "endo"
        ],
        "type": "interpret",
        "year": 2,
        "CCP": [
            5
        ]
    },
    {
        "id": 31,
        "title": "Explain the risk of inheriting Huntington's Disease",
        "front": "<p>Mr Smith has Huntington’s Disease, but his wife is unaffected</p><p>Explain the risk of his children inheriting the disease</p>",
        "back": "<p>Huntington's disease is inherited in an <b>autosomal dominant pattern</b>.</p><p>Autosomal dominant is one of several ways that a trait or disorder can be passed down (inherited) through families. Autosomal dominant inheritance means that everyone who inherits the faulty gene eventually gets the disease. You have one normal copy and one faulty copy of the Huntington’s gene which means there is a 50% chance of you passing it on to your children. However, inheritance is down to chance and so it is impossible to determine exactly how many, if any of your children will inherit the condition.</p><p>When we speak about genes, you have two for every single little bit about you, for example your eye colour, and it is the same with Huntington’s. One gene comes out on top and that is what decides whether or not you are effected. It depends what gene dad passes on as to whether or not your children get the Huntington’s gene. There’s a 50% chance that dad will pass on the Huntington’s gene and then 50% that he will pass the non-Huntington’s gene. That chance happens for each child and so this does not mean that half of the children in a family will have the disease. This just means that each pregnancy has a 50% chance that a child will be affected with Huntington’s.</p>",
        "system": [
            "neuro",
            "psych"
        ],
        "type": "risk",
        "year": 3,
        "CCP": [
            34
        ]
    },
    {
        "id": 32,
        "title": "Give lifestyle advice to a pregnant lady",
        "front": "<p>Give some lifestyle advice to the patient, a 27 year old pregnant lady</p>",
        "back": "<p><b>Diet</b> –You should be taking folic acid supplements to reduce the risk of conditions such as spina bifida in your baby. You can buy this over the counter or get a prescription from your GP. You can also boost your dietary intake of folate by eating lots of green vegetables. Some ladies also find that they become low in iron during pregnancy and have problems with anaemia; eating lots of red meat, beans and eggs can help to build iron stores. You should avoid soft cheeses such as brie and blue cheese in pregnancy and also any uncooked meats.</p><p><b>Alcohol/Smoking</b> – Best to avoid both alcohol and smoking as they can affect the baby and it’s development. Help with cutting down on these is available through your midwife, GP or chemist.</p><p><b>Exercise</b> – Exercise is still important during pregnancy, yoga-like activities can be very good to keep you fit and healthy. Consulting your midwife about this is a good idea.</p><p><b>Medication</b> – Some medications can affect your pregnancy; you should consult your GP if you normally take medicines to ensure that they are safe, this includes for long term conditions such as epilepsy, high blood pressure, diabetes or depression.</p>",
        "system": [
            "obgyn"
        ],
        "type": "healthpromo",
        "year": 3,
        "CCP": [
            29,
            57,
            61
        ]
    },
    {
        "id": 33,
        "title": "Give advice to prevent falls",
        "front": "<p>Mr Jones, 79 y/o, has recently had a fall at home. Offer Mr Jones some advice to help prevent future falls.</p>",
        "back": "<p>In addition to the below, there may be specific information to give the patient relating to the cause of their own fall; especially if it pertains to a medical condition rather than being mechanical</p><ul><li>Use walking aids such as walking sticks or a zimmer frame as directed</li><li>Remove loose rugs and mats which could be a trip hazard</li><li>Try to keep floors as clear as possible</li><li>Avoid rising from chairs and beds too quickly, this could make you dizzy or put you off balance</li><li>Always wear shoes or slippers with a gripped sole</li><li>If you’ve been seen by a physiotherapist try to carry out the exercises they showed you to improve your leg strength</li><li>Ask your GP to review any medication you are taking as you are maybe on to many medications and need some to be stopped.</li><li>If you have poorly controlled pain, see your GP for advice</li></ul><p><i>NB: Lower limb strengthening and balance training is extremely important and physio referral should be considered for all those who have had a fall</i></p>",
        "system": [
            "age"
        ],
        "type": "healthpromo",
        "year": 3,
        "CCP": [
            28,
            4
        ]
    },
    {
        "id": 34,
        "title": "Give travel advice to a 20y/o travelling to East Africa",
        "front": "<p>Give health advice to Malcom, a 20 year old student, ahead of his six week summer holiday to East Africa</p>",
        "back": "<p><i>Travel advice will differ depending upon the location, but should include:</i></p><ul><li>If you are travelling to a malarial region then malaria prevention (tablets) should be taken.</li><li>You should also ensure you have relevant vaccinations in advance.</li><li>Book a travel appointment in your GP practice/ a travel clinic for advice, malaria prevention prescription and vaccinations well before travel.</li><li>Be aware that even common medicines may be difficult to find abroad (take own supply of regular medicines, paracetamol, ibuprofen, anti-diarrhoeal etc.)</li><li>Practice safe sex to prevent sexually transmitted infections, remembering that barrier methods should always be used even in addition to oral contraceptives.</li><li>Always drink bottled water and avoid drinking tap or well water</li><li>Avoid using tap water for washing of foods or brushing teeth</li><li>There is a higher risk of blood borne infection, keep all cuts cleaned and covered while away.</li><li>Diarrhoea is common and often nothing to worry about but ensure you keep well hydrated if you do get diarrhoea.</li><li>There is good travel information/ advice on fitfortravel.nhs.uk</li></ul>",
        "system": [
            "microbio",
            "pubhealth"
        ],
        "type": "healthpromo",
        "year": 3,
        "CCP": [
            88,
            42
        ]
    },
    {
        "id": 35,
        "title": "Discuss addressing a Transgender patient",
        "front": "<p>Your patient is dressed as a female but the patient’s name and gender on their medical record is Stephen (male)</p><p>Discuss in pair how you will address this patient</p>",
        "back": "<p>Stephen is most likely a transgender woman. A transgender woman is someone who was assigned male at birth but identifies and lives as a woman. They may be in a transitioning process. Transition includes some or all of the following personal, medical, and legal steps: telling one's family, friends, and co-workers; using a different name and new pronouns; dressing differently; changing one's name and/or sex on legal documents; hormone therapy; and possibly (though not always) one or more types of surgery.</p><p>Helpful tips:</p><ul><li>Always check the patient’s identity and cross check any notes to ensure you have the right person</li><li>Always use a transgender person's chosen name.</li><li>Ask transgender people which pronoun they would like you to use e.g he or she</li><li>If it is not possible to ask a transgender person which pronoun is preferred, use the pronoun that is consistent with the person's appearance and gender expression.</li><li>If in any doubt, ask the patient how they would like to be addressed and what pronoun they would like you to use.</li></ul>",
        "system": [
            "psych"
        ],
        "type": "typesofconsul",
        "year": 3,
        "CCP": [
            10
        ]
    },
    {
        "id": 36,
        "title": "Discuss the components of a 'Personal History'",
        "front": "<p>In your pairs discuss the components of a personal history as part of a full psychiatric history</p>",
        "back": "<p><b>Childhood</b> – Home life, siblings, parents, early years</p><p><b>Educational</b> – Schooling, college, any issues at school</p><p><b>Occupational</b> – Jobs, frequency, role, dismissals</p><p><b>Sexual/Reproductive</b> – Children, age sexually active, no. of sexual partners</p><p><b>Medical</b> – PMH, medications, hospital stays and investigations</p><p><b>Social</b> – Current situation, friendships, family, pets, living situation at present</p><p><b>Substances</b> – Current or past drug use, alcohol, smoking</p><p><b>Forensics</b> – Charges, contact with police, convictions</p>",
        "system": [
            "psych"
        ],
        "type": "typesofconsul",
        "year": 3,
        "CCP": [
            6,
            7,
            10,
            18,
            22,
            15
        ]
    },
    {
        "id": 37,
        "title": "Discuss the features of the MSE",
        "front": "<p>In your pair discuss the features of a Mental State Examination</p>",
        "back": "<p>Mental State Examination (MSE) is an important part of gathering information from a psychiatric consultation. It comprises the following:</p><ul><li>General Appearance – Age, gender, posture, dress, stigmata of disease</li><li>Behaviour – Is it appropriate? Consider rapport and attitude</li><li>Speech – Rate, articulation, vocabulary, volume, accent, latency</li><li>Mood – Euthymic? Dysphoric? Apathetic? Euphoric?</li><li>Affect – Reactive, flat or blunted?</li><li>Thought – Process and content. Delusions? Obsessions?</li><li>Perception – How does the patient view their self and their situation?</li><li>Cognition – Memory, orientation, attention, calculation, language etc.</li><li>Insight – The 4 As: Attribution, Awareness, Appraisal &amp; Acceptance</li></ul>",
        "system": [
            "psych"
        ],
        "type": "typesofconsul",
        "year": 3,
        "CCP": [
            6,
            7,
            10,
            18,
            22,
            15,
            68
        ]
    },
    {
        "id": 38,
        "title": "Discuss how to manage an angry patient",
        "front": "<p>In your pairs discuss how to deal with the following:</p><p><i>‘Mr Smith has an appointment to see you at 2pm, it is now 2.30pm and he has just been called from the waiting room. He is angry that he may now be late for his next meeting’</i></p>",
        "back": "The <b>Three R’s</b> framework is a good way to recall dispute resolution:<ul><li><b class=\"danger-text\">Regret</b> – Express your sincere apologies for the situation having arisen <br><i>“I recognise that you have had to wait longer than expected and I am very sorry for that – I am running a little later than normal today”.</p></i></li><li><b class=\"danger-text\">Reason</b> – Explain why this has arisen, but without appearing defensive or abrupt <br><i>“The clinic has had several unwell patients that I have had to spend a little more time with than I had anticipated, unfortunately this could not have been foreseen”</i></li><li><b class=\"danger-text\">Remedy</b> – Offer some solution to the problem, offer to investigate or offer a feedback opportunity<br><i>“If you still have time I can see you now and hopefully help you feel better. If not I can put you in touch with our appointments team who can arrange a more suitable time for you. If you want to make a formal complaint to the Practice about your wait today I can give you information about our complaints policy. Once again, my sincere apologies.”</i></li></ul>",
        "system": [
            ""
        ],
        "type": "typesofconsul",
        "year": 3,
        "CCP": [
            0
        ]
    },
    {
        "id": 39,
        "title": "Discuss the process of Breaking Bad News",
        "front": "<p>In your pair discuss the process for breaking bad news to a patient</p>",
        "back": "<p>Breaking bad news is a very individualised process and depends on the patient and their situation. Although there is no single way to break bad news the following guide (Buckman Framework) can be used to provide a framework from which to work.</p><ul><li>Getting Started – Consider the physical context – quiet environment, no interruptions etc</li><li>How much does the patient already know? Find out the background to the situation.</li><li>How much does the patient want to know?</li><li>Providing a warning shot e.g <i>“I’m afraid the results are not what we had hoped for”</i></li><li>Sharing information – Give appropriate amounts of information. Chunking and checking is helpful to check the patient’s understanding.</li><li>Respond to patient’s feelings sensitively – acknowledge the emotion you see displayed e.g <i>“I can see you are upset, do you want to tell me what is going through your mind?”</i></li><li>Planning and follow up – Shared decision making, coming up with a practical plan for patients around what will happen next.</li></ul>",
        "system": [
            ""
        ],
        "type": "typesofconsul",
        "year": 3,
        "CCP": [
            26
        ]
    },
    {
        "id": 40,
        "title": "Explain the benefits and side effects of Warfarin",
        "front": "<p>Mrs Wilkins (63 years old) has recently suffered a DVT and been commenced on Warfarin therapy</p><p>Explain the benefits and possible side effects of Warfarin</p>",
        "back": "<p>Warfarin is a blood thinning drug which is prescribed to help prevent further blood clots in people who have a previous history of developing them or who are at high risk of developing them. Examples of previous blood clots include a clot in your lungs or leg (pulmonary embolus or deep vein thrombosis). There are many conditions that increase the risk of getting clots.</p><p>Some possible side effects of warfarin include: easy bruising, nosebleeds that last a long time, blood in vomit, spit, urine or stool.</p><p>If you cut yourself badly the bleeding could be more serious when you are on warfarin, apply firm pressure and make sure you seek help quickly if it doesn’t stop. Sometimes people on warfarin suffer serious or life-threatening bleeding such in the brain or from the gut.</p><p>This is why it is important that you have your blood monitored to check how effective it is at thinning your blood and to make sure it is not thinning it too much. This blood test is called an INR. When you first start warfarin you will have this test done very regularly, reducing to 4-6 weekly once you are established on the drug.</p>",
        "system": [
            "haem",
            "cardio"
        ],
        "type": "explainplan",
        "year": 3,
        "CCP": [
            5,
            13,
            112
        ]
    },
    {
        "id": 41,
        "title": "Interpret a haematological blood test",
        "front": "<p>Interpret the following blood results and explain the likely diagnosis and next steps to an asymptomatic 54y/o male</p><ul><li>Hb - 9 g/dL (12-18 g/dL)</li><li>MCV - 70 fl (80-96 fl)</li><li>MCH - 25 p/g (27-32 p/g)</li></ul>",
        "back": "<p>The most likely diagnosis is a microcytic anaemia, probably due to iron deficiency.</p><p>Anaemia is the name given to a group of conditions whereby the red blood cells’ ability to carry oxygen is poorer than would normally be expected. There are several different causes of anaemia but the likelihood is that a lack of iron in your body has lead to these results; we call this a ‘microcytic anaemia’ which basically means that when looked at down a microscope, your red blood cells are quite small in size.</p><p>One of the ways we can lose blood and not be aware of it is from our bowels. Therefore I would like to look in to this anaemia further for you if that’s okay? It would be useful to carry out another couple of blood tests to look in more detail at your iron levels. I would also like to refer you for an investigation which involves a camera or scope being passed in to your bowel through your bottom to look at the bowel in more detail. This will help identify any potential source of the blood loss. </p><p><i>NB: In female patients of reproductive age heavy periods maybe the cause and is worth exploring</i></p>",
        "system": [
            "haem"
        ],
        "type": "interpret",
        "year": 3,
        "CCP": [
            5,
            86,
            62,
            71
        ]
    },
    {
        "id": 42,
        "title": "Interpret a Trans-Vaginal US scan report",
        "front": "<p>Interpret the following radiology report and explain the result to the patient who has had irregular periods</p><p><i>‘Trans-vaginal ultrasound of this 35y/o lady with oligomenorrhoea showed bilateral enlarged ovaries with several follicles measuring 5-8mm in a pearl-string appearance’</i></p>",
        "back": "<p><i>Radiology would suggest that the most likely diagnosis is Polycystic Ovarian Syndrome (PCOS).</i></p><p>You’ll remember that we sent you for a scan of your pelvis. That scan was to allow us to have a look at your womb and your ovaries to see if we could explain the symptoms you have been having – mainly the infrequent irregular periods.</p><p>From the scan we can see that you have quite a number of small sacks, called cysts, on your ovaries which might be affecting your ability to produce an egg; and that would explain why your periods haven’t been coming as regularly as we would expect. These cysts contain the developing egg but are unable to release the egg so normal ovulation and menstruation doesn’t take place.</p><p>We can’t really say for sure why you have developed PCOS, which is the name given to this condition; although sometimes it does run in families, other times it occurs randomly. We can look at some options to help with your symptoms.</p>",
        "system": [
            "obgyn",
            "radiol"
        ],
        "type": "interpret",
        "year": 3,
        "CCP": [
            3
        ]
    },
    {
        "id": 43,
        "title": "Discuss the important points of consent of surgical procedures",
        "front": "<p>In your pair discuss the important points to consider when gaining consent for an invasive procedure</p>",
        "back": "<p><b>Capacity</b></p><ul><li>Does the patient have capacity to consent to a procedure?</li><li>Consider age (Gillick Competence), disease status, mental state, POA/Guardianship orders</li></ul><p><b>Information Giving</b></p><ul><li>Have I given the patient enough information to make a decision?</li><li>Discuss alternative invasive and non-invasive options, and consequences thereof (if applicable)</li><li>Discuss the risks of procedure and any anaesthetic required to undergo the procedure</li><li>Ensure information is given in lay terms, understandable to the patient</li><li>Risks vs benefits</li><li>Nature of the procedure</li><li>Recovery time</li><li>Options which are available at other centres</li></ul><p>The above should all be discussed openly between doctor-patient to ensure a shared decision is made with the patient’s wishes and best interests in mind</p>",
        "system": [
            "ethlaw"
        ],
        "type": "consentproc",
        "year": 3,
        "CCP": [
            64
        ]
    },
    {
        "id": 44,
        "title": "Explain what an amniocentesis will entail",
        "front": "<p>A 42y/o couple are having a baby and are being counselled for amniocentesis having been identified as high risk for Down’s Syndrome by blood test</p><p>Explain what the amniocentesis will entail</p>",
        "back": "<p><i>It is important for the couple to understand the process of amniocentesis and the potential risks associated with it so that they can give informed consent for the procedure (should they decide to go ahead).</i></p><p>Amniocentesis is a test carried out during pregnancy which can assess whether the unborn baby (foetus) could develop, or has developed, an abnormality or serious health condition such as Down’s syndrome. It involves using a long fine needle which is inserted through the skin in your tummy in to the womb where the baby is growing. The needle will sample the fluid around the baby (known as the amniotic fluid) so that the cells can be examined. Amniotic fluid contains cells shed from the foetus that can be examined and tested for a number of conditions.</p><p>The main risk of this procedure is miscarriage, which is estimated to happen to 1 in every 100 ladies who undergo the procedure. Because of this risk it is really important to consider if the result of the amniocentesis will affect your decision to proceed with the pregnancy and the reasons for going ahead with the procedure. Other less common side effects include a bacterial infection.</p>",
        "system": [
            "obgyn"
        ],
        "type": "explainplan",
        "year": 3,
        "CCP": [
            34,
            35,
            66
        ]
    },
    {
        "id": 45,
        "title": "Explain the preparation for a PV exam and Smear test",
        "front": "<p>Explain to a young female patient how you would like her to prepare for an internal vaginal examination</p>",
        "back": "<p><b>Before</b></p><ul><li>Ensure that informed consent is gained – including for chaperone</li><li>Ask the patient if she needs to empty her bladder</li><li>Show her where the clinical waste bin is in case she needs to dispose of any sanitary products</li><li>Explain how patient should prepare and undress</li></ul><p><i>“Please remove everything on your bottom half and lie on the examination couch with your head on the pillow. Use the sheet of paper I’ve left out to cover yourself until you are ready for me to come in. Let me know when you are ready.”</i></p><p><b>Positioning</b></p><ul><li>Describe to the patient how to position herself and how to maintain her modesty</li><li>Explain again what you need to do and why you are doing it</li></ul><p><i>“Please bring your heels up towards your bottom and let your knees fall apart.”</i></p><p><b>Afterwards</b></p><p><i>“Please use the paper towel on the bed to wipe yourself if need be and dispose of it in the bin beside you. I'll leave you to get organised and put your clothes back on.”</i></p>",
        "system": [
            "obgyn"
        ],
        "type": "consentproc",
        "year": 3,
        "CCP": [
            64
        ]
    },
    {
        "id": 46,
        "title": "Explain what an ectopic pregnancy is",
        "front": "<p>A young lady has presented with abdominal pain and is diagnosed with an ectopic pregnancy</p><p>Explain to the patient what this means</p>",
        "back": "<p>Normally a fertilised egg should become nestled within the walls of the womb and begin to grow here. In an ectopic pregnancy the egg hasn’t travelled to the correct location after fertilisation and has instead implanted elsewhere, usually within one of the tubes called fallopian tubes.</p><p>Unfortunately, this means that the fertilised egg will never grow or develop properly, usually because the space for the developing baby to grow is restricted. An ectopic pregnancy can be dangerous for you as if the baby starts to grow in a small space, such as the tubes connecting the ovaries and the womb, then it may lead to the tubes bursting. For this reason we need consider treatment options to prevent the fertilised egg continuing to develop.</p><p><i>NB: Some women will want to know if an ectopic pregnancy will affect their chance of having a successful pregnancy in the future. Your chances of having a further successful pregnancy will depend on the underlying health of your fallopian tubes. In general however 65% of women achieve a successful pregnancy 18 months after having an ectopic pregnancy.</i></p>",
        "system": [
            "obgyn"
        ],
        "type": "explaindisease",
        "year": 3,
        "CCP": [
            61,
            3,
            2
        ]
    },
    {
        "id": 47,
        "title": "Explain the difference between a haemorrhagic and ischaemic stroke",
        "front": "<p>Explain the difference between a haemorrhagic stroke and an ischaemic stroke to a patient</p>",
        "back": "<p>A stroke can be caused by either a clot or bleeding within the head. If there is a clot then the blood supplying the brain is compromised as the clot blocks the tube (known as an artery); this means that there will be no blood, hence no oxygen, to that part of the brain and it will start to lose the ability to work correctly. This type of stroke is more likely if you suffer from other medical conditions such as atrial fibrillation, high blood pressure or diabetes; therefore it is important that you make sure that you get these conditions treated by your doctor.</p><p>Alternatively, a stroke maybe the result of a collection of blood pressing on the brain, which normally occurs because a weakened blood vessel has burst or is leaking. This has the same effect as the clot, as the pressure stops blood flowing properly within the tubes (arteries) and cuts off the oxygen supply to this part of the brain.</p>",
        "system": [
            "neuro"
        ],
        "type": "explaindisease",
        "year": 3,
        "CCP": [
            32,
            17
        ]
    },
    {
        "id": 48,
        "title": "Explain what Epilepsy is and the effect it has on driving",
        "front": "<p>Explain epilepsy to the patient in lay terms and what this means for their lifestyle in terms of driving</p>",
        "back": "<p>The brain is made up of lots of cells called neurones which send electrical messages to one another. In epilepsy these signals are sent in a random order which disrupts the brain’s normal activity and causes unusual symptoms such as seizures or fits.</p><p><i>DVLA Rules for driving are as follows:</i></p><ul><li>You must not drive for 1 year following a seizure which happened when awake</li><li>The above rule is extended to 3 years if the seizure happened when asleep</li><li>It is the patient’s responsibility to inform the DVLA, this is a legal requirement</li><li>Failure to inform the DVLA means that your doctor may be forced to do so</li><li>The rules are slightly stricter for those driving larger vehicles (buses, lorries etc.)</li></ul><p><i>NB: The DVLA website or www.epilepsysociety.org.uk provide more specific information including leaflets which may be helpful for patients.</i></p>",
        "system": [
            "neuro",
            "ethlaw"
        ],
        "type": "explaindisease",
        "year": 3,
        "CCP": [
            17
        ]
    },
    {
        "id": 49,
        "title": "Discuss the parts of a Sexual History",
        "front": "<p>In your pairs discuss the main components of a sexual history</p>",
        "back": "<p>A sexual history should be taken in conjunction with a full normal medical history and should include the following:</p><ul><li>Present sexual activity (Are they sexually active? What type of intercourse?)</li><li>Number of sexual partners at present</li><li>Life time sexual partners</li><li>BBV/HIV risk assessment (IVDU, HIV positive partners)</li><li>Red flags (Sex abroad, men who have sex with men, non-consensual)</li><li>Contraceptive history (What has been used? Barrier and other?)</li><li>Menstrual history (Menarche, any problems, regularity of periods)</li><li>Previous pregnancies and terminations</li><li>Cervical smear history</li></ul>",
        "system": [
            "obgyn"
        ],
        "type": "typesofconsul",
        "year": 3,
        "CCP": [
            29,
            73
        ]
    }
]
    ;