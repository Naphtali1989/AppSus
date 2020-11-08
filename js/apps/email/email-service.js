import { storageService } from '../../services/storage-service.js';
import { utilService } from '../../services/util-service.js';

const EMAIL_STORAGE_KEY = 'emailDB';
const defaultEmails = [{
        composer: 'Paulina from Avocode',
        composerEmail: 'paulina@avocode.com',
        subject: 'Get back to your projects.',
        body: `Hello Naphtali,

        Your free trial expired a week ago, and we already miss you. 💔
        
        Your projects, designs, and share links have been automatically locked. The good news is you can still get them back.
        
        Purchase a subscription within 7 days to unlock your projects.
        
        UNLOCK MY PROJECTS
        Cheers,
        
        Paulina Klauco
        Customer Success Manager
        
        `,
        isRead: Math.random() < 0.5,
        isMarked: Math.random() > 0.5,
        isSent: Math.random() < 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() > 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: 'Qwertee Daily Tee-Mail‏',
        composerEmail: 'newsletter@qwertee.com',
        subject: `UGLY CHRISTMAS SWEATERS NOW ON SALE! £13/€16/$16 LIMITED TIME!`,
        body: `Welcome to your new and improved Daily Tee-Mail from Qwertee. As always we have 3 great new limited edition designs that are about to go live in a few minutes on www.qwertee.com when the timer hits zero on the homepage that we wanted to share just with you. But better still, as a much appreciated Daily Tee-Mail reader you now get an exclusive discount code EVERY DAY to get €1/£1/$1 off any of Today's Tees. Just use the code 2LKFEM5C7Q7WP when checking out to get your discount. PS this code will only work for you and expires when Today's Daily Tees have finished being on Sale. But don't worry, there will be a new code for you with tomorrow's Daily Tee-Mail also:)`,
        isRead: Math.random() < 0.5,
        isMarked: Math.random() > 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() > 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `Tal Levi‏`,
        composerEmail: `tal@sqlink.com`,
        subject: `היי(:
            `,
        body: `מה שלומך?

        שוחחנו לא מזמן בנוגע להצעות עבודה,
        
        אשמח למייל חוזר אם החיפוש רלוונטי ואפשר להמשיך לבדוק לך משרות לפי הקריטריונים שהגדרנו.
        
         במידה והחלפת מקום עבודה/ הרחבת אזורים גיאוגרפים/ השתנו צפיות השכר, אשמח לעדכון.
        
        במידה ודבר לא השתנה אך החיפוש רלוונטי, יש להשיב כי רלוונטי J
        
         
        
        תודה טל מSQLINK`,
        isRead: Math.random() > 0.5,
        isMarked: Math.random() < 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() > 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `Coding Academy`,
        composerEmail: `codingacademy@misterbit.co.il`,
        subject: `הזמנה למפגשי מכינה - לקראת קורס הבוטקאמפ ספטמבר 2020‎‎‎‎`,
        body: `עוד מעט מתחילים :)

 

        רגע לפני תחילת קורס הבוטקאמפ נשמח להזמינך להצטרף למפגשי מכינה שנקיים החל מיום ראשון הקרוב, ה 30 באוגוסט.
        
         
        
        במהלך קורס המכינה נעבור על נושאים בסיסיים שיילמדו גם בתחילת קורס הבוטקאמפ ובהם:
        
        HTML, CSS, משתנים, תנאים, פונקציות ועוד.
        
         
        
        נוכחות בקורס המכינה אינה חובה והחומר שיועבר בה יועבר גם במהלך קורס הבוטקאמפ - אך זוהי הזדמנות טובה עבורך להתחיל להיכנס לעניינים וגם להכיר את חבריך לקורס, חלק מסגל ההוראה ועזרים טכנולוגים בהם נשתמש.
        
         
        
        מועדי מפגשי המכינה:
        
         
        
        מפגש ראשון:
        
        יום א' - 30 באוגוסט 8:30-10:30 (לינק למפגש ZOOM)
        
         
        
        מפגש שני: 
        
        יום ב' - 31 באוגוסט 8:30-10:30  (לינק למפגש ZOOM)
        
         
        
        מפגש שלישי: 
        
        יום ג' - 1 בספטמבר 8:30-10:30  (לינק למפגש ZOOM)
        
         
        
        מפגש רביעי: 
        
        יום ד' - 2 בספטמבר 8:30-10:30  (לינק למפגש ZOOM) 
        
         
        
        המפגשים יוקלטו, אז אם לא יתאפשר לך להצטרף, ניתן יהיה לצפות בשיעורים בזמן שנוח לך.
        
         
        
        איך נערכים:
        
        מחשב, מומלץ להצטייד גם באוזניות נוחות.
        
        להתקין על מחשבך VScode ואת אפליקציית ZOOM .
        
        שלחנו לך זימון ל  SLACK - מומלץ ליצור שם חשבון עוד היום.
        
         
        
         
        
         
        
        נשמח לראותך במכינה :)
        
        לפרטים נוספים ושאלות מוזמנים לפנות אלי.
        
         
        
        בהצלחה!
        
        מוריה וצוות קודינג-אקדמי
        
        `,
        isRead: Math.random() < 0.5,
        isMarked: Math.random() < 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() > 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `GitHub‏ `,
        composerEmail: `noreply@github.com`,
        subject: `[GitHub] Please verify your device‏
        `,
        body: `Hey Naphtali1989!

        A sign in attempt requires further verification because we did not recognize your device. To complete the sign in, enter the verification code on the unrecognized device.
        `,
        isRead: Math.random() > 0.5,
        isMarked: Math.random() < 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() > 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `Naphtali`,
        composerEmail: `Naphtali.r@reemail.com`,
        subject: `בירור לגבי מוצר - אם במלאי`,
        body: `שלום רב,
        רציתי לדעת אם המכשיר:
        
        Xiaomi Mi Note 10 Lite 128GB 8GB RAM
        
        קיים כרגע במלאי? אשמח להגיע היום ולרכוש  אותו.
        
        בברכה,
        נפתלי`,
        isRead: Math.random() > 0.5,
        isMarked: Math.random() > 0.5,
        isSent: Math.random() < 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() > 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `admin`,
        composerEmail: `admin@elezino.co.uk`,
        subject: ` חייכם האישיים נמצאים בסכנה`,
        body: `היי!
        למרבה הצער, יש לי חדשות רעות בשבילך.
        לפני מספר חודשים קיבלתי גישה למכשיר שבו אתה משתמש לגלישה באינטרנט.
        מאז, אני עוקב אחר הפעילות שלך באינטרנט.
        בהיותי מבקר קבוע באתרים למבוגרים, אוכל לאשר כי אתה האחראי לכך.
        כדי לשמור על הפשטות, אתרי האינטרנט בהם ביקרת סיפקו לי גישה לנתונים שלך.
        העליתי סוס טרויאני על בסיס הנהג שמעדכן את חתימתו מספר פעמים ביום, כדי לאפשר לאנטי-וירוס לזהות אותו. בנוסף, זה נותן לי גישה למצלמה ולמיקרופון שלך.
        יתר על כן, גיביתי את כל הנתונים, כולל תמונות, מדיה חברתית, צ'אטים ואנשי קשר.
        ממש לאחרונה, הגעתי לרעיון מדהים ליצור את הווידאו שבו אתה גומר בחלק אחד של המסך, בזמן שהווידאו הושמע בו זמנית על מסך אחר. זה היה כיף!
        תהיו בטוחים שאוכל לשלוח את הסרטון בקלות לכל אנשי הקשר שלכם בכמה לחיצות, ואני מניח שתרצו למנוע את התרחיש הזה.
        עם זאת, הנה ההצעה שלי:
        העבר את הסכום השווה ל- 1200 דולר לארנק הביטקוין שלי, ואני אשכח מכל העניין. אני גם מוחק לצמיתות את כל הנתונים והסרטונים.
        לדעתי זה מחיר צנוע במקצת עבור עבודתי.
        אתה יכול להבין איך לרכוש ביטקוין באמצעות מנועי חיפוש כמו גוגל או בינג, לראות שזה לא מאוד קשה.
        ארנק הביטקוין שלי (BTC): 1BnrAjvQEecjXRNyMC1Z4ejkuEvJMjWFsK
        יש לך 48 שעות לשלם ועליך לזכור את הדברים הבאים:
        אין טעם להשיב לי - הכתובת נוצרה באופן אוטומטי.
        אין טעם להתלונן, מכיוון שלא ניתן לעקוב אחר המכתב יחד עם ארנק הביטקוין שלי.
        הכל מתוזמר במדויק.
        אם אי פעם אגלה שציינת משהו על מכתב זה בפני מישהו - הסרטון ישותף מייד, ואנשי הקשר שלך יהיו הראשונים שיקבלו אותו. לאחר מכן, הסרטון יפורסם באינטרנט!
        הזמן יתחיל ברגע שתפתח את המכתב הזה. (לתוכנית זו יש טיימר מובנה).
        בהצלחה והקל בזה! זה היה פשוט מזל רע, בפעם הבאה אנא היזהר.`,
        isRead: Math.random() > 0.5,
        isMarked: Math.random() > 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() < 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `Andrew, Soundsnap`,
        composerEmail: `hello@soundsnap.com`,
        subject: ` Sound Collections #58: Western Ways 🤠`,
        body: `Preview
 
        Soundsnap Home
        Your Weekly Collection
        Explore this curated sound set, hand-selected by professionals and ready to throw into your projects today!
         
        Western Ways
        Western Ways
        Westerns are one of the most time-honored genres in film and television.
        From tumbleweeds blowing to a raucous saloon, we have everything you need for any kind of cowboy story.
        `,
        isRead: Math.random() < 0.5,
        isMarked: Math.random() > 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() > 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `Storyblocks`,
        composerEmail: `hello@e.storyblocks.com`,
        subject: `  Start exploring your Storyblocks account`,
        body: `


        Easily organize your next project.
        
        With your new Storyblocks account, you can save and organize clips, download watermarked previews, and share custom folders with clients or teammates for feedback - no subscription required.
        
        Get Started
        `,
        isRead: Math.random() > 0.5,
        isMarked: Math.random() > 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() > 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `Google `,
        composerEmail: `no-reply@accounts.google.com`,
        subject: `  Security alert for your linked Google Account`,
        body: `Google
        New sign-in to your linked account
        Naphtali.r@reemail.com
        Your Google Account was just signed in to from a new Windows device. You're getting this email to make sure it was you.
        `,
        isRead: Math.random() < 0.5,
        isMarked: Math.random() < 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() > 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `ערוץ הקניות ספיישל`,
        composerEmail: `mail@21.tv`,
        subject: ` רגע לפני החורף 🎉🎉 ם מיוחדים וב-18 תשלומים ינלאומיים חכמים, מותאמים למגוון רמות וגילאים 🏃🏃 רק עד חצות! פרסומת`,
        body: `להלן חלק ממגוון השירותים שתמצאו באתר:
        https://www.21.tv/templates/newsletter/html2Send/newsletter_xu14dgdmjedcjm0baod31ej2nj0njc6xpgua.htm
        TV SHOP אמריקה - מוצרי הטלויזיה הנמכרים ביותר בעולם - בלעדי בערוץ הקניות !   VOD - אפשרות צפייה בסרטוני הדגמה של מוצרי ערוץ הקניות, בזמנך החופשי, מתי שנוח לך !   מגה דיל - מאות דילים חמים במחירים של מכירות קבוצתיות במכירה ליחידים.  המכרז האישי - אתה קובע את המחיר !  הדיל היומי – מגוון דילים ושוברים במחירים מפתיעים  שידור חי Live - צפיה בשידור החי של ערוץ הקניות , על מסך המחשב שלך`,
        isRead: Math.random() > 0.5,
        isMarked: Math.random() < 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() < 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `IMGBIN `,
        composerEmail: `admin@imgbin.com`,
        subject: `  Welcome to IMGBIN`,
        body: `Hello, thank you for becoming part of the IMGBIN community.

        Access Your Account
        
        IMGBIN contains over 12 million free to download transparent PNG resources. With your current account you can download 2 resources per day. If you need to download more than 2 images per day we recommend upgrading to a PREMIUM account.
        
        To find the best content we recommend browsing images by category or by color code.
        
        If you want to change your profile or password you can do that here.
        
        If you have any questions feel free to hit us up via our contact form.
        `,
        isRead: Math.random() < 0.5,
        isMarked: Math.random() > 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() > 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `Duolingo `,
        composerEmail: `no-reply@duolingo.com`,
        subject: ` 🧠 How Duolingo = 4 semesters of university language classes`,
        body: `
        University-level learning made accessible
        At Duolingo, our mission is to bring high-quality language education to the world. Learn more about our proven effectiveness and explore new features to help accelerate your language learning!
        
        SEE THE STUDY RESULTS
        
        `,
        isRead: Math.random() > 0.5,
        isMarked: Math.random() > 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() > 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `תמיכה `,
        composerEmail: `customer@care.com`,
        subject: `  Please update your data`,
        body: `	
        PayPal
         
             חשבון PayPal שלך הוגבל.	 
             לקוח יקר,
        - אנו זקוקים לעזרתכם בפתרון בעיה בחשבונכם. כדי לתת לנו זמן לעבוד יחד על זה, הגבלנו באופן זמני את מה שאתה יכול לעשות בחשבונך עד לפתרון הבעיה.
        
        - אנו מבינים שזה עשוי להיות מתסכל לא לקבל גישה מלאה לחשבון PayPal שלך. אנו רוצים לעבוד איתך כדי להחזיר את חשבונך לשגרה במהירות האפשרית.
        
        מה הבעיה ?
        
        - אנו זקוקים למידע נוסף עליכם בכדי לעזור לכם לאשר את זהותכם.
        
        
        אמת את החשבון שלי 
        
        
        
        שלך בקרב לב,
        (סקאמרים מתחשבים)`,
        isRead: Math.random() < 0.5,
        isMarked: Math.random() > 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() < 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `beactive `,
        composerEmail: `team@beactive.co.il`,
        subject: ` מתרגשים להזמין אותך להכיר השקעה חברתית בעולם המשפט ◀◀ [פרסומת]`,
        body: `קהילת ביאקטיב יקרה,

        שמי אופיר סמו, אני מנהל את ביאקטיב, שייעודה לממן ולשפר את עולם המשפט בכלים של מימון המונים.
         
         
        unnamed_0
        לפני שנה וחצי פתחנו את אתר beactive ונתנו מקום לתובעים ונתבעים לגייס בעצמם מימון לקידום ההליך המשפטי שלהם. אנחנו מאוד גאים באתר ובשינוי החברתי שהוא מקדם בישראל ולכם יש חלק משמעותי מאוד בשינוי הזה.
         
        דווקא עכשיו בתקופת הקורונה, החלטתנו לקדם את החזון של האתר צעד נוסף ופתחנו באתר fundit (אתר ההשקעות של קבוצת headstart) - שני גיוסים להשקעה שהיא גם חברתית וגם רווחית.
        
        
        ▼▼▼
        הזדמנות להשקיע בחברה שתממן עשרות תובעים שנפגעו או נפצעו 
        ______2020-0...
        לפרטים נוספים והשקעה >>
        הזדמנות להשקיע בחברה שתממן עשרות תביעות עובדים שפוטרו 
        __1
        לפרטים נוספים והשקעה >>
        
        מדובר בשתי השקעות שהן גם חברתיות וגם רווחיות, הצופות תשואה שנתית של מעל 10% לשנה. בנוסף, ההשקעות נחשבות בסיכון נמוך יחסית משום שנבחרו מראש משרדי עורכי דין שאחוזי ההצלחה שלהם בתביעות נזיקין ודיני עבודה גבוהים מאוד.
         
        הגיוסים הוצגו למספר משקיעים אשר בדקו והשקיעו בעצמם. כעת פתחנו את הגיוסים לציבור כולו להשקעה במימון המונים ואנחנו מאפשרים לכם להיות חלק מעשרות ומאות משקיעים שישקיעו בשתי חברות שיממנו עשרות ומאות תובעים שזקוקים לסיוע ללכת לבית משפט ולממש זכויותיהם.
        unnamed_0
        
        לכל הצעה, שאלה ורעיון הקשור לאתר ולגיוסים להשקעה,
        אשמח כמובן לשמוע ofir@beactive.co.il
        
        שוב, תודה על השותפות לדרך.
        
        אופיר סמו- ברקת
        
         
        Fundit_Beact...`,
        isRead: Math.random() > 0.5,
        isMarked: Math.random() > 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() > 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `Freeletics`,
        composerEmail: `instructors@email.freeletics.com`,
        subject: ` How mindset training helps you get fitter`,
        body: `Athlete. There’s no denying the mind-body connection. That rush of positive emotions after a workout? There’s a reason for it: Physical fitness impacts your mental health. All the more reason to make training part of your lifestyle! With the Freeletics Coach, it’s easy. You get personalized workouts that match your level and fitness interests. The Coach expertly guides you on a progressive journey to reach your goal. Along the way, you’ll improve your overall health and develop a mindset that sets you up for a lifetime of success. Let’s get started`,
        isRead: Math.random() > 0.5,
        isMarked: Math.random() > 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() > 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `Carolyn Martin`,
        composerEmail: `carolyn@workable.com`,
        subject: `Get your employer brand ready for 2021`,
        body: `

        I know, I know – you don't need me to tell you a whole lot has happened this year. It's no big news that the events of 2020 have resulted in employee anxiety, workforce engagement issues, and a shift in candidate values, to say the least.
        
        You'd be hard-pressed to find a company whose employer brand didn't take a hit over the last 8 months. But through all the chaos, some talent attraction experts spent this time working tirelessly and creatively to reboot their employer brands from the inside out.
        
        So why not take an hour and learn how they're doing it? Tune into our webinar next Tuesday at 9am PT / 12pm ET.
        
        Hope you can make it,
        
        Carolyn
        Events @ Workable
        
        
        Workable,
        99 High St,
        Boston,
        MA`,
        isRead: Math.random() > 0.5,
        isMarked: Math.random() > 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() > 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `CCW Digital`,
        composerEmail: `info@ccwdigital.com`,
        subject: `Tips & Tricks For Cost-Effective CX Automation`,
        body: `
        Join us for our upcoming webinar: Automation Playbook: How To Instantly Empower Remote Agents & Personalize Customer Experiences on Thursday, October 29th, at 2PM ET. Register here: https://bit.ly/2GfpTuQ
        
        With COVID-19 transforming the customer service landscape, it’s more important than ever for contact centers to leverage automation to optimize agent experiences and meet customer needs quickly.
         
        But which tasks do you automate? How do you balance humans and technology, especially amid growth in digital engagement and work-from-home?
         
        In this exclusive webinar, we’ll share our “automation playbook” to reveal tips and tricks for quickly and cost-effectively automating contact center operations.
        
        Topics include:
        •    Top sources of agent frustration that you can mitigate cost-effectively
        •    Pitfalls to overcome in delivering a consistent, omnichannel experience
        •    Keys to elevating remote work by balancing human agents and AI
        •    Insight into a groundbreaking kit for helping growing contact centers level the playing field and deliver exceptional customer service, even on a budget
        
        Click here to check out all our upcoming webinars
        
        Best Regards,
        The CCW Digital Team
        www.customercontactweekdigital.com  |  info@ccwdigital.com`,
        isRead: Math.random() > 0.5,
        isMarked: Math.random() > 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() > 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `Syble at MemberPress`,
        composerEmail: `outreach@caseproof.com`,
        subject: `🤓 You Can Create Courses Easily`,
        body: `Hi Naphtali,

        Even before COVID-19, e-learning was surging in popularity — becoming a great model for online businesses. However, building online courses from scratch can be tricky, even for experienced developers.
        
        Thanks to the MemberPress Courses visual builder, that's all changed. In this week's article, we’ll give you a quick overview of MemberPress Courses and show you how easy it is to build your curriculum visually and sell your courses online.
        
        
        Check it out: How to Build Your Curriculum Visually with MemberPress Courses
        
        Syble Harrison
        MemberPress`,
        isRead: Math.random() > 0.5,
        isMarked: Math.random() > 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() > 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `do-not-reply`,
        composerEmail: `do-not-reply@tailorbrands.com`,
        subject: `Reset password instructions`,
        body: `
        Someone has requested a link to change your password. You can do this through the link below.
        
        Change my password
        
        If you didn't request this, please ignore this email.
        
        Your password won't change until you access the link above and create a new one.
        
        
        `,
        isRead: Math.random() > 0.5,
        isMarked: Math.random() > 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() > 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `Product School`,
        composerEmail: `events@productschool.com`,
        subject: `ProductCon is happening without you!`,
        body: `
        Hi Naphtali,
        
        #ProductCon is about to get underway, but you haven't completed your registration. To join the event, you need to register on Hopin now - it's free and only takes 7 seconds.
        
        REGISTER HERE
        
        See you there!
        
        Product School Team
        
        --`,
        isRead: Math.random() > 0.5,
        isMarked: Math.random() > 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() > 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `Michael Stelzner`,
        composerEmail: `michael@socialmediaexaminer.com`,
        subject: `Instagram Content Strategy: Creating Content That Draws Customers`,
        body: `two things to end your week:

        #1: New Pinterest Tools: What Marketers Need to Know (Live on YouTube)
        We're about to go live (10am Pacific / 1pm Eastern) to explore Pinterest’s newest suite of merchant tools to help marketers and retailers reach customers this holiday season, and more with special guest Jennifer Priest. Join us!
        
        #2: Instagram Content Strategy: Creating Content That Draws Customers to You (Listen on Apple Podcasts | Google Podcasts)
        Looking for a strategy to create conversion-focused content on IG? Explore how to attract your ideal clients with a threefold content strategy, discover how to develop captions that work, and find tips for posting frequency and audience engagement.
        
        Sponsor:
        
        B2B Marketer’s Guide for Account-Based Marketing
        The best ABM strategies are important to business success. With the right technology and processes in place, any company--regardless of size or industry--can implement a marketing strategy that delivers results. Download this guide to learn how to execute and enhance ABM in your business today.
        
        
        Mike Stelzner - Founder and CEO`,
        isRead: Math.random() > 0.5,
        isMarked: Math.random() > 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() > 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `Hadar Shemesh`,
        composerEmail: `hello@accentsway.com`,
        subject: ` Feeling judgy, Lital?`,
        body: `
        Lital,
        
        When I was 6 years old, I had a fear of elevators.
        I was certain that the moment the doors closed the elevator cable would rip and we’d sink down. What a lovely thought for a 6-year-old.
        
        I remember having those obsessive repetitive thoughts about elevators every time I would have to get into one, visualizing every possible scenario.
        
        My aunt used to live on the 6th floor.
        Now, back when I grew up (in Petach-Tikva, the city of lights) a building with 6 floors was something you didn't see every day, so there weren’t a lot of elevators.
        (lol, makes me feel so ancient)
        
        So on the days we would go visit her, I’d start talking about how much I needed to ‘work out’ and move my muscles, so my family wouldn't question me when I took the stairs instead of the elevator.
        See - I really did spend a lot of time thinking about this.
        
        By the way, this is me around that age with my cheerful family 😂 :
        `,
        isRead: Math.random() > 0.5,
        isMarked: Math.random() > 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() > 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `Michal from Anima`,
        composerEmail: `michalc@animaapp.com`,
        subject: `Introducing Anima 4.0`,
        body: `
        The day’s finally here! Anima 4.0 is live and we’re so excited to share it with you.
        
        Anima 4.0 takes design-to-development collaboration to the next level.
        
        Here’s what makes this latest release so special:     
             
        Responsive high-fidelity prototypes: whether you’re using Figma, Sketch, or Adobe XD - Anima help you build prototypes that feel like the real deal, from your design tool. 
        Developer-friendly code: developers can now cherry-pick design elements and instantly transform into clean React/HTML/JS/CSS code!
        Code overrides: Fine-tune individual components so your work perfectly adheres to your codebase guidelines. 
        
        But there’s so much more! Click here to get the full run-down on everything that’s new in Anima 4.0.
        
        As always, we’d love your feedback, so take Anima 4.0 for a spin and tell us what you think.
        
        Cheers,
        Michal
        `,
        isRead: Math.random() > 0.5,
        isMarked: Math.random() > 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() > 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `Taboola Events`,
        composerEmail: `no-reply@zoom.us`,
        subject: `Reminder: Black Lives Matter and the Creative Industries: What Can We Achieve in 2021? starts in 1 hour`,
        body: `

        This is a reminder that "Black Lives Matter and the Creative Industries: What Can We Achieve in 2021?" will begin in 1 hour on:
        Date Time: Oct 29, 2020 04:00 PM Greenwich Mean Time
        
        Join from a PC, Mac, iPad, iPhone or Android device:
        Click Here to Join
        Note: This link should not be shared with others; it is unique to you.
        Add to Calendar   Add to Google Calendar   Add to Yahoo Calendar
        
        Or join by phone:
        
        US: +1 346 248 7799 or +1 669 900 6833 or +1 929 205 6099 or +1 253 215 8782 or +1 301 715 8592 or +1 312 626 6799
        United Kingdom: +44 203 901 7895 or +44 208 080 6591 or +44 208 080 6592 or +44 330 088 5830 or +44 131 460 1196 or +44 203 481 5237 or +44 203 481 5240
        Webinar ID: 967 1002 3113
        International numbers available: https://zoom.us/u/adM5dMGjKI
        
        `,
        isRead: Math.random() > 0.5,
        isMarked: Math.random() > 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() > 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: `Airbnb `,
        composerEmail: `discover@airbnb.com`,
        subject: `אנחנו מעדכנים את התנאים שלנו`,
        body: `שלום נפתעעעעעעעלי,

        הקהילה והחזון שלנו לנסיעות ממשיכים לגדול, לכן אנחנו מעדכנים את התנאים וההגבלות, התנאים וההגבלות בנושא תשלומים, מדיניות הפרטיות, מדיניות האי-אפליה, מדיניות הביטולים בנסיבות מקלות וחלק מהתנאים האחרים שלנו (להלן "תנאים"‏).‏
        
        התנאים המעודכנים ייכנסו לתוקף ב-20 בינואר 2021 למשתמשים קיימים. החל מתאריך זה, כדי לבצע הזמנות או לנהל אותן יהיה עליך להסכים לתנאים המעודכנים. כמו כן, מאותו תאריך ואילך, השימוש שלך בפלטפורמה של Airbnb יהיה כפוף אוטומטית למדיניות הפרטיות המעודכנת‏.
        
        הסבר על השינויים בתנאים ובמדיניות זמין בדף העדכון של התנאים‏. עליך לקרוא את התנאים המעודכנים במלואם. ניתן גם להדפיס אותם. לא רוצה להסכים לתנאים המעודכנים? בכל עת ניתן לסיים את ההסכם עם Airbnb על ידי מחיקת חשבונך.‏
        
        תודה שבחרת להיות חלק מהקהילה שלנו‏.
        
        בברכה,
        צוות ‏Airbnb
        
        `,
        isRead: Math.random() > 0.5,
        isMarked: Math.random() > 0.5,
        isSent: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        isTrash: Math.random() > 0.5,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    }
]

