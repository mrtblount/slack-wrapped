/**
 * Compact stopword lists for the seven languages the word stats understand. They are all applied at
 * once: a team that mixes languages should not see "que" or "und" as its favourite word.
 *
 * Only words of three letters or more matter (shorter tokens are dropped before the lookup), and
 * warm words such as "thanks", "please", "love" or "great" are deliberately NOT here: they are the
 * interesting ones. The English list ends with plain everyday words (dates, sizes, "meeting", "update")
 * that every team types constantly; leaving them out lets a team's own vocabulary reach the top.
 */

const ENGLISH = `
the and for are but not you all any can had her was one our out get got has him his how its may now
off own per saw say says she too use via who why yes yet able about above across after again against
ago ahead ain't all almost along already also although always among and another any anybody anyone
anything anyway anywhere are aren't around aside ask asked away back became because become been before
behind being below beside besides between beyond both came can't cannot could couldn't did didn't does
doesn't doing don't done down during each either else enough etc even ever every everybody everyone
everything everywhere few first for from further gave get gets getting give given gives goes going gone
gonna gotta had hadn't has hasn't have haven't having he'd he'll he's hence her here here's hers herself
him himself his how how's however i'd i'll i'm i've into isn't it'd it'll it's its itself just keep
keeps kept kinda know known knows last least less let let's lets like likely look looked looking looks
lot lots made make makes making many may maybe might mine more most much must mustn't myself near need
needed needs neither never next nobody none nor not nothing now nowhere off often okay once one ones
only onto other others otherwise ought our ours ourselves out over own part past perhaps probably put
quite rather really right said same saw say saying says see seem seemed seems seen several shall shan't
she she'd she'll she's should shouldn't since some somebody someone something sometimes somewhere soon
sort still stuff such sure take taken takes taking than that that'll that's the their theirs them
themselves then there there's these they they'd they'll they're they've thing things think thinking
thinks this those though thought three through thus till together too took toward towards tried tries
try trying two under unless until upon use used uses using usually very want wanted wants was wasn't way
ways we'd we'll we're we've well went were weren't what what's whatever when where where's whether
which while who who's whoever whole whom whose why will with within without won't would wouldn't y'all
yeah yep yes yet you you'd you'll you're you've your yours yourself yourselves yup nope okie
dont doesnt didnt cant wont isnt arent wasnt werent hasnt havent hadnt couldnt wouldnt shouldnt thats
whats heres theres youre theyre ive ill youll weve youve hes shes lets gotcha wanna gimme lemme
actually basically literally guess mean means meant idk imo imho btw fyi tbh afaik iirc
http https www com org net html
today tomorrow yesterday tonight day days week weeks weekend month months year years morning afternoon
evening night time times minute minutes mins hour hours second seconds moment later early earlier late
monday tuesday wednesday thursday friday saturday sunday mon tue tues wed thu thur thurs fri sat sun
january february march april june july august september october november december
new old good bad better best big small little long short high low next soon quick quickly real fine
people person guys folks everybody team teams work working works worked job call calls meeting meetings
point question questions answer update updates check checking checked send sending sent start started
starting end ended run running ran help helps helped feel feels found find finding show shows showed
read reading write writing wrote add added adding change changed changes different possible bit kind
idea ideas case cases number numbers side place line lines page pages anyone else anymore around
come comes coming came call called tell told ask asking talk talking move moved moving set sets left
`;

const SPANISH = `
que los las del una uno unos unas por con para como más mas pero sus este esta estos estas ese esa esos
esas eso esto aquel aquella aquello entre cuando muy sin sobre también tambien hasta hay donde dónde
quien quién quienes desde todo toda todos todas nos durante les contra otro otra otros otras ante ellos
ellas antes algunos algunas algo qué tanto tanta mucho mucha muchos muchas nada poco poca cual cuál
cuales ella nosotros nosotras vosotros ustedes usted mis tus mío mía tuyo suyo nuestro nuestra nuestros
nuestras estoy estás está estamos están esté estén estaba estaban estuvo estado estar haber había habían
han has hemos hubo ser era eran eres fue fueron sea sean siendo sido soy son somos tener tengo tiene
tienen tenemos tenía tuvo hacer hace hacen hago hecho hizo puede pueden puedo podemos poder podría
quiero quiere queremos vamos van voy vas creo cosa cosas aquí aqui ahí allí así asi bien bueno buena
vale pues entonces porque aunque mientras además ahora luego después despues todavía aún solo sólo
siempre nunca cada mismo misma tan tal vez casi también tampoco según sino ya sí ser dos tres debe
deben parte tiempo dice dijo ver veo
`;

