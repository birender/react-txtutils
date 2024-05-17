import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articals = [
        {
          "source": {
            "id": null,
            "name": "News18"
          },
          "author": "sahas, Buzz Staff",
          "title": "Australian Doctor Claims He Beat Brain Cancer With Own Experimental Research: 'I'm Thrilled' - News18",
          "description": "In 2023, Professor Richard Scolyer purportedly became the first brain cancer patient to receive the pre-surgery combination treatment.",
          "url": "https://www.news18.com/viral/australian-doctor-beats-brain-cancer-with-own-experimental-research-im-thrilled-8890820.html",
          "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/05/untitled-design-2024-05-15t095245.428-2024-05-336323c25a62c40133fad0d6b60f2955-16x9.png?impolicy=website&width=1200&height=675",
          "publishedAt": "2024-05-15T10:22:47Z",
          "content": "Australian doctor Professor Richard Scolyer is celebrating a year of being cancer free after purportedly undergoing a groundbreaking treatment based on his own research. Last year, while in Poland, h… [+2673 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT News Desk",
          "title": "'Lackadaisical approach': Supreme Court slams Uttarakhand govt over forest fires - Hindustan Times",
          "description": "Uttarakhand forest fire: The Supreme Court also sought an explanation from the Uttarakhand government on why central funds were not utilised for dousing fires | Latest News India",
          "url": "https://www.hindustantimes.com/india-news/no-forest-officials-for-election-duty-supreme-courts-tough-stance-on-uttarakhand-fires-101715764772507.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/05/15/1600x900/Uttarakhand_forest_fire_1715764981564_1715764981766.jpg",
          "publishedAt": "2024-05-15T09:36:39Z",
          "content": "The Supreme Court on Wednesday summoned the Uttarakhand chief secretary to appear before it on May 17 over the lackadaisical approach shown by the Uttarakhand government in tackling fires.\r\nNDRF pers… [+2447 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": "NDTV Sports Desk",
          "title": "IPL Playoffs Chances In Percentage: SRH 87.3%, CSK 72.7%, RCB... - NDTV Sports",
          "description": "Kolkata Knight Riders and Rajasthan Royals have already sealed two spots in the IPL 2024 playoffs",
          "url": "https://sports.ndtv.com/ipl-2024/ipl-2024-playoffs-scenarios-more-than-rcb-or-csk-this-team-has-87-3-per-cent-chance-to-advance-5668095",
          "urlToImage": "https://c.ndtvimg.com/2024-05/qdp15pj_virat-kohli-and-ms-dhoni-bcci_625x300_15_May_24.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
          "publishedAt": "2024-05-15T09:17:00Z",
          "content": "The IPL 2024 Playoffs race now has five teams vying for two available slots. Kolkata Knight Riders and Rajasthan Royals have already sealed two spots. That leaves five teams - Chennai Super Kings, Ro… [+2653 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "India Today"
          },
          "author": "India Today News Desk",
          "title": "Swati Maliwal assault: BJP's stir outside Arvind Kejriwal's home, Opposition mum - India Today",
          "description": "The BJP intensified its attack on the AAP following allegations of assault leveled by AAP MP Swati Maliwal with party members staging a protest near Delhi Chief Minister Arvind Kejriwal039s home demanding a probe into the incident",
          "url": "https://www.indiatoday.in/india/story/swati-maliwal-assault-allegation-bibhav-kumar-arvind-kejriwal-bjp-protest-akhilesh-yadav-kharge-evade-question-2539405-2024-05-15",
          "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/swati-maliwal-assault-bjp-protest-152222819-16x9_0.jpg?VersionId=5BbyoAAHO6vVfkyYjbKNUBxPiBiiGpsz",
          "publishedAt": "2024-05-15T08:42:15Z",
          "content": "The BJP stepped up its attack on the Aam Aadmi Party (AAP) on Wednesday, demanding a thorough investigation into the alleged assault on AAP Rajya Sabha MP Swati Maliwal at Delhi Chief Minister Arvind… [+2255 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Heart: Uncommon Signs Of High Blood Sugar Levels In Summer - NDTV",
          "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
          "url": "https://www.ndtv.com",
          "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
          "publishedAt": "2024-05-15T08:29:36Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Deccan Herald"
          },
          "author": "DH Web Desk",
          "title": "What is India's new Covid variant 'FLiRT' and how to stay safe from it - Deccan Herald",
          "description": null,
          "url": "https://www.deccanherald.com/health/healthcare/what-is-indias-new-covid-variant-flirt-and-how-to-stay-safe-from-it-3023398",
          "urlToImage": "https://images.deccanherald.com/deccanherald%2F2024-05%2F6f527fdc-a6e3-4e81-bfc7-db56ad0e02c9%2Fcoronavirus_istock_2_1055430_1638095759.png?rect=0%2C0%2C1280%2C672&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
          "publishedAt": "2024-05-15T08:17:26Z",
          "content": "KP.2 is a descendent of the Omicron JN.1 strain and is surpassing JN.1 in countries such as the United States of America and the United Kingdom. Covid cases of FLiRT have been spreading quickly in th… [+1745 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Janhvi Kapoor Sure Is Having A Ball Of A Time In A White Floral Saree With A Cricket-Themed Purse - NDTV",
          "description": "For the promotions of Mr and Mrs Mahi, Janhvi Kapoor gave a desi spin to method dressing in a white floral saree with a cricket ball purse",
          "url": "https://www.ndtv.com/lifestyle/janhvi-kapoor-sure-is-having-a-ball-of-a-time-for-mr-and-mrs-mahi-promotions-by-pairing-her-white-floral-saree-with-a-silver-cricket-themed-bag-5667529",
          "urlToImage": "https://c.ndtvimg.com/2024-05/degld1vo_fashion_625x300_15_May_24.jpg",
          "publishedAt": "2024-05-15T07:58:13Z",
          "content": "Janhvi Is Having A Ball Of A Time In A Floral Saree With A Cricket Purse\r\nJanhvi Kapoor's wadrobe doesn't fall short when it comes to stunning ethnic style. Everywhere she goes, she carries elegance … [+1711 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Quint"
          },
          "author": "Quint Entertainment",
          "title": "Kartik Aaryan Unveils First Poster Of 'Chandu Champion' - The Quint",
          "description": "Kartik Aaryan took to social media on Wednesday, 15 May, to unveil the first poster of his upcoming movie Chandu Champion. The poster features Kartik running on a field. The caption on the poster reads, \"The man who refused to surrender.\"",
          "url": "https://www.thequint.com/entertainment/bollywood/kartik-aaryan-unveils-first-poster-of-chandu-champion",
          "urlToImage": "https://images.thequint.com/thequint%2F2024-05%2F67eb5689-d742-4a33-ab79-1ec801600846%2Fkartik.jpg?rect=0%2C17%2C900%2C473",
          "publishedAt": "2024-05-15T07:39:59Z",
          "content": "Captioning the post on Instagram Kartik wrote, \"Champion Aa Raha Hai...(Champion is coming). Super excited and proud to share the first poster of the most challenging and special film of my career. C… [+460 chars]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "The Times of India",
          "title": "Ricky Ponting, Stephen Fleming on BCCI's radar for India head coach job: Report - The Times of India",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMingFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9zcG9ydHMvY3JpY2tldC9uZXdzL3JpY2t5LXBvbnRpbmctc3RlcGhlbi1mbGVtaW5nLW9uLWJjY2lzLXJhZGFyLWZvci1pbmRpYS1oZWFkLWNvYWNoLWpvYi1yZXBvcnQvYXJ0aWNsZXNob3cvMTEwMTQwNjk4LmNtc9IBogFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9zcG9ydHMvY3JpY2tldC9uZXdzL3JpY2t5LXBvbnRpbmctc3RlcGhlbi1mbGVtaW5nLW9uLWJjY2lzLXJhZGFyLWZvci1pbmRpYS1oZWFkLWNvYWNoLWpvYi1yZXBvcnQvYW1wX2FydGljbGVzaG93LzExMDE0MDY5OC5jbXM?oc=5",
          "urlToImage": null,
          "publishedAt": "2024-05-15T07:30:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "\"Arrest Void\": Supreme Court Orders Immediate Release Of NewsClick Founder - NDTV",
          "description": "The Supreme Court has ordered the release of NewsClick editor Prabir Purkayastha, declaring that his arrest by the Delhi Police under the anti-terror law was illegal.",
          "url": "https://www.ndtv.com/india-news/supreme-court-orders-immediate-release-of-newsclick-founder-5666726",
          "urlToImage": "https://c.ndtvimg.com/2023-10/kd4gp7fg_newsclick-founder-prabir-purkayastha_625x300_10_October_23.jpg",
          "publishedAt": "2024-05-15T07:21:00Z",
          "content": "Prabir Purkayastha case: He was arrested on October 3 last under the UAPA law. (File)\r\nNew Delhi: The Supreme Court has ordered the release of NewsClick founder Prabir Purkayastha, declaring that his… [+2410 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Senior Vigilance Officer Dies After Lift Collapses In Rajasthan Mine - NDTV",
          "description": "A senior vigilance officer at Hindustan Copper Limited died after a lift collapsed at the Kolihan mine in Rajasthan's Jhunjhunu district late last night. The lift collapse at the copper mine had trapped 15 persons, including the vigilance team.",
          "url": "https://www.ndtv.com/india-news/14-feared-trapped-in-rajasthan-mine-as-lift-carrying-vigilance-team-crashes-5665728",
          "urlToImage": "https://c.ndtvimg.com/2024-05/q76t4os8_kolihan-mine-lift-crash_650x300_15_May_24.jpg?ver-20240506.08",
          "publishedAt": "2024-05-15T07:18:00Z",
          "content": "The copper mine at Khetri was established in 1967.\r\nJaipur: A senior vigilance officer at Hindustan Copper Limited died after a lift collapsed at the Kolihan mine in Rajasthan's Jhunjhunu district la… [+1600 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Indiaai.gov.in"
          },
          "author": null,
          "title": "NASA appoints their first Chief AI Officer, following the Executive Order - INDIAai",
          "description": "This appointment is made in accordance with President Biden’s Executive Order.",
          "url": "https://indiaai.gov.in/news/nasa-appoints-their-first-chief-ai-officer-following-the-executive-order",
          "urlToImage": "https://d12aarmt01l54a.cloudfront.net/cms/images/Media-20240515131255/1200-630.png",
          "publishedAt": "2024-05-15T07:11:42Z",
          "content": "NASA has named David Salvagnini its new chief artificial intelligence (AI) officer. David Salvaginini used to be NASAs chief data officer. His new role is an expansion of his current position. \r\nNASA… [+1685 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Moneycontrol"
          },
          "author": "Moneycontrol News",
          "title": "New Zealand investigating top Indian spice brands over contamination - Moneycontrol",
          "description": "MDH on April 28, assured consumers that its products are entirely safe and refuted the accusations made by food regulators in Hong Kong and Singapore of pesticide presence in certain items.",
          "url": "https://www.moneycontrol.com/news/business/new-zealand-looking-into-indian-spice-brands-over-contamination-12722641.html",
          "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/09/Indian-Spices-Pic-courtesy-Ratul-Ghosh.jpg",
          "publishedAt": "2024-05-15T07:05:24Z",
          "content": "New Zealand's food safety regulator on May 15 said it is investigating possible contamination in spice products of top Indian brands MDH and Everest after they faced scrutiny in other countries.\r\nThe… [+1918 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "PTI",
          "title": "Odisha records 75.68 per cent voter turnout in first phase polls on May 13: CEO - Hindustan Times",
          "description": "Odisha records 75.68 per cent voter turnout in first phase polls on May 13: CEO | Latest News India",
          "url": "https://www.hindustantimes.com/india-news/odisha-records-75-68-per-cent-voter-turnout-in-first-phase-polls-on-may-13-ceo-101715756659922.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/04/19/1600x900/India_Flag_1713518778477_1713518820010.jpeg",
          "publishedAt": "2024-05-15T07:04:19Z",
          "content": "Bhubaneswar/Koraput, Odisha's Chief Electoral Officer N B Dhal on Wednesday said the voter turnout in the first phase of polling in four Lok Sabha seats and 28 assembly segments in the state on May 1… [+2375 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "GSMArena.com"
          },
          "author": "Ivan",
          "title": "Sony Xperia 1 VI is here - SD 8 Gen 3, better zoom and more conventional screen - GSMArena.com news - GSMArena.com",
          "description": "The Xperia 1 VI ditched what it didn't need and made the rest better. Coming in June for €1,399. The Sony Xperia 1 VI is official and it's looking like a...",
          "url": "https://www.gsmarena.com/sony_xperia_1_vi_is_here__sd_8_gen_3_better_zoom_but_ditches_the_4k_screen-news-62863.php",
          "urlToImage": "https://fdn.gsmarena.com/imgroot/news/24/05/sony-xperia-1-vi-official/-952x498w6/gsmarena_006.jpg",
          "publishedAt": "2024-05-15T07:00:01Z",
          "content": "The Sony Xperia 1 VI is official and it's looking like a welcome refinement of the Xperia 1 V formula.\r\nThe biggest change is the move away from the staple 4K OLED in its cinema 21:9 aspect ratio and… [+2924 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT News Desk",
          "title": "Kanpur: 10 schools get bomb blast threat through emails - Hindustan Times",
          "description": "Kanpur: The emails have come through servers based in Russia. | Latest News India",
          "url": "https://www.hindustantimes.com/india-news/kanpur-10-schools-get-bomb-blast-threat-through-emails-101715755984642.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/05/15/1600x900/PTI05-13-2024-000332B-0_1715756981933_1715757026204.jpg",
          "publishedAt": "2024-05-15T06:54:02Z",
          "content": "At least 10 schools in Kanpur received threatening emails on Wednesday, triggering panic in the city. This comes amid a spate of such emails threatening schools and hospitals with bomb blasts in seve… [+2602 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": null,
          "title": "S Jaishankar: India backs port deal with Iran after US caution - BBC.com",
          "description": "The US has imposed more than 600 sanctions on Iran-related entities over the past three years.",
          "url": "https://www.bbc.com/news/world-asia-india-69013435",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1575D/production/_133310978_gettyimages-2123623696.jpg",
          "publishedAt": "2024-05-15T06:49:25Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "Dipti Mudaliar",
          "title": "Cannes 2024 Red Carpet: Meryl Streep rocks earrings from an Indian jeweller - Hindustan Times",
          "description": "Meryl Streep dazzles at Cannes Film Festival in a unique ensemble featuring Indian designer Hanut Singh's jewellery",
          "url": "https://www.hindustantimes.com/htcity/htcity-showstoppers/cannes-2024-red-carpet-meryl-streep-rocks-earrings-from-an-indian-jeweller-101715752347310.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/05/15/1600x900/443498818_3786386758352195_6880444762709481591_n_1715752611528_1715752651426.jpg",
          "publishedAt": "2024-05-15T06:21:20Z",
          "content": "Tuesday night marked the official commencement of the 77th Cannes Film Festival, as celebrities graced the opulent Grand Theatre Lumiere's red carpet to honour Meryl Streep. The Hollywood legend was … [+1155 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Sun Unleashes Monster Solar Flare, Radio Blackouts Expected On Earth - NDTV",
          "description": "NASA said solar cycle 25 began is now approaching solar maximum - a period when eruptions like this one become more common.",
          "url": "https://www.ndtv.com/science/sun-unleashes-monster-solar-flare-radio-blackouts-expected-on-earth-5667001",
          "urlToImage": "https://c.ndtvimg.com/2024-05/vivnmlv8_xclass-flare-nasa_625x300_15_May_24.jpeg?ver-20240506.08",
          "publishedAt": "2024-05-15T06:07:03Z",
          "content": "The solar flare erupted from an active sunspot designated, AR3664.\r\nThe Sun released another powerful storm of energised particles on Tuesday - the strongest flare in the current solar cycle - that i… [+1785 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Who Was Colonel Waibhav Anil Kale, Ex-Indian Army Officer Killed In Gaza - NDTV",
          "description": "Colonel Waibhav Anil Kale (Retd), the Indian national who was working with the United Nations (UN) as a security service coordinator, was killed after the vehicle he was travelling in came under attack in Gaza's Rafah region.",
          "url": "https://www.ndtv.com/india-news/who-is-col-waibhav-anil-kale-ex-indian-army-officer-killed-in-gaza-5666604",
          "urlToImage": "https://c.ndtvimg.com/2024-05/lm45n6m_colwaibhavanil-kale-linkedin_625x300_15_May_24.jpeg?ver-20240506.08",
          "publishedAt": "2024-05-15T06:05:00Z",
          "content": "Colonel Waibhav Anil Kale spent over two decades in the armed forces.\r\nColonel Waibhav Anil Kale (Retd), the Indian national who was working with the United Nations (UN) as a security service coordin… [+1968 chars]"
        }
      ];
    constructor(){
        super()
        console.log("Constructor Calling");
        this.state = {
            articals : this.articals,
            loading:false
        };
    }
    render() {
        return (
            <div>
                <h2>Top headlines</h2>
                <div className="row">
                    {this.state.articals.map((element)=>{                        
                        let description = element.description == null?element.title:element.description;
                        return <div className="col-md-4">
                        <NewsItem title={`${element.title}`} description={`${description}`} urlImage={`${element.urlToImage}`} />
                    </div>      
                    })}
                </div>
            </div>
        )
    }
}

export default News
