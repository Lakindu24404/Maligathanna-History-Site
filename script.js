/* ============================================================
   MALIGATHANNA ARCHAEOLOGICAL HERITAGE SITE
   script.js — Interactive Features & Multi-Language System
   ============================================================ */

'use strict';

/* ===================================================================
   1. MULTI-LANGUAGE SYSTEM & CONFIGURATION
   ===================================================================
   - Pre-compiled bilingual/trilingual dictionary structure (si, en, ta).
   - Source content is authentic Sinhala from archaeological documents.
   - Operates 100% client-side without backend dependencies.
   - For optional Google Cloud Translation API integration:
     Use an environment-injected endpoint or backend proxy.
     NEVER hardcode private API keys directly in client-side code.
   =================================================================== */
const translations = {
  si: {
    /* Meta / Branding */
    welcome_badge: 'ශ්‍රී ලාංකීය සංස්කෘතික උරුමය',
    welcome_title: 'මාලිගාතැන්න පුරාවිද්‍යා ස්ථානය',
    welcome_desc: 'වයඹ පළාතේ කුරුණෑගල දිස්ත්‍රික්කයේ පිහිටි අනුරාධපුර යුගයට අයත් පුරාණ ආරණ්‍යවාසී ආරාම සංකීර්ණයේ පුරාවිද්‍යාත්මක උරුමය සහ නටබුන් ගවේෂණය කරන්න.',
    choose_language: 'භාෂාව තෝරන්න',

    site_name: 'මාලිගාතැන්න',
    site_sub: 'පුරාවිද්‍යා උරුම ස්ථානය',

    /* Navigation */
    nav_home: 'මුල් පිටුව',
    nav_overview: 'දළ විශ්ලේෂණය',
    nav_history: 'ඉතිහාසය',
    nav_location: 'පිහිටීම',
    nav_architecture: 'ගෘහ නිර්මාණ',
    nav_gallery: 'ඡායාරූප',
    nav_nearby: 'අවට ස්ථාන',
    nav_preservation: 'සංරක්ෂණය',
    nav_change_lang: 'භාෂාව මාරු කරන්න',
    nav_help: 'උපකාර',
    nav_help_short: 'උපකාර',

    /* Help Modal */
    help_badge: 'වෙබ් අඩවි මාර්ගෝපදේශය',
    help_title: 'මාලිගාතැන්න වෙබ් අඩවිය භාවිතා කරන ආකාරය',
    help_subtitle: 'මාලිගාතැන්න පුරාවිද්‍යා ස්ථානයේ තොරතුරු, සිතියම් සහ ඡායාරූප පහසුවෙන් ගවේෂණය කිරීමට මඟපෙන්වීම.',
    help_tip_title: 'ප්‍රයෝජනවත් උපදෙසක්:',
    help_tip_desc: 'ඔබට ඕනෑම වේලාවක ඉහළ මෙනුවෙන් භාෂාව (සිංහල / English / தமிழ்) හෝ තේමාව (Dark/Light) මාරු කර ගත හැක.',
    help_btn_close: 'තේරුම් ගත්තා · අඩවියට පිවිසෙන්න',
    help_card1_title: '1. භාෂාව තෝරාගැනීම (සිංහල, English, தமிழ்)',
    help_card1_desc: 'වෙබ් අඩවියේ ඉහළ දකුණු කෙළවරේ ඇති <strong>භාෂා බොත්තම</strong> මඟින් හෝ පහළ dock මෙනුවෙන් ඔබට කැමති භාෂාව තෝරා ගත හැක. සියලුම ඓතිහාසික විස්තර භාෂා 3න්ම ලබා ගත හැක.',
    help_card2_title: '2. පිහිටීම සහ ගමන් මාර්ගය (GPS & Maps)',
    help_card2_desc: '<strong>\'පිහිටීම\'</strong> කොටසේදී කුරුණෑගල සිට මාලිගාතැන්නට ළඟා වන සම්පූර්ණ කිලෝමීටර් මට්ටමේ ගමන් විස්තරය සහ Google Maps සජීවී සිතියම ලබා ගත හැක.',
    help_card3_title: '3. පුරාවිද්‍යා නටබුන් සහ ගෘහ නිර්මාණ ශිල්පය',
    help_card3_desc: 'අනුරාධපුර යුගයේ <strong>පඨානඝර</strong> (ද්විමාලිගා භාවනා ගොඩනැගිලි) සහ <strong>චංකමනාඝර</strong> (සක්මන් මළු) වල සවිස්තර සැලසුම් සහ වාස්තු විද්‍යාත්මක ලක්ෂණ කියවන්න.',
    help_card4_title: '4. අධි විභේදන ඡායාරූප සහ විශාලනය',
    help_card4_desc: 'ගුවන් දසුන්, ගල් කැටයම්, සහ පරිසරය අනුව ඡායාරූප පෙරහන් (Filter) කරන්න. ඕනෑම ඡායාරූපයක් මත ක්ලික් කර පූර්ණ තිර විශාලනයෙන් සවිස්තරාත්මකව නරඹන්න.',
    help_card5_title: '5. අවට නැරඹිය හැකි ඓතිහාසික ස්ථාන',
    help_card5_desc: 'මාලිගාතැන්න අවට පිහිටි <strong>රැස්වෙහෙර, යාපහුව, අරංකැලේ, හත්ථිකුච්චි, රිදී විහාරය සහ ඇතුගල</strong> වැනි ඓතිහාසික ස්ථානවල දුර ප්‍රමාණයන් හා තොරතුරු ගවේෂණය කරන්න.',
    help_card6_title: '6. රාත්‍රී/දිවා තේමාව සහ ජංගම දුරකථන පහසුව',
    help_card6_desc: 'ඇස්වලට පහසු <strong>අඳුරු තේමාව (Dark Mode)</strong> මාරු කර ගත හැක. ජංගම දුරකථන භාවිතයේදී පහළින් දිස්වන floating dock මඟින් ක්ෂණිකව ඕනෑම කොටසකට පිවිසිය හැක.',
    help_card7_title: '7. හඬින් කියවීමේ පහසුකම (Text-to-Speech)',
    help_card7_desc: 'සෑම ප්‍රධාන කොටසකම ඇති <strong>\'🔊 කියවන්න\'</strong> බොත්තම එබීමෙන් අදාළ ඓතිහාසික තොරතුරු ඔබ තෝරාගත් භාෂාවෙන් (සිංහල, English, தமிழ்) ශ්‍රවණය කළ හැක. කියවීම නැවැත්වීමට ඕනෑම වේලාවක <strong>\'⏹ නවත්වන්න\'</strong> ඔබන්න.',

    /* Text-to-Speech (Read Aloud) */
    tts_read: 'කියවන්න',
    tts_reading: 'කියවමින්...',
    tts_stop: 'නවත්වන්න',
    tts_aria_read: 'මෙම කොටස හඬින් අසන්න',
    tts_aria_stop: 'හඬ කියවීම නවත්වන්න',
    tts_not_supported: 'ඔබගේ බ්‍රවුසරයේ පෙළ හඬ බවට පත් කිරීමේ (Text-to-Speech) පහසුකම සහාය නොදක්වයි.',

    /* Nearby Section */
    nearby_tag: 'සංචාරක සහ ඓතිහාසික මඟපෙන්වීම',
    nearby_title: 'මාලිගාතැන්න අවට නැරඹිය හැකි ස්ථාන',
    nearby_desc: 'කුරුණෑගල දිස්ත්‍රික්කයේ සහ වයඹ පළාතේ මාලිගාතැන්න පුරාවිද්‍යා භූමියට ආසන්නව පිහිටි සුවිශේෂී ඓතිහාසික ආරාම, පර්වත බලකොටු හා සංස්කෘතික උරුම ස්ථාන.',
    nearby_view_map: 'සිතියම සහ ගමන් මඟ',
    nb_res_title: 'රැස්වෙහෙර (ශේෂරුව) රජමහා විහාරය',
    nb_res_dist: 'මාලිගාතැන්නේ සිට ~18 km',
    nb_res_era: 'දේවානම්පියතිස්ස / වළගම්බා යුගය',
    nb_res_desc: 'මීටර් 12කට ආසන්න උසකින් යුත් දැවැන්ත ශෛලමය හිටි බුදු පිළිමය, පුරාණ ලෙන් විහාර 99ක්, කටාරම් සහිත ගල් ලෙන් හා ඓතිහාසික බෝධි වෘක්ෂය පිහිටි විස්මිත ආරණ්‍යමය පුදබිමකි.',
    nb_res_tag1: 'ශෛලමය හිටි පිළිමය',
    nb_res_tag2: 'පුරාණ ලෙන් 99',

    nb_yap_title: 'යාපහුව ඓතිහාසික රාජධානිය සහ බලකොටුව',
    nb_yap_dist: 'මාලිගාතැන්නේ සිට ~22 km',
    nb_yap_era: '13 වන සියවස',
    nb_yap_desc: '13 වන සියවසේ ශ්‍රී ලංකාවේ අගනුවර සහ දළදා මාලිගය පිහිටි, සිංහල වාස්තු විද්‍යාවේ විශිෂ්ටතම නිර්මාණයක් වන අලංකාර ශෛලමය පියගැට පෙළ සහ සිංහ කැටයම් සහිත දැවැන්ත පර්වත බලකොටුවකි.',
    nb_yap_tag1: 'විශිෂ්ට ගල් පියගැට',
    nb_yap_tag2: 'පුරාවිද්‍යා කෞතුකාගාරය',

    nb_ara_title: 'අරංකැලේ පුරාණ ආරණ්‍ය සේනාසනය',
    nb_ara_dist: 'මාලිගාතැන්නේ සිට ~32 km',
    nb_ara_era: 'ක්‍රි.ව. 6 – 10 වන සියවස්',
    nb_ara_desc: 'ඝන වනාන්තරයක් මැද පිහිටි පුරාණ ආරණ්‍යවාසී ආරාමයක් වන අතර, දිගු ශෛලමය සක්මන් මාවත්, පුරාණ ආයුර්වේද රෝහල් නටබුන්, ශිලා ඖෂධ ඔරු හා උණුදිය ස්නානාගාර (ජන්තාඝර) මෙහි දක්නට ඇත.',
    nb_ara_tag1: 'පුරාණ ආයුර්වේද රෝහල',
    nb_ara_tag2: 'ශිලා සක්මන් මාවත්',

    nb_hat_title: 'හත්ථිකුච්චි පුරාවිද්‍යා පරිශ්‍රය',
    nb_hat_dist: 'මාලිගාතැන්නේ සිට ~34 km',
    nb_hat_era: 'අනුරාධපුර යුගය',
    nb_hat_desc: 'සිරිසඟබෝ රජු තම හිස දන් දුන් ස්ථානය ලෙස ජනප්‍රවාදගත, දැවැන්ත කළුගල් කුළුණු, අලංකාර නෙළුම් පොකුණු, වටදාගෙය සහ පර්වත ලිපි විසිරී ඇති අක්කර 300කට අධික පුරාණ ආරාම පරිශ්‍රයකි.',
    nb_hat_tag1: 'නෙළුම් පොකුණු සහ වටදාගෙය',
    nb_hat_tag2: 'සිරිසඟබෝ රජුගේ උරුමය',

    nb_rid_title: 'රිදී විහාරය — රිදීගම',
    nb_rid_dist: 'මාලිගාතැන්නේ සිට ~48 km',
    nb_rid_era: 'ක්‍රි.පූ. 2 වන සියවස',
    nb_rid_desc: 'රුවන්වැලි මහා සෑය තැනීමට රිදී නිධිය හමු වූ ඓතිහාසික පුදබිමයි. විශාල ගල් පර්වතය යට පිහිටි ලෙන් විහාර, මහනුවර යුගයේ අනර්ඝ බිතුසිතුවම්, රන් ආලේපිත බුදු පිළිමය සහ ඇත්දළ කැටයම් දොරටුවෙන් සමන්විතය.',
    nb_rid_tag1: 'මහනුවර බිතුසිතුවම්',
    nb_rid_tag2: 'ඇත්දළ කැටයම් උළුවස්ස',

    nb_ath_title: 'ඇතුගල සහ කුරුණෑගල නගරය',
    nb_ath_dist: 'මාලිගාතැන්නේ සිට ~28 km',
    nb_ath_era: 'සංස්කෘතික සංකේතය',
    nb_ath_desc: 'ඇතෙකුගේ හැඩයෙන් යුත් මීටර් 316ක දැවැන්ත කළුගල් පර්වතය මුදුනේ වැඩහිඳින අඩි 88ක දැවැන්ත සුදු සමාධි බුද්ධ ප්‍රතිමාව සහ මුළු කුරුණෑගල දිස්ත්‍රික්කයම එකවර දැකගත හැකි මනරම් පරිදර්ශක දර්ශනය.',
    nb_ath_tag1: 'අඩි 88 සමාධි පිළිමය',
    nb_ath_tag2: 'පරිදර්ශක නගර දසුන',

    /* Hero */
    hero_badge: 'ශ්‍රී ලාංකීය සංස්කෘතික උරුමය',
    hero_title_main: 'මාලිගාතැන්න පුරාවිද්‍යා ස්ථානය',
    hero_title_en: 'මාලිගාතැන්න',
    hero_subtitle: 'අනුරාධපුර යුගයට අයත් පුරාතන ආරණ්‍ය සේනාසන සංකීර්ණය',
    hero_desc: 'වයඹ පළාතේ කුරුණෑගල දිස්ත්‍රික්කයේ පොල්පිතිගම ප්‍රාදේශීය ලේකම් කොට්ඨාශයේ රාවා ඇල ග්‍රාම නිලධාරී වසමේ පිහිටි ඓතිහාසික හා වාස්තු විද්‍යාත්මක වැදගත්කමකින් යුත් පුරාවිද්‍යා ස්ථානයකි.',
    hero_btn_explore: 'ස්ථානය ගවේෂණය කරන්න',
    hero_btn_gallery: 'ඡායාරූප නරඹන්න',
    hero_img_label: 'පඨානඝර ගොඩනැගිල්ල',
    hero_img_sublabel: 'ද්විමාලිගා ආරණ්‍ය ආරාම ව්‍යුහය',
    scroll_down: 'පහළට ගවේෂණය කරන්න',

    /* Glance */
    glance_tag: 'කෙටි සාරාංශය',
    glance_title: 'මාලිගාතැන්න එක බැල්මකින්',
    glance_location_title: 'පිහිටීම',
    glance_location_desc: 'පොල්පිතිගම ප්‍රාදේශීය ලේකම් කොට්ඨාශය, කුරුණෑගල දිස්ත්‍රික්කය, වයඹ පළාත',
    glance_period_title: 'යුගය',
    glance_period_desc: 'අනුරාධපුර යුගය — පුරාවිද්‍යා සාධක සහ වාස්තු විද්‍යාත්මක ලක්ෂණ අනුව',
    glance_tradition_title: 'ස්ථානීය ජනප්‍රවාදය',
    glance_tradition_desc: 'වළගම්බා රජු විසින් කරවා භික්ෂූන්ට පූජා කළ බව සහ රජුගේ මාලිගාව තිබූ බවට ගැමියන් තුළ පවතින විශ්වාසය',
    glance_type_title: 'ස්ථාන වර්ගය',
    glance_type_desc: 'ආරණ්‍යවාසී භික්ෂූන් සඳහා සකස් වූ බෞද්ධ ආරාම සංකීර්ණයකි',
    glance_area_title: 'පුරාවිද්‍යා භූමි ප්‍රමාණය',
    glance_area_desc: 'ආසන්න වශයෙන් අක්කර 27ක් පුරා විසිරී පවතින හඳුනාගත් නටබුන්',

    /* Location */
    location_tag: 'ළඟාවන ආකාරය',
    location_title: 'මාලිගාතැන්න පිහිටීම සහ ගමන් මාර්ගය',
    location_intro: 'වයඹ පළාතේ කුරුණෑගල දිස්ත්‍රික්කයේ පොල්පිතිගම ප්‍රාදේශීය ලේකම් කොට්ඨාශයේ අංක 369 රාවා ඇල ග්‍රාම නිලධාරී වසමේ මෙම පුරාවිද්‍යා ස්ථානය පිහිටා ඇත.',
    loc_province: 'පළාත',
    loc_province_val: 'වයඹ පළාත',
    loc_district: 'දිස්ත්‍රික්කය',
    loc_district_val: 'කුරුණෑගල දිස්ත්‍රික්කය',
    loc_ds: 'ප්‍රාදේශීය ලේකම් කොට්ඨාශය',
    loc_ds_val: 'පොල්පිතිගම',
    loc_gn: 'ග්‍රාම නිලධාරී වසම',
    loc_gn_val: 'අංක 369 රාවා ඇල',
    view_map: 'සිතියම බලන්න',
    route_title: 'කුරුණෑගල සිට ගමන් මාර්ගය',
    route_start: 'කුරුණෑගල',
    route_road: 'කුරුණෑගල – මඩගල්ල මාර්ගය ඔස්සේ',
    route_25km: 'කිලෝමීටර් 25',
    route_egoda: 'එගොඩගම මංසන්ධිය',
    route_turn_south: 'දකුණට හැරී තලාකොලවැව මාර්ගය ඔස්සේ',
    route_2km: 'කිලෝමීටර් 2',
    route_batuyaaya: 'බටුයාය හන්දිය',
    route_side_road: 'දකුණට ඇති අතුරු මාර්ගයේ ඉදිරියට',
    route_450m: 'මීටර් 450',
    route_dest: 'මාලිගාතැන්න',
    route_arrive: 'පුරාවිද්‍යා ස්ථානය',

    /* History */
    history_tag: 'ඓතිහාසික තොරතුරු',
    history_title: 'මාලිගාතැන්නේ ඓතිහාසික පසුබිම',
    history_intro: 'පුරාවිද්‍යා සාධක මගින් තහවුරු වන කරුණු සහ පාරම්පරික ජනප්‍රවාදයන්හි දැක්වෙන තොරතුරු.',
    tab_evidence: 'පුරාවිද්‍යාත්මක සාධක',
    tab_tradition: 'දේශීය ජනප්‍රවාදය',
    tab_monastery: 'ආරාමික ස්වරූපය',
    evidence_label: 'පුරාවිද්‍යා සාධක සහ වාස්තු විද්‍යාත්මක ලක්ෂණ',
    evidence_title: 'අනුරාධපුර යුගයේ ආරණ්‍ය සේනාසනයක්',
    evidence_p1: 'පුරාවිද්‍යා සාධක සහ වාස්තු විද්‍යාත්මක ලක්ෂණ අනුව මෙම ස්ථානය <strong>අනුරාධපුර යුගයට</strong> අයත් යැයි සැලකිය හැකිය. ද්විමාලිගා පඨානඝර ගොඩනැගිලි හා චංකමනාඝර ගෘහ නිර්මාණ ලක්ෂණ මගින් මෙය පැහැදිලි කෙරේ.',
    evidence_p2: 'කෙසේ වෙතත්, <strong>මාලිගාතැන්න පුරාවිද්‍යා ස්ථානය සම්බන්ධ ලිඛිත සාධක මෙතෙක් හමු වී නොමැත.</strong> එම නිසා ස්ථානයේ ඓතිහාසික පසුබිම ප්‍රධාන වශයෙන් භෞතික නටබුන් සහ වාස්තු විද්‍යා ලක්ෂණ ඔස්සේ අර්ථකථනය කෙරේ.',
    evidence_note: 'ලිඛිත සාක්ෂි නොමැතිකම හේතුවෙන් ස්ථානයේ කාල නිර්ණය වාස්තු විද්‍යාත්මක සාධක මත පදනම්ව සිදු කර ඇත.',
    tradition_label: 'දේශීය ජනප්‍රවාද — පුරාවිද්‍යාත්මකව සනාථ නොවූ',
    tradition_title: 'වළගම්බා රජු සහ මාලිගාතැන්න ජනශ්‍රැතිය',
    tradition_p1: '<strong>වළගම්බා රජු</strong> (වට්ටගාමිණී අභය) විසින් මෙම ස්ථානය කරවා භික්ෂූන් වහන්සේලාට පූජා කළ බව ජනප්‍රවාදයේ කියැවේ. මෙම ස්ථානයේ වළගම්බා රජුගේ මාලිගාව තිබේ යැයි ගැමියන් විශ්වාස කරන අතර <strong>"මාලිගාතැන්න"</strong> ලෙස මෙම ස්ථානය හඳුන්වා ඇත්තේ එබැවිනි.',
    tradition_p2: 'තවද මීට යාබදව පිහිටි <strong>මා එළිය වැව</strong> වළගම්බා රජ සමයේ ඉදි වූ බව සැලකෙන නිසා මෙම ස්ථානයත් එම යුගයේදීම ඉදිවන්නට ඇතැයි ගැමියන් සලකයි.',
    tradition_note: 'වැදගත් සටහන: මෙම ස්ථානය ආශ්‍රිතව රාජකීය මාලිගාවක් පැවැති බවට පුරාවිද්‍යාත්මක සාධක හමු නොවේ. මෙය දේශීය ජනප්‍රවාදගත විශ්වාසයකි.',
    monastery_label: 'ශාස්ත්‍රීය අර්ථකථනය',
    monastery_title: 'ආරණ්‍යවාසී භික්ෂූන්ගේ ආරාම සංකීර්ණය',
    monastery_p1: 'මෙම ස්ථානය ආශ්‍රිතව මාලිගාවක් පැවැති බවට සාධක හමු නොවන අතර <strong>ආගමික හා වාස්තු විද්‍යාත්මක වැදගත්කමකින් යුත් ආරණ්‍යවාසී භික්ෂූන් සඳහා සකස් වූ ආරාම සංකීර්ණයක්</strong> වශයෙන් මෙම ස්ථානය හඳුන්වා දිය හැකිය.',
    monastery_p2: 'ද්විමාලිගා පඨානඝරය, ස්වාභාවික දිය අගල්, සක්මන් භාවනා ශාලාව (චංකමනාඝරය) සහ වනගත නිස්කලංක පිහිටීම පැරණි ශ්‍රී ලංකාවේ ආරණ්‍ය සේනාසන සම්ප්‍රදායේ සියලුම ප්‍රධාන ලක්ෂණ මනාව පිළිබිඹු කරයි.',

    /* Remains */
    remains_tag: 'හඳුනාගත් නටබුන්',
    remains_title: 'පුරාවිද්‍යාත්මක නටබුන් (අක්කර 27)',
    remains_intro: 'පසු කාලයේදී සිදු කරන ලද ගවේෂණය මගින් අක්කර විසි හතක පමණ විසිරී තිබූ නටඹුන් හඳුනාගෙන ඇත. වැඩිදුර විස්තර සඳහා කාඩ්පත් ක්ලික් කරන්න.',
    remain_patana: 'පඨානඝර ගොඩනැගිල්ල',
    remain_patana_detail: 'ද්විමාලිගා ගෘහ නිර්මාණ ශෛලියෙන් යුත් මෙම ගොඩනැගිල්ල ආරණ්‍යවාසී භික්ෂූන්ගේ භාවනා කටයුතු උදෙසා නිර්මාණය කර ඇත. පිටත මණ්ඩපය හා අභ්‍යන්තර කුටිය ශිලා පාලමකින් සම්බන්ධ වන අතර ඉහළ ගොඩනැගිල්ල වටා ස්වාභාවික දිය අගලක් පිහිටා තිබේ. පුරාවිද්‍යා දෙපාර්තමේන්තුව මගින් සංරක්ෂණය කර ඇත.',
    remain_chankamanagara: 'චංකමනාඝර ගොඩනැගිල්ල',
    remain_chanka_detail: 'භික්ෂූන් වහන්සේලා සක්මන් භාවනාවේ (ඇවිදීමේ භාවනාව) යෙදීම සඳහා භාවිත කළ දිගු ශාලාවයි. 1998 වසරේදී පුරාවිද්‍යා දෙපාර්තමේන්තුව මගින් කැනීම් කර සංරක්ෂණය කරන ලද ආරක්ෂිත ස්මාරකයකි.',
    remain_steps_con: 'සකස් කරන ලද පියගැට',
    remain_steps_con_detail: 'ගල් කැටයම් කර නිමවන ලද මනරම් පියගැටපෙළ සහ සඳකඩපහණ සහිත ප්‍රවේශ මාර්ග. වේදිකා සහ මණ්ඩප අතර පහසු ගමනාගමනය සලසයි.',
    remain_steps_rock: 'ගලේ කෙටූ පියගැට',
    remain_steps_rock_detail: 'ස්වාභාවික පාෂාණ තලයන් මතම කෙටූ පියගැටපෙළ. භූමියේ උස් පහත් ස්ථාන අතර ගමන් කිරීමට ස්වාභාවික ගල යොදාගත් ප්‍රායෝගික වාස්තු විද්‍යාත්මක ලක්ෂණයකි.',
    remain_ponds: 'ස්වභාවික පොකුණු සහ ගල් කෙමි',
    remain_ponds_detail: 'ස්වභාවික පාෂාණ කුහර උපයෝගී කරගනිමින් ජලය රැස් කිරීමට සකස් කළ ගල් පොකුණු සහ ගල් කෙමි. භික්ෂූන්ගේ ජල අවශ්‍යතා සපුරාලීමට භාවිත විය.',
    remain_grinding: 'ඇඹරුම් සලකුණු',
    remain_grinding_detail: 'පාෂාණ මතුපිට පිහිටි ඖෂධ හෝ ආහාර ඇඹරීම ආශ්‍රිත පුරාණ ඇඹරුම් සලකුණු — එකල දෛනික ආරාමික ජීවිතය පිළිබිඹු කරයි.',
    remain_ketukawata: 'කේතුකාවාට',
    remain_ketukawata_detail: 'පාෂාණ තලයන්හි කේතුකාකාරව විදින ලද කුහර (කේතුකාවාට). ලී කුළුණු හෝ ආධාරක රඳවා තැබීමට යොදාගත් තාක්ෂණික ලක්ෂණයකි.',
    remain_other: 'වෙනත් නටබුන් සහ උළු කැබලි',
    remain_other_detail: 'අක්කර 27ක භූමිය පුරා විසිරී ඇති ගල් කුළුණු, පාදම් බැමි, සහ මුලින් වහලවල් තිබූ බව තහවුරු කෙරෙන උළු කැබලි ආදී පුරාවිද්‍යාත්මක සාධක.',
    learn_more: 'තව විස්තර බලන්න',

    /* Architecture */
    arch_tag: 'වාස්තු විද්‍යාත්මක ලක්ෂණ',
    arch_title: 'ප්‍රධාන ගොඩනැගිලි සහ සැලසුම්',
    patana_label: 'පඨානඝරය',
    chanka_label: 'චංකමනාඝරය',
    patana_title: 'පඨානඝර ගොඩනැගිල්ල',
    patana_desc1: 'වනාන්තර පරිසරයක, ගැඹුරු භාවනානුයෝගී ආරණ්‍යවාසී භික්ෂූන් වහන්සේලා සඳහා නිර්මාණය වූ සුවිශේෂී ආරාමික ගොඩනැගිල්ලකි. ගිහි සමාජයෙන් වෙන්ව නිස්කලංක පරිසරයක භාවනා කිරීමට සුදුසු ලෙස මෙම ස්ථානය තෝරාගෙන ඇත.',
    patana_desc2: 'ද්විමාලිගා ගෘහ නිර්මාණ ශෛලිය මෙහි ප්‍රධාන ලක්ෂණයයි. මෙහි පිටත මණ්ඩපය (Outer Mandapa) සහ අභ්‍යන්තර කුටිය (Inner Chamber) යන වේදිකා ද්විත්වය දැවැන්ත ඒකශිලා පාෂාණ පාලමකින් (Stone Slab) එකිනෙක සම්බන්ධ කර ඇත.',
    diag_title: 'ද්විමාලිගා සැලසුම් ව්‍යුහය',
    diag_outer: 'පිටත මණ්ඩපය<br/><small>(Outer Mandapa)</small>',
    diag_slab: 'ශිලා පාලම<br/><small>(Stone Bridge Slab)</small>',
    diag_inner: 'අභ්‍යන්තර කුටිය<br/><small>(Inner Chamber)</small>',
    patana_water: 'ස්වාභාවික දිය අගලක් ඉහළ ගොඩනැගිල්ල වටා පිහිටා ඇති අතර, එමගින් ගොඩනැගිල්ල තුළ සිසිල් බව සහ නිස්කලංක භාවය ආරක්ෂා කෙරේ.',
    patana_damage: 'ගොඩනැගිල්ලේ ප්‍රධාන පියගැටපෙළේ කොටසකට පසුකාලීන මිනිස් ක්‍රියාකාරකම් නිසා හානි සිදුව ඇත.',
    patana_conserved: 'පඨානඝරය ආරක්ෂිත පුරාවිද්‍යාත්මක ස්මාරකයක් ලෙස ප්‍රකාශයට පත් කර සංරක්ෂණය කර ඇත.',
    chanka_title: 'චංකමනාඝර ගොඩනැගිල්ල',
    chanka_badge: '1998 — පුරාවිද්‍යා දෙපාර්තමේන්තුව මගින් කැනීම් කර සංරක්ෂණය කරන ලදී',
    chanka_desc1: 'චංකමනාඝරය යනු භික්ෂූන් වහන්සේලා සක්මන් භාවනාවේ (ඇවිදීමේ භාවනාව) යෙදීම සඳහා භාවිත කළ දිගටි සක්මන් ශාලාවකි. බෞද්ධ ආරණ්‍යවාසී වාස්තු විද්‍යාවේ අත්‍යවශ්‍ය අංගයකි.',
    chanka_desc2: 'මාලිගාතැන්නේ චංකමනාඝර ගොඩනැගිල්ල <strong>1998 වසරේදී පුරාවිද්‍යා දෙපාර්තමේන්තුව මගින් කැනීම් කර සංරක්ෂණය කරන ලදී</strong>.',
    chanka_feature1: 'සක්මන් භාවනාව (Walking Meditation) සඳහා නිර්මාණය කළ සක්මන් මාර්ගය.',
    chanka_feature2: 'නීත්‍යානුකූලව ආරක්ෂිත ස්මාරකයක් ලෙස ප්‍රකාශිතයි.',
    chanka_feature3: 'පුරාවිද්‍යා දෙපාර්තමේන්තුවේ ස්ථීර අධීක්ෂණය සහ නඩත්තුව යටතේ පවතී.',
    other_feat_title: 'අනෙකුත් වාස්තු විද්‍යාත්මක ලක්ෂණ',
    feat_stairway: 'ගල් පියගැට සහ සඳකඩපහණ',
    feat_stairway_desc: 'කැටයම් කළ පියගැටපෙළ සහ ආරාධනාත්මක සඳකඩපහණ',
    feat_walls: 'ආරක්ෂිත ගල් බැමි',
    feat_walls_desc: 'ද්විත්ව ස්ථරවලින් යුතු ශක්තිමත් පාෂාණ බැමි',
    feat_gateway: 'ගල් උළුවහු දොරටුව',
    feat_gateway_desc: 'ඒකශිලා පාෂාණයෙන් නිර්මිත ප්‍රවේශ උළුවස්ස',
    feat_entry: 'වේදිකා ප්‍රවේශ මාර්ග',
    feat_entry_desc: 'ඉහළ භූමි වෙත පිවිසෙන ගලේ කෙටූ පියගැට',

    /* Timeline */
    timeline_tag: 'ඓතිහාසික ගමන්මග',
    timeline_title: 'මාලිගාතැන්න කාලරේඛාව',
    tl_period1: 'අනුරාධපුර යුගය',
    tl_title1: 'ආරණ්‍ය සේනාසන සංකීර්ණය ඉදිකිරීම',
    tl_desc1: 'පුරාවිද්‍යා සාධක සහ වාස්තු විද්‍යාත්මක ලක්ෂණ අනුව මෙම ස්ථානය අනුරාධපුර යුගයට අයත් ආරණ්‍ය සේනාසනයක් ලෙස නිර්මාණය වී ඇත.',
    tl_period2: 'ජනප්‍රවාදය',
    tl_title2: 'වළගම්බා රජු සහ මා එළිය වැව',
    tl_desc2: 'වළගම්බා රජු විසින් මෙම ස්ථානය කරවා භික්ෂූන්ට පූජා කළ බවත්, යාබද මා එළිය වැව ඉදිකළ බවත් ගැමියන් විශ්වාස කරන ජනප්‍රවාදය.',
    tl_period3: '1969 වසර',
    tl_title3: 'ජනාවාස ඉවත් කිරීම',
    tl_desc3: '1969 වසරේදී මෙම ස්ථානයේ පැවති අනවසර ජනාවාස පුරාවිද්‍යා දෙපාර්තමේන්තුව මගින් ඉවත් කර සංරක්ෂණයට මුල පිරීය.',
    tl_period4: '1969 පසු කාලය',
    tl_title4: 'අක්කර 27ක නටබුන් හඳුනාගැනීම',
    tl_desc4: 'සිදු කරන ලද පුරාවිද්‍යාත්මක ගවේෂණ මගින් අක්කර 27ක් පුරා විසිරී තිබූ පඨානඝර, චංකමනාඝර, පොකුණු, පියගැට ආදී නටබුන් හඳුනාගැනීම.',
    tl_period5: '1998 වසර',
    tl_title5: 'චංකමනාඝරය කැනීම් කර සංරක්ෂණය කිරීම',
    tl_desc5: 'පුරාවිද්‍යා දෙපාර්තමේන්තුව විසින් චංකමනාඝර ගොඩනැගිල්ල විශේෂ කැනීම් මගින් හෙළිදරව් කර විද්‍යාත්මකව සංරක්ෂණය කිරීම.',
    tl_period6: 'ආරක්ෂිත තත්ත්වය',
    tl_title6: 'ආරක්ෂිත ස්මාරක ලෙස ප්‍රකාශයට පත් කිරීම',
    tl_desc6: 'සංරක්ෂිත පඨානඝර සහ චංකමනාඝර ගොඩනැගිලි ශ්‍රී ලංකා පුරාවිද්‍යා පනත යටතේ ආරක්ෂිත ස්මාරක බවට පත් කිරීම.',
    tl_period7: 'වර්තමානය',
    tl_title7: 'ස්ථීර පුරාවිද්‍යා වැඩබිමක්',
    tl_desc7: 'මෙම පුරාවිද්‍යා ස්ථානය පුරාවිද්‍යා දෙපාර්තමේන්තුවේ සෘජු අධීක්ෂණය යටතේ ස්ථීර වැඩබිමක් ලෙස අඛණ්ඩව පවත්වාගෙන යයි.',
    tl_badge_arch: 'පුරාවිද්‍යා සාධක',
    tl_badge_trad: 'ස්ථානීය ජනප්‍රවාදය',
    tl_badge_action: 'පුරාවිද්‍යා දෙපාර්තමේන්තුව',
    tl_badge_conserve: 'සංරක්ෂණ කටයුතු',
    tl_badge_prot: 'නීතිමය ආරක්ෂාව',
    tl_badge_current: 'ස්ථීර වැඩබිම',

    /* Gallery */
    gallery_tag: 'ඡායාරූප ගැලරිය',
    gallery_title: 'මාලිගාතැන්න දසුන්',
    gallery_intro: 'ස්ථානයේ සියලු ඡායාරූප නරඹන්න. ඡායාරූපය මත කර්සරය තැබූ විට හෝ ක්ලික් කළ විට විස්තර නැරඹිය හැක.',
    filter_all: 'සියල්ල',
    filter_aerial: 'ගුවන් දසුන්',
    filter_patana: 'පඨානඝරය',
    filter_chanka: 'චංකමනාඝරය',
    filter_stone: 'පාෂාණ නිර්මාණ',
    filter_nature: 'ස්වභාවික පරිසරය',
    gcat_aerial: 'ගුවන් දසුන',
    gcat_stone: 'පාෂාණ නිර්මාණය',
    gcat_chanka: 'චංකමනාඝරය',
    gcat_patana: 'පඨානඝරය',
    gcat_nature: 'ස්වභාව සෞන්දර්යය',
    gcap_01: 'චංකමනාඝරය — ගුවන් දසුන',
    gcap_02: 'පඨානඝර ගොඩනැගිල්ල — ගුවන් දසුන',
    gcap_03: 'ගල් පියගැට සහ සඳකඩපහණ',
    gcap_04: 'මාලිගාතැන්න පරිශ්‍රය — පුළුල් ගුවන් දසුන',
    gcap_05: 'ඉහළ වේදිකාවට පිවිසෙන ගල් පියගැට',
    gcap_06: 'චංකමනාඝරය — අභ්‍යන්තර සක්මන් මාර්ගය',
    gcap_07: 'ගල් බැම්ම සහ දොරටු මුහුණත',
    gcap_08: 'පඨානඝර පිටත ආරක්ෂිත ගල් බැම්ම',
    gcap_09: 'පඨානඝර ඉහළ වේදිකාව',
    gcap_10: 'චංකමනාඝරය — මධ්‍යම ව්‍යුහය',
    gcap_11: 'වනාන්තරගත පරිසරය සහ ස්වභාවික පාෂාණ',
    gcap_12: 'පිටත මණ්ඩප වේදිකාව',
    gcap_13: 'සකස් කරන ලද පාෂාණ විස්තර',
    gcap_14: 'චංකමනාඝර දිගු අක්ෂීය දසුන',
    gcap_15: 'වන වියන යට පිහිටි ගල් පියගැට',
    gcap_16: 'ගල් උළුවහු ප්‍රවේශ දොරටුව',
    gcap_17: 'පුරාණ ශිලා උළුවස්ස',

    /* Preservation */
    pres_tag: 'සංරක්ෂණය සහ නඩත්තුව',
    pres_title: 'පුරාවිද්‍යා උරුමය රැකගැනීම',
    pres_intro: 'මාලිගාතැන්නේ පුරාවිද්‍යාත්මක වටිනාකම හෙළිදරව් කර සංරක්ෂණය කිරීමේ ගමන්මග.',
    pres_img_cap: 'සංරක්ෂිත පඨානඝර ගල් බැමි — මාලිගාතැන්න',
    pres_1969_title: '1969 — ජනාවාස ඉවත් කිරීම',
    pres_1969_desc: '1969 වසරේදී මෙම ස්ථානයේ පැවති අනවසර ජනාවාස පුරාවිද්‍යා දෙපාර්තමේන්තුව මගින් ඉවත් කර විධිමත් පර්යේෂණ සඳහා භූමිය විවෘත කරන ලදී.',
    pres_research_year: 'ගවේෂණය',
    pres_research_title: 'අක්කර 27ක පුරාවිද්‍යා ගවේෂණය',
    pres_research_desc: 'පසු කාලයේදී සිදු කරන ලද පුළුල් ගවේෂණ මගින් අක්කර විසි හතක පමණ විසිරී තිබූ නටඹුන් හඳුනාගෙන ලේඛනගත කෙරිණි.',
    pres_1998_title: '1998 — කැනීම් සහ සංරක්ෂණය',
    pres_1998_desc: 'පඨානඝරය සහ චංකමනාඝරය සංරක්ෂණය කරන ලදී. විශේෂයෙන් චංකමනාඝරය 1998 වසරේදී කැනීම් කර විද්‍යාත්මකව සංරක්ෂණය කෙරිණි.',
    pres_present: 'වර්තමානය',
    pres_present_title: 'ආරක්ෂිත ස්මාරක සහ ස්ථීර වැඩබිම',
    pres_present_desc: 'සංරක්ෂිත ස්මාරක ආරක්ෂිත ස්මාරක ලෙස ප්‍රකාශයට පත් කර ඇති අතර පුරාවිද්‍යා දෙපාර්තමේන්තුවේ අධීක්ෂණය යටතේ ස්ථීර වැඩබිමක් ලෙස පවත්වාගෙන යයි.',

    /* Did You Know */
    dyk_title: 'ඔබ දැන සිටියාද?',
    dyk_1: 'මෙම පුරාවිද්‍යා පරිශ්‍රය ආසන්න වශයෙන් <strong>අක්කර 27ක්</strong> පුරා විහිදී ඇත.',
    dyk_2: 'පඨානඝරය පිටත මණ්ඩපයකින් සහ ඇතුළත කුටියකින් යුත් සුවිශේෂී <strong>ද්විමාලිගා ගෘහ නිර්මාණ ශෛලියකින්</strong> සමන්විත වේ.',
    dyk_3: 'පඨානඝරයේ ඉහළ ගොඩනැගිල්ල වටා <strong>ස්වාභාවික දිය අගලක්</strong> පිහිටා තිබේ.',
    dyk_4: 'චංකමනඝරය <strong>1998 වර්ෂයේදී</strong> පුරාවිද්‍යා දෙපාර්තමේන්තුව මගින් කැනීම් කර සංරක්ෂණය කරන ලදී.',
    dyk_5: 'පඨානඝරය අසලින් හමු වූ <strong>උළු කැබලි</strong> මගින් මෙම ගොඩනැගිලි මුලින් වහලයකින් ආවරණය වී තිබූ බව තහවුරු වේ.',

    /* Note */
    note_title: 'ඓතිහාසික නිරවද්‍යතා සටහන',
    note_desc: 'මෙම වෙබ් අඩවිය පුරාවිද්‍යාත්මක ලේඛනගත කිරීම් මත පදනම්ව තොරතුරු ඉදිරිපත් කරයි. පුරාවිද්‍යාත්මක සාක්ෂි සහ දේශීය ජනශ්‍රැති අතර වෙනස්කම් ඇති තැන්වල ඒවා පැහැදිලිව වෙන්කර දක්වා ඇත. ලිඛිත සාක්ෂි නොමැතිකම නිසා ස්ථානයේ ඉතිහාසය ප්‍රධාන වශයෙන් භෞතික නටබුන් සහ ගෘහ නිර්මාණ ලක්ෂණ ඔස්සේ අර්ථකථනය කෙරේ.',

    /* Footer */
    footer_tagline: 'ශ්‍රී ලංකාවේ පොහොසත් පුරාවිද්‍යාත්මක උරුමය සංරක්ෂණය කරමු',
    footer_nav_title: 'ගවේෂණය කරන්න',
    footer_info_title: 'ස්ථාන තොරතුරු',
    footer_under: 'ශ්‍රී ලංකා පුරාවිද්‍යා දෙපාර්තමේන්තුවේ අධීක්ෂණය යටතේ පවතී',
    footer_copy: '© 2026 මාලිගාතැන්න පුරාවිද්‍යා උරුම ස්ථානය. සියලු හිමිකම් ඇවිරිණි.',
    footer_disclaimer: 'පුරාවිද්‍යාත්මක ලේඛනගත කිරීම් මත පදනම් වූ අන්තර්ගතයකි. අදාළ අවස්ථාවල ඓතිහාසික ජනප්‍රවාද සටහන් කර ඇත.'
  },

  en: {
    /* Meta / Branding */
    welcome_badge: 'SRI LANKAN HERITAGE',
    welcome_title: 'Welcome to Maligathanna',
    welcome_desc: 'Explore the archaeological heritage, history and architectural remains of Maligathanna — an ancient forest monastic complex of Sri Lanka.',
    choose_language: 'Choose Your Language',
    site_name: 'Maligathanna',
    site_sub: 'Archaeological Heritage Site',

    /* Navigation */
    nav_home: 'Home',
    nav_overview: 'Overview',
    nav_history: 'History',
    nav_location: 'Location',
    nav_architecture: 'Architecture',
    nav_gallery: 'Gallery',
    nav_nearby: 'Nearby Places',
    nav_preservation: 'Preservation',
    nav_change_lang: 'Change Language',
    nav_help: 'Site Guide',
    nav_help_short: 'Help',

    /* Help Modal */
    help_badge: 'Site User Guide',
    help_title: 'How to Use & Explore This Heritage Site',
    help_subtitle: 'A complete step-by-step guide to navigate features, interactive maps, multi-language controls, and archaeological highlights.',
    help_tip_title: 'Helpful Tip:',
    help_tip_desc: 'You can change the language (Sinhala / English / Tamil) or toggle Dark/Light theme anytime from the top bar.',
    help_btn_close: 'Got It · Explore Site',
    help_card1_title: '1. 3-Language Switching (Sinhala, English, Tamil)',
    help_card1_desc: 'Click the <strong>Language toggle</strong> in the top navigation bar or mobile dock to switch effortlessly between Sinhala, English, and Tamil at any moment.',
    help_card2_title: '2. Interactive Location & Directions (GPS & Route)',
    help_card2_desc: 'Visit the <strong>\'Location\'</strong> section to view step-by-step driving directions from Kurunegala, distance milestones, and direct Google Maps GPS navigation.',
    help_card3_title: '3. Archaeological Remains & Architecture',
    help_card3_desc: 'Explore detailed architectural blueprints, double-platform layouts, and archaeological findings of the ancient <strong>Patanaghara</strong> and <strong>Chankamanaghara</strong>.',
    help_card4_title: '4. HD Photo Gallery & Lightbox Viewer',
    help_card4_desc: 'Filter gallery photos by Aerial, Stone, Nature, or Structures. Click any photo to open the full-screen HD Lightbox viewer with descriptive captions.',
    help_card5_title: '5. Nearby Historical Places to Visit',
    help_card5_desc: 'Discover top attractions near Maligathanna such as <strong>Resvehera, Yapahuwa, Arankele, Haththikuchchi, Ridi Viharaya, and Athugala</strong> with travel distances and directions.',
    help_card6_title: '6. Dark / Light Mode & Mobile Dock',
    help_card6_desc: 'Toggle eye-friendly <strong>Dark Mode</strong> with the Moon/Sun icon. On mobile phones, use the bottom floating dock to jump instantly between sections.',
    help_card7_title: '7. Multilingual Read Aloud (Text-to-Speech)',
    help_card7_desc: 'Click the <strong>\'🔊 Read\'</strong> button in any major section to listen to historical details in your chosen language (Sinhala, English, or Tamil). Click <strong>\'⏹ Stop\'</strong> anytime to pause or stop reading.',

    /* Text-to-Speech (Read Aloud) */
    tts_read: 'Read',
    tts_reading: 'Reading...',
    tts_stop: 'Stop',
    tts_aria_read: 'Read this section aloud',
    tts_aria_stop: 'Stop reading aloud',
    tts_not_supported: 'Text-to-Speech is not supported in this browser.',

    /* Nearby Section */
    nearby_tag: 'Regional Heritage Guide',
    nearby_title: 'Historical & Scenic Places to Visit Nearby',
    nearby_desc: 'Explore prominent ancient monasteries, medieval rock fortresses, and cultural landmarks located in close proximity to Maligathanna in Kurunegala District.',
    nearby_view_map: 'Directions & Map',
    nb_res_title: 'Resvehera (Sesuruwa) Raja Maha Viharaya',
    nb_res_dist: '~18 km from Maligathanna',
    nb_res_era: 'Devanampiyatissa / Valagamba Era',
    nb_res_desc: 'An ancient forest monastery famed for its majestic 39-foot rock-carved standing Buddha statue, 99 drip-ledged meditation caves, and historic Ashta Phala Bodhi tree.',
    nb_res_tag1: 'Rock-Carved Colossus',
    nb_res_tag2: '99 Drip-Ledge Caves',

    nb_yap_title: 'Yapahuwa Rock Fortress & Ancient Capital',
    nb_yap_dist: '~22 km from Maligathanna',
    nb_yap_era: '13th Century (King Buvanekabahu I)',
    nb_yap_desc: 'The 13th-century medieval citadel and sacred capital of Sri Lanka, renowned for its dramatic ornamental granite staircase, carved stone guardian lions, and on-site museum.',
    nb_yap_tag1: 'Granite Stairway',
    nb_yap_tag2: 'Archaeology Museum',

    nb_ara_title: 'Arankele Ancient Forest Hermitage',
    nb_ara_dist: '~32 km from Maligathanna',
    nb_ara_era: '6th – 10th Century CE',
    nb_ara_desc: 'A serene 6th-century forest monastery featuring elevated stone meditation walkways, remnants of an ancient Ayurvedic hospital, stone medicinal baths, and hot-water bath houses.',
    nb_ara_tag1: 'Ancient Ayurvedic Hospital',
    nb_ara_tag2: 'Stone Meditation Paths',

    nb_hat_title: 'Haththikuchchi Monastic Complex',
    nb_hat_dist: '~34 km from Maligathanna',
    nb_hat_era: '3rd Century BCE – Anuradhapura Period',
    nb_hat_desc: 'An expansive 300-acre ancient monastery associated with the legend of King Sirisangabo, featuring stone-pillared Vatadage, picturesque rock ponds, and rock inscriptions.',
    nb_hat_tag1: 'Lotus Ponds & Vatadage',
    nb_hat_tag2: 'King Sirisangabo Heritage',

    nb_rid_title: 'Ridi Viharaya (Silver Cave Temple)',
    nb_rid_dist: '~48 km from Maligathanna',
    nb_rid_era: '2nd Century BCE (King Dutugemunu)',
    nb_rid_desc: 'Built on the site where silver was discovered to finance the Great Ruwanweli Seya. Features spectacular cave shrines beneath an imposing rock cliff, Kandyan murals, and ivory carvings.',
    nb_rid_tag1: 'Kandyan Cave Murals',
    nb_rid_tag2: 'Ivory Carved Doorframe',

    nb_ath_title: 'Athugala Elephant Rock & Giant Buddha',
    nb_ath_dist: '~28 km from Maligathanna',
    nb_ath_era: 'Cultural & Natural Landmark',
    nb_ath_desc: 'The towering 316-meter elephant-shaped granite monolith crowned with an iconic 88-foot white seated Samadhi Buddha statue offering 360-degree panoramic views of Kurunegala.',
    nb_ath_tag1: '88-Foot Samadhi Buddha',
    nb_ath_tag2: '360° Panoramic View',

    /* Hero */
    hero_badge: 'SRI LANKAN HERITAGE',
    hero_title_main: 'Maligathanna Archaeological Site',
    hero_title_en: 'Maligathanna',
    hero_subtitle: 'An Ancient Archaeological Heritage Site of Sri Lanka',
    hero_desc: 'A forest monastic complex of the Anuradhapura period, nestled amidst the forests of Kurunegala District in North Western Province.',
    hero_btn_explore: 'Explore the Site',
    hero_btn_gallery: 'View Gallery',
    hero_img_label: 'Pātānaghara',
    hero_img_sublabel: 'Double-platform forest monastery',
    scroll_down: 'Scroll to explore',

    /* Glance */
    glance_tag: 'Quick Overview',
    glance_title: 'At a Glance',
    glance_location_title: 'Location',
    glance_location_desc: 'Polpithigama Divisional Secretariat, Kurunegala District, North Western Province',
    glance_period_title: 'Period',
    glance_period_desc: 'Anuradhapura Period — based on archaeological evidence and architectural characteristics',
    glance_tradition_title: 'Local Tradition',
    glance_tradition_desc: 'Local tradition associates the site with King Valagamba, who is said to have offered it to monks',
    glance_type_title: 'Site Type',
    glance_type_desc: 'Forest monastic complex — a secluded religious and architectural site for meditation',
    glance_area_title: 'Archaeological Area',
    glance_area_desc: 'Approximately 27 acres of identified archaeological remains',

    /* Location */
    location_tag: 'How to Get There',
    location_title: 'Where is Maligathanna?',
    location_intro: 'Located in the Rawa Ela GN Division No. 369, Polpithigama Divisional Secretariat, Kurunegala District.',
    loc_province: 'Province',
    loc_province_val: 'North Western Province',
    loc_district: 'District',
    loc_district_val: 'Kurunegala District',
    loc_ds: 'Divisional Secretariat',
    loc_ds_val: 'Polpithigama',
    loc_gn: 'GN Division',
    loc_gn_val: 'Rawa Ela — No. 369',
    view_map: 'View on Map',
    route_title: 'Route from Kurunegala',
    route_start: 'Kurunegala',
    route_road: 'Kurunegala – Madagalla Road',
    route_25km: '25 km',
    route_egoda: 'Egodagama Junction',
    route_turn_south: 'Turn south → Thalakolawawa Road',
    route_2km: '2 km',
    route_batuyaaya: 'Batuyaaya Junction',
    route_side_road: 'Take the side road to the south',
    route_450m: '450 m',
    route_dest: 'Maligathanna',
    route_arrive: 'Archaeological Site',

    /* History */
    history_tag: 'The Past Speaks',
    history_title: 'The Story of Maligathanna',
    history_intro: 'Understanding the distinction between what archaeology reveals and what tradition remembers.',
    tab_evidence: 'Archaeological Evidence',
    tab_tradition: 'Local Tradition',
    tab_monastery: 'Monastic Character',
    evidence_label: 'Based on Archaeological Evidence',
    evidence_title: 'Anuradhapura Period Origins',
    evidence_p1: 'The archaeological evidence and architectural characteristics of the structures at Maligathanna suggest that the site belongs to the <strong>Anuradhapura period</strong> of Sri Lanka\'s history.',
    evidence_p2: 'However, <strong>no written evidence directly connected with Maligathanna</strong> has been found so far. The site\'s history must therefore be interpreted primarily through its physical remains and architectural features.',
    evidence_note: 'The absence of written records means the site\'s precise historical narrative remains a subject of ongoing scholarly investigation.',
    tradition_label: 'Local Tradition — Not Archaeologically Confirmed',
    tradition_title: 'The Legend of King Valagamba',
    tradition_p1: 'Local tradition holds that <strong>King Valagamba</strong> (Vattagamani Abhaya) constructed the site and offered it to forest-dwelling monks. Villagers also believe that King Valagamba\'s royal palace once existed here — an association reflected in the name "Maligathanna."',
    tradition_p2: 'The nearby <strong>Ma Eliya Wewa</strong> (reservoir) is also traditionally considered to have been constructed during the reign of King Valagamba.',
    tradition_note: 'Important: There is no archaeological evidence confirming that a royal palace existed at this site. These accounts represent local oral tradition, not documented historical fact.',
    monastery_label: 'Scholarly Interpretation',
    monastery_title: 'A Forest Monastic Complex',
    monastery_p1: 'Based on the architectural evidence, scholars interpret Maligathanna not as a palace site, but as a <strong>monastic complex designed for forest-dwelling monks</strong> — practitioners who sought secluded environments for deep meditation.',
    monastery_p2: 'The site\'s design — double-platform structures, natural rock ponds, a walking meditation hall, and deep forest setting — is entirely consistent with the requirements of <strong>forest monastery (aranna sena)</strong> traditions of ancient Sri Lanka.',

    /* Remains */
    remains_tag: 'What Was Found',
    remains_title: 'Archaeological Remains',
    remains_intro: 'Later research identified remains spread across approximately 27 acres. Click any card to learn more.',
    remain_patana: 'Pātānaghara',
    remain_patana_detail: 'Double-platform forest meditation building with an outer mandapa and inner chamber. A distinctive feature of ancient Sri Lankan forest monasticism. Conserved by the Department of Archaeology.',
    remain_chankamanagara: 'Chankamanaghara',
    remain_chanka_detail: 'A walking meditation hall used by monks for kinhin (walking meditation). Excavated and conserved by the Department of Archaeology in 1998. Now a declared protected monument.',
    remain_steps_con: 'Constructed Steps',
    remain_steps_con_detail: 'Carved and constructed stone stairways providing access between the different platform levels, associated with the platform architecture of the site.',
    remain_steps_rock: 'Rock-cut Steps',
    remain_steps_rock_detail: 'Natural rock surfaces carved into steps, providing access to elevated areas. A practical feature of ancient Sri Lankan rock monastery architecture.',
    remain_ponds: 'Natural Rock Ponds',
    remain_ponds_detail: 'Natural depressions in rock that collect and store water, with rock-cut stairways providing access. These occur at several locations across the site.',
    remain_grinding: 'Grinding Marks',
    remain_grinding_detail: 'Marks on rock surfaces created by grinding activities — evidence of daily monastic life at the site during its period of occupation.',
    remain_ketukawata: 'Ketukawata',
    remain_ketukawata_detail: 'Additional monastic architectural element identified within the approximately 27-acre site area. Forms part of the complex of remains at Maligathanna.',
    remain_other: 'Other Remains',
    remain_other_detail: 'Additional archaeological remains have been identified across the 27-acre site, including roof tile fragments near the Pātānaghara that confirm the structures originally had roofs.',
    learn_more: 'Learn More',

    /* Architecture */
    arch_tag: 'Major Structures',
    arch_title: 'Key Architectural Features',
    patana_label: 'Pātānaghara',
    chanka_label: 'Chankamanaghara',
    patana_title: 'Pātānaghara',
    patana_desc1: 'These buildings were created in forest environments, with site selection considering the need for secluded places suitable for deep meditation — separate from crowded areas frequented by lay devotees.',
    patana_desc2: 'A defining feature is its <strong>double-platform architecture</strong>. The two platforms can be described as the outer mandapa and the inner chamber, connected by a single stone slab.',
    diag_title: 'Architectural Layout',
    diag_outer: 'Outer Mandapa<br/><small>(Outer Hall)</small>',
    diag_slab: 'Single Stone Slab<br/><small>(Connecting Stone)</small>',
    diag_inner: 'Inner Chamber<br/><small>(Inner Room)</small>',
    patana_water: 'A natural water channel surrounds the upper building, possibly for animal protection and temperature regulation.',
    patana_damage: 'A portion of the main staircase has been damaged due to human activity.',
    patana_conserved: 'The Pātānaghara has been conserved and declared a protected monument.',
    chanka_title: 'Chankamanaghara',
    chanka_badge: '1998 — Excavated & Conserved by the Department of Archaeology',
    chanka_desc1: 'The Chankamanaghara is a walking meditation hall — an important element of ancient Buddhist monastic architecture. It was likely used by resident monks for their practice of chankamana (walking meditation).',
    chanka_desc2: 'The Chankamanaghara at Maligathanna was excavated and conserved by the <strong>Department of Archaeology in 1998</strong> and has been declared a protected monument.',
    chanka_feature1: 'Used for kinhin (walking meditation) practice by forest-dwelling monks.',
    chanka_feature2: 'Declared a legally protected monument.',
    chanka_feature3: 'Ongoing archaeological supervision by the Department of Archaeology.',
    other_feat_title: 'Other Architectural Features',
    feat_stairway: 'Stone Stairways',
    feat_stairway_desc: 'Constructed stone steps with moonstones',
    feat_walls: 'Platform Walls',
    feat_walls_desc: 'Double-tiered retaining walls',
    feat_gateway: 'Stone Gateway',
    feat_gateway_desc: 'Monolithic stone doorframe entrance',
    feat_entry: 'Platform Entry',
    feat_entry_desc: 'Stair access to raised platform areas',

    /* Timeline */
    timeline_tag: 'Through the Ages',
    timeline_title: 'Historical Timeline',
    tl_period1: 'Anuradhapura Period',
    tl_title1: 'Construction of the Monastic Complex',
    tl_desc1: 'Archaeological and architectural evidence indicates the site dates to the Anuradhapura period. The exact date of construction remains unknown.',
    tl_period2: 'Local Tradition',
    tl_title2: 'King Valagamba — Traditional Association',
    tl_desc2: 'Local tradition says King Valagamba constructed the site and offered it to forest-dwelling monks. This has not been confirmed by archaeological evidence.',
    tl_period3: '1969',
    tl_title3: 'Settlement Removed',
    tl_desc3: 'A settlement that had formed at the site was removed by the Department of Archaeology, enabling systematic research.',
    tl_period4: 'After 1969',
    tl_title4: 'Remains Identified — 27 Acres',
    tl_desc4: 'Later research identified archaeological remains spread across approximately 27 acres, revealing the full extent of the ancient monastic complex.',
    tl_period5: '1998',
    tl_title5: 'Chankamanaghara Excavated & Conserved',
    tl_desc5: 'The Chankamanaghara (walking meditation hall) was excavated and conserved by the Department of Archaeology.',
    tl_period6: 'Protected',
    tl_title6: 'Declared Protected Monuments',
    tl_desc6: 'The conserved Pātānaghara and Chankamanaghara were declared protected monuments under Sri Lankan archaeological preservation law.',
    tl_period7: 'Present',
    tl_title7: 'Ongoing Archaeological Supervision',
    tl_desc7: 'The site is currently maintained as a permanent worksite under the supervision of the Department of Archaeology.',
    tl_badge_arch: 'Archaeological Evidence',
    tl_badge_trad: 'Local Tradition Only',
    tl_badge_action: 'Dept. of Archaeology',
    tl_badge_conserve: 'Conservation Work',
    tl_badge_prot: 'Legal Protection',
    tl_badge_current: 'Active Worksite',

    /* Gallery */
    gallery_tag: 'Visual Heritage',
    gallery_title: 'Photo Gallery',
    gallery_intro: 'Explore the archaeological site through photography.',
    filter_all: 'All',
    filter_aerial: 'Aerial Views',
    filter_patana: 'Pātānaghara',
    filter_chanka: 'Chankamanaghara',
    filter_stone: 'Stone Structures',
    filter_nature: 'Nature',
    gcat_aerial: 'Aerial',
    gcat_stone: 'Stone',
    gcat_chanka: 'Chankamanaghara',
    gcat_patana: 'Pātānaghara',
    gcat_nature: 'Nature',
    gcap_01: 'Chankamanaghara — Aerial View',
    gcap_02: 'Pātānaghara — Aerial View',
    gcap_03: 'Stone Stairway with Moonstone',
    gcap_04: 'Site Overview — Forest Setting',
    gcap_05: 'Steps to Upper Platform',
    gcap_06: 'Chankamanaghara — Interior',
    gcap_07: 'Stone Wall with Doorway',
    gcap_08: 'Platform Wall — Exterior',
    gcap_09: 'Pātānaghara — Upper Platform',
    gcap_10: 'Chankamanaghara — Central Structure',
    gcap_11: 'Forest Setting of the Site',
    gcap_12: 'Outer Platform View',
    gcap_13: 'Stone Detail',
    gcap_14: 'Chankamanaghara — Long Axis View',
    gcap_15: 'Steps under Tree Canopy',
    gcap_16: 'Stone Gateway Entrance',
    gcap_17: 'Stone Doorframe',

    /* Preservation */
    pres_tag: 'Heritage Stewardship',
    pres_title: 'Preserving the Heritage',
    pres_intro: 'The journey of protecting Maligathanna\'s archaeological legacy.',
    pres_img_cap: 'Conserved platform walls at Maligathanna',
    pres_1969_title: 'Settlement Removed',
    pres_1969_desc: 'A settlement that had formed at the site was removed by the Department of Archaeology, opening the site for proper research.',
    pres_research_year: 'Research',
    pres_research_title: 'Archaeological Research',
    pres_research_desc: 'Later research identified archaeological remains spread across approximately 27 acres.',
    pres_1998_title: 'Conservation Works',
    pres_1998_desc: 'The Pātānaghara and Chankamanaghara were conserved. The Chankamanaghara was specifically excavated and conserved in 1998.',
    pres_present: 'Present',
    pres_present_title: 'Protected & Active Worksite',
    pres_present_desc: 'The conserved monuments are declared protected monuments. The site is maintained as a permanent worksite under ongoing Department of Archaeology supervision.',

    /* Did You Know */
    dyk_title: 'Did You Know?',
    dyk_1: 'The site covers approximately <strong>27 acres</strong> of archaeological remains.',
    dyk_2: 'The Pātānaghara has a distinctive <strong>double-platform</strong> architecture with an outer mandapa and inner chamber.',
    dyk_3: 'A <strong>natural water channel</strong> surrounds the upper building of the Pātānaghara.',
    dyk_4: 'The Chankamanaghara was <strong>excavated and conserved in 1998</strong> by the Department of Archaeology.',
    dyk_5: '<strong>Roof tile remains</strong> near the Pātānaghara confirm the structures originally had roofs.',

    /* Note */
    note_title: 'Historical Accuracy Note',
    note_desc: 'This website presents information based on archaeological documentation. Where archaeological evidence and local tradition differ, they are clearly presented separately. Local traditions are labelled as such and are not presented as historically confirmed facts. The absence of written records at this site means interpretation relies primarily on architectural and material evidence.',

    /* Footer */
    footer_tagline: 'Preserving the rich archaeological heritage of Sri Lanka',
    footer_nav_title: 'Explore',
    footer_info_title: 'Site Information',
    footer_under: 'Under the supervision of the Department of Archaeology, Sri Lanka',
    footer_copy: '© 2026 Maligathanna Archaeological Heritage Site. All rights reserved.',
    footer_disclaimer: 'Content based on archaeological documentation. Historical traditions are noted where applicable.'
  },

  ta: {
    /* Meta / Branding */
    welcome_badge: 'இலங்கை பாரம்பரியம்',
    welcome_title: 'மாளிகாதன்னவுக்கு வரவேற்கிறோம்',
    welcome_desc: 'இலங்கையின் பண்டைய காட்டு மடாலயமான மாளிகாதன்னவின் தொல்பொருளியல் பாரம்பரியம், வரலாறு மற்றும் கட்டிட எச்சங்களை ஆராயுங்கள்.',
    choose_language: 'மொழி தேர்வு செய்யவும்',
    site_name: 'மாளிகாதன்ன',
    site_sub: 'தொல்பொருளியல் பாரம்பரிய தளம்',

    /* Navigation */
    nav_home: 'முகப்பு',
    nav_overview: 'கண்ணோட்டம்',
    nav_history: 'வரலாறு',
    nav_location: 'இடம்',
    nav_architecture: 'கட்டிடக்கலை',
    nav_gallery: 'படத்தொகுப்பு',
    nav_nearby: 'அருகிலுள்ள இடங்கள்',
    nav_preservation: 'பாதுகாப்பு',
    nav_change_lang: 'மொழியை மாற்றுக',
    nav_help: 'வழிகாட்டி',
    nav_help_short: 'உதவி',

    /* Help Modal */
    help_badge: 'இணையதள வழிகாட்டி',
    help_title: 'இந்த தளத்தை எவ்வாறு பயன்படுத்துவது',
    help_subtitle: 'வரலாற்று அம்சங்கள், வரைபடங்கள், மொழி மாற்றம் மற்றும் தொல்பொருள் விவரங்களை ஆராய்வதற்கான வழிகாட்டி.',
    help_tip_title: 'பயனுள்ள குறிப்பு:',
    help_tip_desc: 'மேல் பட்டியில் இருந்து எந்த நேரத்திலும் மொழியையோ அல்லது டார்க்/லைட் தீமையோ எளிதாக மாற்றலாம்.',
    help_btn_close: 'புரிந்தது · தளத்தை ஆராய்க',
    help_card1_title: '1. 3 மொழி மாற்றம் (சிங்களம், ஆங்கிலம், தமிழ்)',
    help_card1_desc: 'மேல் வழிசெலுத்தல் பட்டி அல்லது மொபைல் டாக்கில் உள்ள <strong>மொழி பொத்தானை</strong> கிளிக் செய்து சிங்களம், ஆங்கிலம் மற்றும் தமிழ் இடையே உடனடியாக மாறலாம்.',
    help_card2_title: '2. இருப்பிடம் & வழிசெலுத்தல் (வரைபடம் & வழிகள்)',
    help_card2_desc: '<strong>\'இருப்பிடம்\'</strong> பிரிவில் குருநாகலில் இருந்து மாளிகாதென்னவுக்கு வரும் வழிகள் மற்றும் நேரடி கூகுள் வரைபட வழிகாட்டலை பெறலாம்.',
    help_card3_title: '3. தொல்பொருள் எச்சங்கள் & கட்டிடக்கலை',
    help_card3_desc: 'பண்டைய <strong>பதானகார</strong> மற்றும் <strong>சங்கமனகார</strong> தியான மண்டபங்களின் விரிவான கட்டிடக்கலை மற்றும் தொல்பொருள் தகவல்களை அறியலாம்.',
    help_card4_title: '4. HD புகைப்படங்கள் & முழுத்திரை பார்வை',
    help_card4_desc: 'வான்வழி, பாறை, இயற்கை மற்றும் கட்டமைப்புகள் வாரியாக புகைப்படங்களை வடிகட்டவும். முழுத்திரை HD பார்வையில் காண எந்த புகைப்படத்தையும் கிளிக் செய்யவும்.',
    help_card5_title: '5. அருகில் பார்க்கக்கூடிய வரலாற்று இடங்கள்',
    help_card5_desc: 'மாளிகாதென்னவுக்கு அருகிலுள்ள <strong>ரஸ்வெஹெர, யாப்பகூவ, அரங்கெலே, ஹத்திகுச்சி, ரிதி விகாரை, அத்துகல</strong> போன்ற வரலாற்று இடங்களை தூரத்துடன் கண்டறியவும்.',
    help_card6_title: '6. இரவு/பகல் தீம் & மொபைல் வசதி',
    help_card6_desc: 'கண்களுக்கு வசதியான <strong>டார்க் மோடை</strong> மாற்றலாம். மொபைல் போன்களில் கீழேயுள்ள ஃப்ளோட்டிங் டாக் மூலம் எந்த பகுதிக்கும் உடனடியாக செல்லலாம்.',
    help_card7_title: '7. குரல் வழி வாசிப்பு வசதி (Text-to-Speech)',
    help_card7_desc: 'ஒவ்வொரு முக்கிய பிரிவிலும் உள்ள <strong>\'🔊 படிக்க\'</strong> பொத்தானை அழுத்தி தேர்ந்தெடுக்கப்பட்ட மொழியில் (சிங்களம், ஆங்கிலம், தமிழ்) வரலாற்றுத் தகவல்களைக் கேட்கலாம். எந்த நேரத்திலும் நிறுத்த <strong>\'⏹ நிறுத்து\'</strong> அழுத்தவும்.',

    /* Text-to-Speech (Read Aloud) */
    tts_read: 'படிக்க',
    tts_reading: 'வாசிக்கிறது...',
    tts_stop: 'நிறுத்து',
    tts_aria_read: 'இந்த பகுதியை குரலில் கேளுங்கள்',
    tts_aria_stop: 'வாசிப்பதை நிறுத்து',
    tts_not_supported: 'இந்த உலாவியில் Text-to-Speech வசதி ஆதரிக்கப்படவில்லை.',

    /* Nearby Section */
    nearby_tag: 'பிராந்திய பாரம்பரிய வழிகாட்டி',
    nearby_title: 'அருகில் பார்க்கக்கூடிய வரலாற்று இடங்கள்',
    nearby_desc: 'குருநாகல் மாவட்டத்தில் மாளிகாதென்ன தொல்பொருள் தளத்திற்கு அருகிலுள்ள முக்கிய பண்டைய மடாலயங்கள் மற்றும் வரலாற்று சிறப்புமிக்க இடங்களை ஆராயுங்கள்.',
    nearby_view_map: 'வரைபடம் & வழிகள்',
    nb_res_title: 'ரஸ்வெஹெர (சேசுருவ) ரஜ மகா விகாரை',
    nb_res_dist: 'மாளிகாதென்னவிலிருந்து ~18 km',
    nb_res_era: 'தேவனாம்பியதிஸ்ஸ / வலகம்பா காலம்',
    nb_res_desc: '39 அடி உயர பிரம்மாண்டமான பாறை செதுக்கப்பட்ட நின்ற புத்தர் சிலை மற்றும் 99 குகை ஆசிரமங்களை கொண்ட புகழ்பெற்ற பண்டைய வன மடாலயம்.',
    nb_res_tag1: 'பாறை புத்தர் சிலை',
    nb_res_tag2: '99 குகைகள்',

    nb_yap_title: 'யாப்பகூவ வரலாற்று பாறை கோட்டை',
    nb_yap_dist: 'மாளிகாதென்னவிலிருந்து ~22 km',
    nb_yap_era: '13 ஆம் நூற்றாண்டு',
    nb_yap_desc: '13 ஆம் நூற்றாண்டின் புகழ்பெற்ற பாறை கோட்டை மற்றும் தலைநகரம், கம்பீரமான கிரானைட் படிக்கட்டுகள் மற்றும் செதுக்கப்பட்ட சிங்க சிற்பங்களுக்கு பெயர் பெற்றது.',
    nb_yap_tag1: 'அழகிய படிக்கட்டுகள்',
    nb_yap_tag2: 'தொல்பொருள் அருங்காட்சியகம்',

    nb_ara_title: 'அரங்கெலே பண்டைய வன ஆசிரமம்',
    nb_ara_dist: 'மாளிகாதென்னவிலிருந்து ~32 km',
    nb_ara_era: 'கி.பி 6 – 10 ஆம் நூற்றாண்டு',
    nb_ara_desc: 'அடர்ந்த காட்டின் மத்தியில் அமைந்துள்ள அமைதியான பண்டைய வன ஆசிரமம், பாறை நடைபாதைகள் மற்றும் பண்டைய ஆயுர்வேத மருத்துவமனை இடிபாடுகளை கொண்டது.',
    nb_ara_tag1: 'ஆயுர்வேத மருத்துவமனை',
    nb_ara_tag2: 'தியான நடைபாதைகள்',

    nb_hat_title: 'ஹத்திகுச்சி தொல்பொருள் வளாகம்',
    nb_hat_dist: 'மாளிகாதென்னவிலிருந்து ~34 km',
    nb_hat_era: 'கி.மு 3 ஆம் நூற்றாண்டு',
    nb_hat_desc: 'சிரிசங்கபோ மன்னரின் வரலாற்றுடன் தொடர்புடைய, அழகிய தாமரை குளங்கள், தூண்கள் மற்றும் வட்டதாகே கொண்ட 300 ஏக்கர் பரப்பளவிலான பண்டைய தளம்.',
    nb_hat_tag1: 'தாமரை குளங்கள்',
    nb_hat_tag2: 'மன்னர் வரலாறு',

    nb_rid_title: 'ரிதி விகாரை — ரிதிகம',
    nb_rid_dist: 'மாளிகாதென்னவிலிருந்து ~48 km',
    nb_rid_era: 'கி.மு 2 ஆம் நூற்றாண்டு',
    nb_rid_desc: 'ருவன்வெலிசாய கட்ட வெள்ளி கிடைத்த வரலாற்று சிறப்புமிக்க தளம். பிரம்மாண்ட பாறை குகைகள், கண்டி கால ஓவியங்கள் மற்றும் தந்த செதுக்கல்களை கொண்டது.',
    nb_rid_tag1: 'குகை ஓவியங்கள்',
    nb_rid_tag2: 'தந்த செதுக்கல்',

    nb_ath_title: 'அத்துகல யானை பாறை & பிரம்மாண்ட புத்தர்',
    nb_ath_dist: 'மாளிகாதென்னவிலிருந்து ~28 km',
    nb_ath_era: 'கலாச்சார அடையாளம்',
    nb_ath_desc: '316 மீட்டர் உயரமுள்ள யானை வடிவ பாறை மலையின் உச்சியில் அமைந்துள்ள 88 அடி உயர பிரம்மாண்ட வெள்ளை புத்தர் சிலை மற்றும் குருநாகலின் முழுமையான காட்சி.',
    nb_ath_tag1: '88 அடி புத்தர் சிலை',
    nb_ath_tag2: 'முழுமையான காட்சி',

    /* Hero */
    hero_badge: 'இலங்கை பாரம்பரியம்',
    hero_title_main: 'மாளிகாதன்ன தொல்பொருளியல் தளம்',
    hero_title_en: 'Maligathanna',
    hero_subtitle: 'இலங்கையின் பண்டைய தொல்பொருளியல் பாரம்பரிய தளம்',
    hero_desc: 'வடமேற்கு மாகாணத்தில் குருணாகல் மாவட்டத்தின் காடுகளுக்கிடையே அமைந்துள்ள அனுராதபுர காலத்தின் காட்டு மடாலய கட்டமைப்பு.',
    hero_btn_explore: 'தளத்தை ஆராயுங்கள்',
    hero_btn_gallery: 'படங்களை பாருங்கள்',
    hero_img_label: 'பாட்டான஘ர',
    hero_img_sublabel: 'இரட்டை மேடை காட்டு மடாலயம்',
    scroll_down: 'கீழே உருட்டுங்கள்',

    /* Glance */
    glance_tag: 'விரைவு கண்ணோட்டம்',
    glance_title: 'ஒரு பார்வையில்',
    glance_location_title: 'இடம்',
    glance_location_desc: 'போல்பிதிகம பிரிவு செயலகம், குருணாகல் மாவட்டம், வடமேற்கு மாகாணம்',
    glance_period_title: 'காலகட்டம்',
    glance_period_desc: 'அனுராதபுர காலகட்டம் — தொல்பொருளியல் சாட்சியங்கள் மற்றும் கட்டிடக்கலை அம்சங்களின் அடிப்படையில்',
    glance_tradition_title: 'உள்ளூர் மரபு',
    glance_tradition_desc: 'உள்ளூர் மரபு தளத்தை வலகம்பா மன்னனுடன் தொடர்புபடுத்துகிறது; அவர் தளத்தை துறவிகளுக்கு வழங்கினார் என்று கூறப்படுகிறது',
    glance_type_title: 'தள வகை',
    glance_type_desc: 'காட்டு மடாலய கட்டமைப்பு — தியானத்திற்கான தனிமையான மத மற்றும் கட்டிடக்கலை தளம்',
    glance_area_title: 'தொல்பொருளியல் பகுதி',
    glance_area_desc: 'ஏறக்குறைய 27 ஏக்கர் பரப்பில் அடையாளம் காணப்பட்ட எச்சங்கள்',

    /* Location */
    location_tag: 'எப்படி செல்வது',
    location_title: 'மாளிகாதன்ன எங்கே உள்ளது?',
    location_intro: 'ராவா எல கிராம அதிகாரி பிரிவு எண் 369, போல்பிதிகம பிரிவு செயலகம், குருணாகல் மாவட்டம்.',
    loc_province: 'மாகாணம்',
    loc_province_val: 'வடமேற்கு மாகாணம்',
    loc_district: 'மாவட்டம்',
    loc_district_val: 'குருணாகல் மாவட்டம்',
    loc_ds: 'பிரிவு செயலகம்',
    loc_ds_val: 'போல்பிதிகம',
    loc_gn: 'கிராம அதிகாரி பிரிவு',
    loc_gn_val: 'ராவா எல — எண் 369',
    view_map: 'வரைபடத்தில் பாருங்கள்',
    route_title: 'குருணாகலில் இருந்து பாதை',
    route_start: 'குருணாகல்',
    route_road: 'குருணாகல் – மடகல்ல சாலை',
    route_25km: '25 கி.மீ.',
    route_egoda: 'எகோடகம சந்திப்பு',
    route_turn_south: 'தெற்கே திரும்புங்கள் → தலகோளாவாவ சாலை',
    route_2km: '2 கி.மீ.',
    route_batuyaaya: 'பதுயாய சந்திப்பு',
    route_side_road: 'தெற்கு பக்க சாலையில் செல்லுங்கள்',
    route_450m: '450 மீ.',
    route_dest: 'மாளிகாதன்ன',
    route_arrive: 'தொல்பொருளியல் தளம்',

    /* History */
    history_tag: 'கடந்த காலம் பேசுகிறது',
    history_title: 'மாளிகாதன்னவின் கதை',
    history_intro: 'தொல்பொருளியல் என்ன வெளிப்படுத்துகிறது மற்றும் மரபு என்ன நினைவில் வைத்திருக்கிறது என்பதற்கிடையிலான வேறுபாட்டை புரிந்துகொள்ளுதல்.',
    tab_evidence: 'தொல்பொருளியல் சாட்சியங்கள்',
    tab_tradition: 'உள்ளூர் மரபு',
    tab_monastery: 'மடாலய தன்மை',
    evidence_label: 'தொல்பொருளியல் சாட்சியங்களின் அடிப்படையில்',
    evidence_title: 'அனுராதபுர காலகட்ட தோற்றம்',
    evidence_p1: 'மாளிகாதன்னவிலுள்ள கட்டமைப்புகளின் தொல்பொருளியல் சாட்சியங்களும் கட்டிடக்கலை அம்சங்களும் இந்த தளம் இலங்கை வரலாற்றின் <strong>அனுராதபுர காலகட்டத்தை</strong> சேர்ந்தது என்று சுட்டுகின்றன.',
    evidence_p2: 'எவ்வாறாயினும், <strong>மாளிகாதன்னவுடன் நேரடியாக தொடர்புடைய எழுத்துப்பூர்வ சாட்சியங்கள் எதுவும்</strong> இதுவரை கண்டுபிடிக்கப்படவில்லை.',
    evidence_note: 'எழுத்துப்பூர்வ ஆவணங்கள் இல்லாமையால், தளத்தின் துல்லியமான வரலாற்று விவரிப்பு தொடர்ச்சியான அறிஞர் ஆராய்ச்சிக்கான விஷயமாக உள்ளது.',
    tradition_label: 'உள்ளூர் மரபு — தொல்பொருளியல் ரீதியாக உறுதிப்படுத்தப்படவில்லை',
    tradition_title: 'வலகம்பா மன்னரின் ஐதீகம்',
    tradition_p1: 'உள்ளூர் மரபு கூறுவது என்னவென்றால், <strong>வலகம்பா மன்னர்</strong> (வட்டகாமினி அபய) தளத்தை கட்டி காட்டுத் துறவிகளுக்கு வழங்கினார். கிராம மக்கள் வலகம்பா மன்னரின் அரண்மனை இங்கே இருந்தது என்று நம்புகிறார்கள் — "மாளிகாதன்ன" என்ற பெயரும் இதனை பிரதிபலிக்கிறது.',
    tradition_p2: 'அருகிலுள்ள <strong>மா எளிய வெவ</strong> (நீர்த்தேக்கம்) வலகம்பா மன்னரின் ஆட்சிக்காலத்தில் கட்டப்பட்டதாக மரபுரை கூறுகிறது.',
    tradition_note: 'முக்கியம்: இந்த தளத்தில் அரண்மனை இருந்தது என்று உறுதிப்படுத்தும் எந்த தொல்பொருளியல் சாட்சியங்களும் இல்லை. இவை உள்ளூர் வாய்வழி மரபை பிரதினிதித்துவப்படுத்துகின்றன.',
    monastery_label: 'அறிவியல் விளக்கம்',
    monastery_title: 'ஒரு காட்டு மடாலய கட்டமைப்பு',
    monastery_p1: 'கட்டிடக்கலை சாட்சியங்களின் அடிப்படையில், அறிஞர்கள் மாளிகாதன்னவை அரண்மனை தளமாக அல்ல, <strong>காட்டுத் துறவிகளுக்காக வடிவமைக்கப்பட்ட மடாலய கட்டமைப்பாக</strong> விளக்குகிறார்கள்.',
    monastery_p2: 'தளத்தின் வடிவமைப்பு — இரட்டை மேடை கட்டமைப்புகள், இயற்கை பாறை குளங்கள், நடைத் தியான மண்டபம் மற்றும் ஆழமான காட்டு சூழல் — பண்டைய இலங்கையின் <strong>காட்டு மடாலய (அரண்ண செனா)</strong> மரபுகளின் தேவைகளுக்கு முழுமையாக ஒத்துப்போகிறது.',

    /* Remains */
    remains_tag: 'கண்டுபிடிக்கப்பட்டவை',
    remains_title: 'தொல்பொருளியல் எச்சங்கள்',
    remains_intro: 'பிற்காலத்தில் நடத்தப்பட்ட ஆராய்ச்சியில் ஏறக்குறைய 27 ஏக்கர் பரப்பில் எச்சங்கள் அடையாளம் காணப்பட்டன. அட்டையை கிளிக் செய்யுங்கள்.',
    remain_patana: 'பாட்டான஘ர',
    remain_patana_detail: 'வெளிப்புற மண்டபமும் உட்கூடமும் கொண்ட இரட்டை மேடை காட்டு தியான கட்டிடம். பண்டைய இலங்கை காட்டு மடாலயத்தின் சிறப்பம்சம். தொல்பொருளியல் திணைக்களத்தால் பாதுகாக்கப்பட்டது.',
    remain_chankamanagara: 'சங்கமண஘ர',
    remain_chanka_detail: 'துறவிகள் நடைத் தியானத்திற்காக பயன்படுத்திய நடைத் தியான மண்டபம். 1998ல் தொல்பொருளியல் திணைக்களத்தால் அகழ்வாராய்ச்சி செய்யப்பட்டு பாதுகாக்கப்பட்டது.',
    remain_steps_con: 'கட்டப்பட்ட படிகள்',
    remain_steps_con_detail: 'வெவ்வேறு மேடை நிலைகளுக்கிடையே அணுகல் வழங்கும் செதுக்கப்பட்ட மற்றும் கட்டப்பட்ட கல் படிகள்.',
    remain_steps_rock: 'பாறை வெட்டு படிகள்',
    remain_steps_rock_detail: 'படிகளாக செதுக்கப்பட்ட இயற்கை பாறை மேற்பரப்புகள், உயர்ந்த பகுதிகளுக்கு அணுகல் வழங்குகின்றன.',
    remain_ponds: 'இயற்கை பாறை குளங்கள்',
    remain_ponds_detail: 'நீரை சேகரித்து சேமிக்கும் பாறைகளில் இயற்கை குழிவுகள், கல் வெட்டு படிகளுடன் அணுகல் வழங்கப்படுகிறது.',
    remain_grinding: 'அரைத்தல் மதிப்பீடுகள்',
    remain_grinding_detail: 'அரைத்தல் செயல்பாடுகளால் பாறை மேற்பரப்புகளில் ஏற்பட்ட மதிப்பீடுகள் — தினசரி மடாலய வாழ்க்கையின் சாட்சியம்.',
    remain_ketukawata: 'கேதுகவாட',
    remain_ketukawata_detail: 'ஏறக்குறைய 27 ஏக்கர் தள பகுதியில் அடையாளம் காணப்பட்ட கூடுதல் மடாலய கட்டிடக்கலை கூறு.',
    remain_other: 'பிற எச்சங்கள்',
    remain_other_detail: '27 ஏக்கர் தள பகுதி முழுவதும் கூடுதல் தொல்பொருளியல் எச்சங்கள் அடையாளம் காணப்பட்டுள்ளன.',
    learn_more: 'மேலும் அறிய',

    /* Architecture */
    arch_tag: 'முக்கிய கட்டமைப்புகள்',
    arch_title: 'முக்கிய கட்டிடக்கலை அம்சங்கள்',
    patana_label: 'பாட்டான஘ர',
    chanka_label: 'சங்கமண஘ர',
    patana_title: 'பாட்டான஘ர',
    patana_desc1: 'இந்த கட்டிடங்கள் காட்டு சூழல்களில் உருவாக்கப்பட்டன, ஆழமான தியானத்திற்கு ஏற்ற தனிமையான இடங்களின் தேவையை கருத்தில் கொண்டு தள தேர்வு நடந்தது.',
    patana_desc2: 'இதன் வரையறுக்கும் அம்சம் <strong>இரட்டை மேடை கட்டிடக்கலை</strong>. இரண்டு மேடைகளை வெளிப்புற மண்டபம் மற்றும் உட்கூடம் என விவரிக்கலாம், ஒரு கல் தட்டால் இணைக்கப்பட்டுள்ளன.',
    diag_title: 'கட்டிடக்கலை அமைப்பு',
    diag_outer: 'வெளிப்புற மண்டபம்<br/><small>(Outer Mandapa)</small>',
    diag_slab: 'ஒற்றை கல் தட்டு<br/><small>(Stone Slab)</small>',
    diag_inner: 'உட்கூடம்<br/><small>(Inner Chamber)</small>',
    patana_water: 'மேல் கட்டிடத்தை சுற்றி ஒரு இயற்கை நீர் கால்வாய் உள்ளது, விலங்குகளிடமிருந்து பாதுகாப்பு மற்றும் வெப்பநிலை கட்டுப்பாட்டிற்காக இருக்கலாம்.',
    patana_damage: 'மனித செயல்பாட்டால் முக்கிய படிகளின் ஒரு பகுதி சேதமடைந்துள்ளது.',
    patana_conserved: 'பாட்டான஘ர பாதுகாக்கப்பட்டு பாதுகாக்கப்பட்ட நினைவிடமாக அறிவிக்கப்பட்டுள்ளது.',
    chanka_title: 'சங்கமண஘ர',
    chanka_badge: '1998 — தொல்பொருளியல் திணைக்களத்தால் அகழ்வாராய்ச்சி & பாதுகாப்பு',
    chanka_desc1: 'சங்கமண஘ர என்பது நடைத் தியான மண்டபம் — பண்டைய பௌத்த மடாலய கட்டிடக்கலையின் முக்கியமான கூறு. இது வாசித் துறவிகளால் சங்கமண (நடைத் தியானம்) பயிற்சிக்காக பயன்படுத்தப்பட்டிருக்கலாம்.',
    chanka_desc2: 'மாளிகாதன்னவில் சங்கமண஘ர <strong>1998ல் தொல்பொருளியல் திணைக்களத்தால்</strong> அகழ்வாராய்ச்சி செய்யப்பட்டு பாதுகாக்கப்பட்டது.',
    chanka_feature1: 'காட்டுத் துறவிகளால் நடைத் தியான பயிற்சிக்காக பயன்படுத்தப்பட்டது.',
    chanka_feature2: 'சட்டப்பூர்வமாக பாதுகாக்கப்பட்ட நினைவிடமாக அறிவிக்கப்பட்டுள்ளது.',
    chanka_feature3: 'தொல்பொருளியல் திணைக்களத்தின் தொடர்ச்சியான கண்காணிப்பு.',
    other_feat_title: 'பிற கட்டிடக்கலை அம்சங்கள்',
    feat_stairway: 'கல் படிகள்',
    feat_stairway_desc: 'நிலவு கற்களுடன் கட்டப்பட்ட கல் படிகள்',
    feat_walls: 'மேடை சுவர்கள்',
    feat_walls_desc: 'இரட்டை அடுக்கு தாங்கு சுவர்கள்',
    feat_gateway: 'கல் நுழைவாயில்',
    feat_gateway_desc: 'ஒரே கல் வாயில் சட்டகம்',
    feat_entry: 'மேடை நுழைவு',
    feat_entry_desc: 'உயர்ந்த மேடை பகுதிகளுக்கு படிக்கட்டு அணுகல்',

    /* Timeline */
    timeline_tag: 'காலங்களில்',
    timeline_title: 'வரலாற்று காலவரிசை',
    tl_period1: 'அனுராதபுர காலகட்டம்',
    tl_title1: 'மடாலய கட்டமைப்பின் நிர்மாணம்',
    tl_desc1: 'தொல்பொருளியல் மற்றும் கட்டிடக்கலை சாட்சியங்கள் தளம் அனுராதபுர காலகட்டத்தை சேர்ந்தது என்று குறிக்கின்றன. நிர்மாணத்தின் சரியான தேதி தெரியவில்லை.',
    tl_period2: 'உள்ளூர் மரபு',
    tl_title2: 'வலகம்பா மன்னர் — பாரம்பரிய தொடர்பு',
    tl_desc2: 'உள்ளூர் மரபு கூறுவது வலகம்பா மன்னர் தளத்தை கட்டி காட்டுத் துறவிகளுக்கு வழங்கினார் என்று. இது தொல்பொருளியல் சாட்சியங்களால் உறுதிப்படுத்தப்படவில்லை.',
    tl_period3: '1969',
    tl_title3: 'குடியேற்றம் அகற்றப்பட்டது',
    tl_desc3: 'தளத்தில் ஏற்பட்ட குடியேற்றம் தொல்பொருளியல் திணைக்களத்தால் அகற்றப்பட்டது.',
    tl_period4: '1969க்கு பிறகு',
    tl_title4: 'எச்சங்கள் அடையாளம் காணப்பட்டன — 27 ஏக்கர்',
    tl_desc4: 'பிற்காலத்தில் நடத்தப்பட்ட ஆராய்ச்சி ஏறக்குறைய 27 ஏக்கர் பரப்பில் எச்சங்களை அடையாளம் காட்டியது.',
    tl_period5: '1998',
    tl_title5: 'சங்கமண஘ர அகழ்வாராய்ச்சி & பாதுகாப்பு',
    tl_desc5: 'சங்கமண஘ர (நடைத் தியான மண்டபம்) தொல்பொருளியல் திணைக்களத்தால் அகழ்வாராய்ச்சி செய்யப்பட்டு பாதுகாக்கப்பட்டது.',
    tl_period6: 'பாதுகாக்கப்பட்டது',
    tl_title6: 'பாதுகாக்கப்பட்ட நினைவிடங்களாக அறிவிக்கப்பட்டன',
    tl_desc6: 'பாதுகாக்கப்பட்ட பாட்டான஘ரவும் சங்கமண஘ரவும் இலங்கை தொல்பொருளியல் பாதுகாப்பு சட்டத்தின் கீழ் பாதுகாக்கப்பட்ட நினைவிடங்களாக அறிவிக்கப்பட்டன.',
    tl_period7: 'தற்போது',
    tl_title7: 'தொடர்ச்சியான தொல்பொருளியல் கண்காணிப்பு',
    tl_desc7: 'தளம் தற்போது தொல்பொருளியல் திணைக்களத்தின் மேற்பார்வையில் நிரந்தர பணியிடமாக பராமரிக்கப்படுகிறது.',
    tl_badge_arch: 'தொல்பொருளியல் சாட்சியம்',
    tl_badge_trad: 'உள்ளூர் மரபு மட்டுமே',
    tl_badge_action: 'தொல்பொருளியல் திணைக்களம்',
    tl_badge_conserve: 'பாதுகாப்பு பணி',
    tl_badge_prot: 'சட்டப் பாதுகாப்பு',
    tl_badge_current: 'செயலில் உள்ள பணியிடம்',

    /* Gallery */
    gallery_tag: 'காட்சி பாரம்பரியம்',
    gallery_title: 'புகைப்பட தொகுப்பு',
    gallery_intro: 'புகைப்படங்கள் மூலம் தொல்பொருளியல் தளத்தை ஆராயுங்கள்.',
    filter_all: 'அனைத்தும்',
    filter_aerial: 'வான் காட்சிகள்',
    filter_patana: 'பாட்டான஘ர',
    filter_chanka: 'சங்கமண஘ர',
    filter_stone: 'கல் கட்டமைப்புகள்',
    filter_nature: 'இயற்கை',
    gcat_aerial: 'வான் காட்சி',
    gcat_stone: 'கல்',
    gcat_chanka: 'சங்கமண஘ர',
    gcat_patana: 'பாட்டான஘ர',
    gcat_nature: 'இயற்கை',
    gcap_01: 'சங்கமண஘ர — வான் காட்சி',
    gcap_02: 'பாட்டான஘ர — வான் காட்சி',
    gcap_03: 'நிலவுக்கல்லுடன் கல் படிகள்',
    gcap_04: 'தள கண்ணோட்டம் — காட்டு சூழல்',
    gcap_05: 'மேல் மேடைக்கு படிகள்',
    gcap_06: 'சங்கமண஘ர — உட்புறம்',
    gcap_07: 'வாயிலுடன் கல் சுவர்',
    gcap_08: 'மேடை சுவர் — வெளிப்புறம்',
    gcap_09: 'பாட்டான஘ர — மேல் மேடை',
    gcap_10: 'சங்கமண஘ர — மைய கட்டமைப்பு',
    gcap_11: 'தளத்தின் காட்டு சூழல்',
    gcap_12: 'வெளிப்புற மேடை காட்சி',
    gcap_13: 'கல் விவரம்',
    gcap_14: 'சங்கமண஘ர — நீண்ட அச்சு காட்சி',
    gcap_15: 'மர நிழலின் கீழ் படிகள்',
    gcap_16: 'கல் நுழைவாயில் நுழைவு',
    gcap_17: 'கல் வாயில் சட்டகம்',

    /* Preservation */
    pres_tag: 'பாரம்பரிய பாதுகாப்பு',
    pres_title: 'பாரம்பரியத்தை பாதுகாத்தல்',
    pres_intro: 'மாளிகாதன்னவின் தொல்பொருளியல் பாரம்பரியத்தை பாதுகாக்கும் பயணம்.',
    pres_img_cap: 'மாளிகாதன்னவில் பாதுகாக்கப்பட்ட மேடை சுவர்கள்',
    pres_1969_title: 'குடியேற்றம் அகற்றப்பட்டது',
    pres_1969_desc: 'தளத்தில் ஏற்பட்ட குடியேற்றம் தொல்பொருளியல் திணைக்களத்தால் அகற்றப்பட்டது, சரியான ஆராய்ச்சிக்கு தளத்தை திறந்தது.',
    pres_research_year: 'ஆராய்ச்சி',
    pres_research_title: 'தொல்பொருளியல் ஆராய்ச்சி',
    pres_research_desc: 'பிற்காலத்தில் நடத்தப்பட்ட ஆராய்ச்சி ஏறக்குறைய 27 ஏக்கர் பரப்பில் எச்சங்களை அடையாளம் காட்டியது.',
    pres_1998_title: 'பாதுகாப்பு பணிகள்',
    pres_1998_desc: 'பாட்டான஘ரவும் சங்கமண஘ரவும் பாதுகாக்கப்பட்டன. சங்கமண஘ர குறிப்பாக 1998ல் அகழ்வாராய்ச்சி செய்யப்பட்டது.',
    pres_present: 'தற்போது',
    pres_present_title: 'பாதுகாக்கப்பட்டது & செயலில் உள்ள பணியிடம்',
    pres_present_desc: 'பாதுகாக்கப்பட்ட நினைவிடங்கள் பாதுகாக்கப்பட்ட நினைவிடங்களாக அறிவிக்கப்பட்டுள்ளன. தொல்பொருளியல் திணைக்களத்தின் கண்காணிப்பில் தளம் நிரந்தர பணியிடமாக பராமரிக்கப்படுகிறது.',

    /* Did You Know */
    dyk_title: 'உங்களுக்குத் தெரியுமா?',
    dyk_1: 'தளம் ஏறக்குறைய <strong>27 ஏக்கர்</strong> தொல்பொருளியல் எச்சங்களை கொண்டுள்ளது.',
    dyk_2: 'பாட்டான஘ர வெளிப்புற மண்டபம் மற்றும் உட்கூடத்துடன் <strong>இரட்டை மேடை</strong> கட்டிடக்கலையை கொண்டுள்ளது.',
    dyk_3: '<strong>இயற்கை நீர் கால்வாய்</strong> பாட்டான஘ரின் மேல் கட்டிடத்தை சுற்றி உள்ளது.',
    dyk_4: 'சங்கமண஘ர <strong>1998ல் அகழ்வாராய்ச்சி செய்யப்பட்டு பாதுகாக்கப்பட்டது</strong>.',
    dyk_5: 'பாட்டான஘ர அருகிலுள்ள <strong>கூரை ஓடு எச்சங்கள்</strong> கட்டமைப்புகளுக்கு கூரை இருந்ததை உறுதிப்படுத்துகின்றன.',

    /* Note */
    note_title: 'வரலாற்று துல்லியம் குறிப்பு',
    note_desc: 'இந்த வலைத்தளம் தொல்பொருளியல் ஆவணங்களின் அடிப்படையில் தகவல்களை வழங்குகிறது. தொல்பொருளியல் சாட்சியங்களும் உள்ளூர் மரபும் வேறுபடும் இடத்தில், அவை தெளிவாக தனித்தனியாக வழங்கப்படுகின்றன.',

    /* Footer */
    footer_tagline: 'இலங்கையின் செழுமையான தொல்பொருளியல் பாரம்பரியத்தை பாதுகாத்தல்',
    footer_nav_title: 'ஆராயுங்கள்',
    footer_info_title: 'தள தகவல்',
    footer_under: 'இலங்கை தொல்பொருளியல் திணைக்களத்தின் மேற்பார்வையில்',
    footer_copy: '© 2026 மாளிகாதன்ன தொல்பொருளியல் பாரம்பரிய தளம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டுள்ளன.',
    footer_disclaimer: 'உள்ளடக்கம் தொல்பொருளியல் ஆவணங்களின் அடிப்படையிலானது. வரலாற்று மரபுகள் பொருத்தமான இடங்களில் குறிப்பிடப்பட்டுள்ளன.'
  }
};