const PORTUGUESE = `
que não nao uma umas uns com para por mais mas como dos das foi ele ela eles elas seu sua seus suas são
sao tem têm nos nas num numa pelo pela pelos pelas isso isto esse essa esses essas este esta estes estas
aquele aquela aquilo ser está esta estão estou estava estavam estamos era eram ter tenho tinha temos
tive teve fazer faz fazem feito fiz pode podem posso podemos vai vou vamos vão muito muita muitos muitas
pouco pouca também tambem já ainda só quando onde quem qual quais porque pois então entao assim aqui ali
lá agora depois antes sempre nunca cada todo toda todos todas tudo nada algo alguém ninguém outro outra
outros outras mesmo mesma entre sobre sem até desde contra durante você voce vocês nós meu minha meus
minhas teu tua nosso nossa nossos nossas dele dela deles delas lhe lhes aos seja sejam sendo sido tão
bem bom boa acho coisa coisas pra pro sim dois duas três ver vez vezes hoje ontem amanhã gente tipo
`;

const FRENCH = `
les des est une que qui dans pour pas sur plus par avec tout fait son mais comme ont aux elle nous vous
ils elles leur leurs ces cette cet ceux celle celui cela ceci mon ton ses mes tes nos vos notre votre
être été étais était étaient suis sommes êtes sont sera seront serait avoir avais avait avaient avons
avez aie ait eue faire fais faites font peut peux peuvent pouvons pouvez veux veut voulons vais vas
allons allez vont aller très tres bien bon bonne aussi alors donc car parce puis ensuite encore déjà
deja toujours jamais ici où quand quoi quel quelle quels quelles comment pourquoi dont sans sous entre
vers chez depuis pendant avant après apres contre tous toutes toute rien quelque quelques chose choses
autre autres même meme mêmes peu beaucoup trop moins oui non juste lui moi toi soi eux dit dire voir
faut doit dois devons ainsi cependant lors lorsque puisque afin aujourd'hui est-ce qu'est c'est j'ai
deux trois fois cas ça
`;

const GERMAN = `
der die das und ist nicht ich sie mit ein eine einen einem einer eines auf für von dem den des sich auch
als wie aus bei nach noch nur oder aber wenn dann dass daß was wir ihr ihn ihm ihre ihren ihrem ihrer
uns euch mich dich mir dir mein meine meinen dein deine sein seine seinen unser unsere kann kannst
können könnte könnten muss musst müssen musste soll sollen sollte will wollen wollte werden wird wurde
wurden worden würde würden hat habe haben hatte hatten hast bin bist sind seid war waren wäre gewesen
sehr schon mal jetzt hier dort heute immer nie mehr viel viele wenig alle alles etwas nichts jemand man
doch denn weil also zum zur vom beim ins über unter vor zwischen durch gegen ohne bis seit während
dieser diese dieses diesen diesem jener welche welcher welches wer warum wann nein gibt geht gehen
machen macht gemacht kommt kommen sagen sagt gesagt ganz gerade einfach eigentlich vielleicht dazu dabei
damit daran darauf davon dafür deshalb trotzdem sowie sowohl weder beide jeder jede jedes kein keine
keinen keinem zwei drei wieder dich euer habt lass uhr
`;

const DUTCH = `
het een van dat die niet zijn aan met als voor had maar hem dan zou wat mijn men dit door over zich bij
ook tot mij uit der daar haar naar heb hoe heeft hebben deze want nog zal zij geen omdat iets worden
toch waren veel meer doen toen moet ben zonder kan hun dus alles onder eens hier wie werd altijd doch
wordt wezen kunnen ons zelf tegen reeds wil kon niets iemand geweest andere wel was jij jullie hebt bent
gaan gaat ging komt komen maken maakt gemaakt goed even weer waar wanneer waarom welke tussen tijdens
sinds terwijl echter misschien gewoon eigenlijk heel erg nee twee drie mag moeten zullen zou zouden
kunt zit staat net dit
`;

const ITALIAN = `
che non per una uno con sono come più piu del della dei delle degli dal dalla dai nel nella nei nelle
sul sulla alla alle agli allo gli anche lui lei noi voi loro mio mia miei mie tuo tua suo sua suoi sue
nostro nostra vostro questo questa questi queste quello quella quelli quelle essere era erano sei siamo
siete stato stata stati sia siano avere abbiamo avete hanno aveva avevano avuto fare faccio fai
facciamo fanno fatto può puo possono posso possiamo potete vuole voglio vogliamo vado vai andiamo vanno
andare molto molta molti molte poco tutto tutta tutti tutte niente nulla qualcosa qualcuno nessuno
altro altra altri altre stesso stessa ancora già gia sempre mai ora adesso poi dopo prima qui qua
quando dove chi cosa cose quale quali perché perchè perche quindi allora così cosi però pero oppure
mentre senza sotto sopra tra fra verso fino durante contro bene buon buono buona ecco solo proprio
forse cioè infatti comunque dell nell sull all dall quell bell sto sta stai stiamo stanno devo deve
dobbiamo devono c'è due tre volta
`;

function words(list: string): string[] {
  return list.split(/\s+/).filter((w) => w.length >= 3);
}

/** Lowercase stopwords across English, Spanish, Portuguese, French, German, Dutch and Italian. */
export const STOPWORDS: ReadonlySet<string> = new Set([
  ...words(ENGLISH),
  ...words(SPANISH),
  ...words(PORTUGUESE),
  ...words(FRENCH),
  ...words(GERMAN),
  ...words(DUTCH),
  ...words(ITALIAN),
]);
