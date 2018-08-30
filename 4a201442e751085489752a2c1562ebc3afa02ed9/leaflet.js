var map = L.map('map').setView([22.40, 78.469], 5); // ([17.40, 78.469], 11) for Hyderabad view
  var layer = L.esri.basemapLayer('Topographic').addTo(map);
  var layerLabels;
  function setBasemap(basemap) {
    if (layer) {
      map.removeLayer(layer);
    }
    layer = L.esri.basemapLayer(basemap);
    map.addLayer(layer);
    if (layerLabels) {
      map.removeLayer(layerLabels);
    }
    if (basemap === 'ShadedRelief'
     || basemap === 'Oceans'
     || basemap === 'Gray'
     || basemap === 'DarkGray'
     || basemap === 'Terrain'
   ) {
      layerLabels = L.esri.basemapLayer(basemap + 'Labels');
      map.addLayer(layerLabels);
    } else if (basemap.includes('Imagery')) {
      layerLabels = L.esri.basemapLayer('ImageryLabels');
      map.addLayer(layerLabels);
    }
  }
  function changeBasemap(basemaps){
    var basemap = basemaps.value;
    setBasemap(basemap);
  }
var HydPai1 = L.marker([17.34396047912, 78.50357136172]).bindPopup('<img src="paigah.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="https://www.tripadvisor.de/Attraction_Review-g297586-d3705691-Reviews-Paigah_Tombs-Hyderabad_Hyderabad_District_Telangana.html">Paigah Tombs</a> - Hyderabad'),
HydFor2 = L.marker([17.27576841032, 78.36757769372]).bindPopup('<img src="fortgrand.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="http://www.fortgrand.com/">Fort Grand (Castle)</a> - Hyderabad'),
HydQut3 = L.marker([17.3957181812, 78.39887738262]).bindPopup('<img src="qutab.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="https://www.tripadvisor.de/Attraction_Review-g297586-d3705854-Reviews-Qutab_Shahi_Tombs-Hyderabad_Hyderabad_District_Telangana.html">Qutb Shahi Tombs</a> - Hyderabad'),
HydGol4 = L.marker([17.38369307252, 78.40045133432]).bindPopup('<img src="golconda.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="https://www.tripadvisor.de/AttractionProductDetail-g297586-d12470262-Golconda_Fort_Sound_and_Light_Show_from_Hyderabad_with_Private_Transport-Hyderabad_Hyderabad_District_Telangana.html?from_tpa=true">Golconda Fort</a> - Hyderabad'),
HydCha5 = L.marker([17.36160590232, 78.47470489172]).bindPopup('<img src="charminar.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="https://www.tripadvisor.de/Attraction_Review-g297586-d320668-Reviews-Charminar-Hyderabad_Hyderabad_District_Telangana.html">Charminar</a> - Hyderabad'),
HydMec6 = L.marker([17.36045424322, 78.47341522382]).bindPopup('<img src="mecca.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="https://www.tripadvisor.de/Attraction_Review-g297586-d3705173-Reviews-Mecca_Masjid-Hyderabad_Hyderabad_District_Telangana.html">Mecca Masjid</a> - Hyderabad'),
HydCho7 = L.marker([17.35775593442, 78.47168773512]).bindPopup('<img src="chowmahalla.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="https://www.tripadvisor.de/Attraction_Review-g297586-d1020670-Reviews-Chowmahalla_Palace-Hyderabad_Hyderabad_District_Telangana.html">Chowmahalla Palace</a> - Hyderabad'),
HydSal8 = L.marker([17.37135564262, 78.48039074692]).bindPopup('<img src="salarjung.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="https://www.tripadvisor.de/Attraction_Review-g297586-d320681-Reviews-Salar_Jung_Museum-Hyderabad_Hyderabad_District_Telangana.html">Salarjung Museum</a> - Hyderabad'),
HydLum9 = L.marker([17.40921691922, 78.47260547272]).bindPopup('<img src="lumbini.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="https://www.tripadvisor.de/Attraction_Review-g297586-d1228084-Reviews-Lumbini_Park-Hyderabad_Hyderabad_District_Telangana.html">Lumbini Park</a> - Hyderabad'),
HydBir10 = L.marker([17.40615515952, 78.46903301822]).bindPopup('<img src="birla.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="https://www.tripadvisor.de/Attraction_Review-g297586-d1021934-Reviews-Birla_Mandir-Hyderabad_Hyderabad_District_Telangana.html">Birla Mandir</a> - Hyderabad'),
HydMou11 = L.marker([17.46697876622, 78.55712001312]).bindPopup('<img src="moulaali.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="https://www.tripadvisor.de/Attraction_Review-g297586-d3913330-Reviews-Moula_Ali_Dargaha-Hyderabad_Hyderabad_District_Telangana.html">Moula Ali</a> - Hyderabad'),
HydRam12 = L.marker([17.30952704482, 78.68223938642]).bindPopup('<img src="ramoji.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="https://www.tripadvisor.de/Attraction_Review-g297586-d636879-Reviews-Ramoji_Film_City-Hyderabad_Hyderabad_District_Telangana.html">Ramoji Film City</a> - Hyderabad'),
HydFal13 = L.marker([17.33092487182, 78.46729751422]).bindPopup('<img src="falaknuma.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="https://www.tripadvisor.de/Attraction_Review-g297586-d320672-Reviews-Taj_Falaknuma_Palace-Hyderabad_Hyderabad_District_Telangana.html">Falaknuma Palace</a> - Hyderabad'),
HydTar14 = L.marker([17.37603216092, 78.37823740432]).bindPopup('<img src="taramati.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="https://www.tripadvisor.de/Restaurant_Review-g297586-d7960120-Reviews-Taramati_Baradari-Hyderabad_Hyderabad_District_Telangana.html">Taramati Baradari</a> - Hyderabad'),
HydDur15 = L.marker([17.43021357652, 78.38950622032]).bindPopup('<img src="durgam.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="https://www.tripadvisor.de/Attraction_Review-g297586-d3187577-Reviews-Durgam_Cheruvu_Lake-Hyderabad_Hyderabad_District_Telangana.html">Durgam Cheruvu</a> - Hyderabad'),
HydDho16 = L.marker([17.54506855352, 78.49376780192]).bindPopup('<img src="miniature.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="https://www.tripadvisor.de/Hotel_Review-g297586-d1150070-Reviews-Dhola_ri_Dhani-Hyderabad_Hyderabad_District_Telangana.html">Dhola-Ri-Dhani Miniature Rajasthani Village</a> - Hyderabad'),
HydShr17 = L.marker([17.41520706162, 78.42608110582]).bindPopup('<img src="jagannath.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="https://www.tripadvisor.de/Attraction_Review-g297586-d3598152-Reviews-Shri_Jagannath_Temple-Hyderabad_Hyderabad_District_Telangana.html">Shri Jagannath Temple</a> - Hyderabad'),
HydNiz18 = L.marker([17.36527908862, 78.48204305872]).bindPopup('<img src="nizam.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="https://www.tripadvisor.de/Attraction_Review-g297586-d3317525-Reviews-Nizam_Museum-Hyderabad_Hyderabad_District_Telangana.html">Nizam Museum</a> / <a href="https://www.tripadvisor.de/Attraction_Review-g297586-d2542488-Reviews-Purani_Haveli-Hyderabad_Hyderabad_District_Telangana.html">Purani Haveli</a> - Hyderabad'),
HydMad19 = L.marker([17.327866, 78.246604]).bindPopup('<img src="madventure.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="https://highwayonlyway.com/2014/04/09/high-on-hyderabad-madventure-quad-biking-fun-off-the-road/">Madventure</a> - Hyderabad'),
HydStm36 = L.marker([17.442276, 78.502162]).bindPopup('<img src="marychurch.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="http://www.telanganatourism.gov.in/partials/destinations/divine-destinations/hyderabad/st-marys-church.html">St. Marys Church</a> - Hyderabad'),
WarTho30 = L.marker([18.003703, 79.574723]).bindPopup('<img src="thousandpillars.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="https://www.tripadvisor.de/Attraction_Review-g735768-d3161445-Reviews-Thousand_Pillar_Temple-Warangal_Warangal_Urban_District_Telangana.html">Thousand Pillars Temple</a> - Warangal'),
WarRam31 = L.marker([18.259174, 79.943307]).bindPopup('<img src="ramappa.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="https://www.tripadvisor.de/Attraction_Review-g735768-d3705184-Reviews-Ramappa_Temple-Warangal_Warangal_Urban_District_Telangana.html">Ramappa Temple</a> - Warangal'),
WarWar32 = L.marker([17.956397, 79.615402]).bindPopup('<img src="warangalfort.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="https://www.tripadvisor.de/Attraction_Review-g735768-d2668325-Reviews-Warangal_Fort-Warangal_Warangal_Urban_District_Telangana.html">Warangal Fort</a> - Warangal'),
WarBog33 = L.marker([18.476329, 80.500375]).bindPopup('<img src="bogatha.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="http://www.telanganatourism.gov.in/partials/destinations/nature-discovery/khammam/bogatha-waterfall.html">Bogatha Waterfall</a> - Warangal'),
WarPak34 = L.marker([17.953452, 80.001513]).bindPopup('<img src="pakhallake.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="https://www.tripadvisor.de/Attraction_Review-g735768-d3705300-Reviews-Pakhal_Lake-Warangal_Warangal_Urban_District_Telangana.html">Pakhal Lake - Wildtier- und Safaripark</a> - Warangal'),
WarLak35 = L.marker([18.148835, 80.063524]).bindPopup('<img src="laknavaram.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="https://www.tripadvisor.de/Attraction_Review-g735768-d9811257-Reviews-Laknavaram_Cheruvu-Warangal_Warangal_Urban_District_Telangana.html">Laknavaram Lake</a> - Warangal')
AihDur55 = L.marker([16.020684, 75.881957 ]).bindPopup('<img src="durga.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Durga temple</a> - Aihole'),
AihLad56 = L.marker([16.019916, 75.881227 ]).bindPopup('<img src="LadKhan.JPG" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Lad Khan Temple</a> - Aihole'),
AihMeg57 = L.marker([16.017413, 75.88407 ]).bindPopup('<img src="Meguti.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Meguti Jain Temple</a> - Aihole'),
AihRav58 = L.marker([16.022561, 75.884339 ]).bindPopup('<img src="RavanaPhadi.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Ravana Phadi Cave Temples</a> - Aihole'),
AihBad59 = L.marker([15.922994, 75.682344 ]).bindPopup('<img src="BadamiFort.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Badami Fort</a> - Aihole'),
AihBad60 = L.marker([15.916556, 75.691045 ]).bindPopup('<img src="BadamiCave.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Badami Cave</a> - Aihole'),
AihBho61 = L.marker([15.920871, 75.687631 ]).bindPopup('<img src="Bhootnath.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Bhootnath Temple</a> - Aihole'),
HamVir62 = L.marker([15.335127, 76.458961 ]).bindPopup('<img src="Virupaksha.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Virupaksha Temple, Hampi</a> - Hampi'),
HamMat63 = L.marker([15.331542, 76.468114 ]).bindPopup('<img src="Matanga.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Matanga Hill</a> - Hampi'),
HamVij64 = L.marker([15.342297, 76.475276 ]).bindPopup('<img src="VijayaVittala.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Vijaya Vittala Temple</a> - Hampi'),
HamAch65 = L.marker([15.331884, 76.470066 ]).bindPopup('<img src="Achyutaraya.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Achyutaraya Temple</a> - Hampi'),
HamLot66 = L.marker([15.32025, 76.47129 ]).bindPopup('<img src="LotusMahal.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Lotus Mahal Hampi</a> - Hampi'),
HamHem67 = L.marker([15.332467, 76.459636 ]).bindPopup('<img src="Hemakuta.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Hemakuta Hill Temple</a> - Hampi'),
HamHaz68 = L.marker([15.317788, 76.468803 ]).bindPopup('<img src="HazaraRama.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Hazara Rama Temple</a> - Hampi'),
HamSto69 = L.marker([15.34224, 76.475765 ]).bindPopup('<img src="Stone.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Stone chariot</a> - Hampi'),
HamKin70 = L.marker([15.340987, 76.474157 ]).bindPopup('<img src="KingsBalance.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Kings Balance</a> - Hampi'),
HamEle71 = L.marker([15.32115, 76.472715 ]).bindPopup('<img src="ElephantStable.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Elephant Stable</a> - Hampi'),
ChiChi73 = L.marker([14.216029, 76.399044 ]).bindPopup('<img src="Chitradurga.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Chitradurga Fort</a> - Chitradurga'),
BenBen74 = L.marker([12.998713, 77.59209 ]).bindPopup('<img src="BengaluruPalast.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Bengaluru Palast</a> - Bengaluru'),
BenVid75 = L.marker([12.979576, 77.590398 ]).bindPopup('<img src="VidhanaSoudha.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Vidhana Soudha</a> - Bengaluru'),
BenTip76 = L.marker([12.959333, 77.573615 ]).bindPopup('<img src="SummerPalace.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Tipu Sultan\'s Summer Palace</a> - Bengaluru'),
BenISK77 = L.marker([13.009723, 77.551129 ]).bindPopup('<img src="ISKCON.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">ISKCON Temple Bangalore</a> - Bengaluru'),
BenBan78 = L.marker([12.962873, 77.575947 ]).bindPopup('<img src="BangaloreFort.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Bangalore Fort</a> - Bengaluru'),
BenGov79 = L.marker([12.974671, 77.595775 ]).bindPopup('<img src="GovMuseum.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Government Museum, Bangalore</a> - Bengaluru'),
BenThe80 = L.marker([12.958354, 77.656488 ]).bindPopup('<img src="ShivTemple.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">The RVM Foundation Shiv Temple</a> - Bengaluru'),
BenStM81 = L.marker([12.984398, 77.604307 ]).bindPopup('<img src="MarysBasilica.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">St. Mary\'s Basilica, Bangalore</a> - Bengaluru'),
BenInd82 = L.marker([12.985107, 77.591602 ]).bindPopup('<img src="MusicalFountain.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Indira Gandhi Musical Fountain Park</a> - Bengaluru'),
BenDev83 = L.marker([13.249828, 77.708251 ]).bindPopup('<img src="Devanahalli.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Devanahalli Fort</a> - Bengaluru'),
BenTho84 = L.marker([12.806185, 77.538638 ]).bindPopup('<img src="Thottikallu.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Thottikallu</a> - Bengaluru'),
BenSri85 = L.marker([13.043867, 74.869998 ]).bindPopup('<img src="Parameshwari.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Sri Durga Parameshwari</a> - Bengaluru'),
BenAtt86 = L.marker([12.977832, 77.592388 ]).bindPopup('<img src="AttaraKacheri.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Attara Kacheri</a> - Bengaluru'),
BenVis87 = L.marker([12.975216, 77.596216 ]).bindPopup('<img src="Visveswaraya.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Visveswaraya Industrial & Technological Museum</a> - Bengaluru'),
BenHAL88 = L.marker([12.955327, 77.683528 ]).bindPopup('<img src="Aerospace.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">HAL Heritage Centre and Aerospace Museum</a> - Bengaluru'),
MysMys89 = L.marker([12.305261, 76.654944 ]).bindPopup('<img src="MysuruPalast.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Mysuru Palast</a> - Mysuru'),
MysJam90 = L.marker([12.422634, 76.689248 ]).bindPopup('<img src="JamiaMasjid.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Jamia Masjid</a> - Mysuru'),
MysRan91 = L.marker([12.424943, 76.679238 ]).bindPopup('<img src="Ranganathaswamy.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Ranganathaswamy Temple</a> - Mysuru'),
MysCha92 = L.marker([12.272457, 76.670937 ]).bindPopup('<img src="Chamundeshwari.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Chamundeshwari Temple</a> - Mysuru'),
MysJag93 = L.marker([12.306801, 76.649882 ]).bindPopup('<img src="Jaganmohan.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Jaganmohan Palace</a> - Mysuru'),
MysStP94 = L.marker([12.321063, 76.658263 ]).bindPopup('<img src="Philomena.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">St. Philomena\'s Cathedral, Mysore</a> - Mysuru'),
MysKri95 = L.marker([12.425524, 76.57231 ]).bindPopup('<img src="KrishnaRaja.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Krishna Raja Sagara</a> - Mysuru'),
MysBal96 = L.marker([12.413678, 76.605297 ]).bindPopup('<img src="BalmuriFalls.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Balmuri Falls</a> - Mysuru'),
MysWel97 = L.marker([12.424869, 76.691732 ]).bindPopup('<img src="Wellesley.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Wellesley Bridge</a> - Mysuru'),
MysTip98 = L.marker([12.424533, 76.690915 ]).bindPopup('<img src="TipuSultan.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Tipu Sultan Fort</a> - Mysuru'),
OotGov99 = L.marker([11.418886, 76.711817 ]).bindPopup('<img src="GovBotanical.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Government Botanical Gardens</a> - Ooty'),
OotGov100 = L.marker([11.406053, 76.708921 ]).bindPopup('<img src="GovRose.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Government Rose Garden</a> - Ooty'),
OotStS101 = L.marker([11.414751, 76.702204 ]).bindPopup('<img src="StephensChurch.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">St. Stephen\'s Church</a> - Ooty'),
OotDod102 = L.marker([11.400736, 76.735811 ]).bindPopup('<img src="Doddabetta.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Doddabetta</a> - Ooty'),
OotSto103 = L.marker([11.412351, 76.715387 ]).bindPopup('<img src="StoneHouse.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Stone House</a> - Ooty'),
OotTod104 = L.marker([11.420077, 76.715642 ]).bindPopup('<img src="TodaTemple.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Toda Temple</a> - Ooty'),
OotAda105 = L.marker([11.412038, 76.708243 ]).bindPopup('<img src="Adamsfountain.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Adam\'s fountain</a> - Ooty'),
OotTig107 = L.marker([11.397518, 76.727432 ]).bindPopup('<img src="TigerHill.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Tiger Hill</a> - Ooty'),
OotPyk108 = L.marker([11.472068, 76.604646 ]).bindPopup('<img src="PykaraWaterFalls.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Pykara WaterFalls</a> - Ooty'),
OotAva109 = L.marker([11.316986, 76.598568 ]).bindPopup('<img src="AvalancheLake.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Avalanche Lake</a> - Ooty'),
OotPyk110 = L.marker([11.437497, 76.589717 ]).bindPopup('<img src="PykaraLake.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Pykara Lake</a> - Ooty'),
OotMuk111 = L.marker([11.155253, 76.4821 ]).bindPopup('<img src="Mukurthi.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Mukurthi National Park</a> - Ooty'),
OotEme112 = L.marker([11.333004, 76.618602 ]).bindPopup('<img src="EmeraldLake.jpg" style="width:200px;height:150px;object-fit:cover"><br><br><a href="">Emerald Lake</a> - Ooty')