/* ===================================================================
   2. GALLERY IMAGE DATA
   =================================================================== */
const galleryImages = [
  { src: 'assets/images/img01-chankamana-aerial.jpg', category: 'aerial chanka', titleKey: 'gcap_01', catKey: 'gcat_aerial' },
  { src: 'assets/images/img02-patana-aerial.jpg', category: 'aerial patana', titleKey: 'gcap_02', catKey: 'gcat_aerial' },
  { src: 'assets/images/img03-stone-stairway.jpg', category: 'stone patana', titleKey: 'gcap_03', catKey: 'gcat_stone' },
  { src: 'assets/images/img04-site-aerial-wide.jpg', category: 'aerial nature', titleKey: 'gcap_04', catKey: 'gcat_aerial' },
  { src: 'assets/images/img05-platform-steps.jpg', category: 'stone patana', titleKey: 'gcap_05', catKey: 'gcat_stone' },
  { src: 'assets/images/img06-chankamana-interior.jpg', category: 'chanka stone', titleKey: 'gcap_06', catKey: 'gcat_chanka' },
  { src: 'assets/images/img07-stone-wall-door.jpg', category: 'stone', titleKey: 'gcap_07', catKey: 'gcat_stone' },
  { src: 'assets/images/img08-platform-wall-exterior.jpg', category: 'patana stone', titleKey: 'gcap_08', catKey: 'gcat_stone' },
  { src: 'assets/images/img09-patana-upper-platform.jpg', category: 'patana', titleKey: 'gcap_09', catKey: 'gcat_patana' },
  { src: 'assets/images/img10-chankamana-inner.jpg', category: 'chanka', titleKey: 'gcap_10', catKey: 'gcat_chanka' },
  { src: 'assets/images/img11-nature-site-view.jpg', category: 'nature', titleKey: 'gcap_11', catKey: 'gcat_nature' },
  { src: 'assets/images/img12-outer-platform-view.jpg', category: 'patana stone', titleKey: 'gcap_12', catKey: 'gcat_patana' },
  { src: 'assets/images/img13-stone-detail.jpg', category: 'stone', titleKey: 'gcap_13', catKey: 'gcat_stone' },
  { src: 'assets/images/img14-chankamana-axis.jpg', category: 'chanka', titleKey: 'gcap_14', catKey: 'gcat_chanka' },
  { src: 'assets/images/img15-steps-under-tree.jpg', category: 'stone nature', titleKey: 'gcap_15', catKey: 'gcat_stone' },
  { src: 'assets/images/img16-gateway-entrance.jpg', category: 'stone', titleKey: 'gcap_16', catKey: 'gcat_stone' },
  { src: 'assets/images/img17-stone-doorframe.jpg', category: 'stone', titleKey: 'gcap_17', catKey: 'gcat_stone' }
];

