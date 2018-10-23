# LyricalLibby
MadLibby learns to speak! Mad-libs via Twitch Chat with Text-to-Speech. We built this Twitch-integrated chat story writer live on Twitch!

## Instafluff ##
> *Come and hang out with us at the Comfiest Corner on Twitch!*

> https://twitch.tv/instafluff

> https://twitter.com/instafluffTV

## Credits ##
Thank you to all the participants of this project!

**MacabreMan2, Instafluff, sparky_pugwash, Instafriend, AntiViGames, CreativeBuilds, poppybox, 6toez, That_MS_Gamer, QeraiX, zivivi1, SomaPills, JessicaMak, BungalowGlow, BountyHunterLani, Mikeystea, eclipseanu, Chlapicek99, kingswerv, mrkinix, kaisuke, CaseyGeske, malfunct, KitAnnLIVE, losthewar, Amarogine, Kisa__d1_1b, nightsilas, Infanate_Reapage, Pixelgourmet, ravavyr, Deitypotato, PinataHero, nallaj, DEAD_P1XL, therewillbememes, shurgin071, nallajbot, bloom_molly, tuoppio, MrRayKoma, jellydance, Kara_Kim, SparkzAlot, InSanityParty, ccjmne, oto_9717, tomaakola, Dl2agon, ElysiaGriffin, HonestDanGames, FuriousFur, TheHungerService, BillNash, TheMainEBrent, MerlinLeWizard, Kyoslilmonster, mr_grey, MisterHex, TheThirdWalker, RTFleming, MissPennyPress, Skttle_, BooobieTrap, 6toez, Kaciedilla, kingswerv, Poolpourri, ItsNaomiArt, AlexHicks, DorkzillaI, Cats4Hire, HunWalk, iAmNotFromHere**

## Instructions ##

1. Install NodeJS - [https://nodejs.org/en/](https://nodejs.org/en/)
2. Open the directory in a Command Prompt/Terminal
3. Install Dependencies: `npm install`
4. Get a Twitch Chat OAuth Password Token - [http://twitchapps.com/tmi/](http://twitchapps.com/tmi/)
4. Create a file named `.env` that looks like this:
```javascript
PORT=8000
TWITCHUSER=[YOUR-USERNAME-HERE]
OAUTH=[YOUR-OAUTH-PASS HERE] # e.g. OAUTH=oauth:kjh12bn1hsj78445234
```
5. Run Server: `npm start`
6. View the webpage from your web browser! [http://localhost:8000](http://localhost:8000)
