const fs = require('fs-extra')
		path = require('path');

const random = (min, max) => (
	Math.random() * (max - min) + min
);

const randomLorem = (interestDescriptor = '', min = 150, max = 500) =>  (
	interestDescriptor + ' :: ' + fs.readFileSync(path.resolve(__dirname, '../', 'lorem-ipsum.txt'), 'utf8').split(/\n/).filter(Boolean).join('').split(/\s/gmi).slice(0, random(15, 150)).join(' ')
);

const getPosts = () => (
	{
		"queryInfo":{
			"totalRows":"541"
		},
		"resultset":[
			[
				"2050-12-31 09:03:06",
				"2050-12-31 06:01:28",
				15071,
				"soooooo ..... we are having a fb informational right now and it ' s blowing up 🎉 🎉 🎉 i love the excitement of helping others get healthy !!! if you want to peek in , send me a pm . i promise you will love it",
				null,
				null,
				null
			],
			[
				"1975-01-01 09:03:06",
				"1975-01-01 01:01:02",
				15070,
				"so glad to be home to watch miss skylar in all that she does ! she sure did a great job tonight and so did the whole team 🏀 😊 my heart is happy 💚 i can ' t wait till the boys get involved in sports !! proud of you skylar shilts 👍 🏼",
				null,
				null,
				null
			],
			[
				"2017-03-23 09:03:06",
				"2017-03-23 02:03:59",
				15069,
				"sappy mom post : i love my son ! he is such a precious gift to us , and i ' m getting all the cuddles and kisses and hugs full of moments ticking by that i can . time flies in light of eternity , and we only get a short while on this earth . hold your loved ones close , tell them how much they mean to you . be thankful for what you have ; there is always someone in greater need . worship and praise the lord , because he is the center of all and still thinks of us so uniquely and intentionally . he made us to love and be loved by him ! so love today ; spread his peace , his compassion , his passion for every person . it ' s free !",
				null,
				null,
				null
			],
			[
				"2017-03-22 06:03:46",
				"2017-01-22 01:01:12",
				14820,
				"la traviata tonight - volunteering . 😊 💖 🎼",
				null,
				null,
				null
			],
			[
				"2017-03-22 06:03:46",
				"2017-02-03 02:02:51",
				14819,
				"so , today has been chill since my new older sister in law angeline moved here permanently with my older brother . no arguments whatsoever because i don ' t get involved in cat fights . we are all brothers and sisters and we do love each other . yeesh !",
				null,
				null,
				null
			],
			[
				"2017-03-22 06:03:46",
				"2017-01-24 08:01:30",
				14818,
				"does your company offer you a $4,000 cash bonus ( on top of your commissions ) when you and your team reach $4,000 in sales for the month ? do they offer you $12,000 cash when y ' all reach $12,000 in sales for the month ( on top of earning your luxury car and your commissions ) ? what about $40,000 ? $80,000 ? $200,000 ? mine does and i have room to show you how to earn those ! how could that money change your life ? did you know it ' s earned by helping others get their lives back ? oh , it ' s also free to promote and you can earn your product for free . #thereaintathingbetter #trieditallbefore #trustme",
				null,
				null,
				null
			],
			[
				"2017-03-22 06:03:46",
				"2017-03-22 11:03:47",
				14817,
				"comment below which number ( s ) you pick ! 👇 🏽 👇 🏽 ( 1 ) have an extra $500 a month 💵 ( 2 ) go on a girls trip this year 🚢 🌴 ( 3 ) pay off a credit card 🎉 ( 4 ) be a stay at home parent 👪 ( 5 ) save for your children ' s college 💰 ( 6 ) take your family to disney ✈️ 🏰 ( 7 ) give back to the community 💚 ( 8) fire your boss 😃 ( 9 ) upgrade your iphone 📲 ( 10 ) cover the cost of childcare 👫 ( 11 ) hire a housekeeper 💁 ( 12 ) pay off your car 🚘 🚘 🚘 ( 13 ) never wake up to an alarm again ⏰ ( 14 ) pay cash for a new car 💰 💰 💰 ( 15 ) pay off your mortgage 💸 🏠 ( 16 ) give back to your parents 👫 💚 🙏 ( 17 ) purchase your dream home 🏡 🏡 🏡 ( 18) pay off your student loans 🎓",
				null,
				null,
				null
			],
			[
				"2017-03-22 06:03:45",
				"2017-03-09 08:03:15",
				14816,
				"!!️ 👑 👑 i have four spots open for loyal customers / models who want to do a 90 day mermaid and / or weight loss challenge , also want to work together and track your results so i can start building my own inventory to share . ☺️ you will also be getting my 40 % discount for being my loyal . like / comment . 😻 🔥 !!️ all of our ingredients our natural and not filled with harmful ingredients , but ; with super foods and antioxidants ingredients that are good for you . 👑 💚 ☝ 🏽 hsn ( mermaid challenge ) greens / fat fighters ( weight loss challenge ) just imagine all the inspirational texts and messages you will receive from me to make sure your on the right track . 😻 😁 ☝ 🏽 i ' m here to help guide and support you through your journey as well . 😌",
				null,
				null,
				null
			],
			[
				"2017-03-22 06:03:45",
				"2017-03-02 06:03:44",
				14815,
				"you don ' t know tired if you don ' t have a child . ijs . there are a few select excuses that moms will give empathy too . 😂 😂 😂",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2017-03-08 11:03:49",
				13392,
				"off tomorrow and volunteered to go in if they need me . i love my job .",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2017-02-13 12:02:55",
				13391,
				"trying to start my sleeve this summer who do good work here in indy ?",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2017-02-11 11:02:34",
				13390,
				"why did i volunteer to go in :(",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2017-01-10 04:01:24",
				13389,
				"hey friends ! i need to book at least 2 parties for this month . is anyone willing to do either : 💜 a home scentsy party 💜 basket / catalog party 💜 online facebook party the first 2 that volunteer i will through in something extra special ! msg me for details !!!! thanks everyone !",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2017-02-06 06:02:28",
				13388,
				"yes , i ' m the girl who loves makeup . i ' m the girl who enjoys getting dolled up , not for anyone else but for me . but conventional pretty isn ' t every aspect of my life . there is something so beautiful in being unapologetically who you are . in having opinions , in intelligence , in confidence . some of my most beautiful moments have come when i am wearing no makeup and dancing in the living room with my children . or when i am helping others , or in supporting my family . there are many different kinds of beauty , and they are all extraordinary . always stay true to you , because you are beautiful .",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2017-01-15 05:01:40",
				13387,
				"\" people are often unreasonable , irrational , and self - centered . forgive them anyway . if you are kind , people may accuse you of selfish , ulterior motives . be kind anyway . if you are successful , you will win some unfaithful friends and some genuine enemies . succeed anyway . if you are honest and sincere people may deceive you . be honest and sincere anyway . what you spend years creating , others could destroy overnight . create anyway . if you find serenity and happiness , some may be jealous . be happy anyway . the good you do today , will often be forgotten . do good anyway .",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2017-03-01 10:03:24",
				13386,
				"i challenge all of you to volunteer in your local communities this spring . it ' s getting nice in the socal area and it ' s a perfect time to share some love ! lettuce be united !",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2017-03-19 04:03:48",
				13385,
				"i really enjoyed announcing and seeing my friend from the online dirt connection days , good pal wesley womack , he ' s come such a long way . listen to his \" voice \" at 411 motor speedway and volunteer speedway this 2017 season . thanks for joining me for the chevrolet performance super late model series event !!",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2016-12-22 07:12:52",
				13384,
				"after being emotionallh drained yesterday . i woke up with a heavy heart . god is god though . so i been praying all day . i managed to pull myself together and get these bags done . 25 to be exact . ive been asking for donation and i got a few . i was shooting for 50 this year but im glad we are able to bless 25 . i will continue building iamwoman and continue giving back . 😚",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2017-02-17 01:02:57",
				13383,
				"looking for a way to get involved in something big ? how about the united state ' s affordable housing crisis ? purchase a t - shirt , bro tank , or long sleeve shirt and proceeds ( other than the cost to make the product ) will be donated to help to establish sustainable housing and / or repair physically inadequate housing for individuals and families around the u.s.. message me if you have any questions or want to buy a shirt ! you can also donate directly to the cause on my fund site : https://classic.bikeandbuild.org/rider/9273",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2016-12-28 12:12:13",
				13382,
				"be courageous have the courage to be the one that goes against what society tells us is right . have the courage to stray away from the pack and do things the way you feel they should be done . have the courage to be the one to make a change in this world , and make an impact on this generation . most of all have the courage to be yourself . so many people in our generation are too afraid to go after what they want out of life because they are too afraid of what their peers will think . fuck that if you want to build bridges , go be the best damn bridge builder this world has ever seen . if you want to be a business owner , go for it and build that business to be the best businesses this generation has ever seen . if you want to make an impact on your community , get out there and volunteer your ass off ! have the the courage to get out and be yourself without letting anyone bring you down !",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2017-03-19 05:03:43",
				13381,
				"special thank you to wendy gundlach , christine lee , and brandice hatcher for hanging in there with me and kelly le grand today with the giveaway . you ladies were so awesome to volunteer your time , products , and day !!!! thank you for your support !!!!",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2017-03-14 11:03:08",
				13380,
				"want to support call me queen girls mentor program , but don ' t have the time to volunteer ? purchase your call me queen t - shirts today at callmequeen.org/shop or join us at the black girls hustle harder part 2 expo on march 26th ! we accept payments via cash , square cash app , or paypal . me / callmequeenorg 👑",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2017-02-02 07:02:36",
				13379,
				"friends , this is last day calling campaign and this gift for our most dedicated volunteers whoever make maximum calls ( single person ) #today till 5:00pm will get this t - shirt ( sweatshirt ) as a last day #worrier gift 🎁 !! it will be good if someone from local punjab . let ' s do it !! call ! call ! call !! #callingcampaign #nawapunjab #aap #gantibajaopunjabbachao",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2017-03-19 08:03:02",
				13378,
				"i was born into this world and i shall leave this world ! i understand your love for someone who do good , but it would be silly of us to worship that person . when we go , we take only flash to the grave . for it shall return from where it came . the good i gave to you will remain . for there is only one good and that is the source of this life which give us our name .",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2017-02-11 04:02:17",
				13377,
				"lucy is asleep . #sorry day 20 / 22 of my #22pushupchallenge with tai tanium and diana t . nguyen tai and diana nominated me to do 22 push - ups a day for 22 days \u2013 everyday 22 veterans , police , and first responders commit suicide after suffering from ptsd , and it ' s important to raise awareness of their struggle . volunteer . give back in any way that you can . today i nominate : dino coronado rules : - once nominated , start the next day - record yourself doing 22 push - ups , in any manner you can ( from your knees , one - handed , with rest , etc ) , all in one shot , and tag me in your post - pass on the challenge every day to a new person : someone who can achieve it , and who will want to do it - have fun",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2017-03-07 01:03:02",
				13376,
				"so nervous about college . lets pray i do good . business theory 300 level class first why not ..",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2017-02-22 07:02:48",
				13375,
				"unlike everyone else i dont do good bye burnouts cars just go in peace ill miss the del sol 💯 🙏 👍 ✌ 😢",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2017-01-15 11:01:42",
				13374,
				"dallas fans need to understand they had one the easiest schedule this season that ' s why they did so well , and that a rookie qb will never do good in the post season because of that lack of experience",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2017-03-01 12:03:18",
				13373,
				"i am very happy within my self i have came along way and still have along ways to go but i am a proud mother to a beautiful amazing little girl that i love very much i hope we do good this time around eric redd god knows i try and i no you do too",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2016-12-27 03:12:38",
				13372,
				"let others speak & show their true character ... i ' ll just keep it movin ' ... people will want you to do good , but not better than them . i ' ll own my shit . i can look in the mirror ! #liftothersup #hateradeisbadforyou #chooselove the best business to be in is your own . 😉 #onelove",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2017-02-05 12:02:14",
				13371,
				"i ' m changing my lifestyle and already lost 7 pounds in a week ! nows the time for you to see what works , itworks haha 💚 ⚀ depressed or needing energy ? 💡 ⚁ wanting extra income 💵 from home while helping others ? 🛠 ⚂ want to tighten , tone , firm , or moisturize every inch that you can ? inbox me to reserve 1 of 12 spots in different 90 day challenges at my 💵 discount ! 💚 #losingpounds #motivated #hardworker #workfromhome #gettinghealthy #gettingontrack",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2017-03-09 05:03:52",
				13370,
				"it was so much fun this morning volunteering to hand out food :)",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2017-02-02 09:02:29",
				13369,
				"volunteering at give kids the world tomorrow . love this place",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:35",
				"2017-03-05 03:03:16",
				13368,
				"respect everything you are given , and expect nothing from helping others in return . as long as you know in your heart that you truly appreciate and remain grateful to people ' s offer of support and concern to you , expectation of the same gratitude from others will always never feel or be as sincerely appreciated as deeply as you are for a helpful , understanding and giving gesture of kindness .",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2017-03-18 07:03:36",
				13367,
				"i want free money . any #whiteguilt volunteers want to pay me some reparations ?",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2017-02-27 04:02:12",
				13365,
				"serious question ... how long will it take you , at your j.o.b. , to make $10,000 ???? let ' s say you work a j.o.b. making $10 / hr and work ( on average ) a 40 hour week . if this is you ... it will take you 6 1 / 2 months to make $10,000 ... before taxes are taken out . before taxes !!! that ' s working 1040 hours for someone else . 😮 that ' s 1040 hours away from your family / kids . 😢 and , that ' s 1040 hours of your life building someone else ' s dreams !! i have way for you to take just $99 and invest it in yourself and your family ! 👏 and , with this investment i can help you earn a $10,000 bonus in just 3 months ... on top of a monthly commission check !!! 😮 all on your smartphone 📱 ... while helping others change their lives and become healthier !!! 🙌 💪 👏 if you are ready to start working toward your own happiness and freedom comment below 👇 👇 or text 📲 me !!! REDACTED:PHONE",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2017-03-04 01:03:34",
				13364,
				"if you ' re a grown man sometimes you gotta learn to swallow your pride , grow up , and stop letting your feelings get involved . sometimes all a girl wants is no attachment get over yourself dumb boy 😂 😂 😂 she don ' t care bout you , i don ' t care bout you . simple",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2017-03-04 09:03:54",
				13363,
				"in kitty heaven at catmandu . monique marcillac you would absolutely love this place . it ' s a cat rescue with tons of rooms and tons of cats . i ' m going to start volunteering there soon . super excited !",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2017-03-09 04:03:47",
				13362,
				"~ <3 if you haven ' t checked out the #becauseofitworks yet , i dare you to click on it . check out all the lives being changed , maybe then you ' ll understand . 😭 🤗 😍 💚 makes my heart so happy ! and reminds me why i ' m doing what i love doing !! helping others change their lives while getting healthier at the same time !! <3 ~",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2017-03-05 04:03:48",
				13361,
				"i just sent in my video for the summer shredding competition i hope i do good ! like i said i ' m going to give my 120 % good luck to everyone that is doing it !",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2017-03-19 10:03:04",
				13360,
				"only day off tomorrow from both work and volunteering . tberefore , i am taking full advantage of it !! boise bound !!",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2017-03-07 04:03:13",
				13355,
				"quick shoutout and thanks to some of our enon baptist church youth tonight ! they volunteered their spare time to help serve at the ncba ministers , deacons and wives banquet and it is much appreciated !",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2017-03-03 08:03:20",
				13359,
				"i want to let everyone know , you are worth it . i stood up to my employer . not rudely or in a demeaning way . i stood up for myself . i was worth it . i knew i was . after not letting myself be taken advantage of , i changed my situation . today , i reaped what i sowed . today , i was persuaded to work more because my work was valued , appreciated and needed . not today lady . i am comfortable now . i don ' t need you anymore . i choose to work there because i like my coworkers and the food . not out of necessity . always stand up for yourself . & on that note , i love you all . thanks for reading :)",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2017-02-23 01:02:48",
				13358,
				"the things i go thru in life be crazy when you trying hard to make things better it ' s always something they ' ll push you off of it my personal life has been crazy i go thru real life problems people always that ' s part of being grown but when you out here on own with nobody to learn on life can be crazy",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2017-03-01 01:03:43",
				13357,
				"big happy bday to my friend blanco dinero ... i ' m so proud of this man his grind , determination , and ability to adapt is so admirable ... i remember when the city of wilmington kept trying to stop every event related to him for no reason at all but , no matter what my friend stayed persistent and kept going forward and just to see where he is now makes me smile because he never gave up no matter how crazy it got .... whenever i had anything going on , if i said cory i need you here ... he would always say , \" ok ms . mira , i got you \" lol and he always come through even if he show up late .. he even modeled for my amir emir 1st photoshoot which i will never show lol but , he came through ! as always we look out for each other and if you see a mira party it ' s a guaranteed link up for him to participate and support . i appreciate our friendship and i ' m so proud of the father , businessman , and overall man you have always been . happy birthday sir enjoy your dayyyy !!!! enjoy your baecation !",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2017-03-09 03:03:42",
				13356,
				"i may bring home the bacon but she brings home the bread , milk , and eggs . i may cook homemade meals but she cleans up the aftermath . we work together because that is how a relationship is supposed to be . there ' s no 50 / 50 , it needs to be 100 / 100 . don ' t half ass love . even if at times we falls its old age test of time and patience . help them stand back up because they ' re going to be the ones to catch you back . give it all you got or gtfo !",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2017-03-08 04:03:33",
				13354,
				"i am super disappointed in the actions of some of my family members . the complete lack of respect , compassion , love , for someone who has done so much for them is just heartbreaking . :'(",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2016-12-24 05:12:03",
				13353,
				"the first time us three have come together for a picture . the thre generations , three amigos , three stooges , my dad , my son , and i ; three times the love . right on !",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2017-03-21 03:03:10",
				13352,
				"stand up for a cause !",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2017-02-07 03:02:55",
				13351,
				"so i ' m having a dinner for valentines day @ 5pm i really would love if my family could come together and enjoy family time on this day .... please hit me in my inbox so i can get ahead count",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2016-12-24 03:12:37",
				13350,
				"this is the first time in months me and my husband have two days in a row off work together ! ❄ ⛄ 😍 😍 😍 😍 😍 😍",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2017-03-18 07:03:53",
				13349,
				"these nighas ain ' t nothing like me .... compassion and simple respect and generosity are traits you simply don ' t have and for that i will rather not even be associated with em ..... family or not",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2017-03-18 03:03:18",
				13348,
				"she will stand up for you when most won ' t . she ' ll fight for you , even after you , yourself , have given up . she will be there supporting you when you need her the most . she will set you straight when you are getting too big for your boots and give you a hug right after coz you ' re her baby brother ! you ' re all that this kid could ask for . i love you baji .",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2017-03-09 02:03:01",
				13347,
				"retweeted ted talks ( @tedtalks ) : \u201c in the hindsight of history , it\u2019s always the failures of compassion that are most inexplicable and inexcusable . \u201d https :// t . co / g2qekcjzwa",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2017-03-16 06:03:57",
				13346,
				"isaiah 14 : 1 the lord will have compassion on jacob ; once again he will choose israel and will settle them in their own land . foreigners will join them and unite with the descendants of jacob .",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2017-03-10 08:03:59",
				13345,
				"clairvoyance & compassion no wonder i hurt so often",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2017-03-08 02:03:33",
				13344,
				"when wedding stuff is taking over ... 😊 hopefully it will all come together ! cameron and i are getting very excited !",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2016-12-22 03:12:55",
				13343,
				"all i won ' t for christmas is for my family come together and eat and laugh and enjoy our self because we don ' t know the min are hour we can be here now and gone tomorrow but any way yes i ' m in my feelins so don ' t call me a cry baby i just love my family and i won ' t all of us come together as one i love all of yall guys ...",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2017-03-09 01:03:38",
				13342,
				"on side road crying my eyes out ... n yet still can ' t stand up for me",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:34",
				"2017-03-06 09:03:06",
				13341,
				"can ' t tell you how hard love really is and yes he drive me crazy but we learn to make things better over time i love yu bae #mcm #myheadache",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:33",
				"2017-03-09 05:03:06",
				13340,
				"i ' m not afraid to take a stand , everybody come take my hand , well walk this road together thru the storm what ever weather .... #eminem",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:33",
				"2017-02-21 12:02:32",
				13339,
				"funny how you show someone compassion and try to support them then they remove you from their friends list .... shows you the truth about how they feel about your friendship .",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:33",
				"2017-01-09 01:01:04",
				13338,
				"takes a lot of compassion to take a caregiving job .",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:33",
				"2017-03-07 11:03:41",
				13337,
				"my thoughts on #acarepeal . republicans are going to get flack either way . since were gonna pay the cost it ' s time to finally stand up for a more free society and individual liberty . republicans have the perfect opportunity to show the country that the free market is the greatest supplier of human needs . no point in massively expanding government for a group that will complain either way / will never vote for yoy . if you dont stand for something , you stand for nothing . #obamacarelight",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:33",
				"2017-02-16 03:02:15",
				13336,
				"everything will be okay baby steps it is . will never be used again from a company that has no compassion and only wants to know when and if your gonna be back in to work to pull doubles while everyone else gets to sit on their butts .",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:33",
				"2017-03-13 12:03:46",
				13335,
				"i know things are going yo be okay ( 👌 ) for aaron curtis richards and i . we have made our plan on how things are going to work out . we are done giving to people ( 👫 ) who don ' t care about us . we have to focus on us now . we have so many plans for our future . that we are going to work together and do it by our self ' s . i love you honey with all my heart 💖 . ( #team:richards )",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:33",
				"2017-03-21 02:03:11",
				13334,
				"i find it sad , disrespectful and mean when i feel like certain people are against one in any way , it ' s get hurtful , i am standing up for myself because i am only one person alone , i don ' t deserve that , but i pray for those who are like that , as long as i got god , i am okay and blessed , sometimes you have to stand up for yourself when that ' s the only thing to do because people would get too comfortable walking all over you if you let them , not in fighting words and with action but in a good , right and peaceful way with respect , my heart has changed now , i am not down , weak and sad about it but i have learn to stand stronger more and i still have my peace within , i forgive myself and you , you know who you are .",
				null,
				null,
				null
			],
			[
				"2017-03-21 04:03:33",
				"2017-02-10 08:02:12",
				13333,
				"🚨 🔉 this week ' s #cspanradiopodcast takes a look at the \" toxic \" environment in the senate with former senate gop leader trent lott . we talked with him about how the senate has changed since he left in 2007 , what he thinks needs to be done to get both parties to work together , and lessons from watergate , the clinton impeachment trial , and some of the grand political bargains of the 1980 ' s and 1990 ' s . find it in washington today feed on itunes / googleplay music / tunein / stitcher or right here : http://podcast.c-span.org/podcast/lott0210.mp3 🔉 🚨 oh , and as always , please rate & review us on twitter and share it with all your friends . you can even just share this post . it ' s that easy .",
				null,
				null,
				null
			],
			[
				"2017-03-03 02:03:59",
				"2017-03-02 11:03:46",
				13294,
				"this woman has me in my feelings . i mean it shouldn ' t be this bad but i cannot help it . i love people and she just ruins it for me . every moment i am in her presence i feel so very small . please god help me rise above the pettiness and seek after compassion .",
				null,
				null,
				null
			],
			[
				"2017-03-02 02:03:00",
				"2017-03-02 12:03:35",
				13213,
				"why y ' all down play tax money like it ' s not money you worked for or money that ' s giving back to you for takin care for ur child / children for the pervious year .",
				null,
				null,
				null
			],
			[
				"2017-03-02 02:03:00",
				"2017-03-01 11:03:10",
				13212,
				"a couple of things from the president ' s address last night ... 1 . woman will march all over the world to stand up for each other but slam a woman ( ivanka trump ) all over social media for something as caddy as a dress . 2 . the picture below says it all ( ivanka did stand up for her )",
				null,
				null,
				null
			],
			[
				"2017-03-01 10:03:01",
				"2017-03-01 08:03:40",
				13184,
				"what an amazing thing to be part of ! while i was in las vegas i also was able to visit the ronald mcdonald house which helps families with premature babies like my god daughter athena ! this lady volunteers all her free time to assisting all of those in need , so precious and sweet !",
				null,
				null,
				null
			],
			[
				"2017-03-01 06:03:00",
				"2017-03-01 04:03:15",
				13169,
				"* i just love volunteering ! i ' m so excited about tomorrow because i will be sorting donation clothes ! then in a couples days i will be volunteering at a food pantry ! *",
				null,
				null,
				null
			],
			[
				"2017-02-28 10:02:01",
				"2017-02-01 06:02:01",
				13140,
				"one of my biggest regrets right now is that i wish i would have been this engaged during obama ' s administration . so many times he kept urging his supporters to get involved , that we could only accomplish things together . i would sit back , nod my head in agreement , but then immediately go back to whatever distraction i had going at the time . i think about what he could have accomplished had he had this kind of support . i only have myself to blame .",
				null,
				null,
				null
			],
			[
				"2017-02-28 10:02:00",
				"2017-01-10 09:01:06",
				13139,
				"things are starting to come together . got in contact with schooling for miles and he will be starting soon",
				null,
				null,
				null
			],
			[
				"2017-02-28 06:02:01",
				"2017-02-28 03:02:29",
				13126,
				"\" my mission in life is not merely to survive , but to thrive ; and to do so with some passion , some compassion , some humor , and some style . \" - maya angelou good morning 🌞 😃",
				null,
				null,
				null
			],
			[
				"2017-02-27 10:02:01",
				"2017-02-27 07:02:48",
				13062,
				"i just want to do a how to work together in rescue and advocacy workshop in minneapolis . anyone else want to ? there ' s too much trash talk going around in the rescue community about other rescues . im almost ready to leave all the rescue groups on facebook because i cant figure out who to believe . can ' t we just save dogs , drop the egos , and do what ' s right ?",
				null,
				null,
				null
			],
			[
				"2017-02-27 06:02:02",
				"2017-02-27 05:02:48",
				13016,
				"all the distractions kill the compassion",
				null,
				null,
				null
			],
			[
				"2017-02-27 02:02:00",
				"2017-02-27 12:02:05",
				12999,
				"if we can donate our time to better our community , then hopefully other people say you know what i can donate my time . thank you so much for everyone who donated , supported and took time out their days to volunteer for this cause . 💚 😭 🙏 🏻 👼 🏻 si podemos donar nuestro tiempo para mejorar nuestra comunidad , esperemos que otros digan sabes que yo también puedo donar mi tiempo . muchas gracias desde el fondo de mi corazón a todo mundo que donó , apoyó , y nos regaló de su tiempo para esta causa . #leadtoinspire #givethebestofyou #lideraparainspirar #dalomejordeti",
				null,
				null,
				null
			],
			[
				"2017-02-27 02:02:00",
				"2017-02-23 05:02:02",
				12998,
				"hello everyone , i would like to thank all the people who volunteer to help install the metal roof and siding at the ball diamonds . we have set a date to begin installation of the roof and siding and it will be the weekend of march 11 and 12th . this is the same weekend as our final sign up date for the season . i will post an official start time for saturday , march 11 , 2017 once i know for sure . rob zeglen has volunteered his time to be the leader of the pack ! hope to see you all there , it should be a fun time ! thanks for your time , have a wonderful day !",
				null,
				null,
				null
			],
			[
				"2017-02-26 06:02:00",
				"2017-02-26 03:02:53",
				12960,
				"maybe churches cqnt support the community like they want bc the community doesn ' t support churches like they should 😒 🙏 🙏",
				null,
				null,
				null
			],
			[
				"2017-02-26 06:02:00",
				"2017-02-26 02:02:47",
				12959,
				"2 corinthians 1 : 3 - 4 \" praise be to the god and father of our lord jesus christ , the father of compassion and the god of all comfort , who comforts us in all our troubles , so that we can comfort those in any trouble with the comfort we ourselves receive from god . \"",
				null,
				null,
				null
			],
			[
				"2017-02-26 02:02:00",
				"2017-02-25 10:02:20",
				12901,
				"we need more females in leadership everywhere , worldwide . if anything is going to change , females are going to need to start stepping up to the plate and taking initiative . traditionally , it ' s males who ' ve done this , but that needs to change . we shouldn ' t have to approach ladies and girls and ask them to lead . that isn ' t how leadership works . volunteer to do it . ask for it . prove you ' re ready for responsibility . for every time a woman is silent and chooses to sit on the sidelines , she ' s leaving a vacancy yet another male will fill and that ' s how we keep getting more of the same . get up , stand up , speak up , speak out , own it , lean in , get in the fray with us ! we ' re waiting on you , but we won ' t wait for leaders . it ' s approximately 50 % a woman ' s world and 50 % a man ' s world , so why not have at least 50 % of our leadership be comprised of women ?",
				null,
				null,
				null
			],
			[
				"2017-02-25 10:02:59",
				"2017-02-25 09:02:57",
				12845,
				"real friends endure hardship together and come out stronger , together . real friendship is holding each other up even when you feel like you can ' t stay on your feet . it ' s tears . it ' s late nights staying up because weight of the world is too much . laying next to each other whispering questions , soft laughter . silent tears . holding hands . always having your back . always ready to stand up for you . real friends go through it with you . they put you back together . they fight for stupid reasons . they are family . the blood of the covenant is stronger than the water of the womb .",
				null,
				null,
				null
			],
			[
				"2017-02-25 06:02:00",
				"2017-02-25 02:02:22",
				12824,
				"in the end a good guy looses a good girl he had and he gains nothing but sorrows and a good guy will eventually come along and make things better",
				null,
				null,
				null
			],
			[
				"2017-02-24 10:02:00",
				"2017-01-31 12:01:34",
				12722,
				"i ' m committing myself to volunteering 100 + hours in 2017 . hard to desire a better country when i ' m not willing to put in the work in my own community . feel free to hit me up with ideas and come out with me sometime ! hopefully if you ' re able , you ' ll make a commitment too ! allie kirk and i are volunteering with jonesboro habitat for humanity saturday morning . i ' m looking forward to it . hopefully that afternoon we can get some time in at the nea humane society .",
				null,
				null,
				null
			],
			[
				"2017-02-24 10:02:59",
				"2017-01-21 09:01:15",
				12721,
				"proud of all the women going out and exercising their rights today . it ' s important to stand up for yourself in the things you believe in life but it also takes courage which you ladies have shown plenty of .",
				null,
				null,
				null
			],
			[
				"2017-02-24 06:02:02",
				"2017-02-24 02:02:34",
				12695,
				"are you ready to change your life by helping others change theirs .",
				null,
				null,
				null
			],
			[
				"2017-02-24 06:02:01",
				"2017-02-24 03:02:51",
				12694,
				"i have some friends on fb that let the media , and social media define them . its sad they when they let color blind them . we are all in the struggle . we all get falsely accused , or shot for being stupid , ignorant . open your eyes its all of us together . its a unity thing not white , black , gender , asain , mexican . it is a love thing love to come together . open your eyes .",
				null,
				null,
				null
			],
			[
				"2017-02-24 02:02:59",
				"2017-02-24 10:02:14",
				12672,
				"finally friday !! and to make things better the weather is going to be wonderful !!",
				null,
				null,
				null
			],
			[
				"2017-02-22 06:02:59",
				"2017-02-22 02:02:46",
				12481,
				"man ... i love me a cancer man .... cancer folk are always sent to me at the right time and right place . nothing can match their empathy , compassion , and their warm nature . yeah they are moody af ... but the reality is they be the light at the end of a dark tunnel ... and in my life they are always on time . thanking all the cancer folk who ' ve stood there with the rain boots ready for me to tread in the heaviest of storms . 🙌 🏾 👏 🏾 💪 🏾",
				null,
				null,
				null
			],
			[
				"2017-02-22 06:02:59",
				"2017-02-22 04:02:56",
				12458,
				"another farm ❤ under contract !!! the two jacqueline rose ' s get to work together ! congrats jacqueline rose and ezra lloyd mitchell on your dream adventure ! i am so #honored to be a part of it and so #blessed that i have such sweet , respectful , kind - hearted , fair , and level - headed friends as my clients ❤ and a best friend , corey j . wesley , as my first - hand man , my lender ! let the fun begin ! :) #farm #ranch #moving #realestate #realtor #luxury #land #property #denver #colorado #golden #goldencolorado #buyer #seller #movingday #adventure #dreamcometrue #horses #goat #celebrate #greenhouse #fun #lifestyle #lifetime #workhardplayhard",
				null,
				null,
				null
			],
			[
				"2017-02-21 10:02:59",
				"2017-02-21 06:02:21",
				12409,
				"i really am praying that i can get everyone together this easter with all the kids and grand parents mommy ' s and daddy ' s and have fun and play games and hunt eggs . i really hope we all can come together this year . florance bryant tabathy taylor ashley n roy bryant chelsea taylor michael meixner kayla renea michele cotton taylor toni bright jessica carden hope maria pettigrew bubba carden henry taylor and everyone else you know you are welcome",
				null,
				null,
				null
			],
			[
				"2017-02-20 06:02:02",
				"2017-02-20 03:02:34",
				12282,
				"spring is a crazy time to schedule an appt with me , i understand . so to make things better for my regulars who have not prebooked their appointments i have removed one day from online booking so that i can schedule regulars only if nothing is left on the online schedule . please try to schedule online first , if you can not find anything that fits your schedule message:text me and i will fit you in ! ✌ 🏻️ ❤️ 💇",
				null,
				null,
				null
			],
			[
				"2017-02-19 10:02:01",
				"2017-02-19 09:02:30",
				12207,
				"retweeted eric garcetti ( @ericgarcetti ) : rain or shine , now ' s the time to get involved ! councilmember @mikebonin and his supporters joined #teamgarcetti to talk to l.a. voters . https :// t . co / 4fqbdc5jiq",
				null,
				null,
				null
			],
			[
				"2017-02-19 06:02:59",
				"2017-02-09 05:02:42",
				12157,
				"when you haven ' t felt good and can ' t make it to work , you can still work from your bed making money and helping others take steps to accomplish their goals ! love hearing how the products are helping my customers !! what an amazing feeling !! why not join me in this amazing it works journey !!! ?? #itworks #healthandwellness #satisfiedcustomers #bonuses #extraincome",
				null,
				null,
				null
			],
			[
				"2017-02-19 06:02:59",
				"2017-02-15 09:02:18",
				12156,
				"all of this will come together before the end ... nothing is gonna stop me from success .",
				null,
				null,
				null
			],
			[
				"2017-02-19 06:02:59",
				"2016-12-22 04:12:38",
				12155,
				"empathy is always perched precariously between gift , and invasion .",
				null,
				null,
				null
			],
			[
				"2017-02-19 06:02:59",
				"2017-02-19 04:02:09",
				12154,
				"i am looking for 3 people interested in simplifying and decluttering their life who would be interested in participating in a 90 minute coaching call . during the session we will work together through a series of exercises and personalized coaching to alleviate overwhelm and get you started with mindset shifts , tools , and action steps to set start decluttering your life . this is currently a beta program i am testing . the fee would be $25 because not because i need to make money off of you but because it ' s important that there is an exchange so both parties are committed to the process . if you are interested or know of someone who might be , please shoot me an email at REDACTED:EMAIL",
				null,
				null,
				null
			],
			[
				"2017-02-19 06:02:59",
				"2017-01-10 04:01:22",
				12153,
				"hey friends ! ❤ comment your business link , only 1 rep per company ; duplicates will be deleted to keep it fair . i believe we enhance each others education . then copy and paste this to your page ! i will add my business to yours , so we can all share our passion with others and support each other at the same time !! please play fair !! 😉 don ' t post if you are not going to help others get exposure !",
				null,
				null,
				null
			],
			[
				"2017-02-18 06:02:00",
				"2017-02-18 02:02:18",
				12058,
				"who do good cover ups on da tattoos 👀 👀 tag em ! ?",
				null,
				null,
				null
			],
			[
				"2017-02-18 02:02:00",
				"2017-02-18 01:02:19",
				12049,
				"someone please tell me why i am going to work today ! ? i haven ' t worked a weekend since starting . why ? because they aren ' t even open ! but guess what ? they decided to open the doors a couple saturdays just to get extra stuff done . and now here i am volunteering to work my first saturday in over a year , and it ' s on one of the most beautiful days this winter could hold . ughhhhh . what was i thinking ?",
				null,
				null,
				null
			],
			[
				"2017-02-18 06:02:01",
				"2017-02-18 02:02:31",
				12026,
				"i love seeing people do good . makes me so happy 🤷 🏼\u200d ♀️ 😂 . i ' m so corny",
				null,
				null,
				null
			],
			[
				"2017-02-18 06:02:00",
				"2017-02-18 03:02:58",
				12025,
				"\u201c i refuse to accept that our values are morally equivalent to those of our adversaries , i am a proud , unapologetic believer in the west , and i believe we must always , always stand up for it . for if we do not , who will ? \" - john mccain",
				null,
				null,
				null
			],
			[
				"2017-02-18 02:02:01",
				"2017-02-18 12:02:24",
				12000,
				"ribs do good make you wanna slap yo mama ... bae don perion put his whole ass , both feet and his love in these ribs i ' m in heaven right now .....",
				null,
				null,
				null
			],
			[
				"2017-02-17 06:02:01",
				"2017-02-17 03:02:19",
				11954,
				"we are only as strong as is our compassion for those who are weak . for in strength must come the power of understanding and the wisdom to act with gentleness and kind concern for those who are not able to help themselves . source:angeles theboss",
				null,
				null,
				null
			],
			[
				"2017-02-17 02:02:00",
				"2017-02-17 12:02:57",
				11944,
				"i ' m about to get deep here ... this shows that not only do good things take time , but if you are patient god will reward you !! 😅 ❤",
				null,
				null,
				null
			],
			[
				"2017-02-17 10:02:59",
				"2017-02-17 08:02:54",
				11939,
				"second time through - better than breaking bad to me - vince gilligan and bob odenkirk are a spirit animal to me .... love . bob odenkirk - #mrshow .... american who is actually a brit #birthdayboys #bobanddave # - inspiration from ( monty ) python .... comedy meets tragedy - the best comedic actors are always the best dramatic ones - sensitivity , empathy - r.i. p - robin williams lol",
				null,
				null,
				null
			],
			[
				"2017-02-17 06:02:00",
				"2017-02-17 04:02:09",
				11919,
				"one was capable of empathy ✨",
				null,
				null,
				null
			],
			[
				"2017-02-16 06:02:01",
				"2017-02-16 03:02:47",
				11774,
				"i have to give a shout out to maegon leeann larsen for helping me today ! i volunteered to provide drinks for the youth group at my church tonight and i did an italian cream soda bar for them . maegon drew this adorable diagram for me !! ❤",
				null,
				null,
				null
			],
			[
				"2017-02-16 06:02:01",
				"2017-02-16 02:02:26",
				11773,
				"the best revenge is happiness and success to your enemies , they hate to see you do good 💪 that ' s even better then putting hands on anyone",
				null,
				null,
				null
			],
			[
				"2017-02-16 06:02:01",
				"2017-02-16 02:02:13",
				11772,
				"sitting in my car on my lunch break from work messaging people about products and how great the itworks company would be for them . talk about dedication and compassion and determination . i love helping others !",
				null,
				null,
				null
			],
			[
				"2017-02-16 02:02:59",
				"2017-02-16 12:02:04",
				11746,
				"something i ' ll never understand : artists that don ' t support each other . if you truly have a passion for the art you should be happy to be encouraging and supportive . the competitive bullshit is so childish it makes me sick . if you ' re as good as you think you are than you have no worries about people stealing your business . there ' s plenty of people vying for tattoos . like each others photos , give helpful critiques and pointers . stop being so fucking cut throat and shitty . if you truly love the art of tattooing then you should love the fact that others share your passion . end rant",
				null,
				null,
				null
			],
			[
				"2017-02-15 06:02:08",
				"2017-02-06 10:02:26",
				11656,
				"i want people who are looking for a change . who are sick of building someone else ' s dream , who cringe at the thought of \" mondays \" , who would do anything to be able to stay home with their kids , who have a passion for helping others , who feel that they have a bigger purpose to fulfill . this month , i am ready to help 5 new individuals launch their own businesses . all that i ask is that you are positive and coachable . so this thursday , feb 9th @ 8pm est , i will be hosting an invitation - only online meeting for those who are truly interested in making a change ! pm me or comment below and i will send you details <3",
				null,
				null,
				null
			],
			[
				"2017-02-15 06:02:07",
				"2017-02-15 04:02:02",
				11655,
				"i hate being sick but my valentine ' s day was filled with love and compassion and a great man who will listen to me complain and go buy me medicine and let me lay on the couch and sleep next to him . no matter what happens in this life i know i am loved .",
				null,
				null,
				null
			],
			[
				"2017-02-15 06:02:07",
				"2017-01-02 06:01:56",
				11654,
				"i honestly can ' t say how 2017 will be for me , but what i can say is that come what may being content is what ' s 💯 & pray that all things work together for the good !!! 😎 💯 😎 💯",
				null,
				null,
				null
			],
			[
				"2017-02-15 06:02:07",
				"2016-12-13 05:12:59",
				11653,
				"tomorrow is my wife ' s 27th birthday ❤ 1st of many to come together",
				null,
				null,
				null
			],
			[
				"2017-02-15 02:02:58",
				"2016-12-22 03:12:52",
				11645,
				"livin life and lovin family all is going good for us . we ' ve hit a few rough patches but nothing that we couldn ' t over come together .. i hope that me and brian stay together for ever like my maw and paw and we have as much love for one another as they do when we ' ve been together as long as they have been love ya maw love ya paw .... and a big i love you to my one my only my rock brian baker .... i love u babe . its so wonderful to have him back in our lives again ....",
				null,
				null,
				null
			],
			[
				"2017-02-14 10:02:12",
				"2017-02-14 06:02:18",
				11561,
				"me & my boyfriend both work today but at least we work together so we kinda get to spend the day with each other 🙄 💙 💰",
				null,
				null,
				null
			],
			[
				"2017-02-14 06:02:10",
				"2017-02-14 02:02:47",
				11537,
				"🙏 🏼 🙏 🏼 🙏 🏼 followers of jesus are taught in the bible to be productively involved in service or ministry according to their giftedness and god - given abilities . in our eagerness to get involved and get others involved in the work of the lord we need to be aware of the danger in overly focusing on what we are to do as disciples to the neglect of a proper emphasis on what we are to be . what we do as believers should be the natural and spontaneous outflow of who we are in christ . if we will be what the scriptures call us to be , then there is a greater likelihood that we will do what it is we are called to perform . isaiah 6 : 1 - 8 is a good illustration of being preceding doing and ministry flowing out of worship .",
				null,
				null,
				null
			],
			[
				"2017-02-14 02:02:11",
				"2017-02-13 10:02:48",
				11472,
				"i need 1 yes only 1 volunteer to do a basket party this coming up week ... who wants to earn free stuff ???",
				null,
				null,
				null
			],
			[
				"2017-02-14 02:02:11",
				"2017-02-13 11:02:04",
				11471,
				"the baby room is starting to come together slowly but surely . spent today doing the carpet and putting up the camera i just can ' t wait till august !!! i wanna see my sweet baby !!! 😘 😘 😘 😘 ❤ 💙 ❤ 💙",
				null,
				null,
				null
			],
			[
				"2017-02-13 10:02:10",
				"2017-02-13 09:02:43",
				11448,
				"hear ye , hear ye ! i am recruiting for two factions of street fighters for this year ' s st . louis renaissance faire ! they will be comprised of two groups , up to 4 members in each , who will be putting on street fights as well as a stage show ( 3 times daily ) . prior stage combat experience not required , but is preferred . also i would prefer that you are available for the whole run of the faire ( saturdays and sundays 9 - 16 through 10 - 15 ) and we will have weekly rehearsals starting after open house ( date tbd ) please send me a facebook message or email me at REDACTED:EMAIL if you ' re interested . this is a volunteer cast position .",
				null,
				null,
				null
			],
			[
				"2017-02-13 10:02:10",
				"2017-02-13 09:02:24",
				11447,
				"i dont know how i got so lucky but i did ! now that im here there is no stopping me ! my team and i have been rocking it this month ! working my own business from home and helping others do the same is like no other experience i have ever had when it comes to earning a living ! if you would like to earn $300 - $2000 a month ... let me share with you an opportunity that will change your life ! it has changed mine and thousands of others !! let me tell you about it ! message me !",
				null,
				null,
				null
			],
			[
				"2017-02-13 10:02:10",
				"2017-02-13 09:02:07",
				11446,
				"so many of my friends are working their own businesses .. i want to show some love !! which company are you with ? feel free to post your fb page link below !! let ' s support each other !! 👭 ✌ 😘 🌷",
				null,
				null,
				null
			],
			[
				"2017-02-13 06:02:12",
				"2017-02-13 05:02:12",
				11422,
				"today just now i sent aunt fawn , aunt joi and uncle gordon i love and miss text . i got so tempted to send a text to your old number . but your not here . i ' m still not over this . some days or weeks or even months i can do good . i miss you more then anything uncle andy . i wish you are still here . life is never going to be the same without your smile . i still need you . i love you so much !! i don ' t want it to be 2 years . the years keep going by and your still gone . :(",
				null,
				null,
				null
			],
			[
				"2017-02-13 02:02:06",
				"2017-02-13 01:02:01",
				11410,
				"i woke up this morning just feeling ungodly sick to my stomach and i know why .. because today is the day we have all been dreading the day that we have to say goodbye to our best friend it ' s hard to fathom you not being here there won ' t be a dry eye out there this afternoon we all will come together to celebrate your life it ' s not goodbye its see you later fly high bubs until we meet again my friend #heartbroken #bubbastrong #seeyouagain",
				null,
				null,
				null
			],
			[
				"2017-02-13 02:02:11",
				"2017-02-13 01:02:26",
				11355,
				"i volunteered cartooning w the national cartoonist society la chapter at the los angeles children ' s hospitall . got to draw some fun stuff with and for some amazing people #ncsla #chla #ebfamilyday",
				null,
				null,
				null
			],
			[
				"2017-02-13 02:02:10",
				"2017-02-12 11:02:31",
				11354,
				"tonight ' s gonna be a chill ass fucking night got all the old school podsquad kicking it tonight just the boys no gf / wife ' s just the boys a fire pit lil cookout and memories this what i ' ve been talking bout we are all on our own grown folk business but gotta come together once in a while ... ten years running and we still all together bois for life #sqaudup",
				null,
				null,
				null
			],
			[
				"2017-02-12 10:02:06",
				"2017-02-12 08:02:59",
				11340,
				"tell me why everyone my age wants to have a main and 6 side dudes / bitches , but they ' re the first to compassion about how nobody ' s loyal ?",
				null,
				null,
				null
			],
			[
				"2017-02-12 06:02:06",
				"2017-02-12 03:02:55",
				11314,
				"checking in to provide a day of care for kids through compassion international . also look at that 😍 😍 man on stage",
				null,
				null,
				null
			],
			[
				"2017-02-12 02:02:08",
				"2017-02-11 10:02:54",
				11247,
				"wayment ... r these niggas paying these girls 2 be in the videos or they just volunteers ???",
				null,
				null,
				null
			],
			[
				"2017-02-10 06:02:11",
				"2017-02-10 02:02:53",
				11048,
				"well feeling a little better after the er still can really stand up for more then 45 mins with out almost passing out ...",
				null,
				null,
				null
			],
			[
				"2017-02-10 02:02:08",
				"2017-02-09 11:02:39",
				10954,
				"hey yallll !! 😆 😆 😆 good morning ! good morning !! if you ' re reading this , take a quick sec to answer with a simple emoji ! it will help me a lot ! thanks so much ! i really appreciate your feedback ! 😘 put your color heart or emoji in the comments below !! ❤️ i have been thinking about ordering younique 💛 i ' m not interested but i love your posts 💙 i ' m thinking about starting my own younique business 💜 i ' d love to join but i ' m worried i won ' t do good or make money 🙈 i ' d love it if you ' d secretly send me more info 😊 i just love being a younique customer 💔 i would love to start but am worried about the cost 💚 i already have a younique business thank you !!",
				null,
				null,
				null
			],
			[
				"2017-02-10 02:02:08",
				"2017-02-10 12:02:46",
				10953,
				"hey yallll !! 😆 if you ' re reading this , take a quick sec to answer with a simple emoji ! it will help me a lot ! thanks so much ! i really appreciate your feedback ! 😘 put your color heart or emoji in the comments below !! ❤️ i have been thinking about ordering younique 💛 i ' m not interested but i love your posts 💙 i ' m thinking about starting my own younique business 💜 i ' d love to join but i ' m worried i won ' t do good or make money 🙈 i ' d love it if you ' d secretly send me more info 😊 i just love being a younique customer 💔 i would love to start but am worried about the cost 💚 i already have a younique business thank you !! ☺️",
				null,
				null,
				null
			],
			[
				"2017-02-09 10:02:09",
				"2017-02-09 06:02:02",
				10909,
				"they love to see you down never want to see you do good",
				null,
				null,
				null
			],
			[
				"2017-02-09 10:02:09",
				"2017-02-09 08:02:38",
				10908,
				"people worst enemies our the word ( i ) ! and there wants and needs have to do with them selves ! & nothing to do with helping others , nothing to do with finical independence !",
				null,
				null,
				null
			],
			[
				"2017-02-09 06:02:16",
				"2017-02-09 04:02:03",
				10865,
				"hey everyone !! okay , so i am going to be working my butt off for my next promotion , and i could really use your help ! 🙌 if you ' re reading this , take a quick sec to answer with a simple emoji ! it will help me a lot ! thanks so much ! i really appreciate your feedback ! 😘 put your color heart in the comments below !! 😍 i have been thinking about ordering younique 😎 i ' m not interested but i love your posts 💙 i ' m thinking about starting my own younique business 🤑 i ' d love to join but i ' m worried i won ' t do good or make money 🙈 i ' d love it if you ' d secretly send me more info 😊 i just love being a younique customer 😬 i would love to start but am worried about the cost 🙌 🏼 i already have a younique business thank you !! ☺️",
				null,
				null,
				null
			],
			[
				"2017-02-09 06:02:15",
				"2017-02-09 04:02:01",
				10864,
				"now , if you i could just get you to stay away from me . i don ' t ever want to see your face again . your a sorry excuse for a parent and a person . nothing but a user and you have no compassion for life or yourself .",
				null,
				null,
				null
			],
			[
				"2017-02-08 10:02:08",
				"2017-02-08 08:02:29",
				10749,
				".. one act of compassion will change a life forever",
				null,
				null,
				null
			],
			[
				"2017-02-08 06:02:09",
				"2017-02-08 05:02:03",
				10722,
				"i will admonish your fruit with compassion , and will pardon reprieved your suffering will the wine of my salvation written to the bread of glory .",
				null,
				null,
				null
			],
			[
				"2017-02-08 06:02:08",
				"2017-02-08 05:02:05",
				10721,
				"i ' m trying to be more politically active but as some of you know i have had very little social media presence . if you are for the same principles put in place by our founding fathers and are for the progression of our species as a whole then follow me on twitter @zielkebrandon9 . pass along my posts and continue the conversation . we need to come to common ground and work together to better our country and better our world . everyone has a right to their opinion and everyone has the right to oppose that opinion but no one has the right to inflict violence on others .",
				null,
				null,
				null
			],
			[
				"2017-02-08 02:02:07",
				"2017-02-07 11:02:55",
				10651,
				"i need to focus on some more important tasks right now . taxes an something else . its still in my mind that i want to volunteer but i need to prioritize right now . once i get situated . rescue squad here i come . :)",
				null,
				null,
				null
			],
			[
				"2017-02-07 06:02:13",
				"2017-02-07 02:02:19",
				10551,
				"yo like on the real ii like to smile i like to do good things for folks you know , put a smile on their face is a beautiful thing to me . the thing of gods love is it equals to happiness .",
				null,
				null,
				null
			],
			[
				"2017-02-07 06:02:12",
				"2017-02-07 05:02:16",
				10550,
				"today is my day one . my day one for recommiting to fitness , nutrition and myself . last month , i worked out about 1 / 2 the time i should have , my nutrition was okay , but definitely not where it should have been . i did manage to lose a couple pounds , but i definitely didn ' t hit my goal . well , i ' m pulling myself together so that i can hit my goals and prove that with dedication to the fitness and nutrition programs , you can bust through the walls holding you back from your goals . do you have health goals you ' ve been thinking about ? as my dad always said , \" don ' t just think about it , be about it \" ! hit me up , we can work together to crush our goals !",
				null,
				null,
				null
			],
			[
				"2017-02-07 06:02:12",
				"2017-02-07 04:02:58",
				10549,
				"things will slowly come together ... everything will workout for you .. just have faith and be patient during the process !! 💯 💯 ✌",
				null,
				null,
				null
			],
			[
				"2017-02-07 06:02:08",
				"2017-02-07 05:02:00",
				10482,
				"i strongly beleive if you are my friend , i have to make sure we support each other the right way . i want to support my friends mentally , emotionally , spiritually and personal growth . im am not rich financially but i am rich in giving you the love and loyalty you need in the areas felt in the heart , mind & soul . dont be moved by money . money vanishes and burns when set on fire . it has no real value .",
				null,
				null,
				null
			],
			[
				"2017-02-07 02:02:09",
				"2017-02-07 01:02:30",
				10452,
				"just leaving this right here . at the end what is needed is respect and compassion towards one another . not judgement and prejudice 🙄 just get the fuck over it and be happy and kind to everyone . it is actually much easier that way . #bekind",
				null,
				null,
				null
			],
			[
				"2017-02-07 02:02:09",
				"2017-02-06 11:02:39",
				10451,
				"2 kings 13:23 and the lord was gracious unto them , and had compassion on them , and had respect unto them , because of his covenant with abraham , isaac , and jacob , and would not destroy them , neither cast he them from his presence as yet .",
				null,
				null,
				null
			],
			[
				"2017-02-06 06:02:09",
				"2017-01-26 07:01:02",
				10338,
				"snowflakes are beautiful , unique , they form when its coldest , they work together to do amazing things , and bring beauty to the world . ❄️ 🌨 ☃️ #howisthisaninsult #happysnowflakehere #thankyoutrump",
				null,
				null,
				null
			],
			[
				"2017-02-06 06:02:09",
				"2017-02-04 03:02:51",
				10337,
				"i was able to have dinner tonight with one of my friends and teammates from california , donna boyd and her husband brent . 💕 i ' m thankful for the relationships i ' ve been able to form or grow because of the plexus business opportunity . it ' s crazy to think how i met donna back in 2014 on a week long mission trip and how almost 2 years later she joined me in this business . now we talk multiple times a week , as we work together to help impact others lives . i ' m so thankful god has blessed me with such a wonderful opportunity that has brought so many amazing people into my life ! can ' t wait to get together with a lot of my other teammates at convention in the summer ! 🎉 😀 ❤️",
				null,
				null,
				null
			],
			[
				"2017-02-06 06:02:09",
				"2017-02-06 03:02:14",
				10336,
				"it ' s just funny to me how if something doesn ' t happen in your city , or to you & your family - nobody cares . we can read about stuff all day & say how terrible it is ... yet we ' re okay with it because we ' re not personally going through it . i just can ' t with people today .. the insensitivity & lack of compassion for other humans is disgusting .",
				null,
				null,
				null
			],
			[
				"2017-02-06 06:02:09",
				"2017-02-05 01:02:40",
				10335,
				"when minds work together . 😊 😱 😬 👋 🏽 💥 👆 🏽 👆 🏽 👆 🏽 👆 🏽",
				null,
				null,
				null
			],
			[
				"2017-02-06 06:02:09",
				"2017-01-29 04:01:36",
				10334,
				"my muslim brothers and sisters ... this man does not represent us . please remember that he is a small , hateful man who unfortunately has fear mongered a lot of people into believing you are dangerous .... the majority of us know better than this ... the majority of us know what is happening is not right and we will stand by you .. i will not turn my cheek against any injustice brought against you , i will stand strong with my muslim brothers and sisters because i know you are not what they say . please know i do not support this and will keep fighting for your justice to be served . i do not hate you , i am not afraid of you , and i will stand up for you in this time of injustice . ✊️ ✊️ #muslimsarenottheproblem",
				null,
				null,
				null
			],
			[
				"2017-02-06 06:02:09",
				"2016-12-14 01:12:19",
				10333,
				"i want to create a group of 10 - 20 business owners that come together and market for each other !!! if you interested inbox me !",
				null,
				null,
				null
			],
			[
				"2017-02-06 02:02:20",
				"2017-02-05 10:02:22",
				10307,
				"work together",
				null,
				null,
				null
			],
			[
				"2017-02-05 06:02:10",
				"2017-02-05 05:02:21",
				10226,
				"i can ' t stand for a bitch to volunteer a lie !!️ 💯 🙌 🏿 #bihhhiaintaskfadat",
				null,
				null,
				null
			],
			[
				"2017-02-05 06:02:09",
				"2017-02-05 02:02:44",
				10225,
				"retweeted phoenix salford ( @phoenixsalford ) : #children are the future we need to work together to raise awareness of #cse @respectyourself @l6hjh @snowcalmth #wednesdaywisdom https :// t . co / seoafwxxon",
				null,
				null,
				null
			],
			[
				"2017-02-05 06:02:19",
				"2017-02-05 03:02:14",
				10179,
				"such awww i feel after joining my community tonight and making our voices heard protesting the bigotry and hate of phil robertson at the hilton garden inn - this evening . we were there , the people saw us , they heard us . many supported us with honks of their horns or shouts of encouragement as they drove by . if you see or hear injustice in the world or in your community . you must do something to make a difference ..... be heard , be seen , never give up hope . we marched , stood by the roadside and stood up for what we believe in and what is right . thank you emily withnall for organizing this event and also for your courage . one person can make a difference , and that person was you tonight . #nohateinourstate",
				null,
				null,
				null
			],
			[
				"2017-02-05 02:02:20",
				"2017-02-05 12:02:32",
				10151,
				"we volunteered at denver health in the newborns in need department today ! ❤️ 🍼",
				null,
				null,
				null
			],
			[
				"2017-02-04 10:02:09",
				"2017-02-04 06:02:59",
				10121,
				"getting ready for my first super bowl 51 experience . !!!! super star volunteer",
				null,
				null,
				null
			],
			[
				"2017-02-04 06:02:10",
				"2017-02-04 05:02:42",
				10094,
				"do you have strong public speaking skills and community connections ? i would love to have you on my team as a host family recruiter ! this position is a contract , seasonal / temporary , position . the role of the host family recruiter is to identify volunteer host families who are willing to open their homes and share their traditions with an international student . as an independent contractor , host family recruiters have the ability to determine the number of hours necessary to fulfill student placement objectives . host family recruiters are not required or expected to support exchange students or host families after placements have been made . submit your resume or email me at REDACTED:EMAIL for more information !",
				null,
				null,
				null
			],
			[
				"2017-02-04 06:02:09",
				"2017-02-04 02:02:50",
				10093,
				"they wanted us to lose focus ; we ' re too focused on the ' win . ' we are unwilling to throw everything away , so we lose the very things that could help us in our walk towards a better life . we know that all things work together for the good of them , who not only trust but solemnly remember the everlasting covenant between god and every living creature that , were created to serve the true and living lord our god . we believe in miracles , even when we see nothing happening in that precise moment .",
				null,
				null,
				null
			],
			[
				"2017-02-04 02:02:07",
				"2017-02-04 01:02:09",
				10076,
				"beloveds ! come gather with ilana and i , tomorrow at radicle herb shop for our song circle | benefit for standing rock medic healer council . the standing rock medic healer council seeks to coordinate supplies , resources and volunteers between various medic and wellness clinics at the standing rock dakota access pipeline opposition camps . for more information on their work , or to donate directly to their cause , please visit medichealercouncil.com. #standwithstandingrock #standingrock #nodapl #waterislife #mniwiconi #defunddapl # 💧 #sanghaayurveda #ayurveda #musicismedicine #songcircle #singing #solidarity #wetheresilient #resist #community #brooklyn #ny # ❤️ protest art by ernesto yerena .",
				null,
				null,
				null
			],
			[
				"2017-02-04 06:02:21",
				"2017-02-04 02:02:49",
				10054,
				"hey reno / sparks friends , we ' re looking for a sitter for harper on valentines evening for a couple hours ... any volunteers ?",
				null,
				null,
				null
			],
			[
				"2017-02-04 02:02:12",
				"2017-02-04 12:02:27",
				10030,
				"thank you to everyone who came out in the community and got a free bowl of hot soup ! the hes boys club and beta club received several compliments from our guests about their good manners ! giving back to your community is important and we hope to do more service projects in the future ! #boysclub #souperbowl #hamptonelementary #givingback #service #proudoftheseboys",
				null,
				null,
				null
			],
			[
				"2017-02-04 02:02:11",
				"2017-02-04 12:02:18",
				10029,
				"i ' m kinda of obsessed with this podcast . the just a little nicer episode is absolutely wonderful i love everyone ' s take on what is compassion .",
				null,
				null,
				null
			],
			[
				"2017-02-04 02:02:11",
				"2017-02-04 01:02:03",
				10028,
				"misha brown i tagged u in that post cuz it seems to me i ' m getting all the blame for all these days heather has been working its no ones fault but when things like this happens we all need to come together we all want to have days too off .... i ' m not mad at anyone the person that should be mad is heather marie buscemi cuz she is the one that has been picking up the slack i didn ' t come in today because my stomach is hurting an pooping what it seems to me like water i just want to say i ' m sorry for this ....",
				null,
				null,
				null
			],
			[
				"2017-02-03 06:02:42",
				"2017-02-03 01:02:42",
				9960,
				"its alot of ppl that dont want me to do good and praying on my down fall family members and all but its cool tho im still gone be on top wait til u see me in 5 years from now 😜 😜 😜 ✌ ✌ ✌",
				null,
				null,
				null
			],
			[
				"2017-02-03 06:02:41",
				"2017-02-03 05:02:35",
				9959,
				"shops starting to come together nicely",
				null,
				null,
				null
			],
			[
				"2017-02-03 06:02:11",
				"2017-02-03 03:02:19",
				9901,
				"love your enemies . bless those who curse you . do good to those who hate you . and pray for those who persecute you . - jesus ( matthew 5:44 )",
				null,
				null,
				null
			],
			[
				"2017-02-03 06:02:11",
				"2017-02-03 02:02:58",
				9900,
				"amanda , how do i get involved ? we always need volunteers in the groups i work with . #dementerin #indianademocraticparty #ourrevolution #resolutionrevolutionin #democracyforamerica #6thforprogress we need people for social media content , opposition and issue research , data management , volunteer coordination , and a myriad of other odd jobs , including running for office ! if you want to get involved , reach out to your local group today ! please reach out for assistance in finding your point of contact .",
				null,
				null,
				null
			],
			[
				"2017-02-03 06:02:11",
				"2017-02-03 04:02:08",
				9899,
				"i know i have a lot of #bossbabes who own their own businesses here ... so ... post just a pic -- no flyers or \" join me \" specials -- just a pic of an item you sell that is $25 or less ! 👉 no links , one post per person so everyone can join in . then copy and paste this to your wall , too . if someone likes or comments on your picture , please friend them ! 💜 let ' s grow our networks and support each other ! 🚨 if you do not repost , i will remove your picture . thanks for playing along !!",
				null,
				null,
				null
			],
			[
				"2017-02-02 06:02:04",
				"2017-02-02 05:02:05",
				9800,
				"so all my lgbt friends and allies . virginia state legislation is trying to pass a law that gives \" religious freedom \" to discriminate against lgbt employees . so we ' re driving down to richmond on tuesday to take a stand . if you ' re interested in standing with hrbor let me know .",
				null,
				null,
				null
			],
			[
				"2017-02-02 02:02:05",
				"2017-02-02 12:02:28",
				9776,
				"all the people rioting and \" protesting \" are gonna end up causing marshall law . you people think it ' s bad now ? wait until the cia and fbi get involved and start shooting you ignorant bunch of crybabies . you are the worst bunch of people i ' ve ever seen in my life . crying around and whining and acting like everybody owes you something . facebook live is gonna get it later .",
				null,
				null,
				null
			],
			[
				"2017-02-01 02:02:03",
				"2017-02-01 11:02:32",
				9590,
				"i love jk rowling - not only a beautiful mind and imagination but also has a beautiful soul . i love people who stand up for what they believe in as well as being a voice for those people who can not be heard . #jkrowling for minster of magic 2020 :-)",
				null,
				null,
				null
			],
			[
				"2017-02-01 06:02:02",
				"2017-02-01 04:02:46",
				9540,
				"i will not let this bring me down , i ' m worth so much more . i ' m beautiful . your worth is so much higher . i will not let you walk all over me ! i will stand up for who i am . i ' m beautiful .",
				null,
				null,
				null
			],
			[
				"2017-02-01 02:02:19",
				"2017-02-01 01:02:25",
				9497,
				"so ! uh , anyway . down with capitalism , have * actual fucking empathy * for other humans , do your part in your community",
				null,
				null,
				null
			],
			[
				"2017-01-31 06:01:06",
				"2017-01-31 02:01:18",
				9372,
				"i can not think of a more perfect way to launch the new 2017 posh catalog ! ( i ' m going to post this on my vip page as well as my personal facebook account too , i want to give everyone the opportunity to nominate their place of business !! ) perfectly posh is launching their new catalog on february 3rd , so over the next three days i will keep sharing this post and all you have to do is comment below the -- > name and location < -- of your place of business ! how easy is that ??? on february 4th i will announce which place of business will be getting pampered in posh and some breakfast 😉 the winning office will get a stack of new perfectly posh catalogs , plus a variety of samples including new products and posh favorites , as well as donuts and coffee for your office !!! i appreciate all of you so much for supporting my business ! this is my way of giving back <3 xoxo side note -- the nominee * * will get a little extra thank you from me 😍",
				null,
				null,
				null
			],
			[
				"2017-01-31 10:01:07",
				"2017-01-31 09:01:22",
				9245,
				"10,000 refugees in 75 countries . that ' s about 133 refugees per country . stop crying over refugees taking jobs . that 133 is not even enough to have one in each california location . oh , and the protesters have jobs , it ' s called having a day off - requested or otherwise . hell , with 4 jobs i was able to ensure i got certain days off for events . so please , think a little before you speak . realize you don ' t know the story behind everyone ' s life , and have some compassion .",
				null,
				null,
				null
			],
			[
				"2017-01-31 02:01:08",
				"2017-01-30 11:01:10",
				9101,
				"i made a promise to dedicate 10,000 hours over the next 5 years selfessly helping others become financially free . today and everyday moving forward \" fear \" means face everything and rise . there ' s no time to be afraid of failure , the tel movement is bigger then my sister and i . we started #tel with a core purpose that shall be fulfilled 💪",
				null,
				null,
				null
			],
			[
				"2017-01-30 06:01:06",
				"2017-01-30 03:01:24",
				8792,
				"#mywalletmychoice and brands standing up : in 2008 , i made purchasing decisions based on which brands ( there were few ) were on social media . in 2017 , i ' m making purchasing decisions based on the brands who aren ' t afraid to stand up for what they believe is right . i will make it rain , without hesitation , for a brand that has the courage to stand up . and it seems as though early - adopters and game - changing companies ( who might not have a sense around in 2008) are the ones who aren ' t afraid to stand up . i ' m talking about lyft and their pledge to donate $1m to aclu over the next 4 years . i ' m talking about starbucks hiring refugees . and that ' s just from this weekend . have you seen other brands , big or small , making similar declarations ? pop a link in the comments .",
				null,
				null,
				null
			],
			[
				"2017-01-30 06:01:05",
				"2017-01-30 03:01:01",
				8757,
				"please stop equating abortion , racism , homelessness , veteran affairs , and refugees . they are all seperate issues , all equally vital to human flourishing , that require our immediate retention . to say \" i wish yall cared about ______ as much as yall do about refugees \" is ignorant , callous , and down right lacking in compassion . and the rebuttal is the exact opposite so hush . i wish everyone cared more about others then they do themselves !!!",
				null,
				null,
				null
			],
			[
				"2017-01-30 02:01:07",
				"2017-01-29 11:01:43",
				8720,
				"a helping hand always be forgotten 🔥 🔥 🔥 🔥 ✋ ✋ ✋ stop helping people because your finger tips will get burned",
				null,
				null,
				null
			],
			[
				"2017-01-29 06:01:04",
				"2017-01-29 02:01:37",
				8655,
				"lord why did i volunteer to go in today , knowing good and well i ' m exhausted ! #5thdaystraight #davidsbridalkillingme #butimlovingtheschmoney #allformytwo 😘 😘 😘",
				null,
				null,
				null
			],
			[
				"2017-01-29 06:01:04",
				"2017-01-28 07:01:49",
				8654,
				"i just wanna say ...... i love everyone i associate with ..... you all inspire me to do good and be better #dashapproved #dashcares",
				null,
				null,
				null
			],
			[
				"2017-01-29 06:01:04",
				"2016-12-10 03:12:46",
				8653,
				"just celebrated one birthday is nov i know have a 9 year old , and celebrating another one tmrw the big 11 yees my breezy bri is growing up on me i still cant believe it and im such a proud mommy diva girls club , student council , cheerleader and basketball and still manages to do good in school her teachers are very proud of her 6th grade here she comes im not readdy 😢 😢 😢",
				null,
				null,
				null
			],
			[
				"2017-01-29 06:01:04",
				"2016-12-14 07:12:46",
				8652,
				"it was an amazing evening joining together for the #abillionlives showing ! big thank you to everyone that came out tonight to support this event . always remember \" your voice matters \" . stand up for what you believe in and don ' t give up ! please get involved as much as you can and be active by following ifast - iowans for alternatives to smoking and tobacco and casaa.org - the consumer advocates for smoke - free alternatives association #ivoteivape #smokefree #savevaping #ifast #casaa #notblowingsmoke #quitsmoking #cigarettefree thanks again , ashley lambson - halfhill",
				null,
				null,
				null
			],
			[
				"2017-01-29 06:01:04",
				"2017-01-29 01:01:42",
				8651,
				"dear samuel , i can ' t believe it ' s been a year since your passing . the memory is still fresh in my mind . i think about you often . like everyone else who loves and cares about you , i miss you terribly . at least , i know you ' re in peace and are experiencing god ' s comfort . your impact on this world will never be forgotten . your eagerness to show love and compassion to everyone you meet is a quality of yours that will stick with me until the day i pass . i know that in times with uncertainty and angst , such as now , we could use more people like you in the world so ready to give of themselves to others and to show love and kindness towards everyone . i just wanted to let you know i was thinking of you and i love you very much . continue resting easy .",
				null,
				null,
				null
			],
			[
				"2017-01-29 06:01:04",
				"2017-01-29 05:01:21",
				8650,
				"watching protests in airports around our beautiful country has me heartbroken that they ' re even necessary , yet proud to see so many people come together to show the world that we as a country are not a reflection of the fear based racism being forced down our throats by a man in power who ' s ignorance & hate shows no remorse . this man is not my president . 😤 to my latino american friends who support this racist ... you think this won ' t affect your family ? it ' s only a matter of time . this executive order is dangerous and is reminiscent of an era we promised would never happen again . only this time muslims and hispanos ( eventually ) will be the target . educate yourselves and remember wwii in the grand scheme of things wasn ' t that long ago . we will not be silenced ✊ 🏼 🌎 ✌ 🏼 #notmypresident #legalvisa #letthemin #rememberwwii #rememberannefrank #neveragain",
				null,
				null,
				null
			],
			[
				"2017-01-29 06:01:04",
				"2017-01-29 02:01:46",
				8649,
				"he hates to be on camera , but he ' s so damn handsome to me and that smile drives me fucking wild . no one could understand us our the bond we share , four years he ' s been waiting for me to let all my walls down and give myself to him completely . man it hasn ' t been easy , i put my feelings in a box and threw it away . but he fought me and he won , he won my heart my love and compassion . i can ' t live with out him and i refuse to . he has become a part of me and that ' s my husband . till the casket drops and some 💕",
				null,
				null,
				null
			],
			[
				"2017-01-29 02:01:16",
				"2017-01-28 11:01:14",
				8566,
				"what ' s orgs can folks get involved with to go against #muslimban ?",
				null,
				null,
				null
			],
			[
				"2017-01-29 02:01:16",
				"2017-01-29 01:01:27",
				8565,
				"i ain ' t busting my ass for a nurse and helping others out if trump banning immigration becuz they are lots of doctors , nurse ' s , n etc who are muslim around this country n saving lives n her trump banning immigration hell no those family needs their families in this country let them see their families life is too short",
				null,
				null,
				null
			],
			[
				"2017-01-28 10:01:05",
				"2017-01-28 07:01:42",
				8518,
				"7:40 am goals 😜 so thankful for upward and all the coaches / volunteers who give so much of themselves so these kids can have a blast ! ❤️ great league !",
				null,
				null,
				null
			],
			[
				"2017-01-28 06:01:02",
				"2017-01-28 04:01:07",
				8487,
				"volunteer recognition ceremony today !",
				null,
				null,
				null
			],
			[
				"2017-01-28 02:01:18",
				"2017-01-27 11:01:52",
				8421,
				"i ' ve been watching and reading a lot of rugby related things , and really wishing there was a local club in operation so i could get involved .",
				null,
				null,
				null
			],
			[
				"2017-01-27 06:01:05",
				"2017-01-27 03:01:29",
				8358,
				"tomorrow is the day guys please come out and show how we can come together as one community and help this family !!!!",
				null,
				null,
				null
			],
			[
				"2017-01-27 02:01:17",
				"2017-01-26 10:01:58",
				8277,
				"saquoia , you literally every time we work together . 😂",
				null,
				null,
				null
			],
			[
				"2017-01-26 10:01:08",
				"2017-01-26 08:01:53",
				8243,
				"you are not quite evolved or progressive or truly caring as you think if you still criticize ppl for the way they choose to make a difference .. or the \" ism \" they choose to stand up for .. if you think one form of protest is greater than another ... because it means you still think your way is the best / only way ... you are immature and still trying to convince yourself that \" your way \" is right .. it ' s the only reason you would feel the need to impose it on others ... you have yet to realize how important every one ' s role is ... you ' re stuck on being \" right \" ... and that ' s a battle happening only in your head ... ~ 👽 💜 🔥 - torah chamberlain israel i am only the messenger ...",
				null,
				null,
				null
			],
			[
				"2017-01-26 06:01:06",
				"2016-12-08 11:12:56",
				8200,
				"this speaks a thousand words ! sometimes we take for granted the simplest of things that not everyone in this world is fortunate enough to have . this is a huge reason that we need to sit back and think about how grateful we are for everything and everyone in our lives . speak it out loud every day . \" i am so happy and grateful for ... \" make a list and read it to yourself . i just want to spend my life helping others have what they think they can ' t .",
				null,
				null,
				null
			],
			[
				"2017-01-26 06:01:06",
				"2016-12-16 05:12:04",
				8199,
				"very successful meeting of the jackson county democratic party in medford . joined a caucus aimed at social justice and economic inequality ! we zeroed in on issues like affordable housing in medford and rent control . feels good to get involved . #meetingoftheminds 🙏 🏼",
				null,
				null,
				null
			],
			[
				"2017-01-26 06:01:06",
				"2017-01-03 03:01:17",
				8198,
				"\" travel is fatal to prejudice , bigotry , and narrow - mindedness , and many of our people need it sorely on these accounts . broad , wholesome , charitable views of humanity and things cannot be acquired by vegetating in one little corner of the earth all one ' s lifetime . \" - mark twain have a great trip georgina stone !",
				null,
				null,
				null
			],
			[
				"2017-01-26 06:01:06",
				"2016-12-28 07:12:23",
				8197,
				"i need 5 volunteers to trial thrive for three days , follow my instructions and post their experience on facebook !! you must be someone who has never tried it before & you must be open minded to feeling amazing !! quick .... only the first five people will be chosen !!",
				null,
				null,
				null
			],
			[
				"2017-01-26 06:01:06",
				"2017-01-06 11:01:29",
				8196,
				"for 2017 i am honored to be president of uncle skate charity . we have teamed up with phoenix skatercon and are doing some rad charitable things this year . i ' m stoked to be able to make some major decisions to where this years project funding will go .",
				null,
				null,
				null
			],
			[
				"2017-01-26 06:01:06",
				"2016-12-21 12:12:36",
				8195,
				"goals for 2017 : 1 . volunteer 2 . stop overcooking chicken",
				null,
				null,
				null
			],
			[
				"2017-01-26 06:01:06",
				"2017-01-26 04:01:26",
				8194,
				"those praying .... #thankyou #icanfeelit as i tell you all on the campaign trail ... just look up and say #lordblesshim those volunteering , #thankyou . those who have donated ... #thankyou . to my favorites : those hating ahhh #thankyou . #betterdaysahead",
				null,
				null,
				null
			],
			[
				"2017-01-26 06:01:06",
				"2017-01-16 11:01:04",
				8193,
				"there is something incredible about dreaming , doing and achieving . there is something incredible about helping others bring their own greatness out ! there is something incredible about the gift god has given me to see the best in people ! and by golly i ' m gonna continue using it ! #bethehope #hesthegrace",
				null,
				null,
				null
			],
			[
				"2017-01-26 06:01:06",
				"2017-01-09 12:01:05",
				8192,
				"volunteers will have 8 sausage links 5 sausage pattys 6 eggo waffles and grits 1 12oz orange juice 1 12 oz milk and the pastor bought the volunteers 5 24 packs diet pepsi 5 24 packs of doctor pepper 5 24 packs of pepsi and 5 24 packs of mountain dew each volunteer will get 2 sodas also to drink 2 8oz coffees fridays dinner was spaghetti and texas toast saturday dinner was shepherds pie sunday dinner was meat loaf mashed potatoes with gravy and green beans and carrots lunch saturday sunday and today 2 uncrustables peanut butter jelly sandwich and 1 12 oz glass of kool aid desert was friday pumpkin pie saturday chocolate cake sunday lemon cake saturdays breakfast was 2 sausage biscuits 1 12 oz cup of apple juice sunday was 2 chicken biscuits and 1 12 oz cup of coffee or 1 12 oz cup of grape juice todays lunch drink is 1 12 oz glass of tang",
				null,
				null,
				null
			],
			[
				"2017-01-26 06:01:06",
				"2017-01-11 09:01:38",
				8191,
				"niggas said i could graduate a year early 🗣 now it ' s no distractions im boutta do good to get tf up out of this hellhole 📚",
				null,
				null,
				null
			],
			[
				"2017-01-26 06:01:06",
				"2017-01-23 03:01:10",
				8190,
				"give your helping hand to those who need it at the 2nd annual care for t.e.a.r.s. !",
				null,
				null,
				null
			],
			[
				"2017-01-26 06:01:06",
				"2016-12-21 06:12:57",
				8189,
				"remember this andre , you ' re in a great position to attract unlimited wealth , success , and abundance to yourself , and those you love . keep grinding , keep helping others , and continue to be the inspiring visionary you are ! thanks self ! 🙌 🏾 🔑 💯 😁 #iamandrehill #morningselftalk #inspiration #motivation #determination #ambition #hardworkpaysoff",
				null,
				null,
				null
			],
			[
				"2017-01-26 06:01:06",
				"2017-01-25 04:01:53",
				8188,
				"i wonder what would happen if we all protested paying taxes and help organizations through charitable donations ?",
				null,
				null,
				null
			],
			[
				"2017-01-26 06:01:06",
				"2016-12-09 05:12:22",
				8187,
				"direct sales just means you buy direct from the company ( no middle man like gnc ) . but somehow this has been looked at as a scam because the person you ' re buying it from is making commission . when you buy from gnc do you not think those employees aren ' t being paid ? they ' re not working there as a volunteer lol . people use uber & etsy and no one feels like they ' re being scammed . do they ? but uber is much cheaper than a taxi and a whole lot better service so people use them instead . and etsy is normal talented people selling their items on a site instead of in a store . because they can offer you a much better price ! that ' s it . nothing more to it . most people are just not aware of the difference .",
				null,
				null,
				null
			],
			[
				"2017-01-26 06:01:06",
				"2017-01-18 04:01:08",
				8186,
				"roommate woke me up so i started to think about my future life goals for when i ' m better - go back to school and get my phd in holistic nutrition learn about epigenetics so i can tie that into creating meal plans to help provide nutrient dense meals to support the body become involved in ministry , you name it ive done it or been through it and i would love to help women who are struggling with abuse , trauma , addiction , etc . have a family of my own - get married , have children ( most likely adopt ) . buy a house be the woman in christ that he wants me to be , the real authentic me . one that leans on him for strength only and doesnt waiver on it . one that will show love and compassion to others no matter what , one that wont judge , one that is proud to be one of his chosen children . and one that will help lead others to him as much as possible . quit swearing haha i guess many of these could be done now :)",
				null,
				null,
				null
			],
			[
				"2017-01-26 06:01:06",
				"2016-12-31 11:12:17",
				8185,
				"so i can honestly say 2016 was possibly the worst year of my life so far , but yet it was full of adventures love and life lessons . lost some people who were very dear to me , but grew closer to my family . strengthened my faith and found new hobbies . spend an uninvited time to the hospital to often , but had new experiences . made new friends this year who i hope stay with me to the end ! as much as i couldn ' t wait for this year to be over , god has held me in his hand and kept me safe when so many times i could have died . i have purpose , love , compassion , and wisdom to bring in this new year . and now we have a nice house to celebrate bringing in the new year with great friends ! i am feeling very blessed and can ' t wait to see what this year holds !",
				null,
				null,
				null
			],
			[
				"2017-01-26 06:01:06",
				"2017-01-26 02:01:41",
				8184,
				"love the feeling of bengay but not the smell or the nasty chemicals ? doterra essential oils * deep blue is perfect for a soothing massage after a long day of work . wintergreen , camphor , peppermint , ylang ylang , helichrysum , blue tansy , blue chamomile , and osmanthus work together to soothe and cool .",
				null,
				null,
				null
			],
			[
				"2017-01-26 06:01:06",
				"2017-01-23 06:01:44",
				8183,
				"absolving someone of responsibility for their actions is not compassion , it ' s enabling .",
				null,
				null,
				null
			],
			[
				"2017-01-26 06:01:05",
				"2017-01-10 12:01:52",
				8182,
				"attention !!! important , rice household psa !! let ' s all show some love and compassion , the redbreast , i mean , worms need you !! tiffany rice",
				null,
				null,
				null
			],
			[
				"2017-01-26 06:01:05",
				"2016-12-21 04:12:17",
				8181,
				"my dearest gabby , this time of year , i get distracted and harried about the presents i haven\u2019t wrapped , the food i wish i had made earlier , the worry about so much family in such close spaces and the tempers that can flare . you know i\u2019m guilty of having too many expectations for how things will go , and not enough flexibility when they go in a completely different direction . but please know this : i love you , i am incredibly proud of you , and i cherish the time we have together . this is a beautiful season of light , hope , and love . i hope that i can reflect those gifts through my spirit , my actions and my patience as we all come together . welcome home .",
				null,
				null,
				null
			],
			[
				"2017-01-26 06:01:05",
				"2016-12-31 06:12:52",
				8180,
				"i don ' t know austin carlile in any way shape or form , nor am i affected by his departure from of mice and men , but i can say from the bottom of my heart that i hope he finds peace , and is able to find a shred of good health in such a dark place , the disease he has been stricken with i wouldn ' t wish upon anyone . any of you who are saying negative things about another human being when he is literally staring death in the face , i hope you realize that your words carry weight , and your name and future endeavors will be shackled to your lack of basic human empathy .",
				null,
				null,
				null
			],
			[
				"2017-01-26 06:01:05",
				"2017-01-12 09:01:38",
				8179,
				"prayer for strength goddess mother help me to be patient and strong to see what is truly important to act without selfishness or fear goddess mother help me to trust your wisdom to resist the coward ' s way to walk in faith and compassion to be truly human in spirit and heart",
				null,
				null,
				null
			],
			[
				"2017-01-26 10:01:02",
				"2017-01-19 03:01:30",
				8146,
				"to my construction friends . what ' s the golden rule when drilling concrete ? you don ' t mention rebar until after you hit your first piece . i ' m 19 for 23 and haven ' t hit a single rebar . dude walks up and says \" awesome , you ' re almost done and haven ' t hit any rebar yet \" ..... thanks bro , what do you know .... the very next hole i drill ? rebar !! i was almost done and now i need to find the rebar eater ... dick",
				null,
				null,
				null
			],
			[
				"2017-01-26 10:01:02",
				"2017-01-26 06:01:55",
				8145,
				"please pray for the calming me my heart and mind . and for others the allow compassion and love into their hearts .",
				null,
				null,
				null
			],
			[
				"2017-01-26 06:01:01",
				"2017-01-26 02:01:42",
				8110,
				"a little late but for day 3 , for the #honorchallenge this person has been an inspiration in my life since day 1 , you know those kind of people you meet and connect with them instantly , like its divine ? yeah , i remember asking god for a paul and he sent me my spiritual pops israel peña . i honor you man of god , for you love , your compassion , your care , your leadership , your teachings and your function ! love you dad . #honorchallenge #honorspree i challenge my brother brian arocho to honor someone once or for the next 30 days !",
				null,
				null,
				null
			],
			[
				"2017-01-26 02:01:04",
				"2017-01-10 04:01:50",
				8060,
				"if more women would actually support each other , what a different place the world would be . learn to collaborate instead of compete . stay humble & classy !",
				null,
				null,
				null
			],
			[
				"2017-01-25 06:01:05",
				"2017-01-25 02:01:26",
				7936,
				"if you want to stand up for women , and show your support , look up local womens shelters . go donate money , food , clothing , or donate just a couple hours of your time and volunteer there . bring your passion , love and support somewhere that truly needs it 💗 hate doesn ' t cancel out hate",
				null,
				null,
				null
			],
			[
				"2017-01-25 06:01:04",
				"2017-01-25 05:01:22",
				7935,
				"i wanna see other people ' s result pictures ! don ' t be shy , we are all here to support each other ' s progress ! drop me below 🤔",
				null,
				null,
				null
			],
			[
				"2017-01-25 02:01:05",
				"2017-01-25 12:01:53",
				7913,
				"🔆 rise and shine 🔆 yesterday i let the group of girls that i coach with know that i was struggling to get up and workout , and fit my workout in lately . i was just coming up with stupid excuses each day . 💪 🏼 what ' d they do to you might ask ? well - we formed a group chat of 7 of us and woke each other up this morning and reminded each other why we are on this journey . ❤️ motivation ❤️ support ❤️ morning workout already done ❤️ did i mention all from my living room with coffee in hand ? ☺️ do you want this kind of motivation and support ? think you ' d be good at helping others in this way ? interested in turning your fitness into a business ? 👍 🏼 message me and we can chat about this !! it was the best decision i ever made !!",
				null,
				null,
				null
			],
			[
				"2017-01-25 02:01:05",
				"2017-01-25 12:01:48",
				7912,
				"so can someone explain to me how trump represents the love that god wants us to have towards each other ? now let me issue this s disclaimer i love god and i ' m proud to say that but trump in my opinion doesnt show the compassion of a man who has god in his heart . how can someone have so much hatred and say such horrible things about other people but yet be praised like he is doing god ' s work ? i really don ' t think god would build walls to keep people out . god wouldn ' t mock the disable or the elderly . god wouldn ' t disrespect woman by grabbing their p * * * y . so can one my extreme christians that voted for trump please explain ?",
				null,
				null,
				null
			],
			[
				"2017-01-25 02:01:18",
				"2017-01-25 12:01:51",
				7844,
				"if you ' re one of those people that support the defunding of planned parenthood because you ' re \" pro - life \" yet has not volunteered your time , money , or fostered children , you are a hypocrite .",
				null,
				null,
				null
			],
			[
				"2017-01-25 02:01:17",
				"2017-01-24 11:01:47",
				7843,
				"google why are black people broke . jewish guy telling you exactly why because they don ' t support each other . they support lv and nike . jewish community hire each other & support each other . kind of like when we had #blackwallstreet then white people burned it down ( this is nothing against white ppl just stating facts ) because they didn ' t need anything from them and unlike now the dollar in that community circulated more than once .",
				null,
				null,
				null
			],
			[
				"2017-01-25 02:01:17",
				"2017-01-25 12:01:37",
				7842,
				"cold silence has a tendency to atrophy any sense of compassion between supposed lovers .",
				null,
				null,
				null
			],
			[
				"2017-01-24 10:01:05",
				"2017-01-24 09:01:39",
				7795,
				"why do i have to have so much empathy ? ! ?",
				null,
				null,
				null
			],
			[
				"2017-01-24 06:01:03",
				"2017-01-24 05:01:59",
				7758,
				"i challenge each and everyone of you to think about how someone else is feeling today .. show some compassion and empathy to someone .. you really don ' t know how much a simple act of compassion can do for another human .. i challenge you to be human .. show some love .. stop the stress .. be a light .. change someones life and brighten their outlook . #onelove",
				null,
				null,
				null
			],
			[
				"2017-01-24 02:01:08",
				"2017-01-24 12:01:21",
				7739,
				"this take me back to when me my mom and my brother had to sing this in church for everybody lol ... as i look back over my life . i can see how you ' re love has guided me . and even tho i ' ve done wrong u never left me alone but u forgave me and u kept on blessing . this i recall to my mind therfore i have hope it is because of your mercy that we r not consumed . because thy compassion fail not they r new every morning . great is thy faithfulness , great is thy faithfulness ...",
				null,
				null,
				null
			],
			[
				"2017-01-24 10:01:07",
				"2017-01-24 09:01:38",
				7721,
				"looking for a few volunteers to assist with the gala next month . call me asap REDACTED:PHONE .",
				null,
				null,
				null
			],
			[
				"2017-01-24 06:01:02",
				"2017-01-12 12:01:44",
				7672,
				"you know what ? if you don ' t support me , i don ' t support you . that simple . the golden rule i lived from since forever . as far as fb goes its useless to me . i mean that .",
				null,
				null,
				null
			],
			[
				"2017-01-23 10:01:09",
				"2017-01-23 09:01:44",
				7590,
				"breakfast this morning was do good .... 😓 😓 😓",
				null,
				null,
				null
			],
			[
				"2017-01-23 06:01:06",
				"2017-01-23 04:01:04",
				7543,
				"its amazing people on this let work together kick . for the last 8 years you sat on your ass and did nothing . now all of a sudden you had an epiphany and you wanna get to work . nope not gonna happy . i will be writing tammy baldwin and gwen moore everyday to make sure they fight you every step of the way .",
				null,
				null,
				null
			],
			[
				"2017-01-23 10:01:06",
				"2017-01-22 01:01:11",
				7516,
				"thank you ! to the women and men , the children , and everybody in between , for marching today whether you were there in person or in spirit . to my friends and family , i love you all dearly for participating in this truly historic event . it ' s so beautiful how we ' ve come together as a whole , worldwide . what a magical day its been , sincerely .",
				null,
				null,
				null
			],
			[
				"2017-01-23 02:01:07",
				"2017-01-23 12:01:41",
				7436,
				"i send two volunteer application out on website so maybe just maybe i can get my feet up and start volunteering again",
				null,
				null,
				null
			],
			[
				"2017-01-23 02:01:07",
				"2017-01-23 01:01:33",
				7435,
				"how ' s trump tryna make us come together ?",
				null,
				null,
				null
			],
			[
				"2017-01-22 10:01:03",
				"2017-01-22 07:01:21",
				7398,
				"why can ' t we all work together ? i ' ll tell you why . it ' s because some want to take rights away from others who fought so hard for those rights . it ' s because some want to impose their religious ideals onto everyone instead of letting them be free to choose their own beliefs ( or none at all ) . it ' s because some feel they have the right to dictate what we do with our bodies . and it ' s because some believe the color of your skin makes you inferior or superior in some way . it ' s because some view violence as the answer to all our problems . because some are unwilling to step off their pedestal and learn to compromise and respect others ' opinions . because some want everything for themselves and nothing for everyone else . it ' s because in this day and age , no one wants to take time to listen and learn with an open heart and mind . namaste",
				null,
				null,
				null
			],
			[
				"2017-01-22 10:01:03",
				"2017-01-22 09:01:35",
				7397,
				"so overcome with joy right now as i stand with my brothers and sisters in my hometown . i am truly amazed at the turnout and so grateful for our freedom to assemble and support one another . ❤ ❤ ❤ my heart is full .",
				null,
				null,
				null
			],
			[
				"2017-01-22 06:01:02",
				"2017-01-22 04:01:23",
				7361,
				"crossroads really gets smaller when you volunteer and get involved . we ran a little late because we were busy saying hi to people we knew on the way to the sanctuary . we love it",
				null,
				null,
				null
			],
			[
				"2017-01-22 06:01:01",
				"2017-01-22 04:01:21",
				7360,
				"fulfilling our civic duty yesterday to peacefully protest and stand up for the issues that are important to us . heartened by the turnout and sign - making skills of our fellow new orleanians . :)",
				null,
				null,
				null
			],
			[
				"2017-01-22 10:01:08",
				"2017-01-22 09:01:21",
				7332,
				"gotta say i got some great compliments on how great our safety patrol is always out and keeping the community safe just a shout out to our volunteers and board members on the great job we are doing keep up the good work team it just takes our support to make a difference in our community #howardbeach #hammy #lindenwood",
				null,
				null,
				null
			],
			[
				"2017-01-22 06:01:16",
				"2017-01-22 02:01:27",
				7269,
				"starting to come together",
				null,
				null,
				null
			],
			[
				"2017-01-21 10:01:03",
				"2017-01-21 06:01:59",
				7188,
				"my prayer is that when historians write about this chapter in us history they remember the majority who stood up for their beliefs , values , and views of the progress that this country has made . take note world because this is what democracy looks like 💜",
				null,
				null,
				null
			],
			[
				"2017-01-21 06:01:06",
				"2017-01-05 01:01:52",
				7145,
				"compassion and evidence",
				null,
				null,
				null
			],
			[
				"2017-01-21 06:01:06",
				"2017-01-21 02:01:54",
				7144,
				"praise the lord , my soul , and forget not all his benefits \u2014 who forgives all your sins and heals all your diseases , who redeems your life from the pit and crowns you with love and compassion , who satisfies your desires with good things so that your youth is renewed like the eagle ' s . - psalm 103 : 2 - 5",
				null,
				null,
				null
			],
			[
				"2017-01-21 02:01:01",
				"2017-01-21 10:01:04",
				7133,
				"mfs can ' t take me away from my image i am aone even wen i ' m down bad i still manage to lend a helping hand . i love me . i got a heart that will keep me hurt 100 aone approved",
				null,
				null,
				null
			],
			[
				"2017-01-21 10:01:06",
				"2017-01-21 07:01:04",
				7122,
				"personal movie review for the movie hidden figures . in my opinion this movie was absolutely phenomenal . along with the work that the actresses and actors did it when playing the different roles . i hope to see the movie nominated for several awards this year . i encourage anyone that wants to see this film to go and do so !!!! it ' s so worth it ! if i could use some words to describe this movie would be perseveration , dedication , compassion , confidence , and determination . and the most important word of all in my opinion is equality .",
				null,
				null,
				null
			],
			[
				"2017-01-21 06:01:07",
				"2017-01-21 05:01:17",
				7101,
				"alpha meet your omega , oppose me , ad you ' ll be blown up , i have no sense of compassion , that ' s as dead as the frozen wind , like a paper bag flowing through a river flooding in north korea . due to my violent history and hysteria .",
				null,
				null,
				null
			],
			[
				"2017-01-21 02:01:17",
				"2017-01-21 01:01:30",
				7051,
				"all my new york friends n familia please please please please do me a favor ..... go tomorrow to the bruce wright memorial conference center at 845am no later and volunteer til 1130 - 12 at the feed our vets food pantry tell carlos that q & i sent you .... get involved folks it ' s so rewarding <3 <3 <3 ps . bring your older kids , teach them how to give back show them caring and giving back is what it ' s all about",
				null,
				null,
				null
			],
			[
				"2017-01-21 02:01:16",
				"2017-01-20 11:01:37",
				7050,
				"the imagination today was good , i have hope for our new president . his speech was well put , wanting americans to come together for americans and america . \" we are one nation -- and their pain is our pain . their dreams are our dreams ; and their success will be our success . we share one heart , one home , and one glorious destiny . \" only time will tell , but we should all give him a chance and have hope .",
				null,
				null,
				null
			],
			[
				"2017-01-21 02:01:16",
				"2017-01-21 12:01:03",
				7049,
				"as i sit here and am excited to see what strides this country can take these next 4 - 8 years , i wanted to take the time and thank former president barack obama . i served just under 4 years under you . not everything you did i liked , but you were our president for 4 years and many people loved you and your family . you had some great things you did and some terrible things but all in all . thank you for everything you did ! now we pass the presidency to president donald trump , whether you like either one . we must come together and support him just like we supported obama . thank you america for being so great , now let ' s make america great again ! we were blessed to have obama as our president for a great 8 years . political views or not . good and bad times , that is all . thank you everyone .",
				null,
				null,
				null
			],
			[
				"2017-01-20 10:01:07",
				"2017-01-20 07:01:03",
				6987,
				"just bought coffee for a woman at joe van gogh woodcroft . she was overjoyed and now wants to get involved with inspire media network . and ... the barista said customers have been buying coffee for strangers all day ! #kindnessblitz",
				null,
				null,
				null
			],
			[
				"2017-01-20 10:01:07",
				"2017-01-20 07:01:24",
				6986,
				"let ' s all remember today that everyone ' s opinions matter it doesn ' t make them right or wrong just because they are different from your opinion . we all need to support eachother and work together . ❤ on that note i am going to have a wonderful day how about you ?",
				null,
				null,
				null
			],
			[
				"2017-01-20 06:01:08",
				"2017-01-20 05:01:40",
				6934,
				"so the man who really made me who i am just died . he has always been there for me in every way possible . he raised me , made me proper and showed me love and compassion for the whole world . he lived to help people . just don ' t know what to do with myself right now .",
				null,
				null,
				null
			],
			[
				"2017-01-20 06:01:08",
				"2017-01-20 05:01:28",
				6933,
				"today is the day ! let us come together & be the change we wish to see in this world ! oh , and make america { more } great ! sometimes we forget just how lucky we are to be americans ! ❤️ 💙 #inauguration2017",
				null,
				null,
				null
			],
			[
				"2017-01-20 06:01:08",
				"2017-01-20 02:01:01",
				6845,
				"at the end of a busy day that ended up being a bit busier then expected all i can do is sit back and be blessed and have a nice cold superfood dinner and shortly message people . although the day didn ' t go as planned .. my kids had a pretty good day . we figured out what b ' s rash was . i got to see some of my silverleaf friends ❤ we made it to little mans school family night . came home to hunter having a fun family bag for being line leader . --- which ended us learning the great lesson of giving makes us happy from the rainbow fish ! 🐠 🐟 just what coaching has also helped me learn !! if your feeling low and sad .. try giving or helping others .. see how you feel after ? #blessed #givingfeelsgood #allaroundgoodday #momlife #superfooddrink #shakeology #coachlife #family",
				null,
				null,
				null
			],
			[
				"2017-01-20 06:01:08",
				"2017-01-20 05:01:32",
				6844,
				"1 peter 3 : 8 - 12 \" 8 finally , all of you , be like - minded , be sympathetic , love one another , be compassionate and humble . 9 do not repay evil with evil or insult with insult . on the contrary , repay evil with blessing , because to this you were called so that you may inherit a blessing . 10 for , \u201c whoever would love life and see good days must keep their tongue from evil and their lips from deceitful speech . 11 they must turn from evil and do good ; they must seek peace and pursue it . 12 for the eyes of the lord are on the righteous and his ears are attentive to their prayer , but the face of the lord is against those who do evil . \u201d \"",
				null,
				null,
				null
			],
			[
				"2017-01-20 06:01:08",
				"2017-01-20 02:01:32",
				6843,
				"\" liu tai , the war minister of politics tse cao wishes to speak with you . \" came and said the messenger not paying attention to the fleeing brutes as they did as the young china king commanded . he nodded in grace and watched the clouds pass through the heavens as he said to himself , \" i will leader this land into benevolence and show compassion and mercy unto my fellow poor citizens . ! ' zou ci watched from a distant cliff sipping tea , out of the sight of liu tai . and smiled upon him greatly , \" oh you will my lord . but many will defect as they follow your lead . \" he disappeared into the wind and blowing leaves .",
				null,
				null,
				null
			],
			[
				"2017-01-19 10:01:15",
				"2017-01-19 08:01:42",
				6755,
				"i love volunteering at the shelter and know that i might get a paid position with them warms my heart even more . because then i will be able to care for these precious babies even more . i have to start with donations , of food and supplies . then i ' m starting a new bathing routine for the dogs and a play room for the cats . these people take my ideas to heart and i love that ! if anyone knows good ways to get donations whether it be through events or fundraiser let me know i could use the help brain storming ! 🐈 🐕 🐾 ❤",
				null,
				null,
				null
			],
			[
				"2017-01-19 10:01:14",
				"2017-01-19 07:01:50",
				6754,
				"there is no one , o my lord , who can deal bountifully with me to whom i can turn my face , and none who can have compassion on me that i may crave his mercy . cast me not out , i implore thee , of the presence of thy grace , neither do thou withhold from me the outpourings of thy generosity and bounty . ordain for me , o my lord , what thou hast ordained for them that love thee , and write down for me what thou hast written down for thy chosen ones . my gaze hath , at all times , been fixed on the horizon of thy gracious providence , and mine eyes bent upon the court of thy tender mercies . do with me as beseemeth thee . no god is there but thee , the god of power , the god of glory , whose help is implored by all men .",
				null,
				null,
				null
			],
			[
				"2017-01-19 06:01:07",
				"2017-01-19 04:01:52",
				6706,
				"its funny even the wisest man to live said in proverbs , if they don ' t listen to you when you try to give them wisdom , knowledge and correction , you leave them alone and watch them fall to their own demise . a word for the young and wise , you don ' t have to put up with friends if they don ' t want to do good or listen to you . if you know to do right , you do right and if they choose to follow or they choose to do otherwise , let them be . success is a very narrow road only one can walk the road the rest can only choose to follow behind him , that is a real leader !",
				null,
				null,
				null
			],
			[
				"2017-01-19 06:01:06",
				"2017-01-19 04:01:50",
				6705,
				"ok weather you and my head need to have a come together and stop being at war 😭",
				null,
				null,
				null
			],
			[
				"2017-01-19 06:01:06",
				"2017-01-19 03:01:30",
				6704,
				"5 years ago today at 5:20 p.m. , after 23 hours of labor , my baby boy was born sucking on his top lip . ever since then he has been the light of my life . he ' s funny , smart , loves anime , sings every day and is so full of joy and empathy ... and i love him dearly . happy 5th birthday to my minion , my mini me , my twin , my pooh bear ... micah daniel pratt .",
				null,
				null,
				null
			],
			[
				"2017-01-19 06:01:02",
				"2017-01-19 04:01:49",
				6644,
				"that moment you understand why you do not have any friends because you do not want to be a part of their drama thank you jesus i am not all about that life no more and thank you for leading me in the right way and making me stand up for myself and not let people walk all over me i rather be friends with myself than have people walk all over me that ' s just my honest opinion",
				null,
				null,
				null
			],
			[
				"2017-01-18 10:01:06",
				"2017-01-11 07:01:30",
				6550,
				"character concept : a good , heroic necromancer . he would view a person ' s actions , not their magic , as the judge of their character . the dead have gone on to the afterlife , using their abandoned meat puppets as a resource to do good deeds and fight evil is acceptable , noble , even . he may be shunned by the masses who don ' t understand why he does what he does , but the pursuit of noble deeds is more important than how people perceive his work .",
				null,
				null,
				null
			],
			[
				"2017-01-18 06:01:02",
				"2017-01-18 04:01:07",
				6498,
				"ok so i guess i didn ' t get the job at the place i had interview for yesterday but the funny thing is , is that they just sent me a application to volunteer . no i ' m not gonna hire u but please come in and volunteer . lol kind of funny .",
				null,
				null,
				null
			],
			[
				"2017-01-18 06:01:02",
				"2017-01-01 04:01:55",
				6497,
				"happy 2017 !!!! first day of this 365 page book we call life . this year i choose to be happy , healthy , and a spectacular friend , sister , daughter , girlfriend and student i choose growth trust loyalty love no matter what & honesty leadership . i choose happiness regardless of what that look likes to anyone . have a great day and start this day of great so the rest of the year follows up !!!! because everyday is . choice ! do good and be good . treat others how you would wanna be treated . love no matter what & thank you for following me & being my friend youre amazing never forget that . 🎉 💘 👏 page 1\u20e3",
				null,
				null,
				null
			],
			[
				"2017-01-18 06:01:01",
				"2017-01-18 05:01:01",
				6496,
				"before you criticize take a moment to view the situation from their perspective , question the reason and motives , then reflect . a little empathy goes a long way .",
				null,
				null,
				null
			],
			[
				"2017-01-18 06:01:01",
				"2017-01-16 05:01:14",
				6495,
				"\" the golden rule is of little value unless you realize that you must make the first move . \" - unknown",
				null,
				null,
				null
			],
			[
				"2017-01-18 02:01:02",
				"2017-01-18 01:01:07",
				6473,
				"volunteering and giving back . #womenempowerment <3",
				null,
				null,
				null
			],
			[
				"2017-01-18 10:01:02",
				"2017-01-18 07:01:06",
				6461,
				"it was great to briefly discuss immigration , criminal justice and oscar lopez rivera ' s release with central florida state legislators yesterday on behalf of the aclu of central florida aclu of florida aclu nationwide . a special shout out to representative carlos guillermo smith for his attention and diligence on this matter . we are ready to continue to stand up for immigrant rights in the state of florida , which by the way , was discovered by a spanish speaking immigrant , juan ponce de leon ! #aclucentralfl #heretostay #immigrationreform #orangecountyfl",
				null,
				null,
				null
			],
			[
				"2017-01-18 06:01:17",
				"2017-01-18 04:01:46",
				6436,
				"iso someone who can do good window tinting",
				null,
				null,
				null
			],
			[
				"2017-01-18 02:01:16",
				"2017-01-18 01:01:58",
				6393,
				"marriage is committing to share a life together . to carry one another ' s burdens . to cry with one another . to support one another through difficult times . marriage means being one another ' s confidant , lover and friend . you aren ' t just two people living together . you are a beautiful union of two people who covenant to love each other forever .... leah renee .",
				null,
				null,
				null
			],
			[
				"2017-01-18 02:01:15",
				"2017-01-17 11:01:29",
				6392,
				"lord , god i trust in you that you will forever be with me everywhere i go . my cup is overflowing with love and compassion for every human being . i seek peace in a difficult situation . it hurts my heart how deceptive people can truly be . we were not created with hate or lies in our hearts . this world is so self serving that it consumes the people that seek after the things of this world . it taints the hearts of the pure and seeks to destroy the soul . lord i pray that you touch the hearts of those that are so consumed with evil . most of all , my lord , give me peace to withstand the storm that seeks to destroy . for my heart trusts in the lord , but flesh is weak . i don ' t need a sign that you are with me because i know you are . give me courage and strength to continue to seek after you while still going through trials . blessed is the one that trusts in the lord by faith in his promise , and not by sight of the presence of god .",
				null,
				null,
				null
			],
			[
				"2017-01-17 10:01:02",
				"2017-01-17 07:01:11",
				6358,
				"wow .... how time flies and how i miss the exodus family so much . i miss volunteering but it is very hard with working nights .... i feel like i barely can keep a halfway social life and keep my room clean . ginger or barb you guys can let me know what the scheldue is illl see what i can do",
				null,
				null,
				null
			],
			[
				"2017-01-17 02:01:15",
				"2017-01-17 01:01:29",
				6187,
				"don ' t ever let someone tell you that you cannot make a difference . keep standing up for what you believe in . fighting for what is right does not make you a \" sore loser \" who can ' t accept the way things are . you should not accept the way things are . stand up for yourself . stand up for each other . keep trying to help us move in a positive and accepting and tolerant direction . it is up to us to make that happen . keep fighting the good fight .",
				null,
				null,
				null
			],
			[
				"2017-01-16 10:01:04",
				"2017-01-16 09:01:11",
				6144,
				"day 1 of 14 i can sit and complain life stinks and experience or i can work both jobs and volunteer to make a world hopefully a little better of place . when god set these chance personal and professionally in front of me why not taken them . getting healthy snack to pack my bag with so i don ' t eat junk food . round two here we go ... a coworker set me this and it kind of true . if texts or calls go unanswered just bare with me these next 2 weeks .",
				null,
				null,
				null
			],
			[
				"2017-01-16 02:01:02",
				"2017-01-16 11:01:41",
				6092,
				"nobody is free when there are others oppressed . to be free we must truly be a united america . take a lesson in love and stand up for what you believe in today and every day hereafter . change starts with one person in one single moment - let it start with you !",
				null,
				null,
				null
			],
			[
				"2017-01-16 06:01:14",
				"2016-12-15 02:12:22",
				6050,
				"so pissed ! i volunteered at little victors school for the santas workshop thing yesterday and they said we could go before school so i take him today early so he could buy stuff and they say kids can ' t shop before school and his class did it on tuesday ! fuck it we will just spend the money somewhere else , now they are missing out on 50 $ . ohhhh well . stupid school 😑",
				null,
				null,
				null
			],
			[
				"2017-01-16 02:01:14",
				"2017-01-15 09:01:27",
				6015,
				"well , it ' s official ... as of last night dave and i will be starting one of the most fulfilling \" jobs \" we could get ... we start orientation to become volunteers at the animal shelter where we got mia . i ' ve been wanting to do something like this for years ( :",
				null,
				null,
				null
			],
			[
				"2017-01-15 06:01:05",
				"2017-01-03 05:01:17",
				5927,
				"lmao i ' m not fina let nobody stop me or distract me from getting my shit str8 if you ain ' t tryna help me motivate me build wit me you know what it is i ' m always helping others for the good but never think about myself",
				null,
				null,
				null
			],
			[
				"2017-01-15 06:01:04",
				"2016-12-12 10:12:20",
				5926,
				"the goal of a relationship is to work together through careful planing and words of agreements or vows to be upheld by one another . to learn and find equality in every aspect that both have said to willingly . never lie , never cheat your partner in anything important to which a promise was made .. for the first to break it has condemned themselves already . and out of love they have fallen . hens love is never present in a broken promise . no miracle . will come from that . thus be loyal in all your doings and do not promise lest you fall put of love but be truthful in the degree in which you believe your capabilities . do not be vain or convenient but let honesty rule in your words . thus there is no lie in an honest answer and heartbreak avoided .",
				null,
				null,
				null
			],
			[
				"2017-01-15 06:01:12",
				"2017-01-15 02:01:08",
				5864,
				"to all my i ' vonna god mother ' s the baby shower is february 10 i need somebody or all y ' all to come together and get the building we gone decorate it ourselves there is no theme the color is purple and gold so let me know what ' s up so i can get set up since i can ' t go back to work till she come 😂 😍 😘",
				null,
				null,
				null
			],
			[
				"2017-01-15 02:01:12",
				"2017-01-14 10:01:31",
				5823,
				"what ' s easier to employ ? compassion or understanding",
				null,
				null,
				null
			],
			[
				"2017-01-14 10:01:02",
				"2017-01-14 08:01:17",
				5713,
				"have mercy on me , god , in your goodness in your abundant compassion blot out my offense . wash away all my guilt ; from my sin cleans",
				null,
				null,
				null
			],
			[
				"2017-01-14 06:01:12",
				"2017-01-14 03:01:21",
				5693,
				"a man without empathy is not a man at all .",
				null,
				null,
				null
			],
			[
				"2017-01-14 02:01:14",
				"2017-01-13 10:01:03",
				5641,
				"for those who are helping volunteer for our neighborhood event on thursday we will have our volunteer orientation tomorrow night at 6:30 pm at the masjid we ' re looking for enthusiastic volunteers age 18 + english speakers 5 boys 5 girls boys will be wearing casual attire for the event and girls any hijab color their choice or we can even discuss the color tomorrow insha ' allah so if ur interested in volunteering plz comment below in tomorrow meeting we will discuss with you what we expect from all the volunteers and what are outcome goal will be insha ' allah hope to see you tomorrow night at masjid insha ' allah",
				null,
				null,
				null
			],
			[
				"2017-01-14 02:01:12",
				"2017-01-13 11:01:12",
				5640,
				"nehemiah 9:28 \u201c but as soon as they were at rest , they again did what was evil in your sight . then you abandoned them to the hand of their enemies so that they ruled over them . and when they cried out to you again , you heard from heaven , and in your compassion you delivered them time after time .",
				null,
				null,
				null
			],
			[
				"2017-01-13 10:01:02",
				"2017-01-13 01:01:02",
				5086,
				"its friday the 13th ! i need a human sacrafice 😈 anyone volunteering for tribute ?",
				null,
				null,
				null
			],
			[
				"2017-01-13 10:01:02",
				"2017-01-13 09:01:07",
				5085,
				"just because the holiday season is over , don ' t stop giving the love . the busiest time for volunteering and donations is during the holidays , but those in need , need the assistance year round . even if you can ' t give $ , there ' s more to charity than cash . this doesn ' t just apply to poverty , but even a person feeling down that day . a smile , a gesture , a kind thank you for your service , is always appreciated and charitable . #love #giveback #inspire",
				null,
				null,
				null
			],
			[
				"2017-01-13 10:01:02",
				"2017-01-11 07:01:17",
				5084,
				"today we have to be determined to turn our disgust into discipline #knowwhattohate #itsyourheart #handleit #declarereset #elevationmelbourne #chargethehill #healthyheart steven furtick lauren davis gradyelevation melbourne volunteers",
				null,
				null,
				null
			],
			[
				"2017-01-13 10:01:02",
				"2017-01-12 03:01:02",
				5083,
				"meeting my neighbors at volunteer appreciation night !",
				null,
				null,
				null
			],
			[
				"2017-01-13 10:01:02",
				"2016-12-19 09:12:33",
				5082,
				"volunteering and eating ravioli out of the can ... feel like a college student lol . can ' t wait for lunch tomorrow janie nichols love this time with her #twinmidgets",
				null,
				null,
				null
			],
			[
				"2017-01-13 10:01:02",
				"2017-01-12 02:01:12",
				5081,
				"is there anyone looking to do volunteer work for the families in o . c ? i got this big work event coming up for immigration services and my boss aka the mayor of orange is seeking extra help next friday you will be fed and all message me if interested",
				null,
				null,
				null
			],
			[
				"2017-01-13 10:01:02",
				"2017-01-12 08:01:34",
				5080,
				"aye who do good tattoos ya boy need some ink 💉 👿 💉",
				null,
				null,
				null
			],
			[
				"2017-01-13 10:01:02",
				"2017-01-12 03:01:07",
				5079,
				"well guys what do you think ? ! ?? did bastian sage do good or what ? ! ? so in love with this right now",
				null,
				null,
				null
			],
			[
				"2017-01-13 10:01:02",
				"2017-01-13 09:01:02",
				5078,
				"hartramsey ' suplift : ask god for simple things like clear direction , an open door , an encouraging word , a willing heart , or a helping hand . big blessings 🙏 🏽",
				null,
				null,
				null
			],
			[
				"2017-01-13 10:01:02",
				"2017-01-13 04:01:25",
				5077,
				"huge thanks to everyone who came out tonight . i sincerely appreciate your input and desire to work together to fix our problems . at the end of the day , miamisburg is a great community and we ' ll get through this - we ' ve overcome bigger issues . we all want the same thing . stick with me and give council a chance to come up with some solutions .",
				null,
				null,
				null
			],
			[
				"2017-01-13 10:01:02",
				"2017-01-13 02:01:26",
				5076,
				"i have a wide variety of fb friends who post an equally wide variety of politically based posts on my wall . i just want everyone to know ... that i don ' t support any of these politicians whose pictures you post on my page . not a single one . in my lifetime not one president , not even one governer of illinois has had one ounce of integrity . these rich assholes don ' t care about us . never will for that matter . they would never stand up for you , never put one ounce of the energy that you put into defending and supporting them toward you and yours . they don ' t care , they just want to rule . anyway , that what i think just so everyone is clear .",
				null,
				null,
				null
			],
			[
				"2017-01-13 10:01:02",
				"2017-01-11 10:01:06",
				5075,
				"i totally cried when obama thanked michelle . and i will cry the 2nd time i watch it too . i will miss you , obama . because things do move slowly . and extremism just puts us in a divisive bubble that is one of my own pitfalls . if i could give one thing to the good people i know , just working and making their way through life it would be knowledge and passion . we need both to right injustice . we need both to have the forbearance and empathy that withstands hardship but tempers the good times with wisdom .",
				null,
				null,
				null
			],
			[
				"2017-01-13 10:01:02",
				"2017-01-11 08:01:15",
				5074,
				"\" let all bitterness and wrath and anger and clamor and slander be put away from you , along with all malice . be kind to one another , tenderhearted , forgiving one another , as god in christ forgave you . \" . - ephesians 4:31\u202d -\u202c 32",
				null,
				null,
				null
			],
			[
				"2017-01-13 10:01:02",
				"2017-01-12 08:01:31",
				5073,
				"feminism isn ' t a girl spreading her legs for any man but the ones who faithfully stand up for their rights , such as gay pride and foreign , pride .",
				null,
				null,
				null
			],
			[
				"2017-01-13 10:01:02",
				"2017-01-11 02:01:52",
				5072,
				"the lord re - oriented my perspective not too long ago to highlight the good things about people , and to give much grace and be patient with people in their weakness and failures . this is because the cross reveals to me in growing measure the abundant patience love , and kindness with which the lord affords me in my own weaknesses and abundant failings . and the deep love and compassion he shows me in my weakness . for just as we reap wha we sow , should not also the lord reap a harvest for the things he has sown ? and those he foreknew he predestined to be conformed into the image of the son ( romans 8)",
				null,
				null,
				null
			],
			[
				"2017-01-11 02:01:12",
				"2017-01-10 11:01:04",
				4860,
				"my birthday is coming up on the 20th . if anyone wants to buy me something could you buy my dogs treats or toys ? i ' m always living paycheck to paycheck and they usually get the short end of the stick , especially with the baby here and now that both of us are working again they get left at home bored with themselves . i don ' t want anything for myself , i just want to see them happy . :) if you want to , you can message jackie glinkie for my address . ( sorry , jackie , i just kind of volunteered you for this position ) lol ( it never hurts to ask , right ? )",
				null,
				null,
				null
			],
			[
				"2017-01-11 02:01:11",
				"2017-01-11 12:01:52",
				4859,
				"shut the front door ! 🙀 there ' s this free event tonight that gives you the ins & outs on how i turned my passion for helping others into an income that supports my little family !! ❤ 💪 🏽 i invite you to hop on tonight and see how this amazing tribe of ladies i ' ve locked arms with , can help you ! link in comments !",
				null,
				null,
				null
			],
			[
				"2017-01-11 02:01:11",
				"2017-01-10 11:01:15",
				4858,
				"judges 5 : 9 my heart is with israel\u2019s princes , with the willing volunteers among the people . praise the lord !",
				null,
				null,
				null
			],
			[
				"2017-01-10 10:01:02",
				"2017-01-10 07:01:45",
				4769,
				"hey friends ! ❤ comment your business link , only 1 rep per company ; duplicates will be deleted to keep it fair . i believe we enhance each others education . then copy and paste this to your page ! i will add my business to yours , so we can all share our passion with others and support each other at the same time !! please play fair !! 😉 don ' t post if you are not going to help others get exposure ! if you don ' t play fair , your post may get deleted !",
				null,
				null,
				null
			],
			[
				"2017-01-10 06:01:03",
				"2017-01-10 02:01:55",
				4683,
				"when everybody stop trying to be the head and just do your part and work together everybody in the city gone win real talk",
				null,
				null,
				null
			],
			[
				"2017-01-10 02:01:03",
				"2017-01-10 12:01:25",
				4656,
				"i need some one that would help me do good",
				null,
				null,
				null
			],
			[
				"2017-01-10 02:01:02",
				"2017-01-10 12:01:59",
				4655,
				"daily reflections january 10 united we stand we learned that we had to fully concede to our innermost selves that we were alcoholics . this is the first step in recovery . the delusion that we are like other people , or presently may be , has to be smashed . \u2014 alcoholics anonymous , p . 30 i came to alcoholics anonymous because i was no longer able to control my drinking . it was either my wife ' s complaining about my drinking , or maybe the sheriff forced me to go to a.a. meetings , or perhaps i knew , deep down inside , that i couldn ' t drink like others , but i was unwilling to admit it because the alternative terrified me . alcoholics anonymous is a fellowship of men and women united against a common , fatal disease . each one of our lives is linked to every other , much like the survivors on a life raft at sea . if we all work together , we can get safely to shore .",
				null,
				null,
				null
			],
			[
				"2017-01-10 06:01:11",
				"2016-12-12 08:12:54",
				4592,
				"it ' s annual \" play santa \" time ! saturday at 10am , volunteers needed for georgetown ' s secret santa gift delivery to dc - at - large , courtesy of deb john & heidi scanlon . got a car ? bring it , you ' re a driver now . no car ? we could use your hands . no hands ? not my problem . <3",
				null,
				null,
				null
			],
			[
				"2017-01-10 06:01:09",
				"2017-01-10 05:01:55",
				4591,
				"clemson was fell short last year on this same year and they face adversity and got back here and beat the team and finish strong ... when u believe in your teammates and work together anything is possible .. hard work pays off #clemson",
				null,
				null,
				null
			],
			[
				"2017-01-10 02:01:09",
				"2017-01-05 02:01:36",
				4516,
				"my life has been on the line , plenty of times gambling between my vision , or punching a clock . hustling isn ' t for everybody , but when i decided to take that risk . my life changed . god showed me the way . im 28 years old no major record in the system , haven ' t had any kids , im a ceo , single , & blessed . most don ' t understand how challenging it is to get out here and grind 21 hours day . i stay prayed up , i keep god 1st , remain humble , & give it all i got .. dealing with fake ppl , major record labels , artists , studio , filming , universities , church , different genders , races , all types of ages , playing daddy , keeping family close , & helping others , is not as eazy as it looks . it ' s takes much loyalty , time , honesty , hard work , blood sweat and tears . this year i ' m focused .. god i thank you",
				null,
				null,
				null
			],
			[
				"2017-01-10 02:01:09",
				"2017-01-10 01:01:33",
				4515,
				"so our vacation ' s are over tomorrow mijo will go back to school and i will be back to my volunteer with my kids my wonderful teacher and my routing of everyday we are ready for tomorrow ..",
				null,
				null,
				null
			],
			[
				"2017-01-10 02:01:08",
				"2017-01-10 01:01:02",
				4514,
				"i was nominated by kurt conrad . my last day is finally here . day 22 of the 22 day push - up challenge . doing 22 push - ups a day for 22 days to raise awareness for our combat veterans . there are 22 vets a day that commit suicide . i hope all the vets out there feel honored , loved , and through this gesture they see our support . my last nominee is a volunteer . step up and show your support ! * i also hope small actions like these instill a greater sense of compassion for veterans and others who have faced and are effected by trauma in their lives . how it works : * once you are nominated your 22 days starts the following day . * every day record yourself doing 22 push - ups and post it , copy the hashtag and anything else you want to each post . * every day nominate a new person . #22pushupchallenge #ptsdawareness #veterans #veteran #1stid",
				null,
				null,
				null
			],
			[
				"2017-01-09 10:01:11",
				"2017-01-09 08:01:38",
				4436,
				"who ' s gonna stand for the hope of a better tomorrow ... who ' s gonna encourage the next person to be happy and free of worry and stress ? .. who ' s gonna reach out and be a light ? sadly .. not many of you .. sadly .. most will turn your back .. sadly most will look down on the next man for their struggles .. forgetting that it ' s the struggles that make you grow .. be a hero to someone in this life .. choose to show compassion to someone .. your no better than the next person because all it takes is a split second and your life can change forever .. you have a choice .. choose love .",
				null,
				null,
				null
			],
			[
				"2017-01-09 06:01:59",
				"2017-01-09 03:01:49",
				4361,
				"mallory mae ellis and i will be volunteering at the center all day ! drop in and say hi !",
				null,
				null,
				null
			],
			[
				"2017-01-09 06:01:59",
				"2017-01-09 02:01:40",
				4360,
				"as a rescue volunteer i think about this too much .",
				null,
				null,
				null
			],
			[
				"2017-01-09 06:01:59",
				"2017-01-09 04:01:27",
				4359,
				"romans 8:28 ( kjv ) and we know that all things work together for good to them that love god , to them who are the called according to his purpose .",
				null,
				null,
				null
			],
			[
				"2017-01-09 06:01:04",
				"2017-01-09 03:01:53",
				4282,
				"that speech right there is the reason i love merryl streep . i admire her so much , and she has influenced me in many ways as an actress . thank you for your inspiring words . thank you for reminding us that we must lead through empathy and not exclusion . thank you for being a beautiful role model for girls and boys everywhere . expect a video as soon as it is available online . #goldenglobes",
				null,
				null,
				null
			],
			[
				"2017-01-09 02:01:06",
				"2017-01-09 12:01:35",
				4184,
				"i want my nails done 💅 🏽 god who do good nails 🙌 🏽 😩 💯",
				null,
				null,
				null
			],
			[
				"2017-01-08 06:01:59",
				"2017-01-08 04:01:17",
				4057,
				"narcissistic personality disorder is a mental disorder in which people have an inflated sense of their own importance , a deep need for admiration and a lack of empathy for others . but behind this mask of ultraconfidence lies a fragile self - esteem that ' s vulnerable to the slightest criticism ...",
				null,
				null,
				null
			],
			[
				"2017-01-08 02:01:05",
				"2017-01-08 12:01:10",
				3934,
				"when everyone wants to know what your angle is , but you legit try to help people ... when they keep digging for dirt , but all they see is thank you ' s and kind gestures .... so they say ' whatever , something isn ' t right ... ' haha . some people legit do a double take when u do the right thing , and they ' catch you ' ... yes , i get a lot of love and support , but it ' s a two way street ... my motives are self serving ... but by helping others i help myself ... so when i ' m helping with product support , etc , yes .. i do it partly to keep myself in good standing .. that ' s called honoring an agreement ... but i also enjoy helping others ... it keeps me sharp ... one love !!",
				null,
				null,
				null
			],
			[
				"2017-01-07 10:01:59",
				"2016-12-16 04:12:49",
				3901,
				"if we work together as a worldwide community , the load would be a lot easier to carry . why not do things the easy way ... and evolve ? :)",
				null,
				null,
				null
			],
			[
				"2017-01-07 08:01:28",
				"2017-01-07 07:01:23",
				3851,
				"i want to wish a happy birthday to an awesome god fearing lady . sister linda brindley i hope today is filled with blessings , love , compassion , good news , celebration , and all the good stuff like chocolate cake with ice cream lol love yall",
				null,
				null,
				null
			],
			[
				"2017-01-07 08:01:28",
				"2017-01-07 07:01:53",
				3850,
				"may we make of our lives a meal that satisfies the deepest hungers of humanity , compassion and understanding .",
				null,
				null,
				null
			],
			[
				"2017-01-07 06:01:29",
				"2017-01-07 05:01:16",
				3811,
				"omg my heart is sooo full !!! 🙌 🏻 💙 thank you beachbody for not only empowering my life but empowering all these amazing peeps on our team !! we all have transformation stories with these life changing programs 🙌 🏻 mind . body . soul ! to be apart of something that is so fulfilling makes my heart soo happy !!! they understand my excitement for how this opportunity changes lives . they get it ! they love it ! show up everyday helping themselves while helping others day in and day out ! 😘 #supersaturday",
				null,
				null,
				null
			],
			[
				"2017-01-07 06:01:29",
				"2017-01-07 05:01:04",
				3810,
				"look at all this cool stuff at indigo hippo ! volunteering here this morning , come visit meeee",
				null,
				null,
				null
			],
			[
				"2017-01-07 06:01:29",
				"2017-01-07 05:01:28",
				3809,
				"today , i volunteered to help out with super saturday . something that i ' ve never done before ... and something that we ' ve never done before was have shots of energize ready before the workout ! i love having this before a workout ( it ' s preworkout and i ' m slightly addicted lol ) . for so many people it was their first time trying it , so it was pretty cool ! #buffalosupersaturday",
				null,
				null,
				null
			],
			[
				"2017-01-07 04:01:29",
				"2017-01-07 03:01:47",
				3773,
				"researching volunteer opportunities in low income school districts . would love to know if you guys have worked with any schools you would recommend ! 😊 🌈",
				null,
				null,
				null
			],
			[
				"2017-01-07 06:01:33",
				"2017-01-07 05:01:24",
				3744,
				"want a tip that can instantly improve your marriage ? 👌 🏼 go to a coffee shop for an hour and have a meeting about your goals this year . seriously . too many couples out there don ' t even share their dreams with each other . it took us years until we were able to open up to each other and do this stuff . ❓ what are your goals for 2017 ? what are you wanting to improve ? what do you want to learn ? how do you want your finances to be this year ? how often do you want a date night ? open up to each other , get it on paper , and support each other 100 % . you ' ll be amazed at the results . 😊",
				null,
				null,
				null
			],
			[
				"2017-01-06 08:01:31",
				"2017-01-06 07:01:19",
				3586,
				"* * * * * * attention * * * * * * the last thing a visitor would want is to see on your site or store is a copy of t - shirt design found elsewhere . your designs don\u2019t necessarily need to be complex , in fact many of the best selling graphic tees and very simple , however , they do need to connect with your audience and stand out . thats where aamir graphics llc steps in and lend a helping hand . we are offering discounted pricing for all business owners wanting custom eye catching design for their line contact me here or a aamirgfx , com",
				null,
				null,
				null
			],
			[
				"2017-01-06 08:01:31",
				"2017-01-06 07:01:55",
				3585,
				"you have heard it all before dont be fooled by false love ! dont be blinded by fake relationships ! take a stand ! say no more ! break your silence ! #share #saynomore #itmuststop",
				null,
				null,
				null
			],
			[
				"2017-01-06 04:01:05",
				"2016-12-11 12:12:59",
				3394,
				"awesome job by all the volunteers at \" journey to bethlehem \"",
				null,
				null,
				null
			],
			[
				"2017-01-06 04:01:05",
				"2017-01-04 02:01:48",
				3393,
				"if we get 7 inches of snow tonight i really need a volunteer with a truck so i can still go ride and go to the gym tomorrow haha",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-18 09:12:01",
				584,
				"they don ' t never have to worry because i vow to go hard ! teaching my boys the importance of giving back to their community , being grateful & to love with a whole heart ...",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2017-01-01 04:01:38",
				583,
				"happy new year ! let ' s start the new year with helping others .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-26 04:12:18",
				582,
				"damn wish i had some one to kick it with tonight any volunteers ? 😂 😂 😂 😂",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-24 09:12:04",
				480,
				"\" after the work i put in today i sure can use a massage ... any volunteers ? \" #overtime #exhausted",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-12 01:12:31",
				581,
				"this holiday season .. i ' m not wanting or looking for christmas presents under the tree .. that is seriously not where its at .. so , this year .. i believe \" we all \" need to support , donate , etc .. to an organization or charity of our choice .. tis ' the season of helping others .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-20 04:12:32",
				580,
				"hey yall hey ! 2 weeks left !! consultant price day !!!!!!! attention all : i am looking for 5 volunteers to try lash boost at my consultant price ! i ' m only doing this because the holiday bundle ends this month ! which means you will no longer get the free mini eye cream and cute eyelash bag with it !!! i want all of you to have it !!! here is how lash boost works : 1 . it moisturizes the eyelash . 2 . it nourishes the eyelash with 3 different peptides . 3 . it protects the eyelash from breakage and brittleness with biotin and keratin . what makes it so great ? * it uses multi - med therapy and is clinically proven to work . * it ' s a single tube application and takes 30 seconds to apply . * the product is designed to last at least 60 days with our 60 - day , money - back guarantee ( but most can get 3 months use out of it ) . * it ' s also effective on eyebrows ! message me or comment below if you ' d like to be one of the lucky 5 and i will share the details ! ⛄ ❄ 🎄",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-22 01:12:08",
				579,
				"by 2023 or 2033 scientists are asking volunteers to start a new life on mars , one way tickets . would you do it ?",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-09 05:12:18",
				578,
				"selfies on my way to volunteer at the tiny house ❄",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-13 12:12:29",
				577,
				"some can only win when others lose 😔 others seek to win by helping others succeed 😌",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-11 06:12:17",
				576,
				"more photos from today ' s volunteering at gleaners food bank . work hard , play hard , real hard good intent . #rapidadvance #holiday #giveback we give all year long . #squadgoals",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-21 03:12:57",
				575,
				"repost from : art off - the wall - i ' d like to encourage everyone to please stop by to thank and patronage mr . fields who kindheartedly released about $2,000 worth of astounding , authentic , african pieces ; merchandise that he is hoping to sell for the holidays . he owns a magnificent cabinetry business that , like many black owned , family funded businesses , has gone unknown and unsupported . please be sure to show him some love back , for volunteering for the cause . his statue , drums , tapestry , and throne literally \" set the stage \" for this memorable event .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-17 05:12:51",
				574,
				"looking for volunteers tomorrow 8 - 1",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2017-01-05 03:01:27",
				573,
				"so proud of j ' que now for becoming a mentor and helping guide and develop teenage girls into prosperous , strong willed & minded , powerful women . she ' s teamed up with she ' s all that mentors their mission is simple . they help teenage girls from under - resourced communities break the cycle of generational poverty through education , mentorship and job training . they have been a vital part of the community for a number of years . they were founded to serve a growing segment of the community in need of inaccessible services . they have continued to grow with the help of donors and volunteers that make their mission possible . through all these years their purpose still remains the same : bring services to those in need .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-18 11:12:31",
				572,
				"this trip has been the worst ever ( american airlines , you are terrible ) ! 24 hours from airport to airport . but i ' m glad to be finally in the place where all the 2016 craziness started . ready to see our amazing las vegas bernie 2016 volunteers again !!",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-10 05:12:39",
				571,
				"* sigh * i just got done with my last final project , i had to pick out 10 volunteer opportunities to have done by the end of next fall . i have a nice head start , i have 6 of them completed . yes ! i have absolutely nothing to do for homework for the rest of the weekend . the only thing that i have left to do for school is make some marinara sauce and some alfredo sauce for our end of semester celebration . i am so proud of myself , i have completed a whole semester , and i am almost certain that i will be passing my classes with an b or better . this has been such an amazing experience for me . i really do wish that i got the same treatment in high school as i am getting in college . people are so nicer , and not so petty about the little shit .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2017-01-02 02:01:14",
				570,
				"2017 is going to be full of projects , adventures , and ....... volunteer work ! yes me , volunteering in the community . if anyone knows any volunteer work or organizations i can get the kids and me involved in would be greatly appreciated . specially here in our community .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2017-01-04 12:01:14",
				569,
				"i want time for family , volunteering , and learning . what do you want time for ?",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-19 08:12:14",
				568,
				"getting ready for work . i got christmas eve off and i am not sure if i work christmas yet but i don ' t thnk i will . they are asking people to volunteer for a shift that day but i think i was to see my grandmother on christmas instead . they are offering a bonus that day but i think spending time with my daughter is more important . we are going to make cookies to take to everyone",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2017-01-01 07:01:50",
				567,
				"so many things ... awaken to myself , my offerings , my journey . be free and authentic . real . honest . take off the veil of doubting yourself , and what someone might expect you to be . my job , my work now is me . it might not be paying bills , but it ' s necessary work . before we can give ourselves to others , we must own ourselves first . i have many dreams of charitable giving and helping those who have not been given a fair chance in life , but i must gain my own sense of structure to not let the weight crush me . i am learning to be outspoken and grasp the straws of life as i see fit , not as a reaction to something - but as something i know that needs to happen and is right for me . i just wanted to share my thoughts and hopefully this will resonate with someone else and give them a sense of peace . you are not alone .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2017-01-03 10:01:21",
				565,
				"dear universe , i have weepeth much . from now on , i will exercise strength . i will hope and pray when i feel weak . holding my own , bearing all hurdles with honor ... accepting and respecting what i was given . show the world / universe i can be holy . emptiness prevails . persue love , light , and all things blooming with joy and pleasure and peace . yay , i filled fortitude for my brethren . i vow to show love , judgement , lead by example . and pray to grow , learn , and leap to higher levels of life , skill , understanding , and experience . i will try my best to do good for myself , family , friends , co - workers , and acquaintances . this is my prayer . forgetting past pains , but holding onto lessons learned , tracks trekked , and vowing to not make the same misfortunate mistakes over again . this is crucial . we must learn to apply new practices from prior pains . pretty life is new and light . be light . be right . try new things that seem bright .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-12 06:12:28",
				564,
				"the benefit of crowdfunding is i bless someone with $10 and in turn can receive $80 is a little more in my price range for giving right now with christmas almost here ! i give to the homeless , and i volunteer my time out of love and kindness of my heart a few times a year . it ' s . it a scam , and how fast you receive your blessing back just depends on who you got on your team . lmk if you want more details on a new way to give this season .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-13 02:12:15",
				563,
				"please all prayers for my dad eric hildebrand as he is in abundance amount of pain with a fall due to his volunteer work and the nasty weather up north , he broke his leg ... please pray for a nurture , caring , painless recovery for him . my dad has volunteered for a christ charity donation center for the past couple years now 2 - 3 days a week would never miss a day he has helped a lot of people in his community !! he is a well respected man served our country and drove truck for 20 some years he has lost everything , handed down everything he always help the ones he loves and cares for , he deserves and earned is way full of everlasting happiness he deserves all his wishes and dreams to come true 💓 i know my dad he will always give back in some way now is the time to start giving to him ! lifting his spirit up , surprising him with a lot of joy !!! god bless america ! we love you dad and you are respected and loved by many people 💞 💝 stay strong and take it easy !",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-18 07:12:32",
				562,
				"even though we are not going home for christmas this year , i think volunteering and spending time with families that have lost everything but still are encouraging is god ' s way of telling me that everything is going to be alright . i have managed to house 3 families at my properties . god has blessed me with being a property manager for a reason & now i know why . next year though .... this chica is going home to see my favorite aunt annette & sky samaniego & all my munchkins & especially my grandpa !!!",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2017-01-01 01:01:25",
				561,
				"i ' ll keep my new years post brief : my only real resolution for 2017 is to focus on putting more love into the world . that includes enjoying life more , exerting more energy helping others , and making stronger efforts to stay in touch with those i love . y ' all have fun tonight , but please be safe . don ' t drink and drive . love y ' all . 😘 😘 😘",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-08 06:12:56",
				560,
				"giving back : proverbs ch19 vs17 : whoever is kind to the poor lends to the lord , and he will reward them for what they have done . real bosses of atlanta celebrity media tv #realbossesofatlanta #celebritymediatv #worldstarhitradio",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-23 05:12:51",
				559,
				"had a blast volunteering for some christmas crafting fun with these adorable little elves . ❤️ 🎄 💚 ⛄️ 🎩 ❄️",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-23 03:12:59",
				558,
				"6 presents in and i don ' t want to wrap anymore 🤣 😜 any volunteers ?",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-25 04:12:45",
				557,
				"emma was up , the entire night puking up her guts - literally . she wakes up and is only concerned about her daddy ' s christmas gift , she misplaced it so now she ' s giving him a new one . tony sat her down the other night and explained that christmas isn ' t about getting presents , it ' s about helping others and giving to those in need . the fact that she ' s giving him her three dollars from the tooth fairy ( all the money she has ) that she ' s been saving to buy herself ice cream shows me that she understands . ❤",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-11 12:12:21",
				556,
				"i have room to help ✌ 🏼️ mommas today who would like to make an extra $300 . i ' ll teach you how to complete three simple steps from your phone and facebook just by helping others . serious inquiries only . like , comment or message me for more details ❤️",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2017-01-05 06:01:53",
				555,
				"hey guys i am looking for a male volunteer for me to learn how to properly perform a male brazilian ! the service would be free of charge and overseen by a trained professional . if you are interested , pm or text me .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-11 01:12:56",
				554,
				"just had the pleasure of helping a man put on brand new shoes in the dead of winter in new england . thank you to the veteran that provided these brand new shoes and socks . the gratefulness this man and his friends felt is indescribable . thank you for giving back . i hope i continue to follow in your shoes .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-13 03:12:48",
				553,
				"hey guys !!! gonna be spend a few days in cincinnati , a few days in nashville and a couple in hot springs this week and next !!! any suggestions on fun activities , restaurants , museums , churches , volunteer spots , etc . ?",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-13 05:12:08",
				552,
				"brace yourself , facebook ! there ' s about to be an overwhelming amount of extremely happy , grateful , mind blown posts ... today is le - vel rewards day ! tonsssssss of people receiving $300 / $800 to go towards their car payments for the month ! that ' s on top of their weekly \" paychecks \" . this company is nuts . rewarding people for helping others . rewarding people for changing their health . rewarding people for taking their vitamins . 😂 😂 i love it .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-11 02:12:44",
				551,
				"i know that when i ' m hurting , it ' s a time i should be helping others ! ❤️ 😊",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2017-01-04 11:01:29",
				550,
				"sold out show ... but here ' s a last call for event volunteers ( we need you ! ) for friday ' s legislative forecast luncheon with governor ducey and our legislature ' s new leadership , hosted by the arizona chamber of commerce and held at the downtown sheraton grand phoenix ! if you help out , you can attend on us . not too late to email katie for more information at REDACTED:EMAIL . :)",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-10 06:12:26",
				549,
				"foster volunteers : election watch party at 12 mile limit . who ' s in ?",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-08 01:12:47",
				548,
				"looking for a metrology major within the west chester area for an event . please text me or message me asap ! i have a volunteer opportunity that i can ' t do i need help with",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-14 01:12:40",
				547,
				"answers by gabby without prompting , ask your child these questions and write exactly what they say . the outcome can be hilarious ! 😂 * what is something i say a lot ? because i said so , that ' s why ! * what makes me happy ? when the patriots win ! * what makes me sad ? when the patriots lose ! * how tall am i ? 5 ' 7 * what ' s my favorite thing to do ? text * what makes me proud of you ? when i do good in school ! * what is my favorite food ? oranges * if i could go anywhere , where would it be ? new york * do you think you could live without me ? no ! * how do i annoy you ? when u sing silly songs ! * what is my favorite tv show ? reba copy , paste and change my answers and see what your child says ! you will be surprised how much your kids pay attention to you !",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-09 12:12:03",
				546,
				"volunteered to work the 80 ' s positive party at ford school today !",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-11 02:12:32",
				545,
				"off to do volunteer work at the nursing home with some associates from my company ! 😇 😇 😇",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-18 08:12:09",
				544,
				"it ' s official ! i accepted an americorps vista position with the harpeth river watershed association for a one year contract . i start on january 30th and will have various jobs ranging from volunteer coordination to data management , gis , water sampling , planting trees , writing grant proposals and beyond . i am very much looking forward to this new and happy path towards my career in science . that being said , for those of you that don ' t know much about americorps - we make below poverty level wages . i just applied for food stamps !! in the next year i will have to be very very frugal . so , throw me all your petsits and someone come train with my sugar daddy , aka chris mahoney fitness . he is holding great deals through january !!!",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2017-01-04 03:01:10",
				543,
				"jeremiah 4:22 for my people is foolish , they have not known me ; they are sottish children , and they have none understanding : they are wise to do evil , but to do good they have no knowledge .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-08 02:12:12",
				542,
				"i really hate feeling pressured and obligated to do something . if i volunteer to do something it ' s because i want to do it . i get super unmotivated when i feel under pressure . stop talking to me about it every other second damn it ! i ' ll do it when it ' s time ! thank you 😊",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-12 11:12:46",
				541,
				"1 peter 4:19 so then , those who suffer according to god\u2019s will should commit themselves to their faithful creator and continue to do good .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-14 09:12:45",
				540,
				"i see who really don ' t fuck with me bt i got one thing 2 say this for everybody i call today need them stay the fuck out my life bc i trying 2 do good out here n keep my black ass out of jail ik now y ' all want 2 see my back in jail . bad if enough i ' m dying with this damn kidney cancer anyway ik a lot if yall will b happy any fuck way when i passaway",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-17 05:12:19",
				539,
				"volunteering for the kids in need of food and presents",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-21 05:12:43",
				538,
				"what happened at gary ' s or by garys tonight ? there was a lot of police cars , and a fire truck and volunteers",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-27 06:12:48",
				537,
				"who wants to bring me some shrimp fettuccine alfredo pasta with broccoli and garlic bread ???? let ' s not all volunteer at once ......",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-17 01:12:28",
				536,
				"is it possible for people to do good things without posting it all over facebook ?",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-18 08:12:20",
				535,
				"shout out to these two for helping hand out all the donations today . special thank you to our bayway church family ! this would not have been possible without you all ! god was truly glorified and we are all humbled and honored that he used bayway in a major way .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-10 04:12:50",
				534,
				"the moment when u get involved in a xmas movie and u know ur kids will be up early and u will wish u went to sleep",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-19 11:12:03",
				533,
				"man can ' t win for loosing . 😩 every time i get ahead on projects by hoarding supplies i get a kick in the face . why is it when your a good person living life with a moral code of conduct and giving back to your community , do you get a kick in the face ?? at this rate i ' m going to have to charge more for my services at southern ladies and i don ' t want to do that because so many people rely on us for our affordable cost . 😨",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-21 03:12:19",
				532,
				"#transformationtuesday goes to my girl desiree gameros she ' s killing the game 💪 🏽 💪 🏽 💪 🏽 i ' m so proud of you girly . she ' s been with me since the beginning . her baby avian is a herbababy , drinking the products in her womb . she is now a coach helping others achieve results just like she did . #hotmama",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2017-01-03 09:01:25",
				531,
				"just found out today that i have to have an hour of vounteer work for school .... like seriously ? i dont have an extra hour and where tf ima volunteer at ? ugh smh",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2017-01-04 12:01:37",
				530,
				"stop hating on people for having new years resolutions . motivate them to do good and keep trying . to anyone who set goals for themselves : good job , keep doing it . better yourself , better your life . when some one laughs at you for it , just remember they might be unhappy with themselves for not trying .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2017-01-01 02:01:12",
				529,
				"thank you everyone at saxton volunteer fire company for a great evening at your 300 drawing",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-23 11:12:24",
				528,
				"i had a productive day today . i had lunch with 2 of my aunts , got to spend some time with some pretty awesome and loving dogs at hasra , and managed to wash 2 vehicles before it got dark . if anyone had some spare time , go to hasra and volunteer . you will brighten their day and they will definitely brighten yours !",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-17 08:12:38",
				527,
				"i know i ' m . not for the holidays but i would like to thank everyone that has been by my side thru this entire year . i owe alot to my dad for helping me out in every way possible . friends that have helped and never asked for anything in return . i love helping others that is my weakest link and i get walked over most of the time but that is life , you learn from your mistakes and move on . i don ' t ask for alot because i don ' t expect anything from anyone , i earn my keep and always will that ' s just how i am . so if i don ' t see or hear from you before . christmas have a safe and wonderful holiday and may god truly blessed you and yours .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-14 07:12:04",
				526,
				"i need help tomorrow need to go to my house on property to get my wood burner can someone give me a helping hand .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-08 05:12:22",
				525,
				"decorating gingerbread houses and putting up the tree with the girls today . so glad they do good together",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-09 03:12:41",
				524,
				"all the local businesses should get together an do a lil toy drive for the kids who are in need of christmas gifts this year .. its only right u give back to the community 🙏",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-26 03:12:45",
				523,
				"when the tone goes off at 1:00 in the morning , or anytime , a medic , volunteer firefighter , emt , police , or rescue person is startled awake , jumps out of bed , gets dressed and is en - route . regardless of the hour , the weather conditions , the holiday or event - when needed , they promptly respond . copy & paste this as your status if you are an emergency responder , know one , or love one ! 🚒 🚑 🚨 🚔 👮 thank you so much for keeping us safe !!!! thanks to all",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-18 11:12:37",
				522,
				"wish mcdonald ' s would do a charitable donation of belts",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-13 03:12:22",
				521,
				"only my fucking life i swear to god does all this shit have to happen . do good do good do good , really for fucking what to get blamed for shit , to get the worst luck ever and have everything i work for and work to have get ruined any way . yeah sounds fucking great ! i have the worst luck in the world . never fucking ends i swear why just why . end vent i ' m over it .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-19 11:12:22",
				520,
				"i ' m trying so hard to do good lord please help me through this i can ' t do it on my own im starting to break and i don ' t want to be broken again",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-27 10:12:26",
				519,
				"for my non believers i use to be homeless yes i know how it feels to love something so much u will break ya own self down to make it happen this is my dream and i am pushing thru all my fears and giving back as much as i can so yes i am trying to give at least 2 artist per month paid shows and yes i am also taking some of the money and donating to a charity and maybe a person that really needs a blessing i am not here to take from anybody i am here to be a blessings to others like god has blessed me",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2017-01-05 03:01:01",
				518,
				"we ' re hiring !!!! looking for some sharp individuals who have integrity and truly care about helping others . make the decision to become financially independent this year for yourself and for your family !",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-17 06:12:31",
				517,
				"ok listen up everyone ! this year i ' m giving back & doing it big ! for every $20 spent on my younique website i will donate a toy to toys for tots ! and for every pair of leggings sold i will donate a toy for toys for tots ! please help me give back to the kids this year ! links are in the comments !",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2017-01-03 01:01:53",
				516,
				"man today can just go fuck itself . i ' m done helping others . i ' m done period .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-09 04:12:41",
				515,
				"thought christmas was bout helping others and spending time together not fighting with one another and freaking out cause i dodnt get everything that everybody wanted this would be y i ' m so done with christmas this year it ' s not all bout money gifts decorations n what u got vs what i got it ' s bout helping others and spending time with family",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-30 06:12:23",
				514,
				"i haven ' t said a ton about kalo & co . on my personal profile , but i don ' t want anyone to miss out . 😊 we are accepting founding consultants only through tomorrow , and we officially launch on sunday ! we have just over 100 consultants in the company right now , so this is your chance to get involved with a true ground floor opportunity that you most likely will never have again . if you are interested or at least looking for more information , please message me . i just want to make sure anyone who is remotely interested gets the info they need . ❤ anyone who joins now get the title founding consultant ! i have the pleasure of being kalo & co ' s 31st founding consultant how exciting !!",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-29 03:12:17",
				512,
				"well i gave it all i had and then some despite my deepest desire to be able to continue working with such an organization my body decided now is not the time i will continue to volunteer when able to do so but for now i have my grandma ' s funeral tomorrow but plan to spend the next few days regaining my ability to walk again im very discouraged but must be patient and try again when the time is right",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-16 05:12:16",
				511,
				"this woman has taught me so much in my life . i know things are hard for not only you , but for me and my siblings right now .. you show us to smile on a rainy day , you show us so much ❤️ i love that you keep a smile on your face through everything . all we can do is smile , and show my father that we can do good with or without him 🙂 eres una madre bien fuerte 😊 te quiero mucho 😊",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-22 06:12:17",
				510,
				"volunteered at lanie ' s school for her christmas party . the kids had a blast !",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-21 08:12:01",
				509,
				"i usually don ' t say much and get involved in other people ' s drama until it hurts the children . buddy ramsey thinks he ' s a big man because he can abuse my friend but then to take all the kids christmas presents ? why ? because you know she ' s completely helpless and you want a reason for her to let you come back ? keep the presents . it ' s considered a gift for you to leave and not come back . she can ' t even take a shower without you accusing her of cheating . you ' re not a man , you ' re a sociopath and deserve to rot the rest of your life in prison .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2017-01-01 10:01:19",
				508,
				"2016 was the best of times and the worst of times , full of unexpected turns and twists , but i could not be more thankful for them . 2016 has been one of the worst and most challenging years , but also the year of the most professional and personal growth . my life has completely changed , i began my second year of graduate school as an intern , i started a new , more rewarding job , i moved into my own apartment and i started a new relationship . i ' m excited for the new year and for opportunities that await ! be kind , do good and may the force be with you . ❤",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-11 03:12:20",
				507,
				"not stupid at all done with helping others",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-11 03:12:05",
				506,
				"sometime ago i had a family member who had terminal cancer . i always remember what she said to me , \" don ' t be sad for me , we all come to this world to be a tourist , enjoy life , sightseeing , do good deeds and i just so happen to leave earlier than others \" . today is cancer survivor day . can i ask a favor ?? just a few of you will do it , and i know who you possibly are . if you know someone who fought a battle against cancer and passed away , or someone who is still struggling , or know a brave survivor copy and paste this to your status to show support , respect and love . copy , do not share . i love you grandma , jr , papa , and carl lee fly high u were all taken to soon by a horrible disease ..",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-13 06:12:15",
				505,
				"i was doing good without you knowing that you was my sister in my life i can do good without you in it bye bye adios amigos",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2017-01-02 02:01:01",
				504,
				"if you ' re a motivated individual , looking to feel better and maybe even earn some extra cash ; i ' m looking for you ! accomplish those personal goals while helping others do the same , and earn over $1300 in your first 14 days ! visit facebook.com/levelbrands and watch the video for more information ! contact me with questions . join my team today at leanne8505.le-vel.com",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-15 01:12:18",
				503,
				"people are often unreasonable , uncooperative and selfish ... forgive them anyway . if you are kind , people may accuse you of selfishness and hidden agendas ... be good , anyway . if you ' re successful , you win false friends and true enemies ... search success anyway . if you are honest and sincere , people may cheat you ... be honest and sincere anyway . what you build in years , others can tear down one day ... build anyway . if you find serenity and happiness , people may be jealous ... be happy anyway . the good you do today , people will forget tomorrow ... do good anyway . give the world all your best and maybe will never be enough ... give the world your best anyway . after all , it is between you and god ... it was never between you and them anyway .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-17 04:12:47",
				502,
				"i met with friend today and during our chat i kinda went on and on about why i chose to join the #limelightbyalcone family . i have so many things i want to do for myself and my family in this lifetime and i ' m beyond grateful for this opportunity to start my own business in the industry i am most passionate about with this amazing #familyowned company . in 2017 i plan to have : * a team of 4 people who have big dreams * to promote all the way to to star beauty guide * to do ll makeovers at a volunteer center ♡ ♡ * to provide my city with an opportunity of owning #professionalmakeup of exceptional quality at affordable prices ! this is just a glimpse into what 2017 will be bringing to me and my family !",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-23 01:12:54",
				501,
				"get involved in the lis airport flight delay program w / unknown reasons . 只 好 來 lounge 酗 酒 配 葡 式 蛋 塔 , 不 然 要 幹 麻 ?",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-10 06:12:52",
				500,
				"enjoying my broccoli cheddar soup , chef salad , and berry blast smoothie from fresh 2 go ! volunteering never tasted so good . a portion of every meal that we make and deliver benefits groups that transforms inmates to #entrepreneurs . want to try a meal for free ? visit tvcone.org and join .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:47",
				"2016-12-15 02:12:26",
				499,
				"sometimes helping others bare more fruit than you can imagine . helping a person i dont know love thier life more with words . #foundmycalling",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-19 01:12:00",
				498,
				"i ' m so glad .. i ' m that kind of sister who love hard ... & im that kind of sister who like to see my sisters & brothers ... do good ... & long as they got me they going to be great ... unconditional ❤️ .... family 💯 ... everlasting ❤️",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-18 12:12:36",
				497,
				"now i see why the holidays can be depressing . i want to thank everyone who has helped me this year . i ' m praying that when we go into 2017 , that my year is a lot better . i ' m making it a better year for both my kids and i . maybe be hired in at a job and be able to start helping others as i was blessed this year .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-21 02:12:41",
				496,
				"she ' s taking the triplex challenge i am so excited to welcome my beautiful amazingly motivated girl megan yoachum this girl is seriously one of the sweetest most dedicated mommies i know ! she has found fitness and health to be her passion and we are in school together to become personal trainers . she is all about uplifting woman and helping others , just like me . i can ' t wait to see your results in the next 30 days mama !",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-17 10:12:34",
				495,
				"my buddy at the mall hooked me up ! they do good work and for cheap .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-29 11:12:23",
				494,
				"goodbye usa 🇺 🇸 , christmas , the year 2016 ( good f * cking riddance ! ) , and all my friends and family . hello volunteering , building sustainable housing , learning , warm weather , and of course my brother raúl pinto . dominican republic 🇩 🇴 here i come ! happy new year everybody ! #wintersession",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-16 03:12:50",
				493,
				"do you ever have so much on your mind that you feel like your drowning ? or feelings that you want to express but your afraid too cause its too soon or your afraid of what the outcome may be ? i am beyond excited to be starting a career in the line of work that i love more than anything . it is my way of giving back to our community . some don ' t see it that way but that is why i do what i do and not you . i have had so much on mind since being here and i am starting to learn who true friends are and who i can trust . i have never been the one to be super religious or anything but god does work in mysterious ways and i want to believe that he is doing something to my life that is going to show me that happiness is not that far away . i am determined to learn what that is and i hope that one person is apart of it . being alone sucks but there is a reason behind everything he has planned and i may not understand it right now but one day i will .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2017-01-03 10:01:51",
				492,
				"officially approved as a volunteer translator at my work . it gives me so much joy to do volunteer work . looks like i start the year in the right way !",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-14 05:12:21",
				491,
				"can ' t wait till tomorrow , gonna be a great day and i know it ... i love being able to have my love encouraging me to do good . sosa sosa , thank you for that love , you mean so much to me",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-08 09:12:37",
				490,
				"so my supervisor asked if i wanted to volunteer to work saturday ! uh hell to the naw , y ' all work us to death and don ' t pay enough i ' m off this weekend and i get off at 1 tmrw ..... i need my sleep sorry not sorry i ' ll work another saturday if it comes up but good morning tho",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-30 04:12:47",
				489,
				"dominic l jones is the guy that got me started with mca now i ' m following in his footsteps making cash in my spare time all while helping others at the same time to obtain financial freedom . also wanna take this moment to thank dominic for answering any questions i had promptly when i first got started",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-30 12:12:29",
				488,
				"chris farley ☝ 👤 👊 get involved , you live here",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2017-01-02 06:01:21",
				487,
				"\" i uselly end up wearing myself thin for others , but if i don ' t do good deeds , then i myself feel empty !!!! \"",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-28 05:12:07",
				486,
				"after much consideration , i have decided to name my subie . from now on , she will be known as evey , after the character in v for vendetta . also .. for the jack russell terrier i fell in love with when i volunteered at the animal shelter . i miss her :(",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-14 05:12:20",
				485,
				"\" people are often unreasonable and self - centered forgive them anyway . if you are kind , people may accuse you of ulterior motives . be kind anyway . if you are honest , people may cheat you . be honest anyway . if you find happiness , people may be jealous . be happy anyway . the good you do today may be forgotten tomorrow . do good anyway . give the world the best you have and it may never be enough . give your best anyway . for you see , in the end , it was between you and god . it was never between you and them anyway . \" ❤ mother teresa",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-27 06:12:07",
				484,
				"hahaha .. i love this app . any volunteers for a makeover ??",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2017-01-04 12:01:19",
				483,
				"i ' m only a man with a candle to guide me i ' m taking a stand to escape what ' s inside me a monster , a monster i ' ve turned into a monster a monster , a monster and it keeps getting stronger .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-14 03:12:39",
				482,
				"happy 6th birthday baby girl ! kylie , when i look into your eyes , i see possibilities . you truly believe anything can happen . and that is magic .... the kind of magic i will bottle and do my best to sprinkle over you as you sleep each and every night . you can\u2019t put a price on that kind of faith in the world . during this last year \u2013 i have seen the most significant changes in you \u2013 more than walking , more than talking ..... as these are tremendous milestones , they seem rooted in the physical . what i am witnessing now is the growth of your mind , of your heart . you are learning compassion and empathy . you are learning to give , to hurt , to be you . you are this beautiful little soul . i am a better person for having you in my life . happy , happy birthday baby girl ..... wishing you a million days that reflect the possibilities you see . i love you tothe one that never stops , mommy",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-09 02:12:57",
				481,
				"what a beautiful day it is going to be ! serenity , love , compassion , acceptance , happiness , inner peace , joy , personal growth . these are the things that i see happening in my day today and there is nothing and no one that can change that or take that away from me .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2017-01-01 03:01:20",
				449,
				"2016 has been a rocky year for me but 2017 will be my year to prosper and make things better for me and my boys i thank god for allowing me to see a new year a lot of times people say new year new me but this is definitely a new year new me #2️\u20e3 0️\u20e31️\u20e37️\u20e3 👩 🏽 💄 💋 👑",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-11 04:12:00",
				448,
				"a judgement of opinion or a conclusion isn ' t something to be \" reserved \" for anyone or something anyone \" deserves \" . we should only reserve compassion and grace in our assumptions and conclusions .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-09 03:12:27",
				479,
				"exciting to see so many young people come together with a desire to serve god & his church ! the worship team is ready to roll 😊 cornerstone manteno - 10am - sunday mornings nursery volunteers & kid ' s church ( prek - 5th grade ) provided every sunday as well . you & your entire family are invited !",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-24 06:12:52",
				478,
				"don ' t be cruel to me just because you made a mistake and didn ' t like the outcome . i run out of wherewithal to offer the compassion you clearly feel so entitled to ... i matter in this moment , too and i can be more kind if you allow to be so rather than griping that you aren ' t getting your assumed entitlement amidst your snger . 💔 😡 😞",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-20 07:12:41",
				477,
				"niggaz cant come together cux they promote division .. simple they ignorant . they too busy worry bout why they cant trust .. not how to learn how .. to trust me or not to trust me .. that is the questions .... idc tho uk how im coming .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-15 11:12:45",
				476,
				"i will learn to be peaceful , but i keep my knife at my side ... i will pray for compassion ... whoa - o but if war comes to my door you know i will be blasting warrior mentally my responsibility bring it to my people no holler if you ' re feeling me felling me",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-15 09:12:56",
				475,
				"we as a race will never get ahead . we always killing each other or putting each other down . how can you expect us to rise above everything if all our kings are fallen victim to the streets . it ' s bad enough society won ' t let them get ahead because they are black men but the streets won ' t either . innocent babies have to wake up knowing they will never see their father again , a mother will never see her son , a sister will never see her brother etc etc . i ' m tires of seeing rip down my timeline only to find out it ' s black on black crime . it needs to stop and we need to come together as one !!!!",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-27 05:12:27",
				474,
				"what a beautiful day it was today went out by the pool had dinner with an old boss missed her and then i have work tomorrow then we have new years coming up cant wait to see the new year goodbye 2016 hello 2017 then church on sunday have a wonderful and beautiful night everyone always be kind to one another life is so beautiful and i have forgotten that recently but with that being said keep those you love near and those not so good well delete them out of your life and let the ones you love back in and work to keep them goodnight yall xoxo and not to mention i slammed my finger in the door this evening lmao oh well #washingyourhands # 2017 #iloveyoujw + jw #openeyes #blueeyes #forgiveness #god",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-21 10:12:07",
				473,
				"i will always have my children ' s back ! i will always stand up for what they need and never once will i be sorry for it ! get used to it !",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-30 10:12:47",
				472,
				"here is something that i believe very strongly and that is a major basis for my political and moral beliefs : it is far more important to fight for , strive for , and stand up for what does good , rather than what feels good . what does good may not always feel good , but it is , in the end , good . by the same token , what feels good may not be good , and that is a very dangerously slippery slope .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-19 05:12:05",
				471,
				"whose got a goal to start work toward in 2017 ??? i need two more product testers for 2016 and i ' m done . let ' s work together . 👇 👇 👇 👇 👇",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-11 07:12:03",
				470,
				"our first real christmas tree is starting to come together nicely !",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-09 01:12:44",
				469,
				"this quote by maya angelou , speaks to me more and more everyday . my mission in life is not merely to survive , but to thrive ; and to do so with some passion , some compassion , some humor , and some style . - maya angelou",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-20 03:12:07",
				468,
				"serious question for my trans masc ( more specifically , trans male ) friends : how do you balance wanting to abandon all the self - loathing and self - questioning that people try to socialise into young women and afab people to keep them submissive and embrace moving into self - confidence without being just another headstrong piece of man - garbage ? for example , i am finally confident enough to stand up for myself but feel like i can ' t stand up to / against non - males ( most often , cis women ) , even if i feel like i sometimes should because feminism ? how do you weigh cis privilege against male privilege , especially if you aren ' t cis - passing ?",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-16 01:12:56",
				467,
				"today i had an optometrist look at my list of current medications and tell me i should \" just read moby dick \" instead of taking psychopharmaceuticals that allow me to sleep . he then found the compassion to say \" psychiatrists love to give a diagnosis . adhd , ocd ... people just can ' t be normal . \" i was absolutely enthralled .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-18 09:12:33",
				466,
				"apartment is beginning to come together !",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-24 02:12:42",
				465,
				"15 years ago today , a very precious man turned 78 ; and got the greatest birthday present ever ! he made a bigger impact on my life than anyone else i have ever met . he loved me when it seemed no one else did . he taught me to work hard , love deeply , have compassion on others and most importantly , to keep god the center of my life . he taught me to respect , to forgive and to be honest . i can still hear his aphorisms clearly . i can still see him sitting on the fourth pew from the front , on the left side , at crooked creek . i can remember him calling bro larry davis every christmas eve , to be the first to say \" happy birthday \" ! i can ' t help but think of how proud he ' d be to know that he has a great - great grandson named after him . although it was his birthday , it was also the day that he had lived for ; the day he met jesus face to face . there ' s not a day that goes by that i do not think of him . i love and miss him so very much - my papaw clifton huett white !",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-09 05:12:40",
				387,
				"so i got my knuckles tatted yesterday and two people have told me that ill never get a job . they told me this at my job , where we work together .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-18 01:12:05",
				463,
				"congrats erin darsow for winning the splash liquid lipstick in the color sentimental tonight ! your panda mug must have given you good luck !! i will bring your product to you on tuesday when we work together !! i know you will love it ! plus we can match at work with it !! 🐼 🐼 🐼 🐼 🐼 🐼 🐼 🐼",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-25 02:12:52",
				462,
				"garnet is a complex mix of minerals.it appears in many different colors . this stone provides fortitude and courage , while also helping get projects under way . different colors of garnet do different things ; red is powerfully energizing and is recommended for short term use and green is very stimulating . all variants bring a fiery , warming energy to fight cold , sluggish , or damp disease states . garnet is a stone of purity and truth as well as a symbol of love and compassion .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-16 04:12:10",
				461,
				"u never depend on a man for anything but u want love compassion u never depend on a female for anything but u want love compassion but u always looking to facebook for love confirmation advice and drama but every year u going to do you and every day it ' s im doing me god got me",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-30 04:12:51",
				460,
				"i had a man sit in my chair who was full of wisdom , i had never met this man until today when he came in for a hair cut . the cut took longer than usual because of the deep conversation that we entered . but the one thing that he said that made the a big impact was . \" a liar is a thief \" i asked him to elaborate , \" every time someone lies to you they are stealing something from you , whether it be trust , compassion , or emotions , ect . liars are just as bad as thieves , they will take apart of you that is hard to get back , they will say and do whatever it take to get the outcome they are seeking , but they dont want your heart , your love . they want to use you up until there isn ' t anything left to take . \"",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-13 12:12:32",
				459,
				"walking around . see a woman with a child and the child ' s grandmother ( who has an accent and is presumably an immigrant ) ask a woman sweeping and picking up trash a question about the outlet center . the employee does not speak english . frustrated they walk away . \" how can they hire people who don ' t speak english ? ridiculous . we need trump . \" girl , bye . show some fucking compassion . custodian does not mean public outreach and customer engagement . use your iphone or check the directory . it bears repeating : girl , bye . note : i did not approach them to correct , because even ( if not especially ) in 2016 , a man admonishing two adult women could open a shit storm that i am not shopping for today . i do reserve the right to comment on social media as it is easier . millennials .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-28 05:12:57",
				458,
				"i wear my \" liberal tears \" with pride . how lucky am i that i can feel emotions for others , acknowledge and master them with empathy and thoughtfulness ? outdated hyper - masculine culture teaches young people that their feelings make them weak . how sad it would be to live life that way .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-08 02:12:00",
				457,
				"\" father god , i thank you that your son jesus is greater than my difficulties , struggles , and tribulations . i thank you for sending your son for counseling , comfort , compassion , and love . i thank you that i can call on the name of jesus for any reason and he will respond . lord , make my first response be the desire to call upon your name , no matter what i face . in jesus \u2019 name . amen . \" a prayer out of a bible study i ' m doing , figured it may encourage others too . have a blessed day !",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-30 06:12:54",
				456,
				"happy happy birthday & & dirty 30 to siobhan murphy ! i ' m sad i can ' t make it to the celebrations , but i have a few tricks up my sleeve . thank you for being your wonderful self every day we work together !! 💕 #og3 #babes #teamvios",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2017-01-02 09:01:41",
				455,
				"what would $500 do your family right now ? would it pay 💰 your car 🚗 payment ? would it pay off debt 💳 ⚖ 🎓 ? would it put money in the bank to pay for a birthday party 🎉 🎈 🎁 ? would it allow for you to pay 💰 for your kid to have new shoes 👟 whenever they want ? it works pays the bills , debt , and so much more ! don ' t just wish things will get better , do something about it ! join me and my team ! we will work together side by side !!! message me today about this once in a lifetime opportunity !",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2017-01-01 08:01:47",
				454,
				"in the course of this new time cycle , many of you will come together with soul family and soul groups to gather to do meditations and sacred ceremonies that will generate the energy for the re - establishment of sacred earth consciousness in your world . what was lost will be found and re - established . the consciousness of sacred earth will start with you , with your groups and communities , and with the sacred work and ceremonies that you do .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-16 04:12:55",
				453,
				"what we should do is work together and listen to each other . it ' s not rocket science , it ' s evolution . it really is that easy .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-20 06:12:11",
				452,
				"and to make things better had to put a new battery in the car",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-10 02:12:26",
				451,
				"sending love and happiness and compassion to many today .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-24 09:12:43",
				450,
				"it takes a special group of people to come together for the betterment of others . we strive to improve the lives of everyone we come in contact with and even those we might never meet in person . what we do is about more than ourselves . it ' s about getting to core of what drives people and nurturing it to push them to the greatness they are worth . it ' s about leaving behind a legacy that continues to improve the lives of people long after we ' re gone . this is my herbafamily . #family #askmehow #wedoherbalife #herbalife24 #judgementfreezone #affordabletraining #strongerthanever #loseweight #gainmuscle #increaseenergy #resultsdriven #progress #betterthanyesterday #gymlife #gymtime #fitlife #fitguys #fitchicks #fitfam #changinglives #healthyactivelifestyle #eatgoodfeelbetterlookgreat #fitcamp #sanantonio #safit #sanantoniofit #cakesnweights #hitcrew #hitfactory",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-23 01:12:24",
				447,
				"while everyone is out doing their last minute shopping , getting upset with people and angry . over long lines please don ' t forget about all the people in our own community that have to sleep in a shelter tonight or on the street . kids who ' s parents can ' t afford to go out and stand in those long lines to get their kids what they really want . those that have no family and will be spending the holiday sitting all by themselves . kids who ' s parents are getting high in front of them instead of shopping for xmas presents . don ' t get so wrapped up in your own selfishness that you forget about what this holiday is really about . be kind to one another and remember those who are less fortunate than you .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-19 02:12:35",
				446,
				"i need to stand up for what i believe is right even if people don ' t agree with me . since i was little i was taught to have dignity for myself . people need to learn that for every action there ' s either a positive or negative consequence ...... life honesty ! changes so much sometimes the friends that i thought that i had at some point in my life i feel like you ' re not a part of it anymore . the friendships that i worked so hard to keep up float are slowly crumbling down and to just memorize all i can do is except it .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-17 07:12:50",
				445,
				"with the holidays drawing near and the year coming to a close i wanted to give a shout out to my ex husband , darren kruschke , who is not just a great guy , but a fantastic father , and a wonderful coparent . for several years now , this man and i have been able to set aside our differences and work together to raise a pretty cool kid . darren is always so flexible and honest and i know i can always count on him to come to a satisfactory compromise . why am i sharing this ? because people get so hung up on \" my time \" \" your time \" they lose sight of who ' s time it really is , the child ' s . so i just wanted to say thanks , darren . for always putting our son first , and keeping the big picture in mind . and if someone out there should read this and is struggling with their ex , please remember peace is a choice . for your child ' s sake , make it .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-16 04:12:17",
				444,
				"if trump is truly planning to stand up for working people , he would not be filling up his cabinet with billionaires and wall street bankers .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-21 01:12:30",
				443,
				"and now we get to work together again ! 😄",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-13 03:12:21",
				442,
				"if a business doesn ' t have any customers or employees , it will not survive . my business needs to not only survive , but thrive ! i have always loved the majority of things that are involved in small town living . the number one thing is when a person is in need - we come together . please help my business succeed ! my goal is to have 3 new team members and 3 new customers by christmas . can you or one of your friends help me ?",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-24 01:12:19",
				441,
				"so this week i did a thing ... i submitted my resignation from my position at uic . i could not feel better about this decision ! after many challenges the past year and a half i have been able to find my voice , stand up for myself , and am refusing to settle . i know my worth as a person and a professional and am not willing to compromise . i am so grateful to my husband and family for all of their support ! also the many friends , former staff members , mentors , and confidants , thank you for your listening ears , supportive words and encouragement through this all . big things are happening and i couldn ' t be more excited for all that is to come 😊 #movingon #likeaboss #excitedforthefuture #believeinyourself #standingtall",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-11 09:12:53",
				440,
				"it ' s amazing how something negative , our event today got canceled ( cc : martine hamers - scavenius ☹️ ) ... can lead to something positive ... three awesome coffee meetings with people who want to work together with unstuck school . it ' s interesting to think if i was focusing on the event these meetings wouldn ' t have happened . #lookonthebrightside",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2017-01-02 04:01:16",
				439,
				"watching the rose bowl parade and thinking of the infamous grandma & grandpa norton mayflower tour vacation . all the angry old people , dad and uncle gary taking a stand to let us stay longer than 2 hours at universal studios , mom saving bridge from getting trampled on the bus , mom fighting off old people so i could have a chocolate chip cookie , and the announcer telling the old people not to steal the centerpieces . and lastly , who can forget kathy and phil who went rogue and traveled in a separate car , kidnapped michael to go track down oj simpsons house . classic family vacation .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-10 10:12:54",
				438,
				"despite the soul - shattering horror that has been the last few months of 2016 , i am so proud of those of you who have stood up for us , them , and me . i am lucky to have people in my life who not only believe that we can be better and do better , but also are willing to stand for equality and hope even when it doesn ' t apply to them .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-08 06:12:28",
				437,
				"\" our devotion to truth should not be at the expense of our compassion for other people . love of truth as a spiritual practice should attempt to overcome hostility to other people , though it is admittedly an advanced spiritual practice to resist frustration with people whose point of view seems to us very destructive . but even in these cases we need not hate people who oppose us , even as we work with energy and passion in the opposite direction . the desire for truth is a practice , not an accomplishment . we can love the truth and seek it and desire it but refrain from being too attached to the scraps we unearth . in the play of time and deepening understanding , they may be more partial than we realized . \" wendy farley , gathering those driven away",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-16 03:12:44",
				365,
				"my little brother 😇 you gave me strength , love , and comfort , you always protected me and always stood up for me i will never forget . the last few months haven ' t been easy i will never forget you and i will always let your memories and spirit live .. sean nabors 🙏 🏻 🙏 🏻 🙏 🏻",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2017-01-01 05:01:20",
				436,
				"i ' m determined this year 2017 to make a big difference in my life for my wife and kids and myself , the last four years have been really rough for me and my family and my wife has stuck by my side through my ups and downs and all my surgeries and all the therapy and the shit wit my stomach wit me getting sick !!! so i will do my best to make things better and hopefully get us a house of r own and pay off all r debt and start off this new year five steps ahead instead of seven step back !!! we r home just relaxing the wife and the kids and i but we r missing one xavier he ' s wit his mom this new years and even tho i went to work at 6:00am this morning i decided to ask my boss if i can work the over night from home on call so i can try and make some extra money 💰 and now that the ball has dropped i have a feeling it ' s about to get crazy busy so wish me luck out there on the road wit all the crazy people partying it up for 2017 !!!!",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2017-01-04 07:01:37",
				435,
				"happy new year to my family and friends . i feel blessed to start this year celebrating my father ' s wedding . here ' s to a year full of love , friendship , compassion , and hope !",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-09 03:12:32",
				434,
				"apologies to all who feel wronged by my self , and forgiveness to all i feel have wronged me . this is not the time for holding onto anything but love , compassion and forgiveness . no one can hurt me now . changing my relationships with everyone ... some have nothing left to give , some have no will to receive love and light to all , whether i know you , or not , whether you are around , or not , whether you have shown me love or not namaste",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2017-01-01 04:01:14",
				433,
				"acts 1 : 6 when they therefore were come together , they asked of him , saying , lord , wilt thou at this time restore again the kingdom to israel ?",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-29 10:12:47",
				432,
				"isaiah 27:11 when its twigs are dry , they are broken off and women come and make fires with them . for this is a people without understanding ; so their maker has no compassion on them , and their creator shows them no favor .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-29 10:12:48",
				431,
				"psalm 103 : 4 who redeems your life from the pit and crowns you with love and compassion",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-22 06:12:00",
				430,
				"ever since i moved to nashville , my life has completely come together . today , i had my second interview with camp winadu , to be their director of lacrosse . i am one of the few , hand picked , from across the entire country . this is one of the best camps in the entire nation . with multiple ncaa di - diii coaches , and professional athletes attending , and coaching . i moved to nashville , on a whim . not really too sure of a career . i ' d recommend , if you think about doing something ( or moving ) , grow a pair of balls and do it . don ' t listen to the negative thoughts and worries . that ' s how i got here , by not listening to them .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-26 09:12:32",
				429,
				"2 kings 13:23 but the lord was gracious to them and had compassion and showed concern for them because of his covenant with abraham , isaac and jacob . to this day he has been unwilling to destroy them or banish them from his presence .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-28 11:12:40",
				428,
				"so happy things are starting to come together for me .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-18 08:12:11",
				427,
				"lamentations 3:32 but though he cause grief , yet will he have compassion according to the multitude of his mercies .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2017-01-04 02:01:18",
				426,
				"kudos to all the people out here on these albany streets helping clean up the city . i love seeing people come together despite religious beliefs , color , race etc ...",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-31 12:12:41",
				425,
				"the same people who always use to look out for them self now complain that people don ' t look out for each other . 2016 has reveal mental illness on a large scale .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2017-01-01 03:01:33",
				424,
				"well not how i wanted to spend new years but ..... one thing is certain the kids and i deserve more then sitting in a shed in bear town ! i ' ve put up with a lot because ( insert stupid excuse here ) to try and keep a family together . i ' m so sick of looking like a bad guy because i want better for my kids . i ' ve dealt with emotional and mental abusive thinking it was somehow my fault or i deserved it . tomorrow is a new year and i will make changes . for tonight i ' m glad i listened to my gut . the kids and i are in his house ( not a home ) safe with my dogs . i ' m putting this on here only because it ' s damn time i stood up for myself and kids . i ' m sooooo tired of looking like a debbie downer or a bitch . i really hope this year brings happiness to everyone ! be safe tonight !",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-25 07:12:14",
				423,
				"i am a beacon of compassion .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-17 09:12:15",
				422,
				"all my life i ' ve praised zillah , a small town full of good people , everyone looks out for one another in this town , so peaceful . and now i stand amazed , not a single person stood up for justice , knowing my history and past , as a mighty mustang at the sundome , the bulldog from middle school , and keeping tradition alive by finishing first at home meet for the orange and black leopard . i ' ve been here all my life , and some ghost in this town doesn ' t want me here , so the ghost will stay . i don ' t know what you get out of being dark , but light will shine .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-20 05:12:53",
				421,
				"when you look back at your childhood i want only for you to know that i gave it my all . i worried , i failed , i didn ' t always get it right but i tired my hardest to teach you about kindness , love , compassion and honesty . even if i am learning it through my own mistakes ... i love you enough to not give up , even when things seemed hopeless and even when life knocked me down . i want you to remember me as the one who always got back up . 💪 🏽 💕 all three of you are loved more than you will ever know . i will always be here , i will always listen , i will always always always love you . no matter where life takes you i will always be waiting for you with arms wide open . #muva 👑",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-20 05:12:32",
				420,
				"available to shoot tomorrow & thursday . let ' s work together . 👊 🏻",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-29 04:12:39",
				419,
				"we are living in the \" unfriend button , \" times , rather than a \" let ' s talk things out like adult , \" times . what ever happened to having a conversation w / someone if you ever disagree about something ? real friendships will come together and talk things out . when things aren ' t talked out , that means that the friendship doesn ' t matter at all . forgive and forget . last time i checked i graduated in the class of ' 05 . there ' s no time for entrepreneurship high school games anymore , i ' m too busy focusing on these goals and helping people tho !!!! let ' s gooooooooooo !!!!! sincerely , #papileo p.s. you will be seeing more mic drops than usual .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-24 02:12:11",
				418,
				"i wish today was a good day ... laying thinking about life and how far i ' ve come . makes me happy n sad . i ' ve accomplished a lot by myself , and some help from family , n friend ' s along the way . and i am grateful for that . but what makes me have a heavy heart . i miss my mom ... i will always miss her . this holiday was her favorite . but i ' m 29 and i have so many emotions , i keep going through . one thing that i want most . i want to share my life with someone . grow old with someone . have kid ' s . feel love and compassion . no matter if i stop looking and or keep looking . i never find it . i just want it to be tomorrow already , so i can be with my family and friend ' s . surround myself with people who i know really love n care about me . now i must get ready for work ......",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-29 06:12:01",
				417,
				"any advice on how to deal with sisters that literally will not stop fighting , ever . i am at the end of my rope with it . these girls are constantly fighting , hitting , arguing , and just can ' t manage to get along or work together . i ' ve tried everything . is this normal ? i ' ve never had a sister . lol . 😫 😞 😭 😡",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2017-01-02 12:01:52",
				416,
				"when we come together as a family we are stronger than a nation",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-16 03:12:41",
				415,
				"good morning on this cold day .... god is good all the time in i am so bless to be able to wake up another day . i am sad it is too many of our good black men being in caskets in i hate it people or just killing people for nothing no one is safe now in days in that is bad i worrie because i have a 9 year old son . and i dont know what i may do without him . so my heart goes out to all the young men that got killed here in charlotte . and my heart goes to my babe friend even tho i only met him ones r.i.p. god i know that he is up there with u lord . all lives matters we need to come together as one who else our kids going to look up too . well let me get really for work . peace . nuwoop yop in dollar billz keep your heads up . i am here for u i know he in a better place i love u guys from the bottom of my heart",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-14 07:12:31",
				414,
				"you know , if you teach your children to stand up for themselves when they are bullied , we wouldn ' t need safe spaces ... js",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-25 11:12:41",
				413,
				"the best feeling ever is when both of your families can come together . and celebrate the holidays . #nooneleftbehind",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-29 07:12:12",
				412,
				"it ' s been such an awesome & crazy past few months this year , bc i now have all of my family in my life , my adoptive family , my foster family & my biological family , for the first time in 27 years i can say that , all the missing pieces of my life puzzle have all finally come together , i am so blessed to have so much family , & they all come in so many different forms , blood , & ink , but most of all , love ❤️ #familyovereverything",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-17 05:12:51",
				411,
				"it ' s cold out there friends . do your good deeds . if you see someone walking offer them a ride . be kind to each other . 🌡 🌨 ❄",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2017-01-01 02:01:54",
				410,
				"to my friends , and family . i wish you all a happy new year . the world is a crazy place today , so lets try to work together this year and make it a better place .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-14 05:12:35",
				409,
				"\" peace is not just mere absence of violence . peace is the manifestation of human compassion . \" \u2014 dalai lama xiv | #peace #quotes",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-21 11:12:13",
				408,
				"i love me and de ' asia ' s new apartment ; it ' s really starting to come together",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2017-01-02 02:01:37",
				407,
				"don\u2019t use foul or abusive language . let everything you say be good and helpful , so that your words will be an encouragement to those who hear them . and do not bring sorrow to god\u2019s holy spirit by the way you live . remember , he has identified you as his own , [ e ] guaranteeing that you will be saved on the day of redemption . get rid of all bitterness , rage , anger , harsh words , and slander , as well as all types of evil behavior . instead , be kind to each other , tenderhearted , forgiving one another , just as god through christ has forgiven you .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-25 03:12:26",
				406,
				"photo skills pretty much sucked today and no one was very cooperative ! mom didn ' t feel well and neither did i . but hey , we are blessed to be able to come together as a family and celebrate christmas . 🎄 ⛄ 🎁 ❄ 🎅",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-20 02:12:27",
				405,
				"today is my daddy cdayyyy thoooo !!!! daddy i love you soooo freakn much it ' s ridiculous ! 😂 i know i dont have to worry bout nothing when it comes to this man . you go above and beyond for your children . if you got it , then so do we . the bond i have wit my dad mannnn i can just look at him and we both bust out ta laughin 😂 😂 he knows me too well tho yall . sometimes i be having to run cuz like they say \" been there , done that \" lol my daddy be on my bumper sometimes 😂 but its all love . dont mean to brag but you know im the first bornnnnnn and the love and compassion you showed me , i see it all over again wit my daughter . thanks for never judging me and being there for me no matter how i may have needed you . happy c day dadddyyyyyy !!!!! may the turn up begin ! cortez young",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-08 07:12:42",
				404,
				"2017 is the year everything will come together !!! #claimit",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-09 12:12:05",
				403,
				"daily horoscope : scorpio december 9 , 2016 be careful with your money matters now : others will try to take advantage of your soft heart and compassion for others . before you sign anything -- anything at all -- have someone you know and love look it over for you , and don ' t let your heart sway your mind . your friendship is the best gift of all .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-24 06:12:09",
				402,
				"i have a serious request . can all my woke friends on fb come together and write a book ? like , deadass b ( sorry i ' m wearing tims ) , i honestly enjoy and want to listen your point of views , but i ' ll be damned if i ' m scrolling through 50 comments with 20 replies each , and they ' re all at least a paragraph long . got me over here feeling like i ' m reading the entire harry potter series . but seriously , if any of you guys have a novel in the works , please reach out . i can ' t be spending hours reading one status . that is all .. 😊",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-15 06:12:41",
				401,
				"my mission in life is not merely to survive , but to thrive ; and to do so with some passion , some compassion , some humor , and some style . try to be a rainbow in someone ' s cloud . if you don ' t like something , change it ... #mayaangelou",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-14 09:12:47",
				400,
				"just had a really long brief about the new transgender acceptance policy in the navy . it was really monotone though and i feel like it didn ' t cover enough points for the people who actually needed to learn the points . when question time came around the petty officers were really hushed about it , one took a stand for questions on what if they go through an ftm change and then get pregnant and the captain answered respectfully and honestly to the best he could of the policy but there were a lot of hushed snickers from the petty officers on the sides . for once i think the the students had more respect .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-11 12:12:56",
				399,
				"getting ready for work this morning . hope everyone has a great day . be safe and look out for each other . #dgd",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-25 01:12:36",
				398,
				"today i lost my peronal hero . he taught me what it is to be a real man . to use my brain and my heart in every decision . to always show compassion for everyone to except and love everyone . how to treat a woman with respect and honor , to be a gentleman . i love you dad and the world is going to be a darker place without you in it . i wish i had spent more time with you called you more and made sure you knew how much i loved you and respected you and how proud i wanted to make you . i ' m glad you got to see me turning things around at the end . you had such an adventurous spirit and that ' s something you passed on to me . now i have to have enough adventures for the both of us . we will take care of mom and ginger for you so don ' t worry . love you pops , your the greatest man i have ever known and been lucky enough to call dad .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-30 03:12:30",
				397,
				"i die by the latino , on the border of mexico , cant find my compassion or love , buried so deep down , due to my peoples ' frowns .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-16 12:12:35",
				396,
				"i ' m happy , positive and trying to live every day to the fullest . ask yourself one question .. are you doing the same thing ? instead of fighting , bitching , yelling and all of the above sit down , think about the situation and work together on things . it takes two to make things work . even if you don ' t have someone you can still make things work on your own . people may say things and do things that try to hurt you but you have a back bone for a reason and some times a fist that you might have to use . suck it up , be happy and be grateful . have a blessed day mother fuckers 👌 🏼 ☝️️ 💪 🏻",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-16 04:12:00",
				395,
				"people deny such sweet love and compassion .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-11 02:12:30",
				394,
				"says this after five years in defense , easily guessing my opponent ' s thoughts , \" intellegence doesn ' t come from language , but by heart , and thy by heart . \" if you ' re talking about brains all the time without compassion you sound like a robot . a drone .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-08 01:12:10",
				393,
				"this right here is what i wake up to every day ! feels my heart with love and pure happiness ! after all these 15 some years , we have finally come together . i love you william",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-18 08:12:06",
				392,
				"looking for people to join me on a start to a healthier new year . looking for people to help support one another in hitting their goals . so who wants to join ???? i know i am ready for it . now just ask yourself are you ??",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2017-01-02 08:01:59",
				391,
				"ok , seriously . . . i feel like from october to december it ' s like a constant food fest ! 🍪 🍫 🍷 🍕 🍗 🍞 🍨 . so i ' m starting a 90 day ✨ holiday detox ✨ challenge to help get rid of all that yuck . 😩 these two life - savers now come together in a combo pack for just $49 ( yes , for both ! ) ! 🙌 ( * or order separately : greens = $35 / cleanse = $36 ) . / / message me if you need this ! ( i know i do ! ) laurenyurek \u2022 myitworks \u2022 com",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-14 10:12:13",
				390,
				"\" ' hate the crime , love the criminal . ' this is not a mere platitude ; it is a description for liberation . if we had actually learned to show love , compassion , care , and concern across racial lines during the civil rights movement - rather than go colorblind - mass incarceration would not exist today . \" - michelle alexander",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-29 07:12:48",
				389,
				"shout out to all my employee ' s .. i want to take a minute tonight to tell you i am proud of you and this is why ... you work short handed . you put up with mental and verbal abuse from cutomers . you strive to make things better every day . you stay past your shifts . you work so hard and you do it all with a smile on your face and a thank you . you make my job something i can be proud of . thank you ! moving into the new year i look forward to growing in positive ways as a store and a work family . my wish for all of you is for 2017 to bring nothing but positive things for you",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-11 02:12:37",
				386,
				"compassion is a way of being .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-12 08:12:56",
				385,
				"every time you pick up your flag i see you as warrior fighting for what she believes in . every time you pick up your flag your like a shinning light in the publics eye . but every time you pick up your flag your like a queen raising her beautiful veil showing your love and compassion for papa god . i am so proud of you sister keep doing what your doing . raise your veil on high and show who you truly are . a daughter of the most high king",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-28 03:12:53",
				384,
				"a lot of people complain about being an empath but you could recieve same teachings and effect with an open and clear heart as an empath but without the pain of empathy",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-27 05:12:44",
				383,
				"i am very pleased with myself right now . i ' m not taking people ' s crap anymore . time to stand up for myself .",
				null,
				null,
				null
			],
			[
				"2017-01-06 12:01:46",
				"2016-12-23 05:12:41",
				382,
				"i just wish all of us sisters in brother can come together",
				null,
				null,
				null
			]
		],
		"metadata":[
			{
				"colIndex":0,
				"colType":"String",
				"colName":"date_recieved"
			},
			{
				"colIndex":1,
				"colType":"String",
				"colName":"post_date"
			},
			{
				"colIndex":2,
				"colType":"Integer",
				"colName":"post_id"
			},
			{
				"colIndex":3,
				"colType":"String",
				"colName":"content"
			},
			{
				"colIndex":4,
				"colType":"String",
				"colName":"title"
			},
			{
				"colIndex":5,
				"colType":"String",
				"colName":"blurb"
			},
			{
				"colIndex":6,
				"colType":"String",
				"colName":"url"
			}
		]
	}
);

