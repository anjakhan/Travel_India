const pois = [{ort: 'Hyderabad',
foto: 'paigah.jpg',
alt: 'paigah',
link: 'https://www.tripadvisor.de/Attraction_Review-g297586-d3705691-Reviews-Paigah_Tombs-Hyderabad_Hyderabad_District_Telangana.html',
place: 'Paigah Tombs',
text: 'Paigah Gräber oder Maqhbara Shams al - Umara sind eines der berühmtesten Denkmäler der Stadt Hyderabad. Sie sind bekannt für ihre ausgezeichnete architektonische Schönheit.'},
{ort: 'Hyderabad',
foto: 'marychurch.jpg',
alt: 'marychurch',
link: 'http://www.telanganatourism.gov.in/partials/destinations/divine-destinations/hyderabad/st-marys-church.html',
place: 'St. Marys Church',
text: 'Die St. Mary\'s Church in Secunderabad ist die älteste römisch-katholische Kirche in der Stadt. Diese faszinierende Kirche wurde im Indo-gotischen Stil erbaut und 1850 geweiht. Die St. Mary\'s Church, die der verehrten Jungfrau Maria geweiht ist, ist ein großartiges Wahrzeichen der Stadt. Sie ist für ihre architektonische Exzellenz und unglaubliche Geschichte gelobt.'},
{ort: 'Hyderabad',
foto: 'qutab.jpg',
alt: 'qutab',
link: 'https://www.tripadvisor.de/Attraction_Review-g297586-d3705854-Reviews-Qutab_Shahi_Tombs-Hyderabad_Hyderabad_District_Telangana.html',
place: 'Qutb Shahi Tombs',
text: 'Die ursprünglich stark verwahrlosten Gräber der Qutab-Shah-Könige wurden später von einem Minister der Nizams (Salar Jang I.) in mühevoller Arbeit restauriert. Heute sind alle Qutab-Shah-Könige in der etwa 1,5km nördlich der Golconda-Festung gelegenen Anlage begraben (außer Abdul Hassan Tana Shah), sowie einige andere Mitglieder der Königsfamilie.'},
{ort: 'Hyderabad',
foto: 'golconda.jpg',
alt: 'golconda',
link: 'https://www.tripadvisor.de/AttractionProductDetail-g297586-d12470262-Golconda_Fort_Sound_and_Light_Show_from_Hyderabad_with_Private_Transport-Hyderabad_Hyderabad_District_Telangana.html?from_tpa=true',
place: 'Golconda Fort',
text: 'Das schon im 13. Jahrhundert - jedoch nicht in seiner heutigen Form - erwähnte Fort ist eine der größten Festungen, die Indien zu bieten hat. Die meisten der heute noch zu bewundernden Anlagenbereiche stammen jedoch aus dem 16.-17. Jahrhundert, also aus der Zeit des Qutab-Shah Imperiums. Golconda ist nicht nur von einem Graben, sondern von einem Ring aus drei Mauern umgeben. Dabei gibt es auf einer Länge von etwa 11 km rund um das Fort acht Tore und knapp über 85 Bastionen. Das höchste Gebäude der Festung stellt die Zitadelle (Balahisar) mit etwa 110 Metern Höhe dar. Eine Sound- & -Light Show findet jeweils am Mittwoch und am Sonntag statt.'},
{ort: 'Hyderabad',
foto: 'charminar.jpg',
alt: 'charminar',
link: 'https://www.tripadvisor.de/Attraction_Review-g297586-d320668-Reviews-Charminar-Hyderabad_Hyderabad_District_Telangana.html',
place: 'Charminar',
text: '1591 von Mohamed Quali Qutab Shah erbaut, steht der riesige Torbogen (53m hoch) inmitten der Altstadt Abids. Errichtet wurde der 4-türmige Bau nach Beendigung einer großen Seuche, wie es heißt. Er steht auf einem fast quadratischen Fundament und die Höhe der 4 Bögen reicht bereits 15 Meter. Im Inneren befindet sich eine Moschee. Oberhalb der Torbögen ziehen sich herrliche Arkadengänge um den gesamten Bau. Der Char Minar ist allabendlich ab 19 Uhr für 2 Stunden beleuchtet, was insbesondere für die Fotografen unter den Reisenden ein schönes Motiv bietet.'},
{ort: 'Hyderabad',
foto: 'mecca.jpg',
alt: 'mecca',
link: 'https://www.tripadvisor.de/Attraction_Review-g297586-d3705173-Reviews-Mecca_Masjid-Hyderabad_Hyderabad_District_Telangana.html',
place: 'Mecca Masjid',
text: 'Die wohl größte Moschee Indiens steht direkt gegenüber des Char Minar. Die unter Mohamed Quli Qutab Shah 1614 iniziierte Moschee soll bis zu 10.000 Menschen fassen können. Sie wurde schließlich zu Herrschaftszeiten von Aurangzeb im Jahre 1687 fertiggestellt, der jedoch die ursprünglichen Pläne aus Geldmangel verändern musste, was insbesondere die Minarette nicht so groß wie geplant ausfallen ließ. Die gesamte Erscheinung wurde der Moschee in Mecca versucht nachzuempfinden. Riesige Granitblöcke wurden dazu herangeschafft. Die Gräber der Nizam Herrscher (ab 1803) befinden sich links neben der Moschee.'},
{ort: 'Hyderabad',
foto: 'chowmahalla.jpg',
alt: 'chowmahalla',
link: 'https://www.tripadvisor.de/Attraction_Review-g297586-d1020670-Reviews-Chowmahalla_Palace-Hyderabad_Hyderabad_District_Telangana.html',
place: 'Chowmahalla Palace',
text: 'Chowmahalla Palace oder Chowmahallatuu, ist ein Palast der Nizams des Staates Hyderabad. Es war der Sitz der Asaf Jahi Dynastie und war die offizielle Residenz der Nizams von Hyderabad, während sie ihren Staat regierten.'},
{ort: 'Hyderabad',
foto: 'salarjung.jpg',
alt: 'salarjung',
link: 'https://www.tripadvisor.de/Attraction_Review-g297586-d320681-Reviews-Salar_Jung_Museum-Hyderabad_Hyderabad_District_Telangana.html',
place: 'Salarjung Museum',
text: 'Das Museum zeigt großflächig den Sammeleifer des Premierministers der Nizams namens Mir Yusuf Ali Khan. Die über 30.000 Ausstellungsstücke aus aller Welt umfassen Manuskripte, Gemälde, Figuren, Waffen, Zeichnungen, Schmuck, Bücher und einige Stücke von besonderem historischen Wert. Die Öffnungszeiten sind von 10-17 Uhr (außer Freitags).'},
{ort: 'Hyderabad',
foto: 'lumbini.jpg',
alt: 'lumbini',
link: 'https://www.tripadvisor.de/Attraction_Review-g297586-d1228084-Reviews-Lumbini_Park-Hyderabad_Hyderabad_District_Telangana.html',
place: 'Lumbini Park',
text: 'Lumbini Park ist ein kleiner öffentlicher, städtischer Park von 7,5 Hektar neben Hussain Sagar in Hyderabad, Indien. Indien, benannt nach Lumbini aus Nepal, ist Lord Buddha gewidmet.'},
{ort: 'Hyderabad',
foto: 'birla.jpg',
alt: 'birla',
link: 'https://www.tripadvisor.de/Attraction_Review-g297586-d1021934-Reviews-Birla_Mandir-Hyderabad_Hyderabad_District_Telangana.html',
place: 'Birla Mandir',
text: 'Dieser relativ neue hinduistische Tempel (in den 70er Jahren erbaut) ist dem Gott Venkateswara gewidmet. Er liegt hoch auf dem Hügel am südlichen Ende des Hussain Sagar Sees. Besonders schön ist er, weil sein weißer Marmor, der übrigens aus Rajastan kommen soll, noch bis weit zu sehen sein soll. Besonders empfehlenswert ist dieser Ort, um abends den Sonnenuntergang über Hyderabad zu beobachten. (Öffnungszeiten sind von 7-12 und von 15-21 Uhr)'},
{ort: 'Hyderabad',
foto: 'moulaali.jpg',
alt: 'moulaali',
link: 'https://www.tripadvisor.de/Attraction_Review-g297586-d3913330-Reviews-Moula_Ali_Dargaha-Hyderabad_Hyderabad_District_Telangana.html',
place: 'Moula Ali',
text: 'Moula Ali-Hügel ist ein monadnock oder kuppelförmiger Hügel, der in Moula Ali, Hyderabad, Indien gelegen ist. Es ist bekannt für die Moula Ali Dargah und einen heiligen Stein, die beide oben auf dem Hügel sind.'},
{ort: 'Hyderabad',
foto: 'ramoji.jpg',
alt: 'ramoji',
link: 'https://www.tripadvisor.de/Attraction_Review-g297586-d636879-Reviews-Ramoji_Film_City-Hyderabad_Hyderabad_District_Telangana.html',
place: 'Ramoji Film City',
text: 'Ramoji Film City (RFC) ist der weltgrößte Filmstudio-Komplex und liegt in Indien. Er öffnete 1996, umfasst insgesamt fünf Quadratkilometer und liegt etwa 25 Kilometer von Hyderabad entfernt. Eigentümer ist der Geschäftsmann Ramoji Rao mit seiner Ramoji Group.'},
{ort: 'Hyderabad',
foto: 'falaknuma.jpg',
alt: 'falaknuma',
link: 'https://www.tripadvisor.de/Attraction_Review-g297586-d320672-Reviews-Taj_Falaknuma_Palace-Hyderabad_Hyderabad_District_Telangana.html',
place: 'Falaknuma Palace',
text: 'Auf einer Höhe von gut 600 m über der Stadt Hyderabad liegt diese luxuriöse 5-Sterne-Unterkunft mit einer Mischung aus kolonialen und indischen Designs. Das Taj Falaknuma Palace liegt nur 5 km von dem schönen Denkmal Charminar und dem Chaumallah Palace entfernt.'},
{ort: 'Hyderabad',
foto: 'taramati.jpg',
alt: 'taramati',
link: 'https://www.tripadvisor.de/Restaurant_Review-g297586-d7960120-Reviews-Taramati_Baradari-Hyderabad_Hyderabad_District_Telangana.html',
place: 'Taramati Baradari',
text: 'Taramati Baradari ist ein historischer Sarai als Teil von Ibrahim Bagh, einem persischen Garten, der während der Herrschaft von Ibrahim Quli Qutub Shah, dem vierten Sultan von Golconda, erbaut wurde.'},
{ort: 'Hyderabad',
foto: 'durgam.jpg',
alt: 'durgam',
link: 'https://www.tripadvisor.de/Attraction_Review-g297586-d3187577-Reviews-Durgam_Cheruvu_Lake-Hyderabad_Hyderabad_District_Telangana.html',
place: 'Durgam Cheruvu',
text: 'Durgam Cheruvu auch bekannt als Raidurgam Cheruvu ist ein Süßwassersee in Rangareddy Bezirk, Telangana, Indien. Der See, der sich über 83 Hektar erstreckt, liegt in der Nähe der Stadt Hyderabad.'},
{ort: 'Hyderabad',
foto: 'miniature.jpg',
alt: 'miniature',
link: 'https://www.tripadvisor.de/Hotel_Review-g297586-d1150070-Reviews-Dhola_ri_Dhani-Hyderabad_Hyderabad_District_Telangana.html',
place: 'Dhola-Ri-Dhani Miniature Rajasthani Village',
text: 'Dhola-Ri-Dhani Miniature Rajasthani Village ist eine Miniaturwelt im Norden von Hyderabad. Es stellt ein typisch Rajasthanisches Dorf dar.'},
{ort: 'Hyderabad',
foto: 'jagannath.jpg',
alt: 'jagannath',
link: 'https://www.tripadvisor.de/Attraction_Review-g297586-d3598152-Reviews-Shri_Jagannath_Temple-Hyderabad_Hyderabad_District_Telangana.html',
place: 'Shri Jagannath Temple',
text: 'Der Jagannath-Tempel in Hyderabad, Indien ist ein moderner Tempel, der von der Odia-Gemeinschaft der Stadt von Hyderabad errichtet wurde, die dem hinduistischen Gott Jagannath eingeweiht wird.'},
{ort: 'Hyderabad',
foto: 'nizam.jpg',
alt: 'nizam',
link: 'https://www.tripadvisor.de/Attraction_Review-g297586-d2542488-Reviews-Purani_Haveli-Hyderabad_Hyderabad_District_Telangana.html',
place: 'Nizam Museum / Purani Haveli',
text: 'Purani Haveli ist ein herausragendes Beispiel für das Verschmelzen diverser Architekturstile in Indien. Die Palastanlage wurde ursprünglich im 16. Jahrhundert erbaut und dann 200 Jahre später restauriert und mit europäischen Elementen versehen. Der hufeisenförmige Komplex umfasst einen Palast, ein (Nizam) Museum und eine Schule. Zudem befinden sich hier der „längste Kleiderschrank der Welt“, Oldtimer und kostbare Antiquitäten.'},
{ort: 'Hyderabad',
foto: 'madventure.jpg',
alt: 'madventure',
link: 'https://highwayonlyway.com/2014/04/09/high-on-hyderabad-madventure-quad-biking-fun-off-the-road/',
place: 'Madventure - Mit Quad entlang der Mangobäume',
text: 'Madventure ist eigentlich eine Mango-Plantage, die in eine Abenteuersportarena umgewandelt wurde, die Umgebung ist ruhig und angenehm. Das Fahren auf den Einsitzer-Bikes ist der wahre Spaß, das Manövrieren des Fahrzeugs erfordert etwas Geschick, da die Strecke an manchen Stellen etwas hart wird! Für diejenigen, die nicht fahren können oder mit den Bikes umgehen, können Doppelsitzer nehmen zusammen mit einem anderen Fahrer. Eine Fahrt auf diesem Weg führt Sie weiter in den Obstgarten mit Mangobäumen auf beiden Seiten.'},
{ort: 'Warangal',
foto: 'thousandpillars.jpg',
alt: 'thousandpillars',
link: 'https://www.tripadvisor.de/Attraction_Review-g735768-d3161445-Reviews-Thousand_Pillar_Temple-Warangal_Warangal_Urban_District_Telangana.html',
place: 'Thousand Pillars Temple',
text: 'Der Thousand-Säulen-Tempel, der sich in Hanamkonda befindet, ist einer der wichtigsten Teile der Warangal City. Der Tempel wurde 1163 von dem großen Rudra Deva erbaut. Jeder Teil des Tempels zeigt den typischen Chalukya-Baustil. Der Thousand Pillar Tempel hat drei präsidierende Gottheiten, Lord Vishnu, Shiva und Surya Deva. Der Tempel steht als Statement der feinsten Künste der Kakatiyas.'},
{ort: 'Warangal',
foto: 'ramappa.jpg',
alt: 'ramappa',
link: 'https://www.tripadvisor.de/Attraction_Review-g735768-d3705184-Reviews-Ramappa_Temple-Warangal_Warangal_Urban_District_Telangana.html',
place: 'Ramappa Temple',
text: 'Der mittelalterliche Deccan Ramappa-Tempel aus dem Jahr 1213 wurde unter der Schirmherrschaft des Kakatiya-Herrschers Kakati Ganapathi Deva unter der Leitung seines Oberbefehlshabers Rudra Samani am Ort Ranakude in der Atukuru-Provinz errichtet. Der Ramappa Tempel ist das richtige Ziel für Menschen, die architektonische Brillanz bewundern und einen Panoramablick auf wahre landschaftliche Schönheit haben.'},
{ort: 'Warangal',
foto: 'warangalfort.jpg',
alt: 'warangalfort',
link: 'https://www.tripadvisor.de/Attraction_Review-g735768-d2668325-Reviews-Warangal_Fort-Warangal_Warangal_Urban_District_Telangana.html',
place: 'Warangal Fort',
text: 'Das Warangal Fort, die Hauptattraktion der Stadt Warangal, erstreckt sich über einen Radius von 19 Kilometern zwischen Warangal und Hanamkonda. Das Fort wurde im 13. Jahrhundert unter der Herrschaft des Kakateya-Königs Ganapati Deva erbaut. Das Warangal Fort ist berühmt für seine anmutigen und endlich geschnitzten Bögen und Säulen. Diese Festung hat vier große Steintore.'},
{ort: 'Warangal',
foto: 'bogatha.jpg',
alt: 'bogatha',
link: 'http://www.telanganatourism.gov.in/partials/destinations/nature-discovery/khammam/bogatha-waterfall.html',
place: 'Bogatha Waterfall',
text: 'Der Bogatha-Wasserfall bietet ein herrliches Schauspiel von fallendem Wasser und einer reichen Landschaft und wird daher treffend als Niagara von Telangana bezeichnet. Da eine befahrbare Straße nicht zur Verfügung steht, müssen die Besucher einige Strecken zurücklegen.'},
{ort: 'Warangal',
foto: 'pakhallake.jpg',
alt: 'pakhallake',
link: 'https://www.tripadvisor.de/Attraction_Review-g735768-d3705300-Reviews-Pakhal_Lake-Warangal_Warangal_Urban_District_Telangana.html',
place: 'Pakhal Lake - Wildtier- und Safaripark',
text: 'This is one of the most popular picnic spots in Warangal. Pakhal Lake, gives you a calming and soothing trip amidst undulating forest hills and dales. The lake was constructed in the 1213 AD by the Kakatiya king Ganapathi Dev.'},
{ort: 'Warangal',
foto: 'laknavaram.jpg',
alt: 'laknavaram',
link: 'https://www.tripadvisor.de/Attraction_Review-g735768-d9811257-Reviews-Laknavaram_Cheruvu-Warangal_Warangal_Urban_District_Telangana.html',
place: 'Laknavaram Lake',
text: 'Der Lakhnavaram See, in Govindaraopet Mandal etwa 70 Kilometer von Warangal entfernt, ist ein beliebter Picknickplatz. Der See ist eine außergewöhnliche Schönheit. Der See wurde durch die Schließung von drei engen Tälern gebildet. Jedes Tal wird durch einen kurzen Wall ersetzt und Hügel dienen als natürliche Barriere. Der See wurde von den Herrschern der Kakatiya-Dynastie im 13. Jahrhundert erbaut.'},
{ort: 'Aihole', 
foto: 'durga.jpg', 
alt: 'durga', 
link: '', 
place: 'Durga temple', 
text: ''},
{ort: 'Aihole', 
foto: 'LadKhan.JPG', 
alt: 'LadKhan', 
link: '', 
place: 'Lad Khan Temple', 
text: ''},
{ort: 'Aihole', 
foto: 'Meguti.jpg', 
alt: 'Meguti', 
link: '', 
place: 'Meguti Jain Temple', 
text: ''},
{ort: 'Aihole', 
foto: 'RavanaPhadi.jpg', 
alt: 'RavanaPhadi', 
link: '', 
place: 'Ravana Phadi Cave Temples', 
text: ''},
{ort: 'Aihole', 
foto: 'BadamiFort.jpg', 
alt: 'BadamiFort', 
link: '', 
place: 'Badami Fort', 
text: ''},
{ort: 'Aihole', 
foto: 'BadamiCave.jpg', 
alt: 'BadamiCave', 
link: '', 
place: 'Badami Cave', 
text: ''},
{ort: 'Aihole', 
foto: 'Bhootnath.jpg', 
alt: 'Bhootnath', 
link: '', 
place: 'Bhootnath Temple', 
text: ''},
{ort: 'Hampi', 
foto: 'Virupaksha.jpg', 
alt: 'Virupaksha', 
link: '', 
place: 'Virupaksha Temple, Hampi', 
text: ''},
{ort: 'Hampi', 
foto: 'Matanga.jpg', 
alt: 'Matanga', 
link: '', 
place: 'Matanga Hill', 
text: ''},
{ort: 'Hampi', 
foto: 'VijayaVittala.jpg', 
alt: 'VijayaVittala', 
link: '', 
place: 'Vijaya Vittala Temple', 
text: ''},
{ort: 'Hampi', 
foto: 'Achyutaraya.jpg', 
alt: 'Achyutaraya', 
link: '', 
place: 'Achyutaraya Temple', 
text: ''},
{ort: 'Hampi', 
foto: 'LotusMahal.jpg', 
alt: 'LotusMahal', 
link: '', 
place: 'Lotus Mahal Hampi', 
text: ''},
{ort: 'Hampi', 
foto: 'Hemakuta.jpg', 
alt: 'Hemakuta', 
link: '', 
place: 'Hemakuta Hill Temple', 
text: ''},
{ort: 'Hampi', 
foto: 'HazaraRama.jpg', 
alt: 'HazaraRama', 
link: '', 
place: 'Hazara Rama Temple', 
text: ''},
{ort: 'Hampi', 
foto: 'Stone.jpg', 
alt: 'Stone', 
link: '', 
place: 'Stone chariot', 
text: ''},
{ort: 'Hampi', 
foto: 'KingsBalance.jpg', 
alt: 'KingsBalance', 
link: '', 
place: 'Kings Balance', 
text: ''},
{ort: 'Hampi', 
foto: 'ElephantStable.jpg', 
alt: 'ElephantStable', 
link: '', 
place: 'Elephant Stable', 
text: ''},
{ort: 'Bengaluru', 
foto: 'BengaluruPalast.jpg', 
alt: 'BengaluruPalast', 
link: '', 
place: 'Bengaluru Palast', 
text: ''},
{ort: 'Bengaluru', 
foto: 'VidhanaSoudha.jpg', 
alt: 'VidhanaSoudha', 
link: '', 
place: 'Vidhana Soudha', 
text: ''},
{ort: 'Bengaluru', 
foto: 'SummerPalace.jpg', 
alt: 'SummerPalace', 
link: '', 
place: 'Tipu Sultan\'s Summer Palace', 
text: ''},
{ort: 'Bengaluru', 
foto: 'ISKCON.jpg', 
alt: 'ISKCON', 
link: '', 
place: 'ISKCON Temple Bangalore', 
text: ''},
{ort: 'Bengaluru', 
foto: 'BangaloreFort.jpg', 
alt: 'BangaloreFort', 
link: '', 
place: 'Bangalore Fort', 
text: ''},
{ort: 'Bengaluru', 
foto: 'GovMuseum.jpg', 
alt: 'GovMuseum', 
link: '', 
place: 'Government Museum, Bangalore', 
text: ''},
{ort: 'Bengaluru', 
foto: 'ShivTemple.jpg', 
alt: 'ShivTemple', 
link: '', 
place: 'The RVM Foundation Shiv Temple', 
text: ''},
{ort: 'Bengaluru', 
foto: 'MarysBasilica.jpg', 
alt: 'MarysBasilica', 
link: '', 
place: 'St. Mary\'s Basilica, Bangalore', 
text: ''},
{ort: 'Bengaluru', 
foto: 'MusicalFountain.jpg', 
alt: 'MusicalFountain', 
link: '', 
place: 'Indira Gandhi Musical Fountain Park', 
text: ''},
{ort: 'Bengaluru', 
foto: 'Devanahalli.jpg', 
alt: 'Devanahalli', 
link: '', 
place: 'Devanahalli Fort', 
text: ''},
{ort: 'Bengaluru', 
foto: 'Thottikallu.jpg', 
alt: 'Thottikallu', 
link: '', 
place: 'Thottikallu', 
text: ''},
{ort: 'Bengaluru', 
foto: 'Parameshwari.jpg', 
alt: 'Parameshwari', 
link: '', 
place: 'Sri Durga Parameshwari', 
text: ''},
{ort: 'Bengaluru', 
foto: 'AttaraKacheri.jpg', 
alt: 'AttaraKacheri', 
link: '', 
place: 'Attara Kacheri (Oberster Gerichtshof)', 
text: ''},
{ort: 'Bengaluru', 
foto: 'Visveswaraya.jpg', 
alt: 'Visveswaraya', 
link: '', 
place: 'Visveswaraya Industrial & Technological Museum', 
text: ''},
{ort: 'Bengaluru', 
foto: 'Aerospace.jpg', 
alt: 'Aerospace', 
link: '', 
place: 'HAL Heritage Centre and Aerospace Museum ', 
text: ''},
{ort: 'Mysuru', 
foto: 'MysuruPalast.jpg', 
alt: 'MysuruPalast', 
link: '', 
place: 'Mysuru Palast', 
text: 'Sie fahren nach Mysuru (Mysore), der Sandalholzstadt und ehemaliger Sitz der Maharadschas. Höhepunkt des Besuchs von Mysuru ist der grandiose Mysuru Palast. Der Reichtum, welchen dieses Gebäude ausstrahlt, ist immens und dem Besucher bleibt nur das Staunen über solch unermessliche Besitztümer.'},
{ort: 'Mysuru', 
foto: 'JamiaMasjid.jpg', 
alt: 'JamiaMasjid', 
link: '', 
place: 'Jamia Masjid', 
text: ''},
{ort: 'Mysuru', 
foto: 'Ranganathaswamy.jpg', 
alt: 'Ranganathaswamy', 
link: '', 
place: 'Ranganathaswamy Temple', 
text: ''},
{ort: 'Mysuru', 
foto: 'Chamundeshwari.jpg', 
alt: 'Chamundeshwari', 
link: '', 
place: 'Chamundeshwari Temple', 
text: ''},
{ort: 'Mysuru', 
foto: 'Jaganmohan.jpg', 
alt: 'Jaganmohan', 
link: '', 
place: 'Jaganmohan Palace', 
text: ''},
{ort: 'Mysuru', 
foto: 'Philomena.jpg', 
alt: 'Philomena', 
link: '', 
place: 'St. Philomena\'s Cathedral, Mysore', 
text: ''},
{ort: 'Mysuru', 
foto: 'KrishnaRaja.jpg', 
alt: 'KrishnaRaja', 
link: '', 
place: 'Krishna Raja Sagara', 
text: ''},
{ort: 'Mysuru', 
foto: 'BalmuriFalls.jpg', 
alt: 'BalmuriFalls', 
link: '', 
place: 'Balmuri Falls', 
text: ''},
{ort: 'Mysuru', 
foto: 'Wellesley.jpg', 
alt: 'Wellesley', 
link: '', 
place: 'Wellesley Bridge', 
text: ''},
{ort: 'Mysuru', 
foto: 'TipuSultan.jpg', 
alt: 'TipuSultan', 
link: '', 
place: 'Tipu Sultan Fort', 
text: ''},
{ort: 'Ooty', 
foto: 'GovBotanical.jpg', 
alt: 'GovBotanical', 
link: '', 
place: 'Government Botanical Gardens', 
text: ''},
{ort: 'Ooty', 
foto: 'GovRose.jpg', 
alt: 'GovRose', 
link: '', 
place: 'Government Rose Garden', 
text: ''},
{ort: 'Ooty', 
foto: 'StephensChurch.jpg', 
alt: 'StephensChurch', 
link: '', 
place: 'St. Stephen\'s Church', 
text: ''},
{ort: 'Ooty', 
foto: 'Doddabetta.jpg', 
alt: 'Doddabetta', 
link: '', 
place: 'Doddabetta', 
text: ''},
{ort: 'Ooty', 
foto: 'StoneHouse.jpg', 
alt: 'StoneHouse', 
link: '', 
place: 'Stone House', 
text: ''},
{ort: 'Ooty', 
foto: 'TodaTemple.jpg', 
alt: 'TodaTemple', 
link: '', 
place: 'Toda Temple', 
text: ''},
{ort: 'Ooty', 
foto: 'Adamsfountain.jpg', 
alt: 'Adamsfountain', 
link: '', 
place: 'Adam\'s fountain', 
text: ''},
{ort: 'Ooty', 
foto: 'TigerHill.jpg', 
alt: 'TigerHill', 
link: '', 
place: 'Tiger Hill', 
text: ''},
{ort: 'Ooty', 
foto: 'PykaraWaterFalls.jpg', 
alt: 'PykaraWaterFalls', 
link: '', 
place: 'Pykara WaterFalls', 
text: ''},
{ort: 'Ooty', 
foto: 'AvalancheLake.jpg', 
alt: 'AvalancheLake', 
link: '', 
place: 'Avalanche Lake', 
text: ''},
{ort: 'Ooty', 
foto: 'PykaraLake.jpg', 
alt: 'PykaraLake', 
link: '', 
place: 'Pykara Lake', 
text: ''},
{ort: 'Ooty', 
foto: 'Mukurthi.jpg', 
alt: 'Mukurthi', 
link: '', 
place: 'Mukurthi National Park', 
text: ''},
{ort: 'Ooty', 
foto: 'EmeraldLake.jpg', 
alt: 'EmeraldLake', 
link: '', 
place: 'Emerald Lake', 
text: ''}
]


pois.forEach(function (poi){
    document.getElementById('row').insertAdjacentHTML("beforeend", `
    <div class="column ${poi.ort}" style="min-height:350px">										
<div class="content">										
<img src="${poi.foto}" alt="${poi.alt}" style="width:100%; height:300px;object-fit:cover">										
<div class="w3-container w3-white">										
<p><b><a href="${poi.link}" target="_blank">${poi.place}</a></b></p>										
</div>										
</div>										
</div>`)
})


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