/* ===================================================================
   3. STATE
   =================================================================== */
let currentLang = localStorage.getItem('mali_lang') || 'si';
let currentTheme = localStorage.getItem('mali_theme') || 'light';
let currentSlide = 0;
let carouselInterval = null;
let lightboxIndex = 0;
let visibleImages = [];

/* ===================================================================
   4. LANGUAGE SYSTEM
   =================================================================== */
function t(key) {
  const lang = translations[currentLang] || translations.si || translations.en;
  return lang[key] || translations.si[key] || translations.en[key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = t(key);
    if (text !== undefined && text !== null) {
      // Use innerHTML for keys that contain HTML tags like <br/>, <small>, <strong>
      if (typeof text === 'string' && (text.includes('<') || text.includes('&') ||
        key.startsWith('dyk_') || key.startsWith('evidence_p') ||
        key.startsWith('tradition_p') || key.startsWith('monastery_p') ||
        key.startsWith('patana_desc') || key.startsWith('chanka_desc') ||
        key.startsWith('diag_') || key.startsWith('help_card') || key.startsWith('help_tip') ||
        key === 'tl_desc1' || key === 'tl_desc2' || key === 'note_desc')) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  });

  // Update image titles & alt attributes for cursor hover tooltips
  document.querySelectorAll('.gallery-item').forEach(item => {
    const index = parseInt(item.dataset.index);
    if (!isNaN(index) && galleryImages[index]) {
      const titleText = t(galleryImages[index].titleKey);
      const catText = t(galleryImages[index].catKey);
      const fullLabel = `${titleText} (${catText})`;
      item.setAttribute('title', fullLabel);
      const img = item.querySelector('img');
      if (img) {
        img.setAttribute('alt', titleText);
        img.setAttribute('title', fullLabel);
      }
    }
  });

  // Update specific section images with hover title tooltips
  const imageMap = [
    { selector: '.hero-img-wrapper img', key: 'hero_img_label' },
    { selector: '.arch-main-img img', key: 'remain_patana' },
    { selector: '.pres-image img', key: 'pres_img_cap' }
  ];
  imageMap.forEach(m => {
    const el = document.querySelector(m.selector);
    if (el) {
      const txt = t(m.key);
      el.setAttribute('title', txt);
      el.setAttribute('alt', txt);
    }
  });

  // Update lang label in navbar
  const labels = { si: 'සිංහල', en: 'English', ta: 'தமிழ்' };
  const labelEl = document.getElementById('current-lang-label');
  if (labelEl) labelEl.textContent = labels[currentLang] || 'සිංහල';

  // Update in-modal lang buttons active class
  document.querySelectorAll('.help-lang-btn').forEach(btn => {
    btn.classList.toggle('active-lang', btn.dataset.lang === currentLang);
  });

  // Update html lang attribute
  document.documentElement.setAttribute('lang', currentLang);
  document.documentElement.setAttribute('data-lang', currentLang);

  // Update read buttons labels and states
  updateAllReadButtons();
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  // Stop active speech if any when language changes
  stopSpeech();
  currentLang = lang;
  localStorage.setItem('mali_lang', lang);
  applyTranslations();

  // Highlight active footer lang btn, dropdown, and hero pills
  document.querySelectorAll('.footer-lang-btn, .lang-option, .hero-lang-btn, .help-lang-btn').forEach(btn => {
    btn.classList.toggle('active-lang', btn.dataset.lang === lang);
  });
}