const getFullInterestTypes = () => (
	{
	  "queryInfo": {
	    "totalRows": "4"
	  },
	  "resultset": [
	    [
	      "Sports Figures",
	      "6059927546954",
	      "1864147183855576",
	      26
	    ],
	    [
	      "Brands",
	      "6059927546954",
	      "286497791785351",
	      4
	    ],
	    [
	      "Broad Interests",
	      "6059927546954",
	      "1864147183855576",
	      1
	    ],
	    [
	      "Celebrities",
	      "6059927546954",
	      "1864147183855576",
	      1
	    ]
	  ],
	  "metadata": [
	    {
	      "colIndex": 0,
	      "colType": "String",
	      "colName": "interest_type"
	    },
	    {
	      "colIndex": 1,
	      "colType": "String",
	      "colName": "fb_study_id"
	    },
	    {
	      "colIndex": 2,
	      "colType": "String",
	      "colName": "fb_rule_id"
	    },
	    {
	      "colIndex": 3,
	      "colType": "Numeric",
	      "colName": "mentions"
	    }
	  ]
	}
);

const getFullInterestsByInterestType = () => (
	{
	  "queryInfo": {
	    "totalRows": "3"
	  },
	  "resultset": [
	    [
	      770898,
	      "Home Depot",
	      "Brands (Syndicated)",
	      1
	    ],
	    [
	      771130,
	      "Walmart",
	      "Brands (Syndicated)",
	      1
	    ],
	    [
	      772344,
	      "Bojangles' Famous Chicken 'n Biscuits",
	      "Brands (Syndicated)",
	      1
	    ]
	  ],
	  "metadata": [
	    {
	      "colIndex": 0,
	      "colType": "Integer",
	      "colName": "id"
	    },
	    {
	      "colIndex": 1,
	      "colType": "String",
	      "colName": "name"
	    },
	    {
	      "colIndex": 2,
	      "colType": "String",
	      "colName": "interest_type"
	    },
	    {
	      "colIndex": 3,
	      "colType": "Numeric",
	      "colName": "mentions"
	    }
	  ]
	}
);

