// Datos estáticos del servidor. Editar aquí en vez de en el HTML.

const SERVER = {
  name: 'Server Poxillo',
  address: '54.38.81.169:11400',
  map: 'Muldraugh, KY',
  version: 'Stable · build 24775771',
  maxPlayers: 10,
  discordUrl: 'https://discord.gg/xgFmnhnsZ4',
  publicPageUrl: 'https://supercraft.host/s/pz-jzmarquez-com/',
};

const ROSTER = [
  'Jezu', 'Chocapic9000', 'SERGIO', 'RafaZD', 'Sheratan', 'SeyXmo', 'alexu',
  'Claus', 'Du Lidl', 'D Lidl', 'diegogm18', 'SeyxmoXIII', 'Rainbowtrash',
  'CHatarras', 'Moiseh', 'Dea', 'Netsu',
];

// Comprobado a mano vía FTP + Steam Workshop API (no hay endpoint en vivo
// para el disco del hosting). Actualizar cuando cambien mucho los mods o
// crezca bastante la partida guardada.
const DISK = {
  usedGB: 12.6,
  maxGB: 40,
  checkedAt: '31 ago 2026',
};

// Ordenados alfabéticamente por nombre para mostrar.
const MODS = [
  { name: '1967 Chevrolet Impala', id: '3677217949', img: 'https://images.steamusercontent.com/ugc/16581962237040362441/EE453A0F3F03403D835B85A4FFCEE87869B8B8F4/', desc: 'Añade un Chevrolet Impala de 1967 totalmente animado y detallado.', sizeMB: 8.3, category: 'Vehiculos' },
  { name: '[B42] Spanish Guitar Addon', id: '3673794502', img: 'https://images.steamusercontent.com/ugc/12351221776839408857/4085FF8AC663132A7F67FE7927B7564DE3838D1B/', desc: '12 canciones españolas de los 70-90 para la guitarra acústica.', sizeMB: 58.4, category: 'Musica' },
  { name: 'Better Dressed - Transmog', id: '3599514194', img: 'https://images.steamusercontent.com/ugc/17889021963319364801/01B072DFEEE6485AAE21C91D711C03CB90CB455F/', desc: 'Cambia tu apariencia por cualquier ropa o armadura sin perder sus stats.', sizeMB: 23.4, category: 'Ropa' },
  { name: 'Bicycle!', id: '3461415167', img: 'https://images.steamusercontent.com/ugc/10530320329129649830/09F535B8AE64743615BD5047C3FEA811233814F3/', desc: 'Añade una bicicleta montable que aumenta la velocidad de movimiento.', sizeMB: 48.2, category: 'Vehiculos' },
  { name: 'CartoonTV', id: '2850170557', img: 'https://images.steamusercontent.com/ugc/12106396086107998400/FBC36EF77CBE0C00F98F3D8D5DF384028C0B013A/', desc: 'Sustituye la programación de TV por dibujos animados clásicos.', sizeMB: 61.8, category: 'Ocio' },
  { name: 'Clean HotBar', id: '3461263912', img: 'https://images.steamusercontent.com/ugc/10625835939624056538/69BCD2511D4567951B543FA8947C91F9A0E084FA/', desc: 'Mejora visualmente la barra de acceso rápido con info más clara.', sizeMB: 0.7, category: 'Interfaz' },
  { name: 'CleanUI', id: '3437629766', img: 'https://images.steamusercontent.com/ugc/9722033132850048245/53D3C1C2D04F0DBF1346DF60EF9984C1AC345797/', desc: 'Rediseña el inventario y el loot para que sean más compactos y legibles.', sizeMB: 10.6, category: 'Interfaz' },
  { name: 'CNP España Mod', id: '3645161115', img: 'https://images.steamusercontent.com/ugc/14253299375678648264/A68264C2746FA533C3FEBEA1CCE7FCDEA792A571/', desc: 'Añade uniformes del Cuerpo Nacional de Policía español.', sizeMB: 0.2, category: 'Ropa' },
  { name: 'DOOM', id: '3656968541', img: 'https://images.steamusercontent.com/ugc/13385098529328282756/3B901D8A909D766C8BCB0A50DDDEF7D295E7EFEB/', desc: 'Añade el disquete y la banda sonora de DOOM como objeto jugable.', sizeMB: 23.3, category: 'Ocio' },
  { name: 'Equipment UI', id: '3682936016', img: 'https://images.steamusercontent.com/ugc/9383995030445312327/85EE78D3411E447FBAD71BD3D2017629DB594221/', desc: 'Interfaz de equipo mejorada, continuación mantenida del mod original.', sizeMB: 0.6, category: 'Interfaz' },
  { name: 'Fichin Lifestyle Hobbies (traducción ES)', id: '3784413438', img: 'https://images.steamusercontent.com/ugc/12875197410068926437/BB9AA9335FB43A50F825EA63260404614884FC94/', desc: 'Traducción al español del mod Lifestyle: Hobbies.', sizeMB: 0.7, category: 'Ocio' },
  { name: 'Frockin Shirts & Ties!', id: '3453676250', img: 'https://images.steamusercontent.com/ugc/59216353662757534/29BCE858CD9D6EC84FDC36AE286D81CC4670A03F/', desc: '10 camisas muy personalizables con mangas, cuellos y colores ajustables.', sizeMB: 16.4, category: 'Ropa' },
  { name: 'Furgonetas de España / Vans of Spain', id: '2950529166', img: 'https://images.steamusercontent.com/ugc/9475166251639548760/F4A7FD3B6A5C9FCB5C141A342F003051D47E1D36/', desc: 'Añade furgonetas típicas españolas con megafonía por el mapa.', sizeMB: 25.6, category: 'Vehiculos' },
  { name: 'Has Been Read', id: '2544353492', img: 'https://images.steamusercontent.com/ugc/17549172646925789/53181618A273C24338C373CE6B4C1DF6F5408C8E/', desc: 'Marca libros y revistas como leídos, sin terminar o pendientes.', sizeMB: 1.3, category: 'Utilidad' },
  { name: 'Hot Brass - Visible Casing Ejection Framework', id: '3610677934', img: 'https://images.steamusercontent.com/ugc/15857189141864117715/47F2DCDC148BAD4465DE91CF06455D7C77D7EB21/', desc: 'Hace visibles los casquillos al disparar armas de fuego.', sizeMB: 8.1, category: 'Jugabilidad' },
  { name: 'Immersive Suicide', id: '3426448380', img: 'https://images.steamusercontent.com/ugc/46828112627107656/51C9FA98D5B904F3452F888B6A1A076FE3D5F431/', desc: 'Añade la opción de terminar tu partida de forma inmersiva tras una mordedura.', sizeMB: 0.3, category: 'Jugabilidad' },
  { name: 'KillCount', id: '2553809727', img: 'https://images.steamusercontent.com/ugc/47948305646416013/15D13A1C81305ECE5F4BB41B082ABCAE1B8B2AD5/', desc: 'Muestra tus bajas por tipo de arma en el panel del personaje.', sizeMB: 0.3, category: 'Utilidad' },
  { name: 'LifeStyle - Acoustic Guitar', id: '3412944806', img: 'https://images.steamusercontent.com/ugc/10633143451105822558/5982DAE45E8AB50D8C9854B053B2D02BFAF091E6/', desc: 'Canciones para la guitarra acústica del mod Lifestyle: Hobbies.', sizeMB: 448.9, category: 'Musica' },
  { name: 'LifeStyle: Guitar - The Last of Us', id: '3421651510', img: 'https://images.steamusercontent.com/ugc/24308846254715046/C509265D18627C86FE18817F661139F2109CB910/', desc: 'Canciones de The Last of Us para la guitarra de Lifestyle.', sizeMB: 31.5, category: 'Musica' },
  { name: 'Lifestyle: Guts Theme', id: '3093045288', img: 'https://images.steamusercontent.com/ugc/16493384222304976121/41A396496A6601827CE8110E69CE896637416C6B/', desc: 'Añade el tema de Guts (Berserk) a las guitarras de Lifestyle.', sizeMB: 19.0, category: 'Musica' },
  { name: 'Lifestyle: Hobbies', id: '3403870858', img: 'https://images.steamusercontent.com/ugc/46824307705561425/9D23804CD161EBEE542045823A6419EED76E9444/', desc: 'Añade aficiones jugables: música, arte, disco y más.', sizeMB: 1366.2, category: 'Ocio' },
  { name: 'Map Legend UI', id: '2710167561', img: 'https://images.steamusercontent.com/ugc/1831278003372708650/CCD99E070163DC62D21FF47673853CAF7B21830A/', desc: 'Añade una leyenda de colores al mapa del mundo.', sizeMB: 0.8, category: 'Interfaz' },
  { name: 'Military Tool Kit', id: '2705406713', img: 'https://images.steamusercontent.com/ugc/10612263466846902078/0B5B38DFBA2063A14A4EDDEEBFF11DFFBBD73126/', desc: 'Herramientas y scripts de soporte para crear vehículos militares.', sizeMB: 30.1, category: 'Utilidad' },
  { name: 'Minecraft True Moozic', id: '3671296143', img: 'https://images.steamusercontent.com/ugc/13119832656252630575/0283C9365DFD0099CF2A1565CA13818175224AEB/', desc: 'Pack de música de Minecraft para True Moozic.', sizeMB: 46.2, category: 'Musica' },
  { name: 'Multiple Safehouse Claims HDRcade', id: '3659823175', img: 'https://images.steamusercontent.com/ugc/13637430037285796157/AF5A6E380CF8FB78855C7490CBF3052718837FB8/', desc: 'Permite reclamar y gestionar varios refugios a la vez.', sizeMB: 0.2, category: 'Jugabilidad' },
  { name: 'NeatUI Framework', id: '3508537032', img: 'https://images.steamusercontent.com/ugc/10778131726246828238/97BFC6401E4E1C4B3AADCEE17D4D86C8FD2713CA/', desc: 'Framework de interfaz ligero requerido por otros mods de UI.', sizeMB: 2.2, category: 'Utilidad' },
  { name: 'Obvious Skill Tapes', id: '3739168410', img: 'https://images.steamusercontent.com/ugc/18179590759922918533/A9CE6F23426E7B71E83B8412988A9A16F97620E2/', desc: 'Resalta en verde las cintas VHS que enseñan habilidades o recetas.', sizeMB: 0.0, category: 'Utilidad' },
  { name: 'Piano Music Lifestyle Addon', id: '3261836947', img: 'https://images.steamusercontent.com/ugc/2464111744114458417/71F40B1AC6AF2E764882D02ACC7A3503E762C3A2/', desc: 'Añade canciones de piano al mod Lifestyle: Hobbies.', sizeMB: 138.9, category: 'Musica' },
  { name: 'Players On Map', id: '2879960936', img: 'https://images.steamusercontent.com/ugc/12634008664513334668/7E5260AD7191F37313C8B2F33D0022AC10C7EC09/', desc: 'Muestra a los jugadores en el mapa y minimapa.', sizeMB: 0.1, category: 'Interfaz' },
  { name: 'Project Arcade', id: '3645980077', img: 'https://images.steamusercontent.com/ugc/13995068762955474501/E2F135E2346345B612AD3C855D0371E93EEC2721/', desc: 'Máquinas recreativas y de pinball jugables por el mundo.', sizeMB: 128.1, category: 'Ocio' },
  { name: 'Raccoon City B42', id: '3388468313', img: 'https://images.steamusercontent.com/ugc/9258230834071997107/9615E6D836CD114C89B4A46E4AA4663B7558FCE3/', desc: 'Nuevo mapa jugable ambientado en Raccoon City.', sizeMB: 111.8, category: 'Mapas' },
  { name: 'Rain Cleans Blood', id: '2956146279', img: 'https://images.steamusercontent.com/ugc/16590947677681455242/0492039769B26BAD08ED7B90FFE045EF00DBDF98/', desc: 'La lluvia limpia la sangre y suciedad del suelo y la ropa.', sizeMB: 2.2, category: 'Jugabilidad' },
  { name: 'Red Library', id: '3705029261', img: 'https://images.steamusercontent.com/ugc/12657808798952192575/E5EBEB06DE255AB377A142D0FB813120496C4321/', desc: 'Librería de funciones base usada por otros mods del autor.', sizeMB: 0.3, category: 'Utilidad' },
  { name: 'Silent Hill Lifestyle Addon', id: '3538308427', img: 'https://images.steamusercontent.com/ugc/17839625234484077728/AD3176BB9F60B29682F06142E781A097D4B71D5D/', desc: 'Añade música de Silent Hill al mod Lifestyle.', sizeMB: 57.1, category: 'Musica' },
  { name: 'Skateboard!', id: '3456675747', img: 'https://images.steamusercontent.com/ugc/17558516599065813/6F642289F2AB4DBBD42A4B606EF588DBF6D2AD53/', desc: 'Añade un monopatín montable para moverte más rápido.', sizeMB: 27.9, category: 'Vehiculos' },
  { name: 'Spanish Female Voice Pack', id: '3469194888', img: 'https://images.steamusercontent.com/ugc/22064018949696688/4EE1FDE0B44326E8A612F5B2570CF9E912BA48A6/', desc: 'Doblaje en español para la voz femenina del personaje.', sizeMB: 10.8, category: 'Ocio' },
  { name: 'Spanish Male Voice Pack', id: '3447058353', img: 'https://images.steamusercontent.com/ugc/22060298959607933/F2F520CBE898BBB2B143773A0B2D4044EB9C1C73/', desc: 'Doblaje en español para la voz masculina del personaje.', sizeMB: 17.0, category: 'Ocio' },
  { name: 'The Only Cure', id: '3580276809', img: 'https://images.steamusercontent.com/ugc/11513100207506273588/B93E91AA540805B6D2C9F44BBC72458690B32817/', desc: 'Permite amputarte tras una mordedura para evitar la infección.', sizeMB: 8.3, category: 'Jugabilidad' },
  { name: 'Time-Period Accurate Music B42', id: '3407139462', img: 'https://images.steamusercontent.com/ugc/7417810976621677/8E08E650F94DAA3EBFCA506CA4145C3926BE61C9/', desc: 'Música de radio y CD acorde a la época de cada canción.', sizeMB: 4656.9, category: 'Musica' },
  { name: 'True Moozic B42+', id: '3632610172', img: 'https://images.steamusercontent.com/ugc/15339090705338025005/D77B3810F3409D0BBEBBCEA330E5CE770FD860E0/', desc: 'Sistema base de música necesario para todos los packs True Moozic.', sizeMB: 80.5, category: 'Musica' },
  { name: 'True Moozic B42.13: Metallica', id: '3640806810', img: 'https://images.steamusercontent.com/ugc/11789837205418415154/C231C85DB6CDBB315B00EED26798CE6F2F9B1886/', desc: 'Pack de canciones de Metallica para True Moozic.', sizeMB: 51.6, category: 'Musica' },
  { name: 'True Moozic: 3 Doors Down', id: '3662743377', img: 'https://images.steamusercontent.com/ugc/10122997341964033809/FD3602B40190D391DD94CB0774E741F54FC0F4D2/', desc: 'Pack de canciones de 3 Doors Down para True Moozic.', sizeMB: 71.6, category: 'Musica' },
  { name: 'True Moozic: ACDC', id: '3662947254', img: 'https://images.steamusercontent.com/ugc/15611704089197121932/CD9260DA6ABB0E5084F0936774AACB4BC2E68D30/', desc: 'Pack de canciones de AC/DC para True Moozic.', sizeMB: 54.9, category: 'Musica' },
  { name: 'True Moozic: Avril Lavigne', id: '3681930271', img: 'https://images.steamusercontent.com/ugc/16516392368822165563/E25C2B7646DF4EC83991D1CE025EB1DEF70843CC/', desc: 'Pack de canciones de Avril Lavigne para True Moozic.', sizeMB: 296.4, category: 'Musica' },
  { name: 'True Moozic: Country Hits', id: '3662741002', img: 'https://images.steamusercontent.com/ugc/12911795369043370972/F2AC5BBB32E5EDB3A0231E2040F0F57AD6DCF29E/', desc: 'Pack de éxitos country para True Moozic.', sizeMB: 613.5, category: 'Musica' },
  { name: 'True Moozic: Daft Punk - Random Access Memories', id: '3658103424', img: 'https://images.steamusercontent.com/ugc/9821215561746638000/2297B2D0755555A9A801C4DD1DA6A2D5AD1A092D/', desc: 'El álbum Random Access Memories de Daft Punk para True Moozic.', sizeMB: 153.1, category: 'Musica' },
  { name: 'True Moozic: DethkloK Jampack', id: '3637950124', img: 'https://images.steamusercontent.com/ugc/17438225934460110916/156DFF6D756FC255A623D3193AAFF8DECAAF2541/', desc: 'Pack de canciones de Dethklok para True Moozic.', sizeMB: 173.6, category: 'Musica' },
  { name: 'True Moozic: Gorillaz', id: '3664004489', img: 'https://images.steamusercontent.com/ugc/15159033253462986683/FF7459726D366FC98BC50512D0847A16C52C25D7/', desc: 'Pack de canciones de Gorillaz para True Moozic.', sizeMB: 88.0, category: 'Musica' },
  { name: 'True Moozic: Green Day', id: '3664652706', img: 'https://images.steamusercontent.com/ugc/18311864813676991668/DD6FB58ED3992C0A2660E6D5A0581306AE777DF8/', desc: 'Pack de canciones de Green Day para True Moozic.', sizeMB: 248.3, category: 'Musica' },
  { name: 'True Moozic: K-Pop Demon Hunters', id: '3686809466', img: 'https://images.steamusercontent.com/ugc/13392645781753923172/6999F7432E52B6F4E1FF5C1CEAD9995DA99BB03D/', desc: 'Álbum de K-Pop Demon Hunters para True Moozic.', sizeMB: 34.2, category: 'Musica' },
  { name: 'True Moozic: Linkin Park - Hybrid Theory', id: '3658181690', img: 'https://images.steamusercontent.com/ugc/17791791634558363974/13155811A14891045A45DB7F6CBBAF0462307CE6/', desc: 'El álbum Hybrid Theory de Linkin Park para True Moozic.', sizeMB: 99.6, category: 'Musica' },
  { name: 'True Moozic: Linkin Park - Meteora', id: '3658169011', img: 'https://images.steamusercontent.com/ugc/10104980904286722200/FE0FF8F4E840315879A026781AF2ECCBF03E2CD2/', desc: 'El álbum Meteora de Linkin Park para True Moozic.', sizeMB: 98.7, category: 'Musica' },
  { name: 'True Moozic: lofimoo Jampack', id: '3635374672', img: 'https://images.steamusercontent.com/ugc/12689463319611977606/A1CF6301FA5A8324A17D20DC802C46A4EADE15E9/', desc: 'Pack de música lofi para True Moozic.', sizeMB: 67.0, category: 'Musica' },
  { name: 'True Moozic: Metal Gear Rising', id: '3684862264', img: 'https://images.steamusercontent.com/ugc/15271275630640627804/055B5D6F99C010FDE79B626020B430FBB1BF5132/', desc: 'Banda sonora de Metal Gear Rising para True Moozic.', sizeMB: 22.0, category: 'Musica' },
  { name: 'True Moozic: Michael Jackson - Thriller', id: '3658781942', img: 'https://images.steamusercontent.com/ugc/12068190173696345660/4572F7DCFFFA2C7FB6B32EFE93206FE4D9DC9E29/', desc: 'El álbum Thriller de Michael Jackson para True Moozic.', sizeMB: 124.7, category: 'Musica' },
  { name: 'True Moozic: MINORTH', id: '3636235926', img: 'https://images.steamusercontent.com/ugc/13658237021660299990/3B39F3D6B09A4CBA5B8C46936BB28276B2CAFAC4/', desc: 'Pack de canciones de Minor Threat para True Moozic.', sizeMB: 12.2, category: 'Musica' },
  { name: 'True Moozic: Need For Speed Underground', id: '3665472935', img: 'https://images.steamusercontent.com/ugc/16587608241758161016/4A21AB8931C03D82679E38A2682CA63853611C80/', desc: 'Banda sonora de Need For Speed Underground para True Moozic.', sizeMB: 283.6, category: 'Musica' },
  { name: 'True Moozic: Need For Speed Underground 2', id: '3665456912', img: 'https://images.steamusercontent.com/ugc/10936166921921373741/038BC5CAF5BA68DB81596A15273CDD925398F028/', desc: 'Banda sonora de Need For Speed Underground 2 para True Moozic.', sizeMB: 202.3, category: 'Musica' },
  { name: 'True Moozic: Official CD Collection', id: '3686548791', img: 'https://images.steamusercontent.com/ugc/9785408110266652791/F306FF9994B285B95D753B4382C9F3E16017875F/', desc: 'CDs de artistas como Metallica, Korn y Slipknot para True Moozic.', sizeMB: 251.5, category: 'Musica' },
  { name: 'True Moozic: Pink Floyd Vinyl', id: '3659009768', img: 'https://images.steamusercontent.com/ugc/13825233572065578238/2D2E39A96BF80F0328A55C272E5703366F6BEE50/', desc: 'Vinilo de The Dark Side of the Moon para True Moozic.', sizeMB: 18.4, category: 'Musica' },
  { name: 'True Moozic: Rammstein Jampack', id: '3642375640', img: 'https://images.steamusercontent.com/ugc/14733175327055398935/DC0E56F30E4C4130EDF68AF9482207C14870E61B/', desc: 'Pack de canciones de Rammstein para True Moozic.', sizeMB: 124.3, category: 'Musica' },
  { name: 'True Moozic: Red Hot Chili Peppers', id: '3662275722', img: 'https://images.steamusercontent.com/ugc/12960098728482932133/7171D2E13C84DBE4FDC68F20825B6452BD9706BA/', desc: 'Pack de canciones de Red Hot Chili Peppers para True Moozic.', sizeMB: 45.5, category: 'Musica' },
  { name: 'True Moozic: Skillet - Awake', id: '3658306222', img: 'https://images.steamusercontent.com/ugc/12250624452743888055/38E91C458BCDC1E70599F54958D92005A0227976/', desc: 'El álbum Awake de Skillet para True Moozic.', sizeMB: 99.0, category: 'Musica' },
  { name: 'True Moozic: SPEGHEDDY', id: '3635321145', img: 'https://images.steamusercontent.com/ugc/16844261406106496115/65972999B9B3EF6615F461678F830FE680FC5EA7/', desc: 'Pack de canciones de Spag Heddy para True Moozic.', sizeMB: 148.8, category: 'Musica' },
  { name: 'True Moozic: Survivor - Eye Of The Tiger', id: '3658791705', img: 'https://images.steamusercontent.com/ugc/16268125287618213931/D2D19C8F0EA96B641C302EF6E88D9CB1E2869D54/', desc: 'Canciones de Survivor para True Moozic.', sizeMB: 96.9, category: 'Musica' },
  { name: 'True Moozic: The Black Parade (My Chemical Romance)', id: '3705115105', img: 'https://images.steamusercontent.com/ugc/12344852677698519354/221BB3BF776E7A94AFBFA7DD093FC5DC28A56F1F/', desc: 'El álbum The Black Parade de My Chemical Romance para True Moozic.', sizeMB: 110.5, category: 'Musica' },
  { name: 'True Moozic: The Hives', id: '3674950795', img: 'https://images.steamusercontent.com/ugc/13733037712691999413/DD87E6C500809A750F1A2E451768D958D10CE43D/', desc: 'Pack de canciones de The Hives para True Moozic.', sizeMB: 89.5, category: 'Musica' },
  { name: 'True Moozic: Video Game Mixtapes', id: '3673701089', img: 'https://images.steamusercontent.com/ugc/10101961085395841058/C31C85EEC7F6C96257CB381336074233D60DEDD8/', desc: '59 mixtapes con bandas sonoras de videojuegos.', sizeMB: 672.1, category: 'Musica' },
  { name: 'TrueMoozic Made in Spain', id: '3715920784', img: 'https://images.steamusercontent.com/ugc/9379193028934776586/491DF24EFF6E751E8E08539E7EE857F0582C8463/', desc: 'Pack de música española clásica para True Moozic.', sizeMB: 318.4, category: 'Musica' },
  { name: 'Vanilla Vehicles Animated', id: '3281755175', img: 'https://images.steamusercontent.com/ugc/2520408817783418351/C71EDD49607F87F26C3C5959011CE3126F513B1A/', desc: 'Añade animaciones a los vehículos vanilla del juego.', sizeMB: 67.9, category: 'Vehiculos' },
  { name: 'Video Game Consoles', id: '2831786301', img: 'https://images.steamusercontent.com/ugc/56957406872548552/16BF3625E6DBE27E9732769A35409A30807E15ED/', desc: 'Consolas retro jugables: Game Boy, NES, SNES, Genesis y más.', sizeMB: 6.7, category: 'Ocio' },
  { name: 'Violin Music Lifestyle Addon', id: '3177585116', img: 'https://images.steamusercontent.com/ugc/16330287175439572108/86878F56497F084C318642CAE3D8BFF43EC7EC91/', desc: 'Añade canciones de violín al mod Lifestyle.', sizeMB: 52.4, category: 'Musica' },
  { name: 'Zombies Ate My Neighbors', id: '3655089193', img: 'https://images.steamusercontent.com/ugc/13058518488101263734/217F67B0E10B6CAD65431FF12F93EF87CB5CC7B0/', desc: 'Cassettes con la banda sonora de Zombies Ate My Neighbors.', sizeMB: 13.9, category: 'Ocio' },
];