/* ===================================================================
   6. THEME TOGGLE
   =================================================================== */
function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon();
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('mali_theme', currentTheme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = document.getElementById('theme-icon');
  if (icon) {
    icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

/* ===================================================================
   7. NAVBAR
   =================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const themeToggle = document.getElementById('theme-toggle');
  const langBtn = document.getElementById('nav-lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');

  // Scroll listener
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNavLink();
  }, { passive: true });

  // Hamburger
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
      if (mobileOverlay) mobileOverlay.classList.toggle('active', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
  }

  // Close mobile menu on nav link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Theme toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Language dropdown
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('open');
    });

    document.addEventListener('click', () => {
      langDropdown.classList.remove('open');
    });

    langDropdown.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        setLanguage(btn.dataset.lang);
        langDropdown.classList.remove('open');
      });
    });
  }

  // Footer lang buttons
  document.querySelectorAll('.footer-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
}

function closeMobileMenu() {
  const navLinks = document.getElementById('nav-links');
  const hamburger = document.getElementById('hamburger');
  const mobileOverlay = document.getElementById('mobile-overlay');
  if (navLinks) navLinks.classList.remove('open');
  if (hamburger) { hamburger.classList.remove('open'); hamburger.setAttribute('aria-expanded', 'false'); }
  if (mobileOverlay) mobileOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  let current = '';

  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

/* ===================================================================
   8. HERO CAROUSEL
   =================================================================== */
function initCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.carousel-dots .dot');
  if (slides.length === 0) return;

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide]?.classList.remove('active');
    dots[currentSlide]?.setAttribute('aria-selected', 'false');

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    dots[currentSlide]?.classList.add('active');
    dots[currentSlide]?.setAttribute('aria-selected', 'true');
  }

  function nextSlide() { goToSlide(currentSlide + 1); }

  function startAutoplay() {
    stopAutoplay();
    carouselInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    if (carouselInterval) clearInterval(carouselInterval);
  }

  // Dot navigation
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goToSlide(i);
      startAutoplay();
    });
  });

  // Pause on hero hover
  const hero = document.getElementById('hero');
  if (hero) {
    hero.addEventListener('mouseenter', stopAutoplay);
    hero.addEventListener('mouseleave', startAutoplay);
  }

  // Touch support
  let touchStartX = 0;
  if (hero) {
    hero.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    hero.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        goToSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
        startAutoplay();
      }
    }, { passive: true });
  }

  startAutoplay();
}