const getFullPostsByInterestType = (interestDescriptor) => (
	{
	  "queryInfo": {
		 "totalRows": "3"
	  },
	  "resultset": [
		 [
			"2050-12-31 12:01:59",
			"2050-12-31 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"1975-01-01 12:01:59",
			"1975-01-01 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2016-01-06 12:01:59",
			"2016-12-23 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2016-01-06 12:01:59",
			"2016-12-23 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2016-01-06 12:01:59",
			"2016-12-23 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2016-01-06 12:01:59",
			"2016-12-23 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2016-01-06 12:01:59",
			"2016-12-23 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2016-01-06 12:01:59",
			"2016-12-23 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2016-01-06 12:01:59",
			"2016-12-23 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2016-01-06 12:01:59",
			"2016-12-23 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2016-01-06 12:01:59",
			"2016-12-23 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2016-01-06 12:01:59",
			"2016-12-23 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2016-01-06 12:01:59",
			"2016-12-23 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2016-01-06 12:01:59",
			"2016-12-23 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2016-01-06 12:01:59",
			"2016-12-23 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2016-01-06 12:01:59",
			"2016-12-23 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2016-01-06 12:01:59",
			"2016-12-23 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2016-01-06 12:01:59",
			"2016-12-23 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2016-01-06 12:01:59",
			"2016-12-23 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2016-01-06 12:01:59",
			"2016-12-23 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2016-01-06 12:01:59",
			"2016-12-23 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2016-01-06 12:01:59",
			"2016-12-23 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2016-01-06 12:01:59",
			"2016-12-23 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2016-01-06 12:01:59",
			"2016-12-23 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2016-01-06 12:01:59",
			"2016-12-23 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2012-01-06 12:01:59",
			"2012-12-25 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2020-01-06 12:01:59",
			"2020-12-25 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"1985-01-06 12:01:59",
			"1985-12-25 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"212-01-06 12:01:59",
			"2012-12-25 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2017-01-06 12:01:59",
			"2016-12-25 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2017-01-06 12:01:59",
			"2016-12-25 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2017-01-06 12:01:58",
			"2016-12-15 03:12:18",
			1796,
			"about an hour ago i ' m outside with my dog and a truck pulls up . ( black truck ... dual cab not that it matters just giving you a visual image lol ) a young man jumps out and hands me a bojangles chicken biscuit . \" merry christmas \" he says climbs back in truck and leaves . made my morning . remember to appreciate the kind gestures . kindness is always a gift n far too rare .",
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			772344
		 ],
		 [
			"2017-01-06 12:01:59",
			"2016-12-14 12:12:07",
			1864,
			"my dog is so good . i went to home depot and left lucky in the car . i was in the store probably bout 20 minutes and when i came out i found my car door open , my seatbelt got jammed and ended up leaving door wide open . and there ' s lucky in the back seat like a good boy guarding my car and never stepped out while i was gone . i can ' t ask for a more obedient dog than lucky ... he ' s getting steak tonight !",
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			770898
		 ]
	  ],
	  "metadata": [
		 {
			"colIndex": 0,
			"colType": "String",
			"colName": "date_recieved"
		 },
		 {
			"colIndex": 1,
			"colType": "String",
			"colName": "post_date"
		 },
		 {
			"colIndex": 2,
			"colType": "Integer",
			"colName": "post_id"
		 },
		 {
			"colIndex": 3,
			"colType": "String",
			"colName": "content"
		 },
		 {
			"colIndex": 4,
			"colType": "String",
			"colName": "title"
		 },
		 {
			"colIndex": 5,
			"colType": "String",
			"colName": "blurb"
		 },
		 {
			"colIndex": 6,
			"colType": "String",
			"colName": "url"
		 },
		 {
			"colIndex": 7,
			"colType": "String",
			"colName": "interest_type"
		 },
		 {
			"colIndex": 8,
			"colType": "String",
			"colName": "fb_study_id"
		 },
		 {
			"colIndex": 9,
			"colType": "String",
			"colName": "fb_rule_id"
		 },
		 {
			"colIndex": 10,
			"colType": "Integer",
			"colName": "interest_group_id"
		 },
		 {
			"colIndex": 11,
			"colType": "Integer",
			"colName": "interest_id"
		 }
	  ]
	}
);

