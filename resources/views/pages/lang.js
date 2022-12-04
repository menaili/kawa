const languages = document.getElementById("languages");
const text = document.querySelectorAll("[titre]");
const navigation = document.getElementById("navbar");
const sublist = document.querySelector(".ourservice");
const about = document.querySelector(".about");
let transslation = {

	ar: {
        home: "الرئيسية",
        services: "خدماتنا",
        sponsor:"التسويق",
        web: "الويب",
        App: "تطبيقات الهاتف",
        team: "فريقنا",
        partner : "شركاؤنا",
        about: "حول",
        contact: "اتصل بنا",
        design: "التصميم",
        abouttitle: "حول",
        store:"متاجر الكترونية",
        hosting:"استضافة",
        follow: "تابعنا",
        more : "المزيد",
        logo : "شعار",
        add: "العنوان",
        cover:"اغلفة",
        help : "كيف نقوم بمساعدتك؟",
        app_text_header:"انشئ تطبيقك الخاص مع كاوا ",
        privacy:"سياسة الخصوصية ",
        web_text_header:"هل تريد موقع الكتروني ؟ نحن في خدمتك",
        posts: "منشورات فايسبوك و انستغرام",
        store_text_header: " تريد موقع الكتروني لتسيير نشاطك التجاري ؟  كاوا تملك الحل  ",
        design_text: "اذا كنت تريد تصميما لشعارك او منشورك على الفايسبوك لاتتردد في التواصل مع  فريق كاوا"
    },
	en :{
        home: "Home",
        services: "Services",
        sponsor:"Degital Marketing",
        web: "Web",
        App: "App",
        team: "Team",
        feedback: "Feedback",
        partner : "Partner",
        about: "About",
        contact: "Contact",
        design: "Design",
        store: "Online Store",
        hosting:"Hosting",
        add:"Address",
        follow:"Follow Us",
        more : "More",
        privacy: "Privacy policy",
        cover: "Cover",
        logo : "Logo",
        posts: "Instagram/Facebook Post",
        abouttitle:"About Us",
        app_text_header:"Create your own app with KAWA",
        help: "How we can help you ?",
        store_text_header: "you need Store to selling your products ? you are in the right palce ",
        web_text_header: "you need a web site for your business? Kawa have the best solution",
        design_text: "For any Logo, Facebook and Instagram Post Contact Kawa Team"
    },
    fr :{
        home: "Acceuil",
        services: "Services",
        sponsor:"Sponsor",
        web: "Web",
        App: "App",
        team: "Equipe",
        feedback: "Commantaires",
        partner : "Partner",
        about: "Apropos",
        contact: "Contactez Nous",
        design: "Designe",
        store: "Boutique En line",
        hosting:"Hebergement",
        follow : "Suivez Nous",
        cover:"Couverture",
        more: "Plus",
        app_text_header:"Créez votre app mobile avec KAWA ",
        help : "Comment povons-nous vous aider ?",
        web_text_header: "Vous avez bousoin d'un site web ? conntactez Kawa",
        logo : "Logo",
        abouttitle:" A propos ",
        privacy:"Politique de confidentialité",
        add:"Adresse",
        posts: "Instagram/Facebook Pub",
        store_text_header: "Vous avez bousoin d'un site e-commerce pour votre business ? Kawa ont La milleur solution ",
        design_text: "si vous avez bousoin d'un logo professionel contact Kawa "
    }
	}
		
function mylanguage(){
    if (languages.value=="ar") {
        console.log("ar");
        navigation.classList.add("arab");
        sublist.classList.add("arab");
    }else{
        navigation.classList.remove("arab");
        sublist.classList.remove("arab");
    }

        text.forEach(txt =>{
            txt.textContent = transslation[languages.value][txt.getAttribute('titre')] ;})
       
    }