/* ===================================================================
   9. SMOOTH SCROLLING
   =================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ===================================================================
   10. SCROLL REVEAL
   =================================================================== */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ===================================================================
   11. HISTORY TABS
   =================================================================== */
function initHistoryTabs() {
  const tabs = document.querySelectorAll('.history-tab');
  const panels = document.querySelectorAll('.history-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById(`panel-${target}`);
      if (panel) panel.classList.add('active');
    });
  });
}

/* ===================================================================
   12. ARCHITECTURE TABS
   =================================================================== */
function initArchTabs() {
  const tabs = document.querySelectorAll('.arch-tab');
  const panels = document.querySelectorAll('.arch-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.arch;
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById(`arch-${target}`);
      if (panel) panel.classList.add('active');
    });
  });
}

/* ===================================================================
   13. EXPANDABLE REMAIN CARDS
   =================================================================== */
function initRemainCards() {
  document.querySelectorAll('.remain-card').forEach(card => {
    const btn = card.querySelector('.learn-more-btn');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const expanded = card.classList.toggle('expanded');
        card.setAttribute('aria-expanded', expanded);
      });
    }

    // Keyboard support
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const expanded = card.classList.toggle('expanded');
        card.setAttribute('aria-expanded', expanded);
      }
    });
  });
}