const getFullPostsByInterest = (interestDescriptor) => (
	{
	  "queryInfo": {
		 "totalRows": "1"
	  },
	  "resultset": [
		 [
			"2050-12-31 12:01:59",
			"2050-12-31 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"1975-01-01 12:01:59",
			"1975-01-01 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2020-01-06 12:01:59",
			"2020-12-25 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"1985-01-06 12:01:59",
			"1985-12-25 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"212-01-06 12:01:59",
			"2012-12-25 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2017-01-06 12:01:59",
			"2016-12-25 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2017-01-06 12:01:59",
			"2016-12-25 10:12:19",
			1835,
			randomLorem(interestDescriptor),
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			771130
		 ],
		 [
			"2017-01-06 12:01:58",
			"2016-12-15 03:12:18",
			1796,
			"about an hour ago i ' m outside with my dog and a truck pulls up . ( black truck ... dual cab not that it matters just giving you a visual image lol ) a young man jumps out and hands me a bojangles chicken biscuit . \" merry christmas \" he says climbs back in truck and leaves . made my morning . remember to appreciate the kind gestures . kindness is always a gift n far too rare .",
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			772344
		 ],
		 [
			"2017-01-06 12:01:59",
			"2016-12-14 12:12:07",
			1864,
			"my dog is so good . i went to home depot and left lucky in the car . i was in the store probably bout 20 minutes and when i came out i found my car door open , my seatbelt got jammed and ended up leaving door wide open . and there ' s lucky in the back seat like a good boy guarding my car and never stepped out while i was gone . i can ' t ask for a more obedient dog than lucky ... he ' s getting steak tonight !",
			null,
			null,
			null,
			"Brands (Syndicated)",
			"6053840375154",
			"1396727877004174",
			116493,
			770898
		 ]
	  ],
	  "metadata": [
		 {
			"colIndex": 0,
			"colType": "String",
			"colName": "date_recieved"
		 },
		 {
			"colIndex": 1,
			"colType": "String",
			"colName": "post_date"
		 },
		 {
			"colIndex": 2,
			"colType": "Integer",
			"colName": "post_id"
		 },
		 {
			"colIndex": 3,
			"colType": "String",
			"colName": "content"
		 },
		 {
			"colIndex": 4,
			"colType": "String",
			"colName": "title"
		 },
		 {
			"colIndex": 5,
			"colType": "String",
			"colName": "blurb"
		 },
		 {
			"colIndex": 6,
			"colType": "String",
			"colName": "url"
		 },
		 {
			"colIndex": 7,
			"colType": "String",
			"colName": "interest_type"
		 }
	  ]
	}
);



module.exports = {
	getPosts,
	getFullInterestTypes,
	getFullInterestsByInterestType,
	getFullPostsByInterest,
	getFullPostsByInterestType
};