var sampleComposers = ['Naphtali', 'Idan', 'Eyal'];
var sampleEmails = ['Naphtali@play588.com', 'IdanDaMan@peevr.com', 'Eyalzor@pnrep.com']
var gUnreads = {};
var gEmails;

export const emailService = {
    getEmailsToDisplay,
    deleteEmail,
    getEmailById,
    toggleEmailMark,
    toggleEmailRead,
    getEmptyEmail,
    saveEmailDraft,
    saveEmailSent,
    setSortEmailsBy,
    updateUnreads
}

getEmailsToDisplay(null)

function setSortEmailsBy(sortBy = 'date') {
    const sorter = (sortBy === 'date') ? 'sentAt' : ((sortBy === 'name') ? 'composer' : 'subject')
    gEmails.sort((a, b) => {
        let email1 = (typeof a[sorter] === 'string') ? a[sorter].toLowerCase() : a[sorter];
        let email2 = (typeof b[sorter] === 'string') ? b[sorter].toLowerCase() : b[sorter];
        return ((email1 > email2) ? -1 : ((email1 < email2) ? 1 : 0));
    });
    saveEmailsToStorage();
    return Promise.resolve(gEmails)
}

function toggleEmailMark(emailId) {
    return getEmailById(emailId)
        .then(res => {
            res.isMarked = !res.isMarked;
            saveEmailsToStorage();
        })
}