var cities = L.layerGroup([HydPai1, HydFor2, HydQut3, HydGol4, HydCha5, HydMec6, HydCho7, HydSal8, HydLum9, HydBir10, HydMou11, HydRam12, HydFal13, HydTar14, HydDur15, HydDho16, HydShr17, HydNiz18, HydMad19, WarTho30, WarRam31, WarWar32, WarBog33, WarPak34, WarLak35, HydStm36, AihDur55, AihLad56, AihMeg57, AihRav58, AihBad59, AihBad60, AihBho61, HamVir62, HamMat63, HamVij64, HamAch65, HamLot66, HamHem67, HamHaz68, HamSto69, HamKin70, HamEle71, ChiChi73, BenBen74, BenVid75, BenTip76, BenISK77, BenBan78, BenGov79, BenThe80, BenStM81, BenInd82, BenDev83, BenTho84, BenSri85, BenAtt86, BenVis87, BenHAL88, MysMys89, MysJam90, MysRan91, MysCha92, MysJag93, MysStP94, MysKri95, MysBal96, MysWel97, MysTip98, OotGov99, OotGov100, OotStS101, OotDod102, OotSto103, OotTod104, OotAda105, OotTig107, OotPyk108, OotAva109, OotPyk110, OotMuk111, OotEme112]);
//var overlayMaps = {"Cities": cities};
cities.addTo(map);
