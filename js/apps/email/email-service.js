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
        isRead: true,
        isMarked: false,
        isSent: true,
        isDraft: false,
        isTrash: false,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: 'Qwertee Daily Tee-Mail‏',
        composerEmail: 'newsletter@qwertee.com',
        subject: `UGLY CHRISTMAS SWEATERS NOW ON SALE! £13/€16/$16 LIMITED TIME!`,
        body: `Welcome to your new and improved Daily Tee-Mail from Qwertee. As always we have 3 great new limited edition designs that are about to go live in a few minutes on www.qwertee.com when the timer hits zero on the homepage that we wanted to share just with you. But better still, as a much appreciated Daily Tee-Mail reader you now get an exclusive discount code EVERY DAY to get €1/£1/$1 off any of Today's Tees. Just use the code 2LKFEM5C7Q7WP when checking out to get your discount. PS this code will only work for you and expires when Today's Daily Tees have finished being on Sale. But don't worry, there will be a new code for you with tomorrow's Daily Tee-Mail also:)`,
        isRead: true,
        isMarked: false,
        isSent: false,
        isDraft: false,
        isTrash: false,
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
        isRead: false,
        isMarked: true,
        isSent: false,
        isDraft: false,
        isTrash: false,
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
        isRead: true,
        isMarked: true,
        isSent: false,
        isDraft: false,
        isTrash: false,
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
        isRead: false,
        isMarked: true,
        isSent: false,
        isDraft: false,
        isTrash: false,
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
        isRead: false,
        isMarked: false,
        isSent: true,
        isDraft: false,
        isTrash: false,
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
        isRead: false,
        isMarked: false,
        isSent: false,
        isDraft: false,
        isTrash: true,
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
        isRead: true,
        isMarked: false,
        isSent: false,
        isDraft: false,
        isTrash: false,
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
        isRead: false,
        isMarked: false,
        isSent: false,
        isDraft: false,
        isTrash: false,
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
        isRead: true,
        isMarked: true,
        isSent: false,
        isDraft: false,
        isTrash: false,
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
        isRead: false,
        isMarked: true,
        isSent: false,
        isDraft: false,
        isTrash: true,
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
        isRead: true,
        isMarked: false,
        isSent: false,
        isDraft: false,
        isTrash: false,
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
        isRead: false,
        isMarked: false,
        isSent: false,
        isDraft: false,
        isTrash: false,
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
        isRead: true,
        isMarked: false,
        isSent: false,
        isDraft: false,
        isTrash: true,
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
        isRead: false,
        isMarked: false,
        isSent: false,
        isDraft: false,
        isTrash: false,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },

]

var sampleComposers = ['Naphtali', 'Idan', 'Eyal'];
var sampleEmails = ['Naphtali@play588.com', 'IdanDaMan@peevr.com', 'Eyalzor@pnrep.com']
var gUnreads = []
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
    getUnreadsAmount
}

function setSortEmailsBy(sortBy = 'date') {
    const sorter = (sortBy === 'date') ? 'sentAt' : ((sortBy === 'name') ? 'composer' : 'subject')
    gEmails.sort((a, b) => {
        let email1 = (typeof a[sorter] === 'string') ? a[sorter].toLowerCase() : a[sorter];
        let email2 = (typeof b[sorter] === 'string') ? b[sorter].toLowerCase() : b[sorter];
        return ((email1 > email2) ? -1 : ((email1 < email2) ? 1 : 0));
    });
    saveEmailsToStorage();

    console.log('resolving gmails...', gEmails)
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
        console.log('EYAL! Here is my index!', index)
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

function updateUnreads(status) {
    console.log(gEmails)
    var emailsReadMap = 0
    return
}

function getUnreadsAmount() {

}