function toggleEmailRead(emailId) {
    return getEmailById(emailId)
        .then(res => {
            res.isRead = !res.isRead;
            saveEmailsToStorage();
        })
}

function getEmailsToDisplay(filterBy) {
    gEmails = loadEmailsFromStorage();
    if (!gEmails || gEmails.length < 1) {
        gEmails = defaultEmails
    }
    saveEmailsToStorage();
    var emails;
    if (!filterBy) {
        emails = gEmails.filter(mail => !mail.isTrash)
        return Promise.resolve(emails);
    } else if (filterBy === '!isRead') {
        emails = gEmails.filter(email => {
            return !email.isRead
        })
    } else {
        emails = gEmails.filter(email => {
            return email[filterBy]
        })
    }
    return Promise.resolve(emails);
}

function saveEmailDraft(email) {
    email.isDraft = true;
    gEmails.unshift(email)
    saveEmailsToStorage();
    return Promise.resolve(email);
}

function saveEmailSent(email) {
    email.isSent = true;
    email.isDraft = false;
    gEmails.unshift(email)
    saveEmailsToStorage();
    return Promise.resolve(email);
}

function deleteEmail(id) {
    return getEmailIdxById(id).then(index => {
        if (!gEmails[index].isTrash) {
            gEmails[index].isTrash = true;
            saveEmailsToStorage();
            return gEmails[index].id; // returns promise
        }
        if (index === null) return
        gEmails.splice(index, 1)
        saveEmailsToStorage();
        return index
    })
}