/* ===================================================================
   14. GALLERY FILTERING
   =================================================================== */
function initGallery() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      galleryItems.forEach(item => {
        const cats = item.dataset.category || '';
        if (filter === 'all' || cats.includes(filter)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });

      updateVisibleImages();
    });
  });

  // Click to open lightbox
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      updateVisibleImages();
      const index = parseInt(item.dataset.index);
      const visIdx = visibleImages.findIndex(img => img.index === index);
      openLightbox(visIdx >= 0 ? visIdx : 0);
    });
  });

  updateVisibleImages();
}

function updateVisibleImages() {
  visibleImages = [];
  document.querySelectorAll('.gallery-item:not(.hidden)').forEach(item => {
    const index = parseInt(item.dataset.index);
    visibleImages.push({ index, data: galleryImages[index] });
  });
}

/* ===================================================================
   15. LIGHTBOX
   =================================================================== */
function initLightbox() {
  const lb = document.getElementById('lightbox');
  const lbClose = document.getElementById('lb-close');
  const lbPrev = document.getElementById('lb-prev');
  const lbNext = document.getElementById('lb-next');

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbPrev) lbPrev.addEventListener('click', () => { lightboxIndex = (lightboxIndex - 1 + visibleImages.length) % visibleImages.length; updateLightbox(); });
  if (lbNext) lbNext.addEventListener('click', () => { lightboxIndex = (lightboxIndex + 1) % visibleImages.length; updateLightbox(); });

  // Click outside image to close
  if (lb) {
    lb.addEventListener('click', (e) => {
      if (e.target === lb) closeLightbox();
    });
  }

  // Keyboard
  document.addEventListener('keydown', e => {
    if (!lb || lb.style.display === 'none') return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') { lightboxIndex = (lightboxIndex - 1 + visibleImages.length) % visibleImages.length; updateLightbox(); }
    if (e.key === 'ArrowRight') { lightboxIndex = (lightboxIndex + 1) % visibleImages.length; updateLightbox(); }
  });

  // Touch swipe
  let touchStart = 0;
  if (lb) {
    lb.addEventListener('touchstart', e => { touchStart = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', e => {
      const diff = touchStart - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        lightboxIndex = diff > 0
          ? (lightboxIndex + 1) % visibleImages.length
          : (lightboxIndex - 1 + visibleImages.length) % visibleImages.length;
        updateLightbox();
      }
    }, { passive: true });
  }
}