const CONFIG_GROUPS = [
  {
    title: 'General',
    items: [
      ['Jugadores máximos', '10'],
      ['Semilla del mapa', 'WVPRSdwloeUSifrw', 'mono'],
      ['Chat de voz', 'Activado (10–300 casillas)'],
      ['Facciones', 'Activadas'],
      ['Copias de seguridad', 'Cada 60 min · 5 más recientes'],
    ],
  },
  {
    title: 'PVP y combate',
    items: [
      ['PVP', 'Desactivado'],
      ['Multi-hit de zombis', 'Activado'],
    ],
  },
  {
    title: 'Refugios',
    items: [
      ['Reclamables por jugadores', 'Sí'],
      ['Edificios no residenciales', 'Sí'],
      ['Entrada sin invitación', 'No'],
      ['Fuego daña refugios', 'No'],
      ['Robar en refugios ajenos', 'No'],
      ['Reaparecer en tu refugio', 'Sí'],
      ['Eliminación por inactividad', '144h sin visitar'],
    ],
  },
  {
    title: 'Supervivencia',
    items: [
      ['Dormir', 'Permitido (no obligatorio)'],
      ['Reaparición de botín', 'Cada 7 días'],
      ['Lectura de libros de habilidad', 'Acelerada (0.1 min/página)'],
    ],
  },
];