function getEmailById(id) {
    const email = gEmails.find(email => email.id === id)
    return Promise.resolve(email);
}

function getEmailIdxById(id) {
    const index = gEmails.findIndex(email => email.id === id)
    if (index === -1) return Promise.reject(null)
    return Promise.resolve(index);
}

function saveEmailsToStorage() {
    updateUnreads();
    storageService.saveToStorage(EMAIL_STORAGE_KEY, gEmails)
}

function loadEmailsFromStorage() {
    return storageService.loadFromStorage(EMAIL_STORAGE_KEY)
}

function getEmptyEmail() {
    var randNum = utilService.getRandomInt(0, sampleComposers.length)
    return {
        composer: sampleComposers[randNum],
        composerEmail: sampleEmails[randNum],
        toName: '',
        subject: '',
        body: '',
        isRead: false,
        isMarked: false,
        isSent: false,
        isDraft: false,
        isTrash: false,
        sentAt: new Date(),
        id: utilService.makeId(11)
    }
}

function updateUnreads() {
    if (gEmails) {
        var reads = gEmails.reduce(function(acc, email) {
            var currStatus = acc[email.isRead];
            acc[email.isRead] = (!currStatus) ? 1 : currStatus + 1;
            return acc;
        }, {})
        gUnreads.unRead = reads.false
        return reads.false
    } else return 0
}

function getUnreadsAmount() {
    var count = 0;
    gEmails.forEach(email => {
        if (!email.isRead) count++
    })
    return count;
}

// var res = employees.reduce(function(acc, employee) {
//     var exp = employee.yearsExperience;
//     var dept = employee.department;
//     if (!acc[dept]) acc[dept] = 0;
//     acc[dept] += exp;
//     return acc;
// }, {});