function openLightbox(index) {
  lightboxIndex = index;
  updateLightbox();
  const lb = document.getElementById('lightbox');
  if (lb) {
    lb.classList.add('open');
    lb.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) {
    lb.classList.remove('open');
    lb.style.display = 'none';
    document.body.style.overflow = '';
  }
}

function updateLightbox() {
  if (visibleImages.length === 0) return;
  const item = visibleImages[lightboxIndex];
  if (!item) return;
  const data = item.data;

  const lbImg = document.getElementById('lb-img');
  const lbCat = document.getElementById('lb-cat');
  const lbTitle = document.getElementById('lb-title');
  const lbCounter = document.getElementById('lb-counter');

  if (lbImg) {
    lbImg.src = data.src;
    lbImg.alt = t(data.titleKey);
  }
  if (lbCat) lbCat.textContent = t(data.catKey);
  if (lbTitle) lbTitle.textContent = t(data.titleKey);
  if (lbCounter) lbCounter.textContent = `${lightboxIndex + 1} / ${visibleImages.length}`;
}

/* ===================================================================
   16. BACK TO TOP
   =================================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ===================================================================
   17. TIMELINE ANIMATION
   =================================================================== */
function initTimeline() {
  const tlItems = document.querySelectorAll('.tl-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 120);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  tlItems.forEach(item => observer.observe(item));
}

/* ===================================================================
   18. SITE PRELOADER
   =================================================================== */
function initPreloader() {
  const preloader = document.getElementById('site-preloader');
  if (!preloader) return;

  const dismissPreloader = () => {
    preloader.classList.add('loaded');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 600);
  };

  if (document.readyState === 'complete') {
    setTimeout(dismissPreloader, 400);
  } else {
    window.addEventListener('load', () => setTimeout(dismissPreloader, 400));
    setTimeout(dismissPreloader, 1400);
  }
}

/* ===================================================================
   19. WELCOME LANGUAGE EXPERIENCE
   =================================================================== */
function initWelcomeModal() {
  const modal = document.getElementById('welcome-modal');
  if (!modal) return;

  const closeBtn = document.getElementById('welcome-close-btn');
  // Support both old selectors (welcome-lang-box) and new (wm-lang-row)
  const langBoxes = modal.querySelectorAll('.welcome-lang-box, .welcome-lang-card, .wm-lang-row');

  // Prevent background scrolling while welcome modal is visible
  document.body.style.overflow = 'hidden';

  const closeModal = (lang) => {
    if (lang) {
      setLanguage(lang);
    }
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    setTimeout(() => {
      modal.style.display = 'none';
    }, 500);
  };

  langBoxes.forEach(box => {
    box.addEventListener('click', (e) => {
      e.stopPropagation();
      const selectedLang = box.getAttribute('data-lang') || 'si';
      closeModal(selectedLang);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeModal(currentLang || 'si');
    });
  }

  // Clicking the photo panel (left side) also closes with default lang
  const photoPanel = modal.querySelector('.wm-photo-panel');
  if (photoPanel) {
    photoPanel.addEventListener('click', () => {
      closeModal(currentLang || 'si');
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden') && modal.style.display !== 'none') {
      closeModal(currentLang || 'si');
    }
  });
}

/* ===================================================================
   20. FLOATING MOBILE DOCK NAVIGATION (IMAGE 4 STYLE)
   =================================================================== */
function initMobileDock() {
  const dock = document.getElementById('mobile-dock');
  if (!dock) return;

  const dockLinks = dock.querySelectorAll('.dock-item[data-dock]');
  const dockLangBtn = document.getElementById('dock-lang-btn');

  // Smooth click scroll
  dockLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        const offset = 70;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetEl.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Scroll spy active indicator
  const updateDockActive = () => {
    const sections = document.querySelectorAll('section[id]');
    let currentId = '';
    const scrollPos = window.scrollY + 180;

    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop) {
        currentId = sec.id;
      }
    });

    dockLinks.forEach(item => {
      const isTarget = item.getAttribute('data-dock') === currentId;
      item.classList.toggle('active', isTarget);
    });
  };

  window.addEventListener('scroll', updateDockActive, { passive: true });
  updateDockActive();

  // Quick cycle language on dock action button
  if (dockLangBtn) {
    dockLangBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const nextLangMap = { si: 'en', en: 'ta', ta: 'si' };
      const next = nextLangMap[currentLang] || 'si';
      setLanguage(next);
    });
  }
}

/* ===================================================================
   21. HELP / USER GUIDE MODAL (TRILINGUAL)
   =================================================================== */
function initHelpModal() {
  const modal = document.getElementById('help-modal');
  const navBtn = document.getElementById('nav-help-btn');
  const dockBtn = document.getElementById('dock-help-btn');
  const closeBtn = document.getElementById('help-close-btn');
  const dismissBtn = document.getElementById('help-dismiss-btn');
  const inModalLangBtns = modal ? modal.querySelectorAll('.help-lang-btn') : [];

  if (!modal) return;

  function openHelp() {
    modal.style.display = 'flex';
    // Trigger animation frame for smooth opacity & scale transition
    requestAnimationFrame(() => {
      modal.classList.add('active');
    });
    document.body.classList.add('modal-open');
  }

  function closeHelp() {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    }, 250);
  }

  if (navBtn) navBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openHelp();
  });

  if (dockBtn) dockBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openHelp();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeHelp);
  if (dismissBtn) dismissBtn.addEventListener('click', closeHelp);

  // Close when clicking outside the container (on the backdrop)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeHelp();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      closeHelp();
    }
  });

  // In-modal language switch buttons
  inModalLangBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
}

/* ===================================================================
   22. MULTILINGUAL TEXT-TO-SPEECH (READ ALOUD) ENGINE
   Authentic natural audio speech for Sinhala (si), Tamil (ta), and English (en)
   =================================================================== */
let activeSpeechSectionId = null;
let isSpeaking = false;
let currentAudio = null;
let speechSessionToken = 0;
let availableVoices = [];

// Pre-load available voices from speech synthesis
function initSpeechVoices() {
  if ('speechSynthesis' in window) {
    const updateVoices = () => {
      availableVoices = window.speechSynthesis.getVoices() || [];
    };
    updateVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
  }
}

// Find a matching voice for language, return null if no real voice exists
function getNativeVoiceForLanguage(lang) {
  if (!availableVoices.length && 'speechSynthesis' in window) {
    availableVoices = window.speechSynthesis.getVoices() || [];
  }
  const langTargets = {
    si: ['si-LK', 'si', 'sin', 'sinhala'],
    ta: ['ta-LK', 'ta-IN', 'ta', 'tam', 'tamil'],
    en: ['en-US', 'en-GB', 'en-AU', 'en-IN', 'en']
  };
  const targets = langTargets[lang] || ['en-US', 'en'];

  for (const t of targets) {
    const match = availableVoices.find(v => v.lang && v.lang.toLowerCase().replace('_', '-') === t.toLowerCase());
    if (match) return match;
  }
  for (const t of targets) {
    const match = availableVoices.find(v => v.lang && v.lang.toLowerCase().startsWith(t.toLowerCase()));
    if (match) return match;
  }
  for (const t of targets) {
    const match = availableVoices.find(v => v.name && v.name.toLowerCase().includes(t.toLowerCase()));
    if (match) return match;
  }
  return null;
}

// Extract clean readable text from section DOM
function extractSectionReadableText(sectionEl) {
  if (!sectionEl) return '';

  const clone = sectionEl.cloneNode(true);

  // Remove UI elements that must never be read aloud
  const ignoreSelectors = [
    '[data-no-speech="true"]',
    'button',
    'nav',
    'script',
    'style',
    'noscript',
    'svg',
    'img',
    '.read-section-btn',
    '.gallery-filters',
    '.history-tabs',
    '.arch-tabs',
    '.carousel-dots',
    '.scroll-indicator',
    '.hero-lang-bar',
    '.hero-cta',
    '.map-btn',
    '.nearby-card-btn',
    '.learn-more-btn',
    '.footer-lang',
    '.footer-links',
    '[aria-hidden="true"]'
  ];

  ignoreSelectors.forEach(sel => {
    clone.querySelectorAll(sel).forEach(el => el.remove());
  });

  const blocks = [];
  const textElements = clone.querySelectorAll(
    'h1, h2, h3, h4, h5, h6, p, .section-desc, .admin-item, .route-step, .glance-card, .remain-card, .feat-card, .tl-item, .nearby-card-body, .dyk-card, .note-content, .arch-feature, .diag-box, .hero-subtitle, .hero-desc'
  );

  if (textElements.length > 0) {
    textElements.forEach(el => {
      if (el.closest('.route-steps') && !el.classList.contains('route-step')) return;
      const text = el.innerText || el.textContent || '';
      const clean = text.replace(/\s+/g, ' ').trim();
      if (clean && clean.length > 1) {
        const endsWithPunct = /[.!?:\u0DF4\u0D83]$/.test(clean);
        blocks.push(endsWithPunct ? clean : clean + '.');
      }
    });
  } else {
    const rawText = clone.innerText || clone.textContent || '';
    rawText.split('\n').forEach(line => {
      const clean = line.replace(/\s+/g, ' ').trim();
      if (clean) blocks.push(clean);
    });
  }

  // Deduplicate adjacent identical lines
  const uniqueBlocks = [];
  blocks.forEach(b => {
    if (!uniqueBlocks.length || uniqueBlocks[uniqueBlocks.length - 1] !== b) {
      uniqueBlocks.push(b);
    }
  });

  return uniqueBlocks.join(' ');
}

// Split into reliable sentence chunks (< 130 characters) for optimal natural pronunciation
function chunkText(text) {
  if (!text) return [];
  const rawPieces = text.split(/([.!?\n\u0DF4\u0D83]+)/);
  const sentences = [];
  for (let i = 0; i < rawPieces.length; i += 2) {
    const textPart = rawPieces[i] || '';
    const punctPart = rawPieces[i + 1] || '';
    const full = (textPart + punctPart).trim();
    if (full) sentences.push(full);
  }

  const chunks = [];
  sentences.forEach(s => {
    if (s.length <= 130) {
      chunks.push(s);
    } else {
      const words = s.split(' ');
      let current = '';
      words.forEach(w => {
        if ((current + ' ' + w).length <= 130) {
          current = current ? (current + ' ' + w) : w;
        } else {
          if (current) chunks.push(current);
          current = w;
        }
      });
      if (current) chunks.push(current);
    }
  });

  return chunks.filter(c => c && c.trim().length > 0);
}

// Main Section Read Aloud Controller
function readSection(sectionId) {
  // If clicking active section -> stop reading
  if (isSpeaking && activeSpeechSectionId === sectionId) {
    stopSpeech();
    return;
  }

  // Stop any active speech first
  stopSpeech();

  const sectionEl = document.getElementById(sectionId);
  if (!sectionEl) return;

  const textToRead = extractSectionReadableText(sectionEl);
  if (!textToRead) return;

  const chunks = chunkText(textToRead);
  if (!chunks.length) return;

  activeSpeechSectionId = sectionId;
  isSpeaking = true;
  speechSessionToken++;
  const sessionToken = speechSessionToken;
  updateSectionReadButtonState(sectionId, true);

  let chunkIdx = 0;
  const langCode = currentLang === 'si' ? 'si' : (currentLang === 'ta' ? 'ta' : 'en');
  const nativeVoice = getNativeVoiceForLanguage(currentLang);

  function playNextChunk() {
    if (sessionToken !== speechSessionToken || !isSpeaking) return;

    if (chunkIdx >= chunks.length) {
      stopSpeech();
      return;
    }

    const chunk = chunks[chunkIdx];

    // If English and genuine native voice exists, use Web Speech API
    if (currentLang === 'en' && nativeVoice && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) {
      const utterance = new SpeechSynthesisUtterance(chunk);
      utterance.lang = 'en-US';
      utterance.voice = nativeVoice;
      utterance.rate = 0.95;
      utterance.pitch = 1.0;

      utterance.onend = () => {
        if (sessionToken !== speechSessionToken) return;
        chunkIdx++;
        playNextChunk();
      };

      utterance.onerror = (e) => {
        if (sessionToken !== speechSessionToken) return;
        if (e.error === 'canceled' || e.error === 'interrupted') return;
        chunkIdx++;
        playNextChunk();
      };

      window.speechSynthesis.speak(utterance);
    } else {
      // Authentic Natural Sinhala (si), Tamil (ta), and fallback English (en)
      const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${langCode}&q=${encodeURIComponent(chunk)}`;
      const audio = new Audio();
      currentAudio = audio;
      audio.src = audioUrl;

      audio.onended = () => {
        if (sessionToken !== speechSessionToken) return;
        chunkIdx++;
        playNextChunk();
      };

      audio.onerror = (err) => {
        if (sessionToken !== speechSessionToken) return;
        console.warn('Audio stream error, attempting SpeechSynthesis:', err);
        if ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) {
          const fallbackUtterance = new SpeechSynthesisUtterance(chunk);
          fallbackUtterance.lang = langCode === 'si' ? 'si-LK' : (langCode === 'ta' ? 'ta-LK' : 'en-US');
          fallbackUtterance.onend = () => {
            if (sessionToken !== speechSessionToken) return;
            chunkIdx++;
            playNextChunk();
          };
          fallbackUtterance.onerror = () => {
            if (sessionToken !== speechSessionToken) return;
            chunkIdx++;
            playNextChunk();
          };
          window.speechSynthesis.speak(fallbackUtterance);
        } else {
          chunkIdx++;
          playNextChunk();
        }
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(e => {
          if (sessionToken !== speechSessionToken) return;
          console.warn('Audio playback error:', e);
          chunkIdx++;
          playNextChunk();
        });
      }
    }
  }

  playNextChunk();
}

// Stop speech and reset state
function stopSpeech() {
  speechSessionToken++;
  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.src = '';
    } catch(e) {}
    currentAudio = null;
  }
  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch(e) {}
  }
  if (activeSpeechSectionId) {
    updateSectionReadButtonState(activeSpeechSectionId, false);
  }
  activeSpeechSectionId = null;
  isSpeaking = false;
}

// Update UI button state for a specific section
function updateSectionReadButtonState(sectionId, speaking) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const btn = section.querySelector('.read-section-btn');
  if (!btn) return;

  if (speaking) {
    btn.classList.add('speaking');
    btn.setAttribute('aria-pressed', 'true');
    btn.setAttribute('aria-label', t('tts_aria_stop'));
    btn.innerHTML = `
      <span class="tts-soundwave" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </span>
      <span class="tts-text">${t('tts_reading')}</span>
      <span class="tts-stop-badge">${t('tts_stop')}</span>
    `;
  } else {
    btn.classList.remove('speaking');
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('aria-label', t('tts_aria_read'));
    btn.innerHTML = `
      <span class="tts-icon"><i class="fas fa-volume-high"></i></span>
      <span class="tts-text">${t('tts_read')}</span>
    `;
  }
}

// Update all read buttons across the site
function updateAllReadButtons() {
  document.querySelectorAll('.read-section-btn').forEach(btn => {
    const section = btn.closest('section');
    const isThisSpeaking = isSpeaking && section && section.id === activeSpeechSectionId;
    if (!isThisSpeaking) {
      btn.classList.remove('speaking');
      btn.setAttribute('aria-pressed', 'false');
      btn.setAttribute('aria-label', t('tts_aria_read'));
      btn.innerHTML = `
        <span class="tts-icon"><i class="fas fa-volume-high"></i></span>
        <span class="tts-text">${t('tts_read')}</span>
      `;
    }
  });
}

// Fallback toast message
function alertToast(msg) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'site-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// Expose functions to global window scope for inline onclick handlers
window.readSection = readSection;
window.stopSpeech = stopSpeech;

/* ===================================================================
   23. INITIALIZATION
   =================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Theme & Language
  initTheme();
  applyTranslations();
  initSpeechVoices();

  // Preloader & Welcome Experience
  initPreloader();
  initWelcomeModal();
  initHelpModal();

  // Navigation systems
  initNavbar();
  initMobileDock();

  // Interactive site components
  initCarousel();
  initSmoothScroll();
  initScrollReveal();
  initHistoryTabs();
  initArchTabs();
  initRemainCards();
  initGallery();
  initLightbox();
  initBackToTop();
  initTimeline();

  // Global language switchers
  document.querySelectorAll('[data-lang]').forEach(btn => {
    if (btn.classList.contains('footer-lang-btn') || btn.classList.contains('lang-option') || btn.classList.contains('hero-lang-btn') || btn.classList.contains('help-lang-btn')) {
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    }
  });

  console.log('Maligathanna Heritage Site loaded with authentic heritage welcome, preloader, mobile dock & multilingual TTS.');
});


// curosr
const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  if (cursor) {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  }
});

document.querySelectorAll("a, button, .clickable").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    document.body.classList.add("cursor-hover");
  });

  element.addEventListener("mouseleave", () => {
    document.body.classList.remove("cursor-hover");
  